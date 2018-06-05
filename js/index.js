"use strict";
document.addEventListener('DOMContentLoaded', function () {

    let counter = 0;
    const tree = document.getElementsByClassName('tree-wrapper')[0];
    const createRootButton = document.getElementById('create-root');

    createRootButton.addEventListener('click', function () {
        tree.removeChild(createRootButton);

        document.body.appendChild(createAddModal());
        document.body.appendChild(createDeleteModal());
        document.body.appendChild(createEditModal());

        tree.appendChild(createNode(counter++, "root"));
    });

    //Create node

    function createNode(id, name) {
        const node = document.createElement('ul');
        const nodeContent = document.createElement('li');

        nodeContent.setAttribute('id', `_${id}`);
        nodeContent.setAttribute('class', '');
        nodeContent.textContent = name;
        nodeContent.appendChild(createAddButton());
        nodeContent.appendChild(createDeleteButton());
        nodeContent.appendChild(createEditButton());

        node.appendChild(nodeContent);

        return node;
    }

    //Create buttons

    function createAddButton() {
        const addButton = document.createElement('button');
        const addIcon = document.createElement('span');

        addButton.setAttribute('type', 'button');
        addButton.setAttribute('class', 'add-button btn btn-success btn-xs');
        addButton.setAttribute('data-toggle', 'modal');
        addButton.setAttribute('data-target', '#addModal');

        addIcon.setAttribute('class', 'glyphicon glyphicon-plus');

        addButton.appendChild(addIcon);

        return addButton;
    }

    function createDeleteButton() {
        const deleteButton = document.createElement('button');
        const deleteIcon = document.createElement('span');

        deleteButton.setAttribute('type', 'button');
        deleteButton.setAttribute('class', 'delete-button btn btn-danger btn-xs');
        deleteButton.setAttribute('data-toggle', 'modal');
        deleteButton.setAttribute('data-target', '#deleteModal');

        deleteIcon.setAttribute('class', 'glyphicon glyphicon-minus');

        deleteButton.appendChild(deleteIcon);

        return deleteButton;
    }

    function createEditButton() {
        const editButton = document.createElement('button');
        const editIcon = document.createElement('span');

        editButton.setAttribute('type', 'button');
        editButton.setAttribute('class', 'edit-button btn btn-info btn-xs');
        editButton.setAttribute('data-toggle', 'modal');
        editButton.setAttribute('data-target', '#editModal');

        editIcon.setAttribute('class', 'glyphicon glyphicon-pencil');

        editButton.appendChild(editIcon);

        return editButton;
    }

    //Create modals

    function createAddModal() {
        const modal = document.createElement('div');
        const modalDialog = document.createElement('div');
        const modalContent = document.createElement('div');
        const modalHeader = document.createElement('div');
        const modalHeaderTitle = document.createElement('h3');
        const modalHeaderCloseButton = document.createElement('button');
        const modalHeaderCloseButtonIcon = document.createElement('span');
        const modalBody = document.createElement('div');
        const modalBodyForm = document.createElement('form');
        const modalBodyFormLabel = document.createElement('label');
        const modalBodyFormInput = document.createElement('input');
        const modalFooter = document.createElement('div');
        const modalFooterAddButton = document.createElement('button');
        const modalFooterCloseButton = document.createElement('button');

        modal.setAttribute('class', 'modal fade');
        modal.setAttribute('id', 'addModal');
        modal.setAttribute('tabindex', '-1');
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-labelledby', 'addModalLabel');
        modal.setAttribute('aria-hidden', 'true');

        modalDialog.setAttribute('class', 'modal-dialog');
        modalDialog.setAttribute('role', 'document');

        modalContent.setAttribute('class', 'modal-content');

        modalHeader.setAttribute('class', 'modal-header');

        modalHeaderTitle.setAttribute('class', 'modal-title');
        modalHeaderTitle.setAttribute('id', 'addModalLabel');
        modalHeaderTitle.textContent = "Add new node";

        modalHeaderCloseButton.setAttribute('type', 'button');
        modalHeaderCloseButton.setAttribute('class', 'close');
        modalHeaderCloseButton.setAttribute('data-dismiss', 'modal');
        modalHeaderCloseButton.setAttribute('aria-label', 'Close');

        modalHeaderCloseButtonIcon.setAttribute('aria-hidden', 'true');
        modalHeaderCloseButtonIcon.textContent = "x"

        modalBody.setAttribute('class', 'modal-body');

        modalBodyFormLabel.setAttribute('for', 'node-name');
        modalBodyFormLabel.setAttribute('class', 'col-form-label');
        modalBodyFormLabel.textContent = "Name:";

        modalBodyFormInput.setAttribute('type', 'text');
        modalBodyFormInput.setAttribute('class', 'form-control');
        modalBodyFormInput.setAttribute('id', 'node-name');

        modalFooter.setAttribute('class', 'modal-footer');

        modalFooterAddButton.setAttribute('type', 'button');
        modalFooterAddButton.setAttribute('class', 'btn btn-primary');
        modalFooterAddButton.setAttribute('id', 'addButton');
        modalFooterAddButton.textContent = "Add node";

        modalFooterCloseButton.setAttribute('type', 'button');
        modalFooterCloseButton.setAttribute('class', 'btn btn-secondary');
        modalFooterCloseButton.setAttribute('data-dismiss', 'modal');
        modalFooterCloseButton.textContent = "Cancel";

        modalHeaderCloseButton.appendChild(modalHeaderCloseButtonIcon);
        modalHeader.appendChild(modalHeaderCloseButton);
        modalHeader.appendChild(modalHeaderTitle);

        modalBodyForm.appendChild(modalBodyFormLabel);
        modalBodyForm.appendChild(modalBodyFormInput);
        modalBody.appendChild(modalBodyForm);

        modalFooter.appendChild(modalFooterAddButton);
        modalFooter.appendChild(modalFooterCloseButton);

        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modalContent.appendChild(modalFooter);

        modalDialog.appendChild(modalContent);

        modal.appendChild(modalDialog);

        return modal;
    }

    function createDeleteModal() {
        const modal = document.createElement('div');
        const modalDialog = document.createElement('div');
        const modalContent = document.createElement('div');
        const modalHeader = document.createElement('div');
        const modalHeaderTitle = document.createElement('h3');
        const modalHeaderCloseButton = document.createElement('button');
        const modalHeaderCloseButtonIcon = document.createElement('span');
        const modalBody = document.createElement('div');
        const modalBodyForm = document.createElement('form');
        const modalBodyFormLabel = document.createElement('label');
        const modalFooter = document.createElement('div');
        const modalFooterDeleteButton = document.createElement('button');
        const modalFooterCloseButton = document.createElement('button');

        modal.setAttribute('class', 'modal fade');
        modal.setAttribute('id', 'deleteModal');
        modal.setAttribute('tabindex', '-1');
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-labelledby', 'deleteModalLabel');
        modal.setAttribute('aria-hidden', 'true');

        modalDialog.setAttribute('class', 'modal-dialog');
        modalDialog.setAttribute('role', 'document');

        modalContent.setAttribute('class', 'modal-content');

        modalHeader.setAttribute('class', 'modal-header');

        modalHeaderTitle.setAttribute('class', 'modal-title');
        modalHeaderTitle.setAttribute('id', 'deleteModalLabel');
        modalHeaderTitle.textContent = "Delete confirmation";

        modalHeaderCloseButton.setAttribute('type', 'button');
        modalHeaderCloseButton.setAttribute('class', 'close');
        modalHeaderCloseButton.setAttribute('data-dismiss', 'modal');
        modalHeaderCloseButton.setAttribute('aria-label', 'Close');

        modalHeaderCloseButtonIcon.setAttribute('aria-hidden', 'true');
        modalHeaderCloseButtonIcon.textContent = "x"

        modalBody.setAttribute('class', 'modal-body');

        modalBodyFormLabel.setAttribute('for', 'node-name');
        modalBodyFormLabel.setAttribute('class', 'col-form-label');
        modalBodyFormLabel.textContent = "This is very dangerous, you shouldn`t do it! Are you really really sure?";

        modalFooter.setAttribute('class', 'modal-footer');

        modalFooterDeleteButton.setAttribute('type', 'button');
        modalFooterDeleteButton.setAttribute('class', 'btn btn-primary');
        modalFooterDeleteButton.setAttribute('id', 'deleteButton');
        modalFooterDeleteButton.textContent = "Yes I am";

        modalFooterCloseButton.setAttribute('type', 'button');
        modalFooterCloseButton.setAttribute('class', 'btn btn-secondary');
        modalFooterCloseButton.setAttribute('data-dismiss', 'modal');
        modalFooterCloseButton.textContent = "No";

        modalHeaderCloseButton.appendChild(modalHeaderCloseButtonIcon);
        modalHeader.appendChild(modalHeaderCloseButton);
        modalHeader.appendChild(modalHeaderTitle);

        modalBodyForm.appendChild(modalBodyFormLabel);
        modalBody.appendChild(modalBodyForm);

        modalFooter.appendChild(modalFooterDeleteButton);
        modalFooter.appendChild(modalFooterCloseButton);

        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modalContent.appendChild(modalFooter);

        modalDialog.appendChild(modalContent);

        modal.appendChild(modalDialog);

        return modal;
    }

    function createEditModal() {
        const modal = document.createElement('div');
        const modalDialog = document.createElement('div');
        const modalContent = document.createElement('div');
        const modalHeader = document.createElement('div');
        const modalHeaderTitle = document.createElement('h3');
        const modalHeaderCloseButton = document.createElement('button');
        const modalHeaderCloseButtonIcon = document.createElement('span');
        const modalBody = document.createElement('div');
        const modalBodyForm = document.createElement('form');
        const modalBodyFormLabel = document.createElement('label');
        const modalBodyFormInput = document.createElement('input');
        const modalFooter = document.createElement('div');
        const modalFooterEditButton = document.createElement('button');
        const modalFooterCloseButton = document.createElement('button');

        modal.setAttribute('class', 'modal fade');
        modal.setAttribute('id', 'editModal');
        modal.setAttribute('tabindex', '-1');
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-labelledby', 'editModalLabel');
        modal.setAttribute('aria-hidden', 'true');

        modalDialog.setAttribute('class', 'modal-dialog');
        modalDialog.setAttribute('role', 'document');

        modalContent.setAttribute('class', 'modal-content');

        modalHeader.setAttribute('class', 'modal-header');

        modalHeaderTitle.setAttribute('class', 'modal-title');
        modalHeaderTitle.setAttribute('id', 'editModalLabel');
        modalHeaderTitle.textContent = "Change name";

        modalHeaderCloseButton.setAttribute('type', 'button');
        modalHeaderCloseButton.setAttribute('class', 'close');
        modalHeaderCloseButton.setAttribute('data-dismiss', 'modal');
        modalHeaderCloseButton.setAttribute('aria-label', 'Close');

        modalHeaderCloseButtonIcon.setAttribute('aria-hidden', 'true');
        modalHeaderCloseButtonIcon.textContent = "x";

        modalBody.setAttribute('class', 'modal-body');

        modalBodyFormLabel.setAttribute('for', 'node-name');
        modalBodyFormLabel.setAttribute('class', 'col-form-label');
        modalBodyFormLabel.textContent = "New name:";

        modalBodyFormInput.setAttribute('type', 'text');
        modalBodyFormInput.setAttribute('class', 'form-control');
        modalBodyFormInput.setAttribute('id', 'node-name');

        modalFooter.setAttribute('class', 'modal-footer');

        modalFooterEditButton.setAttribute('type', 'button');
        modalFooterEditButton.setAttribute('class', 'btn btn-primary');
        modalFooterEditButton.setAttribute('id', 'editButton');
        modalFooterEditButton.textContent = "Change name";

        modalFooterCloseButton.setAttribute('type', 'button');
        modalFooterCloseButton.setAttribute('class', 'btn btn-secondary');
        modalFooterCloseButton.setAttribute('data-dismiss', 'modal');
        modalFooterCloseButton.textContent = "Cancel";

        modalHeaderCloseButton.appendChild(modalHeaderCloseButtonIcon);
        modalHeader.appendChild(modalHeaderCloseButton);
        modalHeader.appendChild(modalHeaderTitle);

        modalBodyForm.appendChild(modalBodyFormLabel);
        modalBodyForm.appendChild(modalBodyFormInput);
        modalBody.appendChild(modalBodyForm);

        modalFooter.appendChild(modalFooterEditButton);
        modalFooter.appendChild(modalFooterCloseButton);

        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modalContent.appendChild(modalFooter);

        modalDialog.appendChild(modalContent);

        modal.appendChild(modalDialog);

        return modal;
    }
});