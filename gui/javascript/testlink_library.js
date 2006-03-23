// TestLink Open Source Project - http://testlink.sourceforge.net/ 
// This script is distributed under the GNU General Public License 2 or later. 
//
// $Id: testlink_library.js,v 1.9 2006/03/23 20:46:25 schlundus Exp $ 
//
// Javascript functions commonly used through the GUI
// This library is automatically loaded with inc_header.tpl
//
// DO NOT ADD FUNCTIONS FOR ONE USING
//


// help popup
function open_popup(page) 
{
	window.open(page, "_blank", "left=350,top=50,screenX=350,screenY=50,fullscreen=no,resizable=yes,toolbar=no,status=no,menubar=no,scrollbars=yes,directories=no,location=no,width=400,height=650")
	return true;
}

// middle window (information, TC)
function open_top(page) 
{
	window.open(page, "_blank", "left=350,top=50,screenX=350,screenY=50,fullscreen=no,resizable=yes,toolbar=no,status=no,menubar=no,scrollbars=yes,directories=no,location=no,width=600,height=400")
	return true;
}


// test specification related functions
function ST(id)
{
	parent.workframe.location = fRoot+'/'+menuUrl+"&level=testcase&id="+id;
}

function SCO(id)
{
	parent.workframe.location = fRoot+'/'+menuUrl+"&level=component&id="+id;
}

function SC(id)
{
	parent.workframe.location = fRoot+'/'+menuUrl+"&level=category&id="+id;
}

function SP()
{
	parent.workframe.location = fRoot+'/'+SP_html_help_file;
}

function EP(id)
{
	parent.workframe.location = fRoot+menuUrl+"?edit=product&data="+id+args;
}
function ECO(id)
{
	parent.workframe.location = fRoot+menuUrl+"?edit=component&data="+id+args;
}

function EC(id)
{
	parent.workframe.location = fRoot+menuUrl+"?edit=category&data="+id+args;
}

function ET(id)
{
	parent.workframe.location = fRoot+menuUrl+"?edit=testcase&data="+id+args;
}

function PTP(id)
{
	parent.workframe.location = fRoot+menuUrl+"?level=root&data="+id+args;
}

function PCO(id)
{
	parent.workframe.location = fRoot+menuUrl+"?level=component&data="+id+args;
}

function PC(id)
{
	parent.workframe.location = fRoot+menuUrl+"?level=category&data="+id+args;
}


function PT(id)
{
	parent.workframe.location = fRoot+menuUrl+"?level=tc&data="+id+args;
}


//==========================================
// Set DIV ID to hide
//==========================================
function my_hide_div(itm)
{
	if (!itm)
		return;

	itm.style.display = "none";
}

//==========================================
// Set DIV ID to show
//==========================================
function my_show_div(itm)
{
	if (!itm)
		return;

	itm.style.display = "";
}

// MHT: TODO move it to validate.js
// 20051007 - am - removed build name
function deleteBuild_onClick(buildID)
{
	if (confirm(warning_delete_build))
	{
		var f = document.getElementById('deleteBuildForm');
		if (f)
		{
			var field = document.getElementById('buildID');
			if (field)
				field.value = buildID;
			f.submit();
		}
	}
	
}

function deleteUser_onClick(userID)
{
	if (confirm(warning_delete_user))
		location = "lib/usermanagement/usersview.php?delete=1&user="+userID;
}

/**
 * Display a confirmation dlg before modifying roles
 *
 * @return bool return true if the user confirmed, false else
 *
 **/
function modifyRoles_warning()
{
	if (confirm(warning_modify_role))
		return true;

	return false;
}

/**
 * Function-Documentation
 *
 * @param string feature the feature, could be testplan or product
 **/
function changeFeature(feature)
{
	var tmp = document.getElementById('featureSel');
	if (!tmp)
		return;
	var fID = tmp.value;	
	if(fID)
		location = fRoot+"lib/usermanagement/usersassign.php?feature="+feature+"&featureID="+fID;
}

function openFileUploadWindow(id,tableName)
{
	window.open(fRoot+"lib/attachments/attachmentupload.php?id="+id+"&tableName="+tableName,"FileUpload","width=510,height=250,resizable=yes,dependent=yes");
}

function openFileDownloadWindow(id)
{
	window.open(fRoot+"lib/attachments/attachmentdownload.php?id="+id,"FileDownload","width=510,height=150,resizable=yes,dependent=yes");
}

function deleteAttachment_onClick(id)
{
	if (confirm(warning_delete_attachment))
		window.open(fRoot+"lib/attachments/attachmentdelete.php?id="+id,"Delete","width=510,height=150,resizable=yes,dependent=yes");
}