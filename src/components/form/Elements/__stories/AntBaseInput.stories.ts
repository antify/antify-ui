import {Meta, StoryObj} from "@storybook/vue3";
import Size from '../../../../enums/Size.enum';
import {BaseInputColorType, Type} from "../types/AntBaseInput.type";
import AntBaseInput from "../AntBaseInput.vue";
import AntButton from "../../AntButton.vue";
import _Grouped from "../../../../enums/Grouped.enum";
import {useValidator} from '@antify/validate';
import {computed} from "vue";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const meta: Meta<typeof AntBaseInput> = {
    title: 'Components/Forms/Elements/Base Input',
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
            options: Object.values(BaseInputColorType)
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
            table: {defaultValue: {summary: _Grouped.none}},
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
                'Some BaseInputColorTypes can has an icon. Control with this property if it get shown or not.',
            table: {type: {summary: 'Type'}},
        },
        iconLeft: {
            control: {type: 'none'},
            description:
                'Will be displayed left to the input text.<br>Use Font-awesome Icons.',
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

export const IconLeft: Story = {
    render: Docs.render,
    args: {
        ...Docs.args,
        iconLeft: faSearch,
    },
};

export const Summary: Story = {
    render: (args) => ({
        components: {AntBaseInput, AntButton},
        setup: () => {
            const value = computed({
                get() {
                    return args.value;
                },
                set(val) {
                    args.value = val;
                }
            });

            return {args, value, faSearch}
        },
        template: `
          <div class="p-4 pb-10 flex flex-col gap-2">
            <div class="flex gap-2">
              <AntBaseInput v-bind="args" v-model:value="value" color-type="base"/>
              <AntBaseInput v-bind="args" v-model:value="value" color-type="info"/>
              <AntBaseInput v-bind="args" v-model:value="value" color-type="success"/>
              <AntBaseInput v-bind="args" v-model:value="value" color-type="warning"/>
              <AntBaseInput v-bind="args" v-model:value="value" color-type="danger"/>
            </div>

            <div class="flex gap-2">
              <AntBaseInput v-bind="args" value="A value" nullable color-type="base"/>
              <AntBaseInput v-bind="args" value="A value" nullable color-type="info"/>
              <AntBaseInput v-bind="args" value="A value" nullable color-type="success"/>
              <AntBaseInput v-bind="args" value="A value" nullable color-type="warning"/>
              <AntBaseInput v-bind="args" value="A value" nullable color-type="danger"/>
            </div>

            <div class="flex gap-2">
              <AntBaseInput v-bind="args" v-model:value="value" :show-icon="false" color-type="base"/>
              <AntBaseInput v-bind="args" v-model:value="value" :show-icon="false" color-type="info"/>
              <AntBaseInput v-bind="args" v-model:value="value" :show-icon="false" color-type="success"/>
              <AntBaseInput v-bind="args" v-model:value="value" :show-icon="false" color-type="warning"/>
              <AntBaseInput v-bind="args" v-model:value="value" :show-icon="false" color-type="danger"/>
            </div>

            <div class="flex gap-2">
              <AntBaseInput v-bind="args" v-model:value="value" :icon-left="faSearch" color-type="base"/>
              <AntBaseInput v-bind="args" v-model:value="value" :icon-left="faSearch" color-type="info"/>
              <AntBaseInput v-bind="args" v-model:value="value" :icon-left="faSearch" color-type="success"/>
              <AntBaseInput v-bind="args" v-model:value="value" :icon-left="faSearch" color-type="warning"/>
              <AntBaseInput v-bind="args" v-model:value="value" :icon-left="faSearch" color-type="danger"/>
            </div>

            <div class="flex gap-[-2px]">
              <AntBaseInput v-bind="args" v-model:value="value" grouped="left"/>
              <AntBaseInput v-bind="args" v-model:value="value" grouped="center" color-type="danger"/>
              <AntBaseInput v-bind="args" v-model:value="value" grouped="right" color-type="info"/>
            </div>
          </div>`,
    }),
    args: {
        value: '',
        placeholder: 'Placeholder'
    },
};
