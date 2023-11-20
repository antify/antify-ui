import AntSkeleton from '../AntSkeleton.vue';
import {Meta, StoryObj} from "@storybook/vue3";
import _Grouped from "../../enums/Grouped.enum";

const meta: Meta<typeof AntSkeleton> = {
    title: 'Components/Skeleton',
    component: AntSkeleton,
    argTypes: {
        grouped: {
            control: {type: 'select'},
            options: Object.values(_Grouped),
            description: 'Where is this fields position in a group',
            table: {defaultValue: {summary: _Grouped.none}},
        },
    },
};

export default meta;

type Story = StoryObj<typeof AntSkeleton>;

export const Docs: Story = {
    render: (args) => ({
        components: {AntSkeleton},
        setup() {
            return {args};
        },
        template: '<div class="p-4"><AntSkeleton v-bind="args" class="h-5 w-full" /></div>',
    }),
    args: {},
};

export const Rounded: Story = {
    render: Docs.render,
    args: {
        ...Docs.args,
        rounded: true
    },
};

export const Grouped: Story = {
    render: Docs.render,
    args: {
        ...Docs.args,
        grouped: 'left'
    },
};
