/// <reference types="webvis" />
declare namespace webvisUI {
    enum UISetting {
        /**
         * Enables/disables the Add button in webvis-full
         * @type Boolean
         */
        ADD_BUTTON_ENABLED = "addButtonEnabled",
        /**
         * Enables/Disables content validation for annotations from an untrusted source
         * @type boolean
         */
        ALLOW_ANNOTATIONS_FROM_UNTRUSTED_SOURCE = "allowAnnotationsFromUntrustedSource",
        /**
         * Enables/Disables the Annotation editing on double-click
         * @type String
         */
        ANNOTATION_EDITING_ENABLED = "annotationEditingEnabled",
        /**
         * Label used for branding. It is shown as an HTML link on the viewer and linked to BRANDING_URL.
         * @type String
         */
        BRANDING_LABEL = "brandingLabel",
        /**
         * URL to which the Branding Label points.
         * @type String
         */
        BRANDING_URL = "brandingURL",
        /**
         * Enables/Disables Capping Geometry creation
         * @type Boolean
         */
        CAPPING_CREATION_ENABLED = "cappingCreationEnabled",
        /**
         * Specifies unit used to visualize circle properties.
         * @type CircleUnit
         */
        CIRCLE_UNIT = "circleUnit",
        /** Enables/Disables the default ContextMenu
         * @type boolean
         */
        CONTEXT_MENU_ENABLED = "contextMenuEnabled",
        /**
         * A function to modify the context menu's contents
         * @type Function (names  Array<ContextMenuEntry>)  Array<ContextMenuEntry>
         */
        CONTEXT_MENU_FUNCTION = "contextMenuFunction",
        /**
         * Allows to add custom UI icons
         * @type Object
         */
        CUSTOM_ICON_MAP = "customIconMap",
        /**
         * Custom Toolbar Icons
         * @type string
         */
        CUSTOM_TOOLBAR_ICON_MAP = "customToolbarIconMap",
        /**
         * CustomTreeIconMap
         * @type string
         */
        CUSTOM_TREE_ICON_MAP = "customTreeIconMap",
        /**
         * Mode selection for hovering label
         * @type string
         * @type option : ["NODE_LABEL", "RESOURCE_LABEL"]
         */
        HOVERING_LABEL_MODE = "hoveringLabelMode",
        /**
         * Enables or disables the display of the 3D label tooltip.
         * @type Boolean
         */
        LABEL_TOOLTIP_ENABLED = "labelTooltipEnabled",
        /**
         * A function to define the content of tooltips.
         * @type Function (names : Array<string>)
         */
        LABEL_TOOLTIP_FUNCTION = "labelTooltipFunction",
        /**
         * Sets the language for the UI s.
         * @type LANGUAGE
         */
        LANGUAGE = "language",
        /**
         * Sets the log level for the UI.
         * @type LogLevel
         */
        LOG_LEVEL = "uiLogLevel",
        /**
         * Specifies a function which returns additional content for the modelview printing
         * Function signature is function(context:contextAPI, nodeID:number, modelViewID:number) : Promise<string>
         * @type String
         */
        MODELVIEW_PRINT_CONTENT_FUNCTION = "modelviewPrintContentFunction",
        /**
         * Specifies a function which returns custom name for the resource drop-down of the ModelViewPrintDialog
         * Function signature is function(context:contextAPI, nodeID:number) : Promise<string>
         * @type String
         */
        MODELVIEW_PRINT_RESOURCE_NAME_FUNCTION = "modelviewPrintResourceNameFunction",
        /**
         * Specifies a list of UINotificationLevels which should be displayed.
         * @type UINotificationLevel[]
         */
        NOTIFICATION_FILTER = "notificationFilter",
        /**
         * Enables or disables the automatic opening of the VariantsDialog for added Models which includes Variant information.
         * @type boolean
         */
        OPEN_VARIANTS_DIALOG_ON_NODE_ADD = "openVariantsDialogOnNodeAdd",
        /**
         * Sets the print layout potrait / landscape
         * @type PRINT_LAYOUT
         */
        PRINT_LAYOUT = "printLayout",
        /**
         * Sets the print quality
         * @type PRINT_QUALITY
         */
        PRINT_QUALITY = "printQuality",
        /**
         * Enable/Disable the session storage.
         * @type Boolean
         */
        SESSION_STORAGE_ENABLED = "sessionStorageEnabled",
        /**
         * Enables or disables session sharing
         * @type Boolean
         */
        SHARE_SESSION_ENABLED = "shareSessionEnabled",
        /**
         * The type of the SLAM provider. This is used to provide an easy way to develop AR experiences.
         *
         * Possible Values: "debugIos", "sequence".
         * When "sequence" is selected you can specify additional parameters by appending them with a semicolon:
         *
         * Possible Parameters are:
         * url: Url to manifest.json for imageSequence (escaped url)
         * fps: playback fps for image sequence
         * startFrame: Start Frame for image sequence
         * endFrame: End Frame for image sequence
         *
         * E.g.: sequence;url=<URL-TO-MANIFEST>;fps=30
         * @type string
         */
        SLAM_PROVIDER_TYPE = "slamProviderType",
        /**
         * A filtering function which simply defines whether a node, given as argument, should be visible in the tree view.
         * The function returns false for nodes, which should be hidden. Instead, the children of the affected node
         * will be displayed, unless they are also hidden by the filtering function.
         *
         * The respective node will be shown if it has no children
         *
         * The function can return a boolean or a promise-like returning a boolean.
         *
         * @type Function (node : number) : boolean | Promise<boolean>
         */
        TREEVIEW_FILTER_FUNCTION = "treeViewFilterFunction",
        /**
         * Sets the unit for data inside the webVis UI.
         * @type UNIT
         */
        UNIT = "unit",
        /**
         * Specifies a function which is called when the user clicks on the variants button of a tree item.
         * The specified function overrides the default behavior of opening the standard variant dialog.
         *
         * @type Function (context : webvis.ContextAPI, viewer : webvis.ViewerAPI, nodeId : number) : void
         * @default undefined
         */
        VARIANTS_BUTTON_FUNCTION = "variantsButtonFunction",
    }
    class Event {
        private _type;
        constructor(type: string);
        get type(): string;
    }
    class UISettingChangedEvent extends Event {
        private _setting;
        private _oldValue;
        private _newValue;
        constructor(setting: UISetting, oldValue: any, newValue: any);
        get setting(): UISetting;
        get oldValue(): any;
        get newValue(): any;
    }
    function exportUserSettings(): {
        [key: string]: any;
    };
    function getSetting(setting: UISetting): any;
    function setSetting(setting: UISetting, value: any): boolean;
    enum Language {
        CHINESE = "zh",
        ENGLISH = "en",
        SPANISH = "es",
        FRENCH = "fr",
        GERMAN = "de",
    }
    enum Unit {
        KILOMETER = "km",
        METER = "m",
        DECIMETER = "dm",
        CENTIMETER = "cm",
        MILLIMETER = "mm",
        MILE = "mi",
        YARD = "yd",
        FEET = "ft",
        INCH = "in",
    }
    enum CircleUnit {
        RADIUS = 0,
        DIAMETER = 1,
    }
    enum ContextMenuEntryId {
        SET_PIVOT = 0,
        APPEARANCE = 1,
        CHANGE_APPEARANCE = 2,
        RESET_APPEARANCE = 3,
        FLY_TO = 4,
        VISIBILITY = 5,
        TOGGLE_VISIBILITY = 6,
        HIDE_SELECTED = 7,
        SHOW_ALL = 8,
        HIDE_ALL = 9,
        SELECTION = 10,
        SELECT_ALL = 11,
        CLEAR_SELECTION = 12,
        INVERT_SELECTION = 13,
        SHOW_SELECTION = 14,
        HIDE_SELECTION = 15,
        RENDER_MODES = 16,
        UNSET = 17,
        FACES = 18,
        NODE = 19,
        DELETE = 20,
        NODE_INFO = 21,
        SHOW_METADATA = 22,
        ADD_ANNOTATION = 23,
        AUX = 24,
        SHOW_AUX = 25,
        HIDE_AUX = 26,
        SHOW_AUX_TREE = 27,
        VOLUME = 28,
        BOX_FROM_VOLUME = 29,
        CREATE_EXPLOSION = 30,
        MEASURE_VOLUME = 31,
        CBOX_FROM_VOLUME = 32,
        SBOX_FROM_VOLUME = 33,
        CLIPROOM_FROM_VOLUME = 34,
        RESET_TRANSFORM = 35,
        SET_TRANSFORM = 36,
        OCCLUDER = 37,
        OCCLUDER_TOPOLOGY = 38,
        TOPOLOGY = 39,
        FACES_TOPOLOGY = 40,
        SEPARATOR_1 = 41,
        SEPARATOR_2 = 42,
    }
    type ContextMenuCallbackInfo = {
        /**
         * Reference to the related webvis Context.
         */
        context: webvis.ContextAPI;
        /**
         * Reference to the related webvis Viewer.
         */
        viewer: webvis.ViewerAPI;
        /**
         * The related NodeId if available.
         */
        nodeId?: number;
        /**
         * Additional pointer information like 3d position, 3d normal, etc.
         * Only available if context menu is opened from the 3d view.
         */
        pointerInfo?: webvis.PointerInfo;
        /**
         * Reference to the HTMLElement which triggered the opening of the context menu.
         */
        triggeredBy?: HTMLElement;
    };
    /**
     * Specifies a callback function which is executed if a context menu entry is hovered.
     * @param info - Contains information about the related webvis Context, Viewer, NodeId, etc.
     */
    type ContextMenuHoverCallback = (info: ContextMenuCallbackInfo) => void;
    /**
     * Specifies a callback function which is executed if a context menu entry is clicked.
     * @param info - Contains information about the related webvis Context, Viewer, NodeId, etc.
     */
    type ContextMenuClickCallback = (info: ContextMenuCallbackInfo) => void;
    /**
     * Specifies a callback function which is executed before the context menu opens and can be used to set a dynamic sub entries
     * @param info - Contains information about the related webvis Context, Viewer, NodeId, etc.
     */
    type ContextMenuSubEntryCallback = (info: ContextMenuCallbackInfo) => Promise<ContextMenuEntry[]>;
    /**
     * Specifies a callback function which is executed before the context menu opens and can be used to set a dynamic label for an entry.
     * @param info - Contains information about the related webvis Context, Viewer, NodeId, etc.
     */
    type ContextMenuLabelCallback = (info: ContextMenuCallbackInfo) => Promise<string>;
    /**
     * Specifies a callback function which is executed before the context menu opens and can be used control the visibility of an entry.
     * @param info - Contains information about the related webvis Context, Viewer, NodeId, etc.
     */
    type ContextMenuVisibleCallback = (info: ContextMenuCallbackInfo) => Promise<boolean>;
    type ContextMenuEntry = {
        /**
         * Specifies the label of the context menu entry.
         * The label can be set static or dynamic via a {@link ContextMenuLabelCallback}.
         */
        label?: string | ContextMenuLabelCallback;
        /**
         * Specifies if the context menu entry is handled as a simple separation line.
         * In that case all other properties except for the visible-Callback are ignored.
         *
         * @default false
         */
        isSeparator?: boolean;
        /**
         * Specifies the leading icon of the context menu entry.
         * The Icon is specified as a string which references a custom Icon in the form: custom:my-icon-id
         *
         * @default undefined
         */
        icon?: string;
        /**
         * Specifies a callback function which can be used to hide the context menu entry by a user defined logic.
         *
         * @default undefined
         */
        isVisible?: ContextMenuVisibleCallback;
        /**
         * Specifies a callback function which is executed when the context menu entry is clicked.
         *
         * @default undefined
         */
        onClick?: ContextMenuClickCallback;
        /**
         * Specifies a callback function which is executed when the context menu entry is hovered.
         *
         * @default undefined
         */
        onHover?: ContextMenuHoverCallback;
        /**
         * Specifies a list of sub entries.
         * The sub entries can be set as a static list or as a dynamic list via a {@link ContextMenuSubEntryCallback}.
         *
         * @default undefined
         */
        subEntries?: ContextMenuEntry[] | ContextMenuSubEntryCallback;
    };
    /**
     * Set the new context menu entries.
     *
     * @param entries the new context menu entries
     * @returns the IDs of the added entries
     */
    function setContextMenuEntries(entries: ContextMenuEntry[]): number[];
    /**
     * Add new entries to the context menu.
     *
     * @param entries the entries to add
     * @param index the index at which to insert the entries, if not specified, the entries will be appended to the end
     * @returns the IDs of the added entries
     */
    function addContextMenuEntries(entries: ContextMenuEntry[], index?: number): number[];
    /**
     * Remove entries from the context menu.
     * @param entryIds the IDs of the entries to remove
     */
    function removeContextMenuEntries(entryIds: number[]): void;
    /**
     * Restore the default context menu entries.
     */
    function restoreContextMenuEntries(): void;
    enum UINotificationLevel {
        FATAL = "FATAL",
        ERROR = "ERROR",
        WARNING = "WARNING",
        INFORMATION = "INFORMATION",
        DEBUG = "DEBUG",
        TRACE = "TRACE",
    }
    class UINotificationEvent extends Event {
        private _msg;
        private _level;
        constructor(msg: string, level: UINotificationLevel);
        get message(): string;
        get level(): UINotificationLevel;
    }
    function notifyError(msg: string): void;
    function notifyInfo(msg: string): void;
    function notifyWarning(msg: string): void;
    function addTranslation(lang: Language, key: string, value: string): void;
    function translate(input: string, language?: Language, circleUnit?: CircleUnit): string;
    /**
     * The available LogLevels.
     */
    enum LogLevel {
        SILENT = 0,
        FATAL = 1,
        ERROR = 2,
        WARNING = 3,
        INFO = 4,
        DEBUG = 5,
        TRACE = 6,
    }
    function setLogLevel(logLevel: LogLevel): void;
    function getStaticUIElement(elementName: string): any;
    type EventMap = {
        "notification": UINotificationEvent;
        "settingchange": UISettingChangedEvent;
    };
    function addEventListener<K extends keyof EventMap>(type: K, listener: (event: EventMap[K]) => void): void;
    function removeEventListener<K extends keyof EventMap>(type: K, listener: (event: EventMap[K]) => void): void;
    enum PrintLayout {
        AUTO = "auto",
        PORTRAIT = "portrait",
        LANDSCAPE = "landscape",
    }
    enum PrintQuality {
        AUTO = "auto",
        LOW = "low",
        MEDIUM = "medium",
        HIGH = "high",
    }
    enum HoverLabelMode {
        NODE_LABEL = 0,
        ROOT_LABEL = 1,
    }
}
