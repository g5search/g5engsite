$(document).ready(function(){$("#custom_images_tab a").click(function(){(picker=$("#page_image_picker")).data("size-applied")||(wym_box=$(".page_part:first .wym_box"),iframe=$(".page_part:first iframe"),picker.css({height:wym_box.height(),width:wym_box.width()}).data("size-applied",!0).corner("tr 5px").corner("bottom 5px").find(".wym_box").css({backgroundColor:"white",height:iframe.height()+$(".page_part:first .wym_area_top").height()-parseInt($(".wym_area_top .label_inline_with_link a").css("lineHeight")),width:iframe.width()-20,"border-color":iframe.css("border-top-color"),"border-style":iframe.css("border-top-style"),"border-width":iframe.css("border-top-width"),padding:"0px 10px 0px 10px"}))}),$("#content #page_images li textarea:hidden").each(function(e){var t=$(this).attr("name");$(this).attr("data-old-id",$(this).attr("id")),$(this).attr("name","ignore_me_"+e),$(this).attr("id","ignore_me_"+e);var n=$("<input>").addClass("caption").attr("type","hidden").attr("name",t).attr("id",$(this).attr("data-old-id")).val($(this).val());$(this).parents("li").first().append(n)}),reset_functionality()}),reset_functionality=function(){WYMeditor.onload_functions.push(function(){$(".wym_box").css({width:null})}),$("#page_images").sortable({tolerance:"pointer",placeholder:"placeholder",cursor:"drag",items:"li",stop:reindex_images}),$("#content #page_images li:not(.empty)").live("hover",function(e){e.type=="mouseenter"||e.type=="mouseover"?((image_actions=$(this).find(".image_actions")).length==0&&(image_actions=$("<div class='image_actions'></div>"),img_delete=$("<img src='/assets/refinery/icons/delete.png' width='16' height='16' />"),img_delete.appendTo(image_actions),img_delete.click(function(){$(this).parents("li").first().remove(),reindex_images()}),$(this).find("textarea.page_caption").length>0?(img_caption=$("<img src='/assets/refinery/icons/user_comment.png' width='16' height='16' class='caption' />"),img_caption.appendTo(image_actions),img_caption.click(open_image_caption)):image_actions.addClass("no_captions"),image_actions.appendTo($(this))),image_actions.show()):(e.type=="mouseleave"||e.type=="mouseout")&&$(this).find(".image_actions").hide()}),reindex_images()},image_added=function(e){new_list_item=(current_list_item=$("li.empty")).clone(),image_id=$(e).attr("id").replace("image_",""),current_list_item.find("input:hidden:first").val(image_id),$("<img />").attr({title:$(e).attr("title"),alt:$(e).attr("alt"),src:$(e).attr("data-grid")}).appendTo(current_list_item),current_list_item.attr("id","image_"+image_id).removeClass("empty"),new_list_item.appendTo($("#page_images")),reset_functionality()},open_image_caption=function(e){(list_item=$(this).parents("li").first()).addClass("current_caption_list_item"),textarea=list_item.find(".textarea_wrapper_for_wym > textarea"),textarea.after($("<div class='form-actions'><div class='form-actions-left'><a class='button'>translation missing: en.refinery.js.admin.page_images.done</a></div></div>")),textarea.parent().dialog({title:"translation missing: en.refinery.js.admin.page_images.add_caption",modal:!0,resizable:!1,autoOpen:!0,width:928,height:530}),$(".ui-dialog:visible .ui-dialog-titlebar-close, .ui-dialog:visible .form-actions a.button").on("click",$.proxy(function(e){$(this).data("wymeditor").update(),$(this).removeClass("wymeditor").removeClass("active_rotator_wymeditor"),$this_parent=$(this).parent(),$this_parent.appendTo("li.current_caption_list_item").dialog("close").data("dialog",null),$this_parent.find(".form-actions").remove(),$this_parent.find(".wym_box").remove(),$this_parent.css("height","auto"),$this_parent.removeClass("ui-dialog-content").removeClass("ui-widget-content"),$("li.current_caption_list_item").removeClass("current_caption_list_item"),$(".ui-dialog, .ui-widget-overlay:visible").remove(),$("#"+$(this).attr("data-old-id")).val($(this).val())},textarea)),textarea.addClass("wymeditor active_rotator_wymeditor widest").wymeditor(wymeditor_boot_options)},reindex_images=function(){$("#page_images li textarea:hidden").each(function(e,t){parts=$(t).attr("name").split("_"),parts[2]=""+e,$(t).attr("name",parts.join("_")),$(t).attr("id",$(t).attr("id").replace(/_\d/,"_"+e)),$(t).attr("data-old-id",$(t).attr("data-old-id").replace(/_\d_/,"_"+e+"_").replace(/_\d/,"_"+e))}),$("#page_images li").each(function(e,t){$("input:hidden",t).each(function(){parts=$(this).attr("name").split("]"),parts[1]="["+e,$(this).attr("name",parts.join("]")),$(this).attr("id",$(this).attr("id").replace(/_\d_/,"_"+e+"_").replace(/_\d/,"_"+e))})})};