class Solution(object):
    
    def longestCommonPrefix(self, strs):
        
        strs = sorted(strs, key=len)
        m=len(strs)
        n=len(strs[0])+1 if (m>0) else 0
        pfx=""
        j=0
        while(j<n):
            if all([strs[0][0:j] in strs[i][0:j] for i in range(m)]):
                pfx=(strs[0][0:j] if (n+1>1) else strs[0][j])
            j += 1      
        return pfx
       
                
        