window.globalProvideData('slide', '{"title":"NEFRON","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":1,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide1","width":720,"height":405,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"6EYZmfGOiOi","actionGroups":{"ReviewInt_5cFo3j7TBTT":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6FtOwQJ7o4r"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"67bKAEtmiTT"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6SlH8QoyGpz"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5VyTpSJ7WCZ"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6Es5Cabn7zV"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5sH08g1JjFC"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6iV8x0AfDvc.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5cFo3j7TBTT_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5cFo3j7TBTT_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5cFo3j7TBTT","typea":"var","valueb":"6lp1RjaECkV","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6lp1RjaECkV.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5cFo3j7TBTT"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6lp1RjaECkV.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5cFo3j7TBTT"}]}]}]},"ReviewIntCorrectIncorrect_5cFo3j7TBTT":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6FtOwQJ7o4r"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"67bKAEtmiTT"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6SlH8QoyGpz"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5VyTpSJ7WCZ"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6Es5Cabn7zV"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5sH08g1JjFC"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_5cFo3j7TBTT":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5cFo3j7TBTT"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_5cFo3j7TBTT":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6FtOwQJ7o4r"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"67bKAEtmiTT"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6SlH8QoyGpz"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5VyTpSJ7WCZ"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6Es5Cabn7zV"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5sH08g1JjFC"},"enabled":{"type":"boolean","value":false}}]},"5cFo3j7TBTT_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6iV8x0AfDvc.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6lp1RjaECkV.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5cFo3j7TBTT"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6iV8x0AfDvc.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6iV8x0AfDvc.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5cFo3j7TBTT"}]}]}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_6EYZmfGOiOi":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6kyoPIzxavK"}}]},"NavigationRestrictionPreviousSlide_6EYZmfGOiOi":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00000000001"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6Oyw71JSXAe","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6Oyw71JSXAe","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5cFo3j7TBTT","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_5cFo3j7TBTT"}],"elseActions":[{"kind":"exe_actiongroup","id":"5cFo3j7TBTT_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5cFo3j7TBTT","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5cFo3j7TBTT","typea":"var","valueb":"6lp1RjaECkV","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6lp1RjaECkV"},"completed_slide_ref":{"type":"string","value":"_player.6YQ9PC7nyyC.6kyoPIzxavK"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_5cFo3j7TBTT","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5cFo3j7TBTT","typea":"var","valueb":"6lp1RjaECkV","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6lp1RjaECkV"},"completed_slide_ref":{"type":"string","value":"_player.6YQ9PC7nyyC.6kyoPIzxavK"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6EYZmfGOiOi"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6EYZmfGOiOi"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6feH1cMzzcl"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6QGSqlmJzfs"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6FtOwQJ7o4r"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5sH08g1JjFC"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6SlH8QoyGpz"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Es5Cabn7zV"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5VyTpSJ7WCZ"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6ZZVBEnlVSm"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"65y6HgATro2"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6fkC4hUkfxk"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5XJXMDtw1kU"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5bJNA40ymKZ"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5YDi3QWbBx8"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"61Rc2b2aNwU"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6VxP8K3pAXx"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"60vkRMdt9FE"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"67bKAEtmiTT"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5rweFEgF1kz"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":45,"id":"01","url":"story_content/5X7xlRstrXZ_80_DX1440_DY1440.swf","type":"normal","altText":"37.png","width":1440,"height":810,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":202.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":720,"bottom":405,"altText":"37.png","pngfb":false,"pr":{"l":"Lib","i":10}},"html5data":{"xPos":0,"yPos":0,"width":720,"height":405,"strokewidth":0}},"width":720,"height":405,"resume":true,"useHandCursor":true,"id":"6feH1cMzzcl"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":233,"id":"01","url":"story_content/6i4ggpUqZQi_80_DX416_DY416.swf","type":"normal","altText":"nefron ginjal.png","width":300,"height":307,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":200,"yPos":122,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":101.5,"rotateYPos":104,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":203,"bottom":208,"altText":"nefron ginjal.png","pngfb":false,"pr":{"l":"Lib","i":796}},"html5data":{"xPos":0,"yPos":0,"width":203,"height":208,"strokewidth":0}},"width":203,"height":208,"resume":true,"useHandCursor":true,"id":"6QGSqlmJzfs"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6FtOwQJ7o4r_-1980124180","id":"01","linkId":"txt__default_6FtOwQJ7o4r","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":72,"bottom":34,"pngfb":false,"pr":{"l":"Lib","i":797}}}],"shapemaskId":"","xPos":528,"yPos":82,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":49.5,"rotateYPos":19.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":50,"snapy":20,"dragreturn":false,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5cFo3j7TBTT"],"dragoverids":["_drop_5cFo3j7TBTT"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":101,"bottom":41,"altText":"TKD","pngfb":false,"pr":{"l":"Lib","i":261}},"html5data":{"xPos":0,"yPos":0,"width":100,"height":40,"strokewidth":1}},"width":100,"height":40,"resume":true,"useHandCursor":true,"id":"6FtOwQJ7o4r","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5sH08g1JjFC_1738819327","id":"01","linkId":"txt__default_5sH08g1JjFC","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":88,"bottom":38,"pngfb":false,"pr":{"l":"Lib","i":798}}}],"shapemaskId":"","xPos":528,"yPos":322,"tabIndex":17,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":49.5,"rotateYPos":19.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":50,"snapy":20,"dragreturn":false,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5cFo3j7TBTT"],"dragoverids":["_drop_5cFo3j7TBTT"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":101,"bottom":41,"altText":"Tubulus Kolektivus","pngfb":false,"pr":{"l":"Lib","i":261}},"html5data":{"xPos":0,"yPos":0,"width":100,"height":40,"strokewidth":1}},"width":100,"height":40,"resume":true,"useHandCursor":true,"id":"5sH08g1JjFC","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6SlH8QoyGpz_1240031359","id":"01","linkId":"txt__default_6SlH8QoyGpz","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":89,"bottom":29,"pngfb":false,"pr":{"l":"Lib","i":799}}}],"shapemaskId":"","xPos":528,"yPos":178,"tabIndex":11,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":49.5,"rotateYPos":19.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":50,"snapy":20,"dragreturn":false,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5cFo3j7TBTT"],"dragoverids":["_drop_5cFo3j7TBTT"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":101,"bottom":41,"altText":"Glomerulus","pngfb":false,"pr":{"l":"Lib","i":261}},"html5data":{"xPos":0,"yPos":0,"width":100,"height":40,"strokewidth":1}},"width":100,"height":40,"resume":true,"useHandCursor":true,"id":"6SlH8QoyGpz","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6Es5Cabn7zV_620358335","id":"01","linkId":"txt__default_6Es5Cabn7zV","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":86,"bottom":40,"pngfb":false,"pr":{"l":"Lib","i":800}}}],"shapemaskId":"","xPos":528,"yPos":274,"tabIndex":15,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":49.5,"rotateYPos":19.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":50,"snapy":20,"dragreturn":false,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5cFo3j7TBTT"],"dragoverids":["_drop_5cFo3j7TBTT"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":101,"bottom":41,"altText":"Kapsula Bowman","pngfb":false,"pr":{"l":"Lib","i":261}},"html5data":{"xPos":0,"yPos":0,"width":100,"height":40,"strokewidth":1}},"width":100,"height":40,"resume":true,"useHandCursor":true,"id":"6Es5Cabn7zV","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5VyTpSJ7WCZ_-1103777351","id":"01","linkId":"txt__default_5VyTpSJ7WCZ","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":93,"bottom":40,"pngfb":false,"pr":{"l":"Lib","i":801}}}],"shapemaskId":"","xPos":528,"yPos":226,"tabIndex":12,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":49.5,"rotateYPos":19.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":50,"snapy":20,"dragreturn":false,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5cFo3j7TBTT"],"dragoverids":["_drop_5cFo3j7TBTT"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":101,"bottom":41,"altText":"Lengkung Henle","pngfb":false,"pr":{"l":"Lib","i":261}},"html5data":{"xPos":0,"yPos":0,"width":100,"height":40,"strokewidth":1}},"width":100,"height":40,"resume":true,"useHandCursor":true,"id":"5VyTpSJ7WCZ","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":336,"yPos":122,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":49.5,"rotateYPos":19.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":false,"dropenabled":true,"dragoverenabled":true,"snapx":50,"snapy":20,"dragreturn":true,"multidrop":true,"droptype":"stackrandom","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5cFo3j7TBTT"],"dragoverids":["_drop_5cFo3j7TBTT"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":101,"bottom":41,"altText":"Rectangle 7","pngfb":false,"pr":{"l":"Lib","i":268}},"html5data":{"xPos":0,"yPos":0,"width":100,"height":40,"strokewidth":1}},"width":100,"height":40,"resume":true,"useHandCursor":true,"id":"6ZZVBEnlVSm"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":336,"yPos":274,"tabIndex":14,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":49.5,"rotateYPos":19.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":false,"dropenabled":true,"dragoverenabled":true,"snapx":50,"snapy":20,"dragreturn":true,"multidrop":true,"droptype":"stackrandom","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5cFo3j7TBTT"],"dragoverids":["_drop_5cFo3j7TBTT"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":101,"bottom":41,"altText":"Rectangle 8","pngfb":false,"pr":{"l":"Lib","i":268}},"html5data":{"xPos":0,"yPos":0,"width":100,"height":40,"strokewidth":1}},"width":100,"height":40,"resume":true,"useHandCursor":true,"id":"65y6HgATro2"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":176,"yPos":306,"tabIndex":16,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":49.5,"rotateYPos":19.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":false,"dropenabled":true,"dragoverenabled":true,"snapx":50,"snapy":20,"dragreturn":true,"multidrop":true,"droptype":"stackrandom","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5cFo3j7TBTT"],"dragoverids":["_drop_5cFo3j7TBTT"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":101,"bottom":41,"altText":"Rectangle 10","pngfb":false,"pr":{"l":"Lib","i":268}},"html5data":{"xPos":0,"yPos":0,"width":100,"height":40,"strokewidth":1}},"width":100,"height":40,"resume":true,"useHandCursor":true,"id":"6fkC4hUkfxk"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":168,"yPos":130,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":49.5,"rotateYPos":19.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":11,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":false,"dropenabled":true,"dragoverenabled":true,"snapx":50,"snapy":20,"dragreturn":true,"multidrop":true,"droptype":"stackrandom","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5cFo3j7TBTT"],"dragoverids":["_drop_5cFo3j7TBTT"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":101,"bottom":41,"altText":"Rectangle 9","pngfb":false,"pr":{"l":"Lib","i":268}},"html5data":{"xPos":0,"yPos":0,"width":100,"height":40,"strokewidth":1}},"width":100,"height":40,"resume":true,"useHandCursor":true,"id":"5XJXMDtw1kU"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":112,"yPos":178,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":49.5,"rotateYPos":19.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":12,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":false,"dropenabled":true,"dragoverenabled":true,"snapx":50,"snapy":20,"dragreturn":true,"multidrop":true,"droptype":"stackrandom","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5cFo3j7TBTT"],"dragoverids":["_drop_5cFo3j7TBTT"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":101,"bottom":41,"altText":"Rectangle 11","pngfb":false,"pr":{"l":"Lib","i":268}},"html5data":{"xPos":0,"yPos":0,"width":100,"height":40,"strokewidth":1}},"width":100,"height":40,"resume":true,"useHandCursor":true,"id":"5bJNA40ymKZ"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5YDi3QWbBx8_1918288873","id":"01","linkId":"txt__default_5YDi3QWbBx8","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":452,"bottom":28,"pngfb":false,"pr":{"l":"Lib","i":802}}}],"shapemaskId":"","xPos":56,"yPos":90,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":288,"rotateYPos":15.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":13,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":576,"bottom":31,"altText":"Pasangkanlah bagian nefron ginjal dengan benar!","pngfb":false,"pr":{"l":"Lib","i":269}},"html5data":{"xPos":0,"yPos":0,"width":576,"height":31,"strokewidth":0}},"width":576,"height":31,"resume":true,"useHandCursor":true,"id":"5YDi3QWbBx8"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"61Rc2b2aNwU_353367360","id":"01","linkId":"txt__default_61Rc2b2aNwU","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":281,"bottom":31,"pngfb":false,"pr":{"l":"Lib","i":272}}}],"shapemaskId":"","xPos":96,"yPos":42,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":216,"rotateYPos":17,"scaleX":100,"scaleY":100,"alpha":100,"depth":14,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":432,"bottom":34,"altText":"Mini Games Pasang Organ","pngfb":false,"pr":{"l":"Lib","i":271}},"html5data":{"xPos":0,"yPos":0,"width":432,"height":34,"strokewidth":0}},"width":432,"height":34,"resume":true,"useHandCursor":true,"id":"61Rc2b2aNwU"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6VxP8K3pAXx_-1937867817","id":"01","linkId":"txt__default_6VxP8K3pAXx","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":146,"bottom":32,"pngfb":false,"pr":{"l":"Lib","i":209}}}],"shapemaskId":"","xPos":288,"yPos":338,"tabIndex":18,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":79.5,"rotateYPos":19.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":15,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":161,"bottom":41,"altText":"Kirim Jawaban","pngfb":false,"pr":{"l":"Lib","i":208}},"html5data":{"xPos":0,"yPos":0,"width":160,"height":40,"strokewidth":1}},"width":160,"height":40,"resume":true,"useHandCursor":true,"id":"6VxP8K3pAXx","events":[{"kind":"onrelease","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.6FtOwQJ7o4r.#ItemWasDragged","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_parent.5sH08g1JjFC.#ItemWasDragged","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_parent.5VyTpSJ7WCZ.#ItemWasDragged","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_parent.6Es5Cabn7zV.#ItemWasDragged","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_parent.6SlH8QoyGpz.#ItemWasDragged","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_parent.67bKAEtmiTT.#ItemWasDragged","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_parent.6iV8x0AfDvc"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6ZZVBEnlVSm","typea":"string","valueb":"_parent.6FtOwQJ7o4r.$DropTargetId","typeb":"property"}}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"65y6HgATro2","typea":"string","valueb":"_parent.5sH08g1JjFC.$DropTargetId","typeb":"property"}}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6fkC4hUkfxk","typea":"string","valueb":"_parent.5VyTpSJ7WCZ.$DropTargetId","typeb":"property"}}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5bJNA40ymKZ","typea":"string","valueb":"_parent.6Es5Cabn7zV.$DropTargetId","typeb":"property"}}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5XJXMDtw1kU","typea":"string","valueb":"_parent.6SlH8QoyGpz.$DropTargetId","typeb":"property"}}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"60vkRMdt9FE","typea":"string","valueb":"_parent.67bKAEtmiTT.$DropTargetId","typeb":"property"}}}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6Oyw71JSXAe.InvalidPromptSlide"}}]}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":184,"yPos":258,"tabIndex":13,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":49.5,"rotateYPos":19.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":16,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":false,"dropenabled":true,"dragoverenabled":true,"snapx":50,"snapy":20,"dragreturn":true,"multidrop":true,"droptype":"stackrandom","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5cFo3j7TBTT"],"dragoverids":["_drop_5cFo3j7TBTT"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":101,"bottom":41,"altText":"Rectangle 15","pngfb":false,"pr":{"l":"Lib","i":268}},"html5data":{"xPos":0,"yPos":0,"width":100,"height":40,"strokewidth":1}},"width":100,"height":40,"resume":true,"useHandCursor":true,"id":"60vkRMdt9FE"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"67bKAEtmiTT_1547432953","id":"01","linkId":"txt__default_67bKAEtmiTT","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":72,"bottom":34,"pngfb":false,"pr":{"l":"Lib","i":803}}}],"shapemaskId":"","xPos":528,"yPos":130,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":49.5,"rotateYPos":19.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":17,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":50,"snapy":20,"dragreturn":false,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5cFo3j7TBTT"],"dragoverids":["_drop_5cFo3j7TBTT"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":101,"bottom":41,"altText":"TKP","pngfb":false,"pr":{"l":"Lib","i":261}},"html5data":{"xPos":0,"yPos":0,"width":100,"height":40,"strokewidth":1}},"width":100,"height":40,"resume":true,"useHandCursor":true,"id":"67bKAEtmiTT","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":6,"id":"01","url":"story_content/67TyQ0fSdEE_80_DX106_DY106.swf","type":"normal","altText":"Asset 7.png","width":101,"height":106,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":664,"yPos":11,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":25,"rotateYPos":26.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":18,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":50,"bottom":53,"altText":"Asset 7.png","pngfb":false,"pr":{"l":"Lib","i":5}},"html5data":{"xPos":0,"yPos":0,"width":50,"height":53,"strokewidth":0}},"width":50,"height":53,"resume":true,"useHandCursor":true,"id":"5rweFEgF1kz","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6K2gfTxOdH0.6Q8WbrkvYl7"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5cFo3j7TBTT_IncorrectReview","id":"01","linkId":"5cFo3j7TBTT_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":411,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":79}}}],"shapemaskId":"","xPos":0,"yPos":365,"tabIndex":20,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":19,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":78}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"5cFo3j7TBTT_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5cFo3j7TBTT_CorrectReview","id":"01","linkId":"5cFo3j7TBTT_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":402,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":77}}}],"shapemaskId":"","xPos":0,"yPos":365,"tabIndex":19,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":20,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":76}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"5cFo3j7TBTT_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');