montageDefine("1855034","ui/segmented-bar.reel/segmented-bar.html",{text:'<!DOCTYPE html><html><head>\n    <title></title>\n    <link rel=stylesheet type=text/css href=segmented-bar.css>\n    <script type=text/montage-serialization>{"owner":{"properties":{"element":{"#":"SegmentedBar"}}},"repetition":{"prototype":"ui/repetition.reel","properties":{"element":{"#":"repetition"},"isSelectionEnabled":false},"bindings":{"contentController":{"<-":"@owner._repetitionDataController"}}},":segment":{"alias":"@repetition:iteration","comments":["alias doesn\'t support @repetition:iteration.data","see https://github.com/montagejs/montage/issues/1517"]}}</script>\n</head>\n<body>\n    <div data-montage-id=SegmentedBar class=montage-SegmentedBar>\n        \n        \n        <div data-montage-id=repetition class=montage-SegmentedBar-container>\n            <div data-param=*></div>\n        </div>\n    </div>\n\n\n</body></html>'});