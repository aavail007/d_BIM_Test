const fakeMenuList = `
&lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/li&gt; &lt;li id="liMenu2" class="nav-item dropdown bigmenu" data-href="https://college.itri.org.tw//Home/InfoData?infNo=13b1294f-3c35-433e-9b47-36e2d61c0f84&amp;grfNo=f6e19f2d-f81c-421c-bc36-ea6409ba0a5d"&gt; &lt;a class="nav-link dropdown-toggle arrow-none pr-3" href="https://college.itri.org.tw//Home/InfoData?infNo=13b1294f-3c35-433e-9b47-36e2d61c0f84&amp;grfNo=f6e19f2d-f81c-421c-bc36-ea6409ba0a5d" id="topnav-dashboards" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" mnuno="a69ad490-1cac-43b8-adac-9554fdc9a6b0" title="精選主題 頁"&gt; 精選主題 &lt;div class="arrow-down"&gt;&lt;/div&gt;&lt;/a&gt;&lt;div id="divLevel4" class="dropdown-menu menu_hover dropdown-menu-animated" aria-labelledby="navbarDropdown"&gt; &lt;div class="bid_menu"&gt; &lt;div class="row"&gt; &lt;div class="col-lg-4 col-xl-3 mt-1"&gt; &lt;div class="row"&gt; &lt;div class="col-12"&gt; &lt;div class="row"&gt;&lt;div class="col-12"&gt; &lt;a class="nav-link a_title" href = "https://college.itri.org.tw//Home/ProgramList?grfNo=c129ef5c-1df9-4042-bc6a-5a4fef7cc91a&amp;typeMgdNo=7f47b9fe-9eb9-46fa-9581-53e3fc2e94d9&amp;TypeCode=6" title="智慧資通訊 功能"&gt; 智慧資通訊&lt;/a &gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;div class="col-lg-4 col-xl-3 mt-1"&gt; &lt;div class="row"&gt; &lt;div class="col-12"&gt; &lt;div class="row"&gt;&lt;div class="col-12"&gt; &lt;a class="nav-link a_title" href = "https://college.itri.org.tw//Home/ProgramList?grfNo=c129ef5c-1df9-4042-bc6a-5a4fef7cc91a&amp;typeMgdNo=c94f0076-3d20-446c-9ceb-ba8465840855&amp;TypeCode=6" title="智慧機械 功能"&gt; 智慧機械&lt;/a &gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;div class="col-lg-4 col-xl-3 mt-1"&gt; &lt;div class="row"&gt; &lt;div class="col-12"&gt; &lt;div class="row"&gt;&lt;div class="col-12"&gt; &lt;a class="nav-link a_title" href = "https://college.itri.org.tw//Home/ProgramList?grfNo=c129ef5c-1df9-4042-bc6a-5a4fef7cc91a&amp;typeMgdNo=8c296907-acd2-4ed4-aaa2-79fb4bf02a18&amp;TypeCode=6" title="生技醫藥 功能"&gt; 生技醫藥&lt;/a &gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;div class="col-lg-4 col-xl-3 mt-1"&gt; &lt;div class="row"&gt; &lt;div class="col-12"&gt; &lt;div class="row"&gt;&lt;div class="col-12"&gt; &lt;a class="nav-link a_title" href = "https://college.itri.org.tw//Home/ProgramList?grfNo=c129ef5c-1df9-4042-bc6a-5a4fef7cc91a&amp;typeMgdNo=05376ffb-8dd0-4beb-b1fe-4a2be531a5b3&amp;TypeCode=6" title="智慧電網與綠能 功能"&gt; 智慧電網與綠能&lt;/a &gt; &lt;/div&gt; &lt;div class="nav flex-column col-6"&gt; &lt;div class="nav-item"&gt;&lt;a class="nav-link" href="https://college.itri.org.tw/powerschool/" title="電網學校 頁"target="_blank"&gt;電網學校&lt;/a&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;div class="col-lg-4 col-xl-3 mt-1"&gt; &lt;div class="row"&gt; &lt;div class="col-12"&gt; &lt;div class="row"&gt;&lt;div class="col-12"&gt; &lt;a class="nav-link a_title" href = "https://college.itri.org.tw//Home/ProgramList?grfNo=c129ef5c-1df9-4042-bc6a-5a4fef7cc91a&amp;typeMgdNo=826c7bb2-6183-43fb-8afc-1f2d91b5f2cc&amp;TypeCode=6" title="淨零永續 功能"&gt; 淨零永續&lt;/a &gt; &lt;/div&gt; &lt;div class="nav flex-column col-6"&gt; &lt;div class="nav-item"&gt;&lt;a class="nav-link" href="/nzschool/" title="淨零永續學校 頁"target="_blank"&gt;淨零永續學校&lt;/a&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;div class="col-lg-4 col-xl-3 mt-1"&gt; &lt;div class="row"&gt; &lt;div class="col-12"&gt; &lt;div class="row"&gt;&lt;div class="col-12"&gt; &lt;a class="nav-link a_title" href = "https://college.itri.org.tw//Home/ProgramList?grfNo=c129ef5c-1df9-4042-bc6a-5a4fef7cc91a&amp;typeMgdNo=7f0ff14d-f7a5-4895-a560-4a49fe5574cb&amp;TypeCode=6" title="科技管理 功能"&gt; 科技管理&lt;/a &gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;div class="col-lg-4 col-xl-3 mt-1"&gt; &lt;div class="row"&gt; &lt;div class="col-12"&gt; &lt;div class="row"&gt;&lt;div class="col-12"&gt; &lt;a class="nav-link a_title" href = "https://college.itri.org.tw//Home/ProgramList?grfNo=c129ef5c-1df9-4042-bc6a-5a4fef7cc91a&amp;typeMgdNo=aef42517-0e54-414c-8b52-37dc6fd5fff5&amp;TypeCode=6" title="產業新尖兵養成 功能"&gt; 產業新尖兵養成&lt;/a &gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/li&gt; &lt;li id="liMenu3" class="nav-item dropdown bigmenu" data-href="https://college.itri.org.tw//Home/InfoData?infNo=00000000-0000-0000-0000-000000000000&amp;grfNo=f6e19f2d-f81c-421c-bc36-ea6409ba0a5d"&gt; &lt;a class="nav-link dropdown-toggle arrow-none pr-3" href="https://college.itri.org.tw//Home/InfoData?infNo=00000000-0000-0000-0000-000000000000&amp;grfNo=f6e19f2d-f81c-421c-bc36-ea6409ba0a5d" id="topnav-dashboards" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" mnuno="d6430c6a-0cf6-4cc2-8965-aa10136bf7c0" title="學習專欄 頁"&gt; 學習專欄 &lt;div class="arrow-down"&gt;&lt;/div&gt;&lt;/a&gt;&lt;div id="divLevel4" class="dropdown-menu menu_hover dropdown-menu-animated" aria-labelledby="navbarDropdown"&gt; &lt;div class="bid_menu"&gt; &lt;div class="row"&gt; &lt;div class="col-lg-4 col-xl-3 mt-1"&gt; &lt;div class="row"&gt; &lt;div class="col-12"&gt; &lt;div class="row"&gt;&lt;a class="nav-link a_title" href = "https://college.itri.org.tw//Home/InfoList?MnuNo=e4265210-a87d-499e-b5d6-0d1eea953e4d&amp;grfNo=f6e19f2d-f81c-421c-bc36-ea6409ba0a5d&amp;typeMgdNo=9d61350c-f016-4cbf-aba2-9f94ed6a63ff&amp;TypeCode=6" title="科技新知 功能"&gt; 科技新知&lt;/a &gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;div class="col-lg-4 col-xl-3 mt-1"&gt; &lt;div class="row"&gt; &lt;div class="col-12"&gt; &lt;div class="row"&gt;&lt;a class="nav-link a_title" href = "https://college.itri.org.tw//Home/InfoList?MnuNo=d06fd98e-d6b2-4c1c-ac41-152b13974401&amp;grfNo=f6e19f2d-f81c-421c-bc36-ea6409ba0a5d&amp;typeMgdNo=aec39b08-ed73-4cd4-b954-4619cb30150f&amp;TypeCode=6" title="人才焦點新聞 功能"&gt; 人才焦點新聞&lt;/a &gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;div class="col-lg-4 col-xl-3 mt-1"&gt; &lt;div class="row"&gt; &lt;div class="col-12"&gt; &lt;div class="row"&gt;&lt;a class="nav-link a_title" href = "https://college.itri.org.tw//Home/InfoList?MnuNo=c7ac5629-4d68-4276-b71f-bf568729fecc&amp;grfNo=f6e19f2d-f81c-421c-bc36-ea6409ba0a5d&amp;typeMgdNo=72b9690f-2db1-4acf-9ab1-c6ffcadd8c93&amp;TypeCode=6" title="人才洞察 功能"&gt; 人才洞察&lt;/a &gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;div class="col-lg-4 col-xl-3 mt-1"&gt; &lt;div class="row"&gt; &lt;div class="col-12"&gt; &lt;div class="row"&gt;&lt;a class="nav-link a_title" href = "https://college.itri.org.tw//Home/InfoList?MnuNo=6dfe410a-d610-4a40-9e80-68dd73262f43&amp;grfNo=f6e19f2d-f81c-421c-bc36-ea6409ba0a5d&amp;typeMgdNo=51ac6252-1e4a-4e74-85b0-e997f05e6155&amp;TypeCode=6" title="歷史月報 功能"&gt; 歷史月報&lt;/a &gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/li&gt; &lt;li id="liMenu4" class="nav-item dropdown bigmenu" data-href="https://college.itri.org.tw//Home/InfoData?infNo=00000000-0000-0000-0000-000000000000&amp;grfNo=dec3c452-1a1e-4fc0-87b2-bd43f2163812"&gt; &lt;a class="nav-link dropdown-toggle arrow-none pr-3" href="https://college.itri.org.tw//Home/InfoData?infNo=00000000-0000-0000-0000-000000000000&amp;grfNo=dec3c452-1a1e-4fc0-87b2-bd43f2163812" id="topnav-dashboards" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" mnuno="1f92bd1e-faaf-4513-8ad8-bc7428716c4d" title="企業服務 頁"&gt; 企業服務 &lt;div class="arrow-down"&gt;&lt;/div&gt;&lt;/a&gt;&lt;div id="divLevel4" class="dropdown-menu menu_hover dropdown-menu-animated" aria-labelledby="navbarDropdown"&gt; &lt;div class="bid_menu"&gt; &lt;div class="row"&gt; &lt;div class="col-lg-4 col-xl-3 mt-1"&gt; &lt;div class="row"&gt; &lt;div class="col-12"&gt; &lt;div class="row"&gt;&lt;a class="nav-link a_title" href="https://college.itri.org.tw//Home/InfoData?infNo=fc1c57fd-37f4-4de9-8bfa-d6589dba3b16&amp;grfNo=dec3c452-1a1e-4fc0-87b2-bd43f2163812" title="企業方案 功能"&gt;企業方案&lt;/a&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;div class="col-lg-4 col-xl-3 mt-1"&gt; &lt;div class="row"&gt; &lt;div class="col-12"&gt; &lt;div class="row"&gt;&lt;a class="nav-link a_title" href="https://college.itri.org.tw//Home/InfoData?infNo=f4f1ec6a-e295-400a-8f7c-b5b50bac4cf8&amp;grfNo=dec3c452-1a1e-4fc0-87b2-bd43f2163812" title="人才發展與鑑定 功能"&gt;人才發展與鑑定&lt;/a&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;div class="col-lg-4 col-xl-3 mt-1"&gt; &lt;div class="row"&gt; &lt;div class="col-12"&gt; &lt;div class="row"&gt;&lt;a class="col-12 nav-link a_title" href="https://www.italent.org.tw/ePaperM/9/99" title="人才快訊 功能" target="_blank"&gt;人才快訊&lt;/a&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;div class="col-lg-4 col-xl-3 mt-1"&gt; &lt;div class="row"&gt; &lt;div class="col-12"&gt; &lt;div class="row"&gt;&lt;a class="nav-link a_title" href="https://college.itri.org.tw//Home/InfoData?infNo=a43e5ea7-e0bf-4587-ab38-ca8d91535153&amp;grfNo=dec3c452-1a1e-4fc0-87b2-bd43f2163812" title="人員創新力評鑑系統 功能"&gt;人員創新力評鑑系統&lt;/a&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;div class="col-lg-4 col-xl-3 mt-1"&gt; &lt;div class="row"&gt; &lt;div class="col-12"&gt; &lt;div class="row"&gt;&lt;a class="nav-link a_title" href = "https://college.itri.org.tw//Home/InfoList?MnuNo=6d36c71b-a21e-47f6-b415-ae64d4f4689e&amp;grfNo=50fccc9f-787d-4598-90ed-c70e8d22ca4e&amp;typeMgdNo=0bd6698f-33b7-49e6-b524-7d090a69076b&amp;TypeCode=6" title="學習據點 功能"&gt; 學習據點&lt;/a &gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/li&gt; &lt;li id="liMenu5" class="nav-item dropdown bigmenu" data-href=""&gt; &lt;a class="nav-link dropdown-toggle arrow-none pr-3" href="#" id="topnav-dashboards" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" mnuno="ba69741f-6f1f-4eb5-a18a-4032104bd4eb"&gt; 最新消息&lt;div class="arrow-down"&gt;&lt;/div&gt;&lt;/a&gt;&lt;div id="divLevel4" class="dropdown-menu menu_hover dropdown-menu-animated" aria-labelledby="navbarDropdown"&gt; &lt;div class="bid_menu"&gt; &lt;div class="row"&gt; &lt;div class="col-lg-4 col-xl-3 mt-1"&gt; &lt;div class="row"&gt; &lt;div class="col-12"&gt; &lt;div class="row"&gt;&lt;div class="w-100"&gt; &lt;a class="nav-link a_title" href="https://college.itri.org.tw//Home/InfoList?MnuNo=7b1029cf-3465-48b6-948c-50c199d5dece&amp;grfNo=b0dc77ad-2b1a-495e-9ffd-1d0629e3bdf8&amp;TypeCode=2" title="最新消息 功能"&gt;最新消息&lt;/a&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;div class="col-lg-4 col-xl-3 mt-1"&gt; &lt;div class="row"&gt; &lt;div class="col-12"&gt; &lt;div class="row"&gt;&lt;a class="nav-link a_title" href="https://college.itri.org.tw//Home/InfoData?infNo=5c9508a0-76fb-455e-b4d1-376b4951b76b&amp;grfNo=b0dc77ad-2b1a-495e-9ffd-1d0629e3bdf8" title="防疫公告 功能"&gt;防疫公告&lt;/a&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;div class="col-lg-4 col-xl-3 mt-1"&gt; &lt;div class="row"&gt; &lt;div class="col-12"&gt; &lt;div class="row"&gt;&lt;a class="nav-link a_title" href="https://college.itri.org.tw//Home/InfoData?infNo=5b22f3a7-93d2-4015-a85d-afe3a879d37a&amp;grfNo=b0dc77ad-2b1a-495e-9ffd-1d0629e3bdf8" title="新版須知 功能"&gt;新版須知&lt;/a&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;div class="col-lg-4 col-xl-3 mt-1"&gt; &lt;div class="row"&gt; &lt;div class="col-12"&gt; &lt;div class="row"&gt;&lt;div class="w-100"&gt; &lt;a class="nav-link a_title" href="https://college.itri.org.tw//Home/InfoList?MnuNo=57667336-598a-4b49-b648-69943de4e15a&amp;grfNo=ea678da6-f09a-4c30-928a-e377732c0604&amp;TypeCode=2" title="新聞報導 功能"&gt;新聞報導&lt;/a&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/li&gt; &lt;li id="liMenu6" class="nav-item dropdown bigmenu" data-href=""&gt; &lt;a class="nav-link dropdown-toggle arrow-none pr-3" href="#" id="topnav-dashboards" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" mnuno="56c857aa-bc4a-4244-9cef-f5b2814ad5ef"&gt; 影音專區&lt;div class="arrow-down"&gt;&lt;/div&gt;&lt;/a&gt;&lt;div id="divLevel4" class="dropdown-menu menu_hover dropdown-menu-animated" aria-labelledby="navbarDropdown"&gt; &lt;div class="bid_menu"&gt; &lt;div class="row"&gt; &lt;div class="col-lg-4 col-xl-3 mt-1"&gt; &lt;div class="row"&gt; &lt;div class="col-12"&gt; &lt;div class="row"&gt;&lt;div class="w-100"&gt; &lt;a class="nav-link a_title" href="https://college.itri.org.tw//Home/InfoList?MnuNo=6654b484-89f8-4208-b137-44dd9e876649&amp;grfNo=15031f82-cead-4ec2-bebe-f8822c671034&amp;TypeCode=2" title="直播頻道 功能"&gt;直播頻道&lt;/a&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;div class="col-lg-4 col-xl-3 mt-1"&gt; &lt;div class="row"&gt; &lt;div class="col-12"&gt; &lt;div class="row"&gt;&lt;div class="w-100"&gt; &lt;a class="nav-link a_title" href="https://college.itri.org.tw//Home/InfoList?MnuNo=e6e2b24f-b607-48f2-a778-b0fe37b13d8c&amp;grfNo=6bddce53-b09c-4be6-8fff-42bb45731231&amp;TypeCode=2" title="會員專屬 功能"&gt;會員專屬&lt;/a&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;div class="col-lg-4 col-xl-3 mt-1"&gt; &lt;div class="row"&gt; &lt;div class="col-12"&gt; &lt;div class="row"&gt;&lt;div class="w-100"&gt; &lt;a class="nav-link a_title" href="https://college.itri.org.tw//Home/InfoList?MnuNo=6d8042fb-b60c-4706-8ced-a6962ef9a785&amp;grfNo=9336e04d-93f4-40a4-a9e8-4b2d91c6e996&amp;TypeCode=2" title="限閱獨享 功能"&gt;限閱獨享&lt;/a&gt; &lt;span class='text-danger ml-2' title='限閱！請先登入'&gt;&lt;i class='mdi mdi-eye-plus'&gt;&lt;/i&gt;&lt;/span&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;div class="col-lg-4 col-xl-3 mt-1"&gt; &lt;div class="row"&gt; &lt;div class="col-12"&gt; &lt;div class="row"&gt;&lt;a class="nav-link a_title" href = "https://college.itri.org.tw//Home/InfoList?MnuNo=eefe3181-30c2-4bcb-a864-179438a4759c&amp;grfNo=fd1fa9fc-79d7-41d8-ae2f-396327b7f7ab&amp;typeMgdNo=00000000-0000-0000-0000-000000000000&amp;TypeCode=6" title="淨零永續加值服務 功能"&gt; 淨零永續加值服務&lt;/a &gt; &lt;span class='text-danger ml-2' title='限閱！請先登入'&gt;&lt;i class='mdi mdi-eye-plus'&gt;&lt;/i&gt;&lt;/span&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/li&gt; &lt;li id="liMenu7" class="nav-item dropdown bigmenu" data-href="https://collegeplus.itri.org.tw/"&gt; &lt;a class="nav-link dropdown-toggle arrow-none pr-3" href="https://collegeplus.itri.org.tw/" id="topnav-dashboards" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" mnuno="6fe8182d-f3ff-4b8b-bfa2-9165561e3c1b" title="雲端教室 頁" target="_blank"&gt; 雲端教室&lt;/a&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/li&gt;
`;