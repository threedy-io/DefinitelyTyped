function test(): void {
    webvisUI.setSetting(webvisUI.UISetting.LANGUAGE, webvisUI.Language.ENGLISH);
    webvisUI.setSetting(webvisUI.UISetting.PRINT_LAYOUT, webvisUI.PrintLayout.LANDSCAPE);
    webvisUI.setSetting(webvisUI.UISetting.PRINT_QUALITY, webvisUI.PrintQuality.HIGH);
    webvisUI.setSetting(webvisUI.UISetting.UNIT, webvisUI.Unit.MILLIMETER);

    const language: webvisUI.Language = webvisUI.getSetting(webvisUI.UISetting.LANGUAGE);

    const userSettings: { [key: string]: any } = webvisUI.exportUserSettings();
}
