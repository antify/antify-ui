import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

/* Base components */
// import {
//     AntAccordion,
//     AntAccordionItem,
//     AntAlert,
//     AntDropdown,
//     AntIcon,
//     AntKeycap,
//     AntListGroup,
//     AntListGroupItem,
//     AntModal,
//     AntPagination,
//     AntPopover,
//     AntSimpleTableFilter,
//     AntSkeleton,
//     AntSpinner,
//     AntTableNav,
//     AntTag,
//     AntToast,
//     AntTooltip,
// } from './components/index';
// import {
//     AntButton,
//     AntDatePicker,
//     AntForm,
//     AntInput,
//     AntNumberInput,
//     AntRangeSlider,
//     AntRichTextEditor,
//     AntSearch,
//     AntSearchField,
//     AntSearchSelect,
//     AntSelect,
//     AntTextarea,
//     AntTextInput,
//     AntToggle,
//     AntUnitInput,
//     AntUpload
// } from './components/form';
// import {
//     AntBaseInput,
//     AntField,
//     AntInputDescription,
//     AntInputLabel,
//     AntInputLimiter,
// } from './components/form/Elements';

// types
import {ROW_TYPES, TableHeader} from './types/TableHeader.type';
import {NavItem} from './types/NavItem.type';
import {RadioButton} from './types/RadioButton.type';
import {TabsType} from './types/Tabs.type';
import {Checkbox} from './types/Checkbox.type';
import {POSITION, TOASTER_TYPE, Toaster} from './types/Toaster.type';

import * as components from './components';
import {App, Component} from "vue";

export const AntifyUi = {
    install(app: App) {
        for (const key in components) {
            app.component(key, (components as Record<string, Component>)[key]);
        }

        // vue.component(AntMediathekItem.name, AntMediathekItem);

        app.component('fa-icon', FontAwesomeIcon);
    },
};

// export default Plugin;
export {
    components,
    ROW_TYPES as ANT_ROW_TYPES,
    POSITION as ANT_TOASTER_POSITION,
    TOASTER_TYPE as ANT_TOASTER_TYPE,
};

export * from './enums';
export * from './types';
export * from './components/__types';
export * from './components/form/__types';
export * from './components/form/Elements/__types';
