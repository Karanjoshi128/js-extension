document.getElementById('load-history').addEventListener('click', () => {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
  
    // Query the last 10 visited URLs
    chrome.history.search({ text: '', maxResults: 10 }, (results) => {
      results.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.title} - ${item.url}`;
        historyList.appendChild(li);
      });
    });
  });
  
  
  document.getElementById('clear-history-24hrs').addEventListener('click', () => {
    // Delete all browsing history from the last 24 hours
    const oneDayAgo = new Date().getTime() - 24 * 60 * 60 * 1000;
  
    chrome.history.deleteRange(
      { startTime: oneDayAgo, endTime: Date.now() },
      () => {
        alert('Browsing history cleared for the last 24 hours!');
      }
    );
  });
  document.getElementById('clear-history-all').addEventListener('click', () => {
    // Delete all browsing history from the last 24 hours
    const startPoint = 0;
  
    chrome.history.deleteRange(
      { startTime: startPoint, endTime: Date.now() },
      () => {
        alert('All the browsing history has been cleared!');
      }
    );
  });

  document.getElementById("clear-bookmarks-all").addEventListener("click", () => {
    if (confirm("Are you sure you want to delete all bookmarks?")) {
      chrome.bookmarks.getTree((bookmarkTreeNodes) => {
        function deleteBookmarks(nodes) {
          nodes.forEach((node) => {
            if (node.children) {
              // Recursively delete subfolders and bookmarks inside
              deleteBookmarks(node.children);
            }
            // Delete the bookmark or folder after its children are deleted
            chrome.bookmarks.removeTree(node.id, () => {
              console.log(`Deleted Folder: ${node.title}`);
            });
          });
        }
  
        // Start deleting from the root children (Main Bookmarks Bar, Other Bookmarks, Mobile Bookmarks)
        bookmarkTreeNodes.forEach((rootNode) => {
          if (rootNode.children) {
            deleteBookmarks(rootNode.children);
          }
        });
      });
    }
  });
  