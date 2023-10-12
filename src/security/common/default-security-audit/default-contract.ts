import { IContract } from '../interfaces';

const defaultContract: IContract = {
	// DeFi
	hasVulnerableWithrawlFunction: { result: null, issues: [] },
	hasReentrancy: { result: null, issues: [] },
	arelocksDetected: { result: null, issues: [] },
	hasVerifiedSourceCode: { result: null, issues: [] },
	isMintable: { result: null, issues: [] },
	isTransferPausable: { result: null, issues: [] },
	canContractBeUpgraded: { result: null, issues: [] },
	hasBlacklist: { result: null, issues: [] },
	hasTransferFee: { result: null, issues: [] },
	canTokenBeSoldThroughAMM: { result: null, issues: [] },
	hasTransferLimit: { result: null, issues: [] },
	hasApprovalVulnerability: { result: null, issues: [] },
	canOwnerAbuseApprovals: { result: null, issues: [] },
	hasInterfaceErrors: { result: null, issues: [] },
	hasBlockingLoops: { result: null, issues: [] },
	hasCentralizedBalanceControls: { result: null, issues: [] },
	hasTransferCooldown: { result: null, issues: [] },
	hasApprovalRestrictions: { result: null, issues: [] },
	hasExternalCalls: { result: null, issues: [] },
	hasAirdropSpecificCode: { result: null, issues: [] },
	hasVulnerableOwnershipFunctions: { result: null, issues: [] },
	canRetrieveOwnership: { result: null, issues: [] },
	isRecentlyDeployedContract: { result: null, issues: [] },
	hasMixers: { result: null, issues: [] },
	canAdjustMaximalSupply: { result: null, issues: [] },
	ownerHasPreviousScams: { result: null, issues: [] },
	canUserTaxBeModified: { result: null, issues: [] },
	canWalletsBeWhitelisted: { result: null, issues: [] },
	canTransfersBeBlockedViaChangingRouter: { result: null, issues: [] },
	hasEthDraining: { result: null, issues: [] },
	hasRecentInteraction: { result: null, issues: [] },
	hasNativeTokenDrainage: { result: null, issues: [] },
	hasHardcodedUniswapRouter: { result: null, issues: [] },
	hasUnusualOnChainMarkers: { result: null, issues: [] },
	hasHighRevocations: { result: null, issues: [] },
	isInitializerProtected: { result: null, issues: [] },
	// GoPlus
	isContractOpenSource: { result: null, issues: [] },
	isHoneyPot: { result: null, issues: [] },
	isHoneyPotWithSameCreator: { result: null, issues: [] },
	buyTax: { result: null, issues: [] },
	sellTax: { result: null, issues: [] },
	hasProxyContract: { result: null, issues: [] },
	isBuyingAvailable: { result: null, issues: [] },
	canUserSellAll: { result: null, issues: [] },
	canTaxBeModdified: { result: null, issues: [] },
	isAntiWhale: { result: null, issues: [] },
	isAntiWhaleModifiable: { result: null, issues: [] },
	hasTradingCoolDown: { result: null, issues: [] },
	isTrueToken: { result: null, issues: [] },
	isOnTrustList: { result: null, issues: [] },
	hasHiddenOwners: { result: null, issues: [] },
};

export { defaultContract };
