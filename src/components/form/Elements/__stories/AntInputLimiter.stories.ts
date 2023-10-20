import AntInputLimiter from '../AntInputLimiter.vue';
import {Meta, StoryObj} from "@storybook/vue3";
import Size from '../../../../enums/Size.enum';
import {ColorType} from "../../../../enums/ColorType.enum";

const meta: Meta<typeof AntInputLimiter> = {
    title: 'Components/Forms/Elements/Ant Input Limiter',
    component: AntInputLimiter,
    parameters: {controls: {sort: 'requiredFirst'}},
    argTypes: {
        size: {
            control: {type: 'radio'},
            options: Object.values(Size),
            table: {defaultValue: {summary: Size.md}},
        },
        skeleton: {
            control: 'boolean',
            table: {defaultValue: {summary: false}},
        },
        colorType: {
            control: {type: 'select'},
            options: Object.values(ColorType),
            table: {defaultValue: {summary: ColorType.neutral}},
        },
    },
};

export default meta;

type Story = StoryObj<typeof AntInputLimiter>;

export const Docs: Story = {
    render: (args) => ({
        components: {AntInputLimiter},
        setup() {
            return {args};
        },
        template: '<div class="p-4"><AntInputLimiter v-bind="args">Description</AntInputLimiter></div>',
    }),
    args: {
        value: 0,
        maxValue: 10
    },
};
