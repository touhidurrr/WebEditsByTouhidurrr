import glob

fileList = glob.glob("*.user.js")

for path in fileList:
  meta = ''
  
  with open(path, mode = 'r') as f:
    
    for line in f.readlines():
      meta += line
      
      if line == '// ==/UserScript==\n':
        break
  
  metaPath = './meta/' + path[:-8] + '.meta.js'
  with open(metaPath, mode = 'w') as f:
    
    f.write(meta)
