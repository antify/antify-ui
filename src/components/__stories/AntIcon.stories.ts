import AntIcon from '../AntIcon.vue';
import {Meta, StoryObj} from "@storybook/vue3";
import Size from '../../enums/Size.enum';
import {faTag} from "@fortawesome/free-solid-svg-icons";
import {IconColorType} from "../__types/AntIcon.types";

const meta: Meta<typeof AntIcon> = {
    title: 'Components/Icon',
    component: AntIcon,
    parameters: {controls: {sort: 'requiredFirst'}},
    argTypes: {
        size: {
            control: {type: 'radio'},
            options: Object.values(Size),
        },
        colorType: {
            control: {type: 'select'},
            options: Object.values(IconColorType)
        },
        icon: {
            control: {type: 'none'},
            description:
                'Use Font-awesome Icons.',
        },
    },
};

export default meta;

type Story = StoryObj<typeof AntIcon>;

export const Docs: Story = {
    render: (args) => ({
        components: {AntIcon},
        setup() {
            function logClick() {
                console.log("Clicked close icon")
            }

            return {args, logClick};
        },
        template: '<div class="p-4"><AntIcon v-bind="args" @close="logClick">Tag</AntIcon></div>',
    }),
    args: {
        icon: faTag,
    },
};
export const small: Story = {
    render: Docs.render,
    args: {
        ...Docs.args,
        size: Size.sm,
    },
};
export const colors: Story = {
    render: (args) => ({
        components: {AntIcon},
        setup() {
            return {args, IconColorType};
        },
        template: `
          <div class="p-4">
            <div class="flex items-center gap-1.5">
              <AntIcon v-bind="args" :color-type="IconColorType.base">Tag</AntIcon>
              <span>base</span>
            </div>
            <div class="flex items-center gap-1.5">
              <AntIcon v-bind="args" :color-type="IconColorType.primary">Tag</AntIcon>
              <span>primary</span>
            </div>
            <div class="flex items-center gap-1.5">
              <AntIcon v-bind="args" :color-type="IconColorType.secondary">Tag</AntIcon>
              <span>secondary</span>
            </div>
            <div class="flex items-center gap-1.5">
              <AntIcon v-bind="args" :color-type="IconColorType.danger">Tag</AntIcon>
              <span>danger</span>
            </div>
            <div class="flex items-center gap-1.5">
              <AntIcon v-bind="args" :color-type="IconColorType.info">Tag</AntIcon>
              <span>info</span>
            </div>
            <div class="flex items-center gap-1.5">
              <AntIcon v-bind="args" :color-type="IconColorType.success">Tag</AntIcon>
              <span>success</span>
            </div>
          </div>
        `,
    }),
    args: {
        icon: faTag,
    },
};
