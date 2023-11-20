import {Meta, StoryObj} from "@storybook/vue3";
import Size from '../../../enums/Size.enum';
import {TextareaColorType} from "../__types/AntTextarea.type";
import AntTextarea from "../AntTextarea.vue";
import AntButton from "../AntButton.vue";
import _Grouped from "../../../enums/Grouped.enum";
import {useValidator} from '@antify/validate';
import {computed} from "vue";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const meta: Meta<typeof AntTextarea> = {
    title: 'Components/Forms/Textarea',
    component: AntTextarea,
    parameters: {controls: {sort: 'requiredFirst'}},
    argTypes: {
        args: {
            description:
                'Additional attributes will be forwarded to the input directly. This way you can access the default input events.',
        },
        value: {
            control: {type: 'text'},
            table: {type: {summary: 'string|null'}},
        },
        colorType: {
            control: {type: 'select'},
            options: Object.values(TextareaColorType)
        },
        size: {
            control: {type: 'radio'},
            options: Object.values(Size),
            table: {defaultValue: {summary: Size.md}},
        },
        placeholder: {
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
                'Some TextareaColorTypes can has an icon. Control with this property if it get shown or not.',
            table: {type: {summary: 'Type'}},
        },
    },
};

export default meta;

type Story = StoryObj<typeof AntTextarea>;

export const Docs: Story = {
    render: (args) => ({
        components: {AntTextarea},
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
        template: '<div class="p-4 pb-10"><AntTextarea v-bind="args" v-model:value="value" /></div>',
    }),
    args: {
        value: '',
        label: 'Label',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod'
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

export const summary: Story = {
    render: (args) => ({
        components: {AntTextarea, AntButton},
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
              <AntTextarea v-bind="args" v-model:value="value" color-type="base"/>
              <AntTextarea v-bind="args" v-model:value="value" color-type="info"/>
              <AntTextarea v-bind="args" v-model:value="value" color-type="success"/>
              <AntTextarea v-bind="args" v-model:value="value" color-type="warning"/>
              <AntTextarea v-bind="args" v-model:value="value" color-type="danger"/>
            </div>

            <div class="flex gap-2">
              <AntTextarea v-bind="args" v-model:value="value" :show-icon="false" color-type="base"/>
              <AntTextarea v-bind="args" v-model:value="value" :show-icon="false" color-type="info"/>
              <AntTextarea v-bind="args" v-model:value="value" :show-icon="false" color-type="success"/>
              <AntTextarea v-bind="args" v-model:value="value" :show-icon="false" color-type="warning"/>
              <AntTextarea v-bind="args" v-model:value="value" :show-icon="false" color-type="danger"/>
            </div>

            <div class="flex gap-2">
              <AntTextarea v-bind="args" v-model:value="value" :icon-left="faSearch" color-type="base"/>
              <AntTextarea v-bind="args" v-model:value="value" :icon-left="faSearch" color-type="info"/>
              <AntTextarea v-bind="args" v-model:value="value" :icon-left="faSearch" color-type="success"/>
              <AntTextarea v-bind="args" v-model:value="value" :icon-left="faSearch" color-type="warning"/>
              <AntTextarea v-bind="args" v-model:value="value" :icon-left="faSearch" color-type="danger"/>
            </div>

            <div class="flex gap-[-2px]">
              <AntTextarea v-bind="args" v-model:value="value" grouped="left"/>
              <AntTextarea v-bind="args" v-model:value="value" grouped="center" color-type="danger"/>
              <AntTextarea v-bind="args" v-model:value="value" grouped="right" color-type="info"/>
            </div>
          </div>`,
    }),
    args: Docs.args,
};
