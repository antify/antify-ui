import AntButton from '../AntButton.vue';
import {faCaretRight, faCaretLeft, faPlus} from '@fortawesome/free-solid-svg-icons';
import {Meta, StoryObj} from "@storybook/vue3";
import Size from '../../../enums/Size.enum';
import _Grouped from '../../../enums/Grouped.enum';
import {ButtonColorType} from "../__types/AntButton.type";

const meta: Meta<typeof AntButton> = {
    title: 'Components/Forms/Button',
    component: AntButton,
    parameters: {controls: {sort: 'requiredFirst'}},
    argTypes: {
        colorType: {
            control: {type: 'select'},
            options: Object.values(ButtonColorType),
            table: {defaultValue: {summary: ButtonColorType.neutralLight}},
        },
        grouped: {
            control: {type: 'select'},
            options: Object.values(_Grouped),
            description: 'Where is this fields position in a group',
            table: {defaultValue: {summary: _Grouped.none}},
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
            description: 'If provided transforms the button into an a-tag with the provided link. Style is still the same as a button.',
            table: {type: {summary: 'string|object'}}
        },
        submit: {
            description: 'Change the button type to type="submit"',
        },
    },
};

export default meta;

type Story = StoryObj<typeof AntButton>;

export const Docs: Story = {
    render: (args) => ({
        components: {AntButton},
        setup() {
            return {args};
        },
        template: '<AntButton v-bind="args">Button</AntButton>',
    }),
    args: {},
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
        template: '<AntButton v-bind="args"></AntButton>',
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
        iconLeft: faCaretLeft,
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
        iconLeft: faCaretLeft,
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

export const Expanded: Story = {
    render: Docs.render,
    args: {
        ...Docs.args,
        expanded: true
    },
};

export const WithoutBorder: Story = {
    render: Docs.render,
    args: {
        ...Docs.args,
        outlined: true,
        bordered: false
    },
};
