function test(): void {
    const addDialog: HTMLElement | null = webvisUI.requestDialog("webvis-add-dialog", document.body);
    const aboutDialog: any = webvisUI.getStaticUIElement("webvis-about-dialog");
}
