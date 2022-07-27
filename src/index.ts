import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import AntButton from './components/buttons/AntButton.vue';
import CreateButton from './components/buttons/CreateButton.vue';
import DeleteButton from './components/buttons/DeleteButton.vue';

import AntDraggable from './components/dragDrop/AntDraggable.vue';
import AntDropzone from './components/dragDrop/AntDropzone.vue';

import AntForm from './components/form/AntForm.vue';
import AntPasswordField from './components/form/AntPasswordWidget/AntPasswordField.vue';
import AntPasswordWidget from './components/form/AntPasswordWidget/AntPasswordWidget.vue';
import AntRadio from './components/form/AntRadioWidget/AntRadio.vue';
import AntRadioWidget from './components/form/AntRadioWidget/AntRadioWidget.vue';
import AntLoginWidget from './components/form/AntLoginWidget/AntLoginWidget.vue';
import AntCheckbox from './components/form/AntCheckboxWidget/AntCheckbox.vue';
import AntCheckboxWidget from './components/form/AntCheckboxWidget/AntCheckboxWidget.vue';
import AntDatePicker from './components/form/AntDatePicker.vue';
import AntInput from './components/form/AntInput.vue';
import AntProgress from './components/elements/AntProgress.vue';
import AntRichTextEditor from './components/form/AntRichTextEditor.vue';
import AntSelect from './components/form/AntSelect.vue';
import AntTextarea from './components/form/AntTextarea.vue';
import AntUpload from './components/form/AntUpload.vue';

import AntLogo from './components/images/AntLogo.vue';
import AntProfilePicture from './components/images/AntProfilePicture.vue';

import AntContent from './components/layout/AntContent.vue';
import AntDualContent from './components/layout/AntDualContent.vue';
import AntHeader from './components/layout/AntHeader.vue';
import AntLayout from './components/layout/AntLayout.vue';
import AntModal from './components/layout/AntModal.vue';
import AntSidebar from './components/layout/AntSidebar.vue';
import AntTabs from './components/layout/tabs/AntTabs.vue';
import AntAccordionWidget from './components/layout/AntAccordionWidget/AntAccordionWidget.vue';
import AntAccordionItem from './components/layout/AntAccordionWidget/AntAccordionItem.vue';
import AntLoginLayout from './components/layout/AntLoginLayout.vue';
import AntMediathek from './components/layout/AntMediathek/AntMediathek.vue';

import AntMediathekItem from './components/layout/AntMediathek/AntMediathekItem.vue';

import AntNavigation from './components/navigation/AntNavigation.vue';
import AntNavItem from './components/navigation/AntNavItem.vue';
import AntNavProfile from './components/navigation/AntNavProfile.vue';

import AntDragDropTable from './components/table/AntDragDropTable.vue';
import AntPagination from './components/table/AntPagination.vue';
import AntTable from './components/table/AntTable.vue';

import AntBadge from './components/elements/AntBadge.vue';
import AntBanner from './components/elements/AntBanner.vue';
import AntToaster from './components/elements/AntToaster.vue';

import AntNotFound from './components/pages/AntNotFound.vue';

// types
import { ROW_TYPES, TableHeader } from './types/TableHeader.type';
import { NavItem } from './types/NavItem.type';
import { SelectOption } from './types/SelectOption.type';
import { RadioButton } from './types/RadioButton.type';
import { TabsType } from './types/Tabs.type';
import { Checkbox } from './types/Checkbox.type';
import { POSITION, TOASTER_TYPE, Toaster } from './types/Toaster.type';

export const AntifyUi = {
  install(vue: any) {
    vue.component(AntButton.name, AntButton);
    vue.component(CreateButton.name, CreateButton);
    vue.component(DeleteButton.name, DeleteButton);
    vue.component(AntDraggable.name, AntDraggable);
    vue.component(AntDropzone.name, AntDropzone);
    vue.component(AntForm.name, AntForm);
    vue.component(AntCheckbox.name, AntCheckbox);
    vue.component(AntCheckboxWidget.name, AntCheckboxWidget);
    vue.component(AntDatePicker.name, AntDatePicker);
    vue.component(AntInput.name, AntInput);
    vue.component(AntProgress.name, AntProgress);
    vue.component(AntRichTextEditor.name, AntRichTextEditor);
    vue.component(AntSelect.name, AntSelect);
    vue.component(AntTextarea.name, AntTextarea);
    vue.component(AntUpload.name, AntUpload);
    vue.component(AntLogo.name, AntLogo);
    vue.component(AntProfilePicture.name, AntProfilePicture);
    vue.component(AntContent.name, AntContent);
    vue.component(AntDualContent.name, AntDualContent);
    vue.component(AntHeader.name, AntHeader);
    vue.component(AntLayout.name, AntLayout);
    vue.component(AntModal.name, AntModal);
    vue.component(AntSidebar.name, AntSidebar);
    vue.component(AntNavigation.name, AntNavigation);
    vue.component(AntNavItem.name, AntNavItem);
    vue.component(AntNavProfile.name, AntNavProfile);
    vue.component(AntDragDropTable.name, AntDragDropTable);
    vue.component(AntPagination.name, AntPagination);
    vue.component(AntTable.name, AntTable);
    vue.component(AntTabs.name, AntTabs);
    vue.component(AntBadge.name, AntBadge);
    vue.component(AntBanner.name, AntBanner);
    vue.component(AntToaster.name, AntToaster);
    vue.component(AntAccordionWidget.name, AntAccordionWidget);
    vue.component(AntAccordionItem.name, AntAccordionItem);
    vue.component(AntLoginLayout.name, AntLoginLayout);
    vue.component(AntNotFound.name, AntNotFound);
    vue.component(AntPasswordField.name, AntPasswordField);
    vue.component(AntPasswordWidget.name, AntPasswordWidget);
    vue.component(AntLoginWidget.name, AntLoginWidget);
    vue.component(AntRadio.name, AntRadio);
    vue.component(AntRadioWidget.name, AntRadioWidget);
    vue.component(AntMediathek.name, AntMediathek);
    vue.component(AntMediathekItem.name, AntMediathekItem);

    vue.component('fa-icon', FontAwesomeIcon);
  },
};

// export default Plugin;
export {
  AntButton,
  CreateButton,
  DeleteButton,
  AntDraggable,
  AntDropzone,
  AntForm,
  AntCheckbox,
  AntCheckboxWidget,
  AntDatePicker,
  AntInput,
  AntProgress,
  AntRichTextEditor,
  AntSelect,
  AntTextarea,
  AntUpload,
  AntLogo,
  AntProfilePicture,
  AntContent,
  AntDualContent,
  AntHeader,
  AntLayout,
  AntModal,
  AntSidebar,
  AntNavigation,
  AntNavItem,
  AntNavProfile,
  AntDragDropTable,
  AntPagination,
  AntTable,
  AntTabs,
  AntBadge,
  AntBanner,
  AntToaster,
  AntAccordionWidget,
  AntAccordionItem,
  AntLoginLayout,
  AntNotFound,
  AntPasswordField,
  AntPasswordWidget,
  AntLoginWidget,
  AntRadio,
  AntRadioWidget,
  AntMediathek,
  AntMediathekItem,
  ROW_TYPES as ANT_ROW_TYPES,
  POSITION as ANT_TOASTER_POSITION,
  TOASTER_TYPE as ANT_TOASTER_TYPE,
};

export type AntNavItemType = NavItem;
export type AntTableHeader = TableHeader;
export type AntSelectOption = SelectOption;
export type AntRadioButton = RadioButton;
export type AntTabsType = TabsType;
export type AntCheckboxType = Checkbox;
export type AntToasterType = Toaster;
