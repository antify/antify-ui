import {Meta, StoryObj} from "@storybook/vue3";
import Size from '../../../../enums/Size.enum';
import {Type} from "../../../../types/AntBaseInput.type";
import AntBaseInput from "../AntBaseInput.vue";
import _Grouped from "../../../../enums/Grouped.enum";
import {ColorType} from "../../../../enums/ColorType.enum";
import {useValidator} from '@antify/validate';
import {computed} from "vue";

const meta: Meta<typeof AntBaseInput> = {
    title: 'Components/Forms/Elements/Ant Base Input',
    component: AntBaseInput,
    parameters: {controls: {sort: 'requiredFirst'}},
    argTypes: {
        args: {
            description:
                'Additional attributes will be forwarded to the input directly. This way you can access the default input events.',
        },
        value: {
            control: {type: 'text'},
            table: {type: {summary: 'string|number|null'}},
        },
        type: {
            control: {type: 'select'},
            options: Object.values(Type),
            table: {defaultValue: {summary: Type.text}},
        },
        colorType: {
            control: {type: 'select'},
            options: Object.values(ColorType),
            table: {defaultValue: {summary: ColorType.neutral}},
        },
        size: {
            control: {type: 'radio'},
            options: Object.values(Size),
            table: {defaultValue: {summary: Size.md}},
        },
        placeholder: {
            control: 'text',
            table: {defaultValue: {summary: 'this.label'}},
        },
        grouped: {
            control: {type: 'select'},
            options: Object.values(_Grouped),
            description: 'Where is this fields position in a group',
            table: { defaultValue: {summary: _Grouped.none}},
        },
        wrapperClass: {
            control: 'text',
            description:
                'Class for the first element because the attribute "class" would affect the input element.',
            table: {type: {summary: 'string|object'}},
        },
        showIcon: {
            control: 'boolean',
            description:
                'Some ColorTypes can has an icon. Control with this property if it get shown or not.',
            table: {type: {summary: 'Type'}},
        },
    },
};

export default meta;

type Story = StoryObj<typeof AntBaseInput>;

export const Docs: Story = {
    render: (args) => ({
        components: {AntBaseInput},
        setup: () => {
            const value = computed({
                get() {
                    return args.value;
                },
                set(val) {
                    args.value = val;
                }
            });

            return {args, value}
        },
        template: '<div class="p-4 pb-10"><AntBaseInput v-bind="args" v-model:value="value" /></div>',
    }),
    args: {
        value: '',
        placeholder: 'Placeholder'
    },
};

export const withValidator: Story = {
    render: Docs.render,
    args: {
        ...Docs.args,
        value: "To long value",
        validator: useValidator((val: unknown) => val.length <= 10 || 'Max. 10 characters allowed')
    },
};
