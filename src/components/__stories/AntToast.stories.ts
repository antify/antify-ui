import AntToast from '../AntToast.vue';
import {Meta, StoryObj} from "@storybook/vue3";
import {ToastColorType} from "../../types/AntToast.type";

const meta: Meta<typeof AntToast> = {
    title: 'Components/Toast',
    component: AntToast,
    parameters: {controls: {sort: 'requiredFirst'}},
    argTypes: {
        colorType: {
            control: {type: 'select'},
            options: Object.values(ToastColorType),
        }
    },
};

export default meta;

type Story = StoryObj<typeof AntToast>;

export const Docs: Story = {
    render: (args) => ({
        components: {AntToast},
        setup() {
            function logClick() {
                console.log("Clicked close icon")
            }
            function logUndoClick() {
                console.log("Clicked undo button")
            }

            return {args, logClick, logUndoClick};
        },
        template: `
          <div class="p-4">
            <AntToast v-bind="args" @close="logClick" @undo="logUndoClick">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <br/> 
              sed diam nonumy eirmod tempor invidunt <br/>
              ut labore et dolore magna aliquyam erat, <br/>
              sed diam voluptua. At vero eos et accusam et <br/>
              justo duo dolores et ea rebum. Stet clita kasd
            </AntToast>
          </div>
        `,
    }),
    args: {
        title: 'Lorem ipsum dolor',
        showUndo: true
    },
};

export const WithContent: Story = {
    render: Docs.render,
    args: {
        ...Docs.args,
    },
};

export const WithoutContent: Story = {
    render: (args) => ({
        components: Docs.render(args).components,
        setup: Docs.render(args).setup,
        template: `
          <div class="p-4">
            <AntToast v-bind="args" @close="logClick" @undo="logUndoClick"></AntToast>
          </div>
        `,
    }),
    args: {
        ...Docs.args,
        showUndo: false
    },
};