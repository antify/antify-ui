import AntButton from '../AntButton.vue';
import {faCaretRight, faPlus} from '@fortawesome/free-solid-svg-icons';
import {Meta, StoryObj} from "@storybook/vue3";
import Size from '../../../enums/Size.enum';
import _Grouped from '../../../enums/Grouped.enum';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
const meta: Meta<typeof AntButton> = {
    title: 'Components/Forms/Ant Button',
    component: AntButton,
    parameters: {controls: {sort: 'requiredFirst'}},
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        args: {
            description:
                'Additional attributes will be forwarded to the button directly. This way you can access the default button events.',
        },
        color: {
            control: {type: 'select'},
            options: [
                'danger',
                'info',
                'neutral-dark',
                'neutral-light',
                'primary',
                'secondary',
                'success',
                'warning'
            ],
            description: 'The buttons color sheme',
            table: {defaultValue: {summary: 'neutral-light'}},
        },
        grouped: {
            control: {type: 'select'},
            options: Object.values(_Grouped),
            mapping: {
                'none': undefined
            },
            description: 'Which part of a group the button is',
            table: {
                defaultValue: {summary: _Grouped.none},
                type: {summary: 'string'},
            },
        },
        size: {
            control: {type: 'radio'},
            options: Object.values(Size),
            description: 'Defines the size of the button',
            table: {defaultValue: {summary: Size.md}},
        },
        iconLeft: {
            control: {type: 'none'},
            description:
                'Will be displayed left to the label or the default slot.<br>Use Font-awesome Icons.',
        },
        iconRight: {
            control: {type: 'none'},
            description:
                'Will be displayed right to the label or the default slot.<br>Use Font-awesome Icons.',
        },
        to: {
            control: {type: 'LocationAsRelativeRaw'},
            description: 'If provided transforms the button into an a-tag with the provided link. Style is still the same as a button.'
        },
        disabled: {
            control: 'boolean',
            table: {defaultValue: {summary: false}},
        },
        outline: {
            control: 'boolean',
            table: {defaultValue: {summary: false}},
        },
        skeleton: {
            control: 'boolean',
            table: {defaultValue: {summary: false}},
        }
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
export const Docs: Story = {
    render: (args) => ({
        components: {AntButton},
        setup() {
            return {args};
        },
        template: '<div class="p-4"><AntButton v-bind="args">Button</AntButton></div>',
    }),
    args: {
        outline: false,
        disabled: false,
        size: 'md',
        skeleton: false,
        color: 'neutral-light',
        grouped: 'none'
    },
};

export const Link: Story = {
    render: Docs.render,
    args: {
        ...Docs.args,
        to: '/example'
    },
};

export const IconOnly: Story = {
    render: (args) => ({
        components: {AntButton},
        setup() {
            return {args};
        },
        template: '<div class="p-4"><AntButton v-bind="args"></AntButton></div>',
    }),
    args: {
        ...Docs.args,
        iconLeft: faPlus,
    },
};

export const IconLeft: Story = {
    render: Docs.render,
    args: {
        ...Docs.args,
        iconLeft: faCaretRight,
    },
};

export const IconRight: Story = {
    render: Docs.render,
    args: {
        ...Docs.args,
        iconRight: faCaretRight,
    },
};

export const IconLeftAndRight: Story = {
    render: Docs.render,
    args: {
        ...Docs.args,
        iconLeft: faCaretRight,
        iconRight: faCaretRight,
    },
};

export const Grouped: Story = {
    render: Docs.render,
    args: {
        ...Docs.args,
        grouped: 'left'
    },
};

export const Skeleton: Story = {
    render: Docs.render,
    args: {
        ...Docs.args,
        skeleton: true
    },
};
