function test(): void {
    webvisUI.addTranslation(webvisUI.Language.ENGLISH, "%test-key", "test-value");
    webvisUI.translate("%test", webvisUI.Language.FRENCH, webvisUI.CircleUnit.RADIUS);
}
