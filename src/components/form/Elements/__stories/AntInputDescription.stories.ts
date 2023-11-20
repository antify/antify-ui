import AntInputDescription from '../AntInputDescription.vue';
import {Meta, StoryObj} from "@storybook/vue3";
import Size from '../../../../enums/Size.enum';
import {InputDescriptionColorType} from "../types/AntInputDescription.type";

const meta: Meta<typeof AntInputDescription> = {
    title: 'Components/Forms/Elements/Ant Input Description',
    component: AntInputDescription,
    parameters: {controls: {sort: 'requiredFirst'}},
    argTypes: {
        args: {
            description:
                'Additional attributes will be forwarded directly. This way you can access the default events.',
        },
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
            options: Object.values(InputDescriptionColorType)
        },
    },
};

export default meta;

type Story = StoryObj<typeof AntInputDescription>;

export const Docs: Story = {
    render: (args) => ({
        components: {AntInputDescription},
        setup() {
            return {args};
        },
        template: '<div class="p-4"><AntInputDescription v-bind="args">Description</AntInputDescription></div>',
    }),
    args: {},
};
