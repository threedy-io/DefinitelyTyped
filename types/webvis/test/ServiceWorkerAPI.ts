function test(testContext: webvis.ContextAPI): void {
    const changeConfigPromise: Promise<void> = testContext.changeServiceWorkerConfig({
        quotaUpperFraction: 0.8,
        quotaLowerFraction: 0.6,
        logLevel: webvis.LogLevel.INFO,
        evictionEnabled: true,
        cachingEnabled: true,
        cacheExpirationMs: 36000,
    });

    const clearPromise: Promise<void> = testContext.clearServiceWorkerCache();

    const clearPromiseParam: Promise<void> = testContext.clearServiceWorkerCache(36000);

    const config: Promise<webvis.ServiceWorkerConfig> = testContext.requestServiceWorkerConfig();

    const resetPromise: Promise<void> = testContext.resetServiceWorkerConfig();

    const cacheStats: Promise<webvis.ServiceWorkerCacheStats> = testContext.requestServiceWorkerStats();

    const isConnected: boolean = testContext.isServiceWorkerConnected();

    const versionInfo: Promise<webvis.ServiceWorkerVersionInfo> = testContext.requestServiceWorkerVersion();

    const isWorkerStale: Promise<boolean> = testContext.isServiceWorkerStale();

    const authCheckEnabled: Promise<boolean> = testContext.isServiceWorkerAuthCheckEnabled();

    testContext.changeSetting(webvis.SettingStrings.LOCAL_CACHE_AUTH_CHECK_ENABLED, true);

    testContext.registerListener(
        [webvis.EventType.SERVICE_WORKER_CONNECTED],
        (event: webvis.ServiceWorkerConnectedEvent) => {
            console.log(
                "ServiceWorker connected",
            );
        },
    );

    testContext.registerListener(
        [webvis.EventType.SERVICE_WORKER_CONFIG_CHANGED],
        (event: webvis.ServiceWorkerConfigChangedEvent) => {
            console.log(
                "ServiceWorker config changed",
                event.config.cacheExpirationMs,
                event.config.cachingEnabled,
                event.config.evictionEnabled,
                event.config.logLevel,
                event.config.quotaLowerFraction,
                event.config.quotaUpperFraction,
            );
        },
    );

    testContext.registerListener(
        [webvis.EventType.SERVICE_WORKER_CACHE_CLEARED],
        (event: webvis.ServiceWorkerCacheClearedEvent) => {
            console.log(
                "ServiceWorker cache cleared",
                event.info.reason,
                event.info.clearedCacheCount,
                event.info.clearedEntryCount,
                event.info.clearedTransferSize,
            );
        },
    );

    testContext.registerListener(
        [webvis.EventType.SERVICE_WORKER_ERROR],
        (event: webvis.ServiceWorkerErrorEvent) => {
            console.log(
                "ServiceWorker error",
                event.info.message,
                event.info.operation,
            );
        },
    );
}
