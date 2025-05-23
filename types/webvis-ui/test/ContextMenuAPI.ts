function test(): void {
    const testEntry0: webvisUI.ContextMenuEntry = {
        icon: "webvis:info",
        isSeparator: false,
        isVisible: (info: webvisUI.ContextMenuCallbackInfo) => {
            return Promise.resolve(true);
        },
        label: "Test Entry",
        onClick: (info: webvisUI.ContextMenuCallbackInfo) => {
            info.context.addToSelection(info.nodeId || 0);
        },
        onHover: (info: webvisUI.ContextMenuCallbackInfo) => {
            // info.context.setProerty(info.nodeId, webvis.Property.APPEARANCE_URI, "ff0000");
            info.context.setProperty(info.nodeId || 0, "appearanceURI", "ff0000");
        },
    };

    const testEntry1: webvisUI.ContextMenuEntry = {
        isSeparator: true,
    };

    const testEntry2: webvisUI.ContextMenuEntry = {
        icon: "webvis:info",
        isVisible: (info: webvisUI.ContextMenuCallbackInfo) => {
            return Promise.resolve(true);
        },
        label: "Test Entry",
        onClick: (info: webvisUI.ContextMenuCallbackInfo) => {
            info.viewer.fitView();
        },
    };

    const testEntry3: webvisUI.ContextMenuEntry = {
        label: "Test Group",
        subEntries: [
            testEntry0,
            testEntry1,
            testEntry2,
        ],
    };

    webvisUI.setContextMenuEntries([
        testEntry0,
        testEntry1,
        testEntry2,
        testEntry3,
    ]);

    webvisUI.removeContextMenuEntries([
        webvisUI.ContextMenuEntryId.ADD_ANNOTATION,
        webvisUI.ContextMenuEntryId.APPEARANCE,
        webvisUI.ContextMenuEntryId.CLEAR_SELECTION,
    ]);

    webvisUI.restoreContextMenuEntries();
}
