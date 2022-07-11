'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var AntButton = require('components/buttons/AntButton.vue');
var CloseButton = require('components/buttons/CloseButton.vue');
var CreateButton = require('components/buttons/CreateButton.vue');
var DeleteButton = require('components/buttons/DeleteButton.vue');
var AntDraggable = require('components/dragDrop/AntDraggable.vue');
var AntDropzone = require('components/dragDrop/AntDropzone.vue');
var AntCheckbox = require('components/form/AntCheckbox.vue');
var AntDatePicker = require('components/form/AntDatePicker.vue');
var AntInput = require('components/form/AntInput.vue');
var AntProgress = require('components/form/AntProgress.vue');
var AntRichTextEditor = require('components/form/AntRichTextEditor.vue');
var AntSelect = require('components/form/AntSelect.vue');
var AntTextarea = require('components/form/AntTextarea.vue');
var AntUpload = require('components/form/AntUpload.vue');
var AntLogo = require('components/images/AntLogo.vue');
var AntProfilePicture = require('components/images/AntProfilePicture.vue');
var AntContent = require('components/layout/AntContent.vue');
var AntDualContent = require('components/layout/AntDualContent.vue');
var AntHeader = require('components/layout/AntHeader.vue');
var AntLayout = require('components/layout/AntLayout.vue');
var AntModal = require('components/layout/AntModal.vue');
var AntSidebar = require('components/layout/AntSidebar.vue');
var AntNavigation = require('components/navigation/AntNavigation.vue');
var AntNavItem = require('components/navigation/AntNavItem.vue');
var AntNavProfile = require('components/navigation/AntNavProfile.vue');
var AntDragDropTable = require('components/table/AntDragDropTable.vue');
var AntPagination = require('components/table/AntPagination.vue');
var AntTable = require('components/table/AntTable.vue');
var AntTabs = require('components/tabs/Tabs.vue');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var AntButton__default = /*#__PURE__*/_interopDefaultLegacy(AntButton);
var CloseButton__default = /*#__PURE__*/_interopDefaultLegacy(CloseButton);
var CreateButton__default = /*#__PURE__*/_interopDefaultLegacy(CreateButton);
var DeleteButton__default = /*#__PURE__*/_interopDefaultLegacy(DeleteButton);
var AntDraggable__default = /*#__PURE__*/_interopDefaultLegacy(AntDraggable);
var AntDropzone__default = /*#__PURE__*/_interopDefaultLegacy(AntDropzone);
var AntCheckbox__default = /*#__PURE__*/_interopDefaultLegacy(AntCheckbox);
var AntDatePicker__default = /*#__PURE__*/_interopDefaultLegacy(AntDatePicker);
var AntInput__default = /*#__PURE__*/_interopDefaultLegacy(AntInput);
var AntProgress__default = /*#__PURE__*/_interopDefaultLegacy(AntProgress);
var AntRichTextEditor__default = /*#__PURE__*/_interopDefaultLegacy(AntRichTextEditor);
var AntSelect__default = /*#__PURE__*/_interopDefaultLegacy(AntSelect);
var AntTextarea__default = /*#__PURE__*/_interopDefaultLegacy(AntTextarea);
var AntUpload__default = /*#__PURE__*/_interopDefaultLegacy(AntUpload);
var AntLogo__default = /*#__PURE__*/_interopDefaultLegacy(AntLogo);
var AntProfilePicture__default = /*#__PURE__*/_interopDefaultLegacy(AntProfilePicture);
var AntContent__default = /*#__PURE__*/_interopDefaultLegacy(AntContent);
var AntDualContent__default = /*#__PURE__*/_interopDefaultLegacy(AntDualContent);
var AntHeader__default = /*#__PURE__*/_interopDefaultLegacy(AntHeader);
var AntLayout__default = /*#__PURE__*/_interopDefaultLegacy(AntLayout);
var AntModal__default = /*#__PURE__*/_interopDefaultLegacy(AntModal);
var AntSidebar__default = /*#__PURE__*/_interopDefaultLegacy(AntSidebar);
var AntNavigation__default = /*#__PURE__*/_interopDefaultLegacy(AntNavigation);
var AntNavItem__default = /*#__PURE__*/_interopDefaultLegacy(AntNavItem);
var AntNavProfile__default = /*#__PURE__*/_interopDefaultLegacy(AntNavProfile);
var AntDragDropTable__default = /*#__PURE__*/_interopDefaultLegacy(AntDragDropTable);
var AntPagination__default = /*#__PURE__*/_interopDefaultLegacy(AntPagination);
var AntTable__default = /*#__PURE__*/_interopDefaultLegacy(AntTable);
var AntTabs__default = /*#__PURE__*/_interopDefaultLegacy(AntTabs);

const Plugin = {
    install(vue) {
        vue.component(AntButton__default["default"].name, AntButton__default["default"]);
        vue.component(CloseButton__default["default"].name, CloseButton__default["default"]);
        vue.component(CreateButton__default["default"].name, CreateButton__default["default"]);
        vue.component(DeleteButton__default["default"].name, DeleteButton__default["default"]);
        vue.component(AntDraggable__default["default"].name, AntDraggable__default["default"]);
        vue.component(AntDropzone__default["default"].name, AntDropzone__default["default"]);
        vue.component(AntCheckbox__default["default"].name, AntCheckbox__default["default"]);
        vue.component(AntDatePicker__default["default"].name, AntDatePicker__default["default"]);
        vue.component(AntInput__default["default"].name, AntInput__default["default"]);
        vue.component(AntProgress__default["default"].name, AntProgress__default["default"]);
        vue.component(AntRichTextEditor__default["default"].name, AntRichTextEditor__default["default"]);
        vue.component(AntSelect__default["default"].name, AntSelect__default["default"]);
        vue.component(AntTextarea__default["default"].name, AntTextarea__default["default"]);
        vue.component(AntUpload__default["default"].name, AntUpload__default["default"]);
        vue.component(AntLogo__default["default"].name, AntLogo__default["default"]);
        vue.component(AntProfilePicture__default["default"].name, AntProfilePicture__default["default"]);
        vue.component(AntContent__default["default"].name, AntContent__default["default"]);
        vue.component(AntDualContent__default["default"].name, AntDualContent__default["default"]);
        vue.component(AntHeader__default["default"].name, AntHeader__default["default"]);
        vue.component(AntLayout__default["default"].name, AntLayout__default["default"]);
        vue.component(AntModal__default["default"].name, AntModal__default["default"]);
        vue.component(AntSidebar__default["default"].name, AntSidebar__default["default"]);
        vue.component(AntNavigation__default["default"].name, AntNavigation__default["default"]);
        vue.component(AntNavItem__default["default"].name, AntNavItem__default["default"]);
        vue.component(AntNavProfile__default["default"].name, AntNavProfile__default["default"]);
        vue.component(AntDragDropTable__default["default"].name, AntDragDropTable__default["default"]);
        vue.component(AntPagination__default["default"].name, AntPagination__default["default"]);
        vue.component(AntTable__default["default"].name, AntTable__default["default"]);
        vue.component(AntTabs__default["default"].name, AntTabs__default["default"]);
    },
};

Object.defineProperty(exports, 'AntButton', {
  enumerable: true,
  get: function () { return AntButton__default["default"]; }
});
Object.defineProperty(exports, 'CloseButton', {
  enumerable: true,
  get: function () { return CloseButton__default["default"]; }
});
Object.defineProperty(exports, 'CreateButton', {
  enumerable: true,
  get: function () { return CreateButton__default["default"]; }
});
Object.defineProperty(exports, 'DeleteButton', {
  enumerable: true,
  get: function () { return DeleteButton__default["default"]; }
});
Object.defineProperty(exports, 'AntDraggable', {
  enumerable: true,
  get: function () { return AntDraggable__default["default"]; }
});
Object.defineProperty(exports, 'AntDropzone', {
  enumerable: true,
  get: function () { return AntDropzone__default["default"]; }
});
Object.defineProperty(exports, 'AntCheckbox', {
  enumerable: true,
  get: function () { return AntCheckbox__default["default"]; }
});
Object.defineProperty(exports, 'AntDatePicker', {
  enumerable: true,
  get: function () { return AntDatePicker__default["default"]; }
});
Object.defineProperty(exports, 'AntInput', {
  enumerable: true,
  get: function () { return AntInput__default["default"]; }
});
Object.defineProperty(exports, 'AntProgress', {
  enumerable: true,
  get: function () { return AntProgress__default["default"]; }
});
Object.defineProperty(exports, 'AntRichTextEditor', {
  enumerable: true,
  get: function () { return AntRichTextEditor__default["default"]; }
});
Object.defineProperty(exports, 'AntSelect', {
  enumerable: true,
  get: function () { return AntSelect__default["default"]; }
});
Object.defineProperty(exports, 'AntTextarea', {
  enumerable: true,
  get: function () { return AntTextarea__default["default"]; }
});
Object.defineProperty(exports, 'AntUpload', {
  enumerable: true,
  get: function () { return AntUpload__default["default"]; }
});
Object.defineProperty(exports, 'AntLogo', {
  enumerable: true,
  get: function () { return AntLogo__default["default"]; }
});
Object.defineProperty(exports, 'AntProfilePicture', {
  enumerable: true,
  get: function () { return AntProfilePicture__default["default"]; }
});
Object.defineProperty(exports, 'AntContent', {
  enumerable: true,
  get: function () { return AntContent__default["default"]; }
});
Object.defineProperty(exports, 'AntDualContent', {
  enumerable: true,
  get: function () { return AntDualContent__default["default"]; }
});
Object.defineProperty(exports, 'AntHeader', {
  enumerable: true,
  get: function () { return AntHeader__default["default"]; }
});
Object.defineProperty(exports, 'AntLayout', {
  enumerable: true,
  get: function () { return AntLayout__default["default"]; }
});
Object.defineProperty(exports, 'AntModal', {
  enumerable: true,
  get: function () { return AntModal__default["default"]; }
});
Object.defineProperty(exports, 'AntSidebar', {
  enumerable: true,
  get: function () { return AntSidebar__default["default"]; }
});
Object.defineProperty(exports, 'AntNavigation', {
  enumerable: true,
  get: function () { return AntNavigation__default["default"]; }
});
Object.defineProperty(exports, 'AntNavItem', {
  enumerable: true,
  get: function () { return AntNavItem__default["default"]; }
});
Object.defineProperty(exports, 'AntNavProfile', {
  enumerable: true,
  get: function () { return AntNavProfile__default["default"]; }
});
Object.defineProperty(exports, 'AntDragDropTable', {
  enumerable: true,
  get: function () { return AntDragDropTable__default["default"]; }
});
Object.defineProperty(exports, 'AntPagination', {
  enumerable: true,
  get: function () { return AntPagination__default["default"]; }
});
Object.defineProperty(exports, 'AntTable', {
  enumerable: true,
  get: function () { return AntTable__default["default"]; }
});
Object.defineProperty(exports, 'AntTabs', {
  enumerable: true,
  get: function () { return AntTabs__default["default"]; }
});
exports["default"] = Plugin;
//# sourceMappingURL=index.js.map
