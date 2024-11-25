// スクリーンショットをバックグラウンドに依頼する関数
function captureScreen() {
    chrome.runtime.sendMessage({ type: 'captureScreenshot' }, (response) => {
      if (response && response.screenshotUrl) {
  
        // 現在のページのURLを取得
        const currentUrl = window.location.href;
  
        // バックグラウンドスクリプトにスクリーンショットURLとURLを送信
        chrome.runtime.sendMessage(
          { type: 'screenshot', data: { screenshotUrl: response.screenshotUrl, currentUrl } },
          (response) => {
          }
        );
      } else {
        console.error('スクリーンショットの取得に失敗しました');
      }
    });
  }
  
  // 700msごとにスクリーンショットを依頼
  //setInterval(captureScreen, 700);
  