function test(): void {
    const onSettingChanged = (event: webvisUI.UISettingChangedEvent) => {
        const test: string = `Setting ${event.setting} changed from ${event.oldValue} to ${event.newValue}`;
    };

    webvisUI.addEventListener("settingchange", onSettingChanged);
    webvisUI.removeEventListener("settingchange", onSettingChanged);

    const onNotification = (event: webvisUI.UINotificationEvent) => {
        const test: string =
            `Notification of type: ${event.type} with level: ${event.level} and message: ${event.message}`;
    };

    webvisUI.addEventListener("notification", onNotification);
    webvisUI.removeEventListener("notification", onNotification);
}
