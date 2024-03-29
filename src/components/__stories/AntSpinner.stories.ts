import AntSpinner from '../AntSpinner.vue';
import {Meta, StoryObj} from '@storybook/vue3';
import {Size} from '../../enums/Size.enum';
import {ColorType} from '../../enums/ColorType.enum';

const meta: Meta<typeof AntSpinner> = {
    title: 'Components/Spinner',
    component: AntSpinner,
    parameters: {controls: {sort: 'requiredFirst'}},
    argTypes: {
        size: {
            control: {type: 'radio'},
            options: Object.values(Size),
            table: {defaultValue: {summary: Size.md}},
        },
        colorType: {
            control: {type: 'select'},
            options: Object.values(ColorType),
        },
        inverted: {
            control: 'boolean',
            table: {defaultValue: {summary: false}},
        }
    },
};

export default meta;

type Story = StoryObj<typeof AntSpinner>;

export const Docs: Story = {
    render: (args) => ({
        components: {AntSpinner},
        setup() {
            return {args};
        },
        template: '<div class="p-4"><AntSpinner v-bind="args" /></div>',
    }),
    args: {},
};
