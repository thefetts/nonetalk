$(document).ready(function() {
	var errors = [
		'Lost connection to server... retrying...',
		'Something\'s not right... waiting to retry...',
		'There was an error opening this document.<br/>The file is damaged and could not be repaired. Retrying...',
		'Error Number 2.<br/>Error text = Null object reference<br/>Window/Menu/Object = w_product_master.<br/>Error Object/Control = w_product_master<br/>Script = pfc_postopen<br/>Line in Script = 34',
		'Error message here',
		'Error: <span style="color: red;">!! Critical Error Detected !!</span><br/>Press Any Key to Continue',
		'Server Failed to Initialize',
		'<b>A Runtime Error has occurred.</b><br/>Do you wish to debug?<br/>Line: 34<br/>Error: Permission denied<br/><button>Debug</button> <button>Cancel</button>',
		'NET_SendPacket ERROR: NO ERROR',
		'MsgId: UDU0149<br/>Type: ERROR, Severity: Recoverable, Level: 80<br/>User: USER115, Process id: 85336, Thread id: main<br/>Text: German language resource bundle, de_DE_AR.properties not found',
		'An error has occurred',
		'<b>The system has recovered from a serious error.</b><br/><br/>A log of this error has been created.<br/><b>Please tell NoneTalk about this problem.</b><br><button>Send Error Report</button><button>Don\'t Send</button>',
		'An unknown error has occurred.<br/>If the problem persists, contact your network administrator.',
		'<b style="color:red;">Error</b><br/>Unauthorized'
	];

	var lastError = null;

	function getRand(x) {
		return Math.floor(Math.random()*x);
	}

	setInterval(function() {
		$('#loading').fadeOut(500).fadeIn(500);
	}, 1000);

	setInterval(function() {
		var error;
		while(true) {
			error = getRand(errors.length);
			if(error !== lastError) {
				break;
			}
		}
		$('#error').html(errors[error]).show();
		lastError = error;
	}, 5000);

	function test() {
		var html = '';
		for(var i in errors) {
			html += '<div class="error">' + errors[i] + '</div><br/><br/>';
		}
		$('#test').html(html);
	}
	// test();
});
