import {Meta, StoryObj} from "@storybook/vue3";
import Size from '../../../enums/Size.enum';
import AntTextInput from "../AntTextInput.vue";
import {computed} from 'vue';
import {ColorType} from "../../../enums/ColorType.enum";
import {useValidator} from "@antify/validate";
import {Type} from "../../../types/AntTextInput.type";

const meta: Meta<typeof AntTextInput> = {
    title: 'Components/Forms/Ant Text Input',
    component: AntTextInput,
    parameters: {controls: {sort: 'requiredFirst'}},
    argTypes: {
        args: {
            description:
                'Additional attributes will be forwarded to the input directly. This way you can access the default input events.',
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
            table: {defaultValue: {summary: 'this.label'}},
        },
        type: {
            control: {type: 'select'},
            options: Object.values(Type),
            table: {defaultValue: {summary: Type.text}},
        },
    },
};

export default meta;

type Story = StoryObj<typeof AntTextInput>;

export const Docs: Story = {
    render: (args) => ({
        components: {AntTextInput},
        setup() {
            const value = computed({
                get() {
                    return args.value;
                },
                set(val) {
                    args.value = val;
                }
            })

            return {args, value};
        },
        template: '<div class="p-4"><AntTextInput v-bind="args" v-model:value="value" /></div>',
    }),
    args: {
        value: "",
        label: 'Label',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod'
    },
};

export const withValidator: Story = {
    render: Docs.render,
    args: {
        ...Docs.args,
        validator: useValidator([
            (val: string) => val.length > 0 || 'This field should not be empty'
        ])
    },
};

export const limited: Story = {
    render: Docs.render,
    args: {
        ...Docs.args,
        value: "A to long value",
        max: 10,
        limiter: true,
        validator: useValidator([
            (val: string) => val.length <= 10 || 'Max. 10 characters allowed'
        ])
    },
};
