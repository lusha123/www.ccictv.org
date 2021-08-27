function __RP_Callback_Helper(str, strCallbackEvent, splitSize, func){var event = null;if (strCallbackEvent){event = document.createEvent('Events');event.initEvent(strCallbackEvent, true, true);}if (str && str.length > 0){var splitList = str.split('|');var strCompare = str;if (splitList.length == splitSize)strCompare = splitList[splitSize-1];var pluginList = document.plugins;for (var count = 0; count < pluginList.length; count++){var sSrc = '';if (pluginList[count] && pluginList[count].src)sSrc = pluginList[count].src;if (strCompare.length >= sSrc.length){if (strCompare.indexOf(sSrc) != -1){func(str, count, pluginList, splitList);break;}}}}if (strCallbackEvent)document.body.dispatchEvent(event);}function __RP_Coord_Callback(str){var func = function(str, index, pluginList, splitList){pluginList[index].__RP_Coord_Callback = str;pluginList[index].__RP_Coord_Callback_Left = splitList[0];pluginList[index].__RP_Coord_Callback_Top = splitList[1];pluginList[index].__RP_Coord_Callback_Right = splitList[2];pluginList[index].__RP_Coord_Callback_Bottom = splitList[3];};__RP_Callback_Helper(str, 'rp-js-coord-callback', 5, func);}function __RP_Url_Callback(str){var func = function(str, index, pluginList, splitList){pluginList[index].__RP_Url_Callback = str;pluginList[index].__RP_Url_Callback_Vid = splitList[0];pluginList[index].__RP_Url_Callback_Parent = splitList[1];};__RP_Callback_Helper(str, 'rp-js-url-callback', 3, func);}function __RP_TotalBytes_Callback(str){var func = function(str, index, pluginList, splitList){pluginList[index].__RP_TotalBytes_Callback = str;pluginList[index].__RP_TotalBytes_Callback_Bytes = splitList[0];};__RP_Callback_Helper(str, null, 2, func);}function __RP_Connection_Callback(str){var func = function(str, index, pluginList, splitList){pluginList[index].__RP_Connection_Callback = str;pluginList[index].__RP_Connection_Callback_Url = splitList[0];};__RP_Callback_Helper(str, null, 2, func);}

function menuFix() {

    var sfEls = document.getElementById("nav").getElementsByTagName("li");

    for (var i=0; i<sfEls.length; i++) {

        sfEls[i].onmouseover=function() {

        this.className+=(this.className.length>0? " ": "") + "sfhover";

        }

        sfEls[i].onMouseDown=function() {

        this.className+=(this.className.length>0? " ": "") + "sfhover";

        }

        sfEls[i].onMouseUp=function() {

        this.className+=(this.className.length>0? " ": "") + "sfhover";

        }

        sfEls[i].onmouseout=function() {

        this.className=this.className.replace(new RegExp("( ?|^)sfhover\\b"), 

"");

        }

    }

}

var myIncludeHtmls = new Array();
myIncludeHtmls['header.html'] = '\
<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="100%">\
\
    <tbody>\
\
      <tr> \
\
        <td width="18%" height="110" rowspan="2" align="center"><img src="/image/tvlogo.jpg" width="145" height="104"></td>\
\
        <td width="61%" rowspan="2" align="center"><img src="/image/logo_words.jpg" width="308" height="104"></td>\
\
        <td width="18%" height="90" align="right" valign="bottom"><div>\
\
          <p class="nospace" ><span class="c1">5064 Franklin Drive</span> <span class="c1"></span></p>\
	  <p class="nospace"><span class="c1">Pleasanton, CA 94588 </span> <span class="c1"></span></p>\
\         <p class="nospace"><span class="c1">(925) 467-1580 </span></p>\
          <p class="nospace"><span class="c1"><a href="mailto:ccictv@yahoo.com">ccictv@ccictv.org</a></span></p>\
\
         </div></td>\
\
        <td width="3%" rowspan="2" align="right">&nbsp;</td>\
\
      </tr>\
\
      <tr>\
\
        <td align="right" valign="bottom">&nbsp;</td>\
\
      </tr>\
\
      <tr> \
\
        <td height="30" colspan="4" align="right" valign="top" bgcolor="#728740"\
\
		\
\
		class="A1">\
\
        \
\
 <div style="float:center;">\
<UL id=nav>\
<LI style="MARGIN-LEFT: 100px"><A href="/index.html" title="Chinese Church in Christ - Tri Valley">首 页</A></LI>\
\
<LI><A href="#">三谷會堂</A>\
  <UL>\
  <LI><A href="/ccictv-introduction.html" title="三谷基督徒會堂 會堂簡介 Chinese Church in Christ Tri-Valley Church Introduction">會堂簡介</A></LI>\
  <LI><A href="/ccictv-intro/01_belief.html" title="三谷基督徒會堂 信仰 Chinese Church in Christ Tri-Valley Belief">信仰與使命</A></LI>\
    <LI><A href="/ccictv-intro/02_leaders.html" title="ccictv-introduction_leaders">教牧同工</A></LI>\
</UL>\
</LI>\
 \
<LI><A href="#">主日聚會</A>\
<UL>\
<LI><A href="/ccictv-sunday.html" title="ccictv-churchlife_location">主日簡介</A></LI>\
<LI><A href="/ccictv-sunday/01_sermons/sermon.html" title="ccictv-churchlife_sermons">主日信息</A></LI>\
<LI><A href="/ccictv-sunday/02_sundayschool.html" title="ccictv-churchlife_sundayschool">成人主日學</A></LI>\
</UL>\
</LI>\
\
<LI><A href="/ccictv-homegroups.html" title="三谷基督徒會堂 家庭團契 Chinese Church in Christ Homegroups">團契小組</A></LI>\
\
<LI><A href="#">靈修資源</A>\
<UL>\
<LI><A href="/ccictv-devotions/01_websites.html" title="ccictv-churchlife_devotions">網上靈修資源</A></LI>\
<LI><A href="/ccictv-devotions/02_library.html" title="ccictv-churchlife_devotions">圖書館</A></LI>\
<LI><A href="/ccictv-devotions/03_devotions.html" title="ccictv-churchlife_devotions">每日靈修</A></LI>\
</UL>\
</LI>\
\
<LI><A href="#">教會事工</A>\
<UL>\
<LI><A href="https://ccictv-youth.squarespace.com" title="ccictv-youth_impact">Youth Ministry</A></LI>\
<LI><A href="#">兒童事工</A>\
    <UL>\
    <LI><A href="/ccictv-ministry/02_children/SundayService.html" title="ccictv-children_SundayService">兒童主日</A></LI>\
    <LI><A href="/ccictv-ministry/02_children/Awana.html" title="cictv-children_awana">Awana</A></LI>\
    </UL>\
</LI>\
<LI><A href="/ccictv-ministry/03_mission.html" title="ccictv-mission">宣教与福音</A>\
     <UL>\
     <LI><A href="/ccictv-ministry/03_mission/Mission_Germany.html" title="Mission_Germany">德東宣教工場</A></LI>\
     <LI><A href="/ccictv-ministry/03_mission/Mission_CWC.html" title="Mission_CWC"> 美中宣教工場 </A></LI>\
     <LI><A href="#"> 南非宣教工場 </A></LI>\
     <LI><A href="/ccictv-ministry/03_mission/Mission_Thailand.html" title="Mission_Thailand"> 泰北宣教工場 </A></LI>\
     <LI><A href="#"> 中國宣教工場 </A></LI>\
     <LI><A href="/ccictv-ministry/01_youth/shorttermmission.html" title="Mission_Mexico">墨西哥Youth短宣</A></LI>\
     </UL>\
</LI>\
</UL>\
</LI>\
\
<LI><A href="#">教會活動</A>\
  <UL>\
  <LI><A href="/ccictv_activities/01_calendar.html" title="ccictv-churhlife_calendar">年度行事曆</A></LI>\
  <LI><A href="/ccictv_activities/02_pictures.html" title="三谷基督徒會堂 生活剪影">生活剪影</A></LI>\
  <LI><A href="/ccictv_activities/03_specialtopics.html" title="三谷基督徒會堂 專題講座 Chinese Church in Christ Church Special Sermons">特別聚會</A></LI>\
 </UL></LI>\
 \
<LI><A href="/ccictv_testimony/ccictv-testimony.html" title="三谷基督徒會堂 見證分享 Chinese Church in Christ Testimony">見證分享</A>\
<UL>\
  <LI><A href="/ccictv_testimony/01_newsletters.html" title="ccictv-newsletters">三谷恩泉</A></LI>\
  <LI><A href="/ccictv_testimony/02_mission_testimony.html" title="短宣見證">短宣見證</A></LI>\
  <LI><A href="/ccictv_testimony/03_saved_testimony.html" title="得救見證">得救見證</A></LI>\
  <LI><A href="#">靈修分享</A></LI>\
  <LI><A href="/ccictv_testimony/05_fellowship.html" title="團契分享">團契分享</A></LI>\
  <LI><A href="/ccictv_testimony/06_special_testimony.html" title="特別分享">特別分享</A></LI>\
</UL></LI>\
\
<LI><A href="" title="">&nbsp;</A></LI>\
</UL>\
\
</div>\
</td>\
\
      </tr>\
\
    </tbody>\
\
  </table>';

myIncludeHtmls['footer.html'] = '\
\
 <div style="clear:both;background-image: url(images/COD_FooterBg.gif); background-repeat: no-repeat; background-position: left top;margin-top:15px">\
\
    <p><span class="c1">©Copyright 2021, Chinese Church in Christ - Tri Valley,\
\
      Pleasanton, California, USA. All rights reserved. </span><br>\
\
    </p>\
\
</div>';




function myOnLoadFun() {
// replace header include
var myIncludeHtmlElement = document.getElementById('header.html');
if (myIncludeHtmlElement) {
	myIncludeHtmlElement.innerHTML = myIncludeHtmls['header.html'];
}

// replace footer include
myIncludeHtmlElement = document.getElementById('footer.html');
if (myIncludeHtmlElement) {
	myIncludeHtmlElement.innerHTML = myIncludeHtmls['footer.html'];
}

menuFix();
}
window.onload=myOnLoadFun;
