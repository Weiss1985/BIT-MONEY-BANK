BitMoneyBank.deployed().then(function(inst){inst.newLoan(web3.toWei(10,'ether'),1510584555,"9e4fefb090c5e3726c02f82c0c43fc6d",{from:web3.eth.accounts[4]});}) 
BitMoneyBank.deployed().then(function(inst){inst.newProposal(0,10,{value: web3.toWei(10,'ether'),from: web3.eth.accounts[3]});})
BitMoneyBank.deployed().then(function(inst){inst.revokeProposal(0,{from: web3.eth.accounts[3]});})
web3.eth.getBalance(web3.eth.accounts[3]).valueOf()/(10**18)
BitMoneyBank.deployed().then(function(inst){inst.lendMap(web3.eth.accounts[0],1).then(console.log);})

/*
(0) e04b985378da868095b1a26aa1aa45f503a3c7be712a4f15aec6ad8d70904267
(1) e57c1ca0b298db13fb4c2ef72d4854fbfcc52f54bda0ab7286f77a0fae8b0460
(2) 6b9b209a34ed81715ebfb912c123f8a39029cd7ca4ebd29ac5419ac482edd326
(3) e0dd0049d0ce7484142ca5ccb20a8a102c9bc45251a4adea5527e2f3f83d5208
(4) ea12b4a5356ce18e02f9202562ae64b097122336cf3ed47c6c4902f7ae4166ff
(5) 1f4230049272fd1e03245c6905d2bcf8e37e18e7073baa30700a12571f9c69f6
(6) 6f277330319fa19c4db44effccfc2dcbff7856a01b54cf4d8b1188eeed44ddd7
(7) 29d0f93aaa77756c29aa7839f5c339cd4f58970544e102d86e0b8ef545edae48
(8) 6ba844f92facbc198616f17c421e0ca3636b2339cf487a17d0a98dc0c6eb2566
(9) 8c9b42c7962025454c49897a002e9d95311a53fe93cec4a75ee8e94d5389ba15
(10) 0de716891f5591e36b21580d4cefcdab7a93f550b12ff7d3a8f731b46186b59d
(11) eb6f7647ce9c363b5465c1a6db01e5361727c37f7cae9d4fee3669c49fefdff1
(12) c12c75ae00e73504b58b192edfd56ac77a66ae867d08ce2ac9ecb4405a424f8a
(13) ee4d0916f0fb97a125a355e063792794af368bbb297eb3cc1862a3a865e881c8
(14) 083497701506377a12e9dd86004f34b0cdadcac635931780c5804b6a72ff85ee
(15) 54ade8fc0faf90bd07f71d40051193acc7cb72afeeb5bbe8069381e856942695
(16) 7894e4d98f6373aa024c80e65da92ab2c4ec6b3cb80bbe48c55834dc1ee47a01
(17) 64f258115c8335504fef52f9ec9968b26495df994326c67d1c4c2009c6605a17
(18) 394dd56d80079dfca6d84c72656ad839e255f83b24aad15f869b35fd60fcebd5
(19) 7366f5435bcecfeb4fd54567113fbe3b64d8350648938e78cd7ca2f0437a333a
(20) 608bcad1350116daa1c552819f8ef7d358669dae950c12e51e311b087c7e6d22
(21) 68595caee76e7d45700332549cd9d1550e3e6aafd0a9a738f6cd79efaaef7666
(22) 1c17559737c1f97eefd639b7f0578734934e6fc5a0e5267bdbec1847b027f11b
(23) 6b668174f8070d3d774b9391b2967a69b93272a572202d8525dd9f7248df4aa6
(24) 847e9b22ad5f664102f04039765ce27ef40b5d05a5139a73a68e176ec6d59c9e
(25) fbb1796f3493d2b42eeb704ed40718b9d00787c1d6fbf310f5d7e15658ce09da
(26) eb305ca7c728b6869bdd9d59e32e422c56504dd5931130d5125de4568cd5fb15
(27) 769a6b6363665f95b0d3b30dbfd8a3d422430093d7fbd5cb2cfda8c40f4e99ee
(28) c4121fb0551b2bfaea494144910088d9f25098167c0213a62ef26d8366fab113
(29) 7b30edf6a7f28963aaaea607a8ad2da3e357c74a02b75c6b0fcebb0ca576566e
*/