import AntButton from 'components/buttons/AntButton.vue';
import CloseButton from 'components/buttons/CloseButton.vue';
import CreateButton from 'components/buttons/CreateButton.vue';
import DeleteButton from 'components/buttons/DeleteButton.vue';

import AntDraggable from 'components/dragDrop/AntDraggable.vue';
import AntDropzone from 'components/dragDrop/AntDropzone.vue';

import AntCheckbox from 'components/form/AntCheckbox.vue';
import AntDatePicker from 'components/form/AntDatePicker.vue';
import AntInput from 'components/form/AntInput.vue';
import AntProgress from 'components/form/AntProgress.vue';
import AntRichTextEditor from 'components/form/AntRichTextEditor.vue';
import AntSelect from 'components/form/AntSelect.vue';
import AntTextarea from 'components/form/AntTextarea.vue';
import AntUpload from 'components/form/AntUpload.vue';

import AntLogo from 'components/images/AntLogo.vue';
import AntProfilePicture from 'components/images/AntProfilePicture.vue';

import AntContent from 'components/layout/AntContent.vue';
import AntDualContent from 'components/layout/AntDualContent.vue';
import AntHeader from 'components/layout/AntHeader.vue';
import AntLayout from 'components/layout/AntLayout.vue';
import AntModal from 'components/layout/AntModal.vue';
import AntSidebar from 'components/layout/AntSidebar.vue';

import AntNavigation from 'components/navigation/AntNavigation.vue';
import AntNavItem from 'components/navigation/AntNavItem.vue';
import AntNavProfile from 'components/navigation/AntNavProfile.vue';

import AntDragDropTable from 'components/table/AntDragDropTable.vue';
import AntPagination from 'components/table/AntPagination.vue';
import AntTable from 'components/table/AntTable.vue';

import AntTabs from 'components/tabs/Tabs.vue';

const Plugin = {
  install(vue: any) {
    vue.component(AntButton.name, AntButton);
    vue.component(CloseButton.name, CloseButton);
    vue.component(CreateButton.name, CreateButton);
    vue.component(DeleteButton.name, DeleteButton);props
    vue.component(AntDraggable.name, AntDraggable);
    vue.component(AntDropzone.name, AntDropzone);
    vue.component(AntCheckbox.name, AntCheckbox);
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
  },
};

export default Plugin;
export {
  AntButton,
  CloseButton,
  CreateButton,
  DeleteButton,
  AntDraggable,
  AntDropzone,
  AntCheckbox,
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
};
