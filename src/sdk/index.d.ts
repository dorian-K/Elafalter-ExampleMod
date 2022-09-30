declare class Minecraft {
	// Attributes 
	levelOptional: Optional;
	// Methods 
	// Inherited from Minecraft
	/** configureGameTest(Level &,Experiments const &): void */
	configureGameTest(_1: object, _2: object): void; /// ?configureGameTest@Minecraft@@QEAAXAEAVLevel@@AEBVExperiments@@@Z
	/** getEditorManager(void): class Bedrock::NonOwnerPointer<class Editor::IEditorManager> */
	getEditorManager(): unknown; /// ?getEditorManager@Minecraft@@QEAA?AV?$NonOwnerPointer@VIEditorManager@Editor@@@Bedrock@@XZ
	/** getEntityRegistry(void): class StackRefResultT<struct EntityRegistryRefTraits> */
	getEntityRegistry(): unknown; /// ?getEntityRegistry@Minecraft@@UEAA?AV?$StackRefResultT@UEntityRegistryRefTraits@@@@XZ
	/** getLevel(void): class Level * __ptr64 */
	getLevel(): Level; /// ?getLevel@Minecraft@@QEBAPEAVLevel@@XZ
	/** getServerNetworkHandler(void): class Bedrock::NonOwnerPointer<class ServerNetworkHandler> */
	getServerNetworkHandler(): unknown; /// ?getServerNetworkHandler@Minecraft@@QEAA?AV?$NonOwnerPointer@VServerNetworkHandler@@@Bedrock@@XZ
	/** getSimPaused(void): bool */
	getSimPaused(): boolean; /// ?getSimPaused@Minecraft@@UEBA_NXZ
	/** initAsDedicatedServer(void): void */
	initAsDedicatedServer(): void; /// ?initAsDedicatedServer@Minecraft@@QEAAXXZ
	/** isOnlineClient(void): bool */
	isOnlineClient(): boolean; /// ?isOnlineClient@Minecraft@@UEBA_NXZ
	/** requestResourceReload(void): void */
	requestResourceReload(): void; /// ?requestResourceReload@Minecraft@@QEAAXXZ
	/** setSimTimePause(bool): void */
	setSimTimePause(_1: boolean): void; /// ?setSimTimePause@Minecraft@@UEAAX_N@Z
	/** setSimTimeScale(float): void */
	setSimTimeScale(_1: number): void; /// ?setSimTimeScale@Minecraft@@UEAAXM@Z
	/** update(void): bool */
	update(): boolean; /// ?update@Minecraft@@QEAA_NXZ
}
declare class ActorDefinitionIdentifier {
	// Attributes 
	actorType: SDKText;
	specialisedName: SDKText;
	canonicalName: SDKHashedString;
	// Methods 
	// Inherited from ActorDefinitionIdentifier
	/** ActorDefinitionIdentifier(ActorDefinitionIdentifier &&) */
	ActorDefinitionIdentifier(_1: object): ActorDefinitionIdentifier; /// ??0ActorDefinitionIdentifier@@QEAA@$$QEAU0@@Z
	/** ActorDefinitionIdentifier(ActorDefinitionIdentifier const &) */
	ActorDefinitionIdentifier(_1: object): ActorDefinitionIdentifier; /// ??0ActorDefinitionIdentifier@@QEAA@AEBU0@@Z
	/** ActorDefinitionIdentifier(ActorType) */
	ActorDefinitionIdentifier(_1: unknown): ActorDefinitionIdentifier; /// ??0ActorDefinitionIdentifier@@QEAA@W4ActorType@@@Z
	/** ActorDefinitionIdentifier(void) */
	ActorDefinitionIdentifier(): ActorDefinitionIdentifier; /// ??0ActorDefinitionIdentifier@@QEAA@XZ
	/** _getLegacyActorType(void): enum ActorType */
	_getLegacyActorType(): bigint; /// ?_getLegacyActorType@ActorDefinitionIdentifier@@QEBA?AW4ActorType@@XZ
	/** clear(void): void */
	clear(): void; /// ?clear@ActorDefinitionIdentifier@@QEAAXXZ
	/** getCanonicalName(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64 */
	getCanonicalName(): unknown; /// ?getCanonicalName@ActorDefinitionIdentifier@@QEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** isEmpty(void): bool */
	isEmpty(): boolean; /// ?isEmpty@ActorDefinitionIdentifier@@QEBA_NXZ
	/** isVanilla(void): bool */
	isVanilla(): boolean; /// ?isVanilla@ActorDefinitionIdentifier@@QEBA_NXZ
	// Inherited from SDKText
}
declare class AABB {
	// Attributes 
	lower: Vec3;
	upper: Vec3;
	// Methods 
	// Inherited from AABB
	/** AABB(Vec3 const &,Vec3 const &) */
	AABB(_1: object, _2: object): AABB; /// ??0AABB@@QEAA@AEBVVec3@@0@Z
	/** AABB(Vec3 const &,float) */
	AABB(_1: object, _2: number): AABB; /// ??0AABB@@QEAA@AEBVVec3@@M@Z
	/** AABB(float,float,float,float,float,float) */
	AABB(_1: number, _2: number, _3: number, _4: number, _5: number, _6: number): AABB; /// ??0AABB@@QEAA@MMMMMM@Z
	/** clipCollide(AABB const &,Vec3 const &,bool,float *): class Vec3 */
	clipCollide(_1: object, _2: object, _3: boolean, _4: object): unknown; /// ?clipCollide@AABB@@QEBA?AVVec3@@AEBV1@AEBV2@_NPEAM@Z
	/** cloneAndExpandAlongDirection(Vec3 const &): class AABB */
	cloneAndExpandAlongDirection(_1: object): AABB; /// ?cloneAndExpandAlongDirection@AABB@@QEBA?AV1@AEBVVec3@@@Z
	/** cloneAndFloor(float,float): class AABB */
	cloneAndFloor(_1: number, _2: number): AABB; /// ?cloneAndFloor@AABB@@QEBA?AV1@MM@Z
	/** cloneAndShrink(Vec3 const &): class AABB */
	cloneAndShrink(_1: object): AABB; /// ?cloneAndShrink@AABB@@QEBA?AV1@AEBVVec3@@@Z
	/** cloneAndTransformByMatrix(Matrix const &): class AABB */
	cloneAndTransformByMatrix(_1: object): AABB; /// ?cloneAndTransformByMatrix@AABB@@QEBA?AV1@AEBVMatrix@@@Z
	/** contains(Vec3 const &): bool */
	contains(_1: object): boolean; /// ?contains@AABB@@QEBA_NAEBVVec3@@@Z
	/** distanceTo(AABB const &): float */
	distanceTo(_1: object): number; /// ?distanceTo@AABB@@QEBAMAEBV1@@Z
	/** getBounds(void): class Vec3 */
	getBounds(): unknown; /// ?getBounds@AABB@@QEBA?AVVec3@@XZ
	/** getCenter(void): class Vec3 */
	getCenter(): unknown; /// ?getCenter@AABB@@QEBA?AVVec3@@XZ
	/** getSize(void): float */
	getSize(): number; /// ?getSize@AABB@@QEBAMXZ
	/** getVolume(void): float */
	getVolume(): number; /// ?getVolume@AABB@@QEBAMXZ
	/** intersects(AABB const &): bool */
	intersects(_1: object): boolean; /// ?intersects@AABB@@QEBA_NAEBV1@@Z
	/** intersects(Vec3 const &,Vec3 const &): bool */
	intersects(_1: object, _2: object): boolean; /// ?intersects@AABB@@QEBA_NAEBVVec3@@0@Z
	/** intersectsInner(AABB const &): bool */
	intersectsInner(_1: object): boolean; /// ?intersectsInner@AABB@@QEBA_NAEBV1@@Z
	/** isValid(void): bool */
	isValid(): boolean; /// ?isValid@AABB@@QEBA_NXZ
	/** set(AABB const &): class AABB & __ptr64 */
	set(_1: object): AABB; /// ?set@AABB@@QEAAAEAV1@AEBV1@@Z
	/** toString(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	toString(): unknown; /// ?toString@AABB@@QEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** translateCenterTo(Vec3 const &): class AABB & __ptr64 */
	translateCenterTo(_1: object): AABB; /// ?translateCenterTo@AABB@@QEAAAEAV1@AEBVVec3@@@Z
}
declare class Abilities {
	// Attributes 
	attackPlayersAbility: BoolAbility;
	mineAbility: BoolAbility;
	muteAbility: BoolAbility;
	doorsAndSwitchesAbility: BoolAbility;
	openContainersAbility: BoolAbility;
	attackMobsAbility: BoolAbility;
	state: number;
	opAbility: BoolAbility;
	teleportAbility: BoolAbility;
	invulnerableAbility: BoolAbility;
	flyingAbility: BoolAbility;
	worldbuilderAbility: BoolAbility;
	mayflyAbility: BoolAbility;
	instabuildAbility: BoolAbility;
	data: number;
	lightningAbility: BoolAbility;
	flySpeedAbility: FloatAbility;
	walkSpeedAbility: FloatAbility;
	noclipAbility: BoolAbility;
	permissions: number;
	// Methods 
	// Inherited from Abilities
	/** getDefault(AbilitiesIndex): class Ability const & __ptr64 */
	getDefault(_1: unknown): unknown; /// ?getDefault@Abilities@@SAAEBVAbility@@W4AbilitiesIndex@@@Z
	/** loadSaveData(CompoundTag const &): bool */
	loadSaveData(_1: object): boolean; /// ?loadSaveData@Abilities@@QEAA_NAEBVCompoundTag@@@Z
	/** setDefault(void): void */
	setDefault(): void; /// ?setDefault@Abilities@@QEAAXXZ
	/** unSet(AbilitiesIndex): void */
	unSet(_1: unknown): void; /// ?unSet@Abilities@@QEAAXW4AbilitiesIndex@@@Z
	// Inherited from BoolAbility
}
declare class AnyPtr {
	// Attributes 
	// Methods 
	// Inherited from AnyPtr
}
declare class Actor {
	// Attributes 
	vtable: object;
	ticksAlive: number;
	currentDimensionId: number;
	viewAngles: Vec2;
	viewAnglesOld: Vec2;
	_isRemoved: number;
	currentSwimAmount: number;
	actorRendererId: SDKHashedString;
	eyePos: Vec3;
	shakeTime: number;
	synchedActorData: SynchedActorDataEntityWrapper;
	nameTagHash: bigint;
	fallDistance: number;
	onGround: number;
	handContainer: SimpleContainer;
	stepHeight: number;
	slowdownFactor: Vec3;
	dimension: Dimension;
	didEnterWater: number;
	_isOnHotBlock: number;
	vehicle: bigint;
	region: BlockSource;
	level: Level;
	oldPosition: Vec3;
	isMovedToLimbo: number;
	entityTypeId: number;
	aabb: AABB;
	width: number;
	height: number;
	position: Vec3;
	velocity: Vec3;
	allEffects: SDKVectorContainer;
	entityRuntimeId: bigint;
	isSafeToSleepNear: number;
	armorContainer: SimpleContainer;
	// Methods 
	// Inherited from Actor
	/** Actor(ActorDefinitionGroup *,ActorDefinitionIdentifier const &,EntityContext &) */
	Actor(_1: object, _2: object, _3: object): Actor; /// ??0Actor@@QEAA@PEAVActorDefinitionGroup@@AEBUActorDefinitionIdentifier@@AEAVEntityContext@@@Z
	/** Actor(ILevel &,EntityContext &) */
	Actor(_1: object, _2: object): Actor; /// ??0Actor@@QEAA@AEAVILevel@@AEAVEntityContext@@@Z
	/** _addActorComponents(void): void */
	_addActorComponents(): void; /// ?_addActorComponents@Actor@@AEAAXXZ
	/** _containsSneakCollisionShapes(IActorMovementProxy &,AABB const &): bool */
	_containsSneakCollisionShapes(_1: object, _2: object): boolean; /// ?_containsSneakCollisionShapes@Actor@@CA_NAEAUIActorMovementProxy@@AEBVAABB@@@Z
	/** _doInitialMove(void): void */
	_doInitialMove(): void; /// ?_doInitialMove@Actor@@MEAAXXZ
	/** _hurt(ActorDamageSource const &,float,bool,bool): bool */
	_hurt(_1: object, _2: number, _3: boolean, _4: boolean): boolean; /// ?_hurt@Actor@@MEAA_NAEBVActorDamageSource@@M_N1@Z
	/** _isItemStackNetManagerEnabled(void): bool */
	_isItemStackNetManagerEnabled(): boolean; /// ?_isItemStackNetManagerEnabled@Actor@@AEBA_NXZ
	/** _move(IActorMovementProxy &,Vec3 const &): void */
	_move(_1: object, _2: object): void; /// ?_move@Actor@@SAXAEAUIActorMovementProxy@@AEBVVec3@@@Z
	/** _playFlySound(BlockPos const &,Block const &): void */
	_playFlySound(_1: object, _2: object): void; /// ?_playFlySound@Actor@@MEAAXAEBVBlockPos@@AEBVBlock@@@Z
	/** _playStepSound(BlockPos const &,Block const &): void */
	_playStepSound(_1: object, _2: object): void; /// ?_playStepSound@Actor@@MEAAXAEBVBlockPos@@AEBVBlock@@@Z
	/** _randomHeartPos(void): class Vec3 */
	_randomHeartPos(): unknown; /// ?_randomHeartPos@Actor@@QEAA?AVVec3@@XZ
	/** _removePassenger(ActorUniqueID const &,bool,bool,bool): void */
	_removePassenger(_1: object, _2: boolean, _3: boolean, _4: boolean): void; /// ?_removePassenger@Actor@@MEAAXAEBUActorUniqueID@@_N11@Z
	/** _sendDirtyActorData(void): void */
	_sendDirtyActorData(): void; /// ?_sendDirtyActorData@Actor@@QEAAXXZ
	/** _sendLinkPacket(ActorLink const &): void */
	_sendLinkPacket(_1: object): void; /// ?_sendLinkPacket@Actor@@AEBAXAEBUActorLink@@@Z
	/** _serverInitItemStackIds(void): void */
	_serverInitItemStackIds(): void; /// ?_serverInitItemStackIds@Actor@@MEAAXXZ
	/** _setHandContainerItem(ItemStack const &,HandSlot): void */
	_setHandContainerItem(_1: object, _2: unknown): void; /// ?_setHandContainerItem@Actor@@IEAAXAEBVItemStack@@W4HandSlot@@@Z
	/** _setHeightOffset(float): void */
	_setHeightOffset(_1: number): void; /// ?_setHeightOffset@Actor@@IEAAXM@Z
	/** _setLevelPtr(Level *): void */
	_setLevelPtr(_1: object): void; /// ?_setLevelPtr@Actor@@QEAAXPEAVLevel@@@Z
	/** _setPos(Vec3 const &): void */
	_setPos(_1: object): void; /// ?_setPos@Actor@@IEAAXAEBVVec3@@@Z
	/** _shouldProvideFeedbackOnArmorSet(ArmorSlot,ItemStack const &): bool */
	_shouldProvideFeedbackOnArmorSet(_1: unknown, _2: object): boolean; /// ?_shouldProvideFeedbackOnArmorSet@Actor@@MEBA_NW4ArmorSlot@@AEBVItemStack@@@Z
	/** _shouldProvideFeedbackOnHandContainerItemSet(HandSlot,ItemStack const &): bool */
	_shouldProvideFeedbackOnHandContainerItemSet(_1: unknown, _2: object): boolean; /// ?_shouldProvideFeedbackOnHandContainerItemSet@Actor@@MEBA_NW4HandSlot@@AEBVItemStack@@@Z
	/** _spawnTreasureHuntingParticles(void): void */
	_spawnTreasureHuntingParticles(): void; /// ?_spawnTreasureHuntingParticles@Actor@@AEAAXXZ
	/** _updateComposition(bool): void */
	_updateComposition(_1: boolean): void; /// ?_updateComposition@Actor@@AEAAX_N@Z
	/** add(ItemStack &): bool */
	add(_1: object): boolean; /// ?add@Actor@@UEAA_NAEAVItemStack@@@Z
	/** addAdditionalSaveData(CompoundTag &): void */
	addAdditionalSaveData(_1: object): void; /// ?addAdditionalSaveData@Actor@@MEBAXAEAVCompoundTag@@@Z
	/** addEffect(MobEffectInstance const &): void */
	addEffect(_1: object): void; /// ?addEffect@Actor@@QEAAXAEBVMobEffectInstance@@@Z
	/** addPassenger(Actor &): void */
	addPassenger(_1: object): void; /// ?addPassenger@Actor@@UEAAXAEAV1@@Z
	/** applySnapshot(PlayerSnapshotComponent const &,PlayerSnapshotComponent const &): void */
	applySnapshot(_1: object, _2: object): void; /// ?applySnapshot@Actor@@UEAAXAEBUPlayerSnapshotComponent@@0@Z
	/** attack(Actor &,ActorDamageCause const &): bool */
	attack(_1: object, _2: object): boolean; /// ?attack@Actor@@UEAA_NAEAV1@AEBW4ActorDamageCause@@@Z
	/** baseTick(void): void */
	baseTick(): void; /// ?baseTick@Actor@@UEAAXXZ
	/** blockedByShield(ActorDamageSource const &,Actor &): void */
	blockedByShield(_1: object, _2: object): void; /// ?blockedByShield@Actor@@UEAAXAEBVActorDamageSource@@AEAV1@@Z
	/** buildForward(IActorMovementProxy const &): class Vec3 */
	buildForward(_1: object): unknown; /// ?buildForward@Actor@@SA?AVVec3@@AEBUIActorMovementProxy@@@Z
	/** buildForward(void): class Vec3 */
	buildForward(): unknown; /// ?buildForward@Actor@@QEBA?AVVec3@@XZ
	/** burn(int,bool): void */
	burn(_1: number, _2: boolean): void; /// ?burn@Actor@@QEAAXH_N@Z
	/** calcCenterPos(void): class Vec3 */
	calcCenterPos(): unknown; /// ?calcCenterPos@Actor@@QEBA?AVVec3@@XZ
	/** canAddPassenger(Actor &): bool */
	canAddPassenger(_1: object): boolean; /// ?canAddPassenger@Actor@@UEBA_NAEAV1@@Z
	/** canAttack(Actor *,bool): bool */
	canAttack(_1: object, _2: boolean): boolean; /// ?canAttack@Actor@@UEBA_NPEAV1@_N@Z
	/** canBeAffected(MobEffectInstance const &): bool */
	canBeAffected(_1: object): boolean; /// ?canBeAffected@Actor@@UEBA_NAEBVMobEffectInstance@@@Z
	/** canBeAffected(int): bool */
	canBeAffected(_1: number): boolean; /// ?canBeAffected@Actor@@UEBA_NH@Z
	/** canBeAffectedByArrow(MobEffectInstance const &): bool */
	canBeAffectedByArrow(_1: object): boolean; /// ?canBeAffectedByArrow@Actor@@UEBA_NAEBVMobEffectInstance@@@Z
	/** canBeginOrContinueClimbingLadder(void): bool */
	canBeginOrContinueClimbingLadder(): boolean; /// ?canBeginOrContinueClimbingLadder@Actor@@QEBA_NXZ
	/** canCurrentlySwim(void): bool */
	canCurrentlySwim(): boolean; /// ?canCurrentlySwim@Actor@@QEBA_NXZ
	/** canDisableShield(void): bool */
	canDisableShield(): boolean; /// ?canDisableShield@Actor@@UEAA_NXZ
	/** canObstructSpawningAndBlockPlacement(void): bool */
	canObstructSpawningAndBlockPlacement(): boolean; /// ?canObstructSpawningAndBlockPlacement@Actor@@UEBA_NXZ
	/** canPowerJump(void): bool */
	canPowerJump(): boolean; /// ?canPowerJump@Actor@@UEBA_NXZ
	/** canSee(Actor const &): bool */
	canSee(_1: object): boolean; /// ?canSee@Actor@@UEBA_NAEBV1@@Z
	/** canSee(Vec3 const &): bool */
	canSee(_1: object): boolean; /// ?canSee@Actor@@UEBA_NAEBVVec3@@@Z
	/** canSeeDaylight(void): bool */
	canSeeDaylight(): boolean; /// ?canSeeDaylight@Actor@@QEBA_NXZ
	/** canShowNameTag(void): bool */
	canShowNameTag(): boolean; /// ?canShowNameTag@Actor@@UEBA_NXZ
	/** causeFallDamage(float,float,ActorDamageSource): void */
	causeFallDamage(_1: number, _2: number, _3: unknown): void; /// ?causeFallDamage@Actor@@UEAAXMMVActorDamageSource@@@Z
	/** celebrateHunt(int,bool): void */
	celebrateHunt(_1: number, _2: boolean): void; /// ?celebrateHunt@Actor@@QEAAXH_N@Z
	/** checkEntityOnewayCollision(BlockSource &,BlockPos const &): void */
	checkEntityOnewayCollision(_1: object, _2: object): void; /// ?checkEntityOnewayCollision@Actor@@SAXAEAVBlockSource@@AEBVBlockPos@@@Z
	/** checkFallDamage(float,bool): void */
	checkFallDamage(_1: number, _2: boolean): void; /// ?checkFallDamage@Actor@@UEAAXM_N@Z
	/** checkInsideBlocks(float): void */
	checkInsideBlocks(_1: number): void; /// ?checkInsideBlocks@Actor@@MEAAXM@Z
	/** checkInsideCauldron(void): void */
	checkInsideCauldron(): void; /// ?checkInsideCauldron@Actor@@QEAAXXZ
	/** chorusFruitTeleport(Vec3 const &): void */
	chorusFruitTeleport(_1: object): void; /// ?chorusFruitTeleport@Actor@@UEAAXAEBVVec3@@@Z
	/** closerThan(Actor const &,float): bool */
	closerThan(_1: object, _2: number): boolean; /// ?closerThan@Actor@@QEBA_NAEBV1@M@Z
	/** closerThan(Actor const &,float,float): bool */
	closerThan(_1: object, _2: number, _3: number): boolean; /// ?closerThan@Actor@@QEBA_NAEBV1@MM@Z
	/** consumeItem(ItemActor &,int): void */
	consumeItem(_1: object, _2: number): void; /// ?consumeItem@Actor@@QEAAXAEAVItemActor@@H@Z
	/** consumeTotem(void): bool */
	consumeTotem(): boolean; /// ?consumeTotem@Actor@@UEAA_NXZ
	/** despawn(void): void */
	despawn(): void; /// ?despawn@Actor@@UEAAXXZ
	/** die(ActorDamageSource const &): void */
	die(_1: object): void; /// ?die@Actor@@UEAAXAEBVActorDamageSource@@@Z
	/** distanceSqrToBlockPosCenter(BlockPos const &): float */
	distanceSqrToBlockPosCenter(_1: object): number; /// ?distanceSqrToBlockPosCenter@Actor@@QEBAMAEBVBlockPos@@@Z
	/** distanceTo(Actor const &): float */
	distanceTo(_1: object): number; /// ?distanceTo@Actor@@QEBAMAEBV1@@Z
	/** distanceTo(Vec3 const &): float */
	distanceTo(_1: object): number; /// ?distanceTo@Actor@@QEBAMAEBVVec3@@@Z
	/** distanceToSqr(Actor const &): float */
	distanceToSqr(_1: object): number; /// ?distanceToSqr@Actor@@QEBAMAEBV1@@Z
	/** distanceToSqr(Vec3 const &): float */
	distanceToSqr(_1: object): number; /// ?distanceToSqr@Actor@@QEBAMAEBVVec3@@@Z
	/** doFireHurt(int): bool */
	doFireHurt(_1: number): boolean; /// ?doFireHurt@Actor@@UEAA_NH@Z
	/** doWaterSplashEffect(void): void */
	doWaterSplashEffect(): void; /// ?doWaterSplashEffect@Actor@@UEAAXXZ
	/** drop(ItemStack const &,bool): bool */
	drop(_1: object, _2: boolean): boolean; /// ?drop@Actor@@UEAA_NAEBVItemStack@@_N@Z
	/** dropTowards(ItemStack const &,Vec3): void */
	dropTowards(_1: object, _2: Vec3): void; /// ?dropTowards@Actor@@QEAAXAEBVItemStack@@VVec3@@@Z
	/** extractSnapshot(PlayerSnapshotComponent &): void */
	extractSnapshot(_1: object): void; /// ?extractSnapshot@Actor@@UEBAXAEAUPlayerSnapshotComponent@@@Z
	/** feed(int): void */
	feed(_1: number): void; /// ?feed@Actor@@UEAAXH@Z
	/** fetchNearbyActorsSorted(Vec3 const &,ActorType): class std::vector<struct DistanceSortedActor,class std::allocator<struct DistanceSortedActor> > */
	fetchNearbyActorsSorted(_1: object, _2: unknown): unknown; /// ?fetchNearbyActorsSorted@Actor@@QEAA?AV?$vector@UDistanceSortedActor@@V?$allocator@UDistanceSortedActor@@@std@@@std@@AEBVVec3@@W4ActorType@@@Z
	/** filterFormattedNameTag(UIProfanityContext const &): void */
	filterFormattedNameTag(_1: object): void; /// ?filterFormattedNameTag@Actor@@UEAAXAEBVUIProfanityContext@@@Z
	/** flagPassengerToRemove(Actor &): void */
	flagPassengerToRemove(_1: object): void; /// ?flagPassengerToRemove@Actor@@UEAAXAEAV1@@Z
	/** getAABB(void): class AABB const & __ptr64 */
	getAABB(): AABB; /// ?getAABB@Actor@@QEBAAEBVAABB@@XZ
	/** getAABBDim(void): class Vec2 const & __ptr64 */
	getAABBDim(): unknown; /// ?getAABBDim@Actor@@QEBAAEBVVec2@@XZ
	/** getActorIdentifier(void): struct ActorDefinitionIdentifier const & __ptr64 */
	getActorIdentifier(): ActorDefinitionIdentifier; /// ?getActorIdentifier@Actor@@QEBAAEBUActorDefinitionIdentifier@@XZ
	/** getActorRendererId(void): class HashedString const & __ptr64 */
	getActorRendererId(): unknown; /// ?getActorRendererId@Actor@@UEBAAEBVHashedString@@XZ
	/** getAllArmor(void): class std::vector<class ItemStack const * __ptr64,class std::allocator<class ItemStack const * __ptr64> > */
	getAllArmor(): unknown; /// ?getAllArmor@Actor@@UEBA?AV?$vector@PEBVItemStack@@V?$allocator@PEBVItemStack@@@std@@@std@@XZ
	/** getAmbientSound(void): enum LevelSoundEvent */
	getAmbientSound(): bigint; /// ?getAmbientSound@Actor@@UEBA?AW4LevelSoundEvent@@XZ
	/** getAnimationComponent(void): class AnimationComponent & __ptr64 */
	getAnimationComponent(): unknown; /// ?getAnimationComponent@Actor@@UEAAAEAVAnimationComponent@@XZ
	/** getArmor(ArmorSlot): class ItemStack const & __ptr64 */
	getArmor(_1: unknown): ItemStack; /// ?getArmor@Actor@@UEBAAEBVItemStack@@W4ArmorSlot@@@Z
	/** getArmorContainer(void): class SimpleContainer const & __ptr64 */
	getArmorContainer(): SimpleContainer; /// ?getArmorContainer@Actor@@QEBAAEBVSimpleContainer@@XZ
	/** getAttachPos(ActorLocation,float): class Vec3 */
	getAttachPos(_1: unknown, _2: number): unknown; /// ?getAttachPos@Actor@@UEBA?AVVec3@@W4ActorLocation@@M@Z
	/** getAttribute(Attribute const &): class AttributeInstance const & __ptr64 */
	getAttribute(_1: object): unknown; /// ?getAttribute@Actor@@UEBAAEBVAttributeInstance@@AEBVAttribute@@@Z
	/** getBlockDamageCause(Block const &): enum ActorDamageCause */
	getBlockDamageCause(_1: object): bigint; /// ?getBlockDamageCause@Actor@@UEBA?AW4ActorDamageCause@@AEBVBlock@@@Z
	/** getBlockPosCurrentlyStandingOn(Actor const *): class BlockPos */
	getBlockPosCurrentlyStandingOn(_1: object): BlockPos; /// ?getBlockPosCurrentlyStandingOn@Actor@@QEBA?AVBlockPos@@PEBV1@@Z
	/** getBrightness(float): float */
	getBrightness(_1: number): number; /// ?getBrightness@Actor@@UEBAMM@Z
	/** getCarriedItem(void): class ItemStack const & __ptr64 */
	getCarriedItem(): ItemStack; /// ?getCarriedItem@Actor@@UEBAAEBVItemStack@@XZ
	/** getCarriedItemInSlotPreferredBy(ItemStack const &): class ItemStack const & __ptr64 */
	getCarriedItemInSlotPreferredBy(_1: object): ItemStack; /// ?getCarriedItemInSlotPreferredBy@Actor@@QEBAAEBVItemStack@@AEBV2@@Z
	/** getChestSlots(void): int */
	getChestSlots(): number; /// ?getChestSlots@Actor@@UEBAHXZ
	/** getColor(void): enum PaletteColor */
	getColor(): bigint; /// ?getColor@Actor@@QEBA?AW4PaletteColor@@XZ
	/** getColor2(void): enum PaletteColor */
	getColor2(): bigint; /// ?getColor2@Actor@@QEBA?AW4PaletteColor@@XZ
	/** getCommandPermissionLevel(void): enum CommandPermissionLevel */
	getCommandPermissionLevel(): bigint; /// ?getCommandPermissionLevel@Actor@@UEBA?AW4CommandPermissionLevel@@XZ
	/** getControllingSeat(void): int */
	getControllingSeat(): number; /// ?getControllingSeat@Actor@@QEBAHXZ
	/** getDamageNearbyMobs(void): bool */
	getDamageNearbyMobs(): boolean; /// ?getDamageNearbyMobs@Actor@@QEBA_NXZ
	/** getDimensionConst(void): class Dimension const & __ptr64 */
	getDimensionConst(): Dimension; /// ?getDimensionConst@Actor@@QEBAAEBVDimension@@XZ
	/** getDimensionId(void): class AutomaticID<class Dimension,int> */
	getDimensionId(): unknown; /// ?getDimensionId@Actor@@UEBA?AV?$AutomaticID@VDimension@@H@@XZ
	/** getEffect(MobEffect const &): class MobEffectInstance const * __ptr64 */
	getEffect(_1: object): unknown; /// ?getEffect@Actor@@QEBAPEBVMobEffectInstance@@AEBVMobEffect@@@Z
	/** getEntityTypeId(void): enum ActorType */
	getEntityTypeId(): bigint; /// ?getEntityTypeId@Actor@@UEBA?AW4ActorType@@XZ
	/** getEquipSlots(void): int */
	getEquipSlots(): number; /// ?getEquipSlots@Actor@@UEBAHXZ
	/** getEquipmentCount(void): int */
	getEquipmentCount(): number; /// ?getEquipmentCount@Actor@@UEBAHXZ
	/** getEquippedSlot(EquipmentSlot): class ItemStack const & __ptr64 */
	getEquippedSlot(_1: unknown): ItemStack; /// ?getEquippedSlot@Actor@@UEBAAEBVItemStack@@W4EquipmentSlot@@@Z
	/** getEquippedTotem(void): class ItemStack const & __ptr64 */
	getEquippedTotem(): ItemStack; /// ?getEquippedTotem@Actor@@UEBAAEBVItemStack@@XZ
	/** getFiringPos(void): class Vec3 */
	getFiringPos(): unknown; /// ?getFiringPos@Actor@@UEBA?AVVec3@@XZ
	/** getFirstPassenger(void): class Actor * __ptr64 */
	getFirstPassenger(): Actor; /// ?getFirstPassenger@Actor@@QEBAPEAV1@XZ
	/** getFormattedNameTag(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	getFormattedNameTag(): unknown; /// ?getFormattedNameTag@Actor@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** getHandContainer(void): class SimpleContainer const & __ptr64 */
	getHandContainer(): SimpleContainer; /// ?getHandContainer@Actor@@QEBAAEBVSimpleContainer@@XZ
	/** getHeadLookVector(float): class Vec3 */
	getHeadLookVector(_1: number): unknown; /// ?getHeadLookVector@Actor@@UEBA?AVVec3@@M@Z
	getHealth(): bigint; /// Actor::getHealth
	/** getHealth(void): int */
	getHealth(): number; /// ?getHealth@Actor@@QEBAHXZ
	/** getHurtDir(void): int */
	getHurtDir(): number; /// ?getHurtDir@Actor@@QEBAHXZ
	/** getInteraction(Player &,ActorInteraction &,Vec3 const &): bool */
	getInteraction(_1: object, _2: object, _3: object): boolean; /// ?getInteraction@Actor@@UEAA_NAEAVPlayer@@AEAVActorInteraction@@AEBVVec3@@@Z
	/** getInterpolatedBodyRot(float): float */
	getInterpolatedBodyRot(_1: number): number; /// ?getInterpolatedBodyRot@Actor@@UEBAMM@Z
	/** getInterpolatedPosition(float): class Vec3 */
	getInterpolatedPosition(_1: number): unknown; /// ?getInterpolatedPosition@Actor@@QEBA?AVVec3@@M@Z
	/** getInterpolatedRidingPosition(float): class Vec3 */
	getInterpolatedRidingPosition(_1: number): unknown; /// ?getInterpolatedRidingPosition@Actor@@UEBA?AVVec3@@M@Z
	/** getInterpolatedRotation(float): class Vec2 */
	getInterpolatedRotation(_1: number): unknown; /// ?getInterpolatedRotation@Actor@@QEBA?AVVec2@@M@Z
	/** getInterpolatedWalkAnimSpeed(float): float */
	getInterpolatedWalkAnimSpeed(_1: number): number; /// ?getInterpolatedWalkAnimSpeed@Actor@@UEBAMM@Z
	/** getInventorySize(void): int */
	getInventorySize(): number; /// ?getInventorySize@Actor@@UEBAHXZ
	/** getLastHurtByMob(void): class Mob * __ptr64 */
	getLastHurtByMob(): Mob; /// ?getLastHurtByMob@Actor@@UEAAPEAVMob@@XZ
	/** getLastHurtByPlayer(void): class Player * __ptr64 */
	getLastHurtByPlayer(): Player; /// ?getLastHurtByPlayer@Actor@@UEAAPEAVPlayer@@XZ
	/** getLastHurtMob(void): class Mob * __ptr64 */
	getLastHurtMob(): Mob; /// ?getLastHurtMob@Actor@@UEAAPEAVMob@@XZ
	/** getLastHurtTimestamp(void): unsigned __int64 */
	getLastHurtTimestamp(): bigint; /// ?getLastHurtTimestamp@Actor@@QEBA_KXZ
	/** getLevel(void): class Level const & __ptr64 */
	getLevel(): Level; /// ?getLevel@Actor@@QEBAAEBVLevel@@XZ
	/** getLinks(void): class std::vector<struct ActorLink,class std::allocator<struct ActorLink> > */
	getLinks(): unknown; /// ?getLinks@Actor@@QEBA?AV?$vector@UActorLink@@V?$allocator@UActorLink@@@std@@@std@@XZ
	/** getLiquidAABB(MaterialType): class AABB */
	getLiquidAABB(_1: unknown): AABB; /// ?getLiquidAABB@Actor@@UEBA?AVAABB@@W4MaterialType@@@Z
	/** getLootTable(void): class LootTable * __ptr64 */
	getLootTable(): unknown; /// ?getLootTable@Actor@@UEAAPEAVLootTable@@XZ
	/** getMapDecorationRotation(void): float */
	getMapDecorationRotation(): number; /// ?getMapDecorationRotation@Actor@@UEBAMXZ
	/** getMarkVariant(void): int */
	getMarkVariant(): number; /// ?getMarkVariant@Actor@@QEBAHXZ
	/** getMaxHealth(void): int */
	getMaxHealth(): number; /// ?getMaxHealth@Actor@@QEBAHXZ
	/** getMolangVariables(void): class MolangVariableMap & __ptr64 */
	getMolangVariables(): unknown; /// ?getMolangVariables@Actor@@QEAAAEAVMolangVariableMap@@XZ
	/** getMovementProxy(void): class gsl::not_null<class std::shared_ptr<struct IActorMovementProxy const> > */
	getMovementProxy(): unknown; /// ?getMovementProxy@Actor@@QEBA?AV?$not_null@V?$shared_ptr@$$CBUIActorMovementProxy@@@std@@@gsl@@XZ
	/** getMutableAttribute(Attribute const &): class AttributeInstance * __ptr64 */
	getMutableAttribute(_1: object): unknown; /// ?getMutableAttribute@Actor@@UEAAPEAVAttributeInstance@@AEBVAttribute@@@Z
	/** getNameTag(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64 */
	getNameTag(): unknown; /// ?getNameTag@Actor@@UEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** getNextStep(float): float */
	getNextStep(_1: number): number; /// ?getNextStep@Actor@@UEAAMM@Z
	/** getOffhandSlot(void): class ItemStack const & __ptr64 */
	getOffhandSlot(): ItemStack; /// ?getOffhandSlot@Actor@@QEBAAEBVItemStack@@XZ
	/** getOrAddDynamicProperties(void): class DynamicProperties & __ptr64 */
	getOrAddDynamicProperties(): unknown; /// ?getOrAddDynamicProperties@Actor@@QEAAAEAVDynamicProperties@@XZ
	/** getOwner(void): class Mob * __ptr64 */
	getOwner(): Mob; /// ?getOwner@Actor@@QEBAPEAVMob@@XZ
	/** getOwnerEntityType(void): enum ActorType */
	getOwnerEntityType(): bigint; /// ?getOwnerEntityType@Actor@@UEAA?AW4ActorType@@XZ
	/** getOwnerId(void): struct ActorUniqueID const */
	getOwnerId(): unknown; /// ?getOwnerId@Actor@@QEBA?BUActorUniqueID@@XZ
	/** getPassengerIndex(Actor const &): int */
	getPassengerIndex(_1: object): number; /// ?getPassengerIndex@Actor@@QEBAHAEBV1@@Z
	/** getPassengerYRotation(Actor const &): float */
	getPassengerYRotation(_1: object): number; /// ?getPassengerYRotation@Actor@@UEBAMAEBV1@@Z
	/** getPersistingTradeOffers(void): class std::unique_ptr<class CompoundTag,struct std::default_delete<class CompoundTag> > */
	getPersistingTradeOffers(): unknown; /// ?getPersistingTradeOffers@Actor@@QEAA?AV?$unique_ptr@VCompoundTag@@U?$default_delete@VCompoundTag@@@std@@@std@@XZ
	/** getPickRadius(void): float */
	getPickRadius(): number; /// ?getPickRadius@Actor@@UEAAMXZ
	/** getPlayerOwner(void): class Player * __ptr64 */
	getPlayerOwner(): Player; /// ?getPlayerOwner@Actor@@QEBAPEAVPlayer@@XZ
	/** getPortalCooldown(void): int */
	getPortalCooldown(): number; /// ?getPortalCooldown@Actor@@UEBAHXZ
	/** getPosDelta(void): class Vec3 const & __ptr64 */
	getPosDelta(): unknown; /// ?getPosDelta@Actor@@QEBAAEBVVec3@@XZ
	/** getPosExtrapolated(float): class Vec3 const */
	getPosExtrapolated(_1: number): unknown; /// ?getPosExtrapolated@Actor@@UEBA?BVVec3@@M@Z
	/** getPosPrev(void): class Vec3 const & __ptr64 */
	getPosPrev(): unknown; /// ?getPosPrev@Actor@@UEBAAEBVVec3@@XZ
	/** getPosition(void): class Vec3 const & __ptr64 */
	getPosition(): unknown; /// ?getPosition@Actor@@UEBAAEBVVec3@@XZ
	/** getPredictedMovementValues(void): struct PredictedMovementValues const & __ptr64 */
	getPredictedMovementValues(): unknown; /// ?getPredictedMovementValues@Actor@@UEBAAEBUPredictedMovementValues@@XZ
	/** getRandom(void): class Random & __ptr64 */
	getRandom(): Random; /// ?getRandom@Actor@@QEBAAEAVRandom@@XZ
	/** getRegionConst(void): class BlockSource const & __ptr64 */
	getRegionConst(): BlockSource; /// ?getRegionConst@Actor@@QEBAAEBVBlockSource@@XZ
	/** getRidingHeight(void): float */
	getRidingHeight(): number; /// ?getRidingHeight@Actor@@QEBAMXZ
	/** getRotation(void): class Vec2 */
	getRotation(): unknown; /// ?getRotation@Actor@@QEBA?AVVec2@@XZ
	/** getRuntimeID(void): class ActorRuntimeID */
	getRuntimeID(): unknown; /// ?getRuntimeID@Actor@@QEBA?AVActorRuntimeID@@XZ
	/** getScoreTag(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64 */
	getScoreTag(): unknown; /// ?getScoreTag@Actor@@UEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** getShadowHeightOffs(void): float */
	getShadowHeightOffs(): number; /// ?getShadowHeightOffs@Actor@@UEAAMXZ
	/** getShadowRadius(void): float */
	getShadowRadius(): number; /// ?getShadowRadius@Actor@@UEBAMXZ
	/** getSourceUniqueID(void): struct ActorUniqueID */
	getSourceUniqueID(): unknown; /// ?getSourceUniqueID@Actor@@UEBA?AUActorUniqueID@@XZ
	/** getSpeedInMetersPerSecond(void): float */
	getSpeedInMetersPerSecond(): number; /// ?getSpeedInMetersPerSecond@Actor@@QEBAMXZ
	/** getStatusFlag(ActorFlags): bool */
	getStatusFlag(_1: unknown): boolean; /// ?getStatusFlag@Actor@@QEBA_NW4ActorFlags@@@Z
	/** getStructuralIntegrity(void): int */
	getStructuralIntegrity(): number; /// ?getStructuralIntegrity@Actor@@QEBAHXZ
	/** getTags(void): class gsl::span<class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> >,-1> const */
	getTags(): unknown; /// ?getTags@Actor@@QEBA?BV?$span@V?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@$0?0@gsl@@XZ
	/** getTarget(void): class Actor * __ptr64 */
	getTarget(): Actor; /// ?getTarget@Actor@@QEBAPEAV1@XZ
	/** getTradeOffers(void): class MerchantRecipeList * __ptr64 */
	getTradeOffers(): unknown; /// ?getTradeOffers@Actor@@QEAAPEAVMerchantRecipeList@@XZ
	/** getTradingPlayer(void): class Player * __ptr64 */
	getTradingPlayer(): Player; /// ?getTradingPlayer@Actor@@QEBAPEAVPlayer@@XZ
	/** getUniqueID(void): struct ActorUniqueID const & __ptr64 */
	getUniqueID(): unknown; /// ?getUniqueID@Actor@@QEBAAEBUActorUniqueID@@XZ
	/** getVariant(void): int */
	getVariant(): number; /// ?getVariant@Actor@@QEBAHXZ
	/** getVehicle(void): class Actor * __ptr64 */
	getVehicle(): Actor; /// ?getVehicle@Actor@@QEBAPEAV1@XZ
	/** getVehicleRoot(void): class Actor * __ptr64 */
	getVehicleRoot(): Actor; /// ?getVehicleRoot@Actor@@QEBAPEAV1@XZ
	/** getViewVector(float): class Vec3 */
	getViewVector(_1: number): unknown; /// ?getViewVector@Actor@@QEBA?AVVec3@@M@Z
	/** getYawSpeedInDegreesPerSecond(void): float */
	getYawSpeedInDegreesPerSecond(): number; /// ?getYawSpeedInDegreesPerSecond@Actor@@UEBAMXZ
	/** handleEntityEvent(ActorEvent,int): void */
	handleEntityEvent(_1: unknown, _2: number): void; /// ?handleEntityEvent@Actor@@UEAAXW4ActorEvent@@H@Z
	/** handleFallDistanceOnServer(float,float,bool): void */
	handleFallDistanceOnServer(_1: number, _2: number, _3: boolean): void; /// ?handleFallDistanceOnServer@Actor@@UEAAXMM_N@Z
	/** handleInsidePortal(BlockPos const &): void */
	handleInsidePortal(_1: object): void; /// ?handleInsidePortal@Actor@@UEAAXAEBVBlockPos@@@Z
	/** hasCategory(ActorCategory): bool */
	hasCategory(_1: unknown): boolean; /// ?hasCategory@Actor@@QEBA_NW4ActorCategory@@@Z
	/** hasComponent(HashedString const &): bool */
	hasComponent(_1: object): boolean; /// ?hasComponent@Actor@@UEBA_NAEBVHashedString@@@Z
	/** hasEffect(MobEffect const &): bool */
	hasEffect(_1: object): boolean; /// ?hasEffect@Actor@@QEBA_NAEBVMobEffect@@@Z
	/** hasEnteredWater(void): bool */
	hasEnteredWater(): boolean; /// ?hasEnteredWater@Actor@@UEBA_NXZ
	/** hasFamily(HashedString const &): bool */
	hasFamily(_1: object): boolean; /// ?hasFamily@Actor@@QEBA_NAEBVHashedString@@@Z
	/** hasLevel(void): bool */
	hasLevel(): boolean; /// ?hasLevel@Actor@@QEBA_NXZ
	/** hasPassenger(void): bool */
	hasPassenger(): boolean; /// ?hasPassenger@Actor@@QEBA_NXZ
	/** hasPlayerPassenger(void): bool */
	hasPlayerPassenger(): boolean; /// ?hasPlayerPassenger@Actor@@QEBA_NXZ
	/** hasPriorityAmmunition(void): bool */
	hasPriorityAmmunition(): boolean; /// ?hasPriorityAmmunition@Actor@@QEBA_NXZ
	/** hasRuntimeID(void): bool */
	hasRuntimeID(): boolean; /// ?hasRuntimeID@Actor@@QEBA_NXZ
	/** hasSaddle(void): bool */
	hasSaddle(): boolean; /// ?hasSaddle@Actor@@QEBA_NXZ
	/** hasTeleported(void): bool */
	hasTeleported(): boolean; /// ?hasTeleported@Actor@@QEBA_NXZ
	/** hasType(ActorType): bool */
	hasType(_1: unknown): boolean; /// ?hasType@Actor@@QEBA_NW4ActorType@@@Z
	/** heal(int): void */
	heal(_1: number): void; /// ?heal@Actor@@UEAAXH@Z
	/** hurt(ActorDamageSource const &,float,bool,bool): bool */
	hurt(_1: object, _2: number, _3: boolean, _4: boolean): boolean; /// ?hurt@Actor@@QEAA_NAEBVActorDamageSource@@M_N1@Z
	/** initActorProperties(void): void */
	initActorProperties(): void; /// ?initActorProperties@Actor@@QEAAXXZ
	/** initParams(VariantParameterList &): void */
	initParams(_1: object): void; /// ?initParams@Actor@@QEAAXAEAVVariantParameterList@@@Z
	/** initializeComponents(Actor::InitializationMethod,VariantParameterList const &): void */
	initializeComponents(_1: unknown, _2: object): void; /// ?initializeComponents@Actor@@MEAAXW4InitializationMethod@1@AEBVVariantParameterList@@@Z
	/** interpolatorTick(void): void */
	interpolatorTick(): void; /// ?interpolatorTick@Actor@@UEAAXXZ
	/** intersects(Vec3 const &,Vec3 const &): bool */
	intersects(_1: object, _2: object): boolean; /// ?intersects@Actor@@UEBA_NAEBVVec3@@0@Z
	/** isAffectedByWaterBottle(void): bool */
	isAffectedByWaterBottle(): boolean; /// ?isAffectedByWaterBottle@Actor@@UEBA_NXZ
	/** isAlive(void): bool */
	isAlive(): boolean; /// ?isAlive@Actor@@UEBA_NXZ
	/** isAttackableGamemode(void): bool */
	isAttackableGamemode(): boolean; /// ?isAttackableGamemode@Actor@@UEBA_NXZ
	/** isAutonomous(void): bool */
	isAutonomous(): boolean; /// ?isAutonomous@Actor@@QEBA_NXZ
	/** isBaby(void): bool */
	isBaby(): boolean; /// ?isBaby@Actor@@QEBA_NXZ
	/** isBreakingObstruction(void): bool */
	isBreakingObstruction(): boolean; /// ?isBreakingObstruction@Actor@@QEBA_NXZ
	/** isClientSide(void): bool */
	isClientSide(): boolean; /// ?isClientSide@Actor@@UEBA_NXZ
	/** isControlledByLocalInstance(void): bool */
	isControlledByLocalInstance(): boolean; /// ?isControlledByLocalInstance@Actor@@QEBA_NXZ
	/** isEnchanted(void): bool */
	isEnchanted(): boolean; /// ?isEnchanted@Actor@@UEBA_NXZ
	/** isFireImmune(void): bool */
	isFireImmune(): boolean; /// ?isFireImmune@Actor@@UEBA_NXZ
	/** isGlobal(void): bool */
	isGlobal(): boolean; /// ?isGlobal@Actor@@QEBA_NXZ
	/** isImmersedInWater(IActorMovementProxy const &): bool */
	isImmersedInWater(_1: object): boolean; /// ?isImmersedInWater@Actor@@SA_NAEBUIActorMovementProxy@@@Z
	/** isImmobile(IActorMovementProxy const &): bool */
	isImmobile(_1: object): boolean; /// ?isImmobile@Actor@@SA_NAEBUIActorMovementProxy@@@Z
	/** isImmobile(void): bool */
	isImmobile(): boolean; /// ?isImmobile@Actor@@UEBA_NXZ
	/** isInContactWithWater(void): bool */
	isInContactWithWater(): boolean; /// ?isInContactWithWater@Actor@@QEBA_NXZ
	/** isInLava(void): bool */
	isInLava(): boolean; /// ?isInLava@Actor@@UEBA_NXZ
	/** isInLove(void): bool */
	isInLove(): boolean; /// ?isInLove@Actor@@QEBA_NXZ
	/** isInPrecipitation(void): bool */
	isInPrecipitation(): boolean; /// ?isInPrecipitation@Actor@@QEBA_NXZ
	/** isInRain(void): bool */
	isInRain(): boolean; /// ?isInRain@Actor@@QEBA_NXZ
	/** isInSnow(void): bool */
	isInSnow(): boolean; /// ?isInSnow@Actor@@QEBA_NXZ
	/** isInThunderstorm(void): bool */
	isInThunderstorm(): boolean; /// ?isInThunderstorm@Actor@@QEBA_NXZ
	/** isInWall(void): bool */
	isInWall(): boolean; /// ?isInWall@Actor@@UEBA_NXZ
	/** isInWater(void): bool */
	isInWater(): boolean; /// ?isInWater@Actor@@UEBA_NXZ
	/** isInWaterOrRain(void): bool */
	isInWaterOrRain(): boolean; /// ?isInWaterOrRain@Actor@@QEBA_NXZ
	/** isInsideBorderBlock(float): bool */
	isInsideBorderBlock(_1: number): boolean; /// ?isInsideBorderBlock@Actor@@QEBA_NM@Z
	/** isInsidePortal(void): bool */
	isInsidePortal(): boolean; /// ?isInsidePortal@Actor@@QEBA_NXZ
	/** isInvertedHealAndHarm(void): bool */
	isInvertedHealAndHarm(): boolean; /// ?isInvertedHealAndHarm@Actor@@UEBA_NXZ
	/** isInvisible(void): bool */
	isInvisible(): boolean; /// ?isInvisible@Actor@@UEBA_NXZ
	/** isInvulnerableTo(ActorDamageSource const &): bool */
	isInvulnerableTo(_1: object): boolean; /// ?isInvulnerableTo@Actor@@UEBA_NAEBVActorDamageSource@@@Z
	/** isLeashed(void): bool */
	isLeashed(): boolean; /// ?isLeashed@Actor@@QEBA_NXZ
	/** isMoving(void): bool */
	isMoving(): boolean; /// ?isMoving@Actor@@QEBA_NXZ
	/** isOnFire(void): bool */
	isOnFire(): boolean; /// ?isOnFire@Actor@@UEBA_NXZ
	/** isOverWater(void): bool */
	isOverWater(): boolean; /// ?isOverWater@Actor@@UEBA_NXZ
	/** isPassenger(Actor const &): bool */
	isPassenger(_1: object): boolean; /// ?isPassenger@Actor@@QEBA_NAEBV1@@Z
	/** isRegionValid(void): bool */
	isRegionValid(): boolean; /// ?isRegionValid@Actor@@QEBA_NXZ
	/** isRemotePlayer(void): bool */
	isRemotePlayer(): boolean; /// ?isRemotePlayer@Actor@@UEBA_NXZ
	/** isRemoved(void): bool */
	isRemoved(): boolean; /// ?isRemoved@Actor@@QEBA_NXZ
	/** isRiding(Actor *): bool */
	isRiding(_1: object): boolean; /// ?isRiding@Actor@@QEBA_NPEAV1@@Z
	/** isRiding(void): bool */
	isRiding(): boolean; /// ?isRiding@Actor@@QEBA_NXZ
	/** isSilent(void): bool */
	isSilent(): boolean; /// ?isSilent@Actor@@UEBA_NXZ
	/** isSitting(void): bool */
	isSitting(): boolean; /// ?isSitting@Actor@@QEBA_NXZ
	/** isSkyLit(float): bool */
	isSkyLit(_1: number): boolean; /// ?isSkyLit@Actor@@UEAA_NM@Z
	/** isSneaking(void): bool */
	isSneaking(): boolean; /// ?isSneaking@Actor@@QEBA_NXZ
	/** isStanding(IActorMovementProxy const &): bool */
	isStanding(_1: object): boolean; /// ?isStanding@Actor@@SA_NAEBUIActorMovementProxy@@@Z
	/** isSwimming(void): bool */
	isSwimming(): boolean; /// ?isSwimming@Actor@@QEBA_NXZ
	/** isTame(void): bool */
	isTame(): boolean; /// ?isTame@Actor@@QEBA_NXZ
	/** isTouchingDamageBlock(void): bool */
	isTouchingDamageBlock(): boolean; /// ?isTouchingDamageBlock@Actor@@QEBA_NXZ
	/** isType(ActorType): bool */
	isType(_1: unknown): boolean; /// ?isType@Actor@@QEBA_NW4ActorType@@@Z
	/** isUnderLiquid(MaterialType): bool */
	isUnderLiquid(_1: unknown): boolean; /// ?isUnderLiquid@Actor@@UEBA_NW4MaterialType@@@Z
	/** isWearingLeatherArmor(void): bool const */
	isWearingLeatherArmor(): boolean; /// ?isWearingLeatherArmor@Actor@@UEBA?B_NXZ
	/** kill(void): void */
	kill(): void; /// ?kill@Actor@@UEAAXXZ
	/** killed(Actor &): void */
	killed(_1: object): void; /// ?killed@Actor@@UEAAXAEAV1@@Z
	/** lerpMotion(Vec3 const &): void */
	lerpMotion(_1: object): void; /// ?lerpMotion@Actor@@UEAAXAEBVVec3@@@Z
	/** lerpTo(Vec3 const &,Vec2 const &,float,int): void */
	lerpTo(_1: object, _2: object, _3: number, _4: number): void; /// ?lerpTo@Actor@@QEAAXAEBVVec3@@AEBVVec2@@MH@Z
	/** lerpToRotation(Vec2 const &,int): void */
	lerpToRotation(_1: object, _2: number): void; /// ?lerpToRotation@Actor@@QEAAXAEBVVec2@@H@Z
	/** load(CompoundTag const &,DataLoadHelper &): bool */
	load(_1: object, _2: object): boolean; /// ?load@Actor@@UEAA_NAEBVCompoundTag@@AEAVDataLoadHelper@@@Z
	/** markHurt(void): void */
	markHurt(): void; /// ?markHurt@Actor@@MEAAXXZ
	/** move(IActorMovementProxy &,Vec3 const &): void */
	move(_1: object, _2: object): void; /// ?move@Actor@@UEBAXAEAUIActorMovementProxy@@AEBVVec3@@@Z
	/** move(Vec3 const &): void */
	move(_1: object): void; /// ?move@Actor@@UEAAXAEBVVec3@@@Z
	/** moveBBs(Vec3 const &): void */
	moveBBs(_1: object): void; /// ?moveBBs@Actor@@QEAAXAEBVVec3@@@Z
	/** moveRelative(float,float,float,float): void */
	moveRelative(_1: number, _2: number, _3: number, _4: number): void; /// ?moveRelative@Actor@@QEAAXMMMM@Z
	/** moveTo(Vec3 const &,Vec2 const &): void */
	moveTo(_1: object, _2: object): void; /// ?moveTo@Actor@@QEAAXAEBVVec3@@AEBVVec2@@@Z
	/** normalTick(void): void */
	normalTick(): void; /// ?normalTick@Actor@@UEAAXXZ
	/** onAboveBubbleColumn(bool): void */
	onAboveBubbleColumn(_1: boolean): void; /// ?onAboveBubbleColumn@Actor@@UEAAX_N@Z
	/** onAffectedByWaterBottle(void): void */
	onAffectedByWaterBottle(): void; /// ?onAffectedByWaterBottle@Actor@@QEAAXXZ
	/** onEffectAdded(MobEffectInstance &): void */
	onEffectAdded(_1: object): void; /// ?onEffectAdded@Actor@@UEAAXAEAVMobEffectInstance@@@Z
	/** onEffectRemoved(MobEffectInstance &): void */
	onEffectRemoved(_1: object): void; /// ?onEffectRemoved@Actor@@UEAAXAEAVMobEffectInstance@@@Z
	/** onEffectUpdated(MobEffectInstance &): void */
	onEffectUpdated(_1: object): void; /// ?onEffectUpdated@Actor@@UEAAXAEAVMobEffectInstance@@@Z
	/** onInsideBubbleColumn(bool): void */
	onInsideBubbleColumn(_1: boolean): void; /// ?onInsideBubbleColumn@Actor@@UEAAX_N@Z
	/** onLightningHit(void): void */
	onLightningHit(): void; /// ?onLightningHit@Actor@@UEAAXXZ
	/** onOrphan(void): void */
	onOrphan(): void; /// ?onOrphan@Actor@@UEAAXXZ
	/** onSynchedDataUpdate(int): void */
	onSynchedDataUpdate(_1: number): void; /// ?onSynchedDataUpdate@Actor@@UEAAXH@Z
	/** onSynchedFlagUpdate(int,__int64,__int64): void */
	onSynchedFlagUpdate(_1: number, _2: bigint, _3: bigint): void; /// ?onSynchedFlagUpdate@Actor@@UEAAXH_J0@Z
	/** openContainerComponent(Player &): void */
	openContainerComponent(_1: object): void; /// ?openContainerComponent@Actor@@UEAAXAEAVPlayer@@@Z
	/** outOfWorld(void): void */
	outOfWorld(): void; /// ?outOfWorld@Actor@@UEAAXXZ
	/** passengerTick(void): void */
	passengerTick(): void; /// ?passengerTick@Actor@@UEAAXXZ
	/** performRangedAttack(Actor &,float): void */
	performRangedAttack(_1: object, _2: number): void; /// ?performRangedAttack@Actor@@UEAAXAEAV1@M@Z
	/** pickUpItem(ItemActor &,int): void */
	pickUpItem(_1: object, _2: number): void; /// ?pickUpItem@Actor@@QEAAXAEAVItemActor@@H@Z
	/** playAmbientSound(void): void */
	playAmbientSound(): void; /// ?playAmbientSound@Actor@@UEAAXXZ
	/** playSound(LevelSoundEvent,Vec3 const &,int): void */
	playSound(_1: unknown, _2: object, _3: number): void; /// ?playSound@Actor@@QEAAXW4LevelSoundEvent@@AEBVVec3@@H@Z
	/** playSynchronizedSound(LevelSoundEvent,Vec3 const &,Block const &,bool): void */
	playSynchronizedSound(_1: unknown, _2: object, _3: object, _4: boolean): void; /// ?playSynchronizedSound@Actor@@UEAAXW4LevelSoundEvent@@AEBVVec3@@AEBVBlock@@_N@Z
	/** playSynchronizedSound(LevelSoundEvent,Vec3 const &,int,bool): void */
	playSynchronizedSound(_1: unknown, _2: object, _3: number, _4: boolean): void; /// ?playSynchronizedSound@Actor@@UEAAXW4LevelSoundEvent@@AEBVVec3@@H_N@Z
	/** positionAllPassengers(bool): void */
	positionAllPassengers(_1: boolean): void; /// ?positionAllPassengers@Actor@@QEAAX_N@Z
	/** positionPassenger(Actor &,float): void */
	positionPassenger(_1: object, _2: number): void; /// ?positionPassenger@Actor@@UEAAXAEAV1@M@Z
	/** postSplashGameEvent(void): void */
	postSplashGameEvent(): void; /// ?postSplashGameEvent@Actor@@QEAAXXZ
	/** pushBackActionEventToActionQueue(ActionEvent): void */
	pushBackActionEventToActionQueue(_1: unknown): void; /// ?pushBackActionEventToActionQueue@Actor@@QEAAXVActionEvent@@@Z
	/** pushOutOfBlocks(Vec3 const &): void */
	pushOutOfBlocks(_1: object): void; /// ?pushOutOfBlocks@Actor@@MEAAXAEBVVec3@@@Z
	/** readAdditionalSaveData(CompoundTag const &,DataLoadHelper &): void */
	readAdditionalSaveData(_1: object, _2: object): void; /// ?readAdditionalSaveData@Actor@@MEAAXAEBVCompoundTag@@AEAVDataLoadHelper@@@Z
	/** reload(void): void */
	reload(): void; /// ?reload@Actor@@QEAAXXZ
	/** reloadComponents(Actor::InitializationMethod,VariantParameterList const &): void */
	reloadComponents(_1: unknown, _2: object): void; /// ?reloadComponents@Actor@@MEAAXW4InitializationMethod@1@AEBVVariantParameterList@@@Z
	/** reloadHardcodedClient(Actor::InitializationMethod,VariantParameterList const &): void */
	reloadHardcodedClient(_1: unknown, _2: object): void; /// ?reloadHardcodedClient@Actor@@MEAAXW4InitializationMethod@1@AEBVVariantParameterList@@@Z
	/** reloadLootTable(EquipmentTableDefinition const &): void */
	reloadLootTable(_1: object): void; /// ?reloadLootTable@Actor@@UEAAXAEBUEquipmentTableDefinition@@@Z
	/** reloadLootTable(void): void */
	reloadLootTable(): void; /// ?reloadLootTable@Actor@@UEAAXXZ
	/** remove(void): void */
	remove(): void; /// ?remove@Actor@@UEAAXXZ
	/** removeEffect(int): void */
	removeEffect(_1: number): void; /// ?removeEffect@Actor@@QEAAXH@Z
	/** resetBlockMovementSlowdownMultiplier(void): void */
	resetBlockMovementSlowdownMultiplier(): void; /// ?resetBlockMovementSlowdownMultiplier@Actor@@UEAAXXZ
	/** resetClientAnimations(void): void */
	resetClientAnimations(): void; /// ?resetClientAnimations@Actor@@QEAAXXZ
	/** resetInterpolated(void): void */
	resetInterpolated(): void; /// ?resetInterpolated@Actor@@UEAAXXZ
	/** resetRegion(void): void */
	resetRegion(): void; /// ?resetRegion@Actor@@QEAAXXZ
	/** save(CompoundTag &): bool */
	save(_1: object): boolean; /// ?save@Actor@@UEBA_NAEAVCompoundTag@@@Z
	/** saveEntityFlags(CompoundTag &): void */
	saveEntityFlags(_1: object): void; /// ?saveEntityFlags@Actor@@QEBAXAEAVCompoundTag@@@Z
	/** saveWithoutId(CompoundTag &): void */
	saveWithoutId(_1: object): void; /// ?saveWithoutId@Actor@@UEBAXAEAVCompoundTag@@@Z
	/** sendMotionPacketIfNeeded(void): void */
	sendMotionPacketIfNeeded(): void; /// ?sendMotionPacketIfNeeded@Actor@@UEAAXXZ
	/** serializationSetHealth(int): void */
	serializationSetHealth(_1: number): void; /// ?serializationSetHealth@Actor@@QEAAXH@Z
	/** setAABB(AABB const &): void */
	setAABB(_1: object): void; /// ?setAABB@Actor@@QEAAXAEBVAABB@@@Z
	/** setActorRendererId(HashedString): void */
	setActorRendererId(_1: unknown): void; /// ?setActorRendererId@Actor@@QEAAXVHashedString@@@Z
	/** setArmor(ArmorSlot,ItemStack const &): void */
	setArmor(_1: unknown, _2: object): void; /// ?setArmor@Actor@@UEAAXW4ArmorSlot@@AEBVItemStack@@@Z
	/** setBlockMovementSlowdownMultiplier(BlockLegacy const &,Vec3 const &): void */
	setBlockMovementSlowdownMultiplier(_1: object, _2: object): void; /// ?setBlockMovementSlowdownMultiplier@Actor@@UEAAXAEBVBlockLegacy@@AEBVVec3@@@Z
	/** setBreakingObstruction(bool): void */
	setBreakingObstruction(_1: boolean): void; /// ?setBreakingObstruction@Actor@@QEAAX_N@Z
	/** setCanFly(bool): void */
	setCanFly(_1: boolean): void; /// ?setCanFly@Actor@@QEAAX_N@Z
	/** setCanPowerJump(bool): void */
	setCanPowerJump(_1: boolean): void; /// ?setCanPowerJump@Actor@@UEAAX_N@Z
	/** setCarriedItem(ItemStack const &): void */
	setCarriedItem(_1: object): void; /// ?setCarriedItem@Actor@@UEAAXAEBVItemStack@@@Z
	/** setCharged(bool): void */
	setCharged(_1: boolean): void; /// ?setCharged@Actor@@QEAAX_N@Z
	/** setColor(PaletteColor): void */
	setColor(_1: unknown): void; /// ?setColor@Actor@@QEAAXW4PaletteColor@@@Z
	/** setDamageNearbyMobs(bool): void */
	setDamageNearbyMobs(_1: boolean): void; /// ?setDamageNearbyMobs@Actor@@UEAAX_N@Z
	/** setDancing(bool): void */
	setDancing(_1: boolean): void; /// ?setDancing@Actor@@QEAAX_N@Z
	/** setEnchanted(bool): void */
	setEnchanted(_1: boolean): void; /// ?setEnchanted@Actor@@QEAAX_N@Z
	/** setHurtDir(int): void */
	setHurtDir(_1: number): void; /// ?setHurtDir@Actor@@QEAAXH@Z
	/** setHurtTime(int): void */
	setHurtTime(_1: number): void; /// ?setHurtTime@Actor@@QEAAXH@Z
	/** setInvisible(bool): void */
	setInvisible(_1: boolean): void; /// ?setInvisible@Actor@@QEAAX_N@Z
	/** setJumpDuration(int): void */
	setJumpDuration(_1: number): void; /// ?setJumpDuration@Actor@@QEAAXH@Z
	/** setLastHitBB(Vec3 const &,Vec3 const &): void */
	setLastHitBB(_1: object, _2: object): void; /// ?setLastHitBB@Actor@@QEAAXAEBVVec3@@0@Z
	/** setLastHurtByMob(Mob *): void */
	setLastHurtByMob(_1: object): void; /// ?setLastHurtByMob@Actor@@UEAAXPEAVMob@@@Z
	/** setLastHurtByPlayer(Player *): void */
	setLastHurtByPlayer(_1: object): void; /// ?setLastHurtByPlayer@Actor@@UEAAXPEAVPlayer@@@Z
	/** setLastHurtMob(Actor *): void */
	setLastHurtMob(_1: object): void; /// ?setLastHurtMob@Actor@@UEAAXPEAV1@@Z
	/** setLeashHolder(ActorUniqueID): void */
	setLeashHolder(_1: unknown): void; /// ?setLeashHolder@Actor@@QEAAXUActorUniqueID@@@Z
	/** setMoving(bool): void */
	setMoving(_1: boolean): void; /// ?setMoving@Actor@@QEAAX_N@Z
	/** setNameTagVisible(bool): void */
	setNameTagVisible(_1: boolean): void; /// ?setNameTagVisible@Actor@@UEAAX_N@Z
	/** setOffhandSlot(ItemStack const &): void */
	setOffhandSlot(_1: object): void; /// ?setOffhandSlot@Actor@@UEAAXAEBVItemStack@@@Z
	/** setOwner(ActorUniqueID): void */
	setOwner(_1: unknown): void; /// ?setOwner@Actor@@UEAAXUActorUniqueID@@@Z
	/** setPersistent(void): void */
	setPersistent(): void; /// ?setPersistent@Actor@@QEAAXXZ
	/** setPos(Vec3 const &): void */
	setPos(_1: object): void; /// ?setPos@Actor@@UEAAXAEBVVec3@@@Z
	/** setPreviousPosRot(Vec3 const &,Vec2 const &): void */
	setPreviousPosRot(_1: object, _2: object): void; /// ?setPreviousPosRot@Actor@@QEAAXAEBVVec3@@AEBVVec2@@@Z
	/** setRegion(BlockSource &): void */
	setRegion(_1: object): void; /// ?setRegion@Actor@@QEAAXAEAVBlockSource@@@Z
	/** setResting(bool): void */
	setResting(_1: boolean): void; /// ?setResting@Actor@@QEAAX_N@Z
	/** setRot(Vec2 const &): void */
	setRot(_1: object): void; /// ?setRot@Actor@@UEAAXAEBVVec2@@@Z
	/** setScared(bool): void */
	setScared(_1: boolean): void; /// ?setScared@Actor@@QEAAX_N@Z
	/** setSitting(bool): void */
	setSitting(_1: boolean): void; /// ?setSitting@Actor@@UEAAX_N@Z
	/** setSize(float,float): void */
	setSize(_1: number, _2: number): void; /// ?setSize@Actor@@UEAAXMM@Z
	/** setSneaking(bool): void */
	setSneaking(_1: boolean): void; /// ?setSneaking@Actor@@UEAAX_N@Z
	/** setStanding(bool): void */
	setStanding(_1: boolean): void; /// ?setStanding@Actor@@UEAAX_N@Z
	/** setStatusFlag(ActorFlags,bool): void */
	setStatusFlag(_1: unknown, _2: boolean): void; /// ?setStatusFlag@Actor@@QEAAXW4ActorFlags@@_N@Z
	/** setStunned(bool): void */
	setStunned(_1: boolean): void; /// ?setStunned@Actor@@QEAAX_N@Z
	/** setTarget(Actor *): void */
	setTarget(_1: object): void; /// ?setTarget@Actor@@UEAAXPEAV1@@Z
	/** setVariant(int): void */
	setVariant(_1: number): void; /// ?setVariant@Actor@@QEAAXH@Z
	/** shouldDropDeathLoot(void): bool */
	shouldDropDeathLoot(): boolean; /// ?shouldDropDeathLoot@Actor@@UEBA_NXZ
	/** shouldRender(void): bool */
	shouldRender(): boolean; /// ?shouldRender@Actor@@UEBA_NXZ
	/** shouldTick(void): bool */
	shouldTick(): boolean; /// ?shouldTick@Actor@@UEBA_NXZ
	/** shouldTryMakeStepSound(void): bool */
	shouldTryMakeStepSound(): boolean; /// ?shouldTryMakeStepSound@Actor@@MEAA_NXZ
	/** spawnAtLocation(Block const &,int): class ItemActor * __ptr64 */
	spawnAtLocation(_1: object, _2: number): unknown; /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@AEBVBlock@@H@Z
	/** spawnAtLocation(Block const &,int,float): class ItemActor * __ptr64 */
	spawnAtLocation(_1: object, _2: number, _3: number): unknown; /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@AEBVBlock@@HM@Z
	/** spawnAtLocation(ItemStack const &,float): class ItemActor * __ptr64 */
	spawnAtLocation(_1: object, _2: number): unknown; /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@AEBVItemStack@@M@Z
	/** spawnAtLocation(int,int): class ItemActor * __ptr64 */
	spawnAtLocation(_1: number, _2: number): unknown; /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@HH@Z
	/** spawnAtLocation(int,int,float): class ItemActor * __ptr64 */
	spawnAtLocation(_1: number, _2: number, _3: number): unknown; /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@HHM@Z
	/** spawnDeathParticles(void): void */
	spawnDeathParticles(): void; /// ?spawnDeathParticles@Actor@@QEAAXXZ
	/** spawnDustParticles(int): void */
	spawnDustParticles(_1: number): void; /// ?spawnDustParticles@Actor@@QEAAXH@Z
	/** spawnTamingParticles(bool): void */
	spawnTamingParticles(_1: boolean): void; /// ?spawnTamingParticles@Actor@@QEAAX_N@Z
	/** spawnTrailBubbles(void): void */
	spawnTrailBubbles(): void; /// ?spawnTrailBubbles@Actor@@MEAAXXZ
	/** startRiding(Actor &): bool */
	startRiding(_1: object): boolean; /// ?startRiding@Actor@@UEAA_NAEAV1@@Z
	/** startSpinAttack(void): void */
	startSpinAttack(): void; /// ?startSpinAttack@Actor@@UEAAXXZ
	/** startSwimming(void): void */
	startSwimming(): void; /// ?startSwimming@Actor@@UEAAXXZ
	/** stopRiding(bool,bool,bool): void */
	stopRiding(_1: boolean, _2: boolean, _3: boolean): void; /// ?stopRiding@Actor@@UEAAX_N00@Z
	/** stopSwimming(void): void */
	stopSwimming(): void; /// ?stopSwimming@Actor@@UEAAXXZ
	/** teleportTo(Vec3 const &,bool,int,int,bool): void */
	teleportTo(_1: object, _2: boolean, _3: number, _4: number, _5: boolean): void; /// ?teleportTo@Actor@@UEAAXAEBVVec3@@_NHH1@Z
	/** thawFreezeEffect(void): void */
	thawFreezeEffect(): void; /// ?thawFreezeEffect@Actor@@UEAAXXZ
	/** tickLeash(void): void */
	tickLeash(): void; /// ?tickLeash@Actor@@UEAAXXZ
	/** tryCreateAddActorPacket(void): class std::unique_ptr<class AddActorBasePacket,struct std::default_delete<class AddActorBasePacket> > */
	tryCreateAddActorPacket(): unknown; /// ?tryCreateAddActorPacket@Actor@@UEAA?AV?$unique_ptr@VAddActorBasePacket@@U?$default_delete@VAddActorBasePacket@@@std@@@std@@XZ
	/** tryGetEquippableSlotAllowedItems(int): class std::vector<class ItemDescriptor,class std::allocator<class ItemDescriptor> > const * __ptr64 */
	tryGetEquippableSlotAllowedItems(_1: number): unknown; /// ?tryGetEquippableSlotAllowedItems@Actor@@QEBAPEBV?$vector@VItemDescriptor@@V?$allocator@VItemDescriptor@@@std@@@std@@H@Z
	/** tryGetFromComponent(ActorOwnerComponent const &,bool): class Actor const * __ptr64 */
	tryGetFromComponent(_1: object, _2: boolean): Actor; /// ?tryGetFromComponent@Actor@@SAPEBV1@AEBVActorOwnerComponent@@_N@Z
	tryGetFromEntity(): bigint; /// Actor::tryGetFromEntity
	/** tryGetFromEntity(EntityContext &,bool): class Actor * __ptr64 */
	tryGetFromEntity(_1: object, _2: boolean): Actor; /// ?tryGetFromEntity@Actor@@SAPEAV1@AEAVEntityContext@@_N@Z
	/** tryTeleportTo(Vec3 const &,bool,bool,int,int): bool */
	tryTeleportTo(_1: object, _2: boolean, _3: boolean, _4: number, _5: number): boolean; /// ?tryTeleportTo@Actor@@UEAA_NAEBVVec3@@_N1HH@Z
	/** updateBBFromDefinition(void): void */
	updateBBFromDefinition(): void; /// ?updateBBFromDefinition@Actor@@QEAAXXZ
	/** updateDescription(void): void */
	updateDescription(): void; /// ?updateDescription@Actor@@QEAAXXZ
	/** updateEntityInside(AABB const &): void */
	updateEntityInside(_1: object): void; /// ?updateEntityInside@Actor@@UEAAXAEBVAABB@@@Z
	/** updateEntityInside(void): void */
	updateEntityInside(): void; /// ?updateEntityInside@Actor@@UEAAXXZ
	/** updateInsideBlock(void): void */
	updateInsideBlock(): void; /// ?updateInsideBlock@Actor@@MEAAXXZ
	/** updateInvisibilityStatus(void): void */
	updateInvisibilityStatus(): void; /// ?updateInvisibilityStatus@Actor@@QEAAXXZ
	/** updateWaterState(void): bool */
	updateWaterState(): boolean; /// ?updateWaterState@Actor@@IEAA_NXZ
	/** useItem(ItemStackBase &,ItemUseMethod,bool): void */
	useItem(_1: object, _2: unknown, _3: boolean): void; /// ?useItem@Actor@@UEAAXAEAVItemStackBase@@W4ItemUseMethod@@_N@Z
	/** wasHurt(void): bool */
	wasHurt(): boolean; /// ?wasHurt@Actor@@UEAA_NXZ
	/** wasLastHitByPlayer(void): bool */
	wasLastHitByPlayer(): boolean; /// ?wasLastHitByPlayer@Actor@@QEAA_NXZ
	/** wasLoadedFromNBTThisFrame(void): bool */
	wasLoadedFromNBTThisFrame(): boolean; /// ?wasLoadedFromNBTThisFrame@Actor@@QEBA_NXZ
	/** wobble(void): void */
	wobble(): void; /// ?wobble@Actor@@UEAAXXZ
}
declare class BaseGameVersion {
	// Attributes 
	major: number;
	patch: number;
	minor: number;
	isAnyVersion: number;
	// Methods 
	// Inherited from BaseGameVersion
	/** BaseGameVersion(BaseGameVersion const &) */
	BaseGameVersion(_1: object): BaseGameVersion; /// ??0BaseGameVersion@@QEAA@AEBV0@@Z
	/** BaseGameVersion(ushort,uint,uint) */
	BaseGameVersion(_1: number, _2: bigint, _3: bigint): BaseGameVersion; /// ??0BaseGameVersion@@QEAA@GII@Z
	/** BaseGameVersion(void) */
	BaseGameVersion(): BaseGameVersion; /// ??0BaseGameVersion@@QEAA@XZ
	/** isCompatibleWith(BaseGameVersion const &): bool */
	isCompatibleWith(_1: object): boolean; /// ?isCompatibleWith@BaseGameVersion@@QEBA_NAEBV1@@Z
	/** isValid(void): bool */
	isValid(): boolean; /// ?isValid@BaseGameVersion@@QEBA_NXZ
	// Inherited from SemVersion
	/** _parseVersionToString(void): void */
	_parseVersionToString(): void; /// ?_parseVersionToString@SemVersion@@AEAAXXZ
	/** fromJson(Json::Value const &,SemVersion &,SemVersion::ParseOption): enum SemVersion::MatchType */
	fromJson(_1: object, _2: object, _3: unknown): bigint; /// ?fromJson@SemVersion@@SA?AW4MatchType@1@AEBVValue@Json@@AEAV1@W4ParseOption@1@@Z
	/** fromJsonArray(Json::Value const &,SemVersion &): enum SemVersion::MatchType */
	fromJsonArray(_1: object, _2: object): bigint; /// ?fromJsonArray@SemVersion@@SA?AW4MatchType@1@AEBVValue@Json@@AEAV1@@Z
	/** getMinor(void): unsigned short */
	getMinor(): number; /// ?getMinor@SemVersion@@QEBAGXZ
}
declare class GameRules {
	// Attributes 
	// Methods 
	// Inherited from GameRules
	/** GameRules(void) */
	GameRules(): GameRules; /// ??0GameRules@@QEAA@XZ
	_setGameRule(_1: object, _2: unknown, _3: unknown, _4: boolean, _5: object, _6: object, _7: object): bigint; /// ?_setGameRule@GameRules@@AEAA?AV?$unique_ptr@VGameRulesChangedPacket@@U?$default_delete@VGameRulesChangedPacket@@@std@@@std@@PEAVGameRule@@TValue@4@W4Type@4@_NPEA_N4PEAVValidationError@4@@Z
	/** createAllGameRulesPacket(void): class std::unique_ptr<class GameRulesChangedPacket,struct std::default_delete<class GameRulesChangedPacket> > */
	createAllGameRulesPacket(): unknown; /// ?createAllGameRulesPacket@GameRules@@QEBA?AV?$unique_ptr@VGameRulesChangedPacket@@U?$default_delete@VGameRulesChangedPacket@@@std@@@std@@XZ
	/** deserializeRules(GameRulesChangedPacketData const &): void */
	deserializeRules(_1: object): void; /// ?deserializeRules@GameRules@@QEAAXAEBVGameRulesChangedPacketData@@@Z
	/** getBool(GameRuleId,bool): bool */
	getBool(_1: unknown, _2: boolean): boolean; /// ?getBool@GameRules@@QEBA_NUGameRuleId@@_N@Z
	/** getInt(GameRuleId): int */
	getInt(_1: unknown): number; /// ?getInt@GameRules@@QEBAHUGameRuleId@@@Z
	/** setRule(GameRuleId,bool,bool,bool *,bool *,GameRule::ValidationError *): class std::unique_ptr<class GameRulesChangedPacket,struct std::default_delete<class GameRulesChangedPacket> > */
	setRule(_1: unknown, _2: boolean, _3: boolean, _4: object, _5: object, _6: object): unknown; /// ?setRule@GameRules@@QEAA?AV?$unique_ptr@VGameRulesChangedPacket@@U?$default_delete@VGameRulesChangedPacket@@@std@@@std@@UGameRuleId@@_N1PEA_N2PEAVValidationError@GameRule@@@Z
	/** setRule(GameRuleId,float,bool,bool *,bool *,GameRule::ValidationError *): class std::unique_ptr<class GameRulesChangedPacket,struct std::default_delete<class GameRulesChangedPacket> > */
	setRule(_1: unknown, _2: number, _3: boolean, _4: object, _5: object, _6: object): unknown; /// ?setRule@GameRules@@QEAA?AV?$unique_ptr@VGameRulesChangedPacket@@U?$default_delete@VGameRulesChangedPacket@@@std@@@std@@UGameRuleId@@M_NPEA_N2PEAVValidationError@GameRule@@@Z
}
declare class BlockPalette {
	// Attributes 
	blocks: SDKVectorContainer;
	// Methods 
	// Inherited from BlockPalette
	/** BlockPalette(Level &) */
	BlockPalette(_1: object): BlockPalette; /// ??0BlockPalette@@QEAA@AEAVLevel@@@Z
	/** getBlock(CompoundTag const &): class Block const & __ptr64 */
	getBlock(_1: object): Block; /// ?getBlock@BlockPalette@@QEBAAEBVBlock@@AEBVCompoundTag@@@Z
	/** getBlock(uint const &): class Block const & __ptr64 */
	getBlock(_1: object): Block; /// ?getBlock@BlockPalette@@QEBAAEBVBlock@@AEBI@Z
	/** getBlockFromLegacyData(NewBlockID,uint): class Block const & __ptr64 */
	getBlockFromLegacyData(_1: unknown, _2: bigint): Block; /// ?getBlockFromLegacyData@BlockPalette@@QEBAAEBVBlock@@UNewBlockID@@I@Z
	/** initFromBlockDefinitions(void): void */
	initFromBlockDefinitions(): void; /// ?initFromBlockDefinitions@BlockPalette@@QEAAXXZ
	/** shouldWarnFor(NewBlockID,ushort): bool */
	shouldWarnFor(_1: unknown, _2: number): boolean; /// ?shouldWarnFor@BlockPalette@@AEBA_NUNewBlockID@@G@Z
	/** switchBlock(Block const &,BlockLegacy const &): class Block const & __ptr64 */
	switchBlock(_1: object, _2: object): Block; /// ?switchBlock@BlockPalette@@QEBAAEBVBlock@@AEBV2@AEBVBlockLegacy@@@Z
}
declare class ActorEventPacket {
	// Attributes 
	actorRuntimeId: bigint;
	dispatcher: PacketHandlerDispatcherInstance;
	eventId: number;
	eventData: number;
	// Methods 
	// Inherited from ActorEventPacket
	/** _read(ReadOnlyBinaryStream &): enum StreamReadResult */
	_read(_1: object): bigint; /// ?_read@ActorEventPacket@@EEAA?AW4StreamReadResult@@AEAVReadOnlyBinaryStream@@@Z
	/** getId(void): enum MinecraftPacketIds */
	getId(): bigint; /// ?getId@ActorEventPacket@@UEBA?AW4MinecraftPacketIds@@XZ
	/** getName(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	getName(): unknown; /// ?getName@ActorEventPacket@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** write(BinaryStream &): void */
	write(_1: object): void; /// ?write@ActorEventPacket@@UEBAXAEAVBinaryStream@@@Z
	// Inherited from Packet
	/** readExtended(ReadOnlyBinaryStream &): struct ExtendedStreamReadResult */
	readExtended(_1: object): unknown; /// ?readExtended@Packet@@UEAA?AUExtendedStreamReadResult@@AEAVReadOnlyBinaryStream@@@Z
}
declare class LevelDataWrapper {
	// Attributes 
	levelData: LevelData;
	// Methods 
	// Inherited from LevelDataWrapper
}
declare class GameMode {
	// Attributes 
	// Methods 
	// Inherited from GameMode
	/** _canDestroy(BlockPos const &,uchar): bool */
	_canDestroy(_1: object, _2: number): boolean; /// ?_canDestroy@GameMode@@AEAA_NAEBVBlockPos@@E@Z
	/** attack(Actor &): bool */
	attack(_1: object): boolean; /// ?attack@GameMode@@UEAA_NAEAVActor@@@Z
	/** baseUseItem(ItemStack &): bool */
	baseUseItem(_1: object): boolean; /// ?baseUseItem@GameMode@@QEAA_NAEAVItemStack@@@Z
	/** buildBlock(BlockPos const &,uchar,bool): bool */
	buildBlock(_1: object, _2: number, _3: boolean): boolean; /// ?buildBlock@GameMode@@UEAA_NAEBVBlockPos@@E_N@Z
	/** continueBuildBlock(BlockPos const &,uchar): void */
	continueBuildBlock(_1: object, _2: number): void; /// ?continueBuildBlock@GameMode@@UEAAXAEBVBlockPos@@E@Z
	/** continueDestroyBlock(BlockPos const &,uchar,Vec3 const &,bool &): bool */
	continueDestroyBlock(_1: object, _2: number, _3: object, _4: object): boolean; /// ?continueDestroyBlock@GameMode@@UEAA_NAEBVBlockPos@@EAEBVVec3@@AEA_N@Z
	/** destroyBlock(BlockPos const &,uchar): bool */
	destroyBlock(_1: object, _2: number): boolean; /// ?destroyBlock@GameMode@@UEAA_NAEBVBlockPos@@E@Z
	/** getDestroyRate(Block const &): float */
	getDestroyRate(_1: object): number; /// ?getDestroyRate@GameMode@@QEAAMAEBVBlock@@@Z
	/** getMaxPickRange(void): float */
	getMaxPickRange(): number; /// ?getMaxPickRange@GameMode@@QEAAMXZ
	/** getPickRange(InputMode const &,bool): float */
	getPickRange(_1: object, _2: boolean): number; /// ?getPickRange@GameMode@@UEAAMAEBW4InputMode@@_N@Z
	/** interact(Actor &,Vec3 const &): bool */
	interact(_1: object, _2: object): boolean; /// ?interact@GameMode@@UEAA_NAEAVActor@@AEBVVec3@@@Z
	/** releaseUsingItem(void): void */
	releaseUsingItem(): void; /// ?releaseUsingItem@GameMode@@UEAAXXZ
	/** startBuildBlock(BlockPos const &,uchar): void */
	startBuildBlock(_1: object, _2: number): void; /// ?startBuildBlock@GameMode@@UEAAXAEBVBlockPos@@E@Z
	/** startDestroyBlock(BlockPos const &,uchar,bool &): bool */
	startDestroyBlock(_1: object, _2: number, _3: object): boolean; /// ?startDestroyBlock@GameMode@@UEAA_NAEBVBlockPos@@EAEA_N@Z
	/** stopBuildBlock(void): void */
	stopBuildBlock(): void; /// ?stopBuildBlock@GameMode@@UEAAXXZ
	/** stopDestroyBlock(BlockPos const &): void */
	stopDestroyBlock(_1: object): void; /// ?stopDestroyBlock@GameMode@@UEAAXAEBVBlockPos@@@Z
	/** tick(void): void */
	tick(): void; /// ?tick@GameMode@@UEAAXXZ
	/** useItem(ItemStack &): bool */
	useItem(_1: object): boolean; /// ?useItem@GameMode@@UEAA_NAEAVItemStack@@@Z
	/** useItemOn(ItemStack &,BlockPos const &,uchar,Vec3 const &,Block const *): bool */
	useItemOn(_1: object, _2: object, _3: number, _4: object, _5: object): boolean; /// ?useItemOn@GameMode@@UEAA_NAEAVItemStack@@AEBVBlockPos@@EAEBVVec3@@PEBVBlock@@@Z
}
/*
declare class Bedrock::NonOwnerPointer { 
	// Attributes 
	ptrToValue: PtrToValue;
	// Methods 
	// Inherited from Bedrock::NonOwnerPointer
}
*/
declare class ItemStack {
	// Attributes 
	itemPtr: ItemPtr;
	tag: CompoundTag;
	aux: number;
	count: number;
	isShowingPickup: number;
	hasItem: number;
	// Methods 
	// Inherited from ItemStack
	/** ItemStack(Item const &,int,int,CompoundTag const *) */
	ItemStack(_1: object, _2: number, _3: number, _4: object): ItemStack; /// ??0ItemStack@@QEAA@AEBVItem@@HHPEBVCompoundTag@@@Z
	/** ItemStack(ItemInstance const &) */
	ItemStack(_1: object): ItemStack; /// ??0ItemStack@@QEAA@AEBVItemInstance@@@Z
	/** ItemStack(ItemStack const &) */
	ItemStack(_1: object): ItemStack; /// ??0ItemStack@@QEAA@AEBV0@@Z
	/** ItemStack(void) */
	ItemStack(): ItemStack; /// ??0ItemStack@@QEAA@XZ
	/** _assignNetIdVariant(ItemStack const &): void */
	_assignNetIdVariant(_1: object): void; /// ?_assignNetIdVariant@ItemStack@@QEBAXAEBV1@@Z
	/** fromTag(CompoundTag const &): class ItemStack */
	fromTag(_1: object): ItemStack; /// ?fromTag@ItemStack@@SA?AV1@AEBVCompoundTag@@@Z
	/** fromTag(CompoundTag const &,Level &): class ItemStack */
	fromTag(_1: object, _2: object): ItemStack; /// ?fromTag@ItemStack@@SA?AV1@AEBVCompoundTag@@AEAVLevel@@@Z
	/** matchesAndNetIdVariantMatches(ItemStack const &): bool */
	matchesAndNetIdVariantMatches(_1: object): boolean; /// ?matchesAndNetIdVariantMatches@ItemStack@@QEBA_NAEBV1@@Z
	/** reinit(BlockLegacy const &,int): void */
	reinit(_1: object, _2: number): void; /// ?reinit@ItemStack@@UEAAXAEBVBlockLegacy@@H@Z
	/** reinit(Item const &,int,int): void */
	reinit(_1: object, _2: number, _3: number): void; /// ?reinit@ItemStack@@UEAAXAEBVItem@@HH@Z
	/** sameItemAndAuxAndBlockData(ItemStack const &): bool */
	sameItemAndAuxAndBlockData(_1: object): boolean; /// ?sameItemAndAuxAndBlockData@ItemStack@@QEBA_NAEBV1@@Z
	/** serverInitNetId(void): void */
	serverInitNetId(): void; /// ?serverInitNetId@ItemStack@@QEAAXXZ
	/** setNull(void): void */
	setNull(): void; /// ?setNull@ItemStack@@UEAAXXZ
	/** toDebugString(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	toDebugString(): unknown; /// ?toDebugString@ItemStack@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** toString(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	toString(): unknown; /// ?toString@ItemStack@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** tryGetItemStackNetId(void): class TypedServerNetId<struct ItemStackNetIdTag,int,0> const * __ptr64 */
	tryGetItemStackNetId(): unknown; /// ?tryGetItemStackNetId@ItemStack@@QEBAPEBV?$TypedServerNetId@UItemStackNetIdTag@@H$0A@@@XZ
	/** use(Player &): class ItemStack & __ptr64 */
	use(_1: object): ItemStack; /// ?use@ItemStack@@QEAAAEAV1@AEAVPlayer@@@Z
	/** useAsFuel(void): void */
	useAsFuel(): void; /// ?useAsFuel@ItemStack@@QEAAXXZ
	/** useOn(Actor &,int,int,int,uchar,Vec3 const &): bool */
	useOn(_1: object, _2: number, _3: number, _4: number, _5: number, _6: object): boolean; /// ?useOn@ItemStack@@QEAA_NAEAVActor@@HHHEAEBVVec3@@@Z
	// Inherited from ItemStackBase
	/** _checkForItemWorldCompatibility(void): void */
	_checkForItemWorldCompatibility(): void; /// ?_checkForItemWorldCompatibility@ItemStackBase@@AEAAXXZ
	/** _cloneComponents(ItemStackBase const &): void */
	_cloneComponents(_1: object): void; /// ?_cloneComponents@ItemStackBase@@AEAAXAEBV1@@Z
	/** _loadItem(CompoundTag const &): void */
	_loadItem(_1: object): void; /// ?_loadItem@ItemStackBase@@AEAAXAEBVCompoundTag@@@Z
	/** _setItem(int,bool): bool */
	_setItem(_1: number, _2: boolean): boolean; /// ?_setItem@ItemStackBase@@IEAA_NH_N@Z
	/** _updateCompareHashes(void): void */
	_updateCompareHashes(): void; /// ?_updateCompareHashes@ItemStackBase@@AEAAXXZ
	/** add(int): void */
	add(_1: number): void; /// ?add@ItemStackBase@@QEAAXH@Z
	/** addCustomUserData(ContainerComponent &): void */
	addCustomUserData(_1: object): void; /// ?addCustomUserData@ItemStackBase@@QEAAXAEAVContainerComponent@@@Z
	/** canBeCharged(void): bool */
	canBeCharged(): boolean; /// ?canBeCharged@ItemStackBase@@QEBA_NXZ
	/** canDestroySpecial(Block const &): bool */
	canDestroySpecial(_1: object): boolean; /// ?canDestroySpecial@ItemStackBase@@QEBA_NAEBVBlock@@@Z
	/** clearChargedItem(void): void */
	clearChargedItem(): void; /// ?clearChargedItem@ItemStackBase@@QEAAXXZ
	/** constructItemEnchantsFromUserData(void): class ItemEnchants */
	constructItemEnchantsFromUserData(): unknown; /// ?constructItemEnchantsFromUserData@ItemStackBase@@QEBA?AVItemEnchants@@XZ
	/** deserializeComponents(IDataInput &): void */
	deserializeComponents(_1: object): void; /// ?deserializeComponents@ItemStackBase@@QEAAXAEAVIDataInput@@@Z
	/** getArmorSlot(void): enum ArmorSlot */
	getArmorSlot(): bigint; /// ?getArmorSlot@ItemStackBase@@QEBA?AW4ArmorSlot@@XZ
	/** getAuxValue(void): short */
	getAuxValue(): number; /// ?getAuxValue@ItemStackBase@@QEBAFXZ
	/** getBlockingTick(void): struct Tick const & __ptr64 */
	getBlockingTick(): unknown; /// ?getBlockingTick@ItemStackBase@@QEBAAEBUTick@@XZ
	/** getChargedItem(void): class ItemInstance const & __ptr64 */
	getChargedItem(): unknown; /// ?getChargedItem@ItemStackBase@@QEBAAEBVItemInstance@@XZ
	/** getColor(void): class mce::Color */
	getColor(): unknown; /// ?getColor@ItemStackBase@@QEBA?AVColor@mce@@XZ
	/** getComponent(HashedString const &): class ItemComponent const * __ptr64 */
	getComponent(_1: object): unknown; /// ?getComponent@ItemStackBase@@QEBAPEBVItemComponent@@AEBVHashedString@@@Z
	/** getComponentItem(void): class ComponentItem const * __ptr64 */
	getComponentItem(): unknown; /// ?getComponentItem@ItemStackBase@@QEBAPEBVComponentItem@@XZ
	/** getCustomName(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	getCustomName(): unknown; /// ?getCustomName@ItemStackBase@@QEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** getDamageValue(void): short */
	getDamageValue(): number; /// ?getDamageValue@ItemStackBase@@QEBAFXZ
	/** getDescriptor(void): class ItemDescriptor */
	getDescriptor(): ItemDescriptor; /// ?getDescriptor@ItemStackBase@@QEBA?AVItemDescriptor@@XZ
	/** getFullNameHash(void): class HashedString const & __ptr64 */
	getFullNameHash(): unknown; /// ?getFullNameHash@ItemStackBase@@QEBAAEBVHashedString@@XZ
	/** getHoverName(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	getHoverName(): unknown; /// ?getHoverName@ItemStackBase@@QEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** getIcon(int,bool): struct TextureUVCoordinateSet const * __ptr64 */
	getIcon(_1: number, _2: boolean): unknown; /// ?getIcon@ItemStackBase@@QEBAPEBUTextureUVCoordinateSet@@H_N@Z
	/** getId(void): short */
	getId(): number; /// ?getId@ItemStackBase@@QEBAFXZ
	/** getIdAux(void): int */
	getIdAux(): number; /// ?getIdAux@ItemStackBase@@QEBAHXZ
	/** getItem(void): class Item const * __ptr64 */
	getItem(): Item; /// ?getItem@ItemStackBase@@QEBAPEBVItem@@XZ
	/** getLegacyBlock(void): class WeakPtr<class BlockLegacy> const & __ptr64 */
	getLegacyBlock(): unknown; /// ?getLegacyBlock@ItemStackBase@@QEBAAEBV?$WeakPtr@VBlockLegacy@@@@XZ
	/** getMaxStackSize(void): unsigned char */
	getMaxStackSize(): number; /// ?getMaxStackSize@ItemStackBase@@QEBAEXZ
	/** getName(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	getName(): unknown; /// ?getName@ItemStackBase@@QEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** getRawNameId(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	getRawNameId(): unknown; /// ?getRawNameId@ItemStackBase@@QEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** hasChargedItem(void): bool */
	hasChargedItem(): boolean; /// ?hasChargedItem@ItemStackBase@@QEBA_NXZ
	/** hasCompoundTextUserData(void): bool */
	hasCompoundTextUserData(): boolean; /// ?hasCompoundTextUserData@ItemStackBase@@QEBA_NXZ
	/** hasContainerData(void): bool */
	hasContainerData(): boolean; /// ?hasContainerData@ItemStackBase@@QEBA_NXZ
	/** hasCustomHoverName(void): bool */
	hasCustomHoverName(): boolean; /// ?hasCustomHoverName@ItemStackBase@@QEBA_NXZ
	/** hasDamageValue(void): bool */
	hasDamageValue(): boolean; /// ?hasDamageValue@ItemStackBase@@QEBA_NXZ
	/** hasSameAuxValue(ItemStackBase const &): bool */
	hasSameAuxValue(_1: object): boolean; /// ?hasSameAuxValue@ItemStackBase@@QEBA_NAEBV1@@Z
	/** hasSameUserData(ItemStackBase const &): bool */
	hasSameUserData(_1: object): boolean; /// ?hasSameUserData@ItemStackBase@@QEBA_NAEBV1@@Z
	/** hasTag(ItemTag const &): bool */
	hasTag(_1: object): boolean; /// ?hasTag@ItemStackBase@@QEBA_NAEBUItemTag@@@Z
	/** hurtAndBreak(int,Actor *): bool */
	hurtAndBreak(_1: number, _2: object): boolean; /// ?hurtAndBreak@ItemStackBase@@QEAA_NHPEAVActor@@@Z
	/** init(Item const &,int,int,CompoundTag const *,bool): void */
	init(_1: object, _2: number, _3: number, _4: object, _5: boolean): void; /// ?init@ItemStackBase@@IEAAXAEBVItem@@HHPEBVCompoundTag@@_N@Z
	/** init(int,int,int,bool): void */
	init(_1: number, _2: number, _3: number, _4: boolean): void; /// ?init@ItemStackBase@@IEAAXHHH_N@Z
	/** initParams(RenderParams &,Actor *): void */
	initParams(_1: object, _2: object): void; /// ?initParams@ItemStackBase@@QEAAXAEAVRenderParams@@PEAVActor@@@Z
	/** isArmorItem(void): bool */
	isArmorItem(): boolean; /// ?isArmorItem@ItemStackBase@@QEBA_NXZ
	/** isDamageableItem(void): bool */
	isDamageableItem(): boolean; /// ?isDamageableItem@ItemStackBase@@QEBA_NXZ
	/** isDamaged(void): bool */
	isDamaged(): boolean; /// ?isDamaged@ItemStackBase@@QEBA_NXZ
	/** isEnchanted(void): bool */
	isEnchanted(): boolean; /// ?isEnchanted@ItemStackBase@@QEBA_NXZ
	/** isGlint(void): bool */
	isGlint(): boolean; /// ?isGlint@ItemStackBase@@QEBA_NXZ
	/** isHorseArmorItem(void): bool */
	isHorseArmorItem(): boolean; /// ?isHorseArmorItem@ItemStackBase@@QEBA_NXZ
	/** isInstance(HashedString const &,bool): bool */
	isInstance(_1: object, _2: boolean): boolean; /// ?isInstance@ItemStackBase@@QEBA_NAEBVHashedString@@_N@Z
	/** isLiquidClipItem(void): bool */
	isLiquidClipItem(): boolean; /// ?isLiquidClipItem@ItemStackBase@@QEBA_NXZ
	/** isNull(void): bool */
	isNull(): boolean; /// ?isNull@ItemStackBase@@QEBA_NXZ
	/** isOffhandItem(void): bool */
	isOffhandItem(): boolean; /// ?isOffhandItem@ItemStackBase@@QEBA_NXZ
	/** isPotionItem(void): bool */
	isPotionItem(): boolean; /// ?isPotionItem@ItemStackBase@@QEBA_NXZ
	/** isStackable(ItemStackBase const &): bool */
	isStackable(_1: object): boolean; /// ?isStackable@ItemStackBase@@QEBA_NAEBV1@@Z
	/** load(CompoundTag const &): void */
	load(_1: object): void; /// ?load@ItemStackBase@@QEAAXAEBVCompoundTag@@@Z
	/** matches(ItemStackBase const &): bool */
	matches(_1: object): boolean; /// ?matches@ItemStackBase@@QEBA_NAEBV1@@Z
	/** matchesEitherWearableCase(CompoundTag const *): bool */
	matchesEitherWearableCase(_1: object): boolean; /// ?matchesEitherWearableCase@ItemStackBase@@QEBA_NPEBVCompoundTag@@@Z
	/** matchesItem(ItemStackBase const &): bool */
	matchesItem(_1: object): boolean; /// ?matchesItem@ItemStackBase@@QEBA_NAEBV1@@Z
	/** remove(int): void */
	remove(_1: number): void; /// ?remove@ItemStackBase@@QEAAXH@Z
	/** resetHoverName(void): void */
	resetHoverName(): void; /// ?resetHoverName@ItemStackBase@@QEAAXXZ
	/** sameItem(ItemStackBase const &): bool */
	sameItem(_1: object): boolean; /// ?sameItem@ItemStackBase@@QEBA_NAEBV1@@Z
	/** sameItem(int,int): bool */
	sameItem(_1: number, _2: number): boolean; /// ?sameItem@ItemStackBase@@QEBA_NHH@Z
	/** sameItemAndAux(ItemStackBase const &): bool */
	sameItemAndAux(_1: object): boolean; /// ?sameItemAndAux@ItemStackBase@@QEBA_NAEBV1@@Z
	/** save(void): class std::unique_ptr<class CompoundTag,struct std::default_delete<class CompoundTag> > */
	save(): unknown; /// ?save@ItemStackBase@@QEBA?AV?$unique_ptr@VCompoundTag@@U?$default_delete@VCompoundTag@@@std@@@std@@XZ
	/** saveEnchantsToUserData(ItemEnchants const &): void */
	saveEnchantsToUserData(_1: object): void; /// ?saveEnchantsToUserData@ItemStackBase@@QEAAXAEBVItemEnchants@@@Z
	/** set(int): void */
	set(_1: number): void; /// ?set@ItemStackBase@@QEAAXH@Z
	/** setAuxValue(short): void */
	setAuxValue(_1: number): void; /// ?setAuxValue@ItemStackBase@@QEAAXF@Z
	/** setDamageValue(short): void */
	setDamageValue(_1: number): void; /// ?setDamageValue@ItemStackBase@@QEAAXF@Z
	/** setJustBrewed(bool): void */
	setJustBrewed(_1: boolean): void; /// ?setJustBrewed@ItemStackBase@@QEAAX_N@Z
	/** setRepairCost(int): void */
	setRepairCost(_1: number): void; /// ?setRepairCost@ItemStackBase@@QEAAXH@Z
	/** setWasPickedUp(bool): void */
	setWasPickedUp(_1: boolean): void; /// ?setWasPickedUp@ItemStackBase@@QEAAX_N@Z
}
declare class BinaryStream {
	// Attributes 
	buffer: SDKText;
	// Methods 
	// Inherited from BinaryStream
	/** BinaryStream(void) */
	BinaryStream(): BinaryStream; /// ??0BinaryStream@@QEAA@XZ
	/** getAndReleaseData(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	getAndReleaseData(): unknown; /// ?getAndReleaseData@BinaryStream@@QEAA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** writeDouble(double): void */
	writeDouble(_1: number): void; /// ?writeDouble@BinaryStream@@QEAAXN@Z
	/** writeFloat(float): void */
	writeFloat(_1: number): void; /// ?writeFloat@BinaryStream@@QEAAXM@Z
	/** writeSignedBigEndianInt(int): void */
	writeSignedBigEndianInt(_1: number): void; /// ?writeSignedBigEndianInt@BinaryStream@@QEAAXH@Z
	/** writeUnsignedChar(uchar): void */
	writeUnsignedChar(_1: number): void; /// ?writeUnsignedChar@BinaryStream@@QEAAXE@Z
	/** writeUnsignedInt(uint): void */
	writeUnsignedInt(_1: bigint): void; /// ?writeUnsignedInt@BinaryStream@@QEAAXI@Z
	/** writeUnsignedInt64(unsigned __int64): void */
	writeUnsignedInt64(_1: bigint): void; /// ?writeUnsignedInt64@BinaryStream@@QEAAX_K@Z
	/** writeUnsignedShort(ushort): void */
	writeUnsignedShort(_1: number): void; /// ?writeUnsignedShort@BinaryStream@@QEAAXG@Z
	/** writeUnsignedVarInt(uint): void */
	writeUnsignedVarInt(_1: bigint): void; /// ?writeUnsignedVarInt@BinaryStream@@QEAAXI@Z
	/** writeUnsignedVarInt64(unsigned __int64): void */
	writeUnsignedVarInt64(_1: bigint): void; /// ?writeUnsignedVarInt64@BinaryStream@@QEAAX_K@Z
	/** writeVarInt(int): void */
	writeVarInt(_1: number): void; /// ?writeVarInt@BinaryStream@@QEAAXH@Z
	/** writeVarInt64(__int64): void */
	writeVarInt64(_1: bigint): void; /// ?writeVarInt64@BinaryStream@@QEAAX_J@Z
}
declare class Block {
	// Attributes 
	tag: CompoundTag;
	// Methods 
	// Inherited from Block
	/** _tryInitEntityIfNotInitialized(void): void */
	_tryInitEntityIfNotInitialized(): void; /// ?_tryInitEntityIfNotInitialized@Block@@AEAAXXZ
	/** breaksFallingBlocks(BaseGameVersion): bool */
	breaksFallingBlocks(_1: BaseGameVersion): boolean; /// ?breaksFallingBlocks@Block@@QEBA_NVBaseGameVersion@@@Z
	/** buildDescriptionName(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	buildDescriptionName(): unknown; /// ?buildDescriptionName@Block@@QEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** buildSerializationId(uint): void */
	buildSerializationId(_1: bigint): void; /// ?buildSerializationId@Block@@IEAAXI@Z
	/** cacheComponentData(void): void */
	cacheComponentData(): void; /// ?cacheComponentData@Block@@QEAAXXZ
	/** canProvideFullSupport(uchar): bool */
	canProvideFullSupport(_1: number): boolean; /// ?canProvideFullSupport@Block@@QEBA_NE@Z
	/** canProvideMultifaceSupport(uchar): bool */
	canProvideMultifaceSupport(_1: number): boolean; /// ?canProvideMultifaceSupport@Block@@QEBA_NE@Z
	/** canProvideSupport(uchar,BlockSupportType): bool */
	canProvideSupport(_1: number, _2: unknown): boolean; /// ?canProvideSupport@Block@@QEBA_NEW4BlockSupportType@@@Z
	/** canSurvive(BlockSource &,BlockPos const &): bool */
	canSurvive(_1: object, _2: object): boolean; /// ?canSurvive@Block@@QEBA_NAEAVBlockSource@@AEBVBlockPos@@@Z
	/** checkIsPathable(Actor &,BlockPos const &,BlockPos const &): bool */
	checkIsPathable(_1: object, _2: object, _3: object): boolean; /// ?checkIsPathable@Block@@QEBA_NAEAVActor@@AEBVBlockPos@@1@Z
	/** clip(BlockSource const &,BlockPos const &,Vec3 const &,Vec3 const &,bool): class HitResult */
	clip(_1: object, _2: object, _3: object, _4: object, _5: boolean): HitResult; /// ?clip@Block@@QEBA?AVHitResult@@AEBVBlockSource@@AEBVBlockPos@@AEBVVec3@@2_N@Z
	/** dealsContactDamage(Actor const &,bool): bool */
	dealsContactDamage(_1: object, _2: boolean): boolean; /// ?dealsContactDamage@Block@@QEBA_NAEBVActor@@_N@Z
	/** destroy(BlockSource &,BlockPos const &,Actor *): void */
	destroy(_1: object, _2: object, _3: object): void; /// ?destroy@Block@@QEBAXAEAVBlockSource@@AEBVBlockPos@@PEAVActor@@@Z
	/** entityInside(BlockSource &,BlockPos const &,Actor &): void */
	entityInside(_1: object, _2: object, _3: object): void; /// ?entityInside@Block@@QEBAXAEAVBlockSource@@AEBVBlockPos@@AEAVActor@@@Z
	/** getAABB(IConstBlockSource const &,BlockPos const &,AABB &,bool): class AABB const & __ptr64 */
	getAABB(_1: object, _2: object, _3: object, _4: boolean): AABB; /// ?getAABB@Block@@QEBAAEBVAABB@@AEBVIConstBlockSource@@AEBVBlockPos@@AEAV2@_N@Z
	/** getCreativeCategory(void): enum CreativeItemCategory */
	getCreativeCategory(): bigint; /// ?getCreativeCategory@Block@@QEBA?AW4CreativeItemCategory@@XZ
	/** getLightEmission(void): struct Brightness */
	getLightEmission(): unknown; /// ?getLightEmission@Block@@QEBA?AUBrightness@@XZ
	/** getMaterial(void): class Material const & __ptr64 */
	getMaterial(): unknown; /// ?getMaterial@Block@@QEBAAEBVMaterial@@XZ
	/** getName(void): class HashedString const & __ptr64 */
	getName(): unknown; /// ?getName@Block@@QEBAAEBVHashedString@@XZ
	/** getRenderLayer(void): enum BlockRenderLayer */
	getRenderLayer(): bigint; /// ?getRenderLayer@Block@@UEBA?AW4BlockRenderLayer@@XZ
	/** getResourceCount(Randomize &,int): int */
	getResourceCount(_1: object, _2: number): number; /// ?getResourceCount@Block@@QEBAHAEAVRandomize@@H@Z
	/** getSecondPart(BlockSource const &,BlockPos const &,BlockPos &): bool */
	getSecondPart(_1: object, _2: object, _3: object): boolean; /// ?getSecondPart@Block@@QEBA_NAEBVBlockSource@@AEBVBlockPos@@AEAV3@@Z
	/** getVariant(void): int */
	getVariant(): number; /// ?getVariant@Block@@QEBAHXZ
	/** getVisualShape(AABB &,bool): class AABB const & __ptr64 */
	getVisualShape(_1: object, _2: boolean): AABB; /// ?getVisualShape@Block@@QEBAAEBVAABB@@AEAV2@_N@Z
	/** hasProperty(BlockProperty): bool */
	hasProperty(_1: unknown): boolean; /// ?hasProperty@Block@@QEBA_NW4BlockProperty@@@Z
	/** hasTag(HashedString const &): bool */
	hasTag(_1: object): boolean; /// ?hasTag@Block@@QEBA_NAEBVHashedString@@@Z
	/** isAir(void): bool */
	isAir(): boolean; /// ?isAir@Block@@QEBA_NXZ
	/** isBounceBlock(void): bool */
	isBounceBlock(): boolean; /// ?isBounceBlock@Block@@QEBA_NXZ
	/** isDoorBlock(void): bool */
	isDoorBlock(): boolean; /// ?isDoorBlock@Block@@QEBA_NXZ
	/** isFenceBlock(void): bool */
	isFenceBlock(): boolean; /// ?isFenceBlock@Block@@QEBA_NXZ
	/** isInteractiveBlock(void): bool */
	isInteractiveBlock(): boolean; /// ?isInteractiveBlock@Block@@QEBA_NXZ
	/** isPartialBlock(BlockSource const &,BlockPos const &): bool */
	isPartialBlock(_1: object, _2: object): boolean; /// ?isPartialBlock@Block@@QEBA_NAEBVBlockSource@@AEBVBlockPos@@@Z
	/** isPreservingMediumWhenPlaced(Block const &): bool */
	isPreservingMediumWhenPlaced(_1: object): boolean; /// ?isPreservingMediumWhenPlaced@Block@@QEBA_NAEBV1@@Z
	/** isSlabBlock(void): bool */
	isSlabBlock(): boolean; /// ?isSlabBlock@Block@@QEBA_NXZ
	/** isSolid(void): bool */
	isSolid(): boolean; /// ?isSolid@Block@@QEBA_NXZ
	/** isSolidBlockingBlockAndNotSignalSource(void): bool */
	isSolidBlockingBlockAndNotSignalSource(): boolean; /// ?isSolidBlockingBlockAndNotSignalSource@Block@@QEBA_NXZ
	/** isStandingSign(void): bool */
	isStandingSign(): boolean; /// ?isStandingSign@Block@@QEBA_NXZ
	/** isTopPartialBlock(BlockSource const &,BlockPos const &): bool */
	isTopPartialBlock(_1: object, _2: object): boolean; /// ?isTopPartialBlock@Block@@QEBA_NAEBVBlockSource@@AEBVBlockPos@@@Z
	/** mayPlace(BlockSource &,BlockPos const &): bool */
	mayPlace(_1: object, _2: object): boolean; /// ?mayPlace@Block@@QEBA_NAEAVBlockSource@@AEBVBlockPos@@@Z
	/** mayPlace(BlockSource &,BlockPos const &,uchar): bool */
	mayPlace(_1: object, _2: object, _3: number): boolean; /// ?mayPlace@Block@@QEBA_NAEAVBlockSource@@AEBVBlockPos@@E@Z
	/** mayPlaceOn(BlockSource &,BlockPos const &): bool */
	mayPlaceOn(_1: object, _2: object): boolean; /// ?mayPlaceOn@Block@@QEBA_NAEAVBlockSource@@AEBVBlockPos@@@Z
	/** neighborChanged(BlockSource &,BlockPos const &,BlockPos const &): void */
	neighborChanged(_1: object, _2: object, _3: object): void; /// ?neighborChanged@Block@@QEBAXAEAVBlockSource@@AEBVBlockPos@@1@Z
	/** onExploded(BlockSource &,BlockPos const &,Actor *): void */
	onExploded(_1: object, _2: object, _3: object): void; /// ?onExploded@Block@@QEBAXAEAVBlockSource@@AEBVBlockPos@@PEAVActor@@@Z
	/** onFallOn(BlockSource &,BlockPos const &,Actor &,float): void */
	onFallOn(_1: object, _2: object, _3: object, _4: number): void; /// ?onFallOn@Block@@QEBAXAEAVBlockSource@@AEBVBlockPos@@AEAVActor@@M@Z
	/** onFertilized(BlockSource &,BlockPos const &,Actor *,FertilizerType): bool */
	onFertilized(_1: object, _2: object, _3: object, _4: unknown): boolean; /// ?onFertilized@Block@@QEBA_NAEAVBlockSource@@AEBVBlockPos@@PEAVActor@@W4FertilizerType@@@Z
	/** onLightningHit(BlockSource &,BlockPos const &): void */
	onLightningHit(_1: object, _2: object): void; /// ?onLightningHit@Block@@QEBAXAEAVBlockSource@@AEBVBlockPos@@@Z
	/** onPlace(BlockSource &,BlockPos const &,Block const &): void */
	onPlace(_1: object, _2: object, _3: object): void; /// ?onPlace@Block@@QEBAXAEAVBlockSource@@AEBVBlockPos@@AEBV1@@Z
	/** onProjectileHit(BlockSource &,BlockPos const &,Actor const &): void */
	onProjectileHit(_1: object, _2: object, _3: object): void; /// ?onProjectileHit@Block@@QEBAXAEAVBlockSource@@AEBVBlockPos@@AEBVActor@@@Z
	/** onStepOff(Actor &,BlockPos const &): void */
	onStepOff(_1: object, _2: object): void; /// ?onStepOff@Block@@QEBAXAEAVActor@@AEBVBlockPos@@@Z
	/** popResource(BlockSource &,BlockPos const &,ItemInstance const &): class ItemActor * __ptr64 */
	popResource(_1: object, _2: object, _3: object): unknown; /// ?popResource@Block@@QEBAPEAVItemActor@@AEAVBlockSource@@AEBVBlockPos@@AEBVItemInstance@@@Z
	/** queuedTick(BlockSource &,BlockPos const &,Random &): void */
	queuedTick(_1: object, _2: object, _3: object): void; /// ?queuedTick@Block@@QEBAXAEAVBlockSource@@AEBVBlockPos@@AEAVRandom@@@Z
	/** toDebugString(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	toDebugString(): unknown; /// ?toDebugString@Block@@QEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** tryToTill(BlockSource &,BlockPos const &,Actor &,ItemStack &): bool */
	tryToTill(_1: object, _2: object, _3: object, _4: object): boolean; /// ?tryToTill@Block@@QEBA_NAEAVBlockSource@@AEBVBlockPos@@AEAVActor@@AEAVItemStack@@@Z
	/** updateEntityAfterFallOn(BlockPos const &,UpdateEntityAfterFallOnInterface &): void */
	updateEntityAfterFallOn(_1: object, _2: object): void; /// ?updateEntityAfterFallOn@Block@@QEBAXAEBVBlockPos@@AEAUUpdateEntityAfterFallOnInterface@@@Z
}
declare class InventoryTransaction {
	// Attributes 
	ptr: object;
	// Methods 
	// Inherited from InventoryTransaction
	/** _dropCreatedItems(Player &): void */
	_dropCreatedItems(_1: object): void; /// ?_dropCreatedItems@InventoryTransaction@@AEBAXAEAVPlayer@@@Z
	/** executeFull(Player &,bool): enum InventoryTransactionError */
	executeFull(_1: object, _2: boolean): bigint; /// ?executeFull@InventoryTransaction@@QEBA?AW4InventoryTransactionError@@AEAVPlayer@@_N@Z
	/** postLoadItems(BlockPalette &,bool): void */
	postLoadItems(_1: object, _2: boolean): void; /// ?postLoadItems@InventoryTransaction@@QEAAXAEAVBlockPalette@@_N@Z
	/** verifyBalance(void): bool */
	verifyBalance(): boolean; /// ?verifyBalance@InventoryTransaction@@QEBA_NXZ
	/** verifyFull(Player &,bool): enum InventoryTransactionError */
	verifyFull(_1: object, _2: boolean): bigint; /// ?verifyFull@InventoryTransaction@@QEBA?AW4InventoryTransactionError@@AEAVPlayer@@_N@Z
}
declare class BlockPickRequestPacket {
	// Attributes 
	pos: BlockPos;
	doAddUserData: number;
	hotbarSlot: number;
	dispatcher: PacketHandlerDispatcherInstance;
	// Methods 
	// Inherited from BlockPickRequestPacket
	/** _read(ReadOnlyBinaryStream &): enum StreamReadResult */
	_read(_1: object): bigint; /// ?_read@BlockPickRequestPacket@@EEAA?AW4StreamReadResult@@AEAVReadOnlyBinaryStream@@@Z
	/** getId(void): enum MinecraftPacketIds */
	getId(): bigint; /// ?getId@BlockPickRequestPacket@@UEBA?AW4MinecraftPacketIds@@XZ
	/** getName(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	getName(): unknown; /// ?getName@BlockPickRequestPacket@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** write(BinaryStream &): void */
	write(_1: object): void; /// ?write@BlockPickRequestPacket@@UEBAXAEAVBinaryStream@@@Z
	// Inherited from Packet
	/** readExtended(ReadOnlyBinaryStream &): struct ExtendedStreamReadResult */
	readExtended(_1: object): unknown; /// ?readExtended@Packet@@UEAA?AUExtendedStreamReadResult@@AEAVReadOnlyBinaryStream@@@Z
}
declare class BlockPos {
	// Attributes 
	x: number;
	y: number;
	z: number;
	// Methods 
	// Inherited from BlockPos
	/** BlockPos(ChunkPos const &,int) */
	BlockPos(_1: object, _2: number): BlockPos; /// ??0BlockPos@@QEAA@AEBVChunkPos@@H@Z
	/** BlockPos(Vec3 const &) */
	BlockPos(_1: object): BlockPos; /// ??0BlockPos@@QEAA@AEBVVec3@@@Z
	/** BlockPos(float,float,float) */
	BlockPos(_1: number, _2: number, _3: number): BlockPos; /// ??0BlockPos@@QEAA@MMM@Z
	/** bindType(void): void */
	bindType(): void; /// ?bindType@BlockPos@@SAXXZ
	/** bottomCenter(void): class Vec3 */
	bottomCenter(): unknown; /// ?bottomCenter@BlockPos@@QEBA?AVVec3@@XZ
	/** center(void): class Vec3 */
	center(): unknown; /// ?center@BlockPos@@QEBA?AVVec3@@XZ
	/** neighbor(uchar): class BlockPos */
	neighbor(_1: number): BlockPos; /// ?neighbor@BlockPos@@QEBA?AV1@E@Z
	/** relative(uchar,int): class BlockPos */
	relative(_1: number, _2: number): BlockPos; /// ?relative@BlockPos@@QEBA?AV1@EH@Z
	/** toString(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	toString(): unknown; /// ?toString@BlockPos@@QEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** transform(Rotation,Mirror,Vec3 const &): class BlockPos */
	transform(_1: unknown, _2: unknown, _3: object): BlockPos; /// ?transform@BlockPos@@QEBA?AV1@W4Rotation@@W4Mirror@@AEBVVec3@@@Z
}
declare class ItemStackBase {
	// Attributes 
	itemPtr: ItemPtr;
	tag: CompoundTag;
	isShowingPickup: number;
	count: number;
	aux: number;
	hasItem: number;
	// Methods 
	// Inherited from ItemStackBase
	/** ItemStackBase(Item const &,int,int,CompoundTag const *) */
	ItemStackBase(_1: object, _2: number, _3: number, _4: object): ItemStackBase; /// ??0ItemStackBase@@IEAA@AEBVItem@@HHPEBVCompoundTag@@@Z
	/** ItemStackBase(void) */
	ItemStackBase(): ItemStackBase; /// ??0ItemStackBase@@IEAA@XZ
	/** _checkForItemWorldCompatibility(void): void */
	_checkForItemWorldCompatibility(): void; /// ?_checkForItemWorldCompatibility@ItemStackBase@@AEAAXXZ
	/** _cloneComponents(ItemStackBase const &): void */
	_cloneComponents(_1: object): void; /// ?_cloneComponents@ItemStackBase@@AEAAXAEBV1@@Z
	/** _loadItem(CompoundTag const &): void */
	_loadItem(_1: object): void; /// ?_loadItem@ItemStackBase@@AEAAXAEBVCompoundTag@@@Z
	/** _setItem(int,bool): bool */
	_setItem(_1: number, _2: boolean): boolean; /// ?_setItem@ItemStackBase@@IEAA_NH_N@Z
	/** _updateCompareHashes(void): void */
	_updateCompareHashes(): void; /// ?_updateCompareHashes@ItemStackBase@@AEAAXXZ
	/** add(int): void */
	add(_1: number): void; /// ?add@ItemStackBase@@QEAAXH@Z
	/** addCustomUserData(ContainerComponent &): void */
	addCustomUserData(_1: object): void; /// ?addCustomUserData@ItemStackBase@@QEAAXAEAVContainerComponent@@@Z
	/** canBeCharged(void): bool */
	canBeCharged(): boolean; /// ?canBeCharged@ItemStackBase@@QEBA_NXZ
	/** canDestroySpecial(Block const &): bool */
	canDestroySpecial(_1: object): boolean; /// ?canDestroySpecial@ItemStackBase@@QEBA_NAEBVBlock@@@Z
	/** clearChargedItem(void): void */
	clearChargedItem(): void; /// ?clearChargedItem@ItemStackBase@@QEAAXXZ
	/** constructItemEnchantsFromUserData(void): class ItemEnchants */
	constructItemEnchantsFromUserData(): unknown; /// ?constructItemEnchantsFromUserData@ItemStackBase@@QEBA?AVItemEnchants@@XZ
	/** deserializeComponents(IDataInput &): void */
	deserializeComponents(_1: object): void; /// ?deserializeComponents@ItemStackBase@@QEAAXAEAVIDataInput@@@Z
	/** getArmorSlot(void): enum ArmorSlot */
	getArmorSlot(): bigint; /// ?getArmorSlot@ItemStackBase@@QEBA?AW4ArmorSlot@@XZ
	/** getAuxValue(void): short */
	getAuxValue(): number; /// ?getAuxValue@ItemStackBase@@QEBAFXZ
	/** getBlockingTick(void): struct Tick const & __ptr64 */
	getBlockingTick(): unknown; /// ?getBlockingTick@ItemStackBase@@QEBAAEBUTick@@XZ
	/** getChargedItem(void): class ItemInstance const & __ptr64 */
	getChargedItem(): unknown; /// ?getChargedItem@ItemStackBase@@QEBAAEBVItemInstance@@XZ
	/** getColor(void): class mce::Color */
	getColor(): unknown; /// ?getColor@ItemStackBase@@QEBA?AVColor@mce@@XZ
	/** getComponent(HashedString const &): class ItemComponent const * __ptr64 */
	getComponent(_1: object): unknown; /// ?getComponent@ItemStackBase@@QEBAPEBVItemComponent@@AEBVHashedString@@@Z
	/** getComponentItem(void): class ComponentItem const * __ptr64 */
	getComponentItem(): unknown; /// ?getComponentItem@ItemStackBase@@QEBAPEBVComponentItem@@XZ
	/** getCustomName(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	getCustomName(): unknown; /// ?getCustomName@ItemStackBase@@QEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** getDamageValue(void): short */
	getDamageValue(): number; /// ?getDamageValue@ItemStackBase@@QEBAFXZ
	/** getDescriptor(void): class ItemDescriptor */
	getDescriptor(): ItemDescriptor; /// ?getDescriptor@ItemStackBase@@QEBA?AVItemDescriptor@@XZ
	/** getFullNameHash(void): class HashedString const & __ptr64 */
	getFullNameHash(): unknown; /// ?getFullNameHash@ItemStackBase@@QEBAAEBVHashedString@@XZ
	/** getHoverName(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	getHoverName(): unknown; /// ?getHoverName@ItemStackBase@@QEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** getIcon(int,bool): struct TextureUVCoordinateSet const * __ptr64 */
	getIcon(_1: number, _2: boolean): unknown; /// ?getIcon@ItemStackBase@@QEBAPEBUTextureUVCoordinateSet@@H_N@Z
	/** getId(void): short */
	getId(): number; /// ?getId@ItemStackBase@@QEBAFXZ
	/** getIdAux(void): int */
	getIdAux(): number; /// ?getIdAux@ItemStackBase@@QEBAHXZ
	/** getItem(void): class Item const * __ptr64 */
	getItem(): Item; /// ?getItem@ItemStackBase@@QEBAPEBVItem@@XZ
	/** getLegacyBlock(void): class WeakPtr<class BlockLegacy> const & __ptr64 */
	getLegacyBlock(): unknown; /// ?getLegacyBlock@ItemStackBase@@QEBAAEBV?$WeakPtr@VBlockLegacy@@@@XZ
	/** getMaxStackSize(void): unsigned char */
	getMaxStackSize(): number; /// ?getMaxStackSize@ItemStackBase@@QEBAEXZ
	/** getName(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	getName(): unknown; /// ?getName@ItemStackBase@@QEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** getRawNameId(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	getRawNameId(): unknown; /// ?getRawNameId@ItemStackBase@@QEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** hasChargedItem(void): bool */
	hasChargedItem(): boolean; /// ?hasChargedItem@ItemStackBase@@QEBA_NXZ
	/** hasCompoundTextUserData(void): bool */
	hasCompoundTextUserData(): boolean; /// ?hasCompoundTextUserData@ItemStackBase@@QEBA_NXZ
	/** hasContainerData(void): bool */
	hasContainerData(): boolean; /// ?hasContainerData@ItemStackBase@@QEBA_NXZ
	/** hasCustomHoverName(void): bool */
	hasCustomHoverName(): boolean; /// ?hasCustomHoverName@ItemStackBase@@QEBA_NXZ
	/** hasDamageValue(void): bool */
	hasDamageValue(): boolean; /// ?hasDamageValue@ItemStackBase@@QEBA_NXZ
	/** hasSameAuxValue(ItemStackBase const &): bool */
	hasSameAuxValue(_1: object): boolean; /// ?hasSameAuxValue@ItemStackBase@@QEBA_NAEBV1@@Z
	/** hasSameUserData(ItemStackBase const &): bool */
	hasSameUserData(_1: object): boolean; /// ?hasSameUserData@ItemStackBase@@QEBA_NAEBV1@@Z
	/** hasTag(ItemTag const &): bool */
	hasTag(_1: object): boolean; /// ?hasTag@ItemStackBase@@QEBA_NAEBUItemTag@@@Z
	/** hurtAndBreak(int,Actor *): bool */
	hurtAndBreak(_1: number, _2: object): boolean; /// ?hurtAndBreak@ItemStackBase@@QEAA_NHPEAVActor@@@Z
	/** init(Item const &,int,int,CompoundTag const *,bool): void */
	init(_1: object, _2: number, _3: number, _4: object, _5: boolean): void; /// ?init@ItemStackBase@@IEAAXAEBVItem@@HHPEBVCompoundTag@@_N@Z
	/** init(int,int,int,bool): void */
	init(_1: number, _2: number, _3: number, _4: boolean): void; /// ?init@ItemStackBase@@IEAAXHHH_N@Z
	/** initParams(RenderParams &,Actor *): void */
	initParams(_1: object, _2: object): void; /// ?initParams@ItemStackBase@@QEAAXAEAVRenderParams@@PEAVActor@@@Z
	/** isArmorItem(void): bool */
	isArmorItem(): boolean; /// ?isArmorItem@ItemStackBase@@QEBA_NXZ
	/** isDamageableItem(void): bool */
	isDamageableItem(): boolean; /// ?isDamageableItem@ItemStackBase@@QEBA_NXZ
	/** isDamaged(void): bool */
	isDamaged(): boolean; /// ?isDamaged@ItemStackBase@@QEBA_NXZ
	/** isEnchanted(void): bool */
	isEnchanted(): boolean; /// ?isEnchanted@ItemStackBase@@QEBA_NXZ
	/** isGlint(void): bool */
	isGlint(): boolean; /// ?isGlint@ItemStackBase@@QEBA_NXZ
	/** isHorseArmorItem(void): bool */
	isHorseArmorItem(): boolean; /// ?isHorseArmorItem@ItemStackBase@@QEBA_NXZ
	/** isInstance(HashedString const &,bool): bool */
	isInstance(_1: object, _2: boolean): boolean; /// ?isInstance@ItemStackBase@@QEBA_NAEBVHashedString@@_N@Z
	/** isLiquidClipItem(void): bool */
	isLiquidClipItem(): boolean; /// ?isLiquidClipItem@ItemStackBase@@QEBA_NXZ
	/** isNull(void): bool */
	isNull(): boolean; /// ?isNull@ItemStackBase@@QEBA_NXZ
	/** isOffhandItem(void): bool */
	isOffhandItem(): boolean; /// ?isOffhandItem@ItemStackBase@@QEBA_NXZ
	/** isPotionItem(void): bool */
	isPotionItem(): boolean; /// ?isPotionItem@ItemStackBase@@QEBA_NXZ
	/** isStackable(ItemStackBase const &): bool */
	isStackable(_1: object): boolean; /// ?isStackable@ItemStackBase@@QEBA_NAEBV1@@Z
	/** load(CompoundTag const &): void */
	load(_1: object): void; /// ?load@ItemStackBase@@QEAAXAEBVCompoundTag@@@Z
	/** matches(ItemStackBase const &): bool */
	matches(_1: object): boolean; /// ?matches@ItemStackBase@@QEBA_NAEBV1@@Z
	/** matchesEitherWearableCase(CompoundTag const *): bool */
	matchesEitherWearableCase(_1: object): boolean; /// ?matchesEitherWearableCase@ItemStackBase@@QEBA_NPEBVCompoundTag@@@Z
	/** matchesItem(ItemStackBase const &): bool */
	matchesItem(_1: object): boolean; /// ?matchesItem@ItemStackBase@@QEBA_NAEBV1@@Z
	/** remove(int): void */
	remove(_1: number): void; /// ?remove@ItemStackBase@@QEAAXH@Z
	/** resetHoverName(void): void */
	resetHoverName(): void; /// ?resetHoverName@ItemStackBase@@QEAAXXZ
	/** sameItem(ItemStackBase const &): bool */
	sameItem(_1: object): boolean; /// ?sameItem@ItemStackBase@@QEBA_NAEBV1@@Z
	/** sameItem(int,int): bool */
	sameItem(_1: number, _2: number): boolean; /// ?sameItem@ItemStackBase@@QEBA_NHH@Z
	/** sameItemAndAux(ItemStackBase const &): bool */
	sameItemAndAux(_1: object): boolean; /// ?sameItemAndAux@ItemStackBase@@QEBA_NAEBV1@@Z
	/** save(void): class std::unique_ptr<class CompoundTag,struct std::default_delete<class CompoundTag> > */
	save(): unknown; /// ?save@ItemStackBase@@QEBA?AV?$unique_ptr@VCompoundTag@@U?$default_delete@VCompoundTag@@@std@@@std@@XZ
	/** saveEnchantsToUserData(ItemEnchants const &): void */
	saveEnchantsToUserData(_1: object): void; /// ?saveEnchantsToUserData@ItemStackBase@@QEAAXAEBVItemEnchants@@@Z
	/** set(int): void */
	set(_1: number): void; /// ?set@ItemStackBase@@QEAAXH@Z
	/** setAuxValue(short): void */
	setAuxValue(_1: number): void; /// ?setAuxValue@ItemStackBase@@QEAAXF@Z
	/** setDamageValue(short): void */
	setDamageValue(_1: number): void; /// ?setDamageValue@ItemStackBase@@QEAAXF@Z
	/** setJustBrewed(bool): void */
	setJustBrewed(_1: boolean): void; /// ?setJustBrewed@ItemStackBase@@QEAAX_N@Z
	/** setNull(void): void */
	setNull(): void; /// ?setNull@ItemStackBase@@UEAAXXZ
	/** setRepairCost(int): void */
	setRepairCost(_1: number): void; /// ?setRepairCost@ItemStackBase@@QEAAXH@Z
	/** setWasPickedUp(bool): void */
	setWasPickedUp(_1: boolean): void; /// ?setWasPickedUp@ItemStackBase@@QEAAX_N@Z
	/** toDebugString(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	toDebugString(): unknown; /// ?toDebugString@ItemStackBase@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** toString(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	toString(): unknown; /// ?toString@ItemStackBase@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
}
declare class BlockSource {
	// Attributes 
	// Methods 
	// Inherited from BlockSource
	/** BlockSource(Level &,Dimension &,ChunkSource &,bool,bool,bool) */
	BlockSource(_1: object, _2: object, _3: object, _4: boolean, _5: boolean, _6: boolean): BlockSource; /// ??0BlockSource@@QEAA@AEAVLevel@@AEAVDimension@@AEAVChunkSource@@_N33@Z
	/** _getBlockPermissions(BlockPos const &,bool): bool */
	_getBlockPermissions(_1: object, _2: boolean): boolean; /// ?_getBlockPermissions@BlockSource@@AEAA_NAEBVBlockPos@@_N@Z
	/** _getRawBrightness(BlockPos const &,Brightness,bool,bool): struct Brightness */
	_getRawBrightness(_1: object, _2: unknown, _3: boolean, _4: boolean): unknown; /// ?_getRawBrightness@BlockSource@@AEBA?AUBrightness@@AEBVBlockPos@@U2@_N2@Z
	/** _hasChunksAt(Bounds const &,bool): bool */
	_hasChunksAt(_1: object, _2: boolean): boolean; /// ?_hasChunksAt@BlockSource@@IEBA_NAEBUBounds@@_N@Z
	/** _removeFromTickingQueue(BlockPos const &,Block const &,TickingQueueType): void */
	_removeFromTickingQueue(_1: object, _2: object, _3: unknown): void; /// ?_removeFromTickingQueue@BlockSource@@AEAAXAEBVBlockPos@@AEBVBlock@@W4TickingQueueType@@@Z
	/** addListener(BlockSourceListener &): void */
	addListener(_1: object): void; /// ?addListener@BlockSource@@UEAAXAEAVBlockSourceListener@@@Z
	/** addToTickingQueue(BlockPos const &,Block const &,int,int,bool): void */
	addToTickingQueue(_1: object, _2: object, _3: number, _4: number, _5: boolean): void; /// ?addToTickingQueue@BlockSource@@QEAAXAEBVBlockPos@@AEBVBlock@@HH_N@Z
	/** areAllChunksLoaded(BlockPos const &,BlockVolume &): bool */
	areAllChunksLoaded(_1: object, _2: object): boolean; /// ?areAllChunksLoaded@BlockSource@@QEBA_NAEBVBlockPos@@AEAVBlockVolume@@@Z
	/** blockEvent(BlockPos const &,int,int): void */
	blockEvent(_1: object, _2: number, _3: number): void; /// ?blockEvent@BlockSource@@QEAAXAEBVBlockPos@@HH@Z
	/** canProvideSupport(BlockPos const &,uchar,BlockSupportType): bool */
	canProvideSupport(_1: object, _2: number, _3: unknown): boolean; /// ?canProvideSupport@BlockSource@@QEBA_NAEBVBlockPos@@EW4BlockSupportType@@@Z
	/** canSeeSky(BlockPos const &): bool */
	canSeeSky(_1: object): boolean; /// ?canSeeSky@BlockSource@@QEBA_NAEBVBlockPos@@@Z
	/** clip(ClipParameters const &): class HitResult */
	clip(_1: object): HitResult; /// ?clip@BlockSource@@QEBA?AVHitResult@@AEBUClipParameters@@@Z
	/** containsAnyBlockOfType(BlockPos const &,BlockPos const &,Block const &): bool */
	containsAnyBlockOfType(_1: object, _2: object, _3: object): boolean; /// ?containsAnyBlockOfType@BlockSource@@QEBA_NAEBVBlockPos@@0AEBVBlock@@@Z
	/** containsAnyLiquid(AABB const &): bool */
	containsAnyLiquid(_1: object): boolean; /// ?containsAnyLiquid@BlockSource@@UEBA_NAEBVAABB@@@Z
	/** containsMaterial(AABB const &,MaterialType): bool */
	containsMaterial(_1: object, _2: unknown): boolean; /// ?containsMaterial@BlockSource@@UEBA_NAEBVAABB@@W4MaterialType@@@Z
	/** fetchAABBs(AABB const &,bool): class std::vector<class AABB,class std::allocator<class AABB> > & __ptr64 */
	fetchAABBs(_1: object, _2: boolean): unknown; /// ?fetchAABBs@BlockSource@@UEAAAEAV?$vector@VAABB@@V?$allocator@VAABB@@@std@@@std@@AEBVAABB@@_N@Z
	/** fetchActors(ActorDefinitionIdentifier const &,AABB const &): class gsl::span<class gsl::not_null<class Actor * __ptr64>,-1> */
	fetchActors(_1: object, _2: object): unknown; /// ?fetchActors@BlockSource@@QEAA?AV?$span@V?$not_null@PEAVActor@@@gsl@@$0?0@gsl@@AEBUActorDefinitionIdentifier@@AEBVAABB@@@Z
	/** fetchCollisionShapes(AABB const &,float *,bool,IActorMovementProxy *): class std::vector<class AABB,class std::allocator<class AABB> > & __ptr64 */
	fetchCollisionShapes(_1: object, _2: object, _3: boolean, _4: object): unknown; /// ?fetchCollisionShapes@BlockSource@@UEAAAEAV?$vector@VAABB@@V?$allocator@VAABB@@@std@@@std@@AEBVAABB@@PEAM_NPEAUIActorMovementProxy@@@Z
	/** fetchEntities(Actor const *,AABB const &,bool,bool): class gsl::span<class gsl::not_null<class Actor * __ptr64>,-1> */
	fetchEntities(_1: object, _2: object, _3: boolean, _4: boolean): unknown; /// ?fetchEntities@BlockSource@@UEAA?AV?$span@V?$not_null@PEAVActor@@@gsl@@$0?0@gsl@@PEBVActor@@AEBVAABB@@_N2@Z
	/** fetchEntities(ActorType,AABB const &,Actor const *): class gsl::span<class gsl::not_null<class Actor * __ptr64>,-1> */
	fetchEntities(_1: unknown, _2: object, _3: object): unknown; /// ?fetchEntities@BlockSource@@UEAA?AV?$span@V?$not_null@PEAVActor@@@gsl@@$0?0@gsl@@W4ActorType@@AEBVAABB@@PEBVActor@@@Z
	/** fetchEntities2(ActorType,AABB const &,bool): class std::vector<class Actor * __ptr64,class std::allocator<class Actor * __ptr64> > const & __ptr64 */
	fetchEntities2(_1: unknown, _2: object, _3: boolean): unknown; /// ?fetchEntities2@BlockSource@@QEAAAEBV?$vector@PEAVActor@@V?$allocator@PEAVActor@@@std@@@std@@W4ActorType@@AEBVAABB@@_N@Z
	/** findNextTopSolidBlockUnder(BlockPos &): bool */
	findNextTopSolidBlockUnder(_1: object): boolean; /// ?findNextTopSolidBlockUnder@BlockSource@@QEAA_NAEAVBlockPos@@@Z
	/** fireBlockChanged(BlockPos const &,uint,Block const &,Block const &,int,BlockChangedEventTarget,ActorBlockSyncMessage const *,Actor *): void */
	fireBlockChanged(_1: object, _2: bigint, _3: object, _4: object, _5: number, _6: unknown, _7: object, _8: object): void; /// ?fireBlockChanged@BlockSource@@QEAAXAEBVBlockPos@@IAEBVBlock@@1HW4BlockChangedEventTarget@@PEBUActorBlockSyncMessage@@PEAVActor@@@Z
	/** fireBlockEntityChanged(BlockActor &): void */
	fireBlockEntityChanged(_1: object): void; /// ?fireBlockEntityChanged@BlockSource@@QEAAXAEAVBlockActor@@@Z
	/** getAboveTopSolidBlock(BlockPos const &,bool,bool): short */
	getAboveTopSolidBlock(_1: object, _2: boolean, _3: boolean): number; /// ?getAboveTopSolidBlock@BlockSource@@QEAAFAEBVBlockPos@@_N1@Z
	/** getAboveTopSolidBlock(int,int,bool,bool): short */
	getAboveTopSolidBlock(_1: number, _2: number, _3: boolean, _4: boolean): number; /// ?getAboveTopSolidBlock@BlockSource@@QEAAFHH_N0@Z
	/** getAllocatedHeightAt(BlockPos const &): short */
	getAllocatedHeightAt(_1: object): number; /// ?getAllocatedHeightAt@BlockSource@@QEAAFAEBVBlockPos@@@Z
	/** getBiome(BlockPos const &): class Biome & __ptr64 */
	getBiome(_1: object): unknown; /// ?getBiome@BlockSource@@QEAAAEAVBiome@@AEBVBlockPos@@@Z
	/** getBlock(BlockPos const &): class Block const & __ptr64 */
	getBlock(_1: object): Block; /// ?getBlock@BlockSource@@UEBAAEBVBlock@@AEBVBlockPos@@@Z
	/** getBlock(BlockPos const &,uint): class Block const & __ptr64 */
	getBlock(_1: object, _2: bigint): Block; /// ?getBlock@BlockSource@@UEBAAEBVBlock@@AEBVBlockPos@@I@Z
	/** getBlock(int,int,int): class Block const & __ptr64 */
	getBlock(_1: number, _2: number, _3: number): Block; /// ?getBlock@BlockSource@@UEBAAEBVBlock@@HHH@Z
	/** getBlockEntity(BlockPos const &): class BlockActor * __ptr64 */
	getBlockEntity(_1: object): unknown; /// ?getBlockEntity@BlockSource@@QEAAPEAVBlockActor@@AEBVBlockPos@@@Z
	/** getBlockEntity(int,int,int): class BlockActor * __ptr64 */
	getBlockEntity(_1: number, _2: number, _3: number): unknown; /// ?getBlockEntity@BlockSource@@QEAAPEAVBlockActor@@HHH@Z
	/** getBrightness(BlockPos const &): float */
	getBrightness(_1: object): number; /// ?getBrightness@BlockSource@@QEBAMAEBVBlockPos@@@Z
	/** getBrightnessPair(BlockPos const &): struct BrightnessPair */
	getBrightnessPair(_1: object): unknown; /// ?getBrightnessPair@BlockSource@@QEBA?AUBrightnessPair@@AEBVBlockPos@@@Z
	/** getChunk(ChunkPos const &): class LevelChunk * __ptr64 */
	getChunk(_1: object): unknown; /// ?getChunk@BlockSource@@QEBAPEAVLevelChunk@@AEBVChunkPos@@@Z
	/** getChunkAt(BlockPos const &): class LevelChunk * __ptr64 */
	getChunkAt(_1: object): unknown; /// ?getChunkAt@BlockSource@@UEBAPEAVLevelChunk@@AEBVBlockPos@@@Z
	/** getDimensionId(void): class AutomaticID<class Dimension,int> */
	getDimensionId(): unknown; /// ?getDimensionId@BlockSource@@UEBA?AV?$AutomaticID@VDimension@@H@@XZ
	/** getExtraBlock(BlockPos const &): class Block const & __ptr64 */
	getExtraBlock(_1: object): Block; /// ?getExtraBlock@BlockSource@@UEBAAEBVBlock@@AEBVBlockPos@@@Z
	/** getHeightmap(BlockPos const &): short */
	getHeightmap(_1: object): number; /// ?getHeightmap@BlockSource@@QEBAFAEBVBlockPos@@@Z
	/** getLiquidBlock(BlockPos const &): class Block const & __ptr64 */
	getLiquidBlock(_1: object): Block; /// ?getLiquidBlock@BlockSource@@UEBAAEBVBlock@@AEBVBlockPos@@@Z
	/** getMaterial(BlockPos const &): class Material const & __ptr64 */
	getMaterial(_1: object): unknown; /// ?getMaterial@BlockSource@@UEBAAEBVMaterial@@AEBVBlockPos@@@Z
	/** getMaterial(int,int,int): class Material const & __ptr64 */
	getMaterial(_1: number, _2: number, _3: number): unknown; /// ?getMaterial@BlockSource@@UEBAAEBVMaterial@@HHH@Z
	/** getMinHeight(void): short */
	getMinHeight(): number; /// ?getMinHeight@BlockSource@@UEBAFXZ
	/** getRawBrightness(BlockPos const &,bool,bool): struct Brightness */
	getRawBrightness(_1: object, _2: boolean, _3: boolean): unknown; /// ?getRawBrightness@BlockSource@@QEBA?AUBrightness@@AEBVBlockPos@@_N1@Z
	/** getWeakRef(void): class WeakRefT<struct SharePtrRefTraits<class BlockSource> > */
	getWeakRef(): unknown; /// ?getWeakRef@BlockSource@@UEAA?AV?$WeakRefT@U?$SharePtrRefTraits@VBlockSource@@@@@@XZ
	/** hasBlock(BlockPos const &): bool */
	hasBlock(_1: object): boolean; /// ?hasBlock@BlockSource@@UEBA_NAEBVBlockPos@@@Z
	/** hasChunksAt(AABB const &,bool): bool */
	hasChunksAt(_1: object, _2: boolean): boolean; /// ?hasChunksAt@BlockSource@@UEBA_NAEBVAABB@@_N@Z
	/** hasChunksAt(BlockPos const &,BlockPos const &,bool): bool */
	hasChunksAt(_1: object, _2: object, _3: boolean): boolean; /// ?hasChunksAt@BlockSource@@QEBA_NAEBVBlockPos@@0_N@Z
	/** hasChunksAt(BlockPos const &,int,bool): bool */
	hasChunksAt(_1: object, _2: number, _3: boolean): boolean; /// ?hasChunksAt@BlockSource@@UEBA_NAEBVBlockPos@@H_N@Z
	/** hasChunksAt(Bounds const &,bool): bool */
	hasChunksAt(_1: object, _2: boolean): boolean; /// ?hasChunksAt@BlockSource@@UEBA_NAEBUBounds@@_N@Z
	/** hasTickInPendingTicks(BlockPos const &): bool */
	hasTickInPendingTicks(_1: object): boolean; /// ?hasTickInPendingTicks@BlockSource@@QEBA_NAEBVBlockPos@@@Z
	/** isConsideredSolidBlock(BlockPos const &): bool */
	isConsideredSolidBlock(_1: object): boolean; /// ?isConsideredSolidBlock@BlockSource@@QEAA_NAEBVBlockPos@@@Z
	/** isEmptyBlock(BlockPos const &): bool */
	isEmptyBlock(_1: object): boolean; /// ?isEmptyBlock@BlockSource@@QEBA_NAEBVBlockPos@@@Z
	/** isEmptyBlock(int,int,int): bool */
	isEmptyBlock(_1: number, _2: number, _3: number): boolean; /// ?isEmptyBlock@BlockSource@@QEAA_NHHH@Z
	/** isEmptyWaterBlock(BlockPos const &): bool */
	isEmptyWaterBlock(_1: object): boolean; /// ?isEmptyWaterBlock@BlockSource@@QEBA_NAEBVBlockPos@@@Z
	/** isInWall(Vec3 const &): bool */
	isInWall(_1: object): boolean; /// ?isInWall@BlockSource@@QEAA_NAEBVVec3@@@Z
	/** isSolidBlockingBlock(BlockPos const &): bool */
	isSolidBlockingBlock(_1: object): boolean; /// ?isSolidBlockingBlock@BlockSource@@UEBA_NAEBVBlockPos@@@Z
	/** isUnderWater(Vec3 const &,Block const &): bool */
	isUnderWater(_1: object, _2: object): boolean; /// ?isUnderWater@BlockSource@@QEBA_NAEBVVec3@@AEBVBlock@@@Z
	/** mayPlace(Block const &,BlockPos const &,uchar,Actor *,bool): bool */
	mayPlace(_1: object, _2: object, _3: number, _4: object, _5: boolean): boolean; /// ?mayPlace@BlockSource@@QEAA_NAEBVBlock@@AEBVBlockPos@@EPEAVActor@@_N@Z
	/** neighborChanged(BlockPos const &,BlockPos const &): void */
	neighborChanged(_1: object, _2: object): void; /// ?neighborChanged@BlockSource@@QEAAXAEBVBlockPos@@0@Z
	/** postGameEvent(Actor *,GameEvent const &,BlockPos const &,Block const *): void */
	postGameEvent(_1: object, _2: object, _3: object, _4: object): void; /// ?postGameEvent@BlockSource@@QEAAXPEAVActor@@AEBVGameEvent@@AEBVBlockPos@@PEBVBlock@@@Z
	/** postGameEvent(Actor *,GameEvent const &,Vec3 const &,Block const *): void */
	postGameEvent(_1: object, _2: object, _3: object, _4: object): void; /// ?postGameEvent@BlockSource@@QEAAXPEAVActor@@AEBVGameEvent@@AEBVVec3@@PEBVBlock@@@Z
	/** removeBlock(BlockPos const &): bool */
	removeBlock(_1: object): boolean; /// ?removeBlock@BlockSource@@QEAA_NAEBVBlockPos@@@Z
	/** removeFromTickingQueue(BlockPos const &,Block const &): void */
	removeFromTickingQueue(_1: object, _2: object): void; /// ?removeFromTickingQueue@BlockSource@@QEAAXAEBVBlockPos@@AEBVBlock@@@Z
	/** removeListener(BlockSourceListener &): void */
	removeListener(_1: object): void; /// ?removeListener@BlockSource@@UEAAXAEAVBlockSourceListener@@@Z
	/** setBlock(BlockPos const &,Block const &,int,ActorBlockSyncMessage const *,Actor *): bool */
	setBlock(_1: object, _2: object, _3: number, _4: object, _5: object): boolean; /// ?setBlock@BlockSource@@UEAA_NAEBVBlockPos@@AEBVBlock@@HPEBUActorBlockSyncMessage@@PEAVActor@@@Z
	/** setBlock(int,int,int,Block const &,int,Actor *): bool */
	setBlock(_1: number, _2: number, _3: number, _4: object, _5: number, _6: object): boolean; /// ?setBlock@BlockSource@@QEAA_NHHHAEBVBlock@@HPEAVActor@@@Z
	/** setBlockNoUpdate(int,int,int,Block const &): bool */
	setBlockNoUpdate(_1: number, _2: number, _3: number, _4: object): boolean; /// ?setBlockNoUpdate@BlockSource@@QEAA_NHHHAEBVBlock@@@Z
	/** setExtraBlock(BlockPos const &,Block const &,int): bool */
	setExtraBlock(_1: object, _2: object, _3: number): boolean; /// ?setExtraBlock@BlockSource@@QEAA_NAEBVBlockPos@@AEBVBlock@@H@Z
	/** setLiquidBlock(BlockPos const &,Block const &,bool,int): bool */
	setLiquidBlock(_1: object, _2: object, _3: boolean, _4: number): boolean; /// ?setLiquidBlock@BlockSource@@QEAA_NAEBVBlockPos@@AEBVBlock@@_NH@Z
	/** setRandomTickingQueue(BlockTickingQueue &): void */
	setRandomTickingQueue(_1: object): void; /// ?setRandomTickingQueue@BlockSource@@QEAAXAEAVBlockTickingQueue@@@Z
	/** tryGetBiome(BlockPos const &): class Biome * __ptr64 */
	tryGetBiome(_1: object): unknown; /// ?tryGetBiome@BlockSource@@QEBAPEAVBiome@@AEBVBlockPos@@@Z
	/** updateNeighborsAt(BlockPos const &): void */
	updateNeighborsAt(_1: object): void; /// ?updateNeighborsAt@BlockSource@@QEAAXAEBVBlockPos@@@Z
}
declare class BoolAbility {
	// Attributes 
	state: number;
	data: number;
	permissions: number;
	// Methods 
	// Inherited from BoolAbility
}
declare class ChangeDimensionPacket {
	// Attributes 
	dimension: number;
	position: Vec3;
	respawn: number;
	dispatcher: PacketHandlerDispatcherInstance;
	// Methods 
	// Inherited from ChangeDimensionPacket
	/** _read(ReadOnlyBinaryStream &): enum StreamReadResult */
	_read(_1: object): bigint; /// ?_read@ChangeDimensionPacket@@EEAA?AW4StreamReadResult@@AEAVReadOnlyBinaryStream@@@Z
	/** getId(void): enum MinecraftPacketIds */
	getId(): bigint; /// ?getId@ChangeDimensionPacket@@UEBA?AW4MinecraftPacketIds@@XZ
	/** getName(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	getName(): unknown; /// ?getName@ChangeDimensionPacket@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** write(BinaryStream &): void */
	write(_1: object): void; /// ?write@ChangeDimensionPacket@@UEBAXAEAVBinaryStream@@@Z
	// Inherited from Packet
	/** readExtended(ReadOnlyBinaryStream &): struct ExtendedStreamReadResult */
	readExtended(_1: object): unknown; /// ?readExtended@Packet@@UEAA?AUExtendedStreamReadResult@@AEAVReadOnlyBinaryStream@@@Z
}
declare class DXGI_OUTPUT_DESC {
	// Attributes 
	DeviceName: object;
	AttachedToDesktop: number;
	Monitor: bigint;
	Rotation: number;
	// Methods 
	// Inherited from DXGI_OUTPUT_DESC
}
declare class ChatScreenController {
	// Attributes 
	message: SDKText;
	intellisenseIndex: number;
	isDevConsole: number;
	// Methods 
	// Inherited from ChatScreenController
	/** ChatScreenController */
	ChatScreenController(): ChatScreenController; /// ChatScreenController::ChatScreenController
	sendChatMessage(): bigint; /// ChatScreenController::sendChatMessage
	// Inherited from ClientInstanceScreenController
	// Inherited from MinecraftScreenController
	// Inherited from ScreenController
}
declare class FillingContainer {
	// Attributes 
	owner: Actor;
	vtable: object;
	// Methods 
	// Inherited from FillingContainer
	/** FillingContainer(Player *,int,ContainerType) */
	FillingContainer(_1: object, _2: number, _3: unknown): FillingContainer; /// ??0FillingContainer@@QEAA@PEAVPlayer@@HW4ContainerType@@@Z
	/** _fixBackwardCompabilityItem(ItemStack &): void */
	_fixBackwardCompabilityItem(_1: object): void; /// ?_fixBackwardCompabilityItem@FillingContainer@@IEAAXAEAVItemStack@@@Z
	/** _getFreeSlot(void): int */
	_getFreeSlot(): number; /// ?_getFreeSlot@FillingContainer@@IEBAHXZ
	/** _getSlot(int): int */
	_getSlot(_1: number): number; /// ?_getSlot@FillingContainer@@IEBAHH@Z
	/** _getSlotWithRemainingSpace(ItemStack const &): int */
	_getSlotWithRemainingSpace(_1: object): number; /// ?_getSlotWithRemainingSpace@FillingContainer@@IEBAHAEBVItemStack@@@Z
	/** _isCreative(void): bool */
	_isCreative(): boolean; /// ?_isCreative@FillingContainer@@IEBA_NXZ
	/** _release(int): void */
	_release(_1: number): void; /// ?_release@FillingContainer@@IEAAXH@Z
	/** add(ItemStack &): bool */
	add(_1: object): boolean; /// ?add@FillingContainer@@UEAA_NAEAVItemStack@@@Z
	/** canAdd(ItemStack const &): bool */
	canAdd(_1: object): boolean; /// ?canAdd@FillingContainer@@UEBA_NAEBVItemStack@@@Z
	/** clearInventory(int): int */
	clearInventory(_1: number): number; /// ?clearInventory@FillingContainer@@UEAAHH@Z
	/** clearSlot(int): void */
	clearSlot(_1: number): void; /// ?clearSlot@FillingContainer@@UEAAXH@Z
	/** getContainerSize(void): int */
	getContainerSize(): number; /// ?getContainerSize@FillingContainer@@UEBAHXZ
	/** getEmptySlotsCount(void): int */
	getEmptySlotsCount(): number; /// ?getEmptySlotsCount@FillingContainer@@UEBAHXZ
	/** getItem(int): class ItemStack const & __ptr64 */
	getItem(_1: number): ItemStack; /// ?getItem@FillingContainer@@UEBAAEBVItemStack@@H@Z
	/** getMaxStackSize(void): int */
	getMaxStackSize(): number; /// ?getMaxStackSize@FillingContainer@@UEBAHXZ
	/** load(ListTag const &,SemVersion const &,Level &): void */
	load(_1: object, _2: object, _3: object): void; /// ?load@FillingContainer@@UEAAXAEBVListTag@@AEBVSemVersion@@AEAVLevel@@@Z
	/** removeItem(int,int): void */
	removeItem(_1: number, _2: number): void; /// ?removeItem@FillingContainer@@UEAAXHH@Z
	/** removeResource(ItemStack const &,bool,bool,int): int */
	removeResource(_1: object, _2: boolean, _3: boolean, _4: number): number; /// ?removeResource@FillingContainer@@QEAAHAEBVItemStack@@_N1H@Z
	/** removeResource(int): bool */
	removeResource(_1: number): boolean; /// ?removeResource@FillingContainer@@QEAA_NH@Z
	/** save(void): class std::unique_ptr<class ListTag,struct std::default_delete<class ListTag> > */
	save(): unknown; /// ?save@FillingContainer@@QEBA?AV?$unique_ptr@VListTag@@U?$default_delete@VListTag@@@std@@@std@@XZ
	/** setItemWithForceBalance(int,ItemStack const &,bool): void */
	setItemWithForceBalance(_1: number, _2: object, _3: boolean): void; /// ?setItemWithForceBalance@FillingContainer@@UEAAXHAEBVItemStack@@_N@Z
	/** swapSlots(int,int): void */
	swapSlots(_1: number, _2: number): void; /// ?swapSlots@FillingContainer@@QEAAXHH@Z
	// Inherited from Container
	/** addAdditionalSaveData(CompoundTag &): void */
	addAdditionalSaveData(_1: object): void; /// ?addAdditionalSaveData@Container@@UEAAXAEAVCompoundTag@@@Z
	/** addContentChangeListener(ContainerContentChangeListener *): void */
	addContentChangeListener(_1: object): void; /// ?addContentChangeListener@Container@@UEAAXPEAVContainerContentChangeListener@@@Z
	/** addItem(ItemStack &): bool */
	addItem(_1: object): boolean; /// ?addItem@Container@@UEAA_NAEAVItemStack@@@Z
	/** addItemToFirstEmptySlot(ItemStack const &): bool */
	addItemToFirstEmptySlot(_1: object): boolean; /// ?addItemToFirstEmptySlot@Container@@UEAA_NAEBVItemStack@@@Z
	/** dropContents(BlockSource &,Vec3 const &,bool): void */
	dropContents(_1: object, _2: object, _3: boolean): void; /// ?dropContents@Container@@UEAAXAEAVBlockSource@@AEBVVec3@@_N@Z
	/** findFirstSlotForItem(ItemStack const &): int */
	findFirstSlotForItem(_1: object): number; /// ?findFirstSlotForItem@Container@@UEBAHAEBVItemStack@@@Z
	/** getItemCount(ItemStack const &): int */
	getItemCount(_1: object): number; /// ?getItemCount@Container@@UEBAHAEBVItemStack@@@Z
	/** getRedstoneSignalFromContainer(BlockSource &): int */
	getRedstoneSignalFromContainer(_1: object): number; /// ?getRedstoneSignalFromContainer@Container@@QEAAHAEAVBlockSource@@@Z
	/** getRuntimeId(void): class TypedRuntimeId<struct ContainerRuntimeIdTag,unsigned int,0> const & __ptr64 */
	getRuntimeId(): unknown; /// ?getRuntimeId@Container@@QEBAAEBV?$TypedRuntimeId@UContainerRuntimeIdTag@@I$0A@@@XZ
	/** getSlotCopies(void): class std::vector<class ItemStack,class std::allocator<class ItemStack> > */
	getSlotCopies(): unknown; /// ?getSlotCopies@Container@@UEBA?AV?$vector@VItemStack@@V?$allocator@VItemStack@@@std@@@std@@XZ
	/** getSlots(void): class std::vector<class ItemStack const * __ptr64,class std::allocator<class ItemStack const * __ptr64> > const */
	getSlots(): unknown; /// ?getSlots@Container@@UEBA?BV?$vector@PEBVItemStack@@V?$allocator@PEBVItemStack@@@std@@@std@@XZ
	/** hasRoomForItem(ItemStack const &): bool */
	hasRoomForItem(_1: object): boolean; /// ?hasRoomForItem@Container@@UEAA_NAEBVItemStack@@@Z
	/** initRuntimeId(void): void */
	initRuntimeId(): void; /// ?initRuntimeId@Container@@QEAAXXZ
	/** isEmpty(void): bool */
	isEmpty(): boolean; /// ?isEmpty@Container@@UEBA_NXZ
	/** readAdditionalSaveData(CompoundTag const &): void */
	readAdditionalSaveData(_1: object): void; /// ?readAdditionalSaveData@Container@@UEAAXAEBVCompoundTag@@@Z
	/** removeAllItems(void): void */
	removeAllItems(): void; /// ?removeAllItems@Container@@UEAAXXZ
	/** removeContentChangeListener(ContainerContentChangeListener *): void */
	removeContentChangeListener(_1: object): void; /// ?removeContentChangeListener@Container@@UEAAXPEAVContainerContentChangeListener@@@Z
	/** setContainerChanged(int): void */
	setContainerChanged(_1: number): void; /// ?setContainerChanged@Container@@UEAAXH@Z
	/** setContainerMoved(void): void */
	setContainerMoved(): void; /// ?setContainerMoved@Container@@UEAAXXZ
	/** triggerTransactionChange(int,ItemStack const &,ItemStack const &): void */
	triggerTransactionChange(_1: number, _2: object, _3: object): void; /// ?triggerTransactionChange@Container@@QEAAXHAEBVItemStack@@0@Z
}
declare class ClientCacheBlobStatusPacket {
	// Attributes 
	cacheMisses: SDKVectorContainer;
	cacheHits: SDKVectorContainer;
	dispatcher: PacketHandlerDispatcherInstance;
	// Methods 
	// Inherited from ClientCacheBlobStatusPacket
	/** _read(ReadOnlyBinaryStream &): enum StreamReadResult */
	_read(_1: object): bigint; /// ?_read@ClientCacheBlobStatusPacket@@EEAA?AW4StreamReadResult@@AEAVReadOnlyBinaryStream@@@Z
	/** getId(void): enum MinecraftPacketIds */
	getId(): bigint; /// ?getId@ClientCacheBlobStatusPacket@@UEBA?AW4MinecraftPacketIds@@XZ
	/** getName(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	getName(): unknown; /// ?getName@ClientCacheBlobStatusPacket@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** write(BinaryStream &): void */
	write(_1: object): void; /// ?write@ClientCacheBlobStatusPacket@@UEBAXAEAVBinaryStream@@@Z
	// Inherited from Packet
	/** readExtended(ReadOnlyBinaryStream &): struct ExtendedStreamReadResult */
	readExtended(_1: object): unknown; /// ?readExtended@Packet@@UEAA?AUExtendedStreamReadResult@@AEAVReadOnlyBinaryStream@@@Z
}
declare class InventoryTransactionManager {
	// Attributes 
	owner: Player;
	// Methods 
	// Inherited from InventoryTransactionManager
	/** _createServerSideAction(ItemStack const &,ItemStack const &): void */
	_createServerSideAction(_1: object, _2: object): void; /// ?_createServerSideAction@InventoryTransactionManager@@QEAAXAEBVItemStack@@0@Z
	/** addAction(InventoryAction const &,bool): void */
	addAction(_1: object, _2: boolean): void; /// ?addAction@InventoryTransactionManager@@QEAAXAEBVInventoryAction@@_N@Z
	/** checkActionExpected(InventoryAction const &): bool */
	checkActionExpected(_1: object): boolean; /// ?checkActionExpected@InventoryTransactionManager@@QEAA_NAEBVInventoryAction@@@Z
	/** forceBalanceTransaction(void): void */
	forceBalanceTransaction(): void; /// ?forceBalanceTransaction@InventoryTransactionManager@@QEAAXXZ
}
declare class InventoryAction {
	// Attributes 
	type: number;
	container: number;
	targetItem: ItemStack;
	slot: number;
	flags: number;
	sourceItemDescriptor: NetworkItemStackDescriptor;
	targetItemDescriptor: NetworkItemStackDescriptor;
	sourceItem: ItemStack;
	// Methods 
	// Inherited from InventoryAction
	/** InventoryAction(InventoryAction const &) */
	InventoryAction(_1: object): InventoryAction; /// ??0InventoryAction@@QEAA@AEBV0@@Z
	/** postLoadItems(BlockPalette &,bool): void */
	postLoadItems(_1: object, _2: boolean): void; /// ?postLoadItems@InventoryAction@@QEAAXAEAVBlockPalette@@_N@Z
}
declare class ClientCacheMissResponsePacket {
	// Attributes 
	dispatcher: PacketHandlerDispatcherInstance;
	// Methods 
	// Inherited from ClientCacheMissResponsePacket
	/** _read(ReadOnlyBinaryStream &): enum StreamReadResult */
	_read(_1: object): bigint; /// ?_read@ClientCacheMissResponsePacket@@EEAA?AW4StreamReadResult@@AEAVReadOnlyBinaryStream@@@Z
	/** getId(void): enum MinecraftPacketIds */
	getId(): bigint; /// ?getId@ClientCacheMissResponsePacket@@UEBA?AW4MinecraftPacketIds@@XZ
	/** getName(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	getName(): unknown; /// ?getName@ClientCacheMissResponsePacket@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** write(BinaryStream &): void */
	write(_1: object): void; /// ?write@ClientCacheMissResponsePacket@@UEBAXAEAVBinaryStream@@@Z
	// Inherited from Packet
	/** readExtended(ReadOnlyBinaryStream &): struct ExtendedStreamReadResult */
	readExtended(_1: object): unknown; /// ?readExtended@Packet@@UEAA?AUExtendedStreamReadResult@@AEAVReadOnlyBinaryStream@@@Z
}
declare class ClientInstance {
	// Attributes 
	minecraftGame: MinecraftGame;
	vtable: object;
	mousePos: Vec2;
	minecraft: Minecraft;
	levelRenderer: LevelRenderer;
	loopbackPacketSender: LoopbackPacketSender;
	viewProjectionMatrix: Mat4x4;
	itemInHandRenderer: object;
	fovY: number;
	fovX: number;
	// Methods 
	// Inherited from ClientInstance
	getClientSubId(): bigint; /// ClientInstance::getClientSubId
	getDevConsoleMessageHistory(): bigint; /// ClientInstance::getDevConsoleMessageHistory
	getLevel(): bigint; /// ClientInstance::getLevel
	getLocalPlayer(): bigint; /// ClientInstance::getLocalPlayer
	getMouseGrabbed(): bigint; /// ClientInstance::getMouseGrabbed
	getSentMessageHistory(): bigint; /// ClientInstance::getSentMessageHistory
	grabMouse(): bigint; /// ClientInstance::grabMouse
	isDestroyingGame(): bigint; /// ClientInstance::isDestroyingGame
	isInBedScreen(): bigint; /// ClientInstance::isInBedScreen
	isInMultiplayerGame(): bigint; /// ClientInstance::isInMultiplayerGame
	isLeavingGame(): bigint; /// ClientInstance::isLeavingGame
	isShowingDeathScreen(): bigint; /// ClientInstance::isShowingDeathScreen
	isShowingProgressScreen(): bigint; /// ClientInstance::isShowingProgressScreen
	isShowingWorldProgressScreen(): bigint; /// ClientInstance::isShowingWorldProgressScreen
	isShuttingDown(): bigint; /// ClientInstance::isShuttingDown
	isVRTransitioning(): bigint; /// ClientInstance::isVRTransitioning
	navigateToServersScreen(): bigint; /// ClientInstance::navigateToServersScreen
	navigateToStoreHomeScreen(): bigint; /// ClientInstance::navigateToStoreHomeScreen
	releaseMouse(): bigint; /// ClientInstance::releaseMouse
	setDisableInput(): bigint; /// ClientInstance::setDisableInput
	setRealityModeFrameFactor(): bigint; /// ClientInstance::setRealityModeFrameFactor
	setSuspendInput(): bigint; /// ClientInstance::setSuspendInput
	tryPushLeaveGameScreen(): bigint; /// ClientInstance::tryPushLeaveGameScreen
}
declare class MinecraftGame {
	// Attributes 
	fontRepository: FontRepository;
	// Methods 
	// Inherited from MinecraftGame
}
declare class LevelChunkPacket {
	// Attributes 
	chunkX: number;
	usedBlobHashes: SDKVectorContainer;
	chunkZ: number;
	extraPayload: SDKText;
	cacheEnabled: number;
	subChunkCount: bigint;
	clientSubChunkRequestsEnabled: number;
	truncatedSubChunkCount: number;
	dispatcher: PacketHandlerDispatcherInstance;
	// Methods 
	// Inherited from LevelChunkPacket
	/** _read(ReadOnlyBinaryStream &): enum StreamReadResult */
	_read(_1: object): bigint; /// ?_read@LevelChunkPacket@@EEAA?AW4StreamReadResult@@AEAVReadOnlyBinaryStream@@@Z
	/** getId(void): enum MinecraftPacketIds */
	getId(): bigint; /// ?getId@LevelChunkPacket@@UEBA?AW4MinecraftPacketIds@@XZ
	/** getName(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	getName(): unknown; /// ?getName@LevelChunkPacket@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** write(BinaryStream &): void */
	write(_1: object): void; /// ?write@LevelChunkPacket@@UEBAXAEAVBinaryStream@@@Z
	// Inherited from Packet
	/** readExtended(ReadOnlyBinaryStream &): struct ExtendedStreamReadResult */
	readExtended(_1: object): unknown; /// ?readExtended@Packet@@UEAA?AUExtendedStreamReadResult@@AEAVReadOnlyBinaryStream@@@Z
}
declare class ItemPtr {
	// Attributes 
	item: Item;
	// Methods 
	// Inherited from ItemPtr
}
declare class ClientInstanceScreenController {
	// Attributes 
	// Methods 
	// Inherited from ClientInstanceScreenController
	/** ClientInstanceScreenController */
	ClientInstanceScreenController(): ClientInstanceScreenController; /// ClientInstanceScreenController::ClientInstanceScreenController
	// Inherited from MinecraftScreenController
	// Inherited from ScreenController
}
declare class MoveInputHandler {
	// Attributes 
	isJumping: number;
	vtable: object;
	sideMovement: number;
	forwardMovement: number;
	isSneakDown: number;
	// Methods 
	// Inherited from MoveInputHandler
	/** clearInputState(void): void */
	clearInputState(): void; /// ?clearInputState@MoveInputHandler@@UEAAXXZ
	/** extractInputComponent(void): struct MoveInputComponent */
	extractInputComponent(): unknown; /// ?extractInputComponent@MoveInputHandler@@UEBA?AUMoveInputComponent@@XZ
	/** fillInputPacket(PlayerAuthInputPacket &): void */
	fillInputPacket(_1: object): void; /// ?fillInputPacket@MoveInputHandler@@UEAAXAEAVPlayerAuthInputPacket@@@Z
	/** getGazeDirection(void): class Vec3 const & __ptr64 */
	getGazeDirection(): unknown; /// ?getGazeDirection@MoveInputHandler@@UEBAAEBVVec3@@XZ
	/** isPlayerMoving(void): bool */
	isPlayerMoving(): boolean; /// ?isPlayerMoving@MoveInputHandler@@UEBA_NXZ
	/** tick(IPlayerMovementProxy &): void */
	tick(_1: object): void; /// ?tick@MoveInputHandler@@UEAAXAEAUIPlayerMovementProxy@@@Z
}
declare class SpinLock {
	// Attributes 
	// Methods 
	// Inherited from SpinLock
	/** SpinLock(void) */
	SpinLock(): SpinLock; /// ??0SpinLock@@QEAA@XZ
	/** lock(void): void */
	lock(): void; /// ?lock@SpinLock@@QEAAXXZ
	/** unlock(void): void */
	unlock(): void; /// ?unlock@SpinLock@@QEAAXXZ
}
declare class CompoundTag {
	// Attributes 
	// Methods 
	// Inherited from CompoundTag
	/** CompoundTag(CompoundTag &&) */
	CompoundTag(_1: object): CompoundTag; /// ??0CompoundTag@@QEAA@$$QEAV0@@Z
	/** CompoundTag(void) */
	CompoundTag(): CompoundTag; /// ??0CompoundTag@@QEAA@XZ
	/** clear(void): void */
	clear(): void; /// ?clear@CompoundTag@@QEAAXXZ
	/** clone(void): class std::unique_ptr<class CompoundTag,struct std::default_delete<class CompoundTag> > */
	clone(): unknown; /// ?clone@CompoundTag@@QEBA?AV?$unique_ptr@VCompoundTag@@U?$default_delete@VCompoundTag@@@std@@@std@@XZ
	/** copy(void): class std::unique_ptr<class Tag,struct std::default_delete<class Tag> > */
	copy(): unknown; /// ?copy@CompoundTag@@UEBA?AV?$unique_ptr@VTag@@U?$default_delete@VTag@@@std@@@std@@XZ
	/** deepCopy(CompoundTag const &): void */
	deepCopy(_1: object): void; /// ?deepCopy@CompoundTag@@QEAAXAEBV1@@Z
	/** equals(Tag const &): bool */
	equals(_1: object): boolean; /// ?equals@CompoundTag@@UEBA_NAEBVTag@@@Z
	/** getId(void): enum Tag::Type */
	getId(): bigint; /// ?getId@CompoundTag@@UEBA?AW4Type@Tag@@XZ
	/** hash(void): unsigned __int64 */
	hash(): bigint; /// ?hash@CompoundTag@@UEBA_KXZ
	/** load(IDataInput &): void */
	load(_1: object): void; /// ?load@CompoundTag@@UEAAXAEAVIDataInput@@@Z
	/** toString(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	toString(): unknown; /// ?toString@CompoundTag@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** write(IDataOutput &): void */
	write(_1: object): void; /// ?write@CompoundTag@@UEBAXAEAVIDataOutput@@@Z
	// Inherited from Tag
	/** print(PrintStream &): void */
	print(_1: object): void; /// ?print@Tag@@UEBAXAEAVPrintStream@@@Z
}
declare class Item {
	// Attributes 
	itemId: number;
	vtable: object;
	maxStackSize: number;
	tileName: SDKText;
	name: SDKText;
	// Methods 
	// Inherited from Item
	/** _addLooseCreativeItemsClient(void): void */
	_addLooseCreativeItemsClient(): void; /// ?_addLooseCreativeItemsClient@Item@@CAXXZ
	/** addCreativeItem(Block const &): void */
	addCreativeItem(_1: object): void; /// ?addCreativeItem@Item@@SAXAEBVBlock@@@Z
	/** addCreativeItem(ItemInstance const &): void */
	addCreativeItem(_1: object): void; /// ?addCreativeItem@Item@@SAXAEBVItemInstance@@@Z
	/** addTag(HashedString const &): class Item & __ptr64 */
	addTag(_1: object): Item; /// ?addTag@Item@@QEAAAEAV1@AEBVHashedString@@@Z
	/** addTag(ItemTag const &): class Item & __ptr64 */
	addTag(_1: object): Item; /// ?addTag@Item@@QEAAAEAV1@AEBUItemTag@@@Z
	/** buildDescriptionName(ItemStackBase const &): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	buildDescriptionName(_1: object): unknown; /// ?buildDescriptionName@Item@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@AEBVItemStackBase@@@Z
	/** buildDescriptor(short,CompoundTag const *): class ItemDescriptor */
	buildDescriptor(_1: number, _2: object): ItemDescriptor; /// ?buildDescriptor@Item@@QEBA?AVItemDescriptor@@FPEBVCompoundTag@@@Z
	/** buildIdAux(short,CompoundTag const *): int */
	buildIdAux(_1: number, _2: object): number; /// ?buildIdAux@Item@@UEBAHFPEBVCompoundTag@@@Z
	/** canBeDepleted(void): bool */
	canBeDepleted(): boolean; /// ?canBeDepleted@Item@@UEBA_NXZ
	/** destroySpeedBonus(ItemStackBase const &): float */
	destroySpeedBonus(_1: object): number; /// ?destroySpeedBonus@Item@@QEBAMAEBVItemStackBase@@@Z
	/** getCooldownTime(void): int */
	getCooldownTime(): number; /// ?getCooldownTime@Item@@UEBAHXZ
	/** getCooldownType(void): class HashedString const & __ptr64 */
	getCooldownType(): unknown; /// ?getCooldownType@Item@@UEBAAEBVHashedString@@XZ
	/** getDamageChance(int): int */
	getDamageChance(_1: number): number; /// ?getDamageChance@Item@@UEBAHH@Z
	/** getId(void): short */
	getId(): number; /// ?getId@Item@@QEBAFXZ
	/** getInHandUpdateType(Player const &,ItemStack const &,ItemStack const &,bool,bool): enum InHandUpdateType */
	getInHandUpdateType(_1: object, _2: object, _3: object, _4: boolean, _5: boolean): bigint; /// ?getInHandUpdateType@Item@@UEBA?AW4InHandUpdateType@@AEBVPlayer@@AEBVItemStack@@1_N2@Z
	/** getLegacyBlock(void): class WeakPtr<class BlockLegacy> const & __ptr64 */
	getLegacyBlock(): unknown; /// ?getLegacyBlock@Item@@QEBAAEBV?$WeakPtr@VBlockLegacy@@@@XZ
	/** getLightEmission(int): struct Brightness */
	getLightEmission(_1: number): unknown; /// ?getLightEmission@Item@@UEBA?AUBrightness@@H@Z
	/** getRawNameId(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64 */
	getRawNameId(): unknown; /// ?getRawNameId@Item@@QEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** getSerializedName(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	getSerializedName(): unknown; /// ?getSerializedName@Item@@QEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** hasDamageValue(CompoundTag const *): bool */
	hasDamageValue(_1: object): boolean; /// ?hasDamageValue@Item@@QEBA_NPEBVCompoundTag@@@Z
	/** hurtActor(ItemStack &,Actor &,Mob &): void */
	hurtActor(_1: object, _2: object, _3: object): void; /// ?hurtActor@Item@@UEBAXAEAVItemStack@@AEAVActor@@AEAVMob@@@Z
	/** isDamageable(void): bool */
	isDamageable(): boolean; /// ?isDamageable@Item@@UEBA_NXZ
	/** isElytra(void): bool */
	isElytra(): boolean; /// ?isElytra@Item@@QEBA_NXZ
	/** isElytraBroken(int): bool */
	isElytraBroken(_1: number): boolean; /// ?isElytraBroken@Item@@SA_NH@Z
	/** isEmissive(int): bool */
	isEmissive(_1: number): boolean; /// ?isEmissive@Item@@UEBA_NH@Z
	/** isFireResistant(void): bool */
	isFireResistant(): boolean; /// ?isFireResistant@Item@@QEBA_NXZ
	/** isGlint(ItemStackBase const &): bool */
	isGlint(_1: object): boolean; /// ?isGlint@Item@@UEBA_NAEBVItemStackBase@@@Z
	/** isSameItem(ItemStackBase const &,ItemStackBase const &): bool */
	isSameItem(_1: object, _2: object): boolean; /// ?isSameItem@Item@@UEBA_NAEBVItemStackBase@@0@Z
	/** isSameTypeAndItem(ItemStackBase const &,ItemStackBase const &): bool */
	isSameTypeAndItem(_1: object, _2: object): boolean; /// ?isSameTypeAndItem@Item@@SA_NAEBVItemStackBase@@0@Z
	/** isSeed(void): bool */
	isSeed(): boolean; /// ?isSeed@Item@@QEBA_NXZ
	/** readUserData(ItemStackBase &,IDataInput &,ReadOnlyBinaryStream &): void */
	readUserData(_1: object, _2: object, _3: object): void; /// ?readUserData@Item@@UEBAXAEAVItemStackBase@@AEAVIDataInput@@AEAVReadOnlyBinaryStream@@@Z
	/** removeDamageValue(ItemStackBase &): void */
	removeDamageValue(_1: object): void; /// ?removeDamageValue@Item@@QEBAXAEAVItemStackBase@@@Z
	/** setCategory(CreativeItemCategory): class Item & __ptr64 */
	setCategory(_1: unknown): Item; /// ?setCategory@Item@@QEAAAEAV1@W4CreativeItemCategory@@@Z
	/** setDamageValue(ItemStackBase &,short): void */
	setDamageValue(_1: object, _2: number): void; /// ?setDamageValue@Item@@UEBAXAEAVItemStackBase@@F@Z
	/** setFurnaceBurnIntervalMultiplier(float): class Item & __ptr64 */
	setFurnaceBurnIntervalMultiplier(_1: number): Item; /// ?setFurnaceBurnIntervalMultiplier@Item@@QEAAAEAV1@M@Z
	/** setFurnaceXPmultiplier(float): class Item & __ptr64 */
	setFurnaceXPmultiplier(_1: number): Item; /// ?setFurnaceXPmultiplier@Item@@QEAAAEAV1@M@Z
	/** setMaxDamage(int): class Item & __ptr64 */
	setMaxDamage(_1: number): Item; /// ?setMaxDamage@Item@@UEAAAEAV1@H@Z
	/** setMaxStackSize(uchar): class Item & __ptr64 */
	setMaxStackSize(_1: number): Item; /// ?setMaxStackSize@Item@@UEAAAEAV1@E@Z
	/** setMinRequiredBaseGameVersion(BaseGameVersion const &): class Item & __ptr64 */
	setMinRequiredBaseGameVersion(_1: object): Item; /// ?setMinRequiredBaseGameVersion@Item@@QEAAAEAV1@AEBVBaseGameVersion@@@Z
	/** setStackedByData(bool): class Item & __ptr64 */
	setStackedByData(_1: boolean): Item; /// ?setStackedByData@Item@@UEAAAEAV1@_N@Z
	/** setUseAnimation(UseAnimation): class Item & __ptr64 */
	setUseAnimation(_1: unknown): Item; /// ?setUseAnimation@Item@@UEAAAEAV1@W4UseAnimation@@@Z
	/** shouldDespawn(void): bool */
	shouldDespawn(): boolean; /// ?shouldDespawn@Item@@QEBA_NXZ
	/** updateCustomBlockEntityTag(BlockSource &,ItemStackBase &,BlockPos const &): bool */
	updateCustomBlockEntityTag(_1: object, _2: object, _3: object): boolean; /// ?updateCustomBlockEntityTag@Item@@QEBA_NAEAVBlockSource@@AEAVItemStackBase@@AEBVBlockPos@@@Z
	/** useOn(ItemStack &,Actor &,int,int,int,uchar,Vec3 const &): bool */
	useOn(_1: object, _2: object, _3: number, _4: number, _5: number, _6: number, _7: object): boolean; /// ?useOn@Item@@QEBA_NAEAVItemStack@@AEAVActor@@HHHEAEBVVec3@@@Z
}
declare class FontRepository_FontList {
	// Attributes 
	list: object;
	// Methods 
	// Inherited from FontRepository_FontList
}
declare class Container {
	// Attributes 
	vtable: object;
	// Methods 
	// Inherited from Container
	/** Container(ContainerType) */
	Container(_1: unknown): Container; /// ??0Container@@QEAA@W4ContainerType@@@Z
	/** addAdditionalSaveData(CompoundTag &): void */
	addAdditionalSaveData(_1: object): void; /// ?addAdditionalSaveData@Container@@UEAAXAEAVCompoundTag@@@Z
	/** addContentChangeListener(ContainerContentChangeListener *): void */
	addContentChangeListener(_1: object): void; /// ?addContentChangeListener@Container@@UEAAXPEAVContainerContentChangeListener@@@Z
	/** addItem(ItemStack &): bool */
	addItem(_1: object): boolean; /// ?addItem@Container@@UEAA_NAEAVItemStack@@@Z
	/** addItemToFirstEmptySlot(ItemStack const &): bool */
	addItemToFirstEmptySlot(_1: object): boolean; /// ?addItemToFirstEmptySlot@Container@@UEAA_NAEBVItemStack@@@Z
	/** dropContents(BlockSource &,Vec3 const &,bool): void */
	dropContents(_1: object, _2: object, _3: boolean): void; /// ?dropContents@Container@@UEAAXAEAVBlockSource@@AEBVVec3@@_N@Z
	/** findFirstSlotForItem(ItemStack const &): int */
	findFirstSlotForItem(_1: object): number; /// ?findFirstSlotForItem@Container@@UEBAHAEBVItemStack@@@Z
	/** getItemCount(ItemStack const &): int */
	getItemCount(_1: object): number; /// ?getItemCount@Container@@UEBAHAEBVItemStack@@@Z
	/** getRedstoneSignalFromContainer(BlockSource &): int */
	getRedstoneSignalFromContainer(_1: object): number; /// ?getRedstoneSignalFromContainer@Container@@QEAAHAEAVBlockSource@@@Z
	/** getRuntimeId(void): class TypedRuntimeId<struct ContainerRuntimeIdTag,unsigned int,0> const & __ptr64 */
	getRuntimeId(): unknown; /// ?getRuntimeId@Container@@QEBAAEBV?$TypedRuntimeId@UContainerRuntimeIdTag@@I$0A@@@XZ
	/** getSlotCopies(void): class std::vector<class ItemStack,class std::allocator<class ItemStack> > */
	getSlotCopies(): unknown; /// ?getSlotCopies@Container@@UEBA?AV?$vector@VItemStack@@V?$allocator@VItemStack@@@std@@@std@@XZ
	/** getSlots(void): class std::vector<class ItemStack const * __ptr64,class std::allocator<class ItemStack const * __ptr64> > const */
	getSlots(): unknown; /// ?getSlots@Container@@UEBA?BV?$vector@PEBVItemStack@@V?$allocator@PEBVItemStack@@@std@@@std@@XZ
	/** hasRoomForItem(ItemStack const &): bool */
	hasRoomForItem(_1: object): boolean; /// ?hasRoomForItem@Container@@UEAA_NAEBVItemStack@@@Z
	/** initRuntimeId(void): void */
	initRuntimeId(): void; /// ?initRuntimeId@Container@@QEAAXXZ
	/** isEmpty(void): bool */
	isEmpty(): boolean; /// ?isEmpty@Container@@UEBA_NXZ
	/** readAdditionalSaveData(CompoundTag const &): void */
	readAdditionalSaveData(_1: object): void; /// ?readAdditionalSaveData@Container@@UEAAXAEBVCompoundTag@@@Z
	/** removeAllItems(void): void */
	removeAllItems(): void; /// ?removeAllItems@Container@@UEAAXXZ
	/** removeContentChangeListener(ContainerContentChangeListener *): void */
	removeContentChangeListener(_1: object): void; /// ?removeContentChangeListener@Container@@UEAAXPEAVContainerContentChangeListener@@@Z
	/** removeItem(int,int): void */
	removeItem(_1: number, _2: number): void; /// ?removeItem@Container@@UEAAXHH@Z
	/** setContainerChanged(int): void */
	setContainerChanged(_1: number): void; /// ?setContainerChanged@Container@@UEAAXH@Z
	/** setContainerMoved(void): void */
	setContainerMoved(): void; /// ?setContainerMoved@Container@@UEAAXXZ
	/** triggerTransactionChange(int,ItemStack const &,ItemStack const &): void */
	triggerTransactionChange(_1: number, _2: object, _3: object): void; /// ?triggerTransactionChange@Container@@QEAAXHAEBVItemStack@@0@Z
}
declare class LocalPlayer {
	// Attributes 
	playerName: SDKText;
	gamemode: number;
	uuid: SDKText;
	canFly: number;
	gameMode: GameMode;
	isSpawned: number;
	shakeTime: number;
	synchedActorData: SynchedActorDataEntityWrapper;
	supplies: PlayerInventoryProxy;
	_isSleeping: number;
	velocity: Vec3;
	skin: SerializedSkin;
	stepHeight: number;
	transactionManager: InventoryTransactionManager;
	handContainer: SimpleContainer;
	random: Random;
	oldPosition: Vec3;
	bodyYaw: number;
	isMovedToLimbo: number;
	vtable: object;
	_isJumping: number;
	height: number;
	bodyYawOld: number;
	damageTime: number;
	_isRemoved: number;
	movementSpeed: number;
	currentSwimAmount: number;
	ticksSinceDeath: number;
	_isSurfaceMob: number;
	ticksAlive: number;
	currentDimensionId: number;
	viewAngles: Vec2;
	viewAnglesOld: Vec2;
	eyePos: Vec3;
	actorRendererId: SDKHashedString;
	nameTagHash: bigint;
	fallDistance: number;
	onGround: number;
	slowdownFactor: Vec3;
	dimension: Dimension;
	didEnterWater: number;
	_isOnHotBlock: number;
	vehicle: bigint;
	region: BlockSource;
	level: Level;
	entityTypeId: number;
	aabb: AABB;
	width: number;
	position: Vec3;
	allEffects: SDKVectorContainer;
	entityRuntimeId: bigint;
	isSafeToSleepNear: number;
	armorContainer: SimpleContainer;
	// Methods 
	// Inherited from LocalPlayer
	getPickRange(): bigint; /// LocalPlayer::getPickRange
	// Inherited from Player
	/** _chooseSpawnArea(void): void */
	_chooseSpawnArea(): void; /// ?_chooseSpawnArea@Player@@IEAAXXZ
	/** _chooseSpawnPositionWithinArea(void): bool */
	_chooseSpawnPositionWithinArea(): boolean; /// ?_chooseSpawnPositionWithinArea@Player@@IEAA_NXZ
	/** _createChunkSource(ChunkSource &): class std::shared_ptr<class ChunkViewSource> */
	_createChunkSource(_1: object): unknown; /// ?_createChunkSource@Player@@MEAA?AV?$shared_ptr@VChunkViewSource@@@std@@AEAVChunkSource@@@Z
	/** _crit(Actor &): void */
	_crit(_1: object): void; /// ?_crit@Player@@UEAAXAEAVActor@@@Z
	/** _ensureSafeSpawnPosition(Vec3 &): void */
	_ensureSafeSpawnPosition(_1: object): void; /// ?_ensureSafeSpawnPosition@Player@@AEAAXAEAVVec3@@@Z
	/** _fireDimensionChanged(void): void */
	_fireDimensionChanged(): void; /// ?_fireDimensionChanged@Player@@UEAAXXZ
	/** _fireWillChangeDimension(void): void */
	_fireWillChangeDimension(): void; /// ?_fireWillChangeDimension@Player@@UEAAXXZ
	/** _handleCarriedItemInteractText(void): void */
	_handleCarriedItemInteractText(): void; /// ?_handleCarriedItemInteractText@Player@@AEAAXXZ
	/** _hurt(ActorDamageSource const &,float,bool,bool): bool */
	_hurt(_1: object, _2: number, _3: boolean, _4: boolean): boolean; /// ?_hurt@Player@@MEAA_NAEBVActorDamageSource@@M_N1@Z
	/** _isChunkSourceLoaded(Vec3 const &,BlockSource const &): bool */
	_isChunkSourceLoaded(_1: object, _2: object): boolean; /// ?_isChunkSourceLoaded@Player@@AEBA_NAEBVVec3@@AEBVBlockSource@@@Z
	/** _onSizeUpdated(void): void */
	_onSizeUpdated(): void; /// ?_onSizeUpdated@Player@@EEAAXXZ
	/** _shouldProvideFeedbackOnArmorSet(ArmorSlot,ItemStack const &): bool */
	_shouldProvideFeedbackOnArmorSet(_1: unknown, _2: object): boolean; /// ?_shouldProvideFeedbackOnArmorSet@Player@@MEBA_NW4ArmorSlot@@AEBVItemStack@@@Z
	/** add(ItemStack &): bool */
	add(_1: object): boolean; /// ?add@Player@@UEAA_NAEAVItemStack@@@Z
	/** addAdditionalSaveData(CompoundTag &): void */
	addAdditionalSaveData(_1: object): void; /// ?addAdditionalSaveData@Player@@MEBAXAEAVCompoundTag@@@Z
	/** addExperience(int): void */
	addExperience(_1: number): void; /// ?addExperience@Player@@UEAAXH@Z
	/** addLevels(int): void */
	addLevels(_1: number): void; /// ?addLevels@Player@@UEAAXH@Z
	/** aiStep(IMobMovementProxy &): void */
	aiStep(_1: object): void; /// ?aiStep@Player@@UEBAXAEAUIMobMovementProxy@@@Z
	/** aiStep(void): void */
	aiStep(): void; /// ?aiStep@Player@@UEAAXXZ
	/** attack(Actor &,ActorDamageCause const &): bool */
	attack(_1: object, _2: object): boolean; /// ?attack@Player@@UEAA_NAEAVActor@@AEBW4ActorDamageCause@@@Z
	/** awardKillScore(Actor &,int): void */
	awardKillScore(_1: object, _2: number): void; /// ?awardKillScore@Player@@UEAAXAEAVActor@@H@Z
	/** broadcastPlayerSpawnedMobEvent(ActorType,MobSpawnMethod): void */
	broadcastPlayerSpawnedMobEvent(_1: unknown, _2: unknown): void; /// ?broadcastPlayerSpawnedMobEvent@Player@@QEAAXW4ActorType@@W4MobSpawnMethod@@@Z
	/** canAddPassenger(Actor &): bool */
	canAddPassenger(_1: object): boolean; /// ?canAddPassenger@Player@@UEBA_NAEAVActor@@@Z
	/** canFreeze(void): bool */
	canFreeze(): boolean; /// ?canFreeze@Player@@UEBA_NXZ
	/** canJump(IPlayerMovementProxy &): bool */
	canJump(_1: object): boolean; /// ?canJump@Player@@SA_NAEAUIPlayerMovementProxy@@@Z
	/** canOpenContainerScreen(void): bool */
	canOpenContainerScreen(): boolean; /// ?canOpenContainerScreen@Player@@UEAA_NXZ
	/** canStartSleepInBed(void): bool */
	canStartSleepInBed(): boolean; /// ?canStartSleepInBed@Player@@UEAA_NXZ
	/** canUseAbility(AbilitiesIndex): bool */
	canUseAbility(_1: unknown): boolean; /// ?canUseAbility@Player@@QEBA_NW4AbilitiesIndex@@@Z
	/** causeFoodExhaustion(float): void */
	causeFoodExhaustion(_1: number): void; /// ?causeFoodExhaustion@Player@@QEAAXM@Z
	/** checkBed(BlockSource *,Vec3 const * const): bool */
	checkBed(_1: object, _2: object): boolean; /// ?checkBed@Player@@IEAA_NPEAVBlockSource@@QEBVVec3@@@Z
	/** checkNeedAutoJump(IPlayerMovementProxy *,float,float): bool */
	checkNeedAutoJump(_1: object, _2: number, _3: number): boolean; /// ?checkNeedAutoJump@Player@@SA_NPEAUIPlayerMovementProxy@@MM@Z
	/** checkSpawnBlock(BlockSource const &): bool */
	checkSpawnBlock(_1: object): boolean; /// ?checkSpawnBlock@Player@@IEBA_NAEBVBlockSource@@@Z
	/** completeUsingItem(void): void */
	completeUsingItem(): void; /// ?completeUsingItem@Player@@UEAAXXZ
	/** consumeTotem(void): bool */
	consumeTotem(): boolean; /// ?consumeTotem@Player@@UEAA_NXZ
	/** deleteContainerManager(void): void */
	deleteContainerManager(): void; /// ?deleteContainerManager@Player@@UEAAXXZ
	/** destroyRegion(void): void */
	destroyRegion(): void; /// ?destroyRegion@Player@@UEAAXXZ
	/** die(ActorDamageSource const &): void */
	die(_1: object): void; /// ?die@Player@@UEAAXAEBVActorDamageSource@@@Z
	/** drop(ItemStack const &,bool): bool */
	drop(_1: object, _2: boolean): boolean; /// ?drop@Player@@UEAA_NAEBVItemStack@@_N@Z
	/** dropEquipmentOnDeath(ActorDamageSource const &,int): void */
	dropEquipmentOnDeath(_1: object, _2: number): void; /// ?dropEquipmentOnDeath@Player@@UEAAXAEBVActorDamageSource@@H@Z
	/** dropEquipmentOnDeath(void): void */
	dropEquipmentOnDeath(): void; /// ?dropEquipmentOnDeath@Player@@UEAAXXZ
	/** eat(ItemStack const &): void */
	eat(_1: object): void; /// ?eat@Player@@QEAAXAEBVItemStack@@@Z
	/** eat(int,float): void */
	eat(_1: number, _2: number): void; /// ?eat@Player@@QEAAXHM@Z
	/** feed(int): void */
	feed(_1: number): void; /// ?feed@Player@@UEAAXH@Z
	/** getActorRendererId(void): class HashedString const & __ptr64 */
	getActorRendererId(): unknown; /// ?getActorRendererId@Player@@UEBAAEBVHashedString@@XZ
	/** getAgent(void): class Agent * __ptr64 */
	getAgent(): unknown; /// ?getAgent@Player@@QEBAPEAVAgent@@XZ
	/** getAgentIfAllowed(bool,ActorUniqueID): class Agent * __ptr64 */
	getAgentIfAllowed(_1: boolean, _2: unknown): unknown; /// ?getAgentIfAllowed@Player@@QEBAPEAVAgent@@_NUActorUniqueID@@@Z
	/** getAllEquipment(void): class std::vector<class ItemStack const * __ptr64,class std::allocator<class ItemStack const * __ptr64> > */
	getAllEquipment(): unknown; /// ?getAllEquipment@Player@@UEBA?AV?$vector@PEBVItemStack@@V?$allocator@PEBVItemStack@@@std@@@std@@XZ
	/** getAllHand(void): class std::vector<class ItemStack const * __ptr64,class std::allocator<class ItemStack const * __ptr64> > */
	getAllHand(): unknown; /// ?getAllHand@Player@@UEBA?AV?$vector@PEBVItemStack@@V?$allocator@PEBVItemStack@@@std@@@std@@XZ
	/** getAnimationComponent(void): class AnimationComponent & __ptr64 */
	getAnimationComponent(): unknown; /// ?getAnimationComponent@Player@@UEAAAEAVAnimationComponent@@XZ
	/** getAttachPos(ActorLocation,float): class Vec3 */
	getAttachPos(_1: unknown, _2: number): unknown; /// ?getAttachPos@Player@@UEBA?AVVec3@@W4ActorLocation@@M@Z
	/** getCameraOffset(void): float */
	getCameraOffset(): number; /// ?getCameraOffset@Player@@UEBAMXZ
	/** getCapePos(float): class Vec3 */
	getCapePos(_1: number): unknown; /// ?getCapePos@Player@@QEAA?AVVec3@@M@Z
	/** getCommandPermissionLevel(void): enum CommandPermissionLevel */
	getCommandPermissionLevel(): bigint; /// ?getCommandPermissionLevel@Player@@UEBA?AW4CommandPermissionLevel@@XZ
	/** getEntityTypeId(void): enum ActorType */
	getEntityTypeId(): bigint; /// ?getEntityTypeId@Player@@UEBA?AW4ActorType@@XZ
	/** getEquippedTotem(void): class ItemStack const & __ptr64 */
	getEquippedTotem(): ItemStack; /// ?getEquippedTotem@Player@@UEBAAEBVItemStack@@XZ
	/** getEventing(void): class IMinecraftEventing * __ptr64 */
	getEventing(): unknown; /// ?getEventing@Player@@UEBAPEAVIMinecraftEventing@@XZ
	/** getExpectedSpawnDimensionId(void): class AutomaticID<class Dimension,int> */
	getExpectedSpawnDimensionId(): unknown; /// ?getExpectedSpawnDimensionId@Player@@QEBA?AV?$AutomaticID@VDimension@@H@@XZ
	/** getExpectedSpawnPosition(void): class BlockPos const & __ptr64 */
	getExpectedSpawnPosition(): BlockPos; /// ?getExpectedSpawnPosition@Player@@QEBAAEBVBlockPos@@XZ
	/** getFormattedNameTag(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	getFormattedNameTag(): unknown; /// ?getFormattedNameTag@Player@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** getInterpolatedRidingOffset(float): class Vec3 */
	getInterpolatedRidingOffset(_1: number): unknown; /// ?getInterpolatedRidingOffset@Player@@UEBA?AVVec3@@M@Z
	/** getItemCooldownLeft(HashedString const &): int */
	getItemCooldownLeft(_1: object): number; /// ?getItemCooldownLeft@Player@@UEBAHAEBVHashedString@@@Z
	/** getItemCooldownLeft(unsigned __int64): int */
	getItemCooldownLeft(_1: bigint): number; /// ?getItemCooldownLeft@Player@@UEBAH_K@Z
	/** getItemStackNetManager(void): class ItemStackNetManagerBase const * __ptr64 */
	getItemStackNetManager(): unknown; /// ?getItemStackNetManager@Player@@QEBAPEBVItemStackNetManagerBase@@XZ
	/** getItemUseDuration(void): int */
	getItemUseDuration(): number; /// ?getItemUseDuration@Player@@UEBAHXZ
	/** getItemUseIntervalProgress(void): float */
	getItemUseIntervalProgress(): number; /// ?getItemUseIntervalProgress@Player@@UEBAMXZ
	/** getItemUseStartupProgress(void): float */
	getItemUseStartupProgress(): number; /// ?getItemUseStartupProgress@Player@@UEBAMXZ
	/** getLastDeathDimension(void): class std::optional<class AutomaticID<class Dimension,int> > */
	getLastDeathDimension(): unknown; /// ?getLastDeathDimension@Player@@UEBA?AV?$optional@V?$AutomaticID@VDimension@@H@@@std@@XZ
	/** getLastDeathPos(void): class std::optional<class BlockPos> */
	getLastDeathPos(): unknown; /// ?getLastDeathPos@Player@@UEBA?AV?$optional@VBlockPos@@@std@@XZ
	/** getLuck(void): float */
	getLuck(): number; /// ?getLuck@Player@@QEAAMXZ
	/** getMaxItemCooldownLeft(void): int */
	getMaxItemCooldownLeft(): number; /// ?getMaxItemCooldownLeft@Player@@UEBAHXZ
	/** getMovementSettings(void): struct PlayerMovementSettings const & __ptr64 */
	getMovementSettings(): unknown; /// ?getMovementSettings@Player@@UEBAAEBUPlayerMovementSettings@@XZ
	/** getPlayerSessionId(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64 */
	getPlayerSessionId(): unknown; /// ?getPlayerSessionId@Player@@QEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** getPortalWaitTime(void): int */
	getPortalWaitTime(): number; /// ?getPortalWaitTime@Player@@UEBAHXZ
	/** getPreviousTickSleepTimer(void): int */
	getPreviousTickSleepTimer(): number; /// ?getPreviousTickSleepTimer@Player@@UEBAHXZ
	/** getRespawnAnchorPosition(void): class BlockPos const & __ptr64 */
	getRespawnAnchorPosition(): BlockPos; /// ?getRespawnAnchorPosition@Player@@QEBAAEBVBlockPos@@XZ
	/** getSelectedItem(void): class ItemStack const & __ptr64 */
	getSelectedItem(): ItemStack; /// ?getSelectedItem@Player@@QEBAAEBVItemStack@@XZ
	/** getSelectedItemSlot(void): int */
	getSelectedItemSlot(): number; /// ?getSelectedItemSlot@Player@@QEBAHXZ
	/** getShadowRadius(void): float */
	getShadowRadius(): number; /// ?getShadowRadius@Player@@UEBAMXZ
	/** getSleepTimer(void): int */
	getSleepTimer(): number; /// ?getSleepTimer@Player@@UEBAHXZ
	/** getSpawnPosition(void): class BlockPos const & __ptr64 */
	getSpawnPosition(): BlockPos; /// ?getSpawnPosition@Player@@QEBAAEBVBlockPos@@XZ
	/** getSpeed(void): float */
	getSpeed(): number; /// ?getSpeed@Player@@UEBAMXZ
	/** getSupplies(void): class PlayerInventory const & __ptr64 */
	getSupplies(): unknown; /// ?getSupplies@Player@@QEBAAEBVPlayerInventory@@XZ
	/** getTickingOffsets(void): class std::vector<class ChunkPos,class std::allocator<class ChunkPos> > const & __ptr64 */
	getTickingOffsets(): unknown; /// ?getTickingOffsets@Player@@UEBAAEBV?$vector@VChunkPos@@V?$allocator@VChunkPos@@@std@@@std@@XZ
	/** getTrackedBosses(void): class std::vector<struct ActorUniqueID,class std::allocator<struct ActorUniqueID> > const & __ptr64 */
	getTrackedBosses(): unknown; /// ?getTrackedBosses@Player@@QEAAAEBV?$vector@UActorUniqueID@@V?$allocator@UActorUniqueID@@@std@@@std@@XZ
	/** getTravelledMethod(void): enum TravelMethod */
	getTravelledMethod(): bigint; /// ?getTravelledMethod@Player@@UEBA?AW4TravelMethod@@XZ
	/** getXpNeededForNextLevel(void): int */
	getXpNeededForNextLevel(): number; /// ?getXpNeededForNextLevel@Player@@QEBAHXZ
	/** getXuid(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	getXuid(): unknown; /// ?getXuid@Player@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** handleEntityEvent(ActorEvent,int): void */
	handleEntityEvent(_1: unknown, _2: number): void; /// ?handleEntityEvent@Player@@UEAAXW4ActorEvent@@H@Z
	/** hasBedPosition(void): bool */
	hasBedPosition(): boolean; /// ?hasBedPosition@Player@@QEBA_NXZ
	/** hasDiedBefore(void): bool */
	hasDiedBefore(): boolean; /// ?hasDiedBefore@Player@@UEBA_NXZ
	/** hasResource(int): bool */
	hasResource(_1: number): boolean; /// ?hasResource@Player@@UEAA_NH@Z
	/** hasRespawnPosition(void): bool */
	hasRespawnPosition(): boolean; /// ?hasRespawnPosition@Player@@QEBA_NXZ
	/** initBodyControl(void): class std::unique_ptr<class BodyControl,struct std::default_delete<class BodyControl> > */
	initBodyControl(): unknown; /// ?initBodyControl@Player@@EEAA?AV?$unique_ptr@VBodyControl@@U?$default_delete@VBodyControl@@@std@@@std@@XZ
	/** initHUDContainerManager(void): void */
	initHUDContainerManager(): void; /// ?initHUDContainerManager@Player@@UEAAXXZ
	/** initializeComponents(Actor::InitializationMethod,VariantParameterList const &): void */
	initializeComponents(_1: unknown, _2: object): void; /// ?initializeComponents@Player@@UEAAXW4InitializationMethod@Actor@@AEBVVariantParameterList@@@Z
	/** interact(Actor &,Vec3 const &): bool */
	interact(_1: object, _2: object): boolean; /// ?interact@Player@@QEAA_NAEAVActor@@AEBVVec3@@@Z
	/** inventoryChanged(Container &,int,ItemStack const &,ItemStack const &,bool): void */
	inventoryChanged(_1: object, _2: number, _3: object, _4: object, _5: boolean): void; /// ?inventoryChanged@Player@@UEAAXAEAVContainer@@HAEBVItemStack@@1_N@Z
	/** isAdventure(void): bool */
	isAdventure(): boolean; /// ?isAdventure@Player@@UEBA_NXZ
	/** isBlocking(void): bool */
	isBlocking(): boolean; /// ?isBlocking@Player@@UEBA_NXZ
	/** isDamageBlocked(ActorDamageSource const &): bool */
	isDamageBlocked(_1: object): boolean; /// ?isDamageBlocked@Player@@UEBA_NAEBVActorDamageSource@@@Z
	/** isDangerousVolume(BlockSource &,AABB const &,bool): bool */
	isDangerousVolume(_1: object, _2: object, _3: boolean): boolean; /// ?isDangerousVolume@Player@@SA_NAEAVBlockSource@@AEBVAABB@@_N@Z
	/** isFireImmune(void): bool */
	isFireImmune(): boolean; /// ?isFireImmune@Player@@UEBA_NXZ
	/** isForcedRespawn(void): bool */
	isForcedRespawn(): boolean; /// ?isForcedRespawn@Player@@QEBA_NXZ
	/** isHiddenFrom(Mob &): bool */
	isHiddenFrom(_1: object): boolean; /// ?isHiddenFrom@Player@@QEBA_NAEAVMob@@@Z
	/** isImmobile(void): bool */
	isImmobile(): boolean; /// ?isImmobile@Player@@UEBA_NXZ
	/** isInCreativeMode(void): bool */
	isInCreativeMode(): boolean; /// ?isInCreativeMode@Player@@QEBA_NXZ
	/** isInvulnerableTo(ActorDamageSource const &): bool */
	isInvulnerableTo(_1: object): boolean; /// ?isInvulnerableTo@Player@@UEBA_NAEBVActorDamageSource@@@Z
	/** isItemOnCooldown(HashedString const &): bool */
	isItemOnCooldown(_1: object): boolean; /// ?isItemOnCooldown@Player@@UEBA_NAEBVHashedString@@@Z
	/** isJumping(void): bool */
	isJumping(): boolean; /// ?isJumping@Player@@UEBA_NXZ
	/** isSilentObserver(void): bool */
	isSilentObserver(): boolean; /// ?isSilentObserver@Player@@UEBA_NXZ
	/** isSleeping(void): bool */
	isSleeping(): boolean; /// ?isSleeping@Player@@UEBA_NXZ
	/** isSpectator(void): bool */
	isSpectator(): boolean; /// ?isSpectator@Player@@UEBA_NXZ
	/** isSurvival(void): bool */
	isSurvival(): boolean; /// ?isSurvival@Player@@UEBA_NXZ
	/** isUsingItem(void): bool */
	isUsingItem(): boolean; /// ?isUsingItem@Player@@QEBA_NXZ
	/** isWorldBuilder(void): bool */
	isWorldBuilder(): boolean; /// ?isWorldBuilder@Player@@UEBA_NXZ
	/** jumpFromGround(void): void */
	jumpFromGround(): void; /// ?jumpFromGround@Player@@UEAAXXZ
	/** move(IActorMovementProxy &,Vec3 const &): void */
	move(_1: object, _2: object): void; /// ?move@Player@@UEBAXAEAUIActorMovementProxy@@AEBVVec3@@@Z
	/** move(Vec3 const &): void */
	move(_1: object): void; /// ?move@Player@@UEAAXAEBVVec3@@@Z
	/** moveView(void): void */
	moveView(): void; /// ?moveView@Player@@UEAAXXZ
	/** normalTick(void): void */
	normalTick(): void; /// ?normalTick@Player@@UEAAXXZ
	/** onBounceStarted(BlockPos const &,Block const &): void */
	onBounceStarted(_1: object, _2: object): void; /// ?onBounceStarted@Player@@MEAAXAEBVBlockPos@@AEBVBlock@@@Z
	/** onMovePlayerPacketNormal(Vec3 const &,Vec2 const &,float): void */
	onMovePlayerPacketNormal(_1: object, _2: object, _3: number): void; /// ?onMovePlayerPacketNormal@Player@@MEAAXAEBVVec3@@AEBVVec2@@M@Z
	/** passengerCheckMovementStats(void): void */
	passengerCheckMovementStats(): void; /// ?passengerCheckMovementStats@Player@@QEAAXXZ
	/** passengerTick(void): void */
	passengerTick(): void; /// ?passengerTick@Player@@UEAAXXZ
	/** prepareRegion(ChunkSource &): void */
	prepareRegion(_1: object): void; /// ?prepareRegion@Player@@UEAAXAEAVChunkSource@@@Z
	/** readAdditionalSaveData(CompoundTag const &,DataLoadHelper &): void */
	readAdditionalSaveData(_1: object, _2: object): void; /// ?readAdditionalSaveData@Player@@MEAAXAEBVCompoundTag@@AEAVDataLoadHelper@@@Z
	/** recheckSpawnPosition(void): void */
	recheckSpawnPosition(): void; /// ?recheckSpawnPosition@Player@@QEAAXXZ
	/** reloadHardcoded(Actor::InitializationMethod,VariantParameterList const &): void */
	reloadHardcoded(_1: unknown, _2: object): void; /// ?reloadHardcoded@Player@@UEAAXW4InitializationMethod@Actor@@AEBVVariantParameterList@@@Z
	/** remove(void): void */
	remove(): void; /// ?remove@Player@@UEAAXXZ
	/** resendAllChunks(void): void */
	resendAllChunks(): void; /// ?resendAllChunks@Player@@UEAAXXZ
	/** resetPlayerLevel(void): void */
	resetPlayerLevel(): void; /// ?resetPlayerLevel@Player@@QEAAXXZ
	/** resetUserPos(bool): void */
	resetUserPos(_1: boolean): void; /// ?resetUserPos@Player@@UEAAX_N@Z
	/** respawn(void): void */
	respawn(): void; /// ?respawn@Player@@UEAAXXZ
	/** sendEventPacket(EventPacket &): void */
	sendEventPacket(_1: object): void; /// ?sendEventPacket@Player@@UEBAXAEAVEventPacket@@@Z
	/** setAgent(Agent *): void */
	setAgent(_1: object): void; /// ?setAgent@Player@@QEAAXPEAVAgent@@@Z
	/** setArmor(ArmorSlot,ItemStack const &): void */
	setArmor(_1: unknown, _2: object): void; /// ?setArmor@Player@@UEAAXW4ArmorSlot@@AEBVItemStack@@@Z
	/** setBedRespawnPosition(BlockPos const &): void */
	setBedRespawnPosition(_1: object): void; /// ?setBedRespawnPosition@Player@@QEAAXAEBVBlockPos@@@Z
	/** setBlockMovementSlowdownMultiplier(BlockLegacy const &,Vec3 const &): void */
	setBlockMovementSlowdownMultiplier(_1: object, _2: object): void; /// ?setBlockMovementSlowdownMultiplier@Player@@UEAAXAEBVBlockLegacy@@AEBVVec3@@@Z
	/** setCarriedItem(ItemStack const &): void */
	setCarriedItem(_1: object): void; /// ?setCarriedItem@Player@@UEAAXAEBVItemStack@@@Z
	/** setCursorSelectedItemGroup(ItemGroup const &): void */
	setCursorSelectedItemGroup(_1: object): void; /// ?setCursorSelectedItemGroup@Player@@QEAAXAEBVItemGroup@@@Z
	/** setFieldOfViewModifier(float): void */
	setFieldOfViewModifier(_1: number): void; /// ?setFieldOfViewModifier@Player@@UEAAXM@Z
	/** setHasDied(bool): void */
	setHasDied(_1: boolean): void; /// ?setHasDied@Player@@QEAAX_N@Z
	/** setOffhandSlot(ItemStack const &): void */
	setOffhandSlot(_1: object): void; /// ?setOffhandSlot@Player@@UEAAXAEBVItemStack@@@Z
	/** setPlayerGameType(GameType): void */
	setPlayerGameType(_1: unknown): void; /// ?setPlayerGameType@Player@@UEAAXW4GameType@@@Z
	/** setRespawnPositionCandidate(void): void */
	setRespawnPositionCandidate(): void; /// ?setRespawnPositionCandidate@Player@@QEAAXXZ
	/** setSize(float,float): void */
	setSize(_1: number, _2: number): void; /// ?setSize@Player@@UEAAXMM@Z
	/** setSleeping(bool): void */
	setSleeping(_1: boolean): void; /// ?setSleeping@Player@@UEAAX_N@Z
	/** setSpeed(float): void */
	setSpeed(_1: number): void; /// ?setSpeed@Player@@UEAAXM@Z
	/** setUsedPotion(bool): void */
	setUsedPotion(_1: boolean): void; /// ?setUsedPotion@Player@@QEAAX_N@Z
	/** shouldDropDeathLoot(void): bool */
	shouldDropDeathLoot(): boolean; /// ?shouldDropDeathLoot@Player@@UEBA_NXZ
	/** startCooldown(Item const *,bool): void */
	startCooldown(_1: object, _2: boolean): void; /// ?startCooldown@Player@@UEAAXPEBVItem@@_N@Z
	/** startDestroying(void): void */
	startDestroying(): void; /// ?startDestroying@Player@@UEAAXXZ
	/** startSleepInBed(BlockPos const &): enum BedSleepingResult */
	startSleepInBed(_1: object): bigint; /// ?startSleepInBed@Player@@UEAA?AW4BedSleepingResult@@AEBVBlockPos@@@Z
	/** startSpinAttack(void): void */
	startSpinAttack(): void; /// ?startSpinAttack@Player@@UEAAXXZ
	/** startSwimming(void): void */
	startSwimming(): void; /// ?startSwimming@Player@@UEAAXXZ
	/** startUsingItem(ItemStack const &,int): void */
	startUsingItem(_1: object, _2: number): void; /// ?startUsingItem@Player@@QEAAXAEBVItemStack@@H@Z
	/** stopDestroying(void): void */
	stopDestroying(): void; /// ?stopDestroying@Player@@UEAAXXZ
	/** stopSleepInBed(bool,bool): void */
	stopSleepInBed(_1: boolean, _2: boolean): void; /// ?stopSleepInBed@Player@@UEAAX_N0@Z
	/** stopSpinAttack(void): void */
	stopSpinAttack(): void; /// ?stopSpinAttack@Player@@UEAAXXZ
	/** stopSwimming(void): void */
	stopSwimming(): void; /// ?stopSwimming@Player@@UEAAXXZ
	/** stopUsingItem(void): void */
	stopUsingItem(): void; /// ?stopUsingItem@Player@@QEAAXXZ
	/** suspendRegion(void): void */
	suspendRegion(): void; /// ?suspendRegion@Player@@UEAAXXZ
	/** take(Actor &,int,int): bool */
	take(_1: object, _2: number, _3: number): boolean; /// ?take@Player@@QEAA_NAEAVActor@@HH@Z
	/** teleportTo(Vec3 const &,bool,int,int,bool): void */
	teleportTo(_1: object, _2: boolean, _3: number, _4: number, _5: boolean): void; /// ?teleportTo@Player@@UEAAXAEBVVec3@@_NHH1@Z
	/** tickWorld(Tick const &): void */
	tickWorld(_1: object): void; /// ?tickWorld@Player@@UEAAXAEBUTick@@@Z
	/** travel(IMobMovementProxy &,float,float,float): void */
	travel(_1: object, _2: number, _3: number, _4: number): void; /// ?travel@Player@@UEBAXAEAUIMobMovementProxy@@MMM@Z
	/** travel(float,float,float): void */
	travel(_1: number, _2: number, _3: number): void; /// ?travel@Player@@UEAAXMMM@Z
	/** tryCreateAddActorPacket(void): class std::unique_ptr<class AddActorBasePacket,struct std::default_delete<class AddActorBasePacket> > */
	tryCreateAddActorPacket(): unknown; /// ?tryCreateAddActorPacket@Player@@UEAA?AV?$unique_ptr@VAddActorBasePacket@@U?$default_delete@VAddActorBasePacket@@@std@@@std@@XZ
	/** tryGetFromEntity(EntityContext &,bool): class Player * __ptr64 */
	tryGetFromEntity(_1: object, _2: boolean): Player; /// ?tryGetFromEntity@Player@@SAPEAV1@AEAVEntityContext@@_N@Z
	/** unRegisterTrackedBoss(ActorUniqueID): void */
	unRegisterTrackedBoss(_1: unknown): void; /// ?unRegisterTrackedBoss@Player@@UEAAXUActorUniqueID@@@Z
	/** updateGliding(void): void */
	updateGliding(): void; /// ?updateGliding@Player@@MEAAXXZ
	/** updateInventoryTransactions(void): void */
	updateInventoryTransactions(): void; /// ?updateInventoryTransactions@Player@@QEAAXXZ
	/** updateSkin(SerializedSkin const &,int): void */
	updateSkin(_1: object, _2: number): void; /// ?updateSkin@Player@@QEAAXAEBVSerializedSkin@@H@Z
	/** updateSpawnChunkView(void): void */
	updateSpawnChunkView(): void; /// ?updateSpawnChunkView@Player@@QEAAXXZ
	/** useItem(ItemStackBase &,ItemUseMethod,bool): void */
	useItem(_1: object, _2: unknown, _3: boolean): void; /// ?useItem@Player@@UEAAXAEAVItemStackBase@@W4ItemUseMethod@@_N@Z
	// Inherited from Mob
	/** _aiStep(IMobMovementProxy &): void */
	_aiStep(_1: object): void; /// ?_aiStep@Mob@@SAXAEAUIMobMovementProxy@@@Z
	/** _doInitialMove(void): void */
	_doInitialMove(): void; /// ?_doInitialMove@Mob@@MEAAXXZ
	/** _doSprintParticleEffect(void): void */
	_doSprintParticleEffect(): void; /// ?_doSprintParticleEffect@Mob@@IEAAXXZ
	/** _getAdjustedAABBForSpawnCheck(AABB const &,Vec3 const &): class AABB */
	_getAdjustedAABBForSpawnCheck(_1: object, _2: object): AABB; /// ?_getAdjustedAABBForSpawnCheck@Mob@@MEBA?AVAABB@@AEBV2@AEBVVec3@@@Z
	/** _initHardCodedComponents(void): bool */
	_initHardCodedComponents(): boolean; /// ?_initHardCodedComponents@Mob@@AEAA_NXZ
	/** _initialize(EntityContext &): void */
	_initialize(_1: object): void; /// ?_initialize@Mob@@AEAAXAEAVEntityContext@@@Z
	/** _playStepSound(BlockPos const &,Block const &): void */
	_playStepSound(_1: object, _2: object): void; /// ?_playStepSound@Mob@@MEAAXAEBVBlockPos@@AEBVBlock@@@Z
	/** _removePassenger(ActorUniqueID const &,bool,bool,bool): void */
	_removePassenger(_1: object, _2: boolean, _3: boolean, _4: boolean): void; /// ?_removePassenger@Mob@@MEAAXAEBUActorUniqueID@@_N11@Z
	/** _tryApplyingLevitation(IMobMovementProxy const &,Vec3 &): bool */
	_tryApplyingLevitation(_1: object, _2: object): boolean; /// ?_tryApplyingLevitation@Mob@@CA_NAEBUIMobMovementProxy@@AEAVVec3@@@Z
	/** _updateMobTravel(IMobMovementProxy &): void */
	_updateMobTravel(_1: object): void; /// ?_updateMobTravel@Mob@@SAXAEAUIMobMovementProxy@@@Z
	/** _updateSprintingState(void): void */
	_updateSprintingState(): void; /// ?_updateSprintingState@Mob@@AEAAXXZ
	/** addPassenger(Actor &): void */
	addPassenger(_1: object): void; /// ?addPassenger@Mob@@UEAAXAEAVActor@@@Z
	/** animateHurt(void): void */
	animateHurt(): void; /// ?animateHurt@Mob@@UEAAXXZ
	/** applyFinalFriction(float,bool): void */
	applyFinalFriction(_1: number, _2: boolean): void; /// ?applyFinalFriction@Mob@@UEAAXM_N@Z
	/** ascendBlockByJumping(void): void */
	ascendBlockByJumping(): void; /// ?ascendBlockByJumping@Mob@@UEAAXXZ
	/** ascendLadder(void): void */
	ascendLadder(): void; /// ?ascendLadder@Mob@@UEAAXXZ
	/** attackAnimation(Actor *,float): void */
	attackAnimation(_1: object, _2: number): void; /// ?attackAnimation@Mob@@UEAAXPEAVActor@@M@Z
	/** baseTick(void): void */
	baseTick(): void; /// ?baseTick@Mob@@UEAAXXZ
	/** blockedByShield(ActorDamageSource const &,Actor &): void */
	blockedByShield(_1: object, _2: object): void; /// ?blockedByShield@Mob@@UEAAXAEBVActorDamageSource@@AEAVActor@@@Z
	/** calcMoveRelativeSpeed(TravelType): float */
	calcMoveRelativeSpeed(_1: unknown): number; /// ?calcMoveRelativeSpeed@Mob@@QEAAMW4TravelType@@@Z
	/** calculateJumpImpulse(IMobMovementProxy const &): float */
	calculateJumpImpulse(_1: object): number; /// ?calculateJumpImpulse@Mob@@SAMAEBUIMobMovementProxy@@@Z
	/** canExistWhenDisallowMob(void): bool */
	canExistWhenDisallowMob(): boolean; /// ?canExistWhenDisallowMob@Mob@@UEBA_NXZ
	/** canPowerJump(void): bool */
	canPowerJump(): boolean; /// ?canPowerJump@Mob@@UEBA_NXZ
	/** causeFallDamage(float,float,ActorDamageSource): void */
	causeFallDamage(_1: number, _2: number, _3: unknown): void; /// ?causeFallDamage@Mob@@MEAAXMMVActorDamageSource@@@Z
	/** checkSpawnObstruction(void): bool */
	checkSpawnObstruction(): boolean; /// ?checkSpawnObstruction@Mob@@UEBA_NXZ
	/** checkSpawnRules(bool): bool */
	checkSpawnRules(_1: boolean): boolean; /// ?checkSpawnRules@Mob@@UEAA_N_N@Z
	/** checkTotemDeathProtection(ActorDamageSource const &): bool */
	checkTotemDeathProtection(_1: object): boolean; /// ?checkTotemDeathProtection@Mob@@QEAA_NAEBVActorDamageSource@@@Z
	/** clearEquipment(void): int */
	clearEquipment(): number; /// ?clearEquipment@Mob@@UEAAHXZ
	/** clearVanishEnchantedItemsOnDeath(void): void */
	clearVanishEnchantedItemsOnDeath(): void; /// ?clearVanishEnchantedItemsOnDeath@Mob@@UEAAXXZ
	/** containerChanged(int): void */
	containerChanged(_1: number): void; /// ?containerChanged@Mob@@UEAAXH@Z
	/** createAIGoals(void): bool */
	createAIGoals(): boolean; /// ?createAIGoals@Mob@@UEAA_NXZ
	/** descendBlockByCrouching(void): void */
	descendBlockByCrouching(): void; /// ?descendBlockByCrouching@Mob@@UEAAXXZ
	/** doFireHurt(int): bool */
	doFireHurt(_1: number): boolean; /// ?doFireHurt@Mob@@UEAA_NH@Z
	/** doHurtTarget(Actor *,ActorDamageCause const &): bool */
	doHurtTarget(_1: object, _2: object): boolean; /// ?doHurtTarget@Mob@@UEAA_NPEAVActor@@AEBW4ActorDamageCause@@@Z
	/** dropBags(void): void */
	dropBags(): void; /// ?dropBags@Mob@@MEAAXXZ
	/** dropContainer(void): void */
	dropContainer(): void; /// ?dropContainer@Mob@@UEAAXXZ
	/** emitJumpPreventedEvent(BlockPos const &): void */
	emitJumpPreventedEvent(_1: object): void; /// ?emitJumpPreventedEvent@Mob@@QEAAXAEBVBlockPos@@@Z
	/** getAllArmorID(void): class std::vector<int,class std::allocator<int> > */
	getAllArmorID(): unknown; /// ?getAllArmorID@Mob@@UEBA?AV?$vector@HV?$allocator@H@std@@@std@@XZ
	/** getArmorColorInSlot(ArmorSlot,int): float */
	getArmorColorInSlot(_1: unknown, _2: number): number; /// ?getArmorColorInSlot@Mob@@UEBAMW4ArmorSlot@@H@Z
	/** getArmorCoverPercentage(void): float */
	getArmorCoverPercentage(): number; /// ?getArmorCoverPercentage@Mob@@UEBAMXZ
	/** getArmorMaterialTextureTypeInSlot(ArmorSlot): enum ArmorTextureType */
	getArmorMaterialTextureTypeInSlot(_1: unknown): bigint; /// ?getArmorMaterialTextureTypeInSlot@Mob@@UEBA?AW4ArmorTextureType@@W4ArmorSlot@@@Z
	/** getArmorMaterialTypeInSlot(ArmorSlot): enum ArmorMaterialType */
	getArmorMaterialTypeInSlot(_1: unknown): bigint; /// ?getArmorMaterialTypeInSlot@Mob@@UEBA?AW4ArmorMaterialType@@W4ArmorSlot@@@Z
	/** getArmorTypeHash(void): int */
	getArmorTypeHash(): number; /// ?getArmorTypeHash@Mob@@UEAAHXZ
	/** getArmorValue(void): int */
	getArmorValue(): number; /// ?getArmorValue@Mob@@UEBAHXZ
	/** getAttackAnim(float): float */
	getAttackAnim(_1: number): number; /// ?getAttackAnim@Mob@@UEAAMM@Z
	/** getBlockDamageCause(Block const &): enum ActorDamageCause */
	getBlockDamageCause(_1: object): bigint; /// ?getBlockDamageCause@Mob@@UEBA?AW4ActorDamageCause@@AEBVBlock@@@Z
	/** getCaravanHead(void): struct ActorUniqueID */
	getCaravanHead(): unknown; /// ?getCaravanHead@Mob@@UEBA?AUActorUniqueID@@XZ
	/** getCaravanSize(void): int */
	getCaravanSize(): number; /// ?getCaravanSize@Mob@@QEBAHXZ
	/** getCurrentSwingDuration(void): int */
	getCurrentSwingDuration(): number; /// ?getCurrentSwingDuration@Mob@@IEAAHXZ
	/** getDamageAfterArmorReduction(ActorDamageSource const &,float): float */
	getDamageAfterArmorReduction(_1: object, _2: number): number; /// ?getDamageAfterArmorReduction@Mob@@UEBAMAEBVActorDamageSource@@M@Z
	/** getDamageAfterEnchantReduction(ActorDamageSource const &,float): float */
	getDamageAfterEnchantReduction(_1: object, _2: number): number; /// ?getDamageAfterEnchantReduction@Mob@@UEBAMAEBVActorDamageSource@@M@Z
	/** getDamageAfterResistanceEffect(ActorDamageSource const &,float): float */
	getDamageAfterResistanceEffect(_1: object, _2: number): number; /// ?getDamageAfterResistanceEffect@Mob@@UEBAMAEBVActorDamageSource@@M@Z
	/** getDeathSound(void): enum LevelSoundEvent */
	getDeathSound(): bigint; /// ?getDeathSound@Mob@@UEAA?AW4LevelSoundEvent@@XZ
	/** getDeathTime(void): int */
	getDeathTime(): number; /// ?getDeathTime@Mob@@UEBAHXZ
	/** getHurtSound(void): enum LevelSoundEvent */
	getHurtSound(): bigint; /// ?getHurtSound@Mob@@UEAA?AW4LevelSoundEvent@@XZ
	/** getInterpolatedBodyRot(float): float */
	getInterpolatedBodyRot(_1: number): number; /// ?getInterpolatedBodyRot@Mob@@UEBAMM@Z
	/** getInterpolatedBodyYaw(float): float */
	getInterpolatedBodyYaw(_1: number): number; /// ?getInterpolatedBodyYaw@Mob@@UEBAMM@Z
	/** getInterpolatedHeadRot(float): float */
	getInterpolatedHeadRot(_1: number): number; /// ?getInterpolatedHeadRot@Mob@@UEBAMM@Z
	/** getItemInHandIcon(ItemStack const &,int): struct TextureUVCoordinateSet const * __ptr64 */
	getItemInHandIcon(_1: object, _2: number): unknown; /// ?getItemInHandIcon@Mob@@UEAAPEBUTextureUVCoordinateSet@@AEBVItemStack@@H@Z
	/** getItemUseIntervalAxis(void): int */
	getItemUseIntervalAxis(): number; /// ?getItemUseIntervalAxis@Mob@@UEBAHXZ
	/** getJumpEffectAmplifierValue(IMobMovementProxy const &): float */
	getJumpEffectAmplifierValue(_1: object): number; /// ?getJumpEffectAmplifierValue@Mob@@SAMAEBUIMobMovementProxy@@@Z
	/** getJumpPrevention(IMobMovementProxy const &): struct JumpPreventionResult */
	getJumpPrevention(_1: object): unknown; /// ?getJumpPrevention@Mob@@SA?AUJumpPreventionResult@@AEBUIMobMovementProxy@@@Z
	/** getJumpPrevention(void): struct JumpPreventionResult */
	getJumpPrevention(): unknown; /// ?getJumpPrevention@Mob@@QEAA?AUJumpPreventionResult@@XZ
	/** getMaxHeadXRot(void): float */
	getMaxHeadXRot(): number; /// ?getMaxHeadXRot@Mob@@UEAAMXZ
	/** getMeleeKnockbackBonus(void): int */
	getMeleeKnockbackBonus(): number; /// ?getMeleeKnockbackBonus@Mob@@UEAAHXZ
	/** getMeleeWeaponDamageBonus(Mob *): float */
	getMeleeWeaponDamageBonus(_1: object): number; /// ?getMeleeWeaponDamageBonus@Mob@@UEAAMPEAV1@@Z
	/** getMovementComponentCurrentSpeed(void): float */
	getMovementComponentCurrentSpeed(): number; /// ?getMovementComponentCurrentSpeed@Mob@@QEBAMXZ
	/** getTimeAlongSwing(void): int */
	getTimeAlongSwing(): number; /// ?getTimeAlongSwing@Mob@@UEBAHXZ
	/** getToughnessValue(void): int */
	getToughnessValue(): number; /// ?getToughnessValue@Mob@@UEBAHXZ
	/** getTravelType(IMobMovementProxy &): enum TravelType */
	getTravelType(_1: object): bigint; /// ?getTravelType@Mob@@SA?AW4TravelType@@AEAUIMobMovementProxy@@@Z
	/** getTravelType(void): enum TravelType */
	getTravelType(): bigint; /// ?getTravelType@Mob@@QEAA?AW4TravelType@@XZ
	/** getYHeadRot(void): float */
	getYHeadRot(): number; /// ?getYHeadRot@Mob@@UEBAMXZ
	/** getYawSpeedInDegreesPerSecond(void): float */
	getYawSpeedInDegreesPerSecond(): number; /// ?getYawSpeedInDegreesPerSecond@Mob@@UEBAMXZ
	/** hasCaravanTail(void): bool */
	hasCaravanTail(): boolean; /// ?hasCaravanTail@Mob@@UEBA_NXZ
	/** hasComponent(HashedString const &): bool */
	hasComponent(_1: object): boolean; /// ?hasComponent@Mob@@UEBA_NAEBVHashedString@@@Z
	/** hurtEffects(ActorDamageSource const &,float,bool,bool): void */
	hurtEffects(_1: object, _2: number, _3: boolean, _4: boolean): void; /// ?hurtEffects@Mob@@UEAAXAEBVActorDamageSource@@M_N1@Z
	/** inCaravan(void): bool */
	inCaravan(): boolean; /// ?inCaravan@Mob@@UEBA_NXZ
	/** isAbleToMove(void): bool */
	isAbleToMove(): boolean; /// ?isAbleToMove@Mob@@QEBA_NXZ
	/** isAlive(void): bool */
	isAlive(): boolean; /// ?isAlive@Mob@@UEBA_NXZ
	/** isFrostWalking(void): bool */
	isFrostWalking(): boolean; /// ?isFrostWalking@Mob@@QEBA_NXZ
	/** isGliding(void): bool */
	isGliding(): boolean; /// ?isGliding@Mob@@QEBA_NXZ
	/** isImmobile(IActorMovementProxy const &): bool */
	isImmobile(_1: object): boolean; /// ?isImmobile@Mob@@SA_NAEBUIActorMovementProxy@@@Z
	/** isLookingAtAnEntity(void): bool */
	isLookingAtAnEntity(): boolean; /// ?isLookingAtAnEntity@Mob@@UEAA_NXZ
	/** isPickable(void): bool */
	isPickable(): boolean; /// ?isPickable@Mob@@UEAA_NXZ
	/** isSprinting(void): bool */
	isSprinting(): boolean; /// ?isSprinting@Mob@@QEBA_NXZ
	/** isSurfaceMob(void): bool */
	isSurfaceMob(): boolean; /// ?isSurfaceMob@Mob@@UEBA_NXZ
	/** isTransitioningSitting(void): bool */
	isTransitioningSitting(): boolean; /// ?isTransitioningSitting@Mob@@QEBA_NXZ
	/** joinCaravan(Mob *): void */
	joinCaravan(_1: object): void; /// ?joinCaravan@Mob@@UEAAXPEAV1@@Z
	/** kill(void): void */
	kill(): void; /// ?kill@Mob@@UEAAXXZ
	/** knockback(Actor *,int,float,float,float,float,float): void */
	knockback(_1: object, _2: number, _3: number, _4: number, _5: number, _6: number, _7: number): void; /// ?knockback@Mob@@UEAAXPEAVActor@@HMMMMM@Z
	/** leaveCaravan(void): void */
	leaveCaravan(): void; /// ?leaveCaravan@Mob@@UEAAXXZ
	/** lookAt(Actor *,float,float): void */
	lookAt(_1: object, _2: number, _3: number): void; /// ?lookAt@Mob@@UEAAXPEAVActor@@MM@Z
	/** newServerAiStep(void): void */
	newServerAiStep(): void; /// ?newServerAiStep@Mob@@MEAAXXZ
	/** outOfWorld(void): void */
	outOfWorld(): void; /// ?outOfWorld@Mob@@MEAAXXZ
	/** pushActors(void): void */
	pushActors(): void; /// ?pushActors@Mob@@UEAAXXZ
	/** reloadHardcodedClient(Actor::InitializationMethod,VariantParameterList const &): void */
	reloadHardcodedClient(_1: unknown, _2: object): void; /// ?reloadHardcodedClient@Mob@@UEAAXW4InitializationMethod@Actor@@AEBVVariantParameterList@@@Z
	/** resetAttributes(void): void */
	resetAttributes(): void; /// ?resetAttributes@Mob@@QEAAXXZ
	/** resetInterpolated(void): void */
	resetInterpolated(): void; /// ?resetInterpolated@Mob@@UEAAXXZ
	/** sendInventory(bool): void */
	sendInventory(_1: boolean): void; /// ?sendInventory@Mob@@UEAAX_N@Z
	/** setDamagedArmor(ArmorSlot,ItemStack const &): void */
	setDamagedArmor(_1: unknown, _2: object): void; /// ?setDamagedArmor@Mob@@UEAAXW4ArmorSlot@@AEBVItemStack@@@Z
	/** setEatCounter(int): void */
	setEatCounter(_1: number): void; /// ?setEatCounter@Mob@@QEAAXH@Z
	/** setEquippedSlot(EquipmentSlot,ItemStack const &): void */
	setEquippedSlot(_1: unknown, _2: object): void; /// ?setEquippedSlot@Mob@@UEAAXW4EquipmentSlot@@AEBVItemStack@@@Z
	/** setIsLayingEgg(bool): void */
	setIsLayingEgg(_1: boolean): void; /// ?setIsLayingEgg@Mob@@QEAAX_N@Z
	/** setItemSlot(EquipmentSlot,ItemStack const &): bool */
	setItemSlot(_1: unknown, _2: object): boolean; /// ?setItemSlot@Mob@@UEAA_NW4EquipmentSlot@@AEBVItemStack@@@Z
	/** setMovementComponentCurrentSpeed(float): void */
	setMovementComponentCurrentSpeed(_1: number): void; /// ?setMovementComponentCurrentSpeed@Mob@@QEAAXM@Z
	/** setSpeedModifier(float): void */
	setSpeedModifier(_1: number): void; /// ?setSpeedModifier@Mob@@QEAAXM@Z
	/** setSprinting(bool): void */
	setSprinting(_1: boolean): void; /// ?setSprinting@Mob@@UEAAX_N@Z
	/** setTarget(Actor *): void */
	setTarget(_1: object): void; /// ?setTarget@Mob@@UEAAXPEAVActor@@@Z
	/** setTransitioningSitting(bool): void */
	setTransitioningSitting(_1: boolean): void; /// ?setTransitioningSitting@Mob@@UEAAX_N@Z
	/** setYHeadRot(float): void */
	setYHeadRot(_1: number): void; /// ?setYHeadRot@Mob@@UEAAXM@Z
	/** setYHeadRotO(float): void */
	setYHeadRotO(_1: number): void; /// ?setYHeadRotO@Mob@@UEAAXM@Z
	/** setYRotA(float): void */
	setYRotA(_1: number): void; /// ?setYRotA@Mob@@QEAAXM@Z
	/** shouldApplyWaterGravity(IActorMovementProxy const &): bool */
	shouldApplyWaterGravity(_1: object): boolean; /// ?shouldApplyWaterGravity@Mob@@SA_NAEBUIActorMovementProxy@@@Z
	/** startRiding(Actor &): bool */
	startRiding(_1: object): boolean; /// ?startRiding@Mob@@UEAA_NAEAVActor@@@Z
	/** stopRiding(bool,bool,bool): void */
	stopRiding(_1: boolean, _2: boolean, _3: boolean): void; /// ?stopRiding@Mob@@UEAAX_N00@Z
	/** swing(void): void */
	swing(): void; /// ?swing@Mob@@UEAAXXZ
	/** tickDeath(void): void */
	tickDeath(): void; /// ?tickDeath@Mob@@MEAAXXZ
	/** updateAi(void): void */
	updateAi(): void; /// ?updateAi@Mob@@MEAAXXZ
	/** updateEntitySpecificMolangVariables(RenderParams &): void */
	updateEntitySpecificMolangVariables(_1: object): void; /// ?updateEntitySpecificMolangVariables@Mob@@MEAAXAEAVRenderParams@@@Z
	/** updateEquipment(void): void */
	updateEquipment(): void; /// ?updateEquipment@Mob@@UEAAXXZ
	// Inherited from Actor
	/** _addActorComponents(void): void */
	_addActorComponents(): void; /// ?_addActorComponents@Actor@@AEAAXXZ
	/** _containsSneakCollisionShapes(IActorMovementProxy &,AABB const &): bool */
	_containsSneakCollisionShapes(_1: object, _2: object): boolean; /// ?_containsSneakCollisionShapes@Actor@@CA_NAEAUIActorMovementProxy@@AEBVAABB@@@Z
	/** _isItemStackNetManagerEnabled(void): bool */
	_isItemStackNetManagerEnabled(): boolean; /// ?_isItemStackNetManagerEnabled@Actor@@AEBA_NXZ
	/** _move(IActorMovementProxy &,Vec3 const &): void */
	_move(_1: object, _2: object): void; /// ?_move@Actor@@SAXAEAUIActorMovementProxy@@AEBVVec3@@@Z
	/** _playFlySound(BlockPos const &,Block const &): void */
	_playFlySound(_1: object, _2: object): void; /// ?_playFlySound@Actor@@MEAAXAEBVBlockPos@@AEBVBlock@@@Z
	/** _randomHeartPos(void): class Vec3 */
	_randomHeartPos(): unknown; /// ?_randomHeartPos@Actor@@QEAA?AVVec3@@XZ
	/** _sendDirtyActorData(void): void */
	_sendDirtyActorData(): void; /// ?_sendDirtyActorData@Actor@@QEAAXXZ
	/** _sendLinkPacket(ActorLink const &): void */
	_sendLinkPacket(_1: object): void; /// ?_sendLinkPacket@Actor@@AEBAXAEBUActorLink@@@Z
	/** _serverInitItemStackIds(void): void */
	_serverInitItemStackIds(): void; /// ?_serverInitItemStackIds@Actor@@MEAAXXZ
	/** _setHandContainerItem(ItemStack const &,HandSlot): void */
	_setHandContainerItem(_1: object, _2: unknown): void; /// ?_setHandContainerItem@Actor@@IEAAXAEBVItemStack@@W4HandSlot@@@Z
	/** _setHeightOffset(float): void */
	_setHeightOffset(_1: number): void; /// ?_setHeightOffset@Actor@@IEAAXM@Z
	/** _setLevelPtr(Level *): void */
	_setLevelPtr(_1: object): void; /// ?_setLevelPtr@Actor@@QEAAXPEAVLevel@@@Z
	/** _setPos(Vec3 const &): void */
	_setPos(_1: object): void; /// ?_setPos@Actor@@IEAAXAEBVVec3@@@Z
	/** _shouldProvideFeedbackOnHandContainerItemSet(HandSlot,ItemStack const &): bool */
	_shouldProvideFeedbackOnHandContainerItemSet(_1: unknown, _2: object): boolean; /// ?_shouldProvideFeedbackOnHandContainerItemSet@Actor@@MEBA_NW4HandSlot@@AEBVItemStack@@@Z
	/** _spawnTreasureHuntingParticles(void): void */
	_spawnTreasureHuntingParticles(): void; /// ?_spawnTreasureHuntingParticles@Actor@@AEAAXXZ
	/** _updateComposition(bool): void */
	_updateComposition(_1: boolean): void; /// ?_updateComposition@Actor@@AEAAX_N@Z
	/** addEffect(MobEffectInstance const &): void */
	addEffect(_1: object): void; /// ?addEffect@Actor@@QEAAXAEBVMobEffectInstance@@@Z
	/** applySnapshot(PlayerSnapshotComponent const &,PlayerSnapshotComponent const &): void */
	applySnapshot(_1: object, _2: object): void; /// ?applySnapshot@Actor@@UEAAXAEBUPlayerSnapshotComponent@@0@Z
	/** buildForward(IActorMovementProxy const &): class Vec3 */
	buildForward(_1: object): unknown; /// ?buildForward@Actor@@SA?AVVec3@@AEBUIActorMovementProxy@@@Z
	/** buildForward(void): class Vec3 */
	buildForward(): unknown; /// ?buildForward@Actor@@QEBA?AVVec3@@XZ
	/** burn(int,bool): void */
	burn(_1: number, _2: boolean): void; /// ?burn@Actor@@QEAAXH_N@Z
	/** calcCenterPos(void): class Vec3 */
	calcCenterPos(): unknown; /// ?calcCenterPos@Actor@@QEBA?AVVec3@@XZ
	/** canAttack(Actor *,bool): bool */
	canAttack(_1: object, _2: boolean): boolean; /// ?canAttack@Actor@@UEBA_NPEAV1@_N@Z
	/** canBeAffected(MobEffectInstance const &): bool */
	canBeAffected(_1: object): boolean; /// ?canBeAffected@Actor@@UEBA_NAEBVMobEffectInstance@@@Z
	/** canBeAffected(int): bool */
	canBeAffected(_1: number): boolean; /// ?canBeAffected@Actor@@UEBA_NH@Z
	/** canBeAffectedByArrow(MobEffectInstance const &): bool */
	canBeAffectedByArrow(_1: object): boolean; /// ?canBeAffectedByArrow@Actor@@UEBA_NAEBVMobEffectInstance@@@Z
	/** canBeginOrContinueClimbingLadder(void): bool */
	canBeginOrContinueClimbingLadder(): boolean; /// ?canBeginOrContinueClimbingLadder@Actor@@QEBA_NXZ
	/** canCurrentlySwim(void): bool */
	canCurrentlySwim(): boolean; /// ?canCurrentlySwim@Actor@@QEBA_NXZ
	/** canDisableShield(void): bool */
	canDisableShield(): boolean; /// ?canDisableShield@Actor@@UEAA_NXZ
	/** canObstructSpawningAndBlockPlacement(void): bool */
	canObstructSpawningAndBlockPlacement(): boolean; /// ?canObstructSpawningAndBlockPlacement@Actor@@UEBA_NXZ
	/** canSee(Actor const &): bool */
	canSee(_1: object): boolean; /// ?canSee@Actor@@UEBA_NAEBV1@@Z
	/** canSee(Vec3 const &): bool */
	canSee(_1: object): boolean; /// ?canSee@Actor@@UEBA_NAEBVVec3@@@Z
	/** canSeeDaylight(void): bool */
	canSeeDaylight(): boolean; /// ?canSeeDaylight@Actor@@QEBA_NXZ
	/** canShowNameTag(void): bool */
	canShowNameTag(): boolean; /// ?canShowNameTag@Actor@@UEBA_NXZ
	/** celebrateHunt(int,bool): void */
	celebrateHunt(_1: number, _2: boolean): void; /// ?celebrateHunt@Actor@@QEAAXH_N@Z
	/** checkEntityOnewayCollision(BlockSource &,BlockPos const &): void */
	checkEntityOnewayCollision(_1: object, _2: object): void; /// ?checkEntityOnewayCollision@Actor@@SAXAEAVBlockSource@@AEBVBlockPos@@@Z
	/** checkFallDamage(float,bool): void */
	checkFallDamage(_1: number, _2: boolean): void; /// ?checkFallDamage@Actor@@UEAAXM_N@Z
	/** checkInsideBlocks(float): void */
	checkInsideBlocks(_1: number): void; /// ?checkInsideBlocks@Actor@@MEAAXM@Z
	/** checkInsideCauldron(void): void */
	checkInsideCauldron(): void; /// ?checkInsideCauldron@Actor@@QEAAXXZ
	/** chorusFruitTeleport(Vec3 const &): void */
	chorusFruitTeleport(_1: object): void; /// ?chorusFruitTeleport@Actor@@UEAAXAEBVVec3@@@Z
	/** closerThan(Actor const &,float): bool */
	closerThan(_1: object, _2: number): boolean; /// ?closerThan@Actor@@QEBA_NAEBV1@M@Z
	/** closerThan(Actor const &,float,float): bool */
	closerThan(_1: object, _2: number, _3: number): boolean; /// ?closerThan@Actor@@QEBA_NAEBV1@MM@Z
	/** consumeItem(ItemActor &,int): void */
	consumeItem(_1: object, _2: number): void; /// ?consumeItem@Actor@@QEAAXAEAVItemActor@@H@Z
	/** despawn(void): void */
	despawn(): void; /// ?despawn@Actor@@UEAAXXZ
	/** distanceSqrToBlockPosCenter(BlockPos const &): float */
	distanceSqrToBlockPosCenter(_1: object): number; /// ?distanceSqrToBlockPosCenter@Actor@@QEBAMAEBVBlockPos@@@Z
	/** distanceTo(Actor const &): float */
	distanceTo(_1: object): number; /// ?distanceTo@Actor@@QEBAMAEBV1@@Z
	/** distanceTo(Vec3 const &): float */
	distanceTo(_1: object): number; /// ?distanceTo@Actor@@QEBAMAEBVVec3@@@Z
	/** distanceToSqr(Actor const &): float */
	distanceToSqr(_1: object): number; /// ?distanceToSqr@Actor@@QEBAMAEBV1@@Z
	/** distanceToSqr(Vec3 const &): float */
	distanceToSqr(_1: object): number; /// ?distanceToSqr@Actor@@QEBAMAEBVVec3@@@Z
	/** doWaterSplashEffect(void): void */
	doWaterSplashEffect(): void; /// ?doWaterSplashEffect@Actor@@UEAAXXZ
	/** dropTowards(ItemStack const &,Vec3): void */
	dropTowards(_1: object, _2: Vec3): void; /// ?dropTowards@Actor@@QEAAXAEBVItemStack@@VVec3@@@Z
	/** extractSnapshot(PlayerSnapshotComponent &): void */
	extractSnapshot(_1: object): void; /// ?extractSnapshot@Actor@@UEBAXAEAUPlayerSnapshotComponent@@@Z
	/** fetchNearbyActorsSorted(Vec3 const &,ActorType): class std::vector<struct DistanceSortedActor,class std::allocator<struct DistanceSortedActor> > */
	fetchNearbyActorsSorted(_1: object, _2: unknown): unknown; /// ?fetchNearbyActorsSorted@Actor@@QEAA?AV?$vector@UDistanceSortedActor@@V?$allocator@UDistanceSortedActor@@@std@@@std@@AEBVVec3@@W4ActorType@@@Z
	/** filterFormattedNameTag(UIProfanityContext const &): void */
	filterFormattedNameTag(_1: object): void; /// ?filterFormattedNameTag@Actor@@UEAAXAEBVUIProfanityContext@@@Z
	/** flagPassengerToRemove(Actor &): void */
	flagPassengerToRemove(_1: object): void; /// ?flagPassengerToRemove@Actor@@UEAAXAEAV1@@Z
	/** getAABB(void): class AABB const & __ptr64 */
	getAABB(): AABB; /// ?getAABB@Actor@@QEBAAEBVAABB@@XZ
	/** getAABBDim(void): class Vec2 const & __ptr64 */
	getAABBDim(): unknown; /// ?getAABBDim@Actor@@QEBAAEBVVec2@@XZ
	/** getActorIdentifier(void): struct ActorDefinitionIdentifier const & __ptr64 */
	getActorIdentifier(): ActorDefinitionIdentifier; /// ?getActorIdentifier@Actor@@QEBAAEBUActorDefinitionIdentifier@@XZ
	/** getAllArmor(void): class std::vector<class ItemStack const * __ptr64,class std::allocator<class ItemStack const * __ptr64> > */
	getAllArmor(): unknown; /// ?getAllArmor@Actor@@UEBA?AV?$vector@PEBVItemStack@@V?$allocator@PEBVItemStack@@@std@@@std@@XZ
	/** getAmbientSound(void): enum LevelSoundEvent */
	getAmbientSound(): bigint; /// ?getAmbientSound@Actor@@UEBA?AW4LevelSoundEvent@@XZ
	/** getArmor(ArmorSlot): class ItemStack const & __ptr64 */
	getArmor(_1: unknown): ItemStack; /// ?getArmor@Actor@@UEBAAEBVItemStack@@W4ArmorSlot@@@Z
	/** getArmorContainer(void): class SimpleContainer const & __ptr64 */
	getArmorContainer(): SimpleContainer; /// ?getArmorContainer@Actor@@QEBAAEBVSimpleContainer@@XZ
	/** getAttribute(Attribute const &): class AttributeInstance const & __ptr64 */
	getAttribute(_1: object): unknown; /// ?getAttribute@Actor@@UEBAAEBVAttributeInstance@@AEBVAttribute@@@Z
	/** getBlockPosCurrentlyStandingOn(Actor const *): class BlockPos */
	getBlockPosCurrentlyStandingOn(_1: object): BlockPos; /// ?getBlockPosCurrentlyStandingOn@Actor@@QEBA?AVBlockPos@@PEBV1@@Z
	/** getBrightness(float): float */
	getBrightness(_1: number): number; /// ?getBrightness@Actor@@UEBAMM@Z
	/** getCarriedItem(void): class ItemStack const & __ptr64 */
	getCarriedItem(): ItemStack; /// ?getCarriedItem@Actor@@UEBAAEBVItemStack@@XZ
	/** getCarriedItemInSlotPreferredBy(ItemStack const &): class ItemStack const & __ptr64 */
	getCarriedItemInSlotPreferredBy(_1: object): ItemStack; /// ?getCarriedItemInSlotPreferredBy@Actor@@QEBAAEBVItemStack@@AEBV2@@Z
	/** getChestSlots(void): int */
	getChestSlots(): number; /// ?getChestSlots@Actor@@UEBAHXZ
	/** getColor(void): enum PaletteColor */
	getColor(): bigint; /// ?getColor@Actor@@QEBA?AW4PaletteColor@@XZ
	/** getColor2(void): enum PaletteColor */
	getColor2(): bigint; /// ?getColor2@Actor@@QEBA?AW4PaletteColor@@XZ
	/** getControllingSeat(void): int */
	getControllingSeat(): number; /// ?getControllingSeat@Actor@@QEBAHXZ
	/** getDamageNearbyMobs(void): bool */
	getDamageNearbyMobs(): boolean; /// ?getDamageNearbyMobs@Actor@@QEBA_NXZ
	/** getDimensionConst(void): class Dimension const & __ptr64 */
	getDimensionConst(): Dimension; /// ?getDimensionConst@Actor@@QEBAAEBVDimension@@XZ
	/** getDimensionId(void): class AutomaticID<class Dimension,int> */
	getDimensionId(): unknown; /// ?getDimensionId@Actor@@UEBA?AV?$AutomaticID@VDimension@@H@@XZ
	/** getEffect(MobEffect const &): class MobEffectInstance const * __ptr64 */
	getEffect(_1: object): unknown; /// ?getEffect@Actor@@QEBAPEBVMobEffectInstance@@AEBVMobEffect@@@Z
	/** getEquipSlots(void): int */
	getEquipSlots(): number; /// ?getEquipSlots@Actor@@UEBAHXZ
	/** getEquipmentCount(void): int */
	getEquipmentCount(): number; /// ?getEquipmentCount@Actor@@UEBAHXZ
	/** getEquippedSlot(EquipmentSlot): class ItemStack const & __ptr64 */
	getEquippedSlot(_1: unknown): ItemStack; /// ?getEquippedSlot@Actor@@UEBAAEBVItemStack@@W4EquipmentSlot@@@Z
	/** getFiringPos(void): class Vec3 */
	getFiringPos(): unknown; /// ?getFiringPos@Actor@@UEBA?AVVec3@@XZ
	/** getFirstPassenger(void): class Actor * __ptr64 */
	getFirstPassenger(): Actor; /// ?getFirstPassenger@Actor@@QEBAPEAV1@XZ
	/** getHandContainer(void): class SimpleContainer const & __ptr64 */
	getHandContainer(): SimpleContainer; /// ?getHandContainer@Actor@@QEBAAEBVSimpleContainer@@XZ
	/** getHeadLookVector(float): class Vec3 */
	getHeadLookVector(_1: number): unknown; /// ?getHeadLookVector@Actor@@UEBA?AVVec3@@M@Z
	getHealth(): bigint; /// Actor::getHealth
	/** getHealth(void): int */
	getHealth(): number; /// ?getHealth@Actor@@QEBAHXZ
	/** getHurtDir(void): int */
	getHurtDir(): number; /// ?getHurtDir@Actor@@QEBAHXZ
	/** getInteraction(Player &,ActorInteraction &,Vec3 const &): bool */
	getInteraction(_1: object, _2: object, _3: object): boolean; /// ?getInteraction@Actor@@UEAA_NAEAVPlayer@@AEAVActorInteraction@@AEBVVec3@@@Z
	/** getInterpolatedPosition(float): class Vec3 */
	getInterpolatedPosition(_1: number): unknown; /// ?getInterpolatedPosition@Actor@@QEBA?AVVec3@@M@Z
	/** getInterpolatedRidingPosition(float): class Vec3 */
	getInterpolatedRidingPosition(_1: number): unknown; /// ?getInterpolatedRidingPosition@Actor@@UEBA?AVVec3@@M@Z
	/** getInterpolatedRotation(float): class Vec2 */
	getInterpolatedRotation(_1: number): unknown; /// ?getInterpolatedRotation@Actor@@QEBA?AVVec2@@M@Z
	/** getInterpolatedWalkAnimSpeed(float): float */
	getInterpolatedWalkAnimSpeed(_1: number): number; /// ?getInterpolatedWalkAnimSpeed@Actor@@UEBAMM@Z
	/** getInventorySize(void): int */
	getInventorySize(): number; /// ?getInventorySize@Actor@@UEBAHXZ
	/** getLastHurtByMob(void): class Mob * __ptr64 */
	getLastHurtByMob(): Mob; /// ?getLastHurtByMob@Actor@@UEAAPEAVMob@@XZ
	/** getLastHurtByPlayer(void): class Player * __ptr64 */
	getLastHurtByPlayer(): Player; /// ?getLastHurtByPlayer@Actor@@UEAAPEAVPlayer@@XZ
	/** getLastHurtMob(void): class Mob * __ptr64 */
	getLastHurtMob(): Mob; /// ?getLastHurtMob@Actor@@UEAAPEAVMob@@XZ
	/** getLastHurtTimestamp(void): unsigned __int64 */
	getLastHurtTimestamp(): bigint; /// ?getLastHurtTimestamp@Actor@@QEBA_KXZ
	/** getLevel(void): class Level const & __ptr64 */
	getLevel(): Level; /// ?getLevel@Actor@@QEBAAEBVLevel@@XZ
	/** getLinks(void): class std::vector<struct ActorLink,class std::allocator<struct ActorLink> > */
	getLinks(): unknown; /// ?getLinks@Actor@@QEBA?AV?$vector@UActorLink@@V?$allocator@UActorLink@@@std@@@std@@XZ
	/** getLiquidAABB(MaterialType): class AABB */
	getLiquidAABB(_1: unknown): AABB; /// ?getLiquidAABB@Actor@@UEBA?AVAABB@@W4MaterialType@@@Z
	/** getLootTable(void): class LootTable * __ptr64 */
	getLootTable(): unknown; /// ?getLootTable@Actor@@UEAAPEAVLootTable@@XZ
	/** getMapDecorationRotation(void): float */
	getMapDecorationRotation(): number; /// ?getMapDecorationRotation@Actor@@UEBAMXZ
	/** getMarkVariant(void): int */
	getMarkVariant(): number; /// ?getMarkVariant@Actor@@QEBAHXZ
	/** getMaxHealth(void): int */
	getMaxHealth(): number; /// ?getMaxHealth@Actor@@QEBAHXZ
	/** getMolangVariables(void): class MolangVariableMap & __ptr64 */
	getMolangVariables(): unknown; /// ?getMolangVariables@Actor@@QEAAAEAVMolangVariableMap@@XZ
	/** getMovementProxy(void): class gsl::not_null<class std::shared_ptr<struct IActorMovementProxy const> > */
	getMovementProxy(): unknown; /// ?getMovementProxy@Actor@@QEBA?AV?$not_null@V?$shared_ptr@$$CBUIActorMovementProxy@@@std@@@gsl@@XZ
	/** getMutableAttribute(Attribute const &): class AttributeInstance * __ptr64 */
	getMutableAttribute(_1: object): unknown; /// ?getMutableAttribute@Actor@@UEAAPEAVAttributeInstance@@AEBVAttribute@@@Z
	/** getNameTag(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64 */
	getNameTag(): unknown; /// ?getNameTag@Actor@@UEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** getNextStep(float): float */
	getNextStep(_1: number): number; /// ?getNextStep@Actor@@UEAAMM@Z
	/** getOffhandSlot(void): class ItemStack const & __ptr64 */
	getOffhandSlot(): ItemStack; /// ?getOffhandSlot@Actor@@QEBAAEBVItemStack@@XZ
	/** getOrAddDynamicProperties(void): class DynamicProperties & __ptr64 */
	getOrAddDynamicProperties(): unknown; /// ?getOrAddDynamicProperties@Actor@@QEAAAEAVDynamicProperties@@XZ
	/** getOwner(void): class Mob * __ptr64 */
	getOwner(): Mob; /// ?getOwner@Actor@@QEBAPEAVMob@@XZ
	/** getOwnerEntityType(void): enum ActorType */
	getOwnerEntityType(): bigint; /// ?getOwnerEntityType@Actor@@UEAA?AW4ActorType@@XZ
	/** getOwnerId(void): struct ActorUniqueID const */
	getOwnerId(): unknown; /// ?getOwnerId@Actor@@QEBA?BUActorUniqueID@@XZ
	/** getPassengerIndex(Actor const &): int */
	getPassengerIndex(_1: object): number; /// ?getPassengerIndex@Actor@@QEBAHAEBV1@@Z
	/** getPassengerYRotation(Actor const &): float */
	getPassengerYRotation(_1: object): number; /// ?getPassengerYRotation@Actor@@UEBAMAEBV1@@Z
	/** getPersistingTradeOffers(void): class std::unique_ptr<class CompoundTag,struct std::default_delete<class CompoundTag> > */
	getPersistingTradeOffers(): unknown; /// ?getPersistingTradeOffers@Actor@@QEAA?AV?$unique_ptr@VCompoundTag@@U?$default_delete@VCompoundTag@@@std@@@std@@XZ
	/** getPickRadius(void): float */
	getPickRadius(): number; /// ?getPickRadius@Actor@@UEAAMXZ
	/** getPlayerOwner(void): class Player * __ptr64 */
	getPlayerOwner(): Player; /// ?getPlayerOwner@Actor@@QEBAPEAVPlayer@@XZ
	/** getPortalCooldown(void): int */
	getPortalCooldown(): number; /// ?getPortalCooldown@Actor@@UEBAHXZ
	/** getPosDelta(void): class Vec3 const & __ptr64 */
	getPosDelta(): unknown; /// ?getPosDelta@Actor@@QEBAAEBVVec3@@XZ
	/** getPosExtrapolated(float): class Vec3 const */
	getPosExtrapolated(_1: number): unknown; /// ?getPosExtrapolated@Actor@@UEBA?BVVec3@@M@Z
	/** getPosPrev(void): class Vec3 const & __ptr64 */
	getPosPrev(): unknown; /// ?getPosPrev@Actor@@UEBAAEBVVec3@@XZ
	/** getPosition(void): class Vec3 const & __ptr64 */
	getPosition(): unknown; /// ?getPosition@Actor@@UEBAAEBVVec3@@XZ
	/** getPredictedMovementValues(void): struct PredictedMovementValues const & __ptr64 */
	getPredictedMovementValues(): unknown; /// ?getPredictedMovementValues@Actor@@UEBAAEBUPredictedMovementValues@@XZ
	/** getRandom(void): class Random & __ptr64 */
	getRandom(): Random; /// ?getRandom@Actor@@QEBAAEAVRandom@@XZ
	/** getRegionConst(void): class BlockSource const & __ptr64 */
	getRegionConst(): BlockSource; /// ?getRegionConst@Actor@@QEBAAEBVBlockSource@@XZ
	/** getRidingHeight(void): float */
	getRidingHeight(): number; /// ?getRidingHeight@Actor@@QEBAMXZ
	/** getRotation(void): class Vec2 */
	getRotation(): unknown; /// ?getRotation@Actor@@QEBA?AVVec2@@XZ
	/** getRuntimeID(void): class ActorRuntimeID */
	getRuntimeID(): unknown; /// ?getRuntimeID@Actor@@QEBA?AVActorRuntimeID@@XZ
	/** getScoreTag(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64 */
	getScoreTag(): unknown; /// ?getScoreTag@Actor@@UEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** getShadowHeightOffs(void): float */
	getShadowHeightOffs(): number; /// ?getShadowHeightOffs@Actor@@UEAAMXZ
	/** getSourceUniqueID(void): struct ActorUniqueID */
	getSourceUniqueID(): unknown; /// ?getSourceUniqueID@Actor@@UEBA?AUActorUniqueID@@XZ
	/** getSpeedInMetersPerSecond(void): float */
	getSpeedInMetersPerSecond(): number; /// ?getSpeedInMetersPerSecond@Actor@@QEBAMXZ
	/** getStatusFlag(ActorFlags): bool */
	getStatusFlag(_1: unknown): boolean; /// ?getStatusFlag@Actor@@QEBA_NW4ActorFlags@@@Z
	/** getStructuralIntegrity(void): int */
	getStructuralIntegrity(): number; /// ?getStructuralIntegrity@Actor@@QEBAHXZ
	/** getTags(void): class gsl::span<class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> >,-1> const */
	getTags(): unknown; /// ?getTags@Actor@@QEBA?BV?$span@V?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@$0?0@gsl@@XZ
	/** getTarget(void): class Actor * __ptr64 */
	getTarget(): Actor; /// ?getTarget@Actor@@QEBAPEAV1@XZ
	/** getTradeOffers(void): class MerchantRecipeList * __ptr64 */
	getTradeOffers(): unknown; /// ?getTradeOffers@Actor@@QEAAPEAVMerchantRecipeList@@XZ
	/** getTradingPlayer(void): class Player * __ptr64 */
	getTradingPlayer(): Player; /// ?getTradingPlayer@Actor@@QEBAPEAVPlayer@@XZ
	/** getUniqueID(void): struct ActorUniqueID const & __ptr64 */
	getUniqueID(): unknown; /// ?getUniqueID@Actor@@QEBAAEBUActorUniqueID@@XZ
	/** getVariant(void): int */
	getVariant(): number; /// ?getVariant@Actor@@QEBAHXZ
	/** getVehicle(void): class Actor * __ptr64 */
	getVehicle(): Actor; /// ?getVehicle@Actor@@QEBAPEAV1@XZ
	/** getVehicleRoot(void): class Actor * __ptr64 */
	getVehicleRoot(): Actor; /// ?getVehicleRoot@Actor@@QEBAPEAV1@XZ
	/** getViewVector(float): class Vec3 */
	getViewVector(_1: number): unknown; /// ?getViewVector@Actor@@QEBA?AVVec3@@M@Z
	/** handleFallDistanceOnServer(float,float,bool): void */
	handleFallDistanceOnServer(_1: number, _2: number, _3: boolean): void; /// ?handleFallDistanceOnServer@Actor@@UEAAXMM_N@Z
	/** handleInsidePortal(BlockPos const &): void */
	handleInsidePortal(_1: object): void; /// ?handleInsidePortal@Actor@@UEAAXAEBVBlockPos@@@Z
	/** hasCategory(ActorCategory): bool */
	hasCategory(_1: unknown): boolean; /// ?hasCategory@Actor@@QEBA_NW4ActorCategory@@@Z
	/** hasEffect(MobEffect const &): bool */
	hasEffect(_1: object): boolean; /// ?hasEffect@Actor@@QEBA_NAEBVMobEffect@@@Z
	/** hasEnteredWater(void): bool */
	hasEnteredWater(): boolean; /// ?hasEnteredWater@Actor@@UEBA_NXZ
	/** hasFamily(HashedString const &): bool */
	hasFamily(_1: object): boolean; /// ?hasFamily@Actor@@QEBA_NAEBVHashedString@@@Z
	/** hasLevel(void): bool */
	hasLevel(): boolean; /// ?hasLevel@Actor@@QEBA_NXZ
	/** hasPassenger(void): bool */
	hasPassenger(): boolean; /// ?hasPassenger@Actor@@QEBA_NXZ
	/** hasPlayerPassenger(void): bool */
	hasPlayerPassenger(): boolean; /// ?hasPlayerPassenger@Actor@@QEBA_NXZ
	/** hasPriorityAmmunition(void): bool */
	hasPriorityAmmunition(): boolean; /// ?hasPriorityAmmunition@Actor@@QEBA_NXZ
	/** hasRuntimeID(void): bool */
	hasRuntimeID(): boolean; /// ?hasRuntimeID@Actor@@QEBA_NXZ
	/** hasSaddle(void): bool */
	hasSaddle(): boolean; /// ?hasSaddle@Actor@@QEBA_NXZ
	/** hasTeleported(void): bool */
	hasTeleported(): boolean; /// ?hasTeleported@Actor@@QEBA_NXZ
	/** hasType(ActorType): bool */
	hasType(_1: unknown): boolean; /// ?hasType@Actor@@QEBA_NW4ActorType@@@Z
	/** heal(int): void */
	heal(_1: number): void; /// ?heal@Actor@@UEAAXH@Z
	/** hurt(ActorDamageSource const &,float,bool,bool): bool */
	hurt(_1: object, _2: number, _3: boolean, _4: boolean): boolean; /// ?hurt@Actor@@QEAA_NAEBVActorDamageSource@@M_N1@Z
	/** initActorProperties(void): void */
	initActorProperties(): void; /// ?initActorProperties@Actor@@QEAAXXZ
	/** initParams(VariantParameterList &): void */
	initParams(_1: object): void; /// ?initParams@Actor@@QEAAXAEAVVariantParameterList@@@Z
	/** interpolatorTick(void): void */
	interpolatorTick(): void; /// ?interpolatorTick@Actor@@UEAAXXZ
	/** intersects(Vec3 const &,Vec3 const &): bool */
	intersects(_1: object, _2: object): boolean; /// ?intersects@Actor@@UEBA_NAEBVVec3@@0@Z
	/** isAffectedByWaterBottle(void): bool */
	isAffectedByWaterBottle(): boolean; /// ?isAffectedByWaterBottle@Actor@@UEBA_NXZ
	/** isAttackableGamemode(void): bool */
	isAttackableGamemode(): boolean; /// ?isAttackableGamemode@Actor@@UEBA_NXZ
	/** isAutonomous(void): bool */
	isAutonomous(): boolean; /// ?isAutonomous@Actor@@QEBA_NXZ
	/** isBaby(void): bool */
	isBaby(): boolean; /// ?isBaby@Actor@@QEBA_NXZ
	/** isBreakingObstruction(void): bool */
	isBreakingObstruction(): boolean; /// ?isBreakingObstruction@Actor@@QEBA_NXZ
	/** isClientSide(void): bool */
	isClientSide(): boolean; /// ?isClientSide@Actor@@UEBA_NXZ
	/** isControlledByLocalInstance(void): bool */
	isControlledByLocalInstance(): boolean; /// ?isControlledByLocalInstance@Actor@@QEBA_NXZ
	/** isEnchanted(void): bool */
	isEnchanted(): boolean; /// ?isEnchanted@Actor@@UEBA_NXZ
	/** isGlobal(void): bool */
	isGlobal(): boolean; /// ?isGlobal@Actor@@QEBA_NXZ
	/** isImmersedInWater(IActorMovementProxy const &): bool */
	isImmersedInWater(_1: object): boolean; /// ?isImmersedInWater@Actor@@SA_NAEBUIActorMovementProxy@@@Z
	/** isInContactWithWater(void): bool */
	isInContactWithWater(): boolean; /// ?isInContactWithWater@Actor@@QEBA_NXZ
	/** isInLava(void): bool */
	isInLava(): boolean; /// ?isInLava@Actor@@UEBA_NXZ
	/** isInLove(void): bool */
	isInLove(): boolean; /// ?isInLove@Actor@@QEBA_NXZ
	/** isInPrecipitation(void): bool */
	isInPrecipitation(): boolean; /// ?isInPrecipitation@Actor@@QEBA_NXZ
	/** isInRain(void): bool */
	isInRain(): boolean; /// ?isInRain@Actor@@QEBA_NXZ
	/** isInSnow(void): bool */
	isInSnow(): boolean; /// ?isInSnow@Actor@@QEBA_NXZ
	/** isInThunderstorm(void): bool */
	isInThunderstorm(): boolean; /// ?isInThunderstorm@Actor@@QEBA_NXZ
	/** isInWall(void): bool */
	isInWall(): boolean; /// ?isInWall@Actor@@UEBA_NXZ
	/** isInWater(void): bool */
	isInWater(): boolean; /// ?isInWater@Actor@@UEBA_NXZ
	/** isInWaterOrRain(void): bool */
	isInWaterOrRain(): boolean; /// ?isInWaterOrRain@Actor@@QEBA_NXZ
	/** isInsideBorderBlock(float): bool */
	isInsideBorderBlock(_1: number): boolean; /// ?isInsideBorderBlock@Actor@@QEBA_NM@Z
	/** isInsidePortal(void): bool */
	isInsidePortal(): boolean; /// ?isInsidePortal@Actor@@QEBA_NXZ
	/** isInvertedHealAndHarm(void): bool */
	isInvertedHealAndHarm(): boolean; /// ?isInvertedHealAndHarm@Actor@@UEBA_NXZ
	/** isInvisible(void): bool */
	isInvisible(): boolean; /// ?isInvisible@Actor@@UEBA_NXZ
	/** isLeashed(void): bool */
	isLeashed(): boolean; /// ?isLeashed@Actor@@QEBA_NXZ
	/** isMoving(void): bool */
	isMoving(): boolean; /// ?isMoving@Actor@@QEBA_NXZ
	/** isOnFire(void): bool */
	isOnFire(): boolean; /// ?isOnFire@Actor@@UEBA_NXZ
	/** isOverWater(void): bool */
	isOverWater(): boolean; /// ?isOverWater@Actor@@UEBA_NXZ
	/** isPassenger(Actor const &): bool */
	isPassenger(_1: object): boolean; /// ?isPassenger@Actor@@QEBA_NAEBV1@@Z
	/** isRegionValid(void): bool */
	isRegionValid(): boolean; /// ?isRegionValid@Actor@@QEBA_NXZ
	/** isRemotePlayer(void): bool */
	isRemotePlayer(): boolean; /// ?isRemotePlayer@Actor@@UEBA_NXZ
	/** isRemoved(void): bool */
	isRemoved(): boolean; /// ?isRemoved@Actor@@QEBA_NXZ
	/** isRiding(Actor *): bool */
	isRiding(_1: object): boolean; /// ?isRiding@Actor@@QEBA_NPEAV1@@Z
	/** isRiding(void): bool */
	isRiding(): boolean; /// ?isRiding@Actor@@QEBA_NXZ
	/** isSilent(void): bool */
	isSilent(): boolean; /// ?isSilent@Actor@@UEBA_NXZ
	/** isSitting(void): bool */
	isSitting(): boolean; /// ?isSitting@Actor@@QEBA_NXZ
	/** isSkyLit(float): bool */
	isSkyLit(_1: number): boolean; /// ?isSkyLit@Actor@@UEAA_NM@Z
	/** isSneaking(void): bool */
	isSneaking(): boolean; /// ?isSneaking@Actor@@QEBA_NXZ
	/** isStanding(IActorMovementProxy const &): bool */
	isStanding(_1: object): boolean; /// ?isStanding@Actor@@SA_NAEBUIActorMovementProxy@@@Z
	/** isSwimming(void): bool */
	isSwimming(): boolean; /// ?isSwimming@Actor@@QEBA_NXZ
	/** isTame(void): bool */
	isTame(): boolean; /// ?isTame@Actor@@QEBA_NXZ
	/** isTouchingDamageBlock(void): bool */
	isTouchingDamageBlock(): boolean; /// ?isTouchingDamageBlock@Actor@@QEBA_NXZ
	/** isType(ActorType): bool */
	isType(_1: unknown): boolean; /// ?isType@Actor@@QEBA_NW4ActorType@@@Z
	/** isUnderLiquid(MaterialType): bool */
	isUnderLiquid(_1: unknown): boolean; /// ?isUnderLiquid@Actor@@UEBA_NW4MaterialType@@@Z
	/** isWearingLeatherArmor(void): bool const */
	isWearingLeatherArmor(): boolean; /// ?isWearingLeatherArmor@Actor@@UEBA?B_NXZ
	/** killed(Actor &): void */
	killed(_1: object): void; /// ?killed@Actor@@UEAAXAEAV1@@Z
	/** lerpMotion(Vec3 const &): void */
	lerpMotion(_1: object): void; /// ?lerpMotion@Actor@@UEAAXAEBVVec3@@@Z
	/** lerpTo(Vec3 const &,Vec2 const &,float,int): void */
	lerpTo(_1: object, _2: object, _3: number, _4: number): void; /// ?lerpTo@Actor@@QEAAXAEBVVec3@@AEBVVec2@@MH@Z
	/** lerpToRotation(Vec2 const &,int): void */
	lerpToRotation(_1: object, _2: number): void; /// ?lerpToRotation@Actor@@QEAAXAEBVVec2@@H@Z
	/** load(CompoundTag const &,DataLoadHelper &): bool */
	load(_1: object, _2: object): boolean; /// ?load@Actor@@UEAA_NAEBVCompoundTag@@AEAVDataLoadHelper@@@Z
	/** markHurt(void): void */
	markHurt(): void; /// ?markHurt@Actor@@MEAAXXZ
	/** moveBBs(Vec3 const &): void */
	moveBBs(_1: object): void; /// ?moveBBs@Actor@@QEAAXAEBVVec3@@@Z
	/** moveRelative(float,float,float,float): void */
	moveRelative(_1: number, _2: number, _3: number, _4: number): void; /// ?moveRelative@Actor@@QEAAXMMMM@Z
	/** moveTo(Vec3 const &,Vec2 const &): void */
	moveTo(_1: object, _2: object): void; /// ?moveTo@Actor@@QEAAXAEBVVec3@@AEBVVec2@@@Z
	/** onAboveBubbleColumn(bool): void */
	onAboveBubbleColumn(_1: boolean): void; /// ?onAboveBubbleColumn@Actor@@UEAAX_N@Z
	/** onAffectedByWaterBottle(void): void */
	onAffectedByWaterBottle(): void; /// ?onAffectedByWaterBottle@Actor@@QEAAXXZ
	/** onEffectAdded(MobEffectInstance &): void */
	onEffectAdded(_1: object): void; /// ?onEffectAdded@Actor@@UEAAXAEAVMobEffectInstance@@@Z
	/** onEffectRemoved(MobEffectInstance &): void */
	onEffectRemoved(_1: object): void; /// ?onEffectRemoved@Actor@@UEAAXAEAVMobEffectInstance@@@Z
	/** onEffectUpdated(MobEffectInstance &): void */
	onEffectUpdated(_1: object): void; /// ?onEffectUpdated@Actor@@UEAAXAEAVMobEffectInstance@@@Z
	/** onInsideBubbleColumn(bool): void */
	onInsideBubbleColumn(_1: boolean): void; /// ?onInsideBubbleColumn@Actor@@UEAAX_N@Z
	/** onLightningHit(void): void */
	onLightningHit(): void; /// ?onLightningHit@Actor@@UEAAXXZ
	/** onOrphan(void): void */
	onOrphan(): void; /// ?onOrphan@Actor@@UEAAXXZ
	/** onSynchedDataUpdate(int): void */
	onSynchedDataUpdate(_1: number): void; /// ?onSynchedDataUpdate@Actor@@UEAAXH@Z
	/** onSynchedFlagUpdate(int,__int64,__int64): void */
	onSynchedFlagUpdate(_1: number, _2: bigint, _3: bigint): void; /// ?onSynchedFlagUpdate@Actor@@UEAAXH_J0@Z
	/** openContainerComponent(Player &): void */
	openContainerComponent(_1: object): void; /// ?openContainerComponent@Actor@@UEAAXAEAVPlayer@@@Z
	/** performRangedAttack(Actor &,float): void */
	performRangedAttack(_1: object, _2: number): void; /// ?performRangedAttack@Actor@@UEAAXAEAV1@M@Z
	/** pickUpItem(ItemActor &,int): void */
	pickUpItem(_1: object, _2: number): void; /// ?pickUpItem@Actor@@QEAAXAEAVItemActor@@H@Z
	/** playAmbientSound(void): void */
	playAmbientSound(): void; /// ?playAmbientSound@Actor@@UEAAXXZ
	/** playSound(LevelSoundEvent,Vec3 const &,int): void */
	playSound(_1: unknown, _2: object, _3: number): void; /// ?playSound@Actor@@QEAAXW4LevelSoundEvent@@AEBVVec3@@H@Z
	/** playSynchronizedSound(LevelSoundEvent,Vec3 const &,Block const &,bool): void */
	playSynchronizedSound(_1: unknown, _2: object, _3: object, _4: boolean): void; /// ?playSynchronizedSound@Actor@@UEAAXW4LevelSoundEvent@@AEBVVec3@@AEBVBlock@@_N@Z
	/** playSynchronizedSound(LevelSoundEvent,Vec3 const &,int,bool): void */
	playSynchronizedSound(_1: unknown, _2: object, _3: number, _4: boolean): void; /// ?playSynchronizedSound@Actor@@UEAAXW4LevelSoundEvent@@AEBVVec3@@H_N@Z
	/** positionAllPassengers(bool): void */
	positionAllPassengers(_1: boolean): void; /// ?positionAllPassengers@Actor@@QEAAX_N@Z
	/** positionPassenger(Actor &,float): void */
	positionPassenger(_1: object, _2: number): void; /// ?positionPassenger@Actor@@UEAAXAEAV1@M@Z
	/** postSplashGameEvent(void): void */
	postSplashGameEvent(): void; /// ?postSplashGameEvent@Actor@@QEAAXXZ
	/** pushBackActionEventToActionQueue(ActionEvent): void */
	pushBackActionEventToActionQueue(_1: unknown): void; /// ?pushBackActionEventToActionQueue@Actor@@QEAAXVActionEvent@@@Z
	/** pushOutOfBlocks(Vec3 const &): void */
	pushOutOfBlocks(_1: object): void; /// ?pushOutOfBlocks@Actor@@MEAAXAEBVVec3@@@Z
	/** reload(void): void */
	reload(): void; /// ?reload@Actor@@QEAAXXZ
	/** reloadComponents(Actor::InitializationMethod,VariantParameterList const &): void */
	reloadComponents(_1: unknown, _2: object): void; /// ?reloadComponents@Actor@@MEAAXW4InitializationMethod@1@AEBVVariantParameterList@@@Z
	/** reloadLootTable(EquipmentTableDefinition const &): void */
	reloadLootTable(_1: object): void; /// ?reloadLootTable@Actor@@UEAAXAEBUEquipmentTableDefinition@@@Z
	/** reloadLootTable(void): void */
	reloadLootTable(): void; /// ?reloadLootTable@Actor@@UEAAXXZ
	/** removeEffect(int): void */
	removeEffect(_1: number): void; /// ?removeEffect@Actor@@QEAAXH@Z
	/** resetBlockMovementSlowdownMultiplier(void): void */
	resetBlockMovementSlowdownMultiplier(): void; /// ?resetBlockMovementSlowdownMultiplier@Actor@@UEAAXXZ
	/** resetClientAnimations(void): void */
	resetClientAnimations(): void; /// ?resetClientAnimations@Actor@@QEAAXXZ
	/** resetRegion(void): void */
	resetRegion(): void; /// ?resetRegion@Actor@@QEAAXXZ
	/** save(CompoundTag &): bool */
	save(_1: object): boolean; /// ?save@Actor@@UEBA_NAEAVCompoundTag@@@Z
	/** saveEntityFlags(CompoundTag &): void */
	saveEntityFlags(_1: object): void; /// ?saveEntityFlags@Actor@@QEBAXAEAVCompoundTag@@@Z
	/** saveWithoutId(CompoundTag &): void */
	saveWithoutId(_1: object): void; /// ?saveWithoutId@Actor@@UEBAXAEAVCompoundTag@@@Z
	/** sendMotionPacketIfNeeded(void): void */
	sendMotionPacketIfNeeded(): void; /// ?sendMotionPacketIfNeeded@Actor@@UEAAXXZ
	/** serializationSetHealth(int): void */
	serializationSetHealth(_1: number): void; /// ?serializationSetHealth@Actor@@QEAAXH@Z
	/** setAABB(AABB const &): void */
	setAABB(_1: object): void; /// ?setAABB@Actor@@QEAAXAEBVAABB@@@Z
	/** setActorRendererId(HashedString): void */
	setActorRendererId(_1: unknown): void; /// ?setActorRendererId@Actor@@QEAAXVHashedString@@@Z
	/** setBreakingObstruction(bool): void */
	setBreakingObstruction(_1: boolean): void; /// ?setBreakingObstruction@Actor@@QEAAX_N@Z
	/** setCanFly(bool): void */
	setCanFly(_1: boolean): void; /// ?setCanFly@Actor@@QEAAX_N@Z
	/** setCanPowerJump(bool): void */
	setCanPowerJump(_1: boolean): void; /// ?setCanPowerJump@Actor@@UEAAX_N@Z
	/** setCharged(bool): void */
	setCharged(_1: boolean): void; /// ?setCharged@Actor@@QEAAX_N@Z
	/** setColor(PaletteColor): void */
	setColor(_1: unknown): void; /// ?setColor@Actor@@QEAAXW4PaletteColor@@@Z
	/** setDamageNearbyMobs(bool): void */
	setDamageNearbyMobs(_1: boolean): void; /// ?setDamageNearbyMobs@Actor@@UEAAX_N@Z
	/** setDancing(bool): void */
	setDancing(_1: boolean): void; /// ?setDancing@Actor@@QEAAX_N@Z
	/** setEnchanted(bool): void */
	setEnchanted(_1: boolean): void; /// ?setEnchanted@Actor@@QEAAX_N@Z
	/** setHurtDir(int): void */
	setHurtDir(_1: number): void; /// ?setHurtDir@Actor@@QEAAXH@Z
	/** setHurtTime(int): void */
	setHurtTime(_1: number): void; /// ?setHurtTime@Actor@@QEAAXH@Z
	/** setInvisible(bool): void */
	setInvisible(_1: boolean): void; /// ?setInvisible@Actor@@QEAAX_N@Z
	/** setJumpDuration(int): void */
	setJumpDuration(_1: number): void; /// ?setJumpDuration@Actor@@QEAAXH@Z
	/** setLastHitBB(Vec3 const &,Vec3 const &): void */
	setLastHitBB(_1: object, _2: object): void; /// ?setLastHitBB@Actor@@QEAAXAEBVVec3@@0@Z
	/** setLastHurtByMob(Mob *): void */
	setLastHurtByMob(_1: object): void; /// ?setLastHurtByMob@Actor@@UEAAXPEAVMob@@@Z
	/** setLastHurtByPlayer(Player *): void */
	setLastHurtByPlayer(_1: object): void; /// ?setLastHurtByPlayer@Actor@@UEAAXPEAVPlayer@@@Z
	/** setLastHurtMob(Actor *): void */
	setLastHurtMob(_1: object): void; /// ?setLastHurtMob@Actor@@UEAAXPEAV1@@Z
	/** setLeashHolder(ActorUniqueID): void */
	setLeashHolder(_1: unknown): void; /// ?setLeashHolder@Actor@@QEAAXUActorUniqueID@@@Z
	/** setMoving(bool): void */
	setMoving(_1: boolean): void; /// ?setMoving@Actor@@QEAAX_N@Z
	/** setNameTagVisible(bool): void */
	setNameTagVisible(_1: boolean): void; /// ?setNameTagVisible@Actor@@UEAAX_N@Z
	/** setOwner(ActorUniqueID): void */
	setOwner(_1: unknown): void; /// ?setOwner@Actor@@UEAAXUActorUniqueID@@@Z
	/** setPersistent(void): void */
	setPersistent(): void; /// ?setPersistent@Actor@@QEAAXXZ
	/** setPos(Vec3 const &): void */
	setPos(_1: object): void; /// ?setPos@Actor@@UEAAXAEBVVec3@@@Z
	/** setPreviousPosRot(Vec3 const &,Vec2 const &): void */
	setPreviousPosRot(_1: object, _2: object): void; /// ?setPreviousPosRot@Actor@@QEAAXAEBVVec3@@AEBVVec2@@@Z
	/** setRegion(BlockSource &): void */
	setRegion(_1: object): void; /// ?setRegion@Actor@@QEAAXAEAVBlockSource@@@Z
	/** setResting(bool): void */
	setResting(_1: boolean): void; /// ?setResting@Actor@@QEAAX_N@Z
	/** setRot(Vec2 const &): void */
	setRot(_1: object): void; /// ?setRot@Actor@@UEAAXAEBVVec2@@@Z
	/** setScared(bool): void */
	setScared(_1: boolean): void; /// ?setScared@Actor@@QEAAX_N@Z
	/** setSitting(bool): void */
	setSitting(_1: boolean): void; /// ?setSitting@Actor@@UEAAX_N@Z
	/** setSneaking(bool): void */
	setSneaking(_1: boolean): void; /// ?setSneaking@Actor@@UEAAX_N@Z
	/** setStanding(bool): void */
	setStanding(_1: boolean): void; /// ?setStanding@Actor@@UEAAX_N@Z
	/** setStatusFlag(ActorFlags,bool): void */
	setStatusFlag(_1: unknown, _2: boolean): void; /// ?setStatusFlag@Actor@@QEAAXW4ActorFlags@@_N@Z
	/** setStunned(bool): void */
	setStunned(_1: boolean): void; /// ?setStunned@Actor@@QEAAX_N@Z
	/** setVariant(int): void */
	setVariant(_1: number): void; /// ?setVariant@Actor@@QEAAXH@Z
	/** shouldRender(void): bool */
	shouldRender(): boolean; /// ?shouldRender@Actor@@UEBA_NXZ
	/** shouldTick(void): bool */
	shouldTick(): boolean; /// ?shouldTick@Actor@@UEBA_NXZ
	/** shouldTryMakeStepSound(void): bool */
	shouldTryMakeStepSound(): boolean; /// ?shouldTryMakeStepSound@Actor@@MEAA_NXZ
	/** spawnAtLocation(Block const &,int): class ItemActor * __ptr64 */
	spawnAtLocation(_1: object, _2: number): unknown; /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@AEBVBlock@@H@Z
	/** spawnAtLocation(Block const &,int,float): class ItemActor * __ptr64 */
	spawnAtLocation(_1: object, _2: number, _3: number): unknown; /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@AEBVBlock@@HM@Z
	/** spawnAtLocation(ItemStack const &,float): class ItemActor * __ptr64 */
	spawnAtLocation(_1: object, _2: number): unknown; /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@AEBVItemStack@@M@Z
	/** spawnAtLocation(int,int): class ItemActor * __ptr64 */
	spawnAtLocation(_1: number, _2: number): unknown; /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@HH@Z
	/** spawnAtLocation(int,int,float): class ItemActor * __ptr64 */
	spawnAtLocation(_1: number, _2: number, _3: number): unknown; /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@HHM@Z
	/** spawnDeathParticles(void): void */
	spawnDeathParticles(): void; /// ?spawnDeathParticles@Actor@@QEAAXXZ
	/** spawnDustParticles(int): void */
	spawnDustParticles(_1: number): void; /// ?spawnDustParticles@Actor@@QEAAXH@Z
	/** spawnTamingParticles(bool): void */
	spawnTamingParticles(_1: boolean): void; /// ?spawnTamingParticles@Actor@@QEAAX_N@Z
	/** spawnTrailBubbles(void): void */
	spawnTrailBubbles(): void; /// ?spawnTrailBubbles@Actor@@MEAAXXZ
	/** thawFreezeEffect(void): void */
	thawFreezeEffect(): void; /// ?thawFreezeEffect@Actor@@UEAAXXZ
	/** tickLeash(void): void */
	tickLeash(): void; /// ?tickLeash@Actor@@UEAAXXZ
	/** tryGetEquippableSlotAllowedItems(int): class std::vector<class ItemDescriptor,class std::allocator<class ItemDescriptor> > const * __ptr64 */
	tryGetEquippableSlotAllowedItems(_1: number): unknown; /// ?tryGetEquippableSlotAllowedItems@Actor@@QEBAPEBV?$vector@VItemDescriptor@@V?$allocator@VItemDescriptor@@@std@@@std@@H@Z
	/** tryGetFromComponent(ActorOwnerComponent const &,bool): class Actor const * __ptr64 */
	tryGetFromComponent(_1: object, _2: boolean): Actor; /// ?tryGetFromComponent@Actor@@SAPEBV1@AEBVActorOwnerComponent@@_N@Z
	tryGetFromEntity(): bigint; /// Actor::tryGetFromEntity
	/** tryTeleportTo(Vec3 const &,bool,bool,int,int): bool */
	tryTeleportTo(_1: object, _2: boolean, _3: boolean, _4: number, _5: number): boolean; /// ?tryTeleportTo@Actor@@UEAA_NAEBVVec3@@_N1HH@Z
	/** updateBBFromDefinition(void): void */
	updateBBFromDefinition(): void; /// ?updateBBFromDefinition@Actor@@QEAAXXZ
	/** updateDescription(void): void */
	updateDescription(): void; /// ?updateDescription@Actor@@QEAAXXZ
	/** updateEntityInside(AABB const &): void */
	updateEntityInside(_1: object): void; /// ?updateEntityInside@Actor@@UEAAXAEBVAABB@@@Z
	/** updateEntityInside(void): void */
	updateEntityInside(): void; /// ?updateEntityInside@Actor@@UEAAXXZ
	/** updateInsideBlock(void): void */
	updateInsideBlock(): void; /// ?updateInsideBlock@Actor@@MEAAXXZ
	/** updateInvisibilityStatus(void): void */
	updateInvisibilityStatus(): void; /// ?updateInvisibilityStatus@Actor@@QEAAXXZ
	/** updateWaterState(void): bool */
	updateWaterState(): boolean; /// ?updateWaterState@Actor@@IEAA_NXZ
	/** wasHurt(void): bool */
	wasHurt(): boolean; /// ?wasHurt@Actor@@UEAA_NXZ
	/** wasLastHitByPlayer(void): bool */
	wasLastHitByPlayer(): boolean; /// ?wasLastHitByPlayer@Actor@@QEAA_NXZ
	/** wasLoadedFromNBTThisFrame(void): bool */
	wasLoadedFromNBTThisFrame(): boolean; /// ?wasLoadedFromNBTThisFrame@Actor@@QEBA_NXZ
	/** wobble(void): void */
	wobble(): void; /// ?wobble@Actor@@UEAAXXZ
}
declare class ScreenController {
	// Attributes 
	// Methods 
	// Inherited from ScreenController
}
declare class DXGI_ADAPTER_DESC1 {
	// Attributes 
	SharedSystemMemory: bigint;
	Description: object;
	VendorId: number;
	DeviceId: number;
	SubSysId: number;
	DedicatedVideoMemory: bigint;
	Revision: number;
	DedicatedSystemMemory: bigint;
	AdapterLuid: bigint;
	// Methods 
	// Inherited from DXGI_ADAPTER_DESC1
}
declare class InternalItemDescriptor {
	// Attributes 
	// Methods 
	// Inherited from InternalItemDescriptor
	/** clone(void): class std::unique_ptr<struct ItemDescriptor::BaseDescriptor,struct std::default_delete<struct ItemDescriptor::BaseDescriptor> > */
	clone(): unknown; /// ?clone@InternalItemDescriptor@@UEBA?AV?$unique_ptr@UBaseDescriptor@ItemDescriptor@@U?$default_delete@UBaseDescriptor@ItemDescriptor@@@std@@@std@@XZ
	/** getFullName(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64 */
	getFullName(): unknown; /// ?getFullName@InternalItemDescriptor@@UEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** getHash(void): unsigned __int64 */
	getHash(): bigint; /// ?getHash@InternalItemDescriptor@@UEBA_KXZ
	/** getItem(void): struct ItemDescriptor::ItemEntry */
	getItem(): unknown; /// ?getItem@InternalItemDescriptor@@UEBA?AUItemEntry@ItemDescriptor@@XZ
	/** sameItem(ItemDescriptor::ItemEntry const &,bool): bool */
	sameItem(_1: object, _2: boolean): boolean; /// ?sameItem@InternalItemDescriptor@@UEBA_NAEBUItemEntry@ItemDescriptor@@_N@Z
	/** save(void): class std::optional<class CompoundTag> */
	save(): unknown; /// ?save@InternalItemDescriptor@@UEBA?AV?$optional@VCompoundTag@@@std@@XZ
	/** serialize(BinaryStream &): void */
	serialize(_1: object): void; /// ?serialize@InternalItemDescriptor@@UEBAXAEAVBinaryStream@@@Z
	toMap(): bigint; /// ?toMap@InternalItemDescriptor@@UEBA?AV?$map@V?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@V12@U?$less@V?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@@2@V?$allocator@U?$pair@$$CBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@V12@@std@@@2@@std@@XZ
}
declare class DXInterface {
	// Attributes 
	adapterDesc: DXGI_ADAPTER_DESC1;
	output: DXGI_OUTPUT_DESC;
	// Methods 
	// Inherited from DXInterface
}
declare class DimMapIterator {
	// Attributes 
	next: object;
	dimensionId: number;
	dimensionPtr: Dimension;
	// Methods 
	// Inherited from DimMapIterator
}
declare class Inventory {
	// Attributes 
	owner: Actor;
	vtable: object;
	// Methods 
	// Inherited from Inventory
	/** add(ItemStack &): bool */
	add(_1: object): boolean; /// ?add@Inventory@@UEAA_NAEAVItemStack@@@Z
	/** canAdd(ItemStack const &): bool */
	canAdd(_1: object): boolean; /// ?canAdd@Inventory@@UEBA_NAEBVItemStack@@@Z
	/** getComplexItems(void): class std::vector<class ItemStack,class std::allocator<class ItemStack> > */
	getComplexItems(): unknown; /// ?getComplexItems@Inventory@@QEAA?AV?$vector@VItemStack@@V?$allocator@VItemStack@@@std@@@std@@XZ
	/** getEmptySlotsCount(void): int */
	getEmptySlotsCount(): number; /// ?getEmptySlotsCount@Inventory@@UEBAHXZ
	/** getFirstEmptySlot(void): int */
	getFirstEmptySlot(): number; /// ?getFirstEmptySlot@Inventory@@UEBAHXZ
	/** init(void): void */
	init(): void; /// ?init@Inventory@@UEAAXXZ
	/** setContainerSize(int): void */
	setContainerSize(_1: number): void; /// ?setContainerSize@Inventory@@UEAAXH@Z
	/** setItem(int,ItemStack const &): void */
	setItem(_1: number, _2: object): void; /// ?setItem@Inventory@@UEAAXHAEBVItemStack@@@Z
	/** setItemWithForceBalance(int,ItemStack const &,bool): void */
	setItemWithForceBalance(_1: number, _2: object, _3: boolean): void; /// ?setItemWithForceBalance@Inventory@@UEAAXHAEBVItemStack@@_N@Z
	// Inherited from FillingContainer
	/** _fixBackwardCompabilityItem(ItemStack &): void */
	_fixBackwardCompabilityItem(_1: object): void; /// ?_fixBackwardCompabilityItem@FillingContainer@@IEAAXAEAVItemStack@@@Z
	/** _getFreeSlot(void): int */
	_getFreeSlot(): number; /// ?_getFreeSlot@FillingContainer@@IEBAHXZ
	/** _getSlot(int): int */
	_getSlot(_1: number): number; /// ?_getSlot@FillingContainer@@IEBAHH@Z
	/** _getSlotWithRemainingSpace(ItemStack const &): int */
	_getSlotWithRemainingSpace(_1: object): number; /// ?_getSlotWithRemainingSpace@FillingContainer@@IEBAHAEBVItemStack@@@Z
	/** _isCreative(void): bool */
	_isCreative(): boolean; /// ?_isCreative@FillingContainer@@IEBA_NXZ
	/** _release(int): void */
	_release(_1: number): void; /// ?_release@FillingContainer@@IEAAXH@Z
	/** clearInventory(int): int */
	clearInventory(_1: number): number; /// ?clearInventory@FillingContainer@@UEAAHH@Z
	/** clearSlot(int): void */
	clearSlot(_1: number): void; /// ?clearSlot@FillingContainer@@UEAAXH@Z
	/** getContainerSize(void): int */
	getContainerSize(): number; /// ?getContainerSize@FillingContainer@@UEBAHXZ
	/** getItem(int): class ItemStack const & __ptr64 */
	getItem(_1: number): ItemStack; /// ?getItem@FillingContainer@@UEBAAEBVItemStack@@H@Z
	/** getMaxStackSize(void): int */
	getMaxStackSize(): number; /// ?getMaxStackSize@FillingContainer@@UEBAHXZ
	/** load(ListTag const &,SemVersion const &,Level &): void */
	load(_1: object, _2: object, _3: object): void; /// ?load@FillingContainer@@UEAAXAEBVListTag@@AEBVSemVersion@@AEAVLevel@@@Z
	/** removeItem(int,int): void */
	removeItem(_1: number, _2: number): void; /// ?removeItem@FillingContainer@@UEAAXHH@Z
	/** removeResource(ItemStack const &,bool,bool,int): int */
	removeResource(_1: object, _2: boolean, _3: boolean, _4: number): number; /// ?removeResource@FillingContainer@@QEAAHAEBVItemStack@@_N1H@Z
	/** removeResource(int): bool */
	removeResource(_1: number): boolean; /// ?removeResource@FillingContainer@@QEAA_NH@Z
	/** save(void): class std::unique_ptr<class ListTag,struct std::default_delete<class ListTag> > */
	save(): unknown; /// ?save@FillingContainer@@QEBA?AV?$unique_ptr@VListTag@@U?$default_delete@VListTag@@@std@@@std@@XZ
	/** swapSlots(int,int): void */
	swapSlots(_1: number, _2: number): void; /// ?swapSlots@FillingContainer@@QEAAXHH@Z
	// Inherited from Container
	/** addAdditionalSaveData(CompoundTag &): void */
	addAdditionalSaveData(_1: object): void; /// ?addAdditionalSaveData@Container@@UEAAXAEAVCompoundTag@@@Z
	/** addContentChangeListener(ContainerContentChangeListener *): void */
	addContentChangeListener(_1: object): void; /// ?addContentChangeListener@Container@@UEAAXPEAVContainerContentChangeListener@@@Z
	/** addItem(ItemStack &): bool */
	addItem(_1: object): boolean; /// ?addItem@Container@@UEAA_NAEAVItemStack@@@Z
	/** addItemToFirstEmptySlot(ItemStack const &): bool */
	addItemToFirstEmptySlot(_1: object): boolean; /// ?addItemToFirstEmptySlot@Container@@UEAA_NAEBVItemStack@@@Z
	/** dropContents(BlockSource &,Vec3 const &,bool): void */
	dropContents(_1: object, _2: object, _3: boolean): void; /// ?dropContents@Container@@UEAAXAEAVBlockSource@@AEBVVec3@@_N@Z
	/** findFirstSlotForItem(ItemStack const &): int */
	findFirstSlotForItem(_1: object): number; /// ?findFirstSlotForItem@Container@@UEBAHAEBVItemStack@@@Z
	/** getItemCount(ItemStack const &): int */
	getItemCount(_1: object): number; /// ?getItemCount@Container@@UEBAHAEBVItemStack@@@Z
	/** getRedstoneSignalFromContainer(BlockSource &): int */
	getRedstoneSignalFromContainer(_1: object): number; /// ?getRedstoneSignalFromContainer@Container@@QEAAHAEAVBlockSource@@@Z
	/** getRuntimeId(void): class TypedRuntimeId<struct ContainerRuntimeIdTag,unsigned int,0> const & __ptr64 */
	getRuntimeId(): unknown; /// ?getRuntimeId@Container@@QEBAAEBV?$TypedRuntimeId@UContainerRuntimeIdTag@@I$0A@@@XZ
	/** getSlotCopies(void): class std::vector<class ItemStack,class std::allocator<class ItemStack> > */
	getSlotCopies(): unknown; /// ?getSlotCopies@Container@@UEBA?AV?$vector@VItemStack@@V?$allocator@VItemStack@@@std@@@std@@XZ
	/** getSlots(void): class std::vector<class ItemStack const * __ptr64,class std::allocator<class ItemStack const * __ptr64> > const */
	getSlots(): unknown; /// ?getSlots@Container@@UEBA?BV?$vector@PEBVItemStack@@V?$allocator@PEBVItemStack@@@std@@@std@@XZ
	/** hasRoomForItem(ItemStack const &): bool */
	hasRoomForItem(_1: object): boolean; /// ?hasRoomForItem@Container@@UEAA_NAEBVItemStack@@@Z
	/** initRuntimeId(void): void */
	initRuntimeId(): void; /// ?initRuntimeId@Container@@QEAAXXZ
	/** isEmpty(void): bool */
	isEmpty(): boolean; /// ?isEmpty@Container@@UEBA_NXZ
	/** readAdditionalSaveData(CompoundTag const &): void */
	readAdditionalSaveData(_1: object): void; /// ?readAdditionalSaveData@Container@@UEAAXAEBVCompoundTag@@@Z
	/** removeAllItems(void): void */
	removeAllItems(): void; /// ?removeAllItems@Container@@UEAAXXZ
	/** removeContentChangeListener(ContainerContentChangeListener *): void */
	removeContentChangeListener(_1: object): void; /// ?removeContentChangeListener@Container@@UEAAXPEAVContainerContentChangeListener@@@Z
	/** setContainerChanged(int): void */
	setContainerChanged(_1: number): void; /// ?setContainerChanged@Container@@UEAAXH@Z
	/** setContainerMoved(void): void */
	setContainerMoved(): void; /// ?setContainerMoved@Container@@UEAAXXZ
	/** triggerTransactionChange(int,ItemStack const &,ItemStack const &): void */
	triggerTransactionChange(_1: number, _2: object, _3: object): void; /// ?triggerTransactionChange@Container@@QEAAXHAEBVItemStack@@0@Z
}
declare class Dimension {
	// Attributes 
	circuitSystem: object;
	name: SDKText;
	hasCeiling: number;
	levelPtr: Level;
	minHeight: number;
	maxHeight: number;
	weather: object;
	brightnessRamp: object;
	_hasSkylight: number;
	name2: SDKText;
	dimensionId: number;
	isUltraWarm: number;
	skyDarken: number;
	chunkSource: object;
	seasons: object;
	entityMap: SDKUnorderedMap;
	tickingAreas: object;
	chunkBuildOrderPolicy: object;
	// Methods 
	// Inherited from Dimension
	/** _createChunkBuildOrderPolicy(void): class std::unique_ptr<class ChunkBuildOrderPolicyBase,struct std::default_delete<class ChunkBuildOrderPolicyBase> > */
	_createChunkBuildOrderPolicy(): unknown; /// ?_createChunkBuildOrderPolicy@Dimension@@EEAA?AV?$unique_ptr@VChunkBuildOrderPolicyBase@@U?$default_delete@VChunkBuildOrderPolicyBase@@@std@@@std@@XZ
	/** _processEntityChunkTransfers(void): void */
	_processEntityChunkTransfers(): void; /// ?_processEntityChunkTransfers@Dimension@@AEAAXXZ
	/** _sendBlockEntityUpdatePacket(NetworkBlockPosition const &): void */
	_sendBlockEntityUpdatePacket(_1: object): void; /// ?_sendBlockEntityUpdatePacket@Dimension@@AEAAXAEBVNetworkBlockPosition@@@Z
	/** _sendBlocksChangedPackets(void): void */
	_sendBlocksChangedPackets(): void; /// ?_sendBlocksChangedPackets@Dimension@@AEAAXXZ
	/** _tickEntityChunkMoves(void): void */
	_tickEntityChunkMoves(): void; /// ?_tickEntityChunkMoves@Dimension@@AEAAXXZ
	/** addWither(ActorUniqueID const &): void */
	addWither(_1: object): void; /// ?addWither@Dimension@@QEAAXAEBUActorUniqueID@@@Z
	/** distanceToNearestPlayerSqr2D(Vec3): float */
	distanceToNearestPlayerSqr2D(_1: Vec3): number; /// ?distanceToNearestPlayerSqr2D@Dimension@@QEAAMVVec3@@@Z
	/** fetchAnyInteractablePlayer(Vec3 const &,float): class Player * __ptr64 */
	fetchAnyInteractablePlayer(_1: object, _2: number): Player; /// ?fetchAnyInteractablePlayer@Dimension@@QEBAPEAVPlayer@@AEBVVec3@@M@Z
	/** fetchAnyPlayer(Vec3 const &,float): class Player * __ptr64 */
	fetchAnyPlayer(_1: object, _2: number): Player; /// ?fetchAnyPlayer@Dimension@@QEBAPEAVPlayer@@AEBVVec3@@M@Z
	/** fetchEntity(ActorUniqueID,bool): class Actor * __ptr64 */
	fetchEntity(_1: unknown, _2: boolean): Actor; /// ?fetchEntity@Dimension@@QEAAPEAVActor@@UActorUniqueID@@_N@Z
	/** fetchNearestAttackablePlayer(Actor &,float): class Player * __ptr64 */
	fetchNearestAttackablePlayer(_1: object, _2: number): Player; /// ?fetchNearestAttackablePlayer@Dimension@@QEAAPEAVPlayer@@AEAVActor@@M@Z
	/** fetchNearestAttackablePlayer(BlockPos,float,Actor *): class Player * __ptr64 */
	fetchNearestAttackablePlayer(_1: BlockPos, _2: number, _3: object): Player; /// ?fetchNearestAttackablePlayer@Dimension@@QEAAPEAVPlayer@@VBlockPos@@MPEAVActor@@@Z
	/** fetchNearestInteractablePlayer(Actor &,float): class Player * __ptr64 */
	fetchNearestInteractablePlayer(_1: object, _2: number): Player; /// ?fetchNearestInteractablePlayer@Dimension@@QEBAPEAVPlayer@@AEAVActor@@M@Z
	/** fetchNearestInteractablePlayer(Vec3 const &,float): class Player * __ptr64 */
	fetchNearestInteractablePlayer(_1: object, _2: number): Player; /// ?fetchNearestInteractablePlayer@Dimension@@QEBAPEAVPlayer@@AEBVVec3@@M@Z
	/** getBlockSourceFromMainChunkSource(void): class BlockSource & __ptr64 */
	getBlockSourceFromMainChunkSource(): BlockSource; /// ?getBlockSourceFromMainChunkSource@Dimension@@QEBAAEAVBlockSource@@XZ
	/** getBrightnessDependentFogColor(mce::Color const &,float): class mce::Color */
	getBrightnessDependentFogColor(_1: object, _2: number): unknown; /// ?getBrightnessDependentFogColor@Dimension@@UEBA?AVColor@mce@@AEBV23@M@Z
	/** getBrightnessRamp(void): class DimensionBrightnessRamp const & __ptr64 */
	getBrightnessRamp(): unknown; /// ?getBrightnessRamp@Dimension@@UEBAAEBVDimensionBrightnessRamp@@XZ
	/** getChunkBuildOrderPolicy(void): class ChunkBuildOrderPolicyBase & __ptr64 */
	getChunkBuildOrderPolicy(): unknown; /// ?getChunkBuildOrderPolicy@Dimension@@QEAAAEAVChunkBuildOrderPolicyBase@@XZ
	/** getChunkLoadActionList(void): class gsl::not_null<class ChunkLoadActionList * __ptr64> */
	getChunkLoadActionList(): unknown; /// ?getChunkLoadActionList@Dimension@@QEAA?AV?$not_null@PEAVChunkLoadActionList@@@gsl@@XZ
	/** getClearColorScale(void): float */
	getClearColorScale(): number; /// ?getClearColorScale@Dimension@@UEAAMXZ
	/** getCloudHeight(void): short */
	getCloudHeight(): number; /// ?getCloudHeight@Dimension@@UEBAFXZ
	/** getDefaultBiome(void): class HashedString */
	getDefaultBiome(): unknown; /// ?getDefaultBiome@Dimension@@UEBA?AVHashedString@@XZ
	/** getDimensionId(void): class AutomaticID<class Dimension,int> */
	getDimensionId(): unknown; /// ?getDimensionId@Dimension@@QEBA?AV?$AutomaticID@VDimension@@H@@XZ
	getEntityIdMap(): bigint; /// ?getEntityIdMap@Dimension@@QEAAAEAV?$unordered_map@UActorUniqueID@@VWeakEntityRef@@U?$hash@UActorUniqueID@@@std@@U?$equal_to@UActorUniqueID@@@4@V?$allocator@U?$pair@$$CBUActorUniqueID@@VWeakEntityRef@@@std@@@4@@std@@XZ
	/** getLightTextureImageBuilder(void): class BaseLightTextureImageBuilder * __ptr64 */
	getLightTextureImageBuilder(): unknown; /// ?getLightTextureImageBuilder@Dimension@@UEBAPEAVBaseLightTextureImageBuilder@@XZ
	/** getMinHeight(void): short */
	getMinHeight(): number; /// ?getMinHeight@Dimension@@QEBAFXZ
	/** getMoonBrightness(void): float */
	getMoonBrightness(): number; /// ?getMoonBrightness@Dimension@@QEBAMXZ
	/** getMoonPhase(void): int */
	getMoonPhase(): number; /// ?getMoonPhase@Dimension@@QEBAHXZ
	/** getSunAngle(float): float */
	getSunAngle(_1: number): number; /// ?getSunAngle@Dimension@@QEBAMM@Z
	/** getSunIntensity(float,Vec3 const &,float): float */
	getSunIntensity(_1: number, _2: object, _3: number): number; /// ?getSunIntensity@Dimension@@UEBAMMAEBVVec3@@M@Z
	/** getTickingAreas(void): class TickingAreaList & __ptr64 */
	getTickingAreas(): unknown; /// ?getTickingAreas@Dimension@@QEAAAEAVTickingAreaList@@XZ
	/** getTimeOfDay(float): float */
	getTimeOfDay(_1: number): number; /// ?getTimeOfDay@Dimension@@QEBAMM@Z
	/** getTimeOfDay(int,float): float */
	getTimeOfDay(_1: number, _2: number): number; /// ?getTimeOfDay@Dimension@@MEBAMHM@Z
	/** getVillageManager(void): class std::unique_ptr<class VillageManager,struct std::default_delete<class VillageManager> > const & __ptr64 */
	getVillageManager(): unknown; /// ?getVillageManager@Dimension@@QEBAAEBV?$unique_ptr@VVillageManager@@U?$default_delete@VVillageManager@@@std@@@std@@XZ
	/** getWeather(void): class Weather & __ptr64 */
	getWeather(): unknown; /// ?getWeather@Dimension@@QEBAAEAVWeather@@XZ
	/** getWorldGenerator(void): class WorldGenerator * __ptr64 */
	getWorldGenerator(): unknown; /// ?getWorldGenerator@Dimension@@QEBAPEAVWorldGenerator@@XZ
	/** hasSkylight(void): bool */
	hasSkylight(): boolean; /// ?hasSkylight@Dimension@@QEBA_NXZ
	/** init(void): void */
	init(): void; /// ?init@Dimension@@UEAAXXZ
	/** is2DPositionRelevantForPlayer(BlockPos const &,Player &): bool */
	is2DPositionRelevantForPlayer(_1: object, _2: object): boolean; /// ?is2DPositionRelevantForPlayer@Dimension@@UEBA_NAEBVBlockPos@@AEAVPlayer@@@Z
	/** isActorRelevantForPlayer(Player &,Actor const &): bool */
	isActorRelevantForPlayer(_1: object, _2: object): boolean; /// ?isActorRelevantForPlayer@Dimension@@UEBA_NAEAVPlayer@@AEBVActor@@@Z
	/** isDay(void): bool */
	isDay(): boolean; /// ?isDay@Dimension@@UEBA_NXZ
	/** isRedstoneTick(void): bool */
	isRedstoneTick(): boolean; /// ?isRedstoneTick@Dimension@@QEAA_NXZ
	/** onBlockChanged(BlockSource &,BlockPos const &,uint,Block const &,Block const &,int,ActorBlockSyncMessage const *,BlockChangedEventTarget,Actor *): void */
	onBlockChanged(_1: object, _2: object, _3: bigint, _4: object, _5: object, _6: number, _7: object, _8: unknown, _9: object): void; /// ?onBlockChanged@Dimension@@UEAAXAEAVBlockSource@@AEBVBlockPos@@IAEBVBlock@@2HPEBUActorBlockSyncMessage@@W4BlockChangedEventTarget@@PEAVActor@@@Z
	/** onBlockEvent(BlockSource &,int,int,int,int,int): void */
	onBlockEvent(_1: object, _2: number, _3: number, _4: number, _5: number, _6: number): void; /// ?onBlockEvent@Dimension@@UEAAXAEAVBlockSource@@HHHHH@Z
	/** onChunkLoaded(ChunkSource &,LevelChunk &): void */
	onChunkLoaded(_1: object, _2: object): void; /// ?onChunkLoaded@Dimension@@UEAAXAEAVChunkSource@@AEAVLevelChunk@@@Z
	/** removeActorByID(ActorUniqueID const &): void */
	removeActorByID(_1: object): void; /// ?removeActorByID@Dimension@@QEAAXAEBUActorUniqueID@@@Z
	/** sendBroadcast(Packet const &,Player *): void */
	sendBroadcast(_1: object, _2: object): void; /// ?sendBroadcast@Dimension@@UEAAXAEBVPacket@@PEAVPlayer@@@Z
	/** sendPacketForEntity(Actor const &,Packet const &,Player const *): void */
	sendPacketForEntity(_1: object, _2: object, _3: object): void; /// ?sendPacketForEntity@Dimension@@QEAAXAEBVActor@@AEBVPacket@@PEBVPlayer@@@Z
	/** sendPacketForPosition(BlockPos const &,Packet const &,Player const *): void */
	sendPacketForPosition(_1: object, _2: object, _3: object): void; /// ?sendPacketForPosition@Dimension@@QEAAXAEBVBlockPos@@AEBVPacket@@PEBVPlayer@@@Z
	/** serialize(CompoundTag &): void */
	serialize(_1: object): void; /// ?serialize@Dimension@@UEBAXAEAVCompoundTag@@@Z
	/** startLeaveGame(void): void */
	startLeaveGame(): void; /// ?startLeaveGame@Dimension@@UEAAXXZ
	/** tick(void): void */
	tick(): void; /// ?tick@Dimension@@UEAAXXZ
	/** tickRedstone(void): void */
	tickRedstone(): void; /// ?tickRedstone@Dimension@@UEAAXXZ
	/** tryGarbageCollectStructures(void): void */
	tryGarbageCollectStructures(): void; /// ?tryGarbageCollectStructures@Dimension@@QEAAXXZ
	/** tryGetClosestPublicRegion(ChunkPos const &): class BlockSource * __ptr64 */
	tryGetClosestPublicRegion(_1: object): BlockSource; /// ?tryGetClosestPublicRegion@Dimension@@QEBAPEAVBlockSource@@AEBVChunkPos@@@Z
	/** tryLoadLimboEntities(ChunkPos const &): void */
	tryLoadLimboEntities(_1: object): void; /// ?tryLoadLimboEntities@Dimension@@QEAAXAEBVChunkPos@@@Z
	/** updateDimensionBlockSourceTick(void): void */
	updateDimensionBlockSourceTick(): void; /// ?updateDimensionBlockSourceTick@Dimension@@QEAAXXZ
}
declare class LevelRenderer {
	// Attributes 
	viewProj: Mat4x4;
	viewProj3d: Mat3x4;
	// Methods 
	// Inherited from LevelRenderer
}
declare class LevelData {
	// Attributes 
	worldTemplate: WorldTemplateData;
	gameRules: GameRules;
	abilities: Abilities;
	worldName: SDKText;
	storageVersion: number;
	minimumCompatibleVersion: GameVersion;
	worldCenter: BlockPos;
	time: number;
	serverChunkTickRange: number;
	rainLevel: number;
	rainTime: number;
	lightningLevel: number;
	lightningTime: number;
	platformBroadcastMode: number;
	netherScale: number;
	bonusChestSpawned: number;
	commandsEnabled: number;
	gameDifficulty: number;
	worldStartCount: number;
	forceGameType: number;
	educationProductId: SDKText;
	achievmentsDisabled: number;
	educationEditionOffer: number;
	educationFeaturesEnabled: number;
	xblBroadcastIntent: number;
	confirmedPlatformLockedContent: number;
	multiplayerGameIntent: number;
	_isMultiplayerGame: number;
	lanBroadcastIntent: number;
	personaDisabled: number;
	lanBroadcast: number;
	xblBroadcastMode: number;
	mapsCenteredToOrigin: number;
	isFromLockedTemplate: number;
	platformBroadcastIntent: number;
	texturepacksRequired: number;
	lockedBehaviorPack: number;
	lockedResourcePack: number;
	useMsaGamertagsOnly: number;
	netherType: number;
	startWithMapEnabled: number;
	onlySpawnV1Villagers: number;
	customSkinsDisabled: number;
	spawnDimension: number;
	// Methods 
	// Inherited from LevelData
	/** LevelData(bool) */
	LevelData(_1: boolean): LevelData; /// ??0LevelData@@QEAA@_N@Z
	/** _determineMaxBaseGameVersion(void): void */
	_determineMaxBaseGameVersion(): void; /// ?_determineMaxBaseGameVersion@LevelData@@AEAAXXZ
	/** _setValue(HashedString const &,LevelDataValue &&): void */
	_setValue(_1: object, _2: object): void; /// ?_setValue@LevelData@@AEAAXAEBVHashedString@@$$QEAULevelDataValue@@@Z
	/** achievementsWillBeDisabledOnLoad(void): bool */
	achievementsWillBeDisabledOnLoad(): boolean; /// ?achievementsWillBeDisabledOnLoad@LevelData@@QEBA_NXZ
	/** disableAchievements(void): void */
	disableAchievements(): void; /// ?disableAchievements@LevelData@@QEAAXXZ
	/** getBaseGameVersion(void): class BaseGameVersion const & __ptr64 */
	getBaseGameVersion(): BaseGameVersion; /// ?getBaseGameVersion@LevelData@@QEBAAEBVBaseGameVersion@@XZ
	/** getEduSharedUriResource(void): class CompoundTag const & __ptr64 */
	getEduSharedUriResource(): CompoundTag; /// ?getEduSharedUriResource@LevelData@@QEBAAEBVCompoundTag@@XZ
	/** getEducationProductId(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64 */
	getEducationProductId(): unknown; /// ?getEducationProductId@LevelData@@QEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** getGameType(void): enum GameType */
	getGameType(): bigint; /// ?getGameType@LevelData@@QEBA?AW4GameType@@XZ
	/** getGenerator(void): enum GeneratorType */
	getGenerator(): bigint; /// ?getGenerator@LevelData@@QEBA?AW4GeneratorType@@XZ
	/** getNetherType(void): enum NetherWorldType */
	getNetherType(): bigint; /// ?getNetherType@LevelData@@QEBA?AW4NetherWorldType@@XZ
	/** getSeed(void): class LevelSeed64 */
	getSeed(): unknown; /// ?getSeed@LevelData@@QEBA?AVLevelSeed64@@XZ
	/** getSpawnPos(void): class BlockPos const & __ptr64 */
	getSpawnPos(): BlockPos; /// ?getSpawnPos@LevelData@@QEBAAEBVBlockPos@@XZ
	/** getStorageVersion(void): enum StorageVersion */
	getStorageVersion(): bigint; /// ?getStorageVersion@LevelData@@QEBA?AW4StorageVersion@@XZ
	/** getStoredGenerator(void): enum GeneratorType */
	getStoredGenerator(): bigint; /// ?getStoredGenerator@LevelData@@QEBA?AW4GeneratorType@@XZ
	/** getTagData(CompoundTag const &): void */
	getTagData(_1: object): void; /// ?getTagData@LevelData@@QEAAXAEBVCompoundTag@@@Z
	/** getWorldVersion(void): enum WorldVersion */
	getWorldVersion(): bigint; /// ?getWorldVersion@LevelData@@QEBA?AW4WorldVersion@@XZ
	/** isEducationEditionLevel(void): bool */
	isEducationEditionLevel(): boolean; /// ?isEducationEditionLevel@LevelData@@QEBA_NXZ
	/** isLegacyLevel(void): bool */
	isLegacyLevel(): boolean; /// ?isLegacyLevel@LevelData@@QEBA_NXZ
	/** isMultiplayerGame(void): bool */
	isMultiplayerGame(): boolean; /// ?isMultiplayerGame@LevelData@@QEBA_NXZ
	/** setDataDrivenGenerator(GeneratorType): void */
	setDataDrivenGenerator(_1: unknown): void; /// ?setDataDrivenGenerator@LevelData@@QEAAXW4GeneratorType@@@Z
	/** setGameType(GameType): void */
	setGameType(_1: unknown): void; /// ?setGameType@LevelData@@QEAAXW4GameType@@@Z
	/** setSeed(LevelSeed64): void */
	setSeed(_1: unknown): void; /// ?setSeed@LevelData@@QEAAXVLevelSeed64@@@Z
	/** setSpawnPos(BlockPos const &): void */
	setSpawnPos(_1: object): void; /// ?setSpawnPos@LevelData@@QEAAXAEBVBlockPos@@@Z
	/** setWorldVersion(WorldVersion): void */
	setWorldVersion(_1: unknown): void; /// ?setWorldVersion@LevelData@@QEAAXW4WorldVersion@@@Z
	/** touchLastLoadedWithVersion(void): void */
	touchLastLoadedWithVersion(): void; /// ?touchLastLoadedWithVersion@LevelData@@QEAAXXZ
}
declare class FloatAbility {
	// Attributes 
	state: number;
	data: number;
	permissions: number;
	// Methods 
	// Inherited from FloatAbility
}
declare class FontRepository_FontList_FontEntry {
	// Attributes 
	font: Font;
	// Methods 
	// Inherited from FontRepository_FontList_FontEntry
}
declare class Font {
	// Attributes 
	// Methods 
	// Inherited from Font
}
declare class FontRepository {
	// Attributes 
	vtable: object;
	fontList: FontRepository_FontList;
	// Methods 
	// Inherited from FontRepository
}
declare class GameVersion {
	// Attributes 
	patch: number;
	major: number;
	minor: number;
	// Methods 
	// Inherited from GameVersion
	/** GameVersion(GameVersion const &) */
	GameVersion(_1: object): GameVersion; /// ??0GameVersion@@QEAA@AEBV0@@Z
	/** GameVersion(uint,uint,uint,uint,uint) */
	GameVersion(_1: bigint, _2: bigint, _3: bigint, _4: bigint, _5: bigint): GameVersion; /// ??0GameVersion@@QEAA@IIIII@Z
	/** GameVersion(void) */
	GameVersion(): GameVersion; /// ??0GameVersion@@QEAA@XZ
	/** serialize(void): class std::unique_ptr<class ListTag,struct std::default_delete<class ListTag> > */
	serialize(): unknown; /// ?serialize@GameVersion@@QEBA?AV?$unique_ptr@VListTag@@U?$default_delete@VListTag@@@std@@@std@@XZ
}
declare class HitResult {
	// Attributes 
	rayHitType: number;
	entityPtr2: Actor;
	blockPos: BlockPos;
	blockSide: number;
	rayHitVec: Vec3;
	entityPtr: Actor;
	// Methods 
	// Inherited from HitResult
	/** HitResult(HitResult &&) */
	HitResult(_1: object): HitResult; /// ??0HitResult@@QEAA@$$QEAV0@@Z
	/** HitResult(HitResult const &) */
	HitResult(_1: object): HitResult; /// ??0HitResult@@QEAA@AEBV0@@Z
	/** HitResult(Vec3 const &,Vec3 const &,Actor &) */
	HitResult(_1: object, _2: object, _3: object): HitResult; /// ??0HitResult@@QEAA@AEBVVec3@@0AEAVActor@@@Z
	/** HitResult(Vec3 const &,Vec3 const &,Actor &,Vec3 const &) */
	HitResult(_1: object, _2: object, _3: object, _4: object): HitResult; /// ??0HitResult@@QEAA@AEBVVec3@@0AEAVActor@@0@Z
	/** HitResult(Vec3 const &,Vec3 const &,Vec3 const &) */
	HitResult(_1: object, _2: object, _3: object): HitResult; /// ??0HitResult@@QEAA@AEBVVec3@@00@Z
	/** HitResult(void) */
	HitResult(): HitResult; /// ??0HitResult@@QEAA@XZ
	/** getEntity(void): class Actor * __ptr64 */
	getEntity(): Actor; /// ?getEntity@HitResult@@QEBAPEAVActor@@XZ
}
declare class Mat3x4 {
	// Attributes 
	// Methods 
	// Inherited from Mat3x4
}
declare class ItemStackNetIdVariant {
	// Attributes 
	// Methods 
	// Inherited from ItemStackNetIdVariant
	/** ItemStackNetIdVariant(ItemStackNetIdVariant &&) */
	ItemStackNetIdVariant(_1: object): ItemStackNetIdVariant; /// ??0ItemStackNetIdVariant@@QEAA@$$QEAU0@@Z
	/** isValid(void): bool */
	isValid(): boolean; /// ?isValid@ItemStackNetIdVariant@@QEBA_NXZ
}
declare class LevelWeakPtr {
	// Attributes 
	ptr: Level;
	// Methods 
	// Inherited from LevelWeakPtr
}
declare class ItemDescriptor {
	// Attributes 
	descriptor: InternalItemDescriptor;
	// Methods 
	// Inherited from ItemDescriptor
	/** ItemDescriptor(Item const &,int) */
	ItemDescriptor(_1: object, _2: number): ItemDescriptor; /// ??0ItemDescriptor@@QEAA@AEBVItem@@H@Z
	/** ItemDescriptor(ItemDescriptor &&) */
	ItemDescriptor(_1: object): ItemDescriptor; /// ??0ItemDescriptor@@QEAA@$$QEAV0@@Z
	/** ItemDescriptor(ItemDescriptor const &) */
	ItemDescriptor(_1: object): ItemDescriptor; /// ??0ItemDescriptor@@QEAA@AEBV0@@Z
	/** ItemDescriptor(ItemStack const &) */
	ItemDescriptor(_1: object): ItemDescriptor; /// ??0ItemDescriptor@@QEAA@AEBVItemStack@@@Z
	/** ItemDescriptor(ItemTag const &) */
	ItemDescriptor(_1: object): ItemDescriptor; /// ??0ItemDescriptor@@QEAA@AEBUItemTag@@@Z
	/** ItemDescriptor(void) */
	ItemDescriptor(): ItemDescriptor; /// ??0ItemDescriptor@@QEAA@XZ
	/** _resolve(void): void */
	_resolve(): void; /// ?_resolve@ItemDescriptor@@AEBAXXZ
	/** bindType(void): void */
	bindType(): void; /// ?bindType@ItemDescriptor@@SAXXZ
	/** getAuxValue(void): short */
	getAuxValue(): number; /// ?getAuxValue@ItemDescriptor@@QEBAFXZ
	/** getBlock(void): class Block const * __ptr64 */
	getBlock(): Block; /// ?getBlock@ItemDescriptor@@QEBAPEBVBlock@@XZ
	/** getId(void): short */
	getId(): number; /// ?getId@ItemDescriptor@@QEBAFXZ
	/** getIdAux(void): int */
	getIdAux(): number; /// ?getIdAux@ItemDescriptor@@QEBAHXZ
	/** getItem(void): class Item const * __ptr64 */
	getItem(): Item; /// ?getItem@ItemDescriptor@@QEBAPEBVItem@@XZ
	/** getRawNameId(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	getRawNameId(): unknown; /// ?getRawNameId@ItemDescriptor@@QEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** isNull(void): bool */
	isNull(): boolean; /// ?isNull@ItemDescriptor@@QEBA_NXZ
	/** sameItem(ItemStack const &,bool): bool */
	sameItem(_1: object, _2: boolean): boolean; /// ?sameItem@ItemDescriptor@@QEBA_NAEBVItemStack@@_N@Z
	/** serialize(BinaryStream &): void */
	serialize(_1: object): void; /// ?serialize@ItemDescriptor@@UEBAXAEAVBinaryStream@@@Z
	/** serialize(Json::Value &): void */
	serialize(_1: object): void; /// ?serialize@ItemDescriptor@@UEBAXAEAVValue@Json@@@Z
	toMap(_1: object): bigint; /// ?toMap@ItemDescriptor@@CA?AV?$map@V?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@V12@U?$less@V?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@@2@V?$allocator@U?$pair@$$CBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@V12@@std@@@2@@std@@AEBV1@@Z
}
declare class ItemDescriptorCount {
	// Attributes 
	descriptor: InternalItemDescriptor;
	// Methods 
	// Inherited from ItemDescriptorCount
	/** ItemDescriptorCount(ItemDescriptor const &,ushort) */
	ItemDescriptorCount(_1: object, _2: number): ItemDescriptorCount; /// ??0ItemDescriptorCount@@QEAA@AEBVItemDescriptor@@G@Z
	/** ItemDescriptorCount(void) */
	ItemDescriptorCount(): ItemDescriptorCount; /// ??0ItemDescriptorCount@@QEAA@XZ
	// Inherited from ItemDescriptor
	/** _resolve(void): void */
	_resolve(): void; /// ?_resolve@ItemDescriptor@@AEBAXXZ
	/** bindType(void): void */
	bindType(): void; /// ?bindType@ItemDescriptor@@SAXXZ
	/** getAuxValue(void): short */
	getAuxValue(): number; /// ?getAuxValue@ItemDescriptor@@QEBAFXZ
	/** getBlock(void): class Block const * __ptr64 */
	getBlock(): Block; /// ?getBlock@ItemDescriptor@@QEBAPEBVBlock@@XZ
	/** getId(void): short */
	getId(): number; /// ?getId@ItemDescriptor@@QEBAFXZ
	/** getIdAux(void): int */
	getIdAux(): number; /// ?getIdAux@ItemDescriptor@@QEBAHXZ
	/** getItem(void): class Item const * __ptr64 */
	getItem(): Item; /// ?getItem@ItemDescriptor@@QEBAPEBVItem@@XZ
	/** getRawNameId(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	getRawNameId(): unknown; /// ?getRawNameId@ItemDescriptor@@QEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** isNull(void): bool */
	isNull(): boolean; /// ?isNull@ItemDescriptor@@QEBA_NXZ
	/** sameItem(ItemStack const &,bool): bool */
	sameItem(_1: object, _2: boolean): boolean; /// ?sameItem@ItemDescriptor@@QEBA_NAEBVItemStack@@_N@Z
	/** serialize(BinaryStream &): void */
	serialize(_1: object): void; /// ?serialize@ItemDescriptor@@UEBAXAEAVBinaryStream@@@Z
	/** serialize(Json::Value &): void */
	serialize(_1: object): void; /// ?serialize@ItemDescriptor@@UEBAXAEAVValue@Json@@@Z
	toMap(_1: object): bigint; /// ?toMap@ItemDescriptor@@CA?AV?$map@V?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@V12@U?$less@V?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@@2@V?$allocator@U?$pair@$$CBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@V12@@std@@@2@@std@@AEBV1@@Z
}
declare class Level {
	// Attributes 
	blockDefinitionGroup: AnyPtr;
	vtable: object;
	hitResult: HitResult;
	userList: SDKVectorContainer;
	packetSender: object;
	playerList: SDKVectorContainer;
	actorInfoRegistry: AnyPtr;
	random: Random;
	runtimeEntityMap: SDKUnorderedMap;
	recipes: object;
	savedDataStorage: object;
	portalForcer: object;
	photoStorage: object;
	levelDataWrapper: LevelDataWrapper;
	random2: Random;
	blockComponentFactory: AnyPtr;
	spawner: object;
	projectileFactory: object;
	immersiveReaderString: SDKText;
	mobList: SDKVectorContainer;
	actorPropertyGroup: AnyPtr;
	npcDialogueStorage: object;
	behaviorFactory: AnyPtr;
	behaviorTreeGroup: AnyPtr;
	playerListUUID: SDKUnorderedMap;
	blockPalette: BlockPalette;
	blockReducer: AnyPtr;
	dimensionMap: SDKUnorderedMap;
	globalActors: SDKVectorContainer;
	spinLock: SpinLock;
	liquidHitResult: HitResult;
	//	netEventCallback: Bedrock::NonOwnerPointer;
	isSimPaused: number;
	// Methods 
	// Inherited from Level
	/** _checkUserStorage(void): void */
	_checkUserStorage(): void; /// ?_checkUserStorage@Level@@UEAAXXZ
	/** _cleanupDisconnectedPlayers(void): void */
	_cleanupDisconnectedPlayers(): void; /// ?_cleanupDisconnectedPlayers@Level@@AEAAXXZ
	/** _clientHandleAddOwnedEntity(EntityNetId): class StackRefResultT<struct EntityRefTraits> */
	_clientHandleAddOwnedEntity(_1: unknown): unknown; /// ?_clientHandleAddOwnedEntity@Level@@UEAA?AV?$StackRefResultT@UEntityRefTraits@@@@VEntityNetId@@@Z
	/** _clientHandleRemoveOwnedEntity(EntityNetId): void */
	_clientHandleRemoveOwnedEntity(_1: unknown): void; /// ?_clientHandleRemoveOwnedEntity@Level@@UEAAXVEntityNetId@@@Z
	/** _createMapSavedData(ActorUniqueID const &): class MapItemSavedData & __ptr64 */
	_createMapSavedData(_1: object): unknown; /// ?_createMapSavedData@Level@@AEAAAEAVMapItemSavedData@@AEBUActorUniqueID@@@Z
	/** _destroyEffect(BlockPos const &,Block const &,int): void */
	_destroyEffect(_1: object, _2: object, _3: number): void; /// ?_destroyEffect@Level@@UEAAXAEBVBlockPos@@AEBVBlock@@H@Z
	/** _handleChangeDimensionRequests(void): void */
	_handleChangeDimensionRequests(): void; /// ?_handleChangeDimensionRequests@Level@@AEAAXXZ
	/** _loadAutonomousEntities(void): void */
	_loadAutonomousEntities(): void; /// ?_loadAutonomousEntities@Level@@AEAAXXZ
	/** _loadBiomeData(void): void */
	_loadBiomeData(): void; /// ?_loadBiomeData@Level@@AEAAXXZ
	/** _loadMapData(ActorUniqueID const &): class MapItemSavedData * __ptr64 */
	_loadMapData(_1: object): unknown; /// ?_loadMapData@Level@@AEAAPEAVMapItemSavedData@@AEBUActorUniqueID@@@Z
	/** _playerChangeDimension(Player *,ChangeDimensionRequest &): bool */
	_playerChangeDimension(_1: object, _2: object): boolean; /// ?_playerChangeDimension@Level@@AEAA_NPEAVPlayer@@AEAVChangeDimensionRequest@@@Z
	/** _processPlayerNetworking(void): void */
	_processPlayerNetworking(): void; /// ?_processPlayerNetworking@Level@@AEAAXXZ
	/** _removePlayerFromPlayerList(Player const * const): class mce::UUID */
	_removePlayerFromPlayerList(_1: object): unknown; /// ?_removePlayerFromPlayerList@Level@@AEAA?AVUUID@mce@@QEBVPlayer@@@Z
	/** _saveAutonomousEntities(void): void */
	_saveAutonomousEntities(): void; /// ?_saveAutonomousEntities@Level@@AEAAXXZ
	/** _saveSomeChunks(void): void */
	_saveSomeChunks(): void; /// ?_saveSomeChunks@Level@@AEAAXXZ
	/** _suspendPlayer(mce::UUID const &): void */
	_suspendPlayer(_1: object): void; /// ?_suspendPlayer@Level@@AEAAXAEBVUUID@mce@@@Z
	/** _syncTime(int): void */
	_syncTime(_1: number): void; /// ?_syncTime@Level@@AEAAXH@Z
	/** addBlockSourceForValidityTracking(BlockSource *): void */
	addBlockSourceForValidityTracking(_1: object): void; /// ?addBlockSourceForValidityTracking@Level@@UEAAXPEAVBlockSource@@@Z
	/** addBossEventListener(BossEventListener *): void */
	addBossEventListener(_1: object): void; /// ?addBossEventListener@Level@@UEAAXPEAVBossEventListener@@@Z
	/** addBreakingItemParticleEffect(Vec3 const &,ParticleType,TextureUVCoordinateSet const &,bool): void */
	addBreakingItemParticleEffect(_1: object, _2: unknown, _3: object, _4: boolean): void; /// ?addBreakingItemParticleEffect@Level@@UEAAXAEBVVec3@@W4ParticleType@@AEBUTextureUVCoordinateSet@@_N@Z
	/** addLevelComponents(EntityContext &,IRandom &,bool): void */
	addLevelComponents(_1: object, _2: object, _3: boolean): void; /// ?addLevelComponents@Level@@SAXAEAVEntityContext@@AEAVIRandom@@_N@Z
	/** addListener(LevelListener &): void */
	addListener(_1: object): void; /// ?addListener@Level@@UEAAXAEAVLevelListener@@@Z
	/** addParticle(ParticleType,Vec3 const &,Vec3 const &,int,CompoundTag const *,bool): class Particle * __ptr64 */
	addParticle(_1: unknown, _2: object, _3: object, _4: number, _5: object, _6: boolean): unknown; /// ?addParticle@Level@@UEAAPEAVParticle@@W4ParticleType@@AEBVVec3@@1HPEBVCompoundTag@@_N@Z
	/** addParticleEffect(HashedString const &,Vec3 const &,MolangVariableMap const &): void */
	addParticleEffect(_1: object, _2: object, _3: object): void; /// ?addParticleEffect@Level@@UEAAXAEBVHashedString@@AEBVVec3@@AEBVMolangVariableMap@@@Z
	/** addTerrainParticleEffect(BlockPos const &,Block const &,Vec3 const &,float,float,float): void */
	addTerrainParticleEffect(_1: object, _2: object, _3: object, _4: number, _5: number, _6: number): void; /// ?addTerrainParticleEffect@Level@@UEAAXAEBVBlockPos@@AEBVBlock@@AEBVVec3@@MMM@Z
	/** addTerrainSlideEffect(BlockPos const &,Block const &,Vec3 const &,float,float,float): void */
	addTerrainSlideEffect(_1: object, _2: object, _3: object, _4: number, _5: number, _6: number): void; /// ?addTerrainSlideEffect@Level@@UEAAXAEBVBlockPos@@AEBVBlock@@AEBVVec3@@MMM@Z
	/** animateTick(Actor &): void */
	animateTick(_1: object): void; /// ?animateTick@Level@@UEAAXAEAVActor@@@Z
	/** applyLiquidPhysicsToActor(Actor *,MaterialType): void */
	applyLiquidPhysicsToActor(_1: object, _2: unknown): void; /// ?applyLiquidPhysicsToActor@Level@@UEAAXPEAVActor@@W4MaterialType@@@Z
	/** areBossEventListenersReady(void): bool */
	areBossEventListenersReady(): boolean; /// ?areBossEventListenersReady@Level@@UEAA_NXZ
	/** broadcastActorEvent(Actor &,ActorEvent,int): void */
	broadcastActorEvent(_1: object, _2: unknown, _3: number): void; /// ?broadcastActorEvent@Level@@UEAAXAEAVActor@@W4ActorEvent@@H@Z
	/** broadcastBossEvent(BossEventUpdateType): void */
	broadcastBossEvent(_1: unknown): void; /// ?broadcastBossEvent@Level@@UEAAXW4BossEventUpdateType@@@Z
	/** broadcastBossEvent(BossEventUpdateType,ActorUniqueID const &,BossEventPacket const &): void */
	broadcastBossEvent(_1: unknown, _2: object, _3: object): void; /// ?broadcastBossEvent@Level@@UEAAXW4BossEventUpdateType@@AEBUActorUniqueID@@AEBVBossEventPacket@@@Z
	/** broadcastLevelEvent(LevelEvent,CompoundTag const &,UserEntityIdentifierComponent const *): void */
	broadcastLevelEvent(_1: unknown, _2: object, _3: object): void; /// ?broadcastLevelEvent@Level@@UEAAXW4LevelEvent@@AEBVCompoundTag@@PEBVUserEntityIdentifierComponent@@@Z
	/** broadcastLevelEvent(LevelEvent,Vec3 const &,int,UserEntityIdentifierComponent const *): void */
	broadcastLevelEvent(_1: unknown, _2: object, _3: number, _4: object): void; /// ?broadcastLevelEvent@Level@@UEAAXW4LevelEvent@@AEBVVec3@@HPEBVUserEntityIdentifierComponent@@@Z
	/** broadcastLocalEvent(BlockSource &,LevelEvent,Vec3 const &,Block const &): void */
	broadcastLocalEvent(_1: object, _2: unknown, _3: object, _4: object): void; /// ?broadcastLocalEvent@Level@@UEAAXAEAVBlockSource@@W4LevelEvent@@AEBVVec3@@AEBVBlock@@@Z
	/** broadcastLocalEvent(BlockSource &,LevelEvent,Vec3 const &,int): void */
	broadcastLocalEvent(_1: object, _2: unknown, _3: object, _4: number): void; /// ?broadcastLocalEvent@Level@@UEAAXAEAVBlockSource@@W4LevelEvent@@AEBVVec3@@H@Z
	/** broadcastSoundEvent(BlockSource &,LevelSoundEvent,Vec3 const &,Block const &,ActorDefinitionIdentifier const &,bool,bool): void */
	broadcastSoundEvent(_1: object, _2: unknown, _3: object, _4: object, _5: object, _6: boolean, _7: boolean): void; /// ?broadcastSoundEvent@Level@@UEAAXAEAVBlockSource@@W4LevelSoundEvent@@AEBVVec3@@AEBVBlock@@AEBUActorDefinitionIdentifier@@_N5@Z
	/** broadcastSoundEvent(BlockSource &,LevelSoundEvent,Vec3 const &,int,ActorDefinitionIdentifier const &,bool,bool): void */
	broadcastSoundEvent(_1: object, _2: unknown, _3: object, _4: number, _5: object, _6: boolean, _7: boolean): void; /// ?broadcastSoundEvent@Level@@UEAAXAEAVBlockSource@@W4LevelSoundEvent@@AEBVVec3@@HAEBUActorDefinitionIdentifier@@_N4@Z
	/** broadcastSoundEvent(Dimension &,LevelSoundEvent,Vec3 const &,int,ActorDefinitionIdentifier const &,bool,bool): void */
	broadcastSoundEvent(_1: object, _2: unknown, _3: object, _4: number, _5: object, _6: boolean, _7: boolean): void; /// ?broadcastSoundEvent@Level@@UEAAXAEAVDimension@@W4LevelSoundEvent@@AEBVVec3@@HAEBUActorDefinitionIdentifier@@_N4@Z
	/** copyAndLockMap(ActorUniqueID,ActorUniqueID): bool */
	copyAndLockMap(_1: unknown, _2: unknown): boolean; /// ?copyAndLockMap@Level@@UEAA_NUActorUniqueID@@0@Z
	/** countUsersWithMatchingNetworkId(NetworkIdentifier const &): int */
	countUsersWithMatchingNetworkId(_1: object): number; /// ?countUsersWithMatchingNetworkId@Level@@UEBAHAEBVNetworkIdentifier@@@Z
	/** createPhotoStorage(void): void */
	createPhotoStorage(): void; /// ?createPhotoStorage@Level@@UEAAXXZ
	/** denyEffect(BlockSource &,Vec3 const &): void */
	denyEffect(_1: object, _2: object): void; /// ?denyEffect@Level@@UEAAXAEAVBlockSource@@AEBVVec3@@@Z
	/** destroyBlock(BlockSource &,BlockPos const &,bool): bool */
	destroyBlock(_1: object, _2: object, _3: boolean): boolean; /// ?destroyBlock@Level@@UEAA_NAEAVBlockSource@@AEBVBlockPos@@_N@Z
	/** digestServerBlockProperties(StartGamePacket const &,uint): void */
	digestServerBlockProperties(_1: object, _2: bigint): void; /// ?digestServerBlockProperties@Level@@UEAAXAEBVStartGamePacket@@I@Z
	/** digestServerItemComponents(ItemComponentPacket const &): void */
	digestServerItemComponents(_1: object): void; /// ?digestServerItemComponents@Level@@UEAAXAEBVItemComponentPacket@@@Z
	/** expandMapByID(ActorUniqueID,bool): struct ActorUniqueID */
	expandMapByID(_1: unknown, _2: boolean): unknown; /// ?expandMapByID@Level@@UEAA?AUActorUniqueID@@U2@_N@Z
	/** explode(BlockSource &,Actor *,Vec3 const &,float,bool,bool,float,bool): void */
	explode(_1: object, _2: object, _3: object, _4: number, _5: boolean, _6: boolean, _7: number, _8: boolean): void; /// ?explode@Level@@UEAAXAEAVBlockSource@@PEAVActor@@AEBVVec3@@M_N3M3@Z
	/** explode(Explosion &): void */
	explode(_1: object): void; /// ?explode@Level@@UEAAXAEAVExplosion@@@Z
	/** extinguishFire(BlockSource &,BlockPos const &,uchar): bool */
	extinguishFire(_1: object, _2: object, _3: number): boolean; /// ?extinguishFire@Level@@UEAA_NAEAVBlockSource@@AEBVBlockPos@@E@Z
	/** fetchEntity(ActorUniqueID,bool): class Actor * __ptr64 */
	fetchEntity(_1: unknown, _2: boolean): Actor; /// ?fetchEntity@Level@@UEBAPEAVActor@@UActorUniqueID@@_N@Z
	/** findPath(Actor &,Actor &,NavigationComponent &): class std::unique_ptr<class Path,struct std::default_delete<class Path> > */
	findPath(_1: object, _2: object, _3: object): unknown; /// ?findPath@Level@@UEAA?AV?$unique_ptr@VPath@@U?$default_delete@VPath@@@std@@@std@@AEAVActor@@0AEAVNavigationComponent@@@Z
	/** findPath(Actor &,int,int,int,NavigationComponent &): class std::unique_ptr<class Path,struct std::default_delete<class Path> > */
	findPath(_1: object, _2: number, _3: number, _4: number, _5: object): unknown; /// ?findPath@Level@@UEAA?AV?$unique_ptr@VPath@@U?$default_delete@VPath@@@std@@@std@@AEAVActor@@HHHAEAVNavigationComponent@@@Z
	/** flushRunTimeLighting(void): void */
	flushRunTimeLighting(): void; /// ?flushRunTimeLighting@Level@@UEAAXXZ
	/** forceRemoveEntity(Actor &): void */
	forceRemoveEntity(_1: object): void; /// ?forceRemoveEntity@Level@@UEAAXAEAVActor@@@Z
	/** forceRemoveEntityfromWorld(Actor &): void */
	forceRemoveEntityfromWorld(_1: object): void; /// ?forceRemoveEntityfromWorld@Level@@UEAAXAEAVActor@@@Z
	/** getActiveAutonomousActors(void): class std::vector<class WeakEntityRef,class std::allocator<class WeakEntityRef> > & __ptr64 */
	getActiveAutonomousActors(): unknown; /// ?getActiveAutonomousActors@Level@@UEAAAEAV?$vector@VWeakEntityRef@@V?$allocator@VWeakEntityRef@@@std@@@std@@XZ
	/** getActivePlayerCount(void): int */
	getActivePlayerCount(): number; /// ?getActivePlayerCount@Level@@UEBAHXZ
	/** getActiveUsersCount(void): int */
	getActiveUsersCount(): number; /// ?getActiveUsersCount@Level@@UEBAHXZ
	/** getActorAnimationControllerGroup(void): class ActorAnimationControllerGroup * __ptr64 */
	getActorAnimationControllerGroup(): unknown; /// ?getActorAnimationControllerGroup@Level@@UEBAPEAVActorAnimationControllerGroup@@XZ
	/** getActorAnimationGroup(void): class gsl::not_null<class Bedrock::NonOwnerPointer<class ActorAnimationGroup> > */
	getActorAnimationGroup(): unknown; /// ?getActorAnimationGroup@Level@@UEBA?AV?$not_null@V?$NonOwnerPointer@VActorAnimationGroup@@@Bedrock@@@gsl@@XZ
	/** getActorEventCoordinator(void): class ActorEventCoordinator & __ptr64 */
	getActorEventCoordinator(): unknown; /// ?getActorEventCoordinator@Level@@UEAAAEAVActorEventCoordinator@@XZ
	/** getActorFactory(void): class ActorFactory const & __ptr64 */
	getActorFactory(): unknown; /// ?getActorFactory@Level@@UEBAAEBVActorFactory@@XZ
	/** getActorInfoRegistry(void): class ActorInfoRegistry * __ptr64 */
	getActorInfoRegistry(): unknown; /// ?getActorInfoRegistry@Level@@UEAAPEAVActorInfoRegistry@@XZ
	/** getActorPropertyGroup(void): class PropertyGroupManager & __ptr64 */
	getActorPropertyGroup(): unknown; /// ?getActorPropertyGroup@Level@@UEBAAEAVPropertyGroupManager@@XZ
	/** getAdventureSettings(void): struct AdventureSettings const & __ptr64 */
	getAdventureSettings(): unknown; /// ?getAdventureSettings@Level@@QEBAAEBUAdventureSettings@@XZ
	/** getBehaviorFactory(void): class BehaviorFactory & __ptr64 */
	getBehaviorFactory(): unknown; /// ?getBehaviorFactory@Level@@UEBAAEAVBehaviorFactory@@XZ
	/** getBehaviorTreeGroup(void): class BehaviorTreeGroup & __ptr64 */
	getBehaviorTreeGroup(): unknown; /// ?getBehaviorTreeGroup@Level@@UEBAAEAVBehaviorTreeGroup@@XZ
	/** getBiomeComponentFactory(void): class BiomeComponentFactory const & __ptr64 */
	getBiomeComponentFactory(): unknown; /// ?getBiomeComponentFactory@Level@@UEBAAEBVBiomeComponentFactory@@XZ
	/** getBiomeRegistry(void): class BiomeRegistry const & __ptr64 */
	getBiomeRegistry(): unknown; /// ?getBiomeRegistry@Level@@UEBAAEBVBiomeRegistry@@XZ
	/** getBlockComponentFactory(void): class BlockComponentFactory const & __ptr64 */
	getBlockComponentFactory(): unknown; /// ?getBlockComponentFactory@Level@@UEBAAEBVBlockComponentFactory@@XZ
	/** getBlockDefinitions(void): class BlockDefinitionGroup * __ptr64 */
	getBlockDefinitions(): unknown; /// ?getBlockDefinitions@Level@@UEBAPEAVBlockDefinitionGroup@@XZ
	/** getBlockEventCoordinator(void): class BlockEventCoordinator & __ptr64 */
	getBlockEventCoordinator(): unknown; /// ?getBlockEventCoordinator@Level@@UEAAAEAVBlockEventCoordinator@@XZ
	/** getBlockPalette(void): class BlockPalette const & __ptr64 */
	getBlockPalette(): BlockPalette; /// ?getBlockPalette@Level@@UEBAAEBVBlockPalette@@XZ
	/** getBlockReducer(void): class BlockReducer * __ptr64 */
	getBlockReducer(): unknown; /// ?getBlockReducer@Level@@UEBAPEAVBlockReducer@@XZ
	/** getBlockRegistry(void): class std::weak_ptr<class BlockTypeRegistry> */
	getBlockRegistry(): unknown; /// ?getBlockRegistry@Level@@UEBA?AV?$weak_ptr@VBlockTypeRegistry@@@std@@XZ
	/** getChunkTickRange(void): unsigned int */
	getChunkTickRange(): bigint; /// ?getChunkTickRange@Level@@UEBAIXZ
	/** getClientPlayerEventCoordinator(void): class ClientPlayerEventCoordinator & __ptr64 */
	getClientPlayerEventCoordinator(): unknown; /// ?getClientPlayerEventCoordinator@Level@@UEAAAEAVClientPlayerEventCoordinator@@XZ
	/** getCurrentServerTick(void): struct Tick const */
	getCurrentServerTick(): unknown; /// ?getCurrentServerTick@Level@@UEBA?BUTick@@XZ
	/** getCurrentTick(void): struct Tick const & __ptr64 */
	getCurrentTick(): unknown; /// ?getCurrentTick@Level@@UEBAAEBUTick@@XZ
	/** getDefaultAbilities(void): class Abilities & __ptr64 */
	getDefaultAbilities(): Abilities; /// ?getDefaultAbilities@Level@@UEAAAEAVAbilities@@XZ
	/** getDefaultGameType(void): enum GameType */
	getDefaultGameType(): bigint; /// ?getDefaultGameType@Level@@UEBA?AW4GameType@@XZ
	/** getDefaultPermissions(void): class PermissionsHandler const & __ptr64 */
	getDefaultPermissions(): unknown; /// ?getDefaultPermissions@Level@@UEBAAEBVPermissionsHandler@@XZ
	/** getDefaultSpawn(void): class BlockPos const & __ptr64 */
	getDefaultSpawn(): BlockPos; /// ?getDefaultSpawn@Level@@UEBAAEBVBlockPos@@XZ
	/** getDifficulty(void): enum Difficulty */
	getDifficulty(): bigint; /// ?getDifficulty@Level@@UEBA?AW4Difficulty@@XZ
	/** getDimensionConversionData(void): class DimensionConversionData */
	getDimensionConversionData(): unknown; /// ?getDimensionConversionData@Level@@UEBA?AVDimensionConversionData@@XZ
	/** getDimensionDefinitionGroup(void): class std::optional<class DimensionDefinitionGroup> const */
	getDimensionDefinitionGroup(): unknown; /// ?getDimensionDefinitionGroup@Level@@UEBA?BV?$optional@VDimensionDefinitionGroup@@@std@@XZ
	/** getDimensionFactory(void): class Factory<class Dimension,class Level & __ptr64,class Scheduler & __ptr64> const & __ptr64 */
	getDimensionFactory(): unknown; /// ?getDimensionFactory@Level@@UEBAAEBV?$Factory@VDimension@@AEAVLevel@@AEAVScheduler@@@@XZ
	/** getDisablePlayerInteractions(void): bool */
	getDisablePlayerInteractions(): boolean; /// ?getDisablePlayerInteractions@Level@@UEBA_NXZ
	/** getEducationLevelSettings(void): class std::optional<struct EducationLevelSettings> const & __ptr64 */
	getEducationLevelSettings(): unknown; /// ?getEducationLevelSettings@Level@@UEBAAEBV?$optional@UEducationLevelSettings@@@std@@XZ
	/** getEntities(void): class std::vector<class OwnerPtrT<struct EntityRefTraits>,class std::allocator<class OwnerPtrT<struct EntityRefTraits> > > const & __ptr64 */
	getEntities(): unknown; /// ?getEntities@Level@@UEBAAEBV?$vector@V?$OwnerPtrT@UEntityRefTraits@@@@V?$allocator@V?$OwnerPtrT@UEntityRefTraits@@@@@std@@@std@@XZ
	/** getEntityDefinitions(void): class ActorDefinitionGroup * __ptr64 */
	getEntityDefinitions(): unknown; /// ?getEntityDefinitions@Level@@UEBAPEAVActorDefinitionGroup@@XZ
	/** getEntityRegistry(void): class StackRefResultT<struct EntityRegistryRefTraits> */
	getEntityRegistry(): unknown; /// ?getEntityRegistry@Level@@UEAA?AV?$StackRefResultT@UEntityRegistryRefTraits@@@@XZ
	/** getEntitySystems(void): class EntitySystems & __ptr64 */
	getEntitySystems(): unknown; /// ?getEntitySystems@Level@@UEAAAEAVEntitySystems@@XZ
	/** getEventing(void): class IMinecraftEventing & __ptr64 */
	getEventing(): unknown; /// ?getEventing@Level@@UEAAAEAVIMinecraftEventing@@XZ
	/** getFeatureRegistry(void): class FeatureRegistry const & __ptr64 */
	getFeatureRegistry(): unknown; /// ?getFeatureRegistry@Level@@UEBAAEBVFeatureRegistry@@XZ
	/** getFeatureTypeFactory(void): class FeatureTypeFactory const & __ptr64 */
	getFeatureTypeFactory(): unknown; /// ?getFeatureTypeFactory@Level@@UEBAAEBVFeatureTypeFactory@@XZ
	/** getGameRules(void): class GameRules const & __ptr64 */
	getGameRules(): GameRules; /// ?getGameRules@Level@@UEBAAEBVGameRules@@XZ
	/** getHitResult(void): class HitResult & __ptr64 */
	getHitResult(): HitResult; /// ?getHitResult@Level@@UEAAAEAVHitResult@@XZ
	/** getIOTasksGroup(void): class TaskGroup & __ptr64 */
	getIOTasksGroup(): unknown; /// ?getIOTasksGroup@Level@@UEAAAEAVTaskGroup@@XZ
	/** getImmersiveReaderString(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64 */
	getImmersiveReaderString(): unknown; /// ?getImmersiveReaderString@Level@@UEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** getInternalComponentRegistry(void): class InternalComponentRegistry & __ptr64 */
	getInternalComponentRegistry(): unknown; /// ?getInternalComponentRegistry@Level@@UEBAAEAVInternalComponentRegistry@@XZ
	/** getItemEventCoordinator(void): class ItemEventCoordinator & __ptr64 */
	getItemEventCoordinator(): unknown; /// ?getItemEventCoordinator@Level@@UEAAAEAVItemEventCoordinator@@XZ
	/** getItemRegistry(void): class ItemRegistryRef */
	getItemRegistry(): unknown; /// ?getItemRegistry@Level@@UEBA?AVItemRegistryRef@@XZ
	/** getJigsawStructureRegistry(void): class JigsawStructureRegistry const & __ptr64 */
	getJigsawStructureRegistry(): unknown; /// ?getJigsawStructureRegistry@Level@@UEBAAEBVJigsawStructureRegistry@@XZ
	/** getLANBroadcast(void): bool */
	getLANBroadcast(): boolean; /// ?getLANBroadcast@Level@@UEBA_NXZ
	/** getLANBroadcastIntent(void): bool */
	getLANBroadcastIntent(): boolean; /// ?getLANBroadcastIntent@Level@@UEBA_NXZ
	/** getLevelData(void): class LevelData const & __ptr64 */
	getLevelData(): LevelData; /// ?getLevelData@Level@@UEBAAEBVLevelData@@XZ
	/** getLevelEntity(void): class WeakRefT<struct EntityRefTraits> */
	getLevelEntity(): unknown; /// ?getLevelEntity@Level@@UEAA?AV?$WeakRefT@UEntityRefTraits@@@@XZ
	/** getLevelEventCoordinator(void): class LevelEventCoordinator & __ptr64 */
	getLevelEventCoordinator(): unknown; /// ?getLevelEventCoordinator@Level@@UEAAAEAVLevelEventCoordinator@@XZ
	/** getLevelId(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	getLevelId(): unknown; /// ?getLevelId@Level@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** getLevelStorage(void): class LevelStorage const & __ptr64 */
	getLevelStorage(): unknown; /// ?getLevelStorage@Level@@UEBAAEBVLevelStorage@@XZ
	/** getLightTextureImageBuilderFactory(void): class Factory<class BaseLightTextureImageBuilder,class Level & __ptr64,class Scheduler & __ptr64> const & __ptr64 */
	getLightTextureImageBuilderFactory(): unknown; /// ?getLightTextureImageBuilderFactory@Level@@UEBAAEBV?$Factory@VBaseLightTextureImageBuilder@@AEAVLevel@@AEAVScheduler@@@@XZ
	/** getLiquidHitResult(void): class HitResult & __ptr64 */
	getLiquidHitResult(): HitResult; /// ?getLiquidHitResult@Level@@UEAAAEAVHitResult@@XZ
	/** getLootTables(void): class LootTables & __ptr64 */
	getLootTables(): unknown; /// ?getLootTables@Level@@UEAAAEAVLootTables@@XZ
	/** getMapSavedData(ActorUniqueID): class MapItemSavedData * __ptr64 */
	getMapSavedData(_1: unknown): unknown; /// ?getMapSavedData@Level@@UEAAPEAVMapItemSavedData@@UActorUniqueID@@@Z
	/** getMapSavedData(CompoundTag const *): class MapItemSavedData * __ptr64 */
	getMapSavedData(_1: object): unknown; /// ?getMapSavedData@Level@@UEAAPEAVMapItemSavedData@@PEBVCompoundTag@@@Z
	/** getMob(ActorUniqueID): class Mob * __ptr64 */
	getMob(_1: unknown): Mob; /// ?getMob@Level@@UEBAPEAVMob@@UActorUniqueID@@@Z
	/** getMultiplayerGameIntent(void): bool */
	getMultiplayerGameIntent(): boolean; /// ?getMultiplayerGameIntent@Level@@UEBA_NXZ
	/** getNetEventCallback(void): class Bedrock::NonOwnerPointer<class NetEventCallback> */
	getNetEventCallback(): unknown; /// ?getNetEventCallback@Level@@UEBA?AV?$NonOwnerPointer@VNetEventCallback@@@Bedrock@@XZ
	/** getNetherScale(void): int */
	getNetherScale(): number; /// ?getNetherScale@Level@@UEBAHXZ
	/** getNewPlayerId(void): int */
	getNewPlayerId(): number; /// ?getNewPlayerId@Level@@UEBAHXZ
	/** getNewUniqueID(void): struct ActorUniqueID */
	getNewUniqueID(): unknown; /// ?getNewUniqueID@Level@@UEAA?AUActorUniqueID@@XZ
	/** getNextRuntimeID(void): class ActorRuntimeID */
	getNextRuntimeID(): unknown; /// ?getNextRuntimeID@Level@@UEAA?AVActorRuntimeID@@XZ
	/** getNumRemotePlayers(void): int */
	getNumRemotePlayers(): number; /// ?getNumRemotePlayers@Level@@UEAAHXZ
	/** getOwnedInactiveAutonomousActors(void): class std::vector<class OwnerPtrT<struct EntityRefTraits>,class std::allocator<class OwnerPtrT<struct EntityRefTraits> > > & __ptr64 */
	getOwnedInactiveAutonomousActors(): unknown; /// ?getOwnedInactiveAutonomousActors@Level@@UEAAAEAV?$vector@V?$OwnerPtrT@UEntityRefTraits@@@@V?$allocator@V?$OwnerPtrT@UEntityRefTraits@@@@@std@@@std@@XZ
	/** getPacketSender(void): class PacketSender * __ptr64 */
	getPacketSender(): unknown; /// ?getPacketSender@Level@@UEBAPEAVPacketSender@@XZ
	/** getPauseManager(void): class StackRefResultT<struct SharePtrRefTraits<class PauseManager const> > */
	getPauseManager(): unknown; /// ?getPauseManager@Level@@UEBA?AV?$StackRefResultT@U?$SharePtrRefTraits@$$CBVPauseManager@@@@@@XZ
	/** getPhotoStorage(void): class PhotoStorage & __ptr64 */
	getPhotoStorage(): unknown; /// ?getPhotoStorage@Level@@UEAAAEAVPhotoStorage@@XZ
	/** getPlatformBroadcastIntent(void): enum Social::GamePublishSetting */
	getPlatformBroadcastIntent(): bigint; /// ?getPlatformBroadcastIntent@Level@@UEBA?AW4GamePublishSetting@Social@@XZ
	/** getPlatformBroadcastMode(void): enum Social::GamePublishSetting */
	getPlatformBroadcastMode(): bigint; /// ?getPlatformBroadcastMode@Level@@UEBA?AW4GamePublishSetting@Social@@XZ
	/** getPlayer(ActorUniqueID): class Player * __ptr64 */
	getPlayer(_1: unknown): Player; /// ?getPlayer@Level@@UEBAPEAVPlayer@@UActorUniqueID@@@Z
	/** getPlayer(mce::UUID const &): class Player * __ptr64 */
	getPlayer(_1: object): Player; /// ?getPlayer@Level@@UEBAPEAVPlayer@@AEBVUUID@mce@@@Z
	/** getPlayerAbilities(ActorUniqueID const &): class LayeredAbilities * __ptr64 */
	getPlayerAbilities(_1: object): unknown; /// ?getPlayerAbilities@Level@@UEAAPEAVLayeredAbilities@@AEBUActorUniqueID@@@Z
	/** getPlayerColor(Player const &): class mce::Color */
	getPlayerColor(_1: object): unknown; /// ?getPlayerColor@Level@@UEBA?AVColor@mce@@AEBVPlayer@@@Z
	getPlayerList(): bigint; /// ?getPlayerList@Level@@UEBAAEBV?$unordered_map@VUUID@mce@@VPlayerListEntry@@U?$hash@VUUID@mce@@@std@@U?$equal_to@VUUID@mce@@@5@V?$allocator@U?$pair@$$CBVUUID@mce@@VPlayerListEntry@@@std@@@5@@std@@XZ
	/** getPlayerMovementSettings(void): struct PlayerMovementSettings const & __ptr64 */
	getPlayerMovementSettings(): unknown; /// ?getPlayerMovementSettings@Level@@UEBAAEBUPlayerMovementSettings@@XZ
	/** getPlayerNames(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	getPlayerNames(): unknown; /// ?getPlayerNames@Level@@UEAA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** getPlayerPlatformOnlineId(mce::UUID const &): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64 */
	getPlayerPlatformOnlineId(_1: object): unknown; /// ?getPlayerPlatformOnlineId@Level@@UEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@AEBVUUID@mce@@@Z
	/** getPlayerXUID(mce::UUID const &): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64 */
	getPlayerXUID(_1: object): unknown; /// ?getPlayerXUID@Level@@UEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@AEBVUUID@mce@@@Z
	/** getPortalForcer(void): class PortalForcer & __ptr64 */
	getPortalForcer(): unknown; /// ?getPortalForcer@Level@@UEAAAEAVPortalForcer@@XZ
	/** getPositionTrackerDBClient(void): class PositionTrackingDB::PositionTrackingDBClient * __ptr64 */
	getPositionTrackerDBClient(): unknown; /// ?getPositionTrackerDBClient@Level@@UEBAPEAVPositionTrackingDBClient@PositionTrackingDB@@XZ
	/** getPrimaryLocalPlayer(void): class Player * __ptr64 */
	getPrimaryLocalPlayer(): Player; /// ?getPrimaryLocalPlayer@Level@@UEBAPEAVPlayer@@XZ
	/** getProjectileFactory(void): class ProjectileFactory & __ptr64 */
	getProjectileFactory(): unknown; /// ?getProjectileFactory@Level@@UEBAAEAVProjectileFactory@@XZ
	/** getRandom(void): class Random & __ptr64 */
	getRandom(): Random; /// ?getRandom@Level@@UEBAAEAVRandom@@XZ
	/** getRandomPlayer(void): class Player * __ptr64 */
	getRandomPlayer(): Player; /// ?getRandomPlayer@Level@@UEAAPEAVPlayer@@XZ
	/** getRecipes(void): class Recipes & __ptr64 */
	getRecipes(): unknown; /// ?getRecipes@Level@@UEBAAEAVRecipes@@XZ
	/** getRegisteredBorderBlock(void): class BlockLegacy const & __ptr64 */
	getRegisteredBorderBlock(): unknown; /// ?getRegisteredBorderBlock@Level@@UEBAAEBVBlockLegacy@@XZ
	/** getRemotePlayerEventCoordinator(void): class PlayerEventCoordinator & __ptr64 */
	getRemotePlayerEventCoordinator(): unknown; /// ?getRemotePlayerEventCoordinator@Level@@UEAAAEAVPlayerEventCoordinator@@XZ
	/** getRuntimeActorList(void): class std::vector<class Actor * __ptr64,class std::allocator<class Actor * __ptr64> > */
	getRuntimeActorList(): unknown; /// ?getRuntimeActorList@Level@@UEBA?AV?$vector@PEAVActor@@V?$allocator@PEAVActor@@@std@@@std@@XZ
	/** getRuntimeEntity(ActorRuntimeID,bool): class Actor * __ptr64 */
	getRuntimeEntity(_1: unknown, _2: boolean): Actor; /// ?getRuntimeEntity@Level@@UEBAPEAVActor@@VActorRuntimeID@@_N@Z
	/** getRuntimePlayer(ActorRuntimeID): class Player * __ptr64 */
	getRuntimePlayer(_1: unknown): Player; /// ?getRuntimePlayer@Level@@UEBAPEAVPlayer@@VActorRuntimeID@@@Z
	/** getScoreboard(void): class Scoreboard & __ptr64 */
	getScoreboard(): unknown; /// ?getScoreboard@Level@@UEAAAEAVScoreboard@@XZ
	/** getScreenshotsFolder(void): class Core::PathBuffer<class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > > */
	getScreenshotsFolder(): unknown; /// ?getScreenshotsFolder@Level@@UEBA?AV?$PathBuffer@V?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@@Core@@XZ
	/** getScriptingEventCoordinator(void): class ScriptingEventCoordinator & __ptr64 */
	getScriptingEventCoordinator(): unknown; /// ?getScriptingEventCoordinator@Level@@UEAAAEAVScriptingEventCoordinator@@XZ
	/** getSeed(void): unsigned int */
	getSeed(): bigint; /// ?getSeed@Level@@UEAAIXZ
	/** getServerNetworkEventCoordinator(void): class ServerNetworkEventCoordinator & __ptr64 */
	getServerNetworkEventCoordinator(): unknown; /// ?getServerNetworkEventCoordinator@Level@@UEAAAEAVServerNetworkEventCoordinator@@XZ
	/** getServerPlayerEventCoordinator(void): class ServerPlayerEventCoordinator & __ptr64 */
	getServerPlayerEventCoordinator(): unknown; /// ?getServerPlayerEventCoordinator@Level@@UEAAAEAVServerPlayerEventCoordinator@@XZ
	/** getSimPaused(void): bool */
	getSimPaused(): boolean; /// ?getSimPaused@Level@@UEAA_NXZ
	/** getSoundPlayer(void): class gsl::not_null<class Bedrock::NonOwnerPointer<class SoundPlayerInterface> > */
	getSoundPlayer(): unknown; /// ?getSoundPlayer@Level@@UEBA?AV?$not_null@V?$NonOwnerPointer@VSoundPlayerInterface@@@Bedrock@@@gsl@@XZ
	/** getSpawnGroupRegistry(void): class SpawnGroupRegistry const * __ptr64 */
	getSpawnGroupRegistry(): unknown; /// ?getSpawnGroupRegistry@Level@@UEBAPEBVSpawnGroupRegistry@@XZ
	/** getSpawnRules(void): class ActorSpawnRuleGroup const * __ptr64 */
	getSpawnRules(): unknown; /// ?getSpawnRules@Level@@UEBAPEBVActorSpawnRuleGroup@@XZ
	/** getSpawnSettings(void): struct SpawnSettings const & __ptr64 */
	getSpawnSettings(): unknown; /// ?getSpawnSettings@Level@@UEBAAEBUSpawnSettings@@XZ
	/** getSpawnableTickedMobCountPrevious(void): unsigned int */
	getSpawnableTickedMobCountPrevious(): bigint; /// ?getSpawnableTickedMobCountPrevious@Level@@UEBAIXZ
	/** getSpawner(void): class Spawner & __ptr64 */
	getSpawner(): unknown; /// ?getSpawner@Level@@UEBAAEAVSpawner@@XZ
	/** getStructureManager(void): class gsl::not_null<class Bedrock::NonOwnerPointer<class StructureManager> > const */
	getStructureManager(): unknown; /// ?getStructureManager@Level@@UEBA?BV?$not_null@V?$NonOwnerPointer@VStructureManager@@@Bedrock@@@gsl@@XZ
	/** getSurfaceBuilderRegistry(void): class SurfaceBuilderRegistry const & __ptr64 */
	getSurfaceBuilderRegistry(): unknown; /// ?getSurfaceBuilderRegistry@Level@@UEBAAEBVSurfaceBuilderRegistry@@XZ
	/** getSyncTasksGroup(void): class TaskGroup & __ptr64 */
	getSyncTasksGroup(): unknown; /// ?getSyncTasksGroup@Level@@UEAAAEAVTaskGroup@@XZ
	/** getTagRegistry(void): class TagRegistry<struct IDType<struct LevelTagIDType>,struct IDType<struct LevelTagSetIDType> > & __ptr64 */
	getTagRegistry(): unknown; /// ?getTagRegistry@Level@@UEAAAEAV?$TagRegistry@U?$IDType@ULevelTagIDType@@@@U?$IDType@ULevelTagSetIDType@@@@@@XZ
	/** getTearingDown(void): bool */
	getTearingDown(): boolean; /// ?getTearingDown@Level@@UEBA_NXZ
	/** getTickingArea(mce::UUID const &): class ITickingArea * __ptr64 */
	getTickingArea(_1: object): unknown; /// ?getTickingArea@Level@@UEBAPEAVITickingArea@@AEBVUUID@mce@@@Z
	/** getTickingAreasMgr(void): class TickingAreasManager & __ptr64 */
	getTickingAreasMgr(): unknown; /// ?getTickingAreasMgr@Level@@UEAAAEAVTickingAreasManager@@XZ
	/** getTime(void): int */
	getTime(): number; /// ?getTime@Level@@UEBAHXZ
	/** getUnknownBlockTypeRegistry(void): class IUnknownBlockTypeRegistry & __ptr64 */
	getUnknownBlockTypeRegistry(): unknown; /// ?getUnknownBlockTypeRegistry@Level@@UEAAAEAVIUnknownBlockTypeRegistry@@XZ
	/** getUserCount(void): int */
	getUserCount(): number; /// ?getUserCount@Level@@UEBAHXZ
	/** getXBLBroadcastIntent(void): enum Social::GamePublishSetting */
	getXBLBroadcastIntent(): bigint; /// ?getXBLBroadcastIntent@Level@@UEBA?AW4GamePublishSetting@Social@@XZ
	/** getXBLBroadcastMode(void): enum Social::GamePublishSetting */
	getXBLBroadcastMode(): bigint; /// ?getXBLBroadcastMode@Level@@UEBA?AW4GamePublishSetting@Social@@XZ
	/** handleLevelEvent(LevelEvent,CompoundTag const &): void */
	handleLevelEvent(_1: unknown, _2: object): void; /// ?handleLevelEvent@Level@@UEAAXW4LevelEvent@@AEBVCompoundTag@@@Z
	/** handleLevelEvent(LevelEvent,Vec3 const &,int): void */
	handleLevelEvent(_1: unknown, _2: object, _3: number): void; /// ?handleLevelEvent@Level@@UEAAXW4LevelEvent@@AEBVVec3@@H@Z
	/** handleSoundEvent(LevelSoundEvent,Vec3 const &,int,ActorDefinitionIdentifier const &,bool,bool): void */
	handleSoundEvent(_1: unknown, _2: object, _3: number, _4: object, _5: boolean, _6: boolean): void; /// ?handleSoundEvent@Level@@UEAAXW4LevelSoundEvent@@AEBVVec3@@HAEBUActorDefinitionIdentifier@@_N3@Z
	/** handleStopAllSounds(void): void */
	handleStopAllSounds(): void; /// ?handleStopAllSounds@Level@@UEAAXXZ
	/** hasCommandsEnabled(void): bool */
	hasCommandsEnabled(): boolean; /// ?hasCommandsEnabled@Level@@UEBA_NXZ
	/** hasLevelStorage(void): bool */
	hasLevelStorage(): boolean; /// ?hasLevelStorage@Level@@UEBA_NXZ
	/** hasPlatformBroadcast(void): bool */
	hasPlatformBroadcast(): boolean; /// ?hasPlatformBroadcast@Level@@UEBA_NXZ
	/** hasPlatformBroadcastIntent(void): bool */
	hasPlatformBroadcastIntent(): boolean; /// ?hasPlatformBroadcastIntent@Level@@UEBA_NXZ
	/** hasStartWithMapEnabled(void): bool */
	hasStartWithMapEnabled(): boolean; /// ?hasStartWithMapEnabled@Level@@UEBA_NXZ
	/** hasXBLBroadcast(void): bool */
	hasXBLBroadcast(): boolean; /// ?hasXBLBroadcast@Level@@UEBA_NXZ
	/** hasXBLBroadcastIntent(void): bool */
	hasXBLBroadcastIntent(): boolean; /// ?hasXBLBroadcastIntent@Level@@UEBA_NXZ
	/** incrementSpawnableTickedMob(void): void */
	incrementSpawnableTickedMob(): void; /// ?incrementSpawnableTickedMob@Level@@UEAAXXZ
	/** initializeBlockDefinitionGroup(void): void */
	initializeBlockDefinitionGroup(): void; /// ?initializeBlockDefinitionGroup@Level@@UEAAXXZ
	/** isChunkInTickRange(ChunkPos const &,Dimension const &,bool &,bool &): void */
	isChunkInTickRange(_1: object, _2: object, _3: object, _4: object): void; /// ?isChunkInTickRange@Level@@QEAAXAEBVChunkPos@@AEBVDimension@@AEA_N2@Z
	/** isClientSide(void): bool */
	isClientSide(): boolean; /// ?isClientSide@Level@@UEBA_NXZ
	/** isClientSideGenerationEnabled(void): bool */
	isClientSideGenerationEnabled(): boolean; /// ?isClientSideGenerationEnabled@Level@@UEAA_NXZ
	/** isEdu(void): bool */
	isEdu(): boolean; /// ?isEdu@Level@@UEBA_NXZ
	/** isExporting(void): bool */
	isExporting(): boolean; /// ?isExporting@Level@@UEBA_NXZ
	/** isLeaveGameDone(void): bool */
	isLeaveGameDone(): boolean; /// ?isLeaveGameDone@Level@@UEAA_NXZ
	/** isMultiplayerGame(void): bool */
	isMultiplayerGame(): boolean; /// ?isMultiplayerGame@Level@@UEBA_NXZ
	/** isPlayerSuspended(Player &): bool */
	isPlayerSuspended(_1: object): boolean; /// ?isPlayerSuspended@Level@@UEBA_NAEAVPlayer@@@Z
	/** loadBlockDefinitionGroup(Experiments const &): void */
	loadBlockDefinitionGroup(_1: object): void; /// ?loadBlockDefinitionGroup@Level@@UEAAXAEBVExperiments@@@Z
	/** moveActiveAutonomousActorToInactive(Actor &,LevelChunk *): void */
	moveActiveAutonomousActorToInactive(_1: object, _2: object): void; /// ?moveActiveAutonomousActorToInactive@Level@@UEAAXAEAVActor@@PEAVLevelChunk@@@Z
	/** onChunkDiscarded(LevelChunk &): void */
	onChunkDiscarded(_1: object): void; /// ?onChunkDiscarded@Level@@UEAAXAEAVLevelChunk@@@Z
	/** onChunkLoaded(ChunkSource &,LevelChunk &): void */
	onChunkLoaded(_1: object, _2: object): void; /// ?onChunkLoaded@Level@@UEAAXAEAVChunkSource@@AEAVLevelChunk@@@Z
	/** onChunkReload(Bounds const &): void */
	onChunkReload(_1: object): void; /// ?onChunkReload@Level@@UEAAXAEBUBounds@@@Z
	/** onChunkReloaded(ChunkSource &,LevelChunk &): void */
	onChunkReloaded(_1: object, _2: object): void; /// ?onChunkReloaded@Level@@UEAAXAEAVChunkSource@@AEAVLevelChunk@@@Z
	/** onPlayerDeath(Player &,ActorDamageSource const &): void */
	onPlayerDeath(_1: object, _2: object): void; /// ?onPlayerDeath@Level@@UEAAXAEAVPlayer@@AEBVActorDamageSource@@@Z
	/** onSourceCreated(BlockSource &): void */
	onSourceCreated(_1: object): void; /// ?onSourceCreated@Level@@UEAAXAEAVBlockSource@@@Z
	/** onSourceDestroyed(BlockSource &): void */
	onSourceDestroyed(_1: object): void; /// ?onSourceDestroyed@Level@@UEAAXAEAVBlockSource@@@Z
	/** playSound(BlockSource &,LevelSoundEvent,Vec3 const &,int,ActorDefinitionIdentifier const &,bool,bool): void */
	playSound(_1: object, _2: unknown, _3: object, _4: number, _5: object, _6: boolean, _7: boolean): void; /// ?playSound@Level@@UEAAXAEAVBlockSource@@W4LevelSoundEvent@@AEBVVec3@@HAEBUActorDefinitionIdentifier@@_N4@Z
	/** playSound(LevelSoundEvent,Vec3 const &,float,float): void */
	playSound(_1: unknown, _2: object, _3: number, _4: number): void; /// ?playSound@Level@@UEAAXW4LevelSoundEvent@@AEBVVec3@@MM@Z
	/** playSynchronizedSound(BlockSource &,LevelSoundEvent,Vec3 const &,Block const &,ActorDefinitionIdentifier const &,bool,bool): void */
	playSynchronizedSound(_1: object, _2: unknown, _3: object, _4: object, _5: object, _6: boolean, _7: boolean): void; /// ?playSynchronizedSound@Level@@UEAAXAEAVBlockSource@@W4LevelSoundEvent@@AEBVVec3@@AEBVBlock@@AEBUActorDefinitionIdentifier@@_N5@Z
	/** playSynchronizedSound(BlockSource &,LevelSoundEvent,Vec3 const &,int,ActorDefinitionIdentifier const &,bool,bool): void */
	playSynchronizedSound(_1: object, _2: unknown, _3: object, _4: number, _5: object, _6: boolean, _7: boolean): void; /// ?playSynchronizedSound@Level@@UEAAXAEAVBlockSource@@W4LevelSoundEvent@@AEBVVec3@@HAEBUActorDefinitionIdentifier@@_N4@Z
	/** playSynchronizedSound(Dimension &,LevelSoundEvent,Vec3 const &,int,ActorDefinitionIdentifier const &,bool,bool): void */
	playSynchronizedSound(_1: object, _2: unknown, _3: object, _4: number, _5: object, _6: boolean, _7: boolean): void; /// ?playSynchronizedSound@Level@@UEAAXAEAVDimension@@W4LevelSoundEvent@@AEBVVec3@@HAEBUActorDefinitionIdentifier@@_N4@Z
	/** potionSplash(Vec3 const &,mce::Color const &,bool): void */
	potionSplash(_1: object, _2: object, _3: boolean): void; /// ?potionSplash@Level@@UEAAXAEBVVec3@@AEBVColor@mce@@_N@Z
	/** pruneChunkViewTrackers(void): void */
	pruneChunkViewTrackers(): void; /// ?pruneChunkViewTrackers@Level@@UEAAXXZ
	/** removeActorAndTakeEntity(WeakEntityRef): class OwnerPtrT<struct EntityRefTraits> */
	removeActorAndTakeEntity(_1: unknown): unknown; /// ?removeActorAndTakeEntity@Level@@UEAA?AV?$OwnerPtrT@UEntityRefTraits@@@@VWeakEntityRef@@@Z
	/** removeActorFromWorldAndTakeEntity(WeakEntityRef): class OwnerPtrT<struct EntityRefTraits> */
	removeActorFromWorldAndTakeEntity(_1: unknown): unknown; /// ?removeActorFromWorldAndTakeEntity@Level@@UEAA?AV?$OwnerPtrT@UEntityRefTraits@@@@VWeakEntityRef@@@Z
	/** removeBlockSourceFromValidityTracking(BlockSource *): void */
	removeBlockSourceFromValidityTracking(_1: object): void; /// ?removeBlockSourceFromValidityTracking@Level@@UEAAXPEAVBlockSource@@@Z
	/** removeBossEventListener(BossEventListener *): void */
	removeBossEventListener(_1: object): void; /// ?removeBossEventListener@Level@@UEAAXPEAVBossEventListener@@@Z
	/** removeDisplayEntity(WeakEntityRef): void */
	removeDisplayEntity(_1: unknown): void; /// ?removeDisplayEntity@Level@@UEAAXVWeakEntityRef@@@Z
	/** removeEntity(Actor &): class OwnerPtrT<struct EntityRefTraits> */
	removeEntity(_1: object): unknown; /// ?removeEntity@Level@@UEAA?AV?$OwnerPtrT@UEntityRefTraits@@@@AEAVActor@@@Z
	/** removeEntity(WeakEntityRef): class OwnerPtrT<struct EntityRefTraits> */
	removeEntity(_1: unknown): unknown; /// ?removeEntity@Level@@UEAA?AV?$OwnerPtrT@UEntityRefTraits@@@@VWeakEntityRef@@@Z
	/** removeEntityReferences(Actor &,bool): void */
	removeEntityReferences(_1: object, _2: boolean): void; /// ?removeEntityReferences@Level@@UEAAXAEAVActor@@_N@Z
	/** removeListener(LevelListener &): void */
	removeListener(_1: object): void; /// ?removeListener@Level@@UEAAXAEAVLevelListener@@@Z
	/** requestMapInfo(ActorUniqueID,bool): void */
	requestMapInfo(_1: unknown, _2: boolean): void; /// ?requestMapInfo@Level@@UEAAXUActorUniqueID@@_N@Z
	/** requestTimedStorageDeferment(void): class std::shared_ptr<void * __ptr64> */
	requestTimedStorageDeferment(): unknown; /// ?requestTimedStorageDeferment@Level@@UEAA?AV?$shared_ptr@PEAX@std@@XZ
	/** resumePlayer(Player &): void */
	resumePlayer(_1: object): void; /// ?resumePlayer@Level@@UEAAXAEAVPlayer@@@Z
	/** save(void): void */
	save(): void; /// ?save@Level@@UEAAXXZ
	/** saveBiomeData(void): void */
	saveBiomeData(): void; /// ?saveBiomeData@Level@@UEAAXXZ
	/** saveDirtyChunks(void): void */
	saveDirtyChunks(): void; /// ?saveDirtyChunks@Level@@UEAAXXZ
	/** saveEducationLevelSettings(void): void */
	saveEducationLevelSettings(): void; /// ?saveEducationLevelSettings@Level@@UEAAXXZ
	/** saveGameData(void): void */
	saveGameData(): void; /// ?saveGameData@Level@@UEAAXXZ
	/** saveLevelData(void): void */
	saveLevelData(): void; /// ?saveLevelData@Level@@UEAAXXZ
	/** savePlayer(Player &): void */
	savePlayer(_1: object): void; /// ?savePlayer@Level@@UEAAXAEAVPlayer@@@Z
	/** savePlayers(void): void */
	savePlayers(): void; /// ?savePlayers@Level@@UEAAXXZ
	/** saveVillages(void): void */
	saveVillages(): void; /// ?saveVillages@Level@@UEAAXXZ
	/** sendAllPlayerAbilities(Player const &): void */
	sendAllPlayerAbilities(_1: object): void; /// ?sendAllPlayerAbilities@Level@@UEAAXAEBVPlayer@@@Z
	/** sendServerLegacyParticle(ParticleType,Vec3 const &,Vec3 const &,int): void */
	sendServerLegacyParticle(_1: unknown, _2: object, _3: object, _4: number): void; /// ?sendServerLegacyParticle@Level@@UEAAXW4ParticleType@@AEBVVec3@@1H@Z
	/** setCommandsEnabled(bool): void */
	setCommandsEnabled(_1: boolean): void; /// ?setCommandsEnabled@Level@@UEAAX_N@Z
	/** setDefaultGameType(GameType): void */
	setDefaultGameType(_1: unknown): void; /// ?setDefaultGameType@Level@@UEAAXW4GameType@@@Z
	/** setDefaultSpawn(BlockPos const &): void */
	setDefaultSpawn(_1: object): void; /// ?setDefaultSpawn@Level@@UEAAXAEBVBlockPos@@@Z
	/** setDifficulty(Difficulty): void */
	setDifficulty(_1: unknown): void; /// ?setDifficulty@Level@@UEAAXW4Difficulty@@@Z
	/** setDisablePlayerInteractions(bool): void */
	setDisablePlayerInteractions(_1: boolean): void; /// ?setDisablePlayerInteractions@Level@@UEAAX_N@Z
	/** setEducationLevelSettings(EducationLevelSettings): void */
	setEducationLevelSettings(_1: unknown): void; /// ?setEducationLevelSettings@Level@@UEAAXUEducationLevelSettings@@@Z
	/** setFinishedInitializing(void): void */
	setFinishedInitializing(): void; /// ?setFinishedInitializing@Level@@UEAAXXZ
	/** setHasLockedBehaviorPack(bool): void */
	setHasLockedBehaviorPack(_1: boolean): void; /// ?setHasLockedBehaviorPack@Level@@UEAAX_N@Z
	/** setHasLockedResourcePack(bool): void */
	setHasLockedResourcePack(_1: boolean): void; /// ?setHasLockedResourcePack@Level@@UEAAX_N@Z
	/** setIsExporting(bool): void */
	setIsExporting(_1: boolean): void; /// ?setIsExporting@Level@@UEAAX_N@Z
	/** setLANBroadcast(bool): void */
	setLANBroadcast(_1: boolean): void; /// ?setLANBroadcast@Level@@UEAAX_N@Z
	/** setLANBroadcastIntent(bool): void */
	setLANBroadcastIntent(_1: boolean): void; /// ?setLANBroadcastIntent@Level@@UEAAX_N@Z
	/** setMsaGamertagsOnly(bool): void */
	setMsaGamertagsOnly(_1: boolean): void; /// ?setMsaGamertagsOnly@Level@@UEAAX_N@Z
	/** setMultiplayerGame(bool): void */
	setMultiplayerGame(_1: boolean): void; /// ?setMultiplayerGame@Level@@UEAAX_N@Z
	/** setMultiplayerGameIntent(bool): void */
	setMultiplayerGameIntent(_1: boolean): void; /// ?setMultiplayerGameIntent@Level@@UEAAX_N@Z
	/** setPacketSender(PacketSender *): void */
	setPacketSender(_1: object): void; /// ?setPacketSender@Level@@UEAAXPEAVPacketSender@@@Z
	/** setPlatformBroadcastIntent(Social::GamePublishSetting): void */
	setPlatformBroadcastIntent(_1: unknown): void; /// ?setPlatformBroadcastIntent@Level@@UEAAXW4GamePublishSetting@Social@@@Z
	/** setPlatformBroadcastMode(Social::GamePublishSetting): void */
	setPlatformBroadcastMode(_1: unknown): void; /// ?setPlatformBroadcastMode@Level@@UEAAXW4GamePublishSetting@Social@@@Z
	/** setPlayerAbilities(ActorUniqueID const &,LayeredAbilities const &): void */
	setPlayerAbilities(_1: object, _2: object): void; /// ?setPlayerAbilities@Level@@UEAAXAEBUActorUniqueID@@AEBVLayeredAbilities@@@Z
	/** setPlayerMovementSettings(PlayerMovementSettings const &): void */
	setPlayerMovementSettings(_1: object): void; /// ?setPlayerMovementSettings@Level@@UEAAXAEBUPlayerMovementSettings@@@Z
	/** setSimPaused(bool): void */
	setSimPaused(_1: boolean): void; /// ?setSimPaused@Level@@UEAAX_N@Z
	/** setSpawnSettings(SpawnSettings const &): void */
	setSpawnSettings(_1: object): void; /// ?setSpawnSettings@Level@@UEAAXAEBUSpawnSettings@@@Z
	/** setTime(int): void */
	setTime(_1: number): void; /// ?setTime@Level@@UEAAXH@Z
	/** setWorldTemplateOptionsUnlocked(void): void */
	setWorldTemplateOptionsUnlocked(): void; /// ?setWorldTemplateOptionsUnlocked@Level@@UEAAXXZ
	/** setXBLBroadcastIntent(Social::GamePublishSetting): void */
	setXBLBroadcastIntent(_1: unknown): void; /// ?setXBLBroadcastIntent@Level@@UEAAXW4GamePublishSetting@Social@@@Z
	/** setXBLBroadcastMode(Social::GamePublishSetting): void */
	setXBLBroadcastMode(_1: unknown): void; /// ?setXBLBroadcastMode@Level@@UEAAXW4GamePublishSetting@Social@@@Z
	/** startLeaveGame(void): void */
	startLeaveGame(): void; /// ?startLeaveGame@Level@@UEAAXXZ
	/** suspendAndSave(void): void */
	suspendAndSave(): void; /// ?suspendAndSave@Level@@UEAAXXZ
	/** suspendPlayer(Player &): void */
	suspendPlayer(_1: object): void; /// ?suspendPlayer@Level@@UEAAXAEAVPlayer@@@Z
	/** takeEntity(WeakEntityRef,LevelChunk *): class OwnerPtrT<struct EntityRefTraits> */
	takeEntity(_1: unknown, _2: object): unknown; /// ?takeEntity@Level@@UEAA?AV?$OwnerPtrT@UEntityRefTraits@@@@VWeakEntityRef@@PEAVLevelChunk@@@Z
	/** takePicture(cg::ImageBuffer &,Actor *,Actor *,ScreenshotOptions &): void */
	takePicture(_1: object, _2: object, _3: object, _4: object): void; /// ?takePicture@Level@@UEAAXAEAVImageBuffer@cg@@PEAVActor@@1AEAUScreenshotOptions@@@Z
	/** tick(void): void */
	tick(): void; /// ?tick@Level@@UEAAXXZ
	/** tickEntities(void): void */
	tickEntities(): void; /// ?tickEntities@Level@@UEAAXXZ
	/** tickEntitySystems(void): void */
	tickEntitySystems(): void; /// ?tickEntitySystems@Level@@UEAAXXZ
	/** unregisterTemporaryPointer(_TickPtr &): void */
	unregisterTemporaryPointer(_1: object): void; /// ?unregisterTemporaryPointer@Level@@UEAAXAEAV_TickPtr@@@Z
	/** updateWeather(float,int,float,int): void */
	updateWeather(_1: number, _2: number, _3: number, _4: number): void; /// ?updateWeather@Level@@UEAAXMHMH@Z
	/** upgradeStorageVersion(StorageVersion): void */
	upgradeStorageVersion(_1: unknown): void; /// ?upgradeStorageVersion@Level@@UEAAXW4StorageVersion@@@Z
	/** useMsaGamertagsOnly(void): bool */
	useMsaGamertagsOnly(): boolean; /// ?useMsaGamertagsOnly@Level@@UEBA_NXZ
	/** waitAsyncSuspendWork(void): void */
	waitAsyncSuspendWork(): void; /// ?waitAsyncSuspendWork@Level@@UEAAXXZ
}
declare class LevelSettings {
	// Attributes 
	gameVersion: BaseGameVersion;
	// Methods 
	// Inherited from LevelSettings
	/** LevelSettings(void) */
	LevelSettings(): LevelSettings; /// ??0LevelSettings@@QEAA@XZ
	/** getSeed(void): class LevelSeed64 */
	getSeed(): unknown; /// ?getSeed@LevelSettings@@QEBA?AVLevelSeed64@@XZ
	/** isWorldTemplateOptionLocked(void): bool */
	isWorldTemplateOptionLocked(): boolean; /// ?isWorldTemplateOptionLocked@LevelSettings@@QEBA_NXZ
	/** setEduSharedUriResource(EduSharedUriResource const &): class LevelSettings & __ptr64 */
	setEduSharedUriResource(_1: object): LevelSettings; /// ?setEduSharedUriResource@LevelSettings@@QEAAAEAV1@AEBUEduSharedUriResource@@@Z
	/** setTexturePackRequired(bool): class LevelSettings & __ptr64 */
	setTexturePackRequired(_1: boolean): LevelSettings; /// ?setTexturePackRequired@LevelSettings@@QEAAAEAV1@_N@Z
	/** shouldOverrideSavedSettings(void): bool */
	shouldOverrideSavedSettings(): boolean; /// ?shouldOverrideSavedSettings@LevelSettings@@QEBA_NXZ
}
declare class SDKHashedString {
	// Attributes 
	hash: bigint;
	text: SDKText;
	// Methods 
	// Inherited from SDKHashedString
}
declare class LoopbackPacketSender {
	// Attributes 
	vtable: object;
	// Methods 
	// Inherited from LoopbackPacketSender
	/** send(Packet &): void */
	send(_1: object): void; /// ?send@LoopbackPacketSender@@UEAAXAEAVPacket@@@Z
	/** sendBroadcast(NetworkIdentifier const &,SubClientId,Packet const &): void */
	sendBroadcast(_1: object, _2: unknown, _3: object): void; /// ?sendBroadcast@LoopbackPacketSender@@UEAAXAEBVNetworkIdentifier@@W4SubClientId@@AEBVPacket@@@Z
	/** sendBroadcast(Packet const &): void */
	sendBroadcast(_1: object): void; /// ?sendBroadcast@LoopbackPacketSender@@UEAAXAEBVPacket@@@Z
	/** sendToClient(NetworkIdentifier const &,Packet const &,SubClientId): void */
	sendToClient(_1: object, _2: object, _3: unknown): void; /// ?sendToClient@LoopbackPacketSender@@UEAAXAEBVNetworkIdentifier@@AEBVPacket@@W4SubClientId@@@Z
	/** sendToClient(UserEntityIdentifierComponent const *,Packet const &): void */
	sendToClient(_1: object, _2: object): void; /// ?sendToClient@LoopbackPacketSender@@UEAAXPEBVUserEntityIdentifierComponent@@AEBVPacket@@@Z
	/** sendToServer(Packet &): void */
	sendToServer(_1: object): void; /// ?sendToServer@LoopbackPacketSender@@UEAAXAEAVPacket@@@Z
}
declare class Mat4x4 {
	// Attributes 
	data: object;
	// Methods 
	// Inherited from Mat4x4
}
declare class MinecraftScreenController {
	// Attributes 
	// Methods 
	// Inherited from MinecraftScreenController
	/** MinecraftScreenController */
	MinecraftScreenController(): MinecraftScreenController; /// MinecraftScreenController::MinecraftScreenController
	// Inherited from ScreenController
}
declare class Mob {
	// Attributes 
	vtable: object;
	isMovedToLimbo: number;
	oldPosition: Vec3;
	bodyYaw: number;
	_isJumping: number;
	height: number;
	bodyYawOld: number;
	damageTime: number;
	currentSwimAmount: number;
	_isRemoved: number;
	movementSpeed: number;
	ticksSinceDeath: number;
	_isSurfaceMob: number;
	currentDimensionId: number;
	ticksAlive: number;
	viewAngles: Vec2;
	viewAnglesOld: Vec2;
	eyePos: Vec3;
	actorRendererId: SDKHashedString;
	synchedActorData: SynchedActorDataEntityWrapper;
	shakeTime: number;
	nameTagHash: bigint;
	fallDistance: number;
	onGround: number;
	stepHeight: number;
	handContainer: SimpleContainer;
	slowdownFactor: Vec3;
	didEnterWater: number;
	dimension: Dimension;
	_isOnHotBlock: number;
	vehicle: bigint;
	region: BlockSource;
	level: Level;
	entityTypeId: number;
	aabb: AABB;
	width: number;
	position: Vec3;
	velocity: Vec3;
	allEffects: SDKVectorContainer;
	entityRuntimeId: bigint;
	isSafeToSleepNear: number;
	armorContainer: SimpleContainer;
	// Methods 
	// Inherited from Mob
	/** Mob(ActorDefinitionGroup *,ActorDefinitionIdentifier const &,EntityContext &) */
	Mob(_1: object, _2: object, _3: object): Mob; /// ??0Mob@@QEAA@PEAVActorDefinitionGroup@@AEBUActorDefinitionIdentifier@@AEAVEntityContext@@@Z
	/** _aiStep(IMobMovementProxy &): void */
	_aiStep(_1: object): void; /// ?_aiStep@Mob@@SAXAEAUIMobMovementProxy@@@Z
	/** _doInitialMove(void): void */
	_doInitialMove(): void; /// ?_doInitialMove@Mob@@MEAAXXZ
	/** _doSprintParticleEffect(void): void */
	_doSprintParticleEffect(): void; /// ?_doSprintParticleEffect@Mob@@IEAAXXZ
	/** _getAdjustedAABBForSpawnCheck(AABB const &,Vec3 const &): class AABB */
	_getAdjustedAABBForSpawnCheck(_1: object, _2: object): AABB; /// ?_getAdjustedAABBForSpawnCheck@Mob@@MEBA?AVAABB@@AEBV2@AEBVVec3@@@Z
	/** _hurt(ActorDamageSource const &,float,bool,bool): bool */
	_hurt(_1: object, _2: number, _3: boolean, _4: boolean): boolean; /// ?_hurt@Mob@@MEAA_NAEBVActorDamageSource@@M_N1@Z
	/** _initHardCodedComponents(void): bool */
	_initHardCodedComponents(): boolean; /// ?_initHardCodedComponents@Mob@@AEAA_NXZ
	/** _initialize(EntityContext &): void */
	_initialize(_1: object): void; /// ?_initialize@Mob@@AEAAXAEAVEntityContext@@@Z
	/** _onSizeUpdated(void): void */
	_onSizeUpdated(): void; /// ?_onSizeUpdated@Mob@@MEAAXXZ
	/** _playStepSound(BlockPos const &,Block const &): void */
	_playStepSound(_1: object, _2: object): void; /// ?_playStepSound@Mob@@MEAAXAEBVBlockPos@@AEBVBlock@@@Z
	/** _removePassenger(ActorUniqueID const &,bool,bool,bool): void */
	_removePassenger(_1: object, _2: boolean, _3: boolean, _4: boolean): void; /// ?_removePassenger@Mob@@MEAAXAEBUActorUniqueID@@_N11@Z
	/** _tryApplyingLevitation(IMobMovementProxy const &,Vec3 &): bool */
	_tryApplyingLevitation(_1: object, _2: object): boolean; /// ?_tryApplyingLevitation@Mob@@CA_NAEBUIMobMovementProxy@@AEAVVec3@@@Z
	/** _updateMobTravel(IMobMovementProxy &): void */
	_updateMobTravel(_1: object): void; /// ?_updateMobTravel@Mob@@SAXAEAUIMobMovementProxy@@@Z
	/** _updateSprintingState(void): void */
	_updateSprintingState(): void; /// ?_updateSprintingState@Mob@@AEAAXXZ
	/** addAdditionalSaveData(CompoundTag &): void */
	addAdditionalSaveData(_1: object): void; /// ?addAdditionalSaveData@Mob@@MEBAXAEAVCompoundTag@@@Z
	/** addPassenger(Actor &): void */
	addPassenger(_1: object): void; /// ?addPassenger@Mob@@UEAAXAEAVActor@@@Z
	/** aiStep(IMobMovementProxy &): void */
	aiStep(_1: object): void; /// ?aiStep@Mob@@UEBAXAEAUIMobMovementProxy@@@Z
	/** aiStep(void): void */
	aiStep(): void; /// ?aiStep@Mob@@UEAAXXZ
	/** animateHurt(void): void */
	animateHurt(): void; /// ?animateHurt@Mob@@UEAAXXZ
	/** applyFinalFriction(float,bool): void */
	applyFinalFriction(_1: number, _2: boolean): void; /// ?applyFinalFriction@Mob@@UEAAXM_N@Z
	/** ascendBlockByJumping(void): void */
	ascendBlockByJumping(): void; /// ?ascendBlockByJumping@Mob@@UEAAXXZ
	/** ascendLadder(void): void */
	ascendLadder(): void; /// ?ascendLadder@Mob@@UEAAXXZ
	/** attack(Actor &,ActorDamageCause const &): bool */
	attack(_1: object, _2: object): boolean; /// ?attack@Mob@@UEAA_NAEAVActor@@AEBW4ActorDamageCause@@@Z
	/** attackAnimation(Actor *,float): void */
	attackAnimation(_1: object, _2: number): void; /// ?attackAnimation@Mob@@UEAAXPEAVActor@@M@Z
	/** baseTick(void): void */
	baseTick(): void; /// ?baseTick@Mob@@UEAAXXZ
	/** blockedByShield(ActorDamageSource const &,Actor &): void */
	blockedByShield(_1: object, _2: object): void; /// ?blockedByShield@Mob@@UEAAXAEBVActorDamageSource@@AEAVActor@@@Z
	/** calcMoveRelativeSpeed(TravelType): float */
	calcMoveRelativeSpeed(_1: unknown): number; /// ?calcMoveRelativeSpeed@Mob@@QEAAMW4TravelType@@@Z
	/** calculateJumpImpulse(IMobMovementProxy const &): float */
	calculateJumpImpulse(_1: object): number; /// ?calculateJumpImpulse@Mob@@SAMAEBUIMobMovementProxy@@@Z
	/** canExistWhenDisallowMob(void): bool */
	canExistWhenDisallowMob(): boolean; /// ?canExistWhenDisallowMob@Mob@@UEBA_NXZ
	/** canFreeze(void): bool */
	canFreeze(): boolean; /// ?canFreeze@Mob@@UEBA_NXZ
	/** canPowerJump(void): bool */
	canPowerJump(): boolean; /// ?canPowerJump@Mob@@UEBA_NXZ
	/** causeFallDamage(float,float,ActorDamageSource): void */
	causeFallDamage(_1: number, _2: number, _3: unknown): void; /// ?causeFallDamage@Mob@@MEAAXMMVActorDamageSource@@@Z
	/** checkSpawnObstruction(void): bool */
	checkSpawnObstruction(): boolean; /// ?checkSpawnObstruction@Mob@@UEBA_NXZ
	/** checkSpawnRules(bool): bool */
	checkSpawnRules(_1: boolean): boolean; /// ?checkSpawnRules@Mob@@UEAA_N_N@Z
	/** checkTotemDeathProtection(ActorDamageSource const &): bool */
	checkTotemDeathProtection(_1: object): boolean; /// ?checkTotemDeathProtection@Mob@@QEAA_NAEBVActorDamageSource@@@Z
	/** clearEquipment(void): int */
	clearEquipment(): number; /// ?clearEquipment@Mob@@UEAAHXZ
	/** clearVanishEnchantedItemsOnDeath(void): void */
	clearVanishEnchantedItemsOnDeath(): void; /// ?clearVanishEnchantedItemsOnDeath@Mob@@UEAAXXZ
	/** containerChanged(int): void */
	containerChanged(_1: number): void; /// ?containerChanged@Mob@@UEAAXH@Z
	/** createAIGoals(void): bool */
	createAIGoals(): boolean; /// ?createAIGoals@Mob@@UEAA_NXZ
	/** descendBlockByCrouching(void): void */
	descendBlockByCrouching(): void; /// ?descendBlockByCrouching@Mob@@UEAAXXZ
	/** die(ActorDamageSource const &): void */
	die(_1: object): void; /// ?die@Mob@@UEAAXAEBVActorDamageSource@@@Z
	/** doFireHurt(int): bool */
	doFireHurt(_1: number): boolean; /// ?doFireHurt@Mob@@UEAA_NH@Z
	/** doHurtTarget(Actor *,ActorDamageCause const &): bool */
	doHurtTarget(_1: object, _2: object): boolean; /// ?doHurtTarget@Mob@@UEAA_NPEAVActor@@AEBW4ActorDamageCause@@@Z
	/** dropBags(void): void */
	dropBags(): void; /// ?dropBags@Mob@@MEAAXXZ
	/** dropContainer(void): void */
	dropContainer(): void; /// ?dropContainer@Mob@@UEAAXXZ
	/** dropEquipmentOnDeath(ActorDamageSource const &,int): void */
	dropEquipmentOnDeath(_1: object, _2: number): void; /// ?dropEquipmentOnDeath@Mob@@UEAAXAEBVActorDamageSource@@H@Z
	/** dropEquipmentOnDeath(void): void */
	dropEquipmentOnDeath(): void; /// ?dropEquipmentOnDeath@Mob@@UEAAXXZ
	/** emitJumpPreventedEvent(BlockPos const &): void */
	emitJumpPreventedEvent(_1: object): void; /// ?emitJumpPreventedEvent@Mob@@QEAAXAEBVBlockPos@@@Z
	/** getAllArmorID(void): class std::vector<int,class std::allocator<int> > */
	getAllArmorID(): unknown; /// ?getAllArmorID@Mob@@UEBA?AV?$vector@HV?$allocator@H@std@@@std@@XZ
	/** getAllEquipment(void): class std::vector<class ItemStack const * __ptr64,class std::allocator<class ItemStack const * __ptr64> > */
	getAllEquipment(): unknown; /// ?getAllEquipment@Mob@@UEBA?AV?$vector@PEBVItemStack@@V?$allocator@PEBVItemStack@@@std@@@std@@XZ
	/** getAllHand(void): class std::vector<class ItemStack const * __ptr64,class std::allocator<class ItemStack const * __ptr64> > */
	getAllHand(): unknown; /// ?getAllHand@Mob@@UEBA?AV?$vector@PEBVItemStack@@V?$allocator@PEBVItemStack@@@std@@@std@@XZ
	/** getArmorColorInSlot(ArmorSlot,int): float */
	getArmorColorInSlot(_1: unknown, _2: number): number; /// ?getArmorColorInSlot@Mob@@UEBAMW4ArmorSlot@@H@Z
	/** getArmorCoverPercentage(void): float */
	getArmorCoverPercentage(): number; /// ?getArmorCoverPercentage@Mob@@UEBAMXZ
	/** getArmorMaterialTextureTypeInSlot(ArmorSlot): enum ArmorTextureType */
	getArmorMaterialTextureTypeInSlot(_1: unknown): bigint; /// ?getArmorMaterialTextureTypeInSlot@Mob@@UEBA?AW4ArmorTextureType@@W4ArmorSlot@@@Z
	/** getArmorMaterialTypeInSlot(ArmorSlot): enum ArmorMaterialType */
	getArmorMaterialTypeInSlot(_1: unknown): bigint; /// ?getArmorMaterialTypeInSlot@Mob@@UEBA?AW4ArmorMaterialType@@W4ArmorSlot@@@Z
	/** getArmorTypeHash(void): int */
	getArmorTypeHash(): number; /// ?getArmorTypeHash@Mob@@UEAAHXZ
	/** getArmorValue(void): int */
	getArmorValue(): number; /// ?getArmorValue@Mob@@UEBAHXZ
	/** getAttackAnim(float): float */
	getAttackAnim(_1: number): number; /// ?getAttackAnim@Mob@@UEAAMM@Z
	/** getBlockDamageCause(Block const &): enum ActorDamageCause */
	getBlockDamageCause(_1: object): bigint; /// ?getBlockDamageCause@Mob@@UEBA?AW4ActorDamageCause@@AEBVBlock@@@Z
	/** getCaravanHead(void): struct ActorUniqueID */
	getCaravanHead(): unknown; /// ?getCaravanHead@Mob@@UEBA?AUActorUniqueID@@XZ
	/** getCaravanSize(void): int */
	getCaravanSize(): number; /// ?getCaravanSize@Mob@@QEBAHXZ
	/** getCurrentSwingDuration(void): int */
	getCurrentSwingDuration(): number; /// ?getCurrentSwingDuration@Mob@@IEAAHXZ
	/** getDamageAfterArmorReduction(ActorDamageSource const &,float): float */
	getDamageAfterArmorReduction(_1: object, _2: number): number; /// ?getDamageAfterArmorReduction@Mob@@UEBAMAEBVActorDamageSource@@M@Z
	/** getDamageAfterEnchantReduction(ActorDamageSource const &,float): float */
	getDamageAfterEnchantReduction(_1: object, _2: number): number; /// ?getDamageAfterEnchantReduction@Mob@@UEBAMAEBVActorDamageSource@@M@Z
	/** getDamageAfterResistanceEffect(ActorDamageSource const &,float): float */
	getDamageAfterResistanceEffect(_1: object, _2: number): number; /// ?getDamageAfterResistanceEffect@Mob@@UEBAMAEBVActorDamageSource@@M@Z
	/** getDeathSound(void): enum LevelSoundEvent */
	getDeathSound(): bigint; /// ?getDeathSound@Mob@@UEAA?AW4LevelSoundEvent@@XZ
	/** getDeathTime(void): int */
	getDeathTime(): number; /// ?getDeathTime@Mob@@UEBAHXZ
	/** getHurtSound(void): enum LevelSoundEvent */
	getHurtSound(): bigint; /// ?getHurtSound@Mob@@UEAA?AW4LevelSoundEvent@@XZ
	/** getInterpolatedBodyRot(float): float */
	getInterpolatedBodyRot(_1: number): number; /// ?getInterpolatedBodyRot@Mob@@UEBAMM@Z
	/** getInterpolatedBodyYaw(float): float */
	getInterpolatedBodyYaw(_1: number): number; /// ?getInterpolatedBodyYaw@Mob@@UEBAMM@Z
	/** getInterpolatedHeadRot(float): float */
	getInterpolatedHeadRot(_1: number): number; /// ?getInterpolatedHeadRot@Mob@@UEBAMM@Z
	/** getItemInHandIcon(ItemStack const &,int): struct TextureUVCoordinateSet const * __ptr64 */
	getItemInHandIcon(_1: object, _2: number): unknown; /// ?getItemInHandIcon@Mob@@UEAAPEBUTextureUVCoordinateSet@@AEBVItemStack@@H@Z
	/** getItemUseIntervalAxis(void): int */
	getItemUseIntervalAxis(): number; /// ?getItemUseIntervalAxis@Mob@@UEBAHXZ
	/** getJumpEffectAmplifierValue(IMobMovementProxy const &): float */
	getJumpEffectAmplifierValue(_1: object): number; /// ?getJumpEffectAmplifierValue@Mob@@SAMAEBUIMobMovementProxy@@@Z
	/** getJumpPrevention(IMobMovementProxy const &): struct JumpPreventionResult */
	getJumpPrevention(_1: object): unknown; /// ?getJumpPrevention@Mob@@SA?AUJumpPreventionResult@@AEBUIMobMovementProxy@@@Z
	/** getJumpPrevention(void): struct JumpPreventionResult */
	getJumpPrevention(): unknown; /// ?getJumpPrevention@Mob@@QEAA?AUJumpPreventionResult@@XZ
	/** getMaxHeadXRot(void): float */
	getMaxHeadXRot(): number; /// ?getMaxHeadXRot@Mob@@UEAAMXZ
	/** getMeleeKnockbackBonus(void): int */
	getMeleeKnockbackBonus(): number; /// ?getMeleeKnockbackBonus@Mob@@UEAAHXZ
	/** getMeleeWeaponDamageBonus(Mob *): float */
	getMeleeWeaponDamageBonus(_1: object): number; /// ?getMeleeWeaponDamageBonus@Mob@@UEAAMPEAV1@@Z
	/** getMovementComponentCurrentSpeed(void): float */
	getMovementComponentCurrentSpeed(): number; /// ?getMovementComponentCurrentSpeed@Mob@@QEBAMXZ
	/** getSpeed(void): float */
	getSpeed(): number; /// ?getSpeed@Mob@@UEBAMXZ
	/** getTimeAlongSwing(void): int */
	getTimeAlongSwing(): number; /// ?getTimeAlongSwing@Mob@@UEBAHXZ
	/** getToughnessValue(void): int */
	getToughnessValue(): number; /// ?getToughnessValue@Mob@@UEBAHXZ
	/** getTravelType(IMobMovementProxy &): enum TravelType */
	getTravelType(_1: object): bigint; /// ?getTravelType@Mob@@SA?AW4TravelType@@AEAUIMobMovementProxy@@@Z
	/** getTravelType(void): enum TravelType */
	getTravelType(): bigint; /// ?getTravelType@Mob@@QEAA?AW4TravelType@@XZ
	/** getYHeadRot(void): float */
	getYHeadRot(): number; /// ?getYHeadRot@Mob@@UEBAMXZ
	/** getYawSpeedInDegreesPerSecond(void): float */
	getYawSpeedInDegreesPerSecond(): number; /// ?getYawSpeedInDegreesPerSecond@Mob@@UEBAMXZ
	/** handleEntityEvent(ActorEvent,int): void */
	handleEntityEvent(_1: unknown, _2: number): void; /// ?handleEntityEvent@Mob@@UEAAXW4ActorEvent@@H@Z
	/** hasCaravanTail(void): bool */
	hasCaravanTail(): boolean; /// ?hasCaravanTail@Mob@@UEBA_NXZ
	/** hasComponent(HashedString const &): bool */
	hasComponent(_1: object): boolean; /// ?hasComponent@Mob@@UEBA_NAEBVHashedString@@@Z
	/** hurtEffects(ActorDamageSource const &,float,bool,bool): void */
	hurtEffects(_1: object, _2: number, _3: boolean, _4: boolean): void; /// ?hurtEffects@Mob@@UEAAXAEBVActorDamageSource@@M_N1@Z
	/** inCaravan(void): bool */
	inCaravan(): boolean; /// ?inCaravan@Mob@@UEBA_NXZ
	/** initBodyControl(void): class std::unique_ptr<class BodyControl,struct std::default_delete<class BodyControl> > */
	initBodyControl(): unknown; /// ?initBodyControl@Mob@@MEAA?AV?$unique_ptr@VBodyControl@@U?$default_delete@VBodyControl@@@std@@@std@@XZ
	/** initializeComponents(Actor::InitializationMethod,VariantParameterList const &): void */
	initializeComponents(_1: unknown, _2: object): void; /// ?initializeComponents@Mob@@UEAAXW4InitializationMethod@Actor@@AEBVVariantParameterList@@@Z
	/** isAbleToMove(void): bool */
	isAbleToMove(): boolean; /// ?isAbleToMove@Mob@@QEBA_NXZ
	/** isAlive(void): bool */
	isAlive(): boolean; /// ?isAlive@Mob@@UEBA_NXZ
	/** isBlocking(void): bool */
	isBlocking(): boolean; /// ?isBlocking@Mob@@UEBA_NXZ
	/** isFrostWalking(void): bool */
	isFrostWalking(): boolean; /// ?isFrostWalking@Mob@@QEBA_NXZ
	/** isGliding(void): bool */
	isGliding(): boolean; /// ?isGliding@Mob@@QEBA_NXZ
	/** isImmobile(IActorMovementProxy const &): bool */
	isImmobile(_1: object): boolean; /// ?isImmobile@Mob@@SA_NAEBUIActorMovementProxy@@@Z
	/** isImmobile(void): bool */
	isImmobile(): boolean; /// ?isImmobile@Mob@@UEBA_NXZ
	/** isJumping(void): bool */
	isJumping(): boolean; /// ?isJumping@Mob@@UEBA_NXZ
	/** isLookingAtAnEntity(void): bool */
	isLookingAtAnEntity(): boolean; /// ?isLookingAtAnEntity@Mob@@UEAA_NXZ
	/** isPickable(void): bool */
	isPickable(): boolean; /// ?isPickable@Mob@@UEAA_NXZ
	/** isSleeping(void): bool */
	isSleeping(): boolean; /// ?isSleeping@Mob@@UEBA_NXZ
	/** isSprinting(void): bool */
	isSprinting(): boolean; /// ?isSprinting@Mob@@QEBA_NXZ
	/** isSurfaceMob(void): bool */
	isSurfaceMob(): boolean; /// ?isSurfaceMob@Mob@@UEBA_NXZ
	/** isTransitioningSitting(void): bool */
	isTransitioningSitting(): boolean; /// ?isTransitioningSitting@Mob@@QEBA_NXZ
	/** joinCaravan(Mob *): void */
	joinCaravan(_1: object): void; /// ?joinCaravan@Mob@@UEAAXPEAV1@@Z
	/** jumpFromGround(void): void */
	jumpFromGround(): void; /// ?jumpFromGround@Mob@@MEAAXXZ
	/** kill(void): void */
	kill(): void; /// ?kill@Mob@@UEAAXXZ
	/** knockback(Actor *,int,float,float,float,float,float): void */
	knockback(_1: object, _2: number, _3: number, _4: number, _5: number, _6: number, _7: number): void; /// ?knockback@Mob@@UEAAXPEAVActor@@HMMMMM@Z
	/** leaveCaravan(void): void */
	leaveCaravan(): void; /// ?leaveCaravan@Mob@@UEAAXXZ
	/** lookAt(Actor *,float,float): void */
	lookAt(_1: object, _2: number, _3: number): void; /// ?lookAt@Mob@@UEAAXPEAVActor@@MM@Z
	/** newServerAiStep(void): void */
	newServerAiStep(): void; /// ?newServerAiStep@Mob@@MEAAXXZ
	/** normalTick(void): void */
	normalTick(): void; /// ?normalTick@Mob@@UEAAXXZ
	/** outOfWorld(void): void */
	outOfWorld(): void; /// ?outOfWorld@Mob@@MEAAXXZ
	/** passengerTick(void): void */
	passengerTick(): void; /// ?passengerTick@Mob@@MEAAXXZ
	/** pushActors(void): void */
	pushActors(): void; /// ?pushActors@Mob@@UEAAXXZ
	/** readAdditionalSaveData(CompoundTag const &,DataLoadHelper &): void */
	readAdditionalSaveData(_1: object, _2: object): void; /// ?readAdditionalSaveData@Mob@@MEAAXAEBVCompoundTag@@AEAVDataLoadHelper@@@Z
	/** reloadHardcoded(Actor::InitializationMethod,VariantParameterList const &): void */
	reloadHardcoded(_1: unknown, _2: object): void; /// ?reloadHardcoded@Mob@@UEAAXW4InitializationMethod@Actor@@AEBVVariantParameterList@@@Z
	/** reloadHardcodedClient(Actor::InitializationMethod,VariantParameterList const &): void */
	reloadHardcodedClient(_1: unknown, _2: object): void; /// ?reloadHardcodedClient@Mob@@UEAAXW4InitializationMethod@Actor@@AEBVVariantParameterList@@@Z
	/** resetAttributes(void): void */
	resetAttributes(): void; /// ?resetAttributes@Mob@@QEAAXXZ
	/** resetInterpolated(void): void */
	resetInterpolated(): void; /// ?resetInterpolated@Mob@@UEAAXXZ
	/** sendInventory(bool): void */
	sendInventory(_1: boolean): void; /// ?sendInventory@Mob@@UEAAX_N@Z
	/** setDamagedArmor(ArmorSlot,ItemStack const &): void */
	setDamagedArmor(_1: unknown, _2: object): void; /// ?setDamagedArmor@Mob@@UEAAXW4ArmorSlot@@AEBVItemStack@@@Z
	/** setEatCounter(int): void */
	setEatCounter(_1: number): void; /// ?setEatCounter@Mob@@QEAAXH@Z
	/** setEquippedSlot(EquipmentSlot,ItemStack const &): void */
	setEquippedSlot(_1: unknown, _2: object): void; /// ?setEquippedSlot@Mob@@UEAAXW4EquipmentSlot@@AEBVItemStack@@@Z
	/** setIsLayingEgg(bool): void */
	setIsLayingEgg(_1: boolean): void; /// ?setIsLayingEgg@Mob@@QEAAX_N@Z
	/** setItemSlot(EquipmentSlot,ItemStack const &): bool */
	setItemSlot(_1: unknown, _2: object): boolean; /// ?setItemSlot@Mob@@UEAA_NW4EquipmentSlot@@AEBVItemStack@@@Z
	/** setMovementComponentCurrentSpeed(float): void */
	setMovementComponentCurrentSpeed(_1: number): void; /// ?setMovementComponentCurrentSpeed@Mob@@QEAAXM@Z
	/** setSleeping(bool): void */
	setSleeping(_1: boolean): void; /// ?setSleeping@Mob@@UEAAX_N@Z
	/** setSpeed(float): void */
	setSpeed(_1: number): void; /// ?setSpeed@Mob@@UEAAXM@Z
	/** setSpeedModifier(float): void */
	setSpeedModifier(_1: number): void; /// ?setSpeedModifier@Mob@@QEAAXM@Z
	/** setSprinting(bool): void */
	setSprinting(_1: boolean): void; /// ?setSprinting@Mob@@UEAAX_N@Z
	/** setTarget(Actor *): void */
	setTarget(_1: object): void; /// ?setTarget@Mob@@UEAAXPEAVActor@@@Z
	/** setTransitioningSitting(bool): void */
	setTransitioningSitting(_1: boolean): void; /// ?setTransitioningSitting@Mob@@UEAAX_N@Z
	/** setYHeadRot(float): void */
	setYHeadRot(_1: number): void; /// ?setYHeadRot@Mob@@UEAAXM@Z
	/** setYHeadRotO(float): void */
	setYHeadRotO(_1: number): void; /// ?setYHeadRotO@Mob@@UEAAXM@Z
	/** setYRotA(float): void */
	setYRotA(_1: number): void; /// ?setYRotA@Mob@@QEAAXM@Z
	/** shouldApplyWaterGravity(IActorMovementProxy const &): bool */
	shouldApplyWaterGravity(_1: object): boolean; /// ?shouldApplyWaterGravity@Mob@@SA_NAEBUIActorMovementProxy@@@Z
	/** shouldDropDeathLoot(void): bool */
	shouldDropDeathLoot(): boolean; /// ?shouldDropDeathLoot@Mob@@UEBA_NXZ
	/** startRiding(Actor &): bool */
	startRiding(_1: object): boolean; /// ?startRiding@Mob@@UEAA_NAEAVActor@@@Z
	/** stopRiding(bool,bool,bool): void */
	stopRiding(_1: boolean, _2: boolean, _3: boolean): void; /// ?stopRiding@Mob@@UEAAX_N00@Z
	/** swing(void): void */
	swing(): void; /// ?swing@Mob@@UEAAXXZ
	/** teleportTo(Vec3 const &,bool,int,int,bool): void */
	teleportTo(_1: object, _2: boolean, _3: number, _4: number, _5: boolean): void; /// ?teleportTo@Mob@@UEAAXAEBVVec3@@_NHH1@Z
	/** tickDeath(void): void */
	tickDeath(): void; /// ?tickDeath@Mob@@MEAAXXZ
	/** travel(IMobMovementProxy &,float,float,float): void */
	travel(_1: object, _2: number, _3: number, _4: number): void; /// ?travel@Mob@@UEBAXAEAUIMobMovementProxy@@MMM@Z
	/** travel(float,float,float): void */
	travel(_1: number, _2: number, _3: number): void; /// ?travel@Mob@@UEAAXMMM@Z
	/** tryGetFromEntity(EntityContext &,bool): class Mob * __ptr64 */
	tryGetFromEntity(_1: object, _2: boolean): Mob; /// ?tryGetFromEntity@Mob@@SAPEAV1@AEAVEntityContext@@_N@Z
	/** updateAi(void): void */
	updateAi(): void; /// ?updateAi@Mob@@MEAAXXZ
	/** updateEntitySpecificMolangVariables(RenderParams &): void */
	updateEntitySpecificMolangVariables(_1: object): void; /// ?updateEntitySpecificMolangVariables@Mob@@MEAAXAEAVRenderParams@@@Z
	/** updateEquipment(void): void */
	updateEquipment(): void; /// ?updateEquipment@Mob@@UEAAXXZ
	/** updateGliding(void): void */
	updateGliding(): void; /// ?updateGliding@Mob@@MEAAXXZ
	// Inherited from Actor
	/** _addActorComponents(void): void */
	_addActorComponents(): void; /// ?_addActorComponents@Actor@@AEAAXXZ
	/** _containsSneakCollisionShapes(IActorMovementProxy &,AABB const &): bool */
	_containsSneakCollisionShapes(_1: object, _2: object): boolean; /// ?_containsSneakCollisionShapes@Actor@@CA_NAEAUIActorMovementProxy@@AEBVAABB@@@Z
	/** _isItemStackNetManagerEnabled(void): bool */
	_isItemStackNetManagerEnabled(): boolean; /// ?_isItemStackNetManagerEnabled@Actor@@AEBA_NXZ
	/** _move(IActorMovementProxy &,Vec3 const &): void */
	_move(_1: object, _2: object): void; /// ?_move@Actor@@SAXAEAUIActorMovementProxy@@AEBVVec3@@@Z
	/** _playFlySound(BlockPos const &,Block const &): void */
	_playFlySound(_1: object, _2: object): void; /// ?_playFlySound@Actor@@MEAAXAEBVBlockPos@@AEBVBlock@@@Z
	/** _randomHeartPos(void): class Vec3 */
	_randomHeartPos(): unknown; /// ?_randomHeartPos@Actor@@QEAA?AVVec3@@XZ
	/** _sendDirtyActorData(void): void */
	_sendDirtyActorData(): void; /// ?_sendDirtyActorData@Actor@@QEAAXXZ
	/** _sendLinkPacket(ActorLink const &): void */
	_sendLinkPacket(_1: object): void; /// ?_sendLinkPacket@Actor@@AEBAXAEBUActorLink@@@Z
	/** _serverInitItemStackIds(void): void */
	_serverInitItemStackIds(): void; /// ?_serverInitItemStackIds@Actor@@MEAAXXZ
	/** _setHandContainerItem(ItemStack const &,HandSlot): void */
	_setHandContainerItem(_1: object, _2: unknown): void; /// ?_setHandContainerItem@Actor@@IEAAXAEBVItemStack@@W4HandSlot@@@Z
	/** _setHeightOffset(float): void */
	_setHeightOffset(_1: number): void; /// ?_setHeightOffset@Actor@@IEAAXM@Z
	/** _setLevelPtr(Level *): void */
	_setLevelPtr(_1: object): void; /// ?_setLevelPtr@Actor@@QEAAXPEAVLevel@@@Z
	/** _setPos(Vec3 const &): void */
	_setPos(_1: object): void; /// ?_setPos@Actor@@IEAAXAEBVVec3@@@Z
	/** _shouldProvideFeedbackOnArmorSet(ArmorSlot,ItemStack const &): bool */
	_shouldProvideFeedbackOnArmorSet(_1: unknown, _2: object): boolean; /// ?_shouldProvideFeedbackOnArmorSet@Actor@@MEBA_NW4ArmorSlot@@AEBVItemStack@@@Z
	/** _shouldProvideFeedbackOnHandContainerItemSet(HandSlot,ItemStack const &): bool */
	_shouldProvideFeedbackOnHandContainerItemSet(_1: unknown, _2: object): boolean; /// ?_shouldProvideFeedbackOnHandContainerItemSet@Actor@@MEBA_NW4HandSlot@@AEBVItemStack@@@Z
	/** _spawnTreasureHuntingParticles(void): void */
	_spawnTreasureHuntingParticles(): void; /// ?_spawnTreasureHuntingParticles@Actor@@AEAAXXZ
	/** _updateComposition(bool): void */
	_updateComposition(_1: boolean): void; /// ?_updateComposition@Actor@@AEAAX_N@Z
	/** add(ItemStack &): bool */
	add(_1: object): boolean; /// ?add@Actor@@UEAA_NAEAVItemStack@@@Z
	/** addEffect(MobEffectInstance const &): void */
	addEffect(_1: object): void; /// ?addEffect@Actor@@QEAAXAEBVMobEffectInstance@@@Z
	/** applySnapshot(PlayerSnapshotComponent const &,PlayerSnapshotComponent const &): void */
	applySnapshot(_1: object, _2: object): void; /// ?applySnapshot@Actor@@UEAAXAEBUPlayerSnapshotComponent@@0@Z
	/** buildForward(IActorMovementProxy const &): class Vec3 */
	buildForward(_1: object): unknown; /// ?buildForward@Actor@@SA?AVVec3@@AEBUIActorMovementProxy@@@Z
	/** buildForward(void): class Vec3 */
	buildForward(): unknown; /// ?buildForward@Actor@@QEBA?AVVec3@@XZ
	/** burn(int,bool): void */
	burn(_1: number, _2: boolean): void; /// ?burn@Actor@@QEAAXH_N@Z
	/** calcCenterPos(void): class Vec3 */
	calcCenterPos(): unknown; /// ?calcCenterPos@Actor@@QEBA?AVVec3@@XZ
	/** canAddPassenger(Actor &): bool */
	canAddPassenger(_1: object): boolean; /// ?canAddPassenger@Actor@@UEBA_NAEAV1@@Z
	/** canAttack(Actor *,bool): bool */
	canAttack(_1: object, _2: boolean): boolean; /// ?canAttack@Actor@@UEBA_NPEAV1@_N@Z
	/** canBeAffected(MobEffectInstance const &): bool */
	canBeAffected(_1: object): boolean; /// ?canBeAffected@Actor@@UEBA_NAEBVMobEffectInstance@@@Z
	/** canBeAffected(int): bool */
	canBeAffected(_1: number): boolean; /// ?canBeAffected@Actor@@UEBA_NH@Z
	/** canBeAffectedByArrow(MobEffectInstance const &): bool */
	canBeAffectedByArrow(_1: object): boolean; /// ?canBeAffectedByArrow@Actor@@UEBA_NAEBVMobEffectInstance@@@Z
	/** canBeginOrContinueClimbingLadder(void): bool */
	canBeginOrContinueClimbingLadder(): boolean; /// ?canBeginOrContinueClimbingLadder@Actor@@QEBA_NXZ
	/** canCurrentlySwim(void): bool */
	canCurrentlySwim(): boolean; /// ?canCurrentlySwim@Actor@@QEBA_NXZ
	/** canDisableShield(void): bool */
	canDisableShield(): boolean; /// ?canDisableShield@Actor@@UEAA_NXZ
	/** canObstructSpawningAndBlockPlacement(void): bool */
	canObstructSpawningAndBlockPlacement(): boolean; /// ?canObstructSpawningAndBlockPlacement@Actor@@UEBA_NXZ
	/** canSee(Actor const &): bool */
	canSee(_1: object): boolean; /// ?canSee@Actor@@UEBA_NAEBV1@@Z
	/** canSee(Vec3 const &): bool */
	canSee(_1: object): boolean; /// ?canSee@Actor@@UEBA_NAEBVVec3@@@Z
	/** canSeeDaylight(void): bool */
	canSeeDaylight(): boolean; /// ?canSeeDaylight@Actor@@QEBA_NXZ
	/** canShowNameTag(void): bool */
	canShowNameTag(): boolean; /// ?canShowNameTag@Actor@@UEBA_NXZ
	/** celebrateHunt(int,bool): void */
	celebrateHunt(_1: number, _2: boolean): void; /// ?celebrateHunt@Actor@@QEAAXH_N@Z
	/** checkEntityOnewayCollision(BlockSource &,BlockPos const &): void */
	checkEntityOnewayCollision(_1: object, _2: object): void; /// ?checkEntityOnewayCollision@Actor@@SAXAEAVBlockSource@@AEBVBlockPos@@@Z
	/** checkFallDamage(float,bool): void */
	checkFallDamage(_1: number, _2: boolean): void; /// ?checkFallDamage@Actor@@UEAAXM_N@Z
	/** checkInsideBlocks(float): void */
	checkInsideBlocks(_1: number): void; /// ?checkInsideBlocks@Actor@@MEAAXM@Z
	/** checkInsideCauldron(void): void */
	checkInsideCauldron(): void; /// ?checkInsideCauldron@Actor@@QEAAXXZ
	/** chorusFruitTeleport(Vec3 const &): void */
	chorusFruitTeleport(_1: object): void; /// ?chorusFruitTeleport@Actor@@UEAAXAEBVVec3@@@Z
	/** closerThan(Actor const &,float): bool */
	closerThan(_1: object, _2: number): boolean; /// ?closerThan@Actor@@QEBA_NAEBV1@M@Z
	/** closerThan(Actor const &,float,float): bool */
	closerThan(_1: object, _2: number, _3: number): boolean; /// ?closerThan@Actor@@QEBA_NAEBV1@MM@Z
	/** consumeItem(ItemActor &,int): void */
	consumeItem(_1: object, _2: number): void; /// ?consumeItem@Actor@@QEAAXAEAVItemActor@@H@Z
	/** consumeTotem(void): bool */
	consumeTotem(): boolean; /// ?consumeTotem@Actor@@UEAA_NXZ
	/** despawn(void): void */
	despawn(): void; /// ?despawn@Actor@@UEAAXXZ
	/** distanceSqrToBlockPosCenter(BlockPos const &): float */
	distanceSqrToBlockPosCenter(_1: object): number; /// ?distanceSqrToBlockPosCenter@Actor@@QEBAMAEBVBlockPos@@@Z
	/** distanceTo(Actor const &): float */
	distanceTo(_1: object): number; /// ?distanceTo@Actor@@QEBAMAEBV1@@Z
	/** distanceTo(Vec3 const &): float */
	distanceTo(_1: object): number; /// ?distanceTo@Actor@@QEBAMAEBVVec3@@@Z
	/** distanceToSqr(Actor const &): float */
	distanceToSqr(_1: object): number; /// ?distanceToSqr@Actor@@QEBAMAEBV1@@Z
	/** distanceToSqr(Vec3 const &): float */
	distanceToSqr(_1: object): number; /// ?distanceToSqr@Actor@@QEBAMAEBVVec3@@@Z
	/** doWaterSplashEffect(void): void */
	doWaterSplashEffect(): void; /// ?doWaterSplashEffect@Actor@@UEAAXXZ
	/** drop(ItemStack const &,bool): bool */
	drop(_1: object, _2: boolean): boolean; /// ?drop@Actor@@UEAA_NAEBVItemStack@@_N@Z
	/** dropTowards(ItemStack const &,Vec3): void */
	dropTowards(_1: object, _2: Vec3): void; /// ?dropTowards@Actor@@QEAAXAEBVItemStack@@VVec3@@@Z
	/** extractSnapshot(PlayerSnapshotComponent &): void */
	extractSnapshot(_1: object): void; /// ?extractSnapshot@Actor@@UEBAXAEAUPlayerSnapshotComponent@@@Z
	/** feed(int): void */
	feed(_1: number): void; /// ?feed@Actor@@UEAAXH@Z
	/** fetchNearbyActorsSorted(Vec3 const &,ActorType): class std::vector<struct DistanceSortedActor,class std::allocator<struct DistanceSortedActor> > */
	fetchNearbyActorsSorted(_1: object, _2: unknown): unknown; /// ?fetchNearbyActorsSorted@Actor@@QEAA?AV?$vector@UDistanceSortedActor@@V?$allocator@UDistanceSortedActor@@@std@@@std@@AEBVVec3@@W4ActorType@@@Z
	/** filterFormattedNameTag(UIProfanityContext const &): void */
	filterFormattedNameTag(_1: object): void; /// ?filterFormattedNameTag@Actor@@UEAAXAEBVUIProfanityContext@@@Z
	/** flagPassengerToRemove(Actor &): void */
	flagPassengerToRemove(_1: object): void; /// ?flagPassengerToRemove@Actor@@UEAAXAEAV1@@Z
	/** getAABB(void): class AABB const & __ptr64 */
	getAABB(): AABB; /// ?getAABB@Actor@@QEBAAEBVAABB@@XZ
	/** getAABBDim(void): class Vec2 const & __ptr64 */
	getAABBDim(): unknown; /// ?getAABBDim@Actor@@QEBAAEBVVec2@@XZ
	/** getActorIdentifier(void): struct ActorDefinitionIdentifier const & __ptr64 */
	getActorIdentifier(): ActorDefinitionIdentifier; /// ?getActorIdentifier@Actor@@QEBAAEBUActorDefinitionIdentifier@@XZ
	/** getActorRendererId(void): class HashedString const & __ptr64 */
	getActorRendererId(): unknown; /// ?getActorRendererId@Actor@@UEBAAEBVHashedString@@XZ
	/** getAllArmor(void): class std::vector<class ItemStack const * __ptr64,class std::allocator<class ItemStack const * __ptr64> > */
	getAllArmor(): unknown; /// ?getAllArmor@Actor@@UEBA?AV?$vector@PEBVItemStack@@V?$allocator@PEBVItemStack@@@std@@@std@@XZ
	/** getAmbientSound(void): enum LevelSoundEvent */
	getAmbientSound(): bigint; /// ?getAmbientSound@Actor@@UEBA?AW4LevelSoundEvent@@XZ
	/** getAnimationComponent(void): class AnimationComponent & __ptr64 */
	getAnimationComponent(): unknown; /// ?getAnimationComponent@Actor@@UEAAAEAVAnimationComponent@@XZ
	/** getArmor(ArmorSlot): class ItemStack const & __ptr64 */
	getArmor(_1: unknown): ItemStack; /// ?getArmor@Actor@@UEBAAEBVItemStack@@W4ArmorSlot@@@Z
	/** getArmorContainer(void): class SimpleContainer const & __ptr64 */
	getArmorContainer(): SimpleContainer; /// ?getArmorContainer@Actor@@QEBAAEBVSimpleContainer@@XZ
	/** getAttachPos(ActorLocation,float): class Vec3 */
	getAttachPos(_1: unknown, _2: number): unknown; /// ?getAttachPos@Actor@@UEBA?AVVec3@@W4ActorLocation@@M@Z
	/** getAttribute(Attribute const &): class AttributeInstance const & __ptr64 */
	getAttribute(_1: object): unknown; /// ?getAttribute@Actor@@UEBAAEBVAttributeInstance@@AEBVAttribute@@@Z
	/** getBlockPosCurrentlyStandingOn(Actor const *): class BlockPos */
	getBlockPosCurrentlyStandingOn(_1: object): BlockPos; /// ?getBlockPosCurrentlyStandingOn@Actor@@QEBA?AVBlockPos@@PEBV1@@Z
	/** getBrightness(float): float */
	getBrightness(_1: number): number; /// ?getBrightness@Actor@@UEBAMM@Z
	/** getCarriedItem(void): class ItemStack const & __ptr64 */
	getCarriedItem(): ItemStack; /// ?getCarriedItem@Actor@@UEBAAEBVItemStack@@XZ
	/** getCarriedItemInSlotPreferredBy(ItemStack const &): class ItemStack const & __ptr64 */
	getCarriedItemInSlotPreferredBy(_1: object): ItemStack; /// ?getCarriedItemInSlotPreferredBy@Actor@@QEBAAEBVItemStack@@AEBV2@@Z
	/** getChestSlots(void): int */
	getChestSlots(): number; /// ?getChestSlots@Actor@@UEBAHXZ
	/** getColor(void): enum PaletteColor */
	getColor(): bigint; /// ?getColor@Actor@@QEBA?AW4PaletteColor@@XZ
	/** getColor2(void): enum PaletteColor */
	getColor2(): bigint; /// ?getColor2@Actor@@QEBA?AW4PaletteColor@@XZ
	/** getCommandPermissionLevel(void): enum CommandPermissionLevel */
	getCommandPermissionLevel(): bigint; /// ?getCommandPermissionLevel@Actor@@UEBA?AW4CommandPermissionLevel@@XZ
	/** getControllingSeat(void): int */
	getControllingSeat(): number; /// ?getControllingSeat@Actor@@QEBAHXZ
	/** getDamageNearbyMobs(void): bool */
	getDamageNearbyMobs(): boolean; /// ?getDamageNearbyMobs@Actor@@QEBA_NXZ
	/** getDimensionConst(void): class Dimension const & __ptr64 */
	getDimensionConst(): Dimension; /// ?getDimensionConst@Actor@@QEBAAEBVDimension@@XZ
	/** getDimensionId(void): class AutomaticID<class Dimension,int> */
	getDimensionId(): unknown; /// ?getDimensionId@Actor@@UEBA?AV?$AutomaticID@VDimension@@H@@XZ
	/** getEffect(MobEffect const &): class MobEffectInstance const * __ptr64 */
	getEffect(_1: object): unknown; /// ?getEffect@Actor@@QEBAPEBVMobEffectInstance@@AEBVMobEffect@@@Z
	/** getEntityTypeId(void): enum ActorType */
	getEntityTypeId(): bigint; /// ?getEntityTypeId@Actor@@UEBA?AW4ActorType@@XZ
	/** getEquipSlots(void): int */
	getEquipSlots(): number; /// ?getEquipSlots@Actor@@UEBAHXZ
	/** getEquipmentCount(void): int */
	getEquipmentCount(): number; /// ?getEquipmentCount@Actor@@UEBAHXZ
	/** getEquippedSlot(EquipmentSlot): class ItemStack const & __ptr64 */
	getEquippedSlot(_1: unknown): ItemStack; /// ?getEquippedSlot@Actor@@UEBAAEBVItemStack@@W4EquipmentSlot@@@Z
	/** getEquippedTotem(void): class ItemStack const & __ptr64 */
	getEquippedTotem(): ItemStack; /// ?getEquippedTotem@Actor@@UEBAAEBVItemStack@@XZ
	/** getFiringPos(void): class Vec3 */
	getFiringPos(): unknown; /// ?getFiringPos@Actor@@UEBA?AVVec3@@XZ
	/** getFirstPassenger(void): class Actor * __ptr64 */
	getFirstPassenger(): Actor; /// ?getFirstPassenger@Actor@@QEBAPEAV1@XZ
	/** getFormattedNameTag(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	getFormattedNameTag(): unknown; /// ?getFormattedNameTag@Actor@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** getHandContainer(void): class SimpleContainer const & __ptr64 */
	getHandContainer(): SimpleContainer; /// ?getHandContainer@Actor@@QEBAAEBVSimpleContainer@@XZ
	/** getHeadLookVector(float): class Vec3 */
	getHeadLookVector(_1: number): unknown; /// ?getHeadLookVector@Actor@@UEBA?AVVec3@@M@Z
	getHealth(): bigint; /// Actor::getHealth
	/** getHealth(void): int */
	getHealth(): number; /// ?getHealth@Actor@@QEBAHXZ
	/** getHurtDir(void): int */
	getHurtDir(): number; /// ?getHurtDir@Actor@@QEBAHXZ
	/** getInteraction(Player &,ActorInteraction &,Vec3 const &): bool */
	getInteraction(_1: object, _2: object, _3: object): boolean; /// ?getInteraction@Actor@@UEAA_NAEAVPlayer@@AEAVActorInteraction@@AEBVVec3@@@Z
	/** getInterpolatedPosition(float): class Vec3 */
	getInterpolatedPosition(_1: number): unknown; /// ?getInterpolatedPosition@Actor@@QEBA?AVVec3@@M@Z
	/** getInterpolatedRidingPosition(float): class Vec3 */
	getInterpolatedRidingPosition(_1: number): unknown; /// ?getInterpolatedRidingPosition@Actor@@UEBA?AVVec3@@M@Z
	/** getInterpolatedRotation(float): class Vec2 */
	getInterpolatedRotation(_1: number): unknown; /// ?getInterpolatedRotation@Actor@@QEBA?AVVec2@@M@Z
	/** getInterpolatedWalkAnimSpeed(float): float */
	getInterpolatedWalkAnimSpeed(_1: number): number; /// ?getInterpolatedWalkAnimSpeed@Actor@@UEBAMM@Z
	/** getInventorySize(void): int */
	getInventorySize(): number; /// ?getInventorySize@Actor@@UEBAHXZ
	/** getLastHurtByMob(void): class Mob * __ptr64 */
	getLastHurtByMob(): Mob; /// ?getLastHurtByMob@Actor@@UEAAPEAVMob@@XZ
	/** getLastHurtByPlayer(void): class Player * __ptr64 */
	getLastHurtByPlayer(): Player; /// ?getLastHurtByPlayer@Actor@@UEAAPEAVPlayer@@XZ
	/** getLastHurtMob(void): class Mob * __ptr64 */
	getLastHurtMob(): Mob; /// ?getLastHurtMob@Actor@@UEAAPEAVMob@@XZ
	/** getLastHurtTimestamp(void): unsigned __int64 */
	getLastHurtTimestamp(): bigint; /// ?getLastHurtTimestamp@Actor@@QEBA_KXZ
	/** getLevel(void): class Level const & __ptr64 */
	getLevel(): Level; /// ?getLevel@Actor@@QEBAAEBVLevel@@XZ
	/** getLinks(void): class std::vector<struct ActorLink,class std::allocator<struct ActorLink> > */
	getLinks(): unknown; /// ?getLinks@Actor@@QEBA?AV?$vector@UActorLink@@V?$allocator@UActorLink@@@std@@@std@@XZ
	/** getLiquidAABB(MaterialType): class AABB */
	getLiquidAABB(_1: unknown): AABB; /// ?getLiquidAABB@Actor@@UEBA?AVAABB@@W4MaterialType@@@Z
	/** getLootTable(void): class LootTable * __ptr64 */
	getLootTable(): unknown; /// ?getLootTable@Actor@@UEAAPEAVLootTable@@XZ
	/** getMapDecorationRotation(void): float */
	getMapDecorationRotation(): number; /// ?getMapDecorationRotation@Actor@@UEBAMXZ
	/** getMarkVariant(void): int */
	getMarkVariant(): number; /// ?getMarkVariant@Actor@@QEBAHXZ
	/** getMaxHealth(void): int */
	getMaxHealth(): number; /// ?getMaxHealth@Actor@@QEBAHXZ
	/** getMolangVariables(void): class MolangVariableMap & __ptr64 */
	getMolangVariables(): unknown; /// ?getMolangVariables@Actor@@QEAAAEAVMolangVariableMap@@XZ
	/** getMovementProxy(void): class gsl::not_null<class std::shared_ptr<struct IActorMovementProxy const> > */
	getMovementProxy(): unknown; /// ?getMovementProxy@Actor@@QEBA?AV?$not_null@V?$shared_ptr@$$CBUIActorMovementProxy@@@std@@@gsl@@XZ
	/** getMutableAttribute(Attribute const &): class AttributeInstance * __ptr64 */
	getMutableAttribute(_1: object): unknown; /// ?getMutableAttribute@Actor@@UEAAPEAVAttributeInstance@@AEBVAttribute@@@Z
	/** getNameTag(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64 */
	getNameTag(): unknown; /// ?getNameTag@Actor@@UEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** getNextStep(float): float */
	getNextStep(_1: number): number; /// ?getNextStep@Actor@@UEAAMM@Z
	/** getOffhandSlot(void): class ItemStack const & __ptr64 */
	getOffhandSlot(): ItemStack; /// ?getOffhandSlot@Actor@@QEBAAEBVItemStack@@XZ
	/** getOrAddDynamicProperties(void): class DynamicProperties & __ptr64 */
	getOrAddDynamicProperties(): unknown; /// ?getOrAddDynamicProperties@Actor@@QEAAAEAVDynamicProperties@@XZ
	/** getOwner(void): class Mob * __ptr64 */
	getOwner(): Mob; /// ?getOwner@Actor@@QEBAPEAVMob@@XZ
	/** getOwnerEntityType(void): enum ActorType */
	getOwnerEntityType(): bigint; /// ?getOwnerEntityType@Actor@@UEAA?AW4ActorType@@XZ
	/** getOwnerId(void): struct ActorUniqueID const */
	getOwnerId(): unknown; /// ?getOwnerId@Actor@@QEBA?BUActorUniqueID@@XZ
	/** getPassengerIndex(Actor const &): int */
	getPassengerIndex(_1: object): number; /// ?getPassengerIndex@Actor@@QEBAHAEBV1@@Z
	/** getPassengerYRotation(Actor const &): float */
	getPassengerYRotation(_1: object): number; /// ?getPassengerYRotation@Actor@@UEBAMAEBV1@@Z
	/** getPersistingTradeOffers(void): class std::unique_ptr<class CompoundTag,struct std::default_delete<class CompoundTag> > */
	getPersistingTradeOffers(): unknown; /// ?getPersistingTradeOffers@Actor@@QEAA?AV?$unique_ptr@VCompoundTag@@U?$default_delete@VCompoundTag@@@std@@@std@@XZ
	/** getPickRadius(void): float */
	getPickRadius(): number; /// ?getPickRadius@Actor@@UEAAMXZ
	/** getPlayerOwner(void): class Player * __ptr64 */
	getPlayerOwner(): Player; /// ?getPlayerOwner@Actor@@QEBAPEAVPlayer@@XZ
	/** getPortalCooldown(void): int */
	getPortalCooldown(): number; /// ?getPortalCooldown@Actor@@UEBAHXZ
	/** getPosDelta(void): class Vec3 const & __ptr64 */
	getPosDelta(): unknown; /// ?getPosDelta@Actor@@QEBAAEBVVec3@@XZ
	/** getPosExtrapolated(float): class Vec3 const */
	getPosExtrapolated(_1: number): unknown; /// ?getPosExtrapolated@Actor@@UEBA?BVVec3@@M@Z
	/** getPosPrev(void): class Vec3 const & __ptr64 */
	getPosPrev(): unknown; /// ?getPosPrev@Actor@@UEBAAEBVVec3@@XZ
	/** getPosition(void): class Vec3 const & __ptr64 */
	getPosition(): unknown; /// ?getPosition@Actor@@UEBAAEBVVec3@@XZ
	/** getPredictedMovementValues(void): struct PredictedMovementValues const & __ptr64 */
	getPredictedMovementValues(): unknown; /// ?getPredictedMovementValues@Actor@@UEBAAEBUPredictedMovementValues@@XZ
	/** getRandom(void): class Random & __ptr64 */
	getRandom(): Random; /// ?getRandom@Actor@@QEBAAEAVRandom@@XZ
	/** getRegionConst(void): class BlockSource const & __ptr64 */
	getRegionConst(): BlockSource; /// ?getRegionConst@Actor@@QEBAAEBVBlockSource@@XZ
	/** getRidingHeight(void): float */
	getRidingHeight(): number; /// ?getRidingHeight@Actor@@QEBAMXZ
	/** getRotation(void): class Vec2 */
	getRotation(): unknown; /// ?getRotation@Actor@@QEBA?AVVec2@@XZ
	/** getRuntimeID(void): class ActorRuntimeID */
	getRuntimeID(): unknown; /// ?getRuntimeID@Actor@@QEBA?AVActorRuntimeID@@XZ
	/** getScoreTag(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64 */
	getScoreTag(): unknown; /// ?getScoreTag@Actor@@UEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** getShadowHeightOffs(void): float */
	getShadowHeightOffs(): number; /// ?getShadowHeightOffs@Actor@@UEAAMXZ
	/** getShadowRadius(void): float */
	getShadowRadius(): number; /// ?getShadowRadius@Actor@@UEBAMXZ
	/** getSourceUniqueID(void): struct ActorUniqueID */
	getSourceUniqueID(): unknown; /// ?getSourceUniqueID@Actor@@UEBA?AUActorUniqueID@@XZ
	/** getSpeedInMetersPerSecond(void): float */
	getSpeedInMetersPerSecond(): number; /// ?getSpeedInMetersPerSecond@Actor@@QEBAMXZ
	/** getStatusFlag(ActorFlags): bool */
	getStatusFlag(_1: unknown): boolean; /// ?getStatusFlag@Actor@@QEBA_NW4ActorFlags@@@Z
	/** getStructuralIntegrity(void): int */
	getStructuralIntegrity(): number; /// ?getStructuralIntegrity@Actor@@QEBAHXZ
	/** getTags(void): class gsl::span<class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> >,-1> const */
	getTags(): unknown; /// ?getTags@Actor@@QEBA?BV?$span@V?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@$0?0@gsl@@XZ
	/** getTarget(void): class Actor * __ptr64 */
	getTarget(): Actor; /// ?getTarget@Actor@@QEBAPEAV1@XZ
	/** getTradeOffers(void): class MerchantRecipeList * __ptr64 */
	getTradeOffers(): unknown; /// ?getTradeOffers@Actor@@QEAAPEAVMerchantRecipeList@@XZ
	/** getTradingPlayer(void): class Player * __ptr64 */
	getTradingPlayer(): Player; /// ?getTradingPlayer@Actor@@QEBAPEAVPlayer@@XZ
	/** getUniqueID(void): struct ActorUniqueID const & __ptr64 */
	getUniqueID(): unknown; /// ?getUniqueID@Actor@@QEBAAEBUActorUniqueID@@XZ
	/** getVariant(void): int */
	getVariant(): number; /// ?getVariant@Actor@@QEBAHXZ
	/** getVehicle(void): class Actor * __ptr64 */
	getVehicle(): Actor; /// ?getVehicle@Actor@@QEBAPEAV1@XZ
	/** getVehicleRoot(void): class Actor * __ptr64 */
	getVehicleRoot(): Actor; /// ?getVehicleRoot@Actor@@QEBAPEAV1@XZ
	/** getViewVector(float): class Vec3 */
	getViewVector(_1: number): unknown; /// ?getViewVector@Actor@@QEBA?AVVec3@@M@Z
	/** handleFallDistanceOnServer(float,float,bool): void */
	handleFallDistanceOnServer(_1: number, _2: number, _3: boolean): void; /// ?handleFallDistanceOnServer@Actor@@UEAAXMM_N@Z
	/** handleInsidePortal(BlockPos const &): void */
	handleInsidePortal(_1: object): void; /// ?handleInsidePortal@Actor@@UEAAXAEBVBlockPos@@@Z
	/** hasCategory(ActorCategory): bool */
	hasCategory(_1: unknown): boolean; /// ?hasCategory@Actor@@QEBA_NW4ActorCategory@@@Z
	/** hasEffect(MobEffect const &): bool */
	hasEffect(_1: object): boolean; /// ?hasEffect@Actor@@QEBA_NAEBVMobEffect@@@Z
	/** hasEnteredWater(void): bool */
	hasEnteredWater(): boolean; /// ?hasEnteredWater@Actor@@UEBA_NXZ
	/** hasFamily(HashedString const &): bool */
	hasFamily(_1: object): boolean; /// ?hasFamily@Actor@@QEBA_NAEBVHashedString@@@Z
	/** hasLevel(void): bool */
	hasLevel(): boolean; /// ?hasLevel@Actor@@QEBA_NXZ
	/** hasPassenger(void): bool */
	hasPassenger(): boolean; /// ?hasPassenger@Actor@@QEBA_NXZ
	/** hasPlayerPassenger(void): bool */
	hasPlayerPassenger(): boolean; /// ?hasPlayerPassenger@Actor@@QEBA_NXZ
	/** hasPriorityAmmunition(void): bool */
	hasPriorityAmmunition(): boolean; /// ?hasPriorityAmmunition@Actor@@QEBA_NXZ
	/** hasRuntimeID(void): bool */
	hasRuntimeID(): boolean; /// ?hasRuntimeID@Actor@@QEBA_NXZ
	/** hasSaddle(void): bool */
	hasSaddle(): boolean; /// ?hasSaddle@Actor@@QEBA_NXZ
	/** hasTeleported(void): bool */
	hasTeleported(): boolean; /// ?hasTeleported@Actor@@QEBA_NXZ
	/** hasType(ActorType): bool */
	hasType(_1: unknown): boolean; /// ?hasType@Actor@@QEBA_NW4ActorType@@@Z
	/** heal(int): void */
	heal(_1: number): void; /// ?heal@Actor@@UEAAXH@Z
	/** hurt(ActorDamageSource const &,float,bool,bool): bool */
	hurt(_1: object, _2: number, _3: boolean, _4: boolean): boolean; /// ?hurt@Actor@@QEAA_NAEBVActorDamageSource@@M_N1@Z
	/** initActorProperties(void): void */
	initActorProperties(): void; /// ?initActorProperties@Actor@@QEAAXXZ
	/** initParams(VariantParameterList &): void */
	initParams(_1: object): void; /// ?initParams@Actor@@QEAAXAEAVVariantParameterList@@@Z
	/** interpolatorTick(void): void */
	interpolatorTick(): void; /// ?interpolatorTick@Actor@@UEAAXXZ
	/** intersects(Vec3 const &,Vec3 const &): bool */
	intersects(_1: object, _2: object): boolean; /// ?intersects@Actor@@UEBA_NAEBVVec3@@0@Z
	/** isAffectedByWaterBottle(void): bool */
	isAffectedByWaterBottle(): boolean; /// ?isAffectedByWaterBottle@Actor@@UEBA_NXZ
	/** isAttackableGamemode(void): bool */
	isAttackableGamemode(): boolean; /// ?isAttackableGamemode@Actor@@UEBA_NXZ
	/** isAutonomous(void): bool */
	isAutonomous(): boolean; /// ?isAutonomous@Actor@@QEBA_NXZ
	/** isBaby(void): bool */
	isBaby(): boolean; /// ?isBaby@Actor@@QEBA_NXZ
	/** isBreakingObstruction(void): bool */
	isBreakingObstruction(): boolean; /// ?isBreakingObstruction@Actor@@QEBA_NXZ
	/** isClientSide(void): bool */
	isClientSide(): boolean; /// ?isClientSide@Actor@@UEBA_NXZ
	/** isControlledByLocalInstance(void): bool */
	isControlledByLocalInstance(): boolean; /// ?isControlledByLocalInstance@Actor@@QEBA_NXZ
	/** isEnchanted(void): bool */
	isEnchanted(): boolean; /// ?isEnchanted@Actor@@UEBA_NXZ
	/** isFireImmune(void): bool */
	isFireImmune(): boolean; /// ?isFireImmune@Actor@@UEBA_NXZ
	/** isGlobal(void): bool */
	isGlobal(): boolean; /// ?isGlobal@Actor@@QEBA_NXZ
	/** isImmersedInWater(IActorMovementProxy const &): bool */
	isImmersedInWater(_1: object): boolean; /// ?isImmersedInWater@Actor@@SA_NAEBUIActorMovementProxy@@@Z
	/** isInContactWithWater(void): bool */
	isInContactWithWater(): boolean; /// ?isInContactWithWater@Actor@@QEBA_NXZ
	/** isInLava(void): bool */
	isInLava(): boolean; /// ?isInLava@Actor@@UEBA_NXZ
	/** isInLove(void): bool */
	isInLove(): boolean; /// ?isInLove@Actor@@QEBA_NXZ
	/** isInPrecipitation(void): bool */
	isInPrecipitation(): boolean; /// ?isInPrecipitation@Actor@@QEBA_NXZ
	/** isInRain(void): bool */
	isInRain(): boolean; /// ?isInRain@Actor@@QEBA_NXZ
	/** isInSnow(void): bool */
	isInSnow(): boolean; /// ?isInSnow@Actor@@QEBA_NXZ
	/** isInThunderstorm(void): bool */
	isInThunderstorm(): boolean; /// ?isInThunderstorm@Actor@@QEBA_NXZ
	/** isInWall(void): bool */
	isInWall(): boolean; /// ?isInWall@Actor@@UEBA_NXZ
	/** isInWater(void): bool */
	isInWater(): boolean; /// ?isInWater@Actor@@UEBA_NXZ
	/** isInWaterOrRain(void): bool */
	isInWaterOrRain(): boolean; /// ?isInWaterOrRain@Actor@@QEBA_NXZ
	/** isInsideBorderBlock(float): bool */
	isInsideBorderBlock(_1: number): boolean; /// ?isInsideBorderBlock@Actor@@QEBA_NM@Z
	/** isInsidePortal(void): bool */
	isInsidePortal(): boolean; /// ?isInsidePortal@Actor@@QEBA_NXZ
	/** isInvertedHealAndHarm(void): bool */
	isInvertedHealAndHarm(): boolean; /// ?isInvertedHealAndHarm@Actor@@UEBA_NXZ
	/** isInvisible(void): bool */
	isInvisible(): boolean; /// ?isInvisible@Actor@@UEBA_NXZ
	/** isInvulnerableTo(ActorDamageSource const &): bool */
	isInvulnerableTo(_1: object): boolean; /// ?isInvulnerableTo@Actor@@UEBA_NAEBVActorDamageSource@@@Z
	/** isLeashed(void): bool */
	isLeashed(): boolean; /// ?isLeashed@Actor@@QEBA_NXZ
	/** isMoving(void): bool */
	isMoving(): boolean; /// ?isMoving@Actor@@QEBA_NXZ
	/** isOnFire(void): bool */
	isOnFire(): boolean; /// ?isOnFire@Actor@@UEBA_NXZ
	/** isOverWater(void): bool */
	isOverWater(): boolean; /// ?isOverWater@Actor@@UEBA_NXZ
	/** isPassenger(Actor const &): bool */
	isPassenger(_1: object): boolean; /// ?isPassenger@Actor@@QEBA_NAEBV1@@Z
	/** isRegionValid(void): bool */
	isRegionValid(): boolean; /// ?isRegionValid@Actor@@QEBA_NXZ
	/** isRemotePlayer(void): bool */
	isRemotePlayer(): boolean; /// ?isRemotePlayer@Actor@@UEBA_NXZ
	/** isRemoved(void): bool */
	isRemoved(): boolean; /// ?isRemoved@Actor@@QEBA_NXZ
	/** isRiding(Actor *): bool */
	isRiding(_1: object): boolean; /// ?isRiding@Actor@@QEBA_NPEAV1@@Z
	/** isRiding(void): bool */
	isRiding(): boolean; /// ?isRiding@Actor@@QEBA_NXZ
	/** isSilent(void): bool */
	isSilent(): boolean; /// ?isSilent@Actor@@UEBA_NXZ
	/** isSitting(void): bool */
	isSitting(): boolean; /// ?isSitting@Actor@@QEBA_NXZ
	/** isSkyLit(float): bool */
	isSkyLit(_1: number): boolean; /// ?isSkyLit@Actor@@UEAA_NM@Z
	/** isSneaking(void): bool */
	isSneaking(): boolean; /// ?isSneaking@Actor@@QEBA_NXZ
	/** isStanding(IActorMovementProxy const &): bool */
	isStanding(_1: object): boolean; /// ?isStanding@Actor@@SA_NAEBUIActorMovementProxy@@@Z
	/** isSwimming(void): bool */
	isSwimming(): boolean; /// ?isSwimming@Actor@@QEBA_NXZ
	/** isTame(void): bool */
	isTame(): boolean; /// ?isTame@Actor@@QEBA_NXZ
	/** isTouchingDamageBlock(void): bool */
	isTouchingDamageBlock(): boolean; /// ?isTouchingDamageBlock@Actor@@QEBA_NXZ
	/** isType(ActorType): bool */
	isType(_1: unknown): boolean; /// ?isType@Actor@@QEBA_NW4ActorType@@@Z
	/** isUnderLiquid(MaterialType): bool */
	isUnderLiquid(_1: unknown): boolean; /// ?isUnderLiquid@Actor@@UEBA_NW4MaterialType@@@Z
	/** isWearingLeatherArmor(void): bool const */
	isWearingLeatherArmor(): boolean; /// ?isWearingLeatherArmor@Actor@@UEBA?B_NXZ
	/** killed(Actor &): void */
	killed(_1: object): void; /// ?killed@Actor@@UEAAXAEAV1@@Z
	/** lerpMotion(Vec3 const &): void */
	lerpMotion(_1: object): void; /// ?lerpMotion@Actor@@UEAAXAEBVVec3@@@Z
	/** lerpTo(Vec3 const &,Vec2 const &,float,int): void */
	lerpTo(_1: object, _2: object, _3: number, _4: number): void; /// ?lerpTo@Actor@@QEAAXAEBVVec3@@AEBVVec2@@MH@Z
	/** lerpToRotation(Vec2 const &,int): void */
	lerpToRotation(_1: object, _2: number): void; /// ?lerpToRotation@Actor@@QEAAXAEBVVec2@@H@Z
	/** load(CompoundTag const &,DataLoadHelper &): bool */
	load(_1: object, _2: object): boolean; /// ?load@Actor@@UEAA_NAEBVCompoundTag@@AEAVDataLoadHelper@@@Z
	/** markHurt(void): void */
	markHurt(): void; /// ?markHurt@Actor@@MEAAXXZ
	/** move(IActorMovementProxy &,Vec3 const &): void */
	move(_1: object, _2: object): void; /// ?move@Actor@@UEBAXAEAUIActorMovementProxy@@AEBVVec3@@@Z
	/** move(Vec3 const &): void */
	move(_1: object): void; /// ?move@Actor@@UEAAXAEBVVec3@@@Z
	/** moveBBs(Vec3 const &): void */
	moveBBs(_1: object): void; /// ?moveBBs@Actor@@QEAAXAEBVVec3@@@Z
	/** moveRelative(float,float,float,float): void */
	moveRelative(_1: number, _2: number, _3: number, _4: number): void; /// ?moveRelative@Actor@@QEAAXMMMM@Z
	/** moveTo(Vec3 const &,Vec2 const &): void */
	moveTo(_1: object, _2: object): void; /// ?moveTo@Actor@@QEAAXAEBVVec3@@AEBVVec2@@@Z
	/** onAboveBubbleColumn(bool): void */
	onAboveBubbleColumn(_1: boolean): void; /// ?onAboveBubbleColumn@Actor@@UEAAX_N@Z
	/** onAffectedByWaterBottle(void): void */
	onAffectedByWaterBottle(): void; /// ?onAffectedByWaterBottle@Actor@@QEAAXXZ
	/** onEffectAdded(MobEffectInstance &): void */
	onEffectAdded(_1: object): void; /// ?onEffectAdded@Actor@@UEAAXAEAVMobEffectInstance@@@Z
	/** onEffectRemoved(MobEffectInstance &): void */
	onEffectRemoved(_1: object): void; /// ?onEffectRemoved@Actor@@UEAAXAEAVMobEffectInstance@@@Z
	/** onEffectUpdated(MobEffectInstance &): void */
	onEffectUpdated(_1: object): void; /// ?onEffectUpdated@Actor@@UEAAXAEAVMobEffectInstance@@@Z
	/** onInsideBubbleColumn(bool): void */
	onInsideBubbleColumn(_1: boolean): void; /// ?onInsideBubbleColumn@Actor@@UEAAX_N@Z
	/** onLightningHit(void): void */
	onLightningHit(): void; /// ?onLightningHit@Actor@@UEAAXXZ
	/** onOrphan(void): void */
	onOrphan(): void; /// ?onOrphan@Actor@@UEAAXXZ
	/** onSynchedDataUpdate(int): void */
	onSynchedDataUpdate(_1: number): void; /// ?onSynchedDataUpdate@Actor@@UEAAXH@Z
	/** onSynchedFlagUpdate(int,__int64,__int64): void */
	onSynchedFlagUpdate(_1: number, _2: bigint, _3: bigint): void; /// ?onSynchedFlagUpdate@Actor@@UEAAXH_J0@Z
	/** openContainerComponent(Player &): void */
	openContainerComponent(_1: object): void; /// ?openContainerComponent@Actor@@UEAAXAEAVPlayer@@@Z
	/** performRangedAttack(Actor &,float): void */
	performRangedAttack(_1: object, _2: number): void; /// ?performRangedAttack@Actor@@UEAAXAEAV1@M@Z
	/** pickUpItem(ItemActor &,int): void */
	pickUpItem(_1: object, _2: number): void; /// ?pickUpItem@Actor@@QEAAXAEAVItemActor@@H@Z
	/** playAmbientSound(void): void */
	playAmbientSound(): void; /// ?playAmbientSound@Actor@@UEAAXXZ
	/** playSound(LevelSoundEvent,Vec3 const &,int): void */
	playSound(_1: unknown, _2: object, _3: number): void; /// ?playSound@Actor@@QEAAXW4LevelSoundEvent@@AEBVVec3@@H@Z
	/** playSynchronizedSound(LevelSoundEvent,Vec3 const &,Block const &,bool): void */
	playSynchronizedSound(_1: unknown, _2: object, _3: object, _4: boolean): void; /// ?playSynchronizedSound@Actor@@UEAAXW4LevelSoundEvent@@AEBVVec3@@AEBVBlock@@_N@Z
	/** playSynchronizedSound(LevelSoundEvent,Vec3 const &,int,bool): void */
	playSynchronizedSound(_1: unknown, _2: object, _3: number, _4: boolean): void; /// ?playSynchronizedSound@Actor@@UEAAXW4LevelSoundEvent@@AEBVVec3@@H_N@Z
	/** positionAllPassengers(bool): void */
	positionAllPassengers(_1: boolean): void; /// ?positionAllPassengers@Actor@@QEAAX_N@Z
	/** positionPassenger(Actor &,float): void */
	positionPassenger(_1: object, _2: number): void; /// ?positionPassenger@Actor@@UEAAXAEAV1@M@Z
	/** postSplashGameEvent(void): void */
	postSplashGameEvent(): void; /// ?postSplashGameEvent@Actor@@QEAAXXZ
	/** pushBackActionEventToActionQueue(ActionEvent): void */
	pushBackActionEventToActionQueue(_1: unknown): void; /// ?pushBackActionEventToActionQueue@Actor@@QEAAXVActionEvent@@@Z
	/** pushOutOfBlocks(Vec3 const &): void */
	pushOutOfBlocks(_1: object): void; /// ?pushOutOfBlocks@Actor@@MEAAXAEBVVec3@@@Z
	/** reload(void): void */
	reload(): void; /// ?reload@Actor@@QEAAXXZ
	/** reloadComponents(Actor::InitializationMethod,VariantParameterList const &): void */
	reloadComponents(_1: unknown, _2: object): void; /// ?reloadComponents@Actor@@MEAAXW4InitializationMethod@1@AEBVVariantParameterList@@@Z
	/** reloadLootTable(EquipmentTableDefinition const &): void */
	reloadLootTable(_1: object): void; /// ?reloadLootTable@Actor@@UEAAXAEBUEquipmentTableDefinition@@@Z
	/** reloadLootTable(void): void */
	reloadLootTable(): void; /// ?reloadLootTable@Actor@@UEAAXXZ
	/** remove(void): void */
	remove(): void; /// ?remove@Actor@@UEAAXXZ
	/** removeEffect(int): void */
	removeEffect(_1: number): void; /// ?removeEffect@Actor@@QEAAXH@Z
	/** resetBlockMovementSlowdownMultiplier(void): void */
	resetBlockMovementSlowdownMultiplier(): void; /// ?resetBlockMovementSlowdownMultiplier@Actor@@UEAAXXZ
	/** resetClientAnimations(void): void */
	resetClientAnimations(): void; /// ?resetClientAnimations@Actor@@QEAAXXZ
	/** resetRegion(void): void */
	resetRegion(): void; /// ?resetRegion@Actor@@QEAAXXZ
	/** save(CompoundTag &): bool */
	save(_1: object): boolean; /// ?save@Actor@@UEBA_NAEAVCompoundTag@@@Z
	/** saveEntityFlags(CompoundTag &): void */
	saveEntityFlags(_1: object): void; /// ?saveEntityFlags@Actor@@QEBAXAEAVCompoundTag@@@Z
	/** saveWithoutId(CompoundTag &): void */
	saveWithoutId(_1: object): void; /// ?saveWithoutId@Actor@@UEBAXAEAVCompoundTag@@@Z
	/** sendMotionPacketIfNeeded(void): void */
	sendMotionPacketIfNeeded(): void; /// ?sendMotionPacketIfNeeded@Actor@@UEAAXXZ
	/** serializationSetHealth(int): void */
	serializationSetHealth(_1: number): void; /// ?serializationSetHealth@Actor@@QEAAXH@Z
	/** setAABB(AABB const &): void */
	setAABB(_1: object): void; /// ?setAABB@Actor@@QEAAXAEBVAABB@@@Z
	/** setActorRendererId(HashedString): void */
	setActorRendererId(_1: unknown): void; /// ?setActorRendererId@Actor@@QEAAXVHashedString@@@Z
	/** setArmor(ArmorSlot,ItemStack const &): void */
	setArmor(_1: unknown, _2: object): void; /// ?setArmor@Actor@@UEAAXW4ArmorSlot@@AEBVItemStack@@@Z
	/** setBlockMovementSlowdownMultiplier(BlockLegacy const &,Vec3 const &): void */
	setBlockMovementSlowdownMultiplier(_1: object, _2: object): void; /// ?setBlockMovementSlowdownMultiplier@Actor@@UEAAXAEBVBlockLegacy@@AEBVVec3@@@Z
	/** setBreakingObstruction(bool): void */
	setBreakingObstruction(_1: boolean): void; /// ?setBreakingObstruction@Actor@@QEAAX_N@Z
	/** setCanFly(bool): void */
	setCanFly(_1: boolean): void; /// ?setCanFly@Actor@@QEAAX_N@Z
	/** setCanPowerJump(bool): void */
	setCanPowerJump(_1: boolean): void; /// ?setCanPowerJump@Actor@@UEAAX_N@Z
	/** setCarriedItem(ItemStack const &): void */
	setCarriedItem(_1: object): void; /// ?setCarriedItem@Actor@@UEAAXAEBVItemStack@@@Z
	/** setCharged(bool): void */
	setCharged(_1: boolean): void; /// ?setCharged@Actor@@QEAAX_N@Z
	/** setColor(PaletteColor): void */
	setColor(_1: unknown): void; /// ?setColor@Actor@@QEAAXW4PaletteColor@@@Z
	/** setDamageNearbyMobs(bool): void */
	setDamageNearbyMobs(_1: boolean): void; /// ?setDamageNearbyMobs@Actor@@UEAAX_N@Z
	/** setDancing(bool): void */
	setDancing(_1: boolean): void; /// ?setDancing@Actor@@QEAAX_N@Z
	/** setEnchanted(bool): void */
	setEnchanted(_1: boolean): void; /// ?setEnchanted@Actor@@QEAAX_N@Z
	/** setHurtDir(int): void */
	setHurtDir(_1: number): void; /// ?setHurtDir@Actor@@QEAAXH@Z
	/** setHurtTime(int): void */
	setHurtTime(_1: number): void; /// ?setHurtTime@Actor@@QEAAXH@Z
	/** setInvisible(bool): void */
	setInvisible(_1: boolean): void; /// ?setInvisible@Actor@@QEAAX_N@Z
	/** setJumpDuration(int): void */
	setJumpDuration(_1: number): void; /// ?setJumpDuration@Actor@@QEAAXH@Z
	/** setLastHitBB(Vec3 const &,Vec3 const &): void */
	setLastHitBB(_1: object, _2: object): void; /// ?setLastHitBB@Actor@@QEAAXAEBVVec3@@0@Z
	/** setLastHurtByMob(Mob *): void */
	setLastHurtByMob(_1: object): void; /// ?setLastHurtByMob@Actor@@UEAAXPEAVMob@@@Z
	/** setLastHurtByPlayer(Player *): void */
	setLastHurtByPlayer(_1: object): void; /// ?setLastHurtByPlayer@Actor@@UEAAXPEAVPlayer@@@Z
	/** setLastHurtMob(Actor *): void */
	setLastHurtMob(_1: object): void; /// ?setLastHurtMob@Actor@@UEAAXPEAV1@@Z
	/** setLeashHolder(ActorUniqueID): void */
	setLeashHolder(_1: unknown): void; /// ?setLeashHolder@Actor@@QEAAXUActorUniqueID@@@Z
	/** setMoving(bool): void */
	setMoving(_1: boolean): void; /// ?setMoving@Actor@@QEAAX_N@Z
	/** setNameTagVisible(bool): void */
	setNameTagVisible(_1: boolean): void; /// ?setNameTagVisible@Actor@@UEAAX_N@Z
	/** setOffhandSlot(ItemStack const &): void */
	setOffhandSlot(_1: object): void; /// ?setOffhandSlot@Actor@@UEAAXAEBVItemStack@@@Z
	/** setOwner(ActorUniqueID): void */
	setOwner(_1: unknown): void; /// ?setOwner@Actor@@UEAAXUActorUniqueID@@@Z
	/** setPersistent(void): void */
	setPersistent(): void; /// ?setPersistent@Actor@@QEAAXXZ
	/** setPos(Vec3 const &): void */
	setPos(_1: object): void; /// ?setPos@Actor@@UEAAXAEBVVec3@@@Z
	/** setPreviousPosRot(Vec3 const &,Vec2 const &): void */
	setPreviousPosRot(_1: object, _2: object): void; /// ?setPreviousPosRot@Actor@@QEAAXAEBVVec3@@AEBVVec2@@@Z
	/** setRegion(BlockSource &): void */
	setRegion(_1: object): void; /// ?setRegion@Actor@@QEAAXAEAVBlockSource@@@Z
	/** setResting(bool): void */
	setResting(_1: boolean): void; /// ?setResting@Actor@@QEAAX_N@Z
	/** setRot(Vec2 const &): void */
	setRot(_1: object): void; /// ?setRot@Actor@@UEAAXAEBVVec2@@@Z
	/** setScared(bool): void */
	setScared(_1: boolean): void; /// ?setScared@Actor@@QEAAX_N@Z
	/** setSitting(bool): void */
	setSitting(_1: boolean): void; /// ?setSitting@Actor@@UEAAX_N@Z
	/** setSize(float,float): void */
	setSize(_1: number, _2: number): void; /// ?setSize@Actor@@UEAAXMM@Z
	/** setSneaking(bool): void */
	setSneaking(_1: boolean): void; /// ?setSneaking@Actor@@UEAAX_N@Z
	/** setStanding(bool): void */
	setStanding(_1: boolean): void; /// ?setStanding@Actor@@UEAAX_N@Z
	/** setStatusFlag(ActorFlags,bool): void */
	setStatusFlag(_1: unknown, _2: boolean): void; /// ?setStatusFlag@Actor@@QEAAXW4ActorFlags@@_N@Z
	/** setStunned(bool): void */
	setStunned(_1: boolean): void; /// ?setStunned@Actor@@QEAAX_N@Z
	/** setVariant(int): void */
	setVariant(_1: number): void; /// ?setVariant@Actor@@QEAAXH@Z
	/** shouldRender(void): bool */
	shouldRender(): boolean; /// ?shouldRender@Actor@@UEBA_NXZ
	/** shouldTick(void): bool */
	shouldTick(): boolean; /// ?shouldTick@Actor@@UEBA_NXZ
	/** shouldTryMakeStepSound(void): bool */
	shouldTryMakeStepSound(): boolean; /// ?shouldTryMakeStepSound@Actor@@MEAA_NXZ
	/** spawnAtLocation(Block const &,int): class ItemActor * __ptr64 */
	spawnAtLocation(_1: object, _2: number): unknown; /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@AEBVBlock@@H@Z
	/** spawnAtLocation(Block const &,int,float): class ItemActor * __ptr64 */
	spawnAtLocation(_1: object, _2: number, _3: number): unknown; /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@AEBVBlock@@HM@Z
	/** spawnAtLocation(ItemStack const &,float): class ItemActor * __ptr64 */
	spawnAtLocation(_1: object, _2: number): unknown; /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@AEBVItemStack@@M@Z
	/** spawnAtLocation(int,int): class ItemActor * __ptr64 */
	spawnAtLocation(_1: number, _2: number): unknown; /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@HH@Z
	/** spawnAtLocation(int,int,float): class ItemActor * __ptr64 */
	spawnAtLocation(_1: number, _2: number, _3: number): unknown; /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@HHM@Z
	/** spawnDeathParticles(void): void */
	spawnDeathParticles(): void; /// ?spawnDeathParticles@Actor@@QEAAXXZ
	/** spawnDustParticles(int): void */
	spawnDustParticles(_1: number): void; /// ?spawnDustParticles@Actor@@QEAAXH@Z
	/** spawnTamingParticles(bool): void */
	spawnTamingParticles(_1: boolean): void; /// ?spawnTamingParticles@Actor@@QEAAX_N@Z
	/** spawnTrailBubbles(void): void */
	spawnTrailBubbles(): void; /// ?spawnTrailBubbles@Actor@@MEAAXXZ
	/** startSpinAttack(void): void */
	startSpinAttack(): void; /// ?startSpinAttack@Actor@@UEAAXXZ
	/** startSwimming(void): void */
	startSwimming(): void; /// ?startSwimming@Actor@@UEAAXXZ
	/** stopSwimming(void): void */
	stopSwimming(): void; /// ?stopSwimming@Actor@@UEAAXXZ
	/** thawFreezeEffect(void): void */
	thawFreezeEffect(): void; /// ?thawFreezeEffect@Actor@@UEAAXXZ
	/** tickLeash(void): void */
	tickLeash(): void; /// ?tickLeash@Actor@@UEAAXXZ
	/** tryCreateAddActorPacket(void): class std::unique_ptr<class AddActorBasePacket,struct std::default_delete<class AddActorBasePacket> > */
	tryCreateAddActorPacket(): unknown; /// ?tryCreateAddActorPacket@Actor@@UEAA?AV?$unique_ptr@VAddActorBasePacket@@U?$default_delete@VAddActorBasePacket@@@std@@@std@@XZ
	/** tryGetEquippableSlotAllowedItems(int): class std::vector<class ItemDescriptor,class std::allocator<class ItemDescriptor> > const * __ptr64 */
	tryGetEquippableSlotAllowedItems(_1: number): unknown; /// ?tryGetEquippableSlotAllowedItems@Actor@@QEBAPEBV?$vector@VItemDescriptor@@V?$allocator@VItemDescriptor@@@std@@@std@@H@Z
	/** tryGetFromComponent(ActorOwnerComponent const &,bool): class Actor const * __ptr64 */
	tryGetFromComponent(_1: object, _2: boolean): Actor; /// ?tryGetFromComponent@Actor@@SAPEBV1@AEBVActorOwnerComponent@@_N@Z
	tryGetFromEntity(): bigint; /// Actor::tryGetFromEntity
	/** tryTeleportTo(Vec3 const &,bool,bool,int,int): bool */
	tryTeleportTo(_1: object, _2: boolean, _3: boolean, _4: number, _5: number): boolean; /// ?tryTeleportTo@Actor@@UEAA_NAEBVVec3@@_N1HH@Z
	/** updateBBFromDefinition(void): void */
	updateBBFromDefinition(): void; /// ?updateBBFromDefinition@Actor@@QEAAXXZ
	/** updateDescription(void): void */
	updateDescription(): void; /// ?updateDescription@Actor@@QEAAXXZ
	/** updateEntityInside(AABB const &): void */
	updateEntityInside(_1: object): void; /// ?updateEntityInside@Actor@@UEAAXAEBVAABB@@@Z
	/** updateEntityInside(void): void */
	updateEntityInside(): void; /// ?updateEntityInside@Actor@@UEAAXXZ
	/** updateInsideBlock(void): void */
	updateInsideBlock(): void; /// ?updateInsideBlock@Actor@@MEAAXXZ
	/** updateInvisibilityStatus(void): void */
	updateInvisibilityStatus(): void; /// ?updateInvisibilityStatus@Actor@@QEAAXXZ
	/** updateWaterState(void): bool */
	updateWaterState(): boolean; /// ?updateWaterState@Actor@@IEAA_NXZ
	/** useItem(ItemStackBase &,ItemUseMethod,bool): void */
	useItem(_1: object, _2: unknown, _3: boolean): void; /// ?useItem@Actor@@UEAAXAEAVItemStackBase@@W4ItemUseMethod@@_N@Z
	/** wasHurt(void): bool */
	wasHurt(): boolean; /// ?wasHurt@Actor@@UEAA_NXZ
	/** wasLastHitByPlayer(void): bool */
	wasLastHitByPlayer(): boolean; /// ?wasLastHitByPlayer@Actor@@QEAA_NXZ
	/** wasLoadedFromNBTThisFrame(void): bool */
	wasLoadedFromNBTThisFrame(): boolean; /// ?wasLoadedFromNBTThisFrame@Actor@@QEBA_NXZ
	/** wobble(void): void */
	wobble(): void; /// ?wobble@Actor@@UEAAXXZ
}
declare class Mouse {
	// Attributes 
	oldMouseX: number;
	mouseY: number;
	mouseX: number;
	oldMouseY: number;
	// Methods 
	// Inherited from Mouse
}
declare class NetworkItemStackDescriptor {
	// Attributes 
	extraData: SDKText;
	hasNetId: number;
	netId: ItemStackNetIdVariant;
	runtimeId: number;
	descriptor: InternalItemDescriptor;
	// Methods 
	// Inherited from NetworkItemStackDescriptor
	/** NetworkItemStackDescriptor(ItemStack const &) */
	NetworkItemStackDescriptor(_1: object): NetworkItemStackDescriptor; /// ??0NetworkItemStackDescriptor@@QEAA@AEBVItemStack@@@Z
	// Inherited from ItemDescriptorCount
	// Inherited from ItemDescriptor
	/** _resolve(void): void */
	_resolve(): void; /// ?_resolve@ItemDescriptor@@AEBAXXZ
	/** bindType(void): void */
	bindType(): void; /// ?bindType@ItemDescriptor@@SAXXZ
	/** getAuxValue(void): short */
	getAuxValue(): number; /// ?getAuxValue@ItemDescriptor@@QEBAFXZ
	/** getBlock(void): class Block const * __ptr64 */
	getBlock(): Block; /// ?getBlock@ItemDescriptor@@QEBAPEBVBlock@@XZ
	/** getId(void): short */
	getId(): number; /// ?getId@ItemDescriptor@@QEBAFXZ
	/** getIdAux(void): int */
	getIdAux(): number; /// ?getIdAux@ItemDescriptor@@QEBAHXZ
	/** getItem(void): class Item const * __ptr64 */
	getItem(): Item; /// ?getItem@ItemDescriptor@@QEBAPEBVItem@@XZ
	/** getRawNameId(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	getRawNameId(): unknown; /// ?getRawNameId@ItemDescriptor@@QEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** isNull(void): bool */
	isNull(): boolean; /// ?isNull@ItemDescriptor@@QEBA_NXZ
	/** sameItem(ItemStack const &,bool): bool */
	sameItem(_1: object, _2: boolean): boolean; /// ?sameItem@ItemDescriptor@@QEBA_NAEBVItemStack@@_N@Z
	/** serialize(BinaryStream &): void */
	serialize(_1: object): void; /// ?serialize@ItemDescriptor@@UEBAXAEAVBinaryStream@@@Z
	/** serialize(Json::Value &): void */
	serialize(_1: object): void; /// ?serialize@ItemDescriptor@@UEBAXAEAVValue@Json@@@Z
	toMap(_1: object): bigint; /// ?toMap@ItemDescriptor@@CA?AV?$map@V?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@V12@U?$less@V?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@@2@V?$allocator@U?$pair@$$CBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@V12@@std@@@2@@std@@AEBV1@@Z
}
declare class Optional {
	// Attributes 
	isPresent: number;
	ptr: LevelWeakPtr;
	// Methods 
	// Inherited from Optional
}
declare class Packet {
	// Attributes 
	dispatcher: PacketHandlerDispatcherInstance;
	// Methods 
	// Inherited from Packet
	/** readExtended(ReadOnlyBinaryStream &): struct ExtendedStreamReadResult */
	readExtended(_1: object): unknown; /// ?readExtended@Packet@@UEAA?AUExtendedStreamReadResult@@AEAVReadOnlyBinaryStream@@@Z
}
declare class PacketHandlerDispatcherInstance {
	// Attributes 
	vtable: object;
	// Methods 
	// Inherited from PacketHandlerDispatcherInstance
}
declare class Player {
	// Attributes 
	gamemode: number;
	playerName: SDKText;
	uuid: SDKText;
	canFly: number;
	gameMode: GameMode;
	_isSleeping: number;
	shakeTime: number;
	synchedActorData: SynchedActorDataEntityWrapper;
	isSpawned: number;
	supplies: PlayerInventoryProxy;
	skin: SerializedSkin;
	handContainer: SimpleContainer;
	transactionManager: InventoryTransactionManager;
	random: Random;
	isMovedToLimbo: number;
	bodyYaw: number;
	oldPosition: Vec3;
	vtable: object;
	_isJumping: number;
	bodyYawOld: number;
	height: number;
	damageTime: number;
	currentSwimAmount: number;
	movementSpeed: number;
	_isRemoved: number;
	ticksSinceDeath: number;
	_isSurfaceMob: number;
	currentDimensionId: number;
	ticksAlive: number;
	viewAngles: Vec2;
	viewAnglesOld: Vec2;
	actorRendererId: SDKHashedString;
	eyePos: Vec3;
	nameTagHash: bigint;
	fallDistance: number;
	onGround: number;
	stepHeight: number;
	slowdownFactor: Vec3;
	didEnterWater: number;
	dimension: Dimension;
	_isOnHotBlock: number;
	vehicle: bigint;
	region: BlockSource;
	level: Level;
	entityTypeId: number;
	aabb: AABB;
	width: number;
	position: Vec3;
	velocity: Vec3;
	allEffects: SDKVectorContainer;
	entityRuntimeId: bigint;
	isSafeToSleepNear: number;
	armorContainer: SimpleContainer;
	// Methods 
	// Inherited from Player
	/** _chooseSpawnArea(void): void */
	_chooseSpawnArea(): void; /// ?_chooseSpawnArea@Player@@IEAAXXZ
	/** _chooseSpawnPositionWithinArea(void): bool */
	_chooseSpawnPositionWithinArea(): boolean; /// ?_chooseSpawnPositionWithinArea@Player@@IEAA_NXZ
	/** _createChunkSource(ChunkSource &): class std::shared_ptr<class ChunkViewSource> */
	_createChunkSource(_1: object): unknown; /// ?_createChunkSource@Player@@MEAA?AV?$shared_ptr@VChunkViewSource@@@std@@AEAVChunkSource@@@Z
	/** _crit(Actor &): void */
	_crit(_1: object): void; /// ?_crit@Player@@UEAAXAEAVActor@@@Z
	/** _ensureSafeSpawnPosition(Vec3 &): void */
	_ensureSafeSpawnPosition(_1: object): void; /// ?_ensureSafeSpawnPosition@Player@@AEAAXAEAVVec3@@@Z
	/** _fireDimensionChanged(void): void */
	_fireDimensionChanged(): void; /// ?_fireDimensionChanged@Player@@UEAAXXZ
	/** _fireWillChangeDimension(void): void */
	_fireWillChangeDimension(): void; /// ?_fireWillChangeDimension@Player@@UEAAXXZ
	/** _handleCarriedItemInteractText(void): void */
	_handleCarriedItemInteractText(): void; /// ?_handleCarriedItemInteractText@Player@@AEAAXXZ
	/** _hurt(ActorDamageSource const &,float,bool,bool): bool */
	_hurt(_1: object, _2: number, _3: boolean, _4: boolean): boolean; /// ?_hurt@Player@@MEAA_NAEBVActorDamageSource@@M_N1@Z
	/** _isChunkSourceLoaded(Vec3 const &,BlockSource const &): bool */
	_isChunkSourceLoaded(_1: object, _2: object): boolean; /// ?_isChunkSourceLoaded@Player@@AEBA_NAEBVVec3@@AEBVBlockSource@@@Z
	/** _onSizeUpdated(void): void */
	_onSizeUpdated(): void; /// ?_onSizeUpdated@Player@@EEAAXXZ
	/** _shouldProvideFeedbackOnArmorSet(ArmorSlot,ItemStack const &): bool */
	_shouldProvideFeedbackOnArmorSet(_1: unknown, _2: object): boolean; /// ?_shouldProvideFeedbackOnArmorSet@Player@@MEBA_NW4ArmorSlot@@AEBVItemStack@@@Z
	/** add(ItemStack &): bool */
	add(_1: object): boolean; /// ?add@Player@@UEAA_NAEAVItemStack@@@Z
	/** addAdditionalSaveData(CompoundTag &): void */
	addAdditionalSaveData(_1: object): void; /// ?addAdditionalSaveData@Player@@MEBAXAEAVCompoundTag@@@Z
	/** addExperience(int): void */
	addExperience(_1: number): void; /// ?addExperience@Player@@UEAAXH@Z
	/** addLevels(int): void */
	addLevels(_1: number): void; /// ?addLevels@Player@@UEAAXH@Z
	/** aiStep(IMobMovementProxy &): void */
	aiStep(_1: object): void; /// ?aiStep@Player@@UEBAXAEAUIMobMovementProxy@@@Z
	/** aiStep(void): void */
	aiStep(): void; /// ?aiStep@Player@@UEAAXXZ
	/** attack(Actor &,ActorDamageCause const &): bool */
	attack(_1: object, _2: object): boolean; /// ?attack@Player@@UEAA_NAEAVActor@@AEBW4ActorDamageCause@@@Z
	/** awardKillScore(Actor &,int): void */
	awardKillScore(_1: object, _2: number): void; /// ?awardKillScore@Player@@UEAAXAEAVActor@@H@Z
	/** broadcastPlayerSpawnedMobEvent(ActorType,MobSpawnMethod): void */
	broadcastPlayerSpawnedMobEvent(_1: unknown, _2: unknown): void; /// ?broadcastPlayerSpawnedMobEvent@Player@@QEAAXW4ActorType@@W4MobSpawnMethod@@@Z
	/** canAddPassenger(Actor &): bool */
	canAddPassenger(_1: object): boolean; /// ?canAddPassenger@Player@@UEBA_NAEAVActor@@@Z
	/** canFreeze(void): bool */
	canFreeze(): boolean; /// ?canFreeze@Player@@UEBA_NXZ
	/** canJump(IPlayerMovementProxy &): bool */
	canJump(_1: object): boolean; /// ?canJump@Player@@SA_NAEAUIPlayerMovementProxy@@@Z
	/** canOpenContainerScreen(void): bool */
	canOpenContainerScreen(): boolean; /// ?canOpenContainerScreen@Player@@UEAA_NXZ
	/** canStartSleepInBed(void): bool */
	canStartSleepInBed(): boolean; /// ?canStartSleepInBed@Player@@UEAA_NXZ
	/** canUseAbility(AbilitiesIndex): bool */
	canUseAbility(_1: unknown): boolean; /// ?canUseAbility@Player@@QEBA_NW4AbilitiesIndex@@@Z
	/** causeFoodExhaustion(float): void */
	causeFoodExhaustion(_1: number): void; /// ?causeFoodExhaustion@Player@@QEAAXM@Z
	/** checkBed(BlockSource *,Vec3 const * const): bool */
	checkBed(_1: object, _2: object): boolean; /// ?checkBed@Player@@IEAA_NPEAVBlockSource@@QEBVVec3@@@Z
	/** checkNeedAutoJump(IPlayerMovementProxy *,float,float): bool */
	checkNeedAutoJump(_1: object, _2: number, _3: number): boolean; /// ?checkNeedAutoJump@Player@@SA_NPEAUIPlayerMovementProxy@@MM@Z
	/** checkSpawnBlock(BlockSource const &): bool */
	checkSpawnBlock(_1: object): boolean; /// ?checkSpawnBlock@Player@@IEBA_NAEBVBlockSource@@@Z
	/** completeUsingItem(void): void */
	completeUsingItem(): void; /// ?completeUsingItem@Player@@UEAAXXZ
	/** consumeTotem(void): bool */
	consumeTotem(): boolean; /// ?consumeTotem@Player@@UEAA_NXZ
	/** deleteContainerManager(void): void */
	deleteContainerManager(): void; /// ?deleteContainerManager@Player@@UEAAXXZ
	/** destroyRegion(void): void */
	destroyRegion(): void; /// ?destroyRegion@Player@@UEAAXXZ
	/** die(ActorDamageSource const &): void */
	die(_1: object): void; /// ?die@Player@@UEAAXAEBVActorDamageSource@@@Z
	/** drop(ItemStack const &,bool): bool */
	drop(_1: object, _2: boolean): boolean; /// ?drop@Player@@UEAA_NAEBVItemStack@@_N@Z
	/** dropEquipmentOnDeath(ActorDamageSource const &,int): void */
	dropEquipmentOnDeath(_1: object, _2: number): void; /// ?dropEquipmentOnDeath@Player@@UEAAXAEBVActorDamageSource@@H@Z
	/** dropEquipmentOnDeath(void): void */
	dropEquipmentOnDeath(): void; /// ?dropEquipmentOnDeath@Player@@UEAAXXZ
	/** eat(ItemStack const &): void */
	eat(_1: object): void; /// ?eat@Player@@QEAAXAEBVItemStack@@@Z
	/** eat(int,float): void */
	eat(_1: number, _2: number): void; /// ?eat@Player@@QEAAXHM@Z
	/** feed(int): void */
	feed(_1: number): void; /// ?feed@Player@@UEAAXH@Z
	/** getActorRendererId(void): class HashedString const & __ptr64 */
	getActorRendererId(): unknown; /// ?getActorRendererId@Player@@UEBAAEBVHashedString@@XZ
	/** getAgent(void): class Agent * __ptr64 */
	getAgent(): unknown; /// ?getAgent@Player@@QEBAPEAVAgent@@XZ
	/** getAgentIfAllowed(bool,ActorUniqueID): class Agent * __ptr64 */
	getAgentIfAllowed(_1: boolean, _2: unknown): unknown; /// ?getAgentIfAllowed@Player@@QEBAPEAVAgent@@_NUActorUniqueID@@@Z
	/** getAllEquipment(void): class std::vector<class ItemStack const * __ptr64,class std::allocator<class ItemStack const * __ptr64> > */
	getAllEquipment(): unknown; /// ?getAllEquipment@Player@@UEBA?AV?$vector@PEBVItemStack@@V?$allocator@PEBVItemStack@@@std@@@std@@XZ
	/** getAllHand(void): class std::vector<class ItemStack const * __ptr64,class std::allocator<class ItemStack const * __ptr64> > */
	getAllHand(): unknown; /// ?getAllHand@Player@@UEBA?AV?$vector@PEBVItemStack@@V?$allocator@PEBVItemStack@@@std@@@std@@XZ
	/** getAnimationComponent(void): class AnimationComponent & __ptr64 */
	getAnimationComponent(): unknown; /// ?getAnimationComponent@Player@@UEAAAEAVAnimationComponent@@XZ
	/** getAttachPos(ActorLocation,float): class Vec3 */
	getAttachPos(_1: unknown, _2: number): unknown; /// ?getAttachPos@Player@@UEBA?AVVec3@@W4ActorLocation@@M@Z
	/** getCameraOffset(void): float */
	getCameraOffset(): number; /// ?getCameraOffset@Player@@UEBAMXZ
	/** getCapePos(float): class Vec3 */
	getCapePos(_1: number): unknown; /// ?getCapePos@Player@@QEAA?AVVec3@@M@Z
	/** getCommandPermissionLevel(void): enum CommandPermissionLevel */
	getCommandPermissionLevel(): bigint; /// ?getCommandPermissionLevel@Player@@UEBA?AW4CommandPermissionLevel@@XZ
	/** getEntityTypeId(void): enum ActorType */
	getEntityTypeId(): bigint; /// ?getEntityTypeId@Player@@UEBA?AW4ActorType@@XZ
	/** getEquippedTotem(void): class ItemStack const & __ptr64 */
	getEquippedTotem(): ItemStack; /// ?getEquippedTotem@Player@@UEBAAEBVItemStack@@XZ
	/** getEventing(void): class IMinecraftEventing * __ptr64 */
	getEventing(): unknown; /// ?getEventing@Player@@UEBAPEAVIMinecraftEventing@@XZ
	/** getExpectedSpawnDimensionId(void): class AutomaticID<class Dimension,int> */
	getExpectedSpawnDimensionId(): unknown; /// ?getExpectedSpawnDimensionId@Player@@QEBA?AV?$AutomaticID@VDimension@@H@@XZ
	/** getExpectedSpawnPosition(void): class BlockPos const & __ptr64 */
	getExpectedSpawnPosition(): BlockPos; /// ?getExpectedSpawnPosition@Player@@QEBAAEBVBlockPos@@XZ
	/** getFormattedNameTag(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	getFormattedNameTag(): unknown; /// ?getFormattedNameTag@Player@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** getInterpolatedRidingOffset(float): class Vec3 */
	getInterpolatedRidingOffset(_1: number): unknown; /// ?getInterpolatedRidingOffset@Player@@UEBA?AVVec3@@M@Z
	/** getItemCooldownLeft(HashedString const &): int */
	getItemCooldownLeft(_1: object): number; /// ?getItemCooldownLeft@Player@@UEBAHAEBVHashedString@@@Z
	/** getItemCooldownLeft(unsigned __int64): int */
	getItemCooldownLeft(_1: bigint): number; /// ?getItemCooldownLeft@Player@@UEBAH_K@Z
	/** getItemStackNetManager(void): class ItemStackNetManagerBase const * __ptr64 */
	getItemStackNetManager(): unknown; /// ?getItemStackNetManager@Player@@QEBAPEBVItemStackNetManagerBase@@XZ
	/** getItemUseDuration(void): int */
	getItemUseDuration(): number; /// ?getItemUseDuration@Player@@UEBAHXZ
	/** getItemUseIntervalProgress(void): float */
	getItemUseIntervalProgress(): number; /// ?getItemUseIntervalProgress@Player@@UEBAMXZ
	/** getItemUseStartupProgress(void): float */
	getItemUseStartupProgress(): number; /// ?getItemUseStartupProgress@Player@@UEBAMXZ
	/** getLastDeathDimension(void): class std::optional<class AutomaticID<class Dimension,int> > */
	getLastDeathDimension(): unknown; /// ?getLastDeathDimension@Player@@UEBA?AV?$optional@V?$AutomaticID@VDimension@@H@@@std@@XZ
	/** getLastDeathPos(void): class std::optional<class BlockPos> */
	getLastDeathPos(): unknown; /// ?getLastDeathPos@Player@@UEBA?AV?$optional@VBlockPos@@@std@@XZ
	/** getLuck(void): float */
	getLuck(): number; /// ?getLuck@Player@@QEAAMXZ
	/** getMaxItemCooldownLeft(void): int */
	getMaxItemCooldownLeft(): number; /// ?getMaxItemCooldownLeft@Player@@UEBAHXZ
	/** getMovementSettings(void): struct PlayerMovementSettings const & __ptr64 */
	getMovementSettings(): unknown; /// ?getMovementSettings@Player@@UEBAAEBUPlayerMovementSettings@@XZ
	/** getPlayerSessionId(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64 */
	getPlayerSessionId(): unknown; /// ?getPlayerSessionId@Player@@QEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** getPortalWaitTime(void): int */
	getPortalWaitTime(): number; /// ?getPortalWaitTime@Player@@UEBAHXZ
	/** getPreviousTickSleepTimer(void): int */
	getPreviousTickSleepTimer(): number; /// ?getPreviousTickSleepTimer@Player@@UEBAHXZ
	/** getRespawnAnchorPosition(void): class BlockPos const & __ptr64 */
	getRespawnAnchorPosition(): BlockPos; /// ?getRespawnAnchorPosition@Player@@QEBAAEBVBlockPos@@XZ
	/** getSelectedItem(void): class ItemStack const & __ptr64 */
	getSelectedItem(): ItemStack; /// ?getSelectedItem@Player@@QEBAAEBVItemStack@@XZ
	/** getSelectedItemSlot(void): int */
	getSelectedItemSlot(): number; /// ?getSelectedItemSlot@Player@@QEBAHXZ
	/** getShadowRadius(void): float */
	getShadowRadius(): number; /// ?getShadowRadius@Player@@UEBAMXZ
	/** getSleepTimer(void): int */
	getSleepTimer(): number; /// ?getSleepTimer@Player@@UEBAHXZ
	/** getSpawnPosition(void): class BlockPos const & __ptr64 */
	getSpawnPosition(): BlockPos; /// ?getSpawnPosition@Player@@QEBAAEBVBlockPos@@XZ
	/** getSpeed(void): float */
	getSpeed(): number; /// ?getSpeed@Player@@UEBAMXZ
	/** getSupplies(void): class PlayerInventory const & __ptr64 */
	getSupplies(): unknown; /// ?getSupplies@Player@@QEBAAEBVPlayerInventory@@XZ
	/** getTickingOffsets(void): class std::vector<class ChunkPos,class std::allocator<class ChunkPos> > const & __ptr64 */
	getTickingOffsets(): unknown; /// ?getTickingOffsets@Player@@UEBAAEBV?$vector@VChunkPos@@V?$allocator@VChunkPos@@@std@@@std@@XZ
	/** getTrackedBosses(void): class std::vector<struct ActorUniqueID,class std::allocator<struct ActorUniqueID> > const & __ptr64 */
	getTrackedBosses(): unknown; /// ?getTrackedBosses@Player@@QEAAAEBV?$vector@UActorUniqueID@@V?$allocator@UActorUniqueID@@@std@@@std@@XZ
	/** getTravelledMethod(void): enum TravelMethod */
	getTravelledMethod(): bigint; /// ?getTravelledMethod@Player@@UEBA?AW4TravelMethod@@XZ
	/** getXpNeededForNextLevel(void): int */
	getXpNeededForNextLevel(): number; /// ?getXpNeededForNextLevel@Player@@QEBAHXZ
	/** getXuid(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	getXuid(): unknown; /// ?getXuid@Player@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** handleEntityEvent(ActorEvent,int): void */
	handleEntityEvent(_1: unknown, _2: number): void; /// ?handleEntityEvent@Player@@UEAAXW4ActorEvent@@H@Z
	/** hasBedPosition(void): bool */
	hasBedPosition(): boolean; /// ?hasBedPosition@Player@@QEBA_NXZ
	/** hasDiedBefore(void): bool */
	hasDiedBefore(): boolean; /// ?hasDiedBefore@Player@@UEBA_NXZ
	/** hasResource(int): bool */
	hasResource(_1: number): boolean; /// ?hasResource@Player@@UEAA_NH@Z
	/** hasRespawnPosition(void): bool */
	hasRespawnPosition(): boolean; /// ?hasRespawnPosition@Player@@QEBA_NXZ
	/** initBodyControl(void): class std::unique_ptr<class BodyControl,struct std::default_delete<class BodyControl> > */
	initBodyControl(): unknown; /// ?initBodyControl@Player@@EEAA?AV?$unique_ptr@VBodyControl@@U?$default_delete@VBodyControl@@@std@@@std@@XZ
	/** initHUDContainerManager(void): void */
	initHUDContainerManager(): void; /// ?initHUDContainerManager@Player@@UEAAXXZ
	/** initializeComponents(Actor::InitializationMethod,VariantParameterList const &): void */
	initializeComponents(_1: unknown, _2: object): void; /// ?initializeComponents@Player@@UEAAXW4InitializationMethod@Actor@@AEBVVariantParameterList@@@Z
	/** interact(Actor &,Vec3 const &): bool */
	interact(_1: object, _2: object): boolean; /// ?interact@Player@@QEAA_NAEAVActor@@AEBVVec3@@@Z
	/** inventoryChanged(Container &,int,ItemStack const &,ItemStack const &,bool): void */
	inventoryChanged(_1: object, _2: number, _3: object, _4: object, _5: boolean): void; /// ?inventoryChanged@Player@@UEAAXAEAVContainer@@HAEBVItemStack@@1_N@Z
	/** isAdventure(void): bool */
	isAdventure(): boolean; /// ?isAdventure@Player@@UEBA_NXZ
	/** isBlocking(void): bool */
	isBlocking(): boolean; /// ?isBlocking@Player@@UEBA_NXZ
	/** isDamageBlocked(ActorDamageSource const &): bool */
	isDamageBlocked(_1: object): boolean; /// ?isDamageBlocked@Player@@UEBA_NAEBVActorDamageSource@@@Z
	/** isDangerousVolume(BlockSource &,AABB const &,bool): bool */
	isDangerousVolume(_1: object, _2: object, _3: boolean): boolean; /// ?isDangerousVolume@Player@@SA_NAEAVBlockSource@@AEBVAABB@@_N@Z
	/** isFireImmune(void): bool */
	isFireImmune(): boolean; /// ?isFireImmune@Player@@UEBA_NXZ
	/** isForcedRespawn(void): bool */
	isForcedRespawn(): boolean; /// ?isForcedRespawn@Player@@QEBA_NXZ
	/** isHiddenFrom(Mob &): bool */
	isHiddenFrom(_1: object): boolean; /// ?isHiddenFrom@Player@@QEBA_NAEAVMob@@@Z
	/** isImmobile(void): bool */
	isImmobile(): boolean; /// ?isImmobile@Player@@UEBA_NXZ
	/** isInCreativeMode(void): bool */
	isInCreativeMode(): boolean; /// ?isInCreativeMode@Player@@QEBA_NXZ
	/** isInvulnerableTo(ActorDamageSource const &): bool */
	isInvulnerableTo(_1: object): boolean; /// ?isInvulnerableTo@Player@@UEBA_NAEBVActorDamageSource@@@Z
	/** isItemOnCooldown(HashedString const &): bool */
	isItemOnCooldown(_1: object): boolean; /// ?isItemOnCooldown@Player@@UEBA_NAEBVHashedString@@@Z
	/** isJumping(void): bool */
	isJumping(): boolean; /// ?isJumping@Player@@UEBA_NXZ
	/** isSilentObserver(void): bool */
	isSilentObserver(): boolean; /// ?isSilentObserver@Player@@UEBA_NXZ
	/** isSleeping(void): bool */
	isSleeping(): boolean; /// ?isSleeping@Player@@UEBA_NXZ
	/** isSpectator(void): bool */
	isSpectator(): boolean; /// ?isSpectator@Player@@UEBA_NXZ
	/** isSurvival(void): bool */
	isSurvival(): boolean; /// ?isSurvival@Player@@UEBA_NXZ
	/** isUsingItem(void): bool */
	isUsingItem(): boolean; /// ?isUsingItem@Player@@QEBA_NXZ
	/** isWorldBuilder(void): bool */
	isWorldBuilder(): boolean; /// ?isWorldBuilder@Player@@UEBA_NXZ
	/** jumpFromGround(void): void */
	jumpFromGround(): void; /// ?jumpFromGround@Player@@UEAAXXZ
	/** move(IActorMovementProxy &,Vec3 const &): void */
	move(_1: object, _2: object): void; /// ?move@Player@@UEBAXAEAUIActorMovementProxy@@AEBVVec3@@@Z
	/** move(Vec3 const &): void */
	move(_1: object): void; /// ?move@Player@@UEAAXAEBVVec3@@@Z
	/** moveView(void): void */
	moveView(): void; /// ?moveView@Player@@UEAAXXZ
	/** normalTick(void): void */
	normalTick(): void; /// ?normalTick@Player@@UEAAXXZ
	/** onBounceStarted(BlockPos const &,Block const &): void */
	onBounceStarted(_1: object, _2: object): void; /// ?onBounceStarted@Player@@MEAAXAEBVBlockPos@@AEBVBlock@@@Z
	/** onMovePlayerPacketNormal(Vec3 const &,Vec2 const &,float): void */
	onMovePlayerPacketNormal(_1: object, _2: object, _3: number): void; /// ?onMovePlayerPacketNormal@Player@@MEAAXAEBVVec3@@AEBVVec2@@M@Z
	/** passengerCheckMovementStats(void): void */
	passengerCheckMovementStats(): void; /// ?passengerCheckMovementStats@Player@@QEAAXXZ
	/** passengerTick(void): void */
	passengerTick(): void; /// ?passengerTick@Player@@UEAAXXZ
	/** prepareRegion(ChunkSource &): void */
	prepareRegion(_1: object): void; /// ?prepareRegion@Player@@UEAAXAEAVChunkSource@@@Z
	/** readAdditionalSaveData(CompoundTag const &,DataLoadHelper &): void */
	readAdditionalSaveData(_1: object, _2: object): void; /// ?readAdditionalSaveData@Player@@MEAAXAEBVCompoundTag@@AEAVDataLoadHelper@@@Z
	/** recheckSpawnPosition(void): void */
	recheckSpawnPosition(): void; /// ?recheckSpawnPosition@Player@@QEAAXXZ
	/** reloadHardcoded(Actor::InitializationMethod,VariantParameterList const &): void */
	reloadHardcoded(_1: unknown, _2: object): void; /// ?reloadHardcoded@Player@@UEAAXW4InitializationMethod@Actor@@AEBVVariantParameterList@@@Z
	/** remove(void): void */
	remove(): void; /// ?remove@Player@@UEAAXXZ
	/** resendAllChunks(void): void */
	resendAllChunks(): void; /// ?resendAllChunks@Player@@UEAAXXZ
	/** resetPlayerLevel(void): void */
	resetPlayerLevel(): void; /// ?resetPlayerLevel@Player@@QEAAXXZ
	/** resetUserPos(bool): void */
	resetUserPos(_1: boolean): void; /// ?resetUserPos@Player@@UEAAX_N@Z
	/** respawn(void): void */
	respawn(): void; /// ?respawn@Player@@UEAAXXZ
	/** sendEventPacket(EventPacket &): void */
	sendEventPacket(_1: object): void; /// ?sendEventPacket@Player@@UEBAXAEAVEventPacket@@@Z
	/** setAgent(Agent *): void */
	setAgent(_1: object): void; /// ?setAgent@Player@@QEAAXPEAVAgent@@@Z
	/** setArmor(ArmorSlot,ItemStack const &): void */
	setArmor(_1: unknown, _2: object): void; /// ?setArmor@Player@@UEAAXW4ArmorSlot@@AEBVItemStack@@@Z
	/** setBedRespawnPosition(BlockPos const &): void */
	setBedRespawnPosition(_1: object): void; /// ?setBedRespawnPosition@Player@@QEAAXAEBVBlockPos@@@Z
	/** setBlockMovementSlowdownMultiplier(BlockLegacy const &,Vec3 const &): void */
	setBlockMovementSlowdownMultiplier(_1: object, _2: object): void; /// ?setBlockMovementSlowdownMultiplier@Player@@UEAAXAEBVBlockLegacy@@AEBVVec3@@@Z
	/** setCarriedItem(ItemStack const &): void */
	setCarriedItem(_1: object): void; /// ?setCarriedItem@Player@@UEAAXAEBVItemStack@@@Z
	/** setCursorSelectedItemGroup(ItemGroup const &): void */
	setCursorSelectedItemGroup(_1: object): void; /// ?setCursorSelectedItemGroup@Player@@QEAAXAEBVItemGroup@@@Z
	/** setFieldOfViewModifier(float): void */
	setFieldOfViewModifier(_1: number): void; /// ?setFieldOfViewModifier@Player@@UEAAXM@Z
	/** setHasDied(bool): void */
	setHasDied(_1: boolean): void; /// ?setHasDied@Player@@QEAAX_N@Z
	/** setOffhandSlot(ItemStack const &): void */
	setOffhandSlot(_1: object): void; /// ?setOffhandSlot@Player@@UEAAXAEBVItemStack@@@Z
	/** setPlayerGameType(GameType): void */
	setPlayerGameType(_1: unknown): void; /// ?setPlayerGameType@Player@@UEAAXW4GameType@@@Z
	/** setRespawnPositionCandidate(void): void */
	setRespawnPositionCandidate(): void; /// ?setRespawnPositionCandidate@Player@@QEAAXXZ
	/** setSize(float,float): void */
	setSize(_1: number, _2: number): void; /// ?setSize@Player@@UEAAXMM@Z
	/** setSleeping(bool): void */
	setSleeping(_1: boolean): void; /// ?setSleeping@Player@@UEAAX_N@Z
	/** setSpeed(float): void */
	setSpeed(_1: number): void; /// ?setSpeed@Player@@UEAAXM@Z
	/** setUsedPotion(bool): void */
	setUsedPotion(_1: boolean): void; /// ?setUsedPotion@Player@@QEAAX_N@Z
	/** shouldDropDeathLoot(void): bool */
	shouldDropDeathLoot(): boolean; /// ?shouldDropDeathLoot@Player@@UEBA_NXZ
	/** startCooldown(Item const *,bool): void */
	startCooldown(_1: object, _2: boolean): void; /// ?startCooldown@Player@@UEAAXPEBVItem@@_N@Z
	/** startDestroying(void): void */
	startDestroying(): void; /// ?startDestroying@Player@@UEAAXXZ
	/** startSleepInBed(BlockPos const &): enum BedSleepingResult */
	startSleepInBed(_1: object): bigint; /// ?startSleepInBed@Player@@UEAA?AW4BedSleepingResult@@AEBVBlockPos@@@Z
	/** startSpinAttack(void): void */
	startSpinAttack(): void; /// ?startSpinAttack@Player@@UEAAXXZ
	/** startSwimming(void): void */
	startSwimming(): void; /// ?startSwimming@Player@@UEAAXXZ
	/** startUsingItem(ItemStack const &,int): void */
	startUsingItem(_1: object, _2: number): void; /// ?startUsingItem@Player@@QEAAXAEBVItemStack@@H@Z
	/** stopDestroying(void): void */
	stopDestroying(): void; /// ?stopDestroying@Player@@UEAAXXZ
	/** stopSleepInBed(bool,bool): void */
	stopSleepInBed(_1: boolean, _2: boolean): void; /// ?stopSleepInBed@Player@@UEAAX_N0@Z
	/** stopSpinAttack(void): void */
	stopSpinAttack(): void; /// ?stopSpinAttack@Player@@UEAAXXZ
	/** stopSwimming(void): void */
	stopSwimming(): void; /// ?stopSwimming@Player@@UEAAXXZ
	/** stopUsingItem(void): void */
	stopUsingItem(): void; /// ?stopUsingItem@Player@@QEAAXXZ
	/** suspendRegion(void): void */
	suspendRegion(): void; /// ?suspendRegion@Player@@UEAAXXZ
	/** take(Actor &,int,int): bool */
	take(_1: object, _2: number, _3: number): boolean; /// ?take@Player@@QEAA_NAEAVActor@@HH@Z
	/** teleportTo(Vec3 const &,bool,int,int,bool): void */
	teleportTo(_1: object, _2: boolean, _3: number, _4: number, _5: boolean): void; /// ?teleportTo@Player@@UEAAXAEBVVec3@@_NHH1@Z
	/** tickWorld(Tick const &): void */
	tickWorld(_1: object): void; /// ?tickWorld@Player@@UEAAXAEBUTick@@@Z
	/** travel(IMobMovementProxy &,float,float,float): void */
	travel(_1: object, _2: number, _3: number, _4: number): void; /// ?travel@Player@@UEBAXAEAUIMobMovementProxy@@MMM@Z
	/** travel(float,float,float): void */
	travel(_1: number, _2: number, _3: number): void; /// ?travel@Player@@UEAAXMMM@Z
	/** tryCreateAddActorPacket(void): class std::unique_ptr<class AddActorBasePacket,struct std::default_delete<class AddActorBasePacket> > */
	tryCreateAddActorPacket(): unknown; /// ?tryCreateAddActorPacket@Player@@UEAA?AV?$unique_ptr@VAddActorBasePacket@@U?$default_delete@VAddActorBasePacket@@@std@@@std@@XZ
	/** tryGetFromEntity(EntityContext &,bool): class Player * __ptr64 */
	tryGetFromEntity(_1: object, _2: boolean): Player; /// ?tryGetFromEntity@Player@@SAPEAV1@AEAVEntityContext@@_N@Z
	/** unRegisterTrackedBoss(ActorUniqueID): void */
	unRegisterTrackedBoss(_1: unknown): void; /// ?unRegisterTrackedBoss@Player@@UEAAXUActorUniqueID@@@Z
	/** updateGliding(void): void */
	updateGliding(): void; /// ?updateGliding@Player@@MEAAXXZ
	/** updateInventoryTransactions(void): void */
	updateInventoryTransactions(): void; /// ?updateInventoryTransactions@Player@@QEAAXXZ
	/** updateSkin(SerializedSkin const &,int): void */
	updateSkin(_1: object, _2: number): void; /// ?updateSkin@Player@@QEAAXAEBVSerializedSkin@@H@Z
	/** updateSpawnChunkView(void): void */
	updateSpawnChunkView(): void; /// ?updateSpawnChunkView@Player@@QEAAXXZ
	/** useItem(ItemStackBase &,ItemUseMethod,bool): void */
	useItem(_1: object, _2: unknown, _3: boolean): void; /// ?useItem@Player@@UEAAXAEAVItemStackBase@@W4ItemUseMethod@@_N@Z
	// Inherited from Mob
	/** _aiStep(IMobMovementProxy &): void */
	_aiStep(_1: object): void; /// ?_aiStep@Mob@@SAXAEAUIMobMovementProxy@@@Z
	/** _doInitialMove(void): void */
	_doInitialMove(): void; /// ?_doInitialMove@Mob@@MEAAXXZ
	/** _doSprintParticleEffect(void): void */
	_doSprintParticleEffect(): void; /// ?_doSprintParticleEffect@Mob@@IEAAXXZ
	/** _getAdjustedAABBForSpawnCheck(AABB const &,Vec3 const &): class AABB */
	_getAdjustedAABBForSpawnCheck(_1: object, _2: object): AABB; /// ?_getAdjustedAABBForSpawnCheck@Mob@@MEBA?AVAABB@@AEBV2@AEBVVec3@@@Z
	/** _initHardCodedComponents(void): bool */
	_initHardCodedComponents(): boolean; /// ?_initHardCodedComponents@Mob@@AEAA_NXZ
	/** _initialize(EntityContext &): void */
	_initialize(_1: object): void; /// ?_initialize@Mob@@AEAAXAEAVEntityContext@@@Z
	/** _playStepSound(BlockPos const &,Block const &): void */
	_playStepSound(_1: object, _2: object): void; /// ?_playStepSound@Mob@@MEAAXAEBVBlockPos@@AEBVBlock@@@Z
	/** _removePassenger(ActorUniqueID const &,bool,bool,bool): void */
	_removePassenger(_1: object, _2: boolean, _3: boolean, _4: boolean): void; /// ?_removePassenger@Mob@@MEAAXAEBUActorUniqueID@@_N11@Z
	/** _tryApplyingLevitation(IMobMovementProxy const &,Vec3 &): bool */
	_tryApplyingLevitation(_1: object, _2: object): boolean; /// ?_tryApplyingLevitation@Mob@@CA_NAEBUIMobMovementProxy@@AEAVVec3@@@Z
	/** _updateMobTravel(IMobMovementProxy &): void */
	_updateMobTravel(_1: object): void; /// ?_updateMobTravel@Mob@@SAXAEAUIMobMovementProxy@@@Z
	/** _updateSprintingState(void): void */
	_updateSprintingState(): void; /// ?_updateSprintingState@Mob@@AEAAXXZ
	/** addPassenger(Actor &): void */
	addPassenger(_1: object): void; /// ?addPassenger@Mob@@UEAAXAEAVActor@@@Z
	/** animateHurt(void): void */
	animateHurt(): void; /// ?animateHurt@Mob@@UEAAXXZ
	/** applyFinalFriction(float,bool): void */
	applyFinalFriction(_1: number, _2: boolean): void; /// ?applyFinalFriction@Mob@@UEAAXM_N@Z
	/** ascendBlockByJumping(void): void */
	ascendBlockByJumping(): void; /// ?ascendBlockByJumping@Mob@@UEAAXXZ
	/** ascendLadder(void): void */
	ascendLadder(): void; /// ?ascendLadder@Mob@@UEAAXXZ
	/** attackAnimation(Actor *,float): void */
	attackAnimation(_1: object, _2: number): void; /// ?attackAnimation@Mob@@UEAAXPEAVActor@@M@Z
	/** baseTick(void): void */
	baseTick(): void; /// ?baseTick@Mob@@UEAAXXZ
	/** blockedByShield(ActorDamageSource const &,Actor &): void */
	blockedByShield(_1: object, _2: object): void; /// ?blockedByShield@Mob@@UEAAXAEBVActorDamageSource@@AEAVActor@@@Z
	/** calcMoveRelativeSpeed(TravelType): float */
	calcMoveRelativeSpeed(_1: unknown): number; /// ?calcMoveRelativeSpeed@Mob@@QEAAMW4TravelType@@@Z
	/** calculateJumpImpulse(IMobMovementProxy const &): float */
	calculateJumpImpulse(_1: object): number; /// ?calculateJumpImpulse@Mob@@SAMAEBUIMobMovementProxy@@@Z
	/** canExistWhenDisallowMob(void): bool */
	canExistWhenDisallowMob(): boolean; /// ?canExistWhenDisallowMob@Mob@@UEBA_NXZ
	/** canPowerJump(void): bool */
	canPowerJump(): boolean; /// ?canPowerJump@Mob@@UEBA_NXZ
	/** causeFallDamage(float,float,ActorDamageSource): void */
	causeFallDamage(_1: number, _2: number, _3: unknown): void; /// ?causeFallDamage@Mob@@MEAAXMMVActorDamageSource@@@Z
	/** checkSpawnObstruction(void): bool */
	checkSpawnObstruction(): boolean; /// ?checkSpawnObstruction@Mob@@UEBA_NXZ
	/** checkSpawnRules(bool): bool */
	checkSpawnRules(_1: boolean): boolean; /// ?checkSpawnRules@Mob@@UEAA_N_N@Z
	/** checkTotemDeathProtection(ActorDamageSource const &): bool */
	checkTotemDeathProtection(_1: object): boolean; /// ?checkTotemDeathProtection@Mob@@QEAA_NAEBVActorDamageSource@@@Z
	/** clearEquipment(void): int */
	clearEquipment(): number; /// ?clearEquipment@Mob@@UEAAHXZ
	/** clearVanishEnchantedItemsOnDeath(void): void */
	clearVanishEnchantedItemsOnDeath(): void; /// ?clearVanishEnchantedItemsOnDeath@Mob@@UEAAXXZ
	/** containerChanged(int): void */
	containerChanged(_1: number): void; /// ?containerChanged@Mob@@UEAAXH@Z
	/** createAIGoals(void): bool */
	createAIGoals(): boolean; /// ?createAIGoals@Mob@@UEAA_NXZ
	/** descendBlockByCrouching(void): void */
	descendBlockByCrouching(): void; /// ?descendBlockByCrouching@Mob@@UEAAXXZ
	/** doFireHurt(int): bool */
	doFireHurt(_1: number): boolean; /// ?doFireHurt@Mob@@UEAA_NH@Z
	/** doHurtTarget(Actor *,ActorDamageCause const &): bool */
	doHurtTarget(_1: object, _2: object): boolean; /// ?doHurtTarget@Mob@@UEAA_NPEAVActor@@AEBW4ActorDamageCause@@@Z
	/** dropBags(void): void */
	dropBags(): void; /// ?dropBags@Mob@@MEAAXXZ
	/** dropContainer(void): void */
	dropContainer(): void; /// ?dropContainer@Mob@@UEAAXXZ
	/** emitJumpPreventedEvent(BlockPos const &): void */
	emitJumpPreventedEvent(_1: object): void; /// ?emitJumpPreventedEvent@Mob@@QEAAXAEBVBlockPos@@@Z
	/** getAllArmorID(void): class std::vector<int,class std::allocator<int> > */
	getAllArmorID(): unknown; /// ?getAllArmorID@Mob@@UEBA?AV?$vector@HV?$allocator@H@std@@@std@@XZ
	/** getArmorColorInSlot(ArmorSlot,int): float */
	getArmorColorInSlot(_1: unknown, _2: number): number; /// ?getArmorColorInSlot@Mob@@UEBAMW4ArmorSlot@@H@Z
	/** getArmorCoverPercentage(void): float */
	getArmorCoverPercentage(): number; /// ?getArmorCoverPercentage@Mob@@UEBAMXZ
	/** getArmorMaterialTextureTypeInSlot(ArmorSlot): enum ArmorTextureType */
	getArmorMaterialTextureTypeInSlot(_1: unknown): bigint; /// ?getArmorMaterialTextureTypeInSlot@Mob@@UEBA?AW4ArmorTextureType@@W4ArmorSlot@@@Z
	/** getArmorMaterialTypeInSlot(ArmorSlot): enum ArmorMaterialType */
	getArmorMaterialTypeInSlot(_1: unknown): bigint; /// ?getArmorMaterialTypeInSlot@Mob@@UEBA?AW4ArmorMaterialType@@W4ArmorSlot@@@Z
	/** getArmorTypeHash(void): int */
	getArmorTypeHash(): number; /// ?getArmorTypeHash@Mob@@UEAAHXZ
	/** getArmorValue(void): int */
	getArmorValue(): number; /// ?getArmorValue@Mob@@UEBAHXZ
	/** getAttackAnim(float): float */
	getAttackAnim(_1: number): number; /// ?getAttackAnim@Mob@@UEAAMM@Z
	/** getBlockDamageCause(Block const &): enum ActorDamageCause */
	getBlockDamageCause(_1: object): bigint; /// ?getBlockDamageCause@Mob@@UEBA?AW4ActorDamageCause@@AEBVBlock@@@Z
	/** getCaravanHead(void): struct ActorUniqueID */
	getCaravanHead(): unknown; /// ?getCaravanHead@Mob@@UEBA?AUActorUniqueID@@XZ
	/** getCaravanSize(void): int */
	getCaravanSize(): number; /// ?getCaravanSize@Mob@@QEBAHXZ
	/** getCurrentSwingDuration(void): int */
	getCurrentSwingDuration(): number; /// ?getCurrentSwingDuration@Mob@@IEAAHXZ
	/** getDamageAfterArmorReduction(ActorDamageSource const &,float): float */
	getDamageAfterArmorReduction(_1: object, _2: number): number; /// ?getDamageAfterArmorReduction@Mob@@UEBAMAEBVActorDamageSource@@M@Z
	/** getDamageAfterEnchantReduction(ActorDamageSource const &,float): float */
	getDamageAfterEnchantReduction(_1: object, _2: number): number; /// ?getDamageAfterEnchantReduction@Mob@@UEBAMAEBVActorDamageSource@@M@Z
	/** getDamageAfterResistanceEffect(ActorDamageSource const &,float): float */
	getDamageAfterResistanceEffect(_1: object, _2: number): number; /// ?getDamageAfterResistanceEffect@Mob@@UEBAMAEBVActorDamageSource@@M@Z
	/** getDeathSound(void): enum LevelSoundEvent */
	getDeathSound(): bigint; /// ?getDeathSound@Mob@@UEAA?AW4LevelSoundEvent@@XZ
	/** getDeathTime(void): int */
	getDeathTime(): number; /// ?getDeathTime@Mob@@UEBAHXZ
	/** getHurtSound(void): enum LevelSoundEvent */
	getHurtSound(): bigint; /// ?getHurtSound@Mob@@UEAA?AW4LevelSoundEvent@@XZ
	/** getInterpolatedBodyRot(float): float */
	getInterpolatedBodyRot(_1: number): number; /// ?getInterpolatedBodyRot@Mob@@UEBAMM@Z
	/** getInterpolatedBodyYaw(float): float */
	getInterpolatedBodyYaw(_1: number): number; /// ?getInterpolatedBodyYaw@Mob@@UEBAMM@Z
	/** getInterpolatedHeadRot(float): float */
	getInterpolatedHeadRot(_1: number): number; /// ?getInterpolatedHeadRot@Mob@@UEBAMM@Z
	/** getItemInHandIcon(ItemStack const &,int): struct TextureUVCoordinateSet const * __ptr64 */
	getItemInHandIcon(_1: object, _2: number): unknown; /// ?getItemInHandIcon@Mob@@UEAAPEBUTextureUVCoordinateSet@@AEBVItemStack@@H@Z
	/** getItemUseIntervalAxis(void): int */
	getItemUseIntervalAxis(): number; /// ?getItemUseIntervalAxis@Mob@@UEBAHXZ
	/** getJumpEffectAmplifierValue(IMobMovementProxy const &): float */
	getJumpEffectAmplifierValue(_1: object): number; /// ?getJumpEffectAmplifierValue@Mob@@SAMAEBUIMobMovementProxy@@@Z
	/** getJumpPrevention(IMobMovementProxy const &): struct JumpPreventionResult */
	getJumpPrevention(_1: object): unknown; /// ?getJumpPrevention@Mob@@SA?AUJumpPreventionResult@@AEBUIMobMovementProxy@@@Z
	/** getJumpPrevention(void): struct JumpPreventionResult */
	getJumpPrevention(): unknown; /// ?getJumpPrevention@Mob@@QEAA?AUJumpPreventionResult@@XZ
	/** getMaxHeadXRot(void): float */
	getMaxHeadXRot(): number; /// ?getMaxHeadXRot@Mob@@UEAAMXZ
	/** getMeleeKnockbackBonus(void): int */
	getMeleeKnockbackBonus(): number; /// ?getMeleeKnockbackBonus@Mob@@UEAAHXZ
	/** getMeleeWeaponDamageBonus(Mob *): float */
	getMeleeWeaponDamageBonus(_1: object): number; /// ?getMeleeWeaponDamageBonus@Mob@@UEAAMPEAV1@@Z
	/** getMovementComponentCurrentSpeed(void): float */
	getMovementComponentCurrentSpeed(): number; /// ?getMovementComponentCurrentSpeed@Mob@@QEBAMXZ
	/** getTimeAlongSwing(void): int */
	getTimeAlongSwing(): number; /// ?getTimeAlongSwing@Mob@@UEBAHXZ
	/** getToughnessValue(void): int */
	getToughnessValue(): number; /// ?getToughnessValue@Mob@@UEBAHXZ
	/** getTravelType(IMobMovementProxy &): enum TravelType */
	getTravelType(_1: object): bigint; /// ?getTravelType@Mob@@SA?AW4TravelType@@AEAUIMobMovementProxy@@@Z
	/** getTravelType(void): enum TravelType */
	getTravelType(): bigint; /// ?getTravelType@Mob@@QEAA?AW4TravelType@@XZ
	/** getYHeadRot(void): float */
	getYHeadRot(): number; /// ?getYHeadRot@Mob@@UEBAMXZ
	/** getYawSpeedInDegreesPerSecond(void): float */
	getYawSpeedInDegreesPerSecond(): number; /// ?getYawSpeedInDegreesPerSecond@Mob@@UEBAMXZ
	/** hasCaravanTail(void): bool */
	hasCaravanTail(): boolean; /// ?hasCaravanTail@Mob@@UEBA_NXZ
	/** hasComponent(HashedString const &): bool */
	hasComponent(_1: object): boolean; /// ?hasComponent@Mob@@UEBA_NAEBVHashedString@@@Z
	/** hurtEffects(ActorDamageSource const &,float,bool,bool): void */
	hurtEffects(_1: object, _2: number, _3: boolean, _4: boolean): void; /// ?hurtEffects@Mob@@UEAAXAEBVActorDamageSource@@M_N1@Z
	/** inCaravan(void): bool */
	inCaravan(): boolean; /// ?inCaravan@Mob@@UEBA_NXZ
	/** isAbleToMove(void): bool */
	isAbleToMove(): boolean; /// ?isAbleToMove@Mob@@QEBA_NXZ
	/** isAlive(void): bool */
	isAlive(): boolean; /// ?isAlive@Mob@@UEBA_NXZ
	/** isFrostWalking(void): bool */
	isFrostWalking(): boolean; /// ?isFrostWalking@Mob@@QEBA_NXZ
	/** isGliding(void): bool */
	isGliding(): boolean; /// ?isGliding@Mob@@QEBA_NXZ
	/** isImmobile(IActorMovementProxy const &): bool */
	isImmobile(_1: object): boolean; /// ?isImmobile@Mob@@SA_NAEBUIActorMovementProxy@@@Z
	/** isLookingAtAnEntity(void): bool */
	isLookingAtAnEntity(): boolean; /// ?isLookingAtAnEntity@Mob@@UEAA_NXZ
	/** isPickable(void): bool */
	isPickable(): boolean; /// ?isPickable@Mob@@UEAA_NXZ
	/** isSprinting(void): bool */
	isSprinting(): boolean; /// ?isSprinting@Mob@@QEBA_NXZ
	/** isSurfaceMob(void): bool */
	isSurfaceMob(): boolean; /// ?isSurfaceMob@Mob@@UEBA_NXZ
	/** isTransitioningSitting(void): bool */
	isTransitioningSitting(): boolean; /// ?isTransitioningSitting@Mob@@QEBA_NXZ
	/** joinCaravan(Mob *): void */
	joinCaravan(_1: object): void; /// ?joinCaravan@Mob@@UEAAXPEAV1@@Z
	/** kill(void): void */
	kill(): void; /// ?kill@Mob@@UEAAXXZ
	/** knockback(Actor *,int,float,float,float,float,float): void */
	knockback(_1: object, _2: number, _3: number, _4: number, _5: number, _6: number, _7: number): void; /// ?knockback@Mob@@UEAAXPEAVActor@@HMMMMM@Z
	/** leaveCaravan(void): void */
	leaveCaravan(): void; /// ?leaveCaravan@Mob@@UEAAXXZ
	/** lookAt(Actor *,float,float): void */
	lookAt(_1: object, _2: number, _3: number): void; /// ?lookAt@Mob@@UEAAXPEAVActor@@MM@Z
	/** newServerAiStep(void): void */
	newServerAiStep(): void; /// ?newServerAiStep@Mob@@MEAAXXZ
	/** outOfWorld(void): void */
	outOfWorld(): void; /// ?outOfWorld@Mob@@MEAAXXZ
	/** pushActors(void): void */
	pushActors(): void; /// ?pushActors@Mob@@UEAAXXZ
	/** reloadHardcodedClient(Actor::InitializationMethod,VariantParameterList const &): void */
	reloadHardcodedClient(_1: unknown, _2: object): void; /// ?reloadHardcodedClient@Mob@@UEAAXW4InitializationMethod@Actor@@AEBVVariantParameterList@@@Z
	/** resetAttributes(void): void */
	resetAttributes(): void; /// ?resetAttributes@Mob@@QEAAXXZ
	/** resetInterpolated(void): void */
	resetInterpolated(): void; /// ?resetInterpolated@Mob@@UEAAXXZ
	/** sendInventory(bool): void */
	sendInventory(_1: boolean): void; /// ?sendInventory@Mob@@UEAAX_N@Z
	/** setDamagedArmor(ArmorSlot,ItemStack const &): void */
	setDamagedArmor(_1: unknown, _2: object): void; /// ?setDamagedArmor@Mob@@UEAAXW4ArmorSlot@@AEBVItemStack@@@Z
	/** setEatCounter(int): void */
	setEatCounter(_1: number): void; /// ?setEatCounter@Mob@@QEAAXH@Z
	/** setEquippedSlot(EquipmentSlot,ItemStack const &): void */
	setEquippedSlot(_1: unknown, _2: object): void; /// ?setEquippedSlot@Mob@@UEAAXW4EquipmentSlot@@AEBVItemStack@@@Z
	/** setIsLayingEgg(bool): void */
	setIsLayingEgg(_1: boolean): void; /// ?setIsLayingEgg@Mob@@QEAAX_N@Z
	/** setItemSlot(EquipmentSlot,ItemStack const &): bool */
	setItemSlot(_1: unknown, _2: object): boolean; /// ?setItemSlot@Mob@@UEAA_NW4EquipmentSlot@@AEBVItemStack@@@Z
	/** setMovementComponentCurrentSpeed(float): void */
	setMovementComponentCurrentSpeed(_1: number): void; /// ?setMovementComponentCurrentSpeed@Mob@@QEAAXM@Z
	/** setSpeedModifier(float): void */
	setSpeedModifier(_1: number): void; /// ?setSpeedModifier@Mob@@QEAAXM@Z
	/** setSprinting(bool): void */
	setSprinting(_1: boolean): void; /// ?setSprinting@Mob@@UEAAX_N@Z
	/** setTarget(Actor *): void */
	setTarget(_1: object): void; /// ?setTarget@Mob@@UEAAXPEAVActor@@@Z
	/** setTransitioningSitting(bool): void */
	setTransitioningSitting(_1: boolean): void; /// ?setTransitioningSitting@Mob@@UEAAX_N@Z
	/** setYHeadRot(float): void */
	setYHeadRot(_1: number): void; /// ?setYHeadRot@Mob@@UEAAXM@Z
	/** setYHeadRotO(float): void */
	setYHeadRotO(_1: number): void; /// ?setYHeadRotO@Mob@@UEAAXM@Z
	/** setYRotA(float): void */
	setYRotA(_1: number): void; /// ?setYRotA@Mob@@QEAAXM@Z
	/** shouldApplyWaterGravity(IActorMovementProxy const &): bool */
	shouldApplyWaterGravity(_1: object): boolean; /// ?shouldApplyWaterGravity@Mob@@SA_NAEBUIActorMovementProxy@@@Z
	/** startRiding(Actor &): bool */
	startRiding(_1: object): boolean; /// ?startRiding@Mob@@UEAA_NAEAVActor@@@Z
	/** stopRiding(bool,bool,bool): void */
	stopRiding(_1: boolean, _2: boolean, _3: boolean): void; /// ?stopRiding@Mob@@UEAAX_N00@Z
	/** swing(void): void */
	swing(): void; /// ?swing@Mob@@UEAAXXZ
	/** tickDeath(void): void */
	tickDeath(): void; /// ?tickDeath@Mob@@MEAAXXZ
	/** updateAi(void): void */
	updateAi(): void; /// ?updateAi@Mob@@MEAAXXZ
	/** updateEntitySpecificMolangVariables(RenderParams &): void */
	updateEntitySpecificMolangVariables(_1: object): void; /// ?updateEntitySpecificMolangVariables@Mob@@MEAAXAEAVRenderParams@@@Z
	/** updateEquipment(void): void */
	updateEquipment(): void; /// ?updateEquipment@Mob@@UEAAXXZ
	// Inherited from Actor
	/** _addActorComponents(void): void */
	_addActorComponents(): void; /// ?_addActorComponents@Actor@@AEAAXXZ
	/** _containsSneakCollisionShapes(IActorMovementProxy &,AABB const &): bool */
	_containsSneakCollisionShapes(_1: object, _2: object): boolean; /// ?_containsSneakCollisionShapes@Actor@@CA_NAEAUIActorMovementProxy@@AEBVAABB@@@Z
	/** _isItemStackNetManagerEnabled(void): bool */
	_isItemStackNetManagerEnabled(): boolean; /// ?_isItemStackNetManagerEnabled@Actor@@AEBA_NXZ
	/** _move(IActorMovementProxy &,Vec3 const &): void */
	_move(_1: object, _2: object): void; /// ?_move@Actor@@SAXAEAUIActorMovementProxy@@AEBVVec3@@@Z
	/** _playFlySound(BlockPos const &,Block const &): void */
	_playFlySound(_1: object, _2: object): void; /// ?_playFlySound@Actor@@MEAAXAEBVBlockPos@@AEBVBlock@@@Z
	/** _randomHeartPos(void): class Vec3 */
	_randomHeartPos(): unknown; /// ?_randomHeartPos@Actor@@QEAA?AVVec3@@XZ
	/** _sendDirtyActorData(void): void */
	_sendDirtyActorData(): void; /// ?_sendDirtyActorData@Actor@@QEAAXXZ
	/** _sendLinkPacket(ActorLink const &): void */
	_sendLinkPacket(_1: object): void; /// ?_sendLinkPacket@Actor@@AEBAXAEBUActorLink@@@Z
	/** _serverInitItemStackIds(void): void */
	_serverInitItemStackIds(): void; /// ?_serverInitItemStackIds@Actor@@MEAAXXZ
	/** _setHandContainerItem(ItemStack const &,HandSlot): void */
	_setHandContainerItem(_1: object, _2: unknown): void; /// ?_setHandContainerItem@Actor@@IEAAXAEBVItemStack@@W4HandSlot@@@Z
	/** _setHeightOffset(float): void */
	_setHeightOffset(_1: number): void; /// ?_setHeightOffset@Actor@@IEAAXM@Z
	/** _setLevelPtr(Level *): void */
	_setLevelPtr(_1: object): void; /// ?_setLevelPtr@Actor@@QEAAXPEAVLevel@@@Z
	/** _setPos(Vec3 const &): void */
	_setPos(_1: object): void; /// ?_setPos@Actor@@IEAAXAEBVVec3@@@Z
	/** _shouldProvideFeedbackOnHandContainerItemSet(HandSlot,ItemStack const &): bool */
	_shouldProvideFeedbackOnHandContainerItemSet(_1: unknown, _2: object): boolean; /// ?_shouldProvideFeedbackOnHandContainerItemSet@Actor@@MEBA_NW4HandSlot@@AEBVItemStack@@@Z
	/** _spawnTreasureHuntingParticles(void): void */
	_spawnTreasureHuntingParticles(): void; /// ?_spawnTreasureHuntingParticles@Actor@@AEAAXXZ
	/** _updateComposition(bool): void */
	_updateComposition(_1: boolean): void; /// ?_updateComposition@Actor@@AEAAX_N@Z
	/** addEffect(MobEffectInstance const &): void */
	addEffect(_1: object): void; /// ?addEffect@Actor@@QEAAXAEBVMobEffectInstance@@@Z
	/** applySnapshot(PlayerSnapshotComponent const &,PlayerSnapshotComponent const &): void */
	applySnapshot(_1: object, _2: object): void; /// ?applySnapshot@Actor@@UEAAXAEBUPlayerSnapshotComponent@@0@Z
	/** buildForward(IActorMovementProxy const &): class Vec3 */
	buildForward(_1: object): unknown; /// ?buildForward@Actor@@SA?AVVec3@@AEBUIActorMovementProxy@@@Z
	/** buildForward(void): class Vec3 */
	buildForward(): unknown; /// ?buildForward@Actor@@QEBA?AVVec3@@XZ
	/** burn(int,bool): void */
	burn(_1: number, _2: boolean): void; /// ?burn@Actor@@QEAAXH_N@Z
	/** calcCenterPos(void): class Vec3 */
	calcCenterPos(): unknown; /// ?calcCenterPos@Actor@@QEBA?AVVec3@@XZ
	/** canAttack(Actor *,bool): bool */
	canAttack(_1: object, _2: boolean): boolean; /// ?canAttack@Actor@@UEBA_NPEAV1@_N@Z
	/** canBeAffected(MobEffectInstance const &): bool */
	canBeAffected(_1: object): boolean; /// ?canBeAffected@Actor@@UEBA_NAEBVMobEffectInstance@@@Z
	/** canBeAffected(int): bool */
	canBeAffected(_1: number): boolean; /// ?canBeAffected@Actor@@UEBA_NH@Z
	/** canBeAffectedByArrow(MobEffectInstance const &): bool */
	canBeAffectedByArrow(_1: object): boolean; /// ?canBeAffectedByArrow@Actor@@UEBA_NAEBVMobEffectInstance@@@Z
	/** canBeginOrContinueClimbingLadder(void): bool */
	canBeginOrContinueClimbingLadder(): boolean; /// ?canBeginOrContinueClimbingLadder@Actor@@QEBA_NXZ
	/** canCurrentlySwim(void): bool */
	canCurrentlySwim(): boolean; /// ?canCurrentlySwim@Actor@@QEBA_NXZ
	/** canDisableShield(void): bool */
	canDisableShield(): boolean; /// ?canDisableShield@Actor@@UEAA_NXZ
	/** canObstructSpawningAndBlockPlacement(void): bool */
	canObstructSpawningAndBlockPlacement(): boolean; /// ?canObstructSpawningAndBlockPlacement@Actor@@UEBA_NXZ
	/** canSee(Actor const &): bool */
	canSee(_1: object): boolean; /// ?canSee@Actor@@UEBA_NAEBV1@@Z
	/** canSee(Vec3 const &): bool */
	canSee(_1: object): boolean; /// ?canSee@Actor@@UEBA_NAEBVVec3@@@Z
	/** canSeeDaylight(void): bool */
	canSeeDaylight(): boolean; /// ?canSeeDaylight@Actor@@QEBA_NXZ
	/** canShowNameTag(void): bool */
	canShowNameTag(): boolean; /// ?canShowNameTag@Actor@@UEBA_NXZ
	/** celebrateHunt(int,bool): void */
	celebrateHunt(_1: number, _2: boolean): void; /// ?celebrateHunt@Actor@@QEAAXH_N@Z
	/** checkEntityOnewayCollision(BlockSource &,BlockPos const &): void */
	checkEntityOnewayCollision(_1: object, _2: object): void; /// ?checkEntityOnewayCollision@Actor@@SAXAEAVBlockSource@@AEBVBlockPos@@@Z
	/** checkFallDamage(float,bool): void */
	checkFallDamage(_1: number, _2: boolean): void; /// ?checkFallDamage@Actor@@UEAAXM_N@Z
	/** checkInsideBlocks(float): void */
	checkInsideBlocks(_1: number): void; /// ?checkInsideBlocks@Actor@@MEAAXM@Z
	/** checkInsideCauldron(void): void */
	checkInsideCauldron(): void; /// ?checkInsideCauldron@Actor@@QEAAXXZ
	/** chorusFruitTeleport(Vec3 const &): void */
	chorusFruitTeleport(_1: object): void; /// ?chorusFruitTeleport@Actor@@UEAAXAEBVVec3@@@Z
	/** closerThan(Actor const &,float): bool */
	closerThan(_1: object, _2: number): boolean; /// ?closerThan@Actor@@QEBA_NAEBV1@M@Z
	/** closerThan(Actor const &,float,float): bool */
	closerThan(_1: object, _2: number, _3: number): boolean; /// ?closerThan@Actor@@QEBA_NAEBV1@MM@Z
	/** consumeItem(ItemActor &,int): void */
	consumeItem(_1: object, _2: number): void; /// ?consumeItem@Actor@@QEAAXAEAVItemActor@@H@Z
	/** despawn(void): void */
	despawn(): void; /// ?despawn@Actor@@UEAAXXZ
	/** distanceSqrToBlockPosCenter(BlockPos const &): float */
	distanceSqrToBlockPosCenter(_1: object): number; /// ?distanceSqrToBlockPosCenter@Actor@@QEBAMAEBVBlockPos@@@Z
	/** distanceTo(Actor const &): float */
	distanceTo(_1: object): number; /// ?distanceTo@Actor@@QEBAMAEBV1@@Z
	/** distanceTo(Vec3 const &): float */
	distanceTo(_1: object): number; /// ?distanceTo@Actor@@QEBAMAEBVVec3@@@Z
	/** distanceToSqr(Actor const &): float */
	distanceToSqr(_1: object): number; /// ?distanceToSqr@Actor@@QEBAMAEBV1@@Z
	/** distanceToSqr(Vec3 const &): float */
	distanceToSqr(_1: object): number; /// ?distanceToSqr@Actor@@QEBAMAEBVVec3@@@Z
	/** doWaterSplashEffect(void): void */
	doWaterSplashEffect(): void; /// ?doWaterSplashEffect@Actor@@UEAAXXZ
	/** dropTowards(ItemStack const &,Vec3): void */
	dropTowards(_1: object, _2: Vec3): void; /// ?dropTowards@Actor@@QEAAXAEBVItemStack@@VVec3@@@Z
	/** extractSnapshot(PlayerSnapshotComponent &): void */
	extractSnapshot(_1: object): void; /// ?extractSnapshot@Actor@@UEBAXAEAUPlayerSnapshotComponent@@@Z
	/** fetchNearbyActorsSorted(Vec3 const &,ActorType): class std::vector<struct DistanceSortedActor,class std::allocator<struct DistanceSortedActor> > */
	fetchNearbyActorsSorted(_1: object, _2: unknown): unknown; /// ?fetchNearbyActorsSorted@Actor@@QEAA?AV?$vector@UDistanceSortedActor@@V?$allocator@UDistanceSortedActor@@@std@@@std@@AEBVVec3@@W4ActorType@@@Z
	/** filterFormattedNameTag(UIProfanityContext const &): void */
	filterFormattedNameTag(_1: object): void; /// ?filterFormattedNameTag@Actor@@UEAAXAEBVUIProfanityContext@@@Z
	/** flagPassengerToRemove(Actor &): void */
	flagPassengerToRemove(_1: object): void; /// ?flagPassengerToRemove@Actor@@UEAAXAEAV1@@Z
	/** getAABB(void): class AABB const & __ptr64 */
	getAABB(): AABB; /// ?getAABB@Actor@@QEBAAEBVAABB@@XZ
	/** getAABBDim(void): class Vec2 const & __ptr64 */
	getAABBDim(): unknown; /// ?getAABBDim@Actor@@QEBAAEBVVec2@@XZ
	/** getActorIdentifier(void): struct ActorDefinitionIdentifier const & __ptr64 */
	getActorIdentifier(): ActorDefinitionIdentifier; /// ?getActorIdentifier@Actor@@QEBAAEBUActorDefinitionIdentifier@@XZ
	/** getAllArmor(void): class std::vector<class ItemStack const * __ptr64,class std::allocator<class ItemStack const * __ptr64> > */
	getAllArmor(): unknown; /// ?getAllArmor@Actor@@UEBA?AV?$vector@PEBVItemStack@@V?$allocator@PEBVItemStack@@@std@@@std@@XZ
	/** getAmbientSound(void): enum LevelSoundEvent */
	getAmbientSound(): bigint; /// ?getAmbientSound@Actor@@UEBA?AW4LevelSoundEvent@@XZ
	/** getArmor(ArmorSlot): class ItemStack const & __ptr64 */
	getArmor(_1: unknown): ItemStack; /// ?getArmor@Actor@@UEBAAEBVItemStack@@W4ArmorSlot@@@Z
	/** getArmorContainer(void): class SimpleContainer const & __ptr64 */
	getArmorContainer(): SimpleContainer; /// ?getArmorContainer@Actor@@QEBAAEBVSimpleContainer@@XZ
	/** getAttribute(Attribute const &): class AttributeInstance const & __ptr64 */
	getAttribute(_1: object): unknown; /// ?getAttribute@Actor@@UEBAAEBVAttributeInstance@@AEBVAttribute@@@Z
	/** getBlockPosCurrentlyStandingOn(Actor const *): class BlockPos */
	getBlockPosCurrentlyStandingOn(_1: object): BlockPos; /// ?getBlockPosCurrentlyStandingOn@Actor@@QEBA?AVBlockPos@@PEBV1@@Z
	/** getBrightness(float): float */
	getBrightness(_1: number): number; /// ?getBrightness@Actor@@UEBAMM@Z
	/** getCarriedItem(void): class ItemStack const & __ptr64 */
	getCarriedItem(): ItemStack; /// ?getCarriedItem@Actor@@UEBAAEBVItemStack@@XZ
	/** getCarriedItemInSlotPreferredBy(ItemStack const &): class ItemStack const & __ptr64 */
	getCarriedItemInSlotPreferredBy(_1: object): ItemStack; /// ?getCarriedItemInSlotPreferredBy@Actor@@QEBAAEBVItemStack@@AEBV2@@Z
	/** getChestSlots(void): int */
	getChestSlots(): number; /// ?getChestSlots@Actor@@UEBAHXZ
	/** getColor(void): enum PaletteColor */
	getColor(): bigint; /// ?getColor@Actor@@QEBA?AW4PaletteColor@@XZ
	/** getColor2(void): enum PaletteColor */
	getColor2(): bigint; /// ?getColor2@Actor@@QEBA?AW4PaletteColor@@XZ
	/** getControllingSeat(void): int */
	getControllingSeat(): number; /// ?getControllingSeat@Actor@@QEBAHXZ
	/** getDamageNearbyMobs(void): bool */
	getDamageNearbyMobs(): boolean; /// ?getDamageNearbyMobs@Actor@@QEBA_NXZ
	/** getDimensionConst(void): class Dimension const & __ptr64 */
	getDimensionConst(): Dimension; /// ?getDimensionConst@Actor@@QEBAAEBVDimension@@XZ
	/** getDimensionId(void): class AutomaticID<class Dimension,int> */
	getDimensionId(): unknown; /// ?getDimensionId@Actor@@UEBA?AV?$AutomaticID@VDimension@@H@@XZ
	/** getEffect(MobEffect const &): class MobEffectInstance const * __ptr64 */
	getEffect(_1: object): unknown; /// ?getEffect@Actor@@QEBAPEBVMobEffectInstance@@AEBVMobEffect@@@Z
	/** getEquipSlots(void): int */
	getEquipSlots(): number; /// ?getEquipSlots@Actor@@UEBAHXZ
	/** getEquipmentCount(void): int */
	getEquipmentCount(): number; /// ?getEquipmentCount@Actor@@UEBAHXZ
	/** getEquippedSlot(EquipmentSlot): class ItemStack const & __ptr64 */
	getEquippedSlot(_1: unknown): ItemStack; /// ?getEquippedSlot@Actor@@UEBAAEBVItemStack@@W4EquipmentSlot@@@Z
	/** getFiringPos(void): class Vec3 */
	getFiringPos(): unknown; /// ?getFiringPos@Actor@@UEBA?AVVec3@@XZ
	/** getFirstPassenger(void): class Actor * __ptr64 */
	getFirstPassenger(): Actor; /// ?getFirstPassenger@Actor@@QEBAPEAV1@XZ
	/** getHandContainer(void): class SimpleContainer const & __ptr64 */
	getHandContainer(): SimpleContainer; /// ?getHandContainer@Actor@@QEBAAEBVSimpleContainer@@XZ
	/** getHeadLookVector(float): class Vec3 */
	getHeadLookVector(_1: number): unknown; /// ?getHeadLookVector@Actor@@UEBA?AVVec3@@M@Z
	getHealth(): bigint; /// Actor::getHealth
	/** getHealth(void): int */
	getHealth(): number; /// ?getHealth@Actor@@QEBAHXZ
	/** getHurtDir(void): int */
	getHurtDir(): number; /// ?getHurtDir@Actor@@QEBAHXZ
	/** getInteraction(Player &,ActorInteraction &,Vec3 const &): bool */
	getInteraction(_1: object, _2: object, _3: object): boolean; /// ?getInteraction@Actor@@UEAA_NAEAVPlayer@@AEAVActorInteraction@@AEBVVec3@@@Z
	/** getInterpolatedPosition(float): class Vec3 */
	getInterpolatedPosition(_1: number): unknown; /// ?getInterpolatedPosition@Actor@@QEBA?AVVec3@@M@Z
	/** getInterpolatedRidingPosition(float): class Vec3 */
	getInterpolatedRidingPosition(_1: number): unknown; /// ?getInterpolatedRidingPosition@Actor@@UEBA?AVVec3@@M@Z
	/** getInterpolatedRotation(float): class Vec2 */
	getInterpolatedRotation(_1: number): unknown; /// ?getInterpolatedRotation@Actor@@QEBA?AVVec2@@M@Z
	/** getInterpolatedWalkAnimSpeed(float): float */
	getInterpolatedWalkAnimSpeed(_1: number): number; /// ?getInterpolatedWalkAnimSpeed@Actor@@UEBAMM@Z
	/** getInventorySize(void): int */
	getInventorySize(): number; /// ?getInventorySize@Actor@@UEBAHXZ
	/** getLastHurtByMob(void): class Mob * __ptr64 */
	getLastHurtByMob(): Mob; /// ?getLastHurtByMob@Actor@@UEAAPEAVMob@@XZ
	/** getLastHurtByPlayer(void): class Player * __ptr64 */
	getLastHurtByPlayer(): Player; /// ?getLastHurtByPlayer@Actor@@UEAAPEAVPlayer@@XZ
	/** getLastHurtMob(void): class Mob * __ptr64 */
	getLastHurtMob(): Mob; /// ?getLastHurtMob@Actor@@UEAAPEAVMob@@XZ
	/** getLastHurtTimestamp(void): unsigned __int64 */
	getLastHurtTimestamp(): bigint; /// ?getLastHurtTimestamp@Actor@@QEBA_KXZ
	/** getLevel(void): class Level const & __ptr64 */
	getLevel(): Level; /// ?getLevel@Actor@@QEBAAEBVLevel@@XZ
	/** getLinks(void): class std::vector<struct ActorLink,class std::allocator<struct ActorLink> > */
	getLinks(): unknown; /// ?getLinks@Actor@@QEBA?AV?$vector@UActorLink@@V?$allocator@UActorLink@@@std@@@std@@XZ
	/** getLiquidAABB(MaterialType): class AABB */
	getLiquidAABB(_1: unknown): AABB; /// ?getLiquidAABB@Actor@@UEBA?AVAABB@@W4MaterialType@@@Z
	/** getLootTable(void): class LootTable * __ptr64 */
	getLootTable(): unknown; /// ?getLootTable@Actor@@UEAAPEAVLootTable@@XZ
	/** getMapDecorationRotation(void): float */
	getMapDecorationRotation(): number; /// ?getMapDecorationRotation@Actor@@UEBAMXZ
	/** getMarkVariant(void): int */
	getMarkVariant(): number; /// ?getMarkVariant@Actor@@QEBAHXZ
	/** getMaxHealth(void): int */
	getMaxHealth(): number; /// ?getMaxHealth@Actor@@QEBAHXZ
	/** getMolangVariables(void): class MolangVariableMap & __ptr64 */
	getMolangVariables(): unknown; /// ?getMolangVariables@Actor@@QEAAAEAVMolangVariableMap@@XZ
	/** getMovementProxy(void): class gsl::not_null<class std::shared_ptr<struct IActorMovementProxy const> > */
	getMovementProxy(): unknown; /// ?getMovementProxy@Actor@@QEBA?AV?$not_null@V?$shared_ptr@$$CBUIActorMovementProxy@@@std@@@gsl@@XZ
	/** getMutableAttribute(Attribute const &): class AttributeInstance * __ptr64 */
	getMutableAttribute(_1: object): unknown; /// ?getMutableAttribute@Actor@@UEAAPEAVAttributeInstance@@AEBVAttribute@@@Z
	/** getNameTag(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64 */
	getNameTag(): unknown; /// ?getNameTag@Actor@@UEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** getNextStep(float): float */
	getNextStep(_1: number): number; /// ?getNextStep@Actor@@UEAAMM@Z
	/** getOffhandSlot(void): class ItemStack const & __ptr64 */
	getOffhandSlot(): ItemStack; /// ?getOffhandSlot@Actor@@QEBAAEBVItemStack@@XZ
	/** getOrAddDynamicProperties(void): class DynamicProperties & __ptr64 */
	getOrAddDynamicProperties(): unknown; /// ?getOrAddDynamicProperties@Actor@@QEAAAEAVDynamicProperties@@XZ
	/** getOwner(void): class Mob * __ptr64 */
	getOwner(): Mob; /// ?getOwner@Actor@@QEBAPEAVMob@@XZ
	/** getOwnerEntityType(void): enum ActorType */
	getOwnerEntityType(): bigint; /// ?getOwnerEntityType@Actor@@UEAA?AW4ActorType@@XZ
	/** getOwnerId(void): struct ActorUniqueID const */
	getOwnerId(): unknown; /// ?getOwnerId@Actor@@QEBA?BUActorUniqueID@@XZ
	/** getPassengerIndex(Actor const &): int */
	getPassengerIndex(_1: object): number; /// ?getPassengerIndex@Actor@@QEBAHAEBV1@@Z
	/** getPassengerYRotation(Actor const &): float */
	getPassengerYRotation(_1: object): number; /// ?getPassengerYRotation@Actor@@UEBAMAEBV1@@Z
	/** getPersistingTradeOffers(void): class std::unique_ptr<class CompoundTag,struct std::default_delete<class CompoundTag> > */
	getPersistingTradeOffers(): unknown; /// ?getPersistingTradeOffers@Actor@@QEAA?AV?$unique_ptr@VCompoundTag@@U?$default_delete@VCompoundTag@@@std@@@std@@XZ
	/** getPickRadius(void): float */
	getPickRadius(): number; /// ?getPickRadius@Actor@@UEAAMXZ
	/** getPlayerOwner(void): class Player * __ptr64 */
	getPlayerOwner(): Player; /// ?getPlayerOwner@Actor@@QEBAPEAVPlayer@@XZ
	/** getPortalCooldown(void): int */
	getPortalCooldown(): number; /// ?getPortalCooldown@Actor@@UEBAHXZ
	/** getPosDelta(void): class Vec3 const & __ptr64 */
	getPosDelta(): unknown; /// ?getPosDelta@Actor@@QEBAAEBVVec3@@XZ
	/** getPosExtrapolated(float): class Vec3 const */
	getPosExtrapolated(_1: number): unknown; /// ?getPosExtrapolated@Actor@@UEBA?BVVec3@@M@Z
	/** getPosPrev(void): class Vec3 const & __ptr64 */
	getPosPrev(): unknown; /// ?getPosPrev@Actor@@UEBAAEBVVec3@@XZ
	/** getPosition(void): class Vec3 const & __ptr64 */
	getPosition(): unknown; /// ?getPosition@Actor@@UEBAAEBVVec3@@XZ
	/** getPredictedMovementValues(void): struct PredictedMovementValues const & __ptr64 */
	getPredictedMovementValues(): unknown; /// ?getPredictedMovementValues@Actor@@UEBAAEBUPredictedMovementValues@@XZ
	/** getRandom(void): class Random & __ptr64 */
	getRandom(): Random; /// ?getRandom@Actor@@QEBAAEAVRandom@@XZ
	/** getRegionConst(void): class BlockSource const & __ptr64 */
	getRegionConst(): BlockSource; /// ?getRegionConst@Actor@@QEBAAEBVBlockSource@@XZ
	/** getRidingHeight(void): float */
	getRidingHeight(): number; /// ?getRidingHeight@Actor@@QEBAMXZ
	/** getRotation(void): class Vec2 */
	getRotation(): unknown; /// ?getRotation@Actor@@QEBA?AVVec2@@XZ
	/** getRuntimeID(void): class ActorRuntimeID */
	getRuntimeID(): unknown; /// ?getRuntimeID@Actor@@QEBA?AVActorRuntimeID@@XZ
	/** getScoreTag(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64 */
	getScoreTag(): unknown; /// ?getScoreTag@Actor@@UEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** getShadowHeightOffs(void): float */
	getShadowHeightOffs(): number; /// ?getShadowHeightOffs@Actor@@UEAAMXZ
	/** getSourceUniqueID(void): struct ActorUniqueID */
	getSourceUniqueID(): unknown; /// ?getSourceUniqueID@Actor@@UEBA?AUActorUniqueID@@XZ
	/** getSpeedInMetersPerSecond(void): float */
	getSpeedInMetersPerSecond(): number; /// ?getSpeedInMetersPerSecond@Actor@@QEBAMXZ
	/** getStatusFlag(ActorFlags): bool */
	getStatusFlag(_1: unknown): boolean; /// ?getStatusFlag@Actor@@QEBA_NW4ActorFlags@@@Z
	/** getStructuralIntegrity(void): int */
	getStructuralIntegrity(): number; /// ?getStructuralIntegrity@Actor@@QEBAHXZ
	/** getTags(void): class gsl::span<class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> >,-1> const */
	getTags(): unknown; /// ?getTags@Actor@@QEBA?BV?$span@V?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@$0?0@gsl@@XZ
	/** getTarget(void): class Actor * __ptr64 */
	getTarget(): Actor; /// ?getTarget@Actor@@QEBAPEAV1@XZ
	/** getTradeOffers(void): class MerchantRecipeList * __ptr64 */
	getTradeOffers(): unknown; /// ?getTradeOffers@Actor@@QEAAPEAVMerchantRecipeList@@XZ
	/** getTradingPlayer(void): class Player * __ptr64 */
	getTradingPlayer(): Player; /// ?getTradingPlayer@Actor@@QEBAPEAVPlayer@@XZ
	/** getUniqueID(void): struct ActorUniqueID const & __ptr64 */
	getUniqueID(): unknown; /// ?getUniqueID@Actor@@QEBAAEBUActorUniqueID@@XZ
	/** getVariant(void): int */
	getVariant(): number; /// ?getVariant@Actor@@QEBAHXZ
	/** getVehicle(void): class Actor * __ptr64 */
	getVehicle(): Actor; /// ?getVehicle@Actor@@QEBAPEAV1@XZ
	/** getVehicleRoot(void): class Actor * __ptr64 */
	getVehicleRoot(): Actor; /// ?getVehicleRoot@Actor@@QEBAPEAV1@XZ
	/** getViewVector(float): class Vec3 */
	getViewVector(_1: number): unknown; /// ?getViewVector@Actor@@QEBA?AVVec3@@M@Z
	/** handleFallDistanceOnServer(float,float,bool): void */
	handleFallDistanceOnServer(_1: number, _2: number, _3: boolean): void; /// ?handleFallDistanceOnServer@Actor@@UEAAXMM_N@Z
	/** handleInsidePortal(BlockPos const &): void */
	handleInsidePortal(_1: object): void; /// ?handleInsidePortal@Actor@@UEAAXAEBVBlockPos@@@Z
	/** hasCategory(ActorCategory): bool */
	hasCategory(_1: unknown): boolean; /// ?hasCategory@Actor@@QEBA_NW4ActorCategory@@@Z
	/** hasEffect(MobEffect const &): bool */
	hasEffect(_1: object): boolean; /// ?hasEffect@Actor@@QEBA_NAEBVMobEffect@@@Z
	/** hasEnteredWater(void): bool */
	hasEnteredWater(): boolean; /// ?hasEnteredWater@Actor@@UEBA_NXZ
	/** hasFamily(HashedString const &): bool */
	hasFamily(_1: object): boolean; /// ?hasFamily@Actor@@QEBA_NAEBVHashedString@@@Z
	/** hasLevel(void): bool */
	hasLevel(): boolean; /// ?hasLevel@Actor@@QEBA_NXZ
	/** hasPassenger(void): bool */
	hasPassenger(): boolean; /// ?hasPassenger@Actor@@QEBA_NXZ
	/** hasPlayerPassenger(void): bool */
	hasPlayerPassenger(): boolean; /// ?hasPlayerPassenger@Actor@@QEBA_NXZ
	/** hasPriorityAmmunition(void): bool */
	hasPriorityAmmunition(): boolean; /// ?hasPriorityAmmunition@Actor@@QEBA_NXZ
	/** hasRuntimeID(void): bool */
	hasRuntimeID(): boolean; /// ?hasRuntimeID@Actor@@QEBA_NXZ
	/** hasSaddle(void): bool */
	hasSaddle(): boolean; /// ?hasSaddle@Actor@@QEBA_NXZ
	/** hasTeleported(void): bool */
	hasTeleported(): boolean; /// ?hasTeleported@Actor@@QEBA_NXZ
	/** hasType(ActorType): bool */
	hasType(_1: unknown): boolean; /// ?hasType@Actor@@QEBA_NW4ActorType@@@Z
	/** heal(int): void */
	heal(_1: number): void; /// ?heal@Actor@@UEAAXH@Z
	/** hurt(ActorDamageSource const &,float,bool,bool): bool */
	hurt(_1: object, _2: number, _3: boolean, _4: boolean): boolean; /// ?hurt@Actor@@QEAA_NAEBVActorDamageSource@@M_N1@Z
	/** initActorProperties(void): void */
	initActorProperties(): void; /// ?initActorProperties@Actor@@QEAAXXZ
	/** initParams(VariantParameterList &): void */
	initParams(_1: object): void; /// ?initParams@Actor@@QEAAXAEAVVariantParameterList@@@Z
	/** interpolatorTick(void): void */
	interpolatorTick(): void; /// ?interpolatorTick@Actor@@UEAAXXZ
	/** intersects(Vec3 const &,Vec3 const &): bool */
	intersects(_1: object, _2: object): boolean; /// ?intersects@Actor@@UEBA_NAEBVVec3@@0@Z
	/** isAffectedByWaterBottle(void): bool */
	isAffectedByWaterBottle(): boolean; /// ?isAffectedByWaterBottle@Actor@@UEBA_NXZ
	/** isAttackableGamemode(void): bool */
	isAttackableGamemode(): boolean; /// ?isAttackableGamemode@Actor@@UEBA_NXZ
	/** isAutonomous(void): bool */
	isAutonomous(): boolean; /// ?isAutonomous@Actor@@QEBA_NXZ
	/** isBaby(void): bool */
	isBaby(): boolean; /// ?isBaby@Actor@@QEBA_NXZ
	/** isBreakingObstruction(void): bool */
	isBreakingObstruction(): boolean; /// ?isBreakingObstruction@Actor@@QEBA_NXZ
	/** isClientSide(void): bool */
	isClientSide(): boolean; /// ?isClientSide@Actor@@UEBA_NXZ
	/** isControlledByLocalInstance(void): bool */
	isControlledByLocalInstance(): boolean; /// ?isControlledByLocalInstance@Actor@@QEBA_NXZ
	/** isEnchanted(void): bool */
	isEnchanted(): boolean; /// ?isEnchanted@Actor@@UEBA_NXZ
	/** isGlobal(void): bool */
	isGlobal(): boolean; /// ?isGlobal@Actor@@QEBA_NXZ
	/** isImmersedInWater(IActorMovementProxy const &): bool */
	isImmersedInWater(_1: object): boolean; /// ?isImmersedInWater@Actor@@SA_NAEBUIActorMovementProxy@@@Z
	/** isInContactWithWater(void): bool */
	isInContactWithWater(): boolean; /// ?isInContactWithWater@Actor@@QEBA_NXZ
	/** isInLava(void): bool */
	isInLava(): boolean; /// ?isInLava@Actor@@UEBA_NXZ
	/** isInLove(void): bool */
	isInLove(): boolean; /// ?isInLove@Actor@@QEBA_NXZ
	/** isInPrecipitation(void): bool */
	isInPrecipitation(): boolean; /// ?isInPrecipitation@Actor@@QEBA_NXZ
	/** isInRain(void): bool */
	isInRain(): boolean; /// ?isInRain@Actor@@QEBA_NXZ
	/** isInSnow(void): bool */
	isInSnow(): boolean; /// ?isInSnow@Actor@@QEBA_NXZ
	/** isInThunderstorm(void): bool */
	isInThunderstorm(): boolean; /// ?isInThunderstorm@Actor@@QEBA_NXZ
	/** isInWall(void): bool */
	isInWall(): boolean; /// ?isInWall@Actor@@UEBA_NXZ
	/** isInWater(void): bool */
	isInWater(): boolean; /// ?isInWater@Actor@@UEBA_NXZ
	/** isInWaterOrRain(void): bool */
	isInWaterOrRain(): boolean; /// ?isInWaterOrRain@Actor@@QEBA_NXZ
	/** isInsideBorderBlock(float): bool */
	isInsideBorderBlock(_1: number): boolean; /// ?isInsideBorderBlock@Actor@@QEBA_NM@Z
	/** isInsidePortal(void): bool */
	isInsidePortal(): boolean; /// ?isInsidePortal@Actor@@QEBA_NXZ
	/** isInvertedHealAndHarm(void): bool */
	isInvertedHealAndHarm(): boolean; /// ?isInvertedHealAndHarm@Actor@@UEBA_NXZ
	/** isInvisible(void): bool */
	isInvisible(): boolean; /// ?isInvisible@Actor@@UEBA_NXZ
	/** isLeashed(void): bool */
	isLeashed(): boolean; /// ?isLeashed@Actor@@QEBA_NXZ
	/** isMoving(void): bool */
	isMoving(): boolean; /// ?isMoving@Actor@@QEBA_NXZ
	/** isOnFire(void): bool */
	isOnFire(): boolean; /// ?isOnFire@Actor@@UEBA_NXZ
	/** isOverWater(void): bool */
	isOverWater(): boolean; /// ?isOverWater@Actor@@UEBA_NXZ
	/** isPassenger(Actor const &): bool */
	isPassenger(_1: object): boolean; /// ?isPassenger@Actor@@QEBA_NAEBV1@@Z
	/** isRegionValid(void): bool */
	isRegionValid(): boolean; /// ?isRegionValid@Actor@@QEBA_NXZ
	/** isRemotePlayer(void): bool */
	isRemotePlayer(): boolean; /// ?isRemotePlayer@Actor@@UEBA_NXZ
	/** isRemoved(void): bool */
	isRemoved(): boolean; /// ?isRemoved@Actor@@QEBA_NXZ
	/** isRiding(Actor *): bool */
	isRiding(_1: object): boolean; /// ?isRiding@Actor@@QEBA_NPEAV1@@Z
	/** isRiding(void): bool */
	isRiding(): boolean; /// ?isRiding@Actor@@QEBA_NXZ
	/** isSilent(void): bool */
	isSilent(): boolean; /// ?isSilent@Actor@@UEBA_NXZ
	/** isSitting(void): bool */
	isSitting(): boolean; /// ?isSitting@Actor@@QEBA_NXZ
	/** isSkyLit(float): bool */
	isSkyLit(_1: number): boolean; /// ?isSkyLit@Actor@@UEAA_NM@Z
	/** isSneaking(void): bool */
	isSneaking(): boolean; /// ?isSneaking@Actor@@QEBA_NXZ
	/** isStanding(IActorMovementProxy const &): bool */
	isStanding(_1: object): boolean; /// ?isStanding@Actor@@SA_NAEBUIActorMovementProxy@@@Z
	/** isSwimming(void): bool */
	isSwimming(): boolean; /// ?isSwimming@Actor@@QEBA_NXZ
	/** isTame(void): bool */
	isTame(): boolean; /// ?isTame@Actor@@QEBA_NXZ
	/** isTouchingDamageBlock(void): bool */
	isTouchingDamageBlock(): boolean; /// ?isTouchingDamageBlock@Actor@@QEBA_NXZ
	/** isType(ActorType): bool */
	isType(_1: unknown): boolean; /// ?isType@Actor@@QEBA_NW4ActorType@@@Z
	/** isUnderLiquid(MaterialType): bool */
	isUnderLiquid(_1: unknown): boolean; /// ?isUnderLiquid@Actor@@UEBA_NW4MaterialType@@@Z
	/** isWearingLeatherArmor(void): bool const */
	isWearingLeatherArmor(): boolean; /// ?isWearingLeatherArmor@Actor@@UEBA?B_NXZ
	/** killed(Actor &): void */
	killed(_1: object): void; /// ?killed@Actor@@UEAAXAEAV1@@Z
	/** lerpMotion(Vec3 const &): void */
	lerpMotion(_1: object): void; /// ?lerpMotion@Actor@@UEAAXAEBVVec3@@@Z
	/** lerpTo(Vec3 const &,Vec2 const &,float,int): void */
	lerpTo(_1: object, _2: object, _3: number, _4: number): void; /// ?lerpTo@Actor@@QEAAXAEBVVec3@@AEBVVec2@@MH@Z
	/** lerpToRotation(Vec2 const &,int): void */
	lerpToRotation(_1: object, _2: number): void; /// ?lerpToRotation@Actor@@QEAAXAEBVVec2@@H@Z
	/** load(CompoundTag const &,DataLoadHelper &): bool */
	load(_1: object, _2: object): boolean; /// ?load@Actor@@UEAA_NAEBVCompoundTag@@AEAVDataLoadHelper@@@Z
	/** markHurt(void): void */
	markHurt(): void; /// ?markHurt@Actor@@MEAAXXZ
	/** moveBBs(Vec3 const &): void */
	moveBBs(_1: object): void; /// ?moveBBs@Actor@@QEAAXAEBVVec3@@@Z
	/** moveRelative(float,float,float,float): void */
	moveRelative(_1: number, _2: number, _3: number, _4: number): void; /// ?moveRelative@Actor@@QEAAXMMMM@Z
	/** moveTo(Vec3 const &,Vec2 const &): void */
	moveTo(_1: object, _2: object): void; /// ?moveTo@Actor@@QEAAXAEBVVec3@@AEBVVec2@@@Z
	/** onAboveBubbleColumn(bool): void */
	onAboveBubbleColumn(_1: boolean): void; /// ?onAboveBubbleColumn@Actor@@UEAAX_N@Z
	/** onAffectedByWaterBottle(void): void */
	onAffectedByWaterBottle(): void; /// ?onAffectedByWaterBottle@Actor@@QEAAXXZ
	/** onEffectAdded(MobEffectInstance &): void */
	onEffectAdded(_1: object): void; /// ?onEffectAdded@Actor@@UEAAXAEAVMobEffectInstance@@@Z
	/** onEffectRemoved(MobEffectInstance &): void */
	onEffectRemoved(_1: object): void; /// ?onEffectRemoved@Actor@@UEAAXAEAVMobEffectInstance@@@Z
	/** onEffectUpdated(MobEffectInstance &): void */
	onEffectUpdated(_1: object): void; /// ?onEffectUpdated@Actor@@UEAAXAEAVMobEffectInstance@@@Z
	/** onInsideBubbleColumn(bool): void */
	onInsideBubbleColumn(_1: boolean): void; /// ?onInsideBubbleColumn@Actor@@UEAAX_N@Z
	/** onLightningHit(void): void */
	onLightningHit(): void; /// ?onLightningHit@Actor@@UEAAXXZ
	/** onOrphan(void): void */
	onOrphan(): void; /// ?onOrphan@Actor@@UEAAXXZ
	/** onSynchedDataUpdate(int): void */
	onSynchedDataUpdate(_1: number): void; /// ?onSynchedDataUpdate@Actor@@UEAAXH@Z
	/** onSynchedFlagUpdate(int,__int64,__int64): void */
	onSynchedFlagUpdate(_1: number, _2: bigint, _3: bigint): void; /// ?onSynchedFlagUpdate@Actor@@UEAAXH_J0@Z
	/** openContainerComponent(Player &): void */
	openContainerComponent(_1: object): void; /// ?openContainerComponent@Actor@@UEAAXAEAVPlayer@@@Z
	/** performRangedAttack(Actor &,float): void */
	performRangedAttack(_1: object, _2: number): void; /// ?performRangedAttack@Actor@@UEAAXAEAV1@M@Z
	/** pickUpItem(ItemActor &,int): void */
	pickUpItem(_1: object, _2: number): void; /// ?pickUpItem@Actor@@QEAAXAEAVItemActor@@H@Z
	/** playAmbientSound(void): void */
	playAmbientSound(): void; /// ?playAmbientSound@Actor@@UEAAXXZ
	/** playSound(LevelSoundEvent,Vec3 const &,int): void */
	playSound(_1: unknown, _2: object, _3: number): void; /// ?playSound@Actor@@QEAAXW4LevelSoundEvent@@AEBVVec3@@H@Z
	/** playSynchronizedSound(LevelSoundEvent,Vec3 const &,Block const &,bool): void */
	playSynchronizedSound(_1: unknown, _2: object, _3: object, _4: boolean): void; /// ?playSynchronizedSound@Actor@@UEAAXW4LevelSoundEvent@@AEBVVec3@@AEBVBlock@@_N@Z
	/** playSynchronizedSound(LevelSoundEvent,Vec3 const &,int,bool): void */
	playSynchronizedSound(_1: unknown, _2: object, _3: number, _4: boolean): void; /// ?playSynchronizedSound@Actor@@UEAAXW4LevelSoundEvent@@AEBVVec3@@H_N@Z
	/** positionAllPassengers(bool): void */
	positionAllPassengers(_1: boolean): void; /// ?positionAllPassengers@Actor@@QEAAX_N@Z
	/** positionPassenger(Actor &,float): void */
	positionPassenger(_1: object, _2: number): void; /// ?positionPassenger@Actor@@UEAAXAEAV1@M@Z
	/** postSplashGameEvent(void): void */
	postSplashGameEvent(): void; /// ?postSplashGameEvent@Actor@@QEAAXXZ
	/** pushBackActionEventToActionQueue(ActionEvent): void */
	pushBackActionEventToActionQueue(_1: unknown): void; /// ?pushBackActionEventToActionQueue@Actor@@QEAAXVActionEvent@@@Z
	/** pushOutOfBlocks(Vec3 const &): void */
	pushOutOfBlocks(_1: object): void; /// ?pushOutOfBlocks@Actor@@MEAAXAEBVVec3@@@Z
	/** reload(void): void */
	reload(): void; /// ?reload@Actor@@QEAAXXZ
	/** reloadComponents(Actor::InitializationMethod,VariantParameterList const &): void */
	reloadComponents(_1: unknown, _2: object): void; /// ?reloadComponents@Actor@@MEAAXW4InitializationMethod@1@AEBVVariantParameterList@@@Z
	/** reloadLootTable(EquipmentTableDefinition const &): void */
	reloadLootTable(_1: object): void; /// ?reloadLootTable@Actor@@UEAAXAEBUEquipmentTableDefinition@@@Z
	/** reloadLootTable(void): void */
	reloadLootTable(): void; /// ?reloadLootTable@Actor@@UEAAXXZ
	/** removeEffect(int): void */
	removeEffect(_1: number): void; /// ?removeEffect@Actor@@QEAAXH@Z
	/** resetBlockMovementSlowdownMultiplier(void): void */
	resetBlockMovementSlowdownMultiplier(): void; /// ?resetBlockMovementSlowdownMultiplier@Actor@@UEAAXXZ
	/** resetClientAnimations(void): void */
	resetClientAnimations(): void; /// ?resetClientAnimations@Actor@@QEAAXXZ
	/** resetRegion(void): void */
	resetRegion(): void; /// ?resetRegion@Actor@@QEAAXXZ
	/** save(CompoundTag &): bool */
	save(_1: object): boolean; /// ?save@Actor@@UEBA_NAEAVCompoundTag@@@Z
	/** saveEntityFlags(CompoundTag &): void */
	saveEntityFlags(_1: object): void; /// ?saveEntityFlags@Actor@@QEBAXAEAVCompoundTag@@@Z
	/** saveWithoutId(CompoundTag &): void */
	saveWithoutId(_1: object): void; /// ?saveWithoutId@Actor@@UEBAXAEAVCompoundTag@@@Z
	/** sendMotionPacketIfNeeded(void): void */
	sendMotionPacketIfNeeded(): void; /// ?sendMotionPacketIfNeeded@Actor@@UEAAXXZ
	/** serializationSetHealth(int): void */
	serializationSetHealth(_1: number): void; /// ?serializationSetHealth@Actor@@QEAAXH@Z
	/** setAABB(AABB const &): void */
	setAABB(_1: object): void; /// ?setAABB@Actor@@QEAAXAEBVAABB@@@Z
	/** setActorRendererId(HashedString): void */
	setActorRendererId(_1: unknown): void; /// ?setActorRendererId@Actor@@QEAAXVHashedString@@@Z
	/** setBreakingObstruction(bool): void */
	setBreakingObstruction(_1: boolean): void; /// ?setBreakingObstruction@Actor@@QEAAX_N@Z
	/** setCanFly(bool): void */
	setCanFly(_1: boolean): void; /// ?setCanFly@Actor@@QEAAX_N@Z
	/** setCanPowerJump(bool): void */
	setCanPowerJump(_1: boolean): void; /// ?setCanPowerJump@Actor@@UEAAX_N@Z
	/** setCharged(bool): void */
	setCharged(_1: boolean): void; /// ?setCharged@Actor@@QEAAX_N@Z
	/** setColor(PaletteColor): void */
	setColor(_1: unknown): void; /// ?setColor@Actor@@QEAAXW4PaletteColor@@@Z
	/** setDamageNearbyMobs(bool): void */
	setDamageNearbyMobs(_1: boolean): void; /// ?setDamageNearbyMobs@Actor@@UEAAX_N@Z
	/** setDancing(bool): void */
	setDancing(_1: boolean): void; /// ?setDancing@Actor@@QEAAX_N@Z
	/** setEnchanted(bool): void */
	setEnchanted(_1: boolean): void; /// ?setEnchanted@Actor@@QEAAX_N@Z
	/** setHurtDir(int): void */
	setHurtDir(_1: number): void; /// ?setHurtDir@Actor@@QEAAXH@Z
	/** setHurtTime(int): void */
	setHurtTime(_1: number): void; /// ?setHurtTime@Actor@@QEAAXH@Z
	/** setInvisible(bool): void */
	setInvisible(_1: boolean): void; /// ?setInvisible@Actor@@QEAAX_N@Z
	/** setJumpDuration(int): void */
	setJumpDuration(_1: number): void; /// ?setJumpDuration@Actor@@QEAAXH@Z
	/** setLastHitBB(Vec3 const &,Vec3 const &): void */
	setLastHitBB(_1: object, _2: object): void; /// ?setLastHitBB@Actor@@QEAAXAEBVVec3@@0@Z
	/** setLastHurtByMob(Mob *): void */
	setLastHurtByMob(_1: object): void; /// ?setLastHurtByMob@Actor@@UEAAXPEAVMob@@@Z
	/** setLastHurtByPlayer(Player *): void */
	setLastHurtByPlayer(_1: object): void; /// ?setLastHurtByPlayer@Actor@@UEAAXPEAVPlayer@@@Z
	/** setLastHurtMob(Actor *): void */
	setLastHurtMob(_1: object): void; /// ?setLastHurtMob@Actor@@UEAAXPEAV1@@Z
	/** setLeashHolder(ActorUniqueID): void */
	setLeashHolder(_1: unknown): void; /// ?setLeashHolder@Actor@@QEAAXUActorUniqueID@@@Z
	/** setMoving(bool): void */
	setMoving(_1: boolean): void; /// ?setMoving@Actor@@QEAAX_N@Z
	/** setNameTagVisible(bool): void */
	setNameTagVisible(_1: boolean): void; /// ?setNameTagVisible@Actor@@UEAAX_N@Z
	/** setOwner(ActorUniqueID): void */
	setOwner(_1: unknown): void; /// ?setOwner@Actor@@UEAAXUActorUniqueID@@@Z
	/** setPersistent(void): void */
	setPersistent(): void; /// ?setPersistent@Actor@@QEAAXXZ
	/** setPos(Vec3 const &): void */
	setPos(_1: object): void; /// ?setPos@Actor@@UEAAXAEBVVec3@@@Z
	/** setPreviousPosRot(Vec3 const &,Vec2 const &): void */
	setPreviousPosRot(_1: object, _2: object): void; /// ?setPreviousPosRot@Actor@@QEAAXAEBVVec3@@AEBVVec2@@@Z
	/** setRegion(BlockSource &): void */
	setRegion(_1: object): void; /// ?setRegion@Actor@@QEAAXAEAVBlockSource@@@Z
	/** setResting(bool): void */
	setResting(_1: boolean): void; /// ?setResting@Actor@@QEAAX_N@Z
	/** setRot(Vec2 const &): void */
	setRot(_1: object): void; /// ?setRot@Actor@@UEAAXAEBVVec2@@@Z
	/** setScared(bool): void */
	setScared(_1: boolean): void; /// ?setScared@Actor@@QEAAX_N@Z
	/** setSitting(bool): void */
	setSitting(_1: boolean): void; /// ?setSitting@Actor@@UEAAX_N@Z
	/** setSneaking(bool): void */
	setSneaking(_1: boolean): void; /// ?setSneaking@Actor@@UEAAX_N@Z
	/** setStanding(bool): void */
	setStanding(_1: boolean): void; /// ?setStanding@Actor@@UEAAX_N@Z
	/** setStatusFlag(ActorFlags,bool): void */
	setStatusFlag(_1: unknown, _2: boolean): void; /// ?setStatusFlag@Actor@@QEAAXW4ActorFlags@@_N@Z
	/** setStunned(bool): void */
	setStunned(_1: boolean): void; /// ?setStunned@Actor@@QEAAX_N@Z
	/** setVariant(int): void */
	setVariant(_1: number): void; /// ?setVariant@Actor@@QEAAXH@Z
	/** shouldRender(void): bool */
	shouldRender(): boolean; /// ?shouldRender@Actor@@UEBA_NXZ
	/** shouldTick(void): bool */
	shouldTick(): boolean; /// ?shouldTick@Actor@@UEBA_NXZ
	/** shouldTryMakeStepSound(void): bool */
	shouldTryMakeStepSound(): boolean; /// ?shouldTryMakeStepSound@Actor@@MEAA_NXZ
	/** spawnAtLocation(Block const &,int): class ItemActor * __ptr64 */
	spawnAtLocation(_1: object, _2: number): unknown; /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@AEBVBlock@@H@Z
	/** spawnAtLocation(Block const &,int,float): class ItemActor * __ptr64 */
	spawnAtLocation(_1: object, _2: number, _3: number): unknown; /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@AEBVBlock@@HM@Z
	/** spawnAtLocation(ItemStack const &,float): class ItemActor * __ptr64 */
	spawnAtLocation(_1: object, _2: number): unknown; /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@AEBVItemStack@@M@Z
	/** spawnAtLocation(int,int): class ItemActor * __ptr64 */
	spawnAtLocation(_1: number, _2: number): unknown; /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@HH@Z
	/** spawnAtLocation(int,int,float): class ItemActor * __ptr64 */
	spawnAtLocation(_1: number, _2: number, _3: number): unknown; /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@HHM@Z
	/** spawnDeathParticles(void): void */
	spawnDeathParticles(): void; /// ?spawnDeathParticles@Actor@@QEAAXXZ
	/** spawnDustParticles(int): void */
	spawnDustParticles(_1: number): void; /// ?spawnDustParticles@Actor@@QEAAXH@Z
	/** spawnTamingParticles(bool): void */
	spawnTamingParticles(_1: boolean): void; /// ?spawnTamingParticles@Actor@@QEAAX_N@Z
	/** spawnTrailBubbles(void): void */
	spawnTrailBubbles(): void; /// ?spawnTrailBubbles@Actor@@MEAAXXZ
	/** thawFreezeEffect(void): void */
	thawFreezeEffect(): void; /// ?thawFreezeEffect@Actor@@UEAAXXZ
	/** tickLeash(void): void */
	tickLeash(): void; /// ?tickLeash@Actor@@UEAAXXZ
	/** tryGetEquippableSlotAllowedItems(int): class std::vector<class ItemDescriptor,class std::allocator<class ItemDescriptor> > const * __ptr64 */
	tryGetEquippableSlotAllowedItems(_1: number): unknown; /// ?tryGetEquippableSlotAllowedItems@Actor@@QEBAPEBV?$vector@VItemDescriptor@@V?$allocator@VItemDescriptor@@@std@@@std@@H@Z
	/** tryGetFromComponent(ActorOwnerComponent const &,bool): class Actor const * __ptr64 */
	tryGetFromComponent(_1: object, _2: boolean): Actor; /// ?tryGetFromComponent@Actor@@SAPEBV1@AEBVActorOwnerComponent@@_N@Z
	tryGetFromEntity(): bigint; /// Actor::tryGetFromEntity
	/** tryTeleportTo(Vec3 const &,bool,bool,int,int): bool */
	tryTeleportTo(_1: object, _2: boolean, _3: boolean, _4: number, _5: number): boolean; /// ?tryTeleportTo@Actor@@UEAA_NAEBVVec3@@_N1HH@Z
	/** updateBBFromDefinition(void): void */
	updateBBFromDefinition(): void; /// ?updateBBFromDefinition@Actor@@QEAAXXZ
	/** updateDescription(void): void */
	updateDescription(): void; /// ?updateDescription@Actor@@QEAAXXZ
	/** updateEntityInside(AABB const &): void */
	updateEntityInside(_1: object): void; /// ?updateEntityInside@Actor@@UEAAXAEBVAABB@@@Z
	/** updateEntityInside(void): void */
	updateEntityInside(): void; /// ?updateEntityInside@Actor@@UEAAXXZ
	/** updateInsideBlock(void): void */
	updateInsideBlock(): void; /// ?updateInsideBlock@Actor@@MEAAXXZ
	/** updateInvisibilityStatus(void): void */
	updateInvisibilityStatus(): void; /// ?updateInvisibilityStatus@Actor@@QEAAXXZ
	/** updateWaterState(void): bool */
	updateWaterState(): boolean; /// ?updateWaterState@Actor@@IEAA_NXZ
	/** wasHurt(void): bool */
	wasHurt(): boolean; /// ?wasHurt@Actor@@UEAA_NXZ
	/** wasLastHitByPlayer(void): bool */
	wasLastHitByPlayer(): boolean; /// ?wasLastHitByPlayer@Actor@@QEAA_NXZ
	/** wasLoadedFromNBTThisFrame(void): bool */
	wasLoadedFromNBTThisFrame(): boolean; /// ?wasLoadedFromNBTThisFrame@Actor@@QEBA_NXZ
	/** wobble(void): void */
	wobble(): void; /// ?wobble@Actor@@UEAAXXZ
}
declare class PlayerInventoryProxy {
	// Attributes 
	selectedHotbarSlot: number;
	inventory: Inventory;
	// Methods 
	// Inherited from PlayerInventoryProxy
}
declare class PtrToValue {
	// Attributes 
	value: object;
	// Methods 
	// Inherited from PtrToValue
}
declare class Random {
	// Attributes 
	// Methods 
	// Inherited from Random
	/** Random(void) */
	Random(): Random; /// ??0Random@@QEAA@XZ
	/** consumeCount(uint): void */
	consumeCount(_1: bigint): void; /// ?consumeCount@Random@@UEAAXI@Z
	/** fork(void): class std::unique_ptr<class IRandom,struct std::default_delete<class IRandom> > */
	fork(): unknown; /// ?fork@Random@@UEAA?AV?$unique_ptr@VIRandom@@U?$default_delete@VIRandom@@@std@@@std@@XZ
	/** getThreadLocal(void): class Random & __ptr64 */
	getThreadLocal(): Random; /// ?getThreadLocal@Random@@SAAEAV1@XZ
	/** nextBoolean(void): bool */
	nextBoolean(): boolean; /// ?nextBoolean@Random@@UEAA_NXZ
	/** nextDouble(void): double */
	nextDouble(): number; /// ?nextDouble@Random@@UEAANXZ
	/** nextFloat(void): float */
	nextFloat(): number; /// ?nextFloat@Random@@UEAAMXZ
	/** nextGaussianDouble(void): double */
	nextGaussianDouble(): number; /// ?nextGaussianDouble@Random@@UEAANXZ
	/** nextGaussianInt(int): int */
	nextGaussianInt(_1: number): number; /// ?nextGaussianInt@Random@@QEAAHH@Z
	/** nextInt(int): int */
	nextInt(_1: number): number; /// ?nextInt@Random@@UEAAHH@Z
	/** nextInt(int,int): int */
	nextInt(_1: number, _2: number): number; /// ?nextInt@Random@@QEAAHHH@Z
	/** nextInt(void): int */
	nextInt(): number; /// ?nextInt@Random@@UEAAHXZ
	/** nextIntInclusive(int,int): int */
	nextIntInclusive(_1: number, _2: number): number; /// ?nextIntInclusive@Random@@QEAAHHH@Z
	/** nextLong(void): __int64 */
	nextLong(): bigint; /// ?nextLong@Random@@UEAA_JXZ
}
declare class ResourceLocation {
	// Attributes 
	hashCode: bigint;
	// Methods 
	// Inherited from ResourceLocation
	/** getFullPath(void): class Core::PathBuffer<class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > > */
	getFullPath(): unknown; /// ?getFullPath@ResourceLocation@@QEBA?AV?$PathBuffer@V?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@@Core@@XZ
}
declare class SDKText {
	// Attributes 
	// Methods 
	// Inherited from SDKText
}
declare class SDKUnorderedMap {
	// Attributes 
	fullList: object;
	bucketList: object;
	keyMask: bigint;
	bucketListEnd: object;
	bucketListEndOfAllocated: object;
	maxKey: bigint;
	// Methods 
	// Inherited from SDKUnorderedMap
}
declare class SDKVectorContainer {
	// Attributes 
	endOfAllocated: AnyPtr;
	begin: AnyPtr;
	end: AnyPtr;
	// Methods 
	// Inherited from SDKVectorContainer
}
declare class SemVersion {
	// Attributes 
	patch: number;
	major: number;
	minor: number;
	isAnyVersion: number;
	// Methods 
	// Inherited from SemVersion
	/** SemVersion(SemVersion const &) */
	SemVersion(_1: object): SemVersion; /// ??0SemVersion@@QEAA@AEBV0@@Z
	/** SemVersion(void) */
	SemVersion(): SemVersion; /// ??0SemVersion@@QEAA@XZ
	/** _parseVersionToString(void): void */
	_parseVersionToString(): void; /// ?_parseVersionToString@SemVersion@@AEAAXXZ
	/** fromJson(Json::Value const &,SemVersion &,SemVersion::ParseOption): enum SemVersion::MatchType */
	fromJson(_1: object, _2: object, _3: unknown): bigint; /// ?fromJson@SemVersion@@SA?AW4MatchType@1@AEBVValue@Json@@AEAV1@W4ParseOption@1@@Z
	/** fromJsonArray(Json::Value const &,SemVersion &): enum SemVersion::MatchType */
	fromJsonArray(_1: object, _2: object): bigint; /// ?fromJsonArray@SemVersion@@SA?AW4MatchType@1@AEBVValue@Json@@AEAV1@@Z
	/** getMinor(void): unsigned short */
	getMinor(): number; /// ?getMinor@SemVersion@@QEBAGXZ
	/** isValid(void): bool */
	isValid(): boolean; /// ?isValid@SemVersion@@QEBA_NXZ
}
declare class SerializedSkin {
	// Attributes 
	skinUUID: SDKText;
	geometryData: SDKText;
	geometryName: SDKText;
	skinWidth: number;
	isTrusted: number;
	skinHeight: number;
	//	capeData: mce::Blob;
	//	skinData: mce::Blob;
	capeWidth: number;
	capeHeight: number;
	skinType: SDKText;
	isPersona: number;
	// Methods 
	// Inherited from SerializedSkin
	/** SerializedSkin(void) */
	SerializedSkin(): SerializedSkin; /// ??0SerializedSkin@@QEAA@XZ
	/** getAnimationFrames(persona::AnimatedTextureType): float */
	getAnimationFrames(_1: unknown): number; /// ?getAnimationFrames@SerializedSkin@@QEBAMW4AnimatedTextureType@persona@@@Z
	/** read(ReadOnlyBinaryStream &): bool */
	read(_1: object): boolean; /// ?read@SerializedSkin@@QEAA_NAEAVReadOnlyBinaryStream@@@Z
	// Inherited from SDKText
}
declare class SimpleContainer {
	// Attributes 
	// Methods 
	// Inherited from SimpleContainer
	/** getContainerSize(void): int */
	getContainerSize(): number; /// ?getContainerSize@SimpleContainer@@UEBAHXZ
	/** getItem(int): class ItemStack const & __ptr64 */
	getItem(_1: number): ItemStack; /// ?getItem@SimpleContainer@@UEBAAEBVItemStack@@H@Z
	/** setItem(int,ItemStack const &): void */
	setItem(_1: number, _2: object): void; /// ?setItem@SimpleContainer@@UEAAXHAEBVItemStack@@@Z
}
declare class StartGamePacket {
	// Attributes 
	levelSettings: LevelSettings;
	serverSoftwareVersion: SDKText;
	blockPaletteChecksum: bigint;
	dispatcher: PacketHandlerDispatcherInstance;
	blockPalette: SDKVectorContainer;
	// Methods 
	// Inherited from StartGamePacket
	/** StartGamePacket(void) */
	StartGamePacket(): StartGamePacket; /// ??0StartGamePacket@@QEAA@XZ
	/** _read(ReadOnlyBinaryStream &): enum StreamReadResult */
	_read(_1: object): bigint; /// ?_read@StartGamePacket@@EEAA?AW4StreamReadResult@@AEAVReadOnlyBinaryStream@@@Z
	/** getId(void): enum MinecraftPacketIds */
	getId(): bigint; /// ?getId@StartGamePacket@@UEBA?AW4MinecraftPacketIds@@XZ
	/** getName(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > */
	getName(): unknown; /// ?getName@StartGamePacket@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
	/** write(BinaryStream &): void */
	write(_1: object): void; /// ?write@StartGamePacket@@UEBAXAEAVBinaryStream@@@Z
	// Inherited from Packet
	/** readExtended(ReadOnlyBinaryStream &): struct ExtendedStreamReadResult */
	readExtended(_1: object): unknown; /// ?readExtended@Packet@@UEAA?AUExtendedStreamReadResult@@AEAVReadOnlyBinaryStream@@@Z
}
declare class SynchedActorData {
	// Attributes 
	numData: number;
	begin: AnyPtr;
	endOfAllocated: AnyPtr;
	end: AnyPtr;
	// Methods 
	// Inherited from SynchedActorData
	/** _clone(void): class SynchedActorData */
	_clone(): SynchedActorData; /// ?_clone@SynchedActorData@@QEBA?AV1@XZ
	/** _get(ushort): class DataItem & __ptr64 */
	_get(_1: number): unknown; /// ?_get@SynchedActorData@@AEAAAEAVDataItem@@G@Z
	/** _resizeToContain(ushort): void */
	_resizeToContain(_1: number): void; /// ?_resizeToContain@SynchedActorData@@AEAAXG@Z
	/** getStatusFlag(ActorFlags): bool */
	getStatusFlag(_1: unknown): boolean; /// ?getStatusFlag@SynchedActorData@@QEBA_NW4ActorFlags@@@Z
	// Inherited from SDKVectorContainer
}
declare class SynchedActorDataEntityWrapper {
	// Attributes 
	// Methods 
	// Inherited from SynchedActorDataEntityWrapper
	/** getCompoundTag(ushort): class CompoundTag const & __ptr64 */
	getCompoundTag(_1: number): CompoundTag; /// ?getCompoundTag@SynchedActorDataEntityWrapper@@QEBAAEBVCompoundTag@@G@Z
	/** getFloat(ushort): float */
	getFloat(_1: number): number; /// ?getFloat@SynchedActorDataEntityWrapper@@QEBAMG@Z
	/** getInt64(ushort): __int64 */
	getInt64(_1: number): bigint; /// ?getInt64@SynchedActorDataEntityWrapper@@QEBA_JG@Z
	/** getInt8(ushort): signed char */
	getInt8(_1: number): number; /// ?getInt8@SynchedActorDataEntityWrapper@@QEBACG@Z
	/** getShort(ushort): short */
	getShort(_1: number): number; /// ?getShort@SynchedActorDataEntityWrapper@@QEBAFG@Z
	/** getStatusFlag(ActorFlags): bool */
	getStatusFlag(_1: unknown): boolean; /// ?getStatusFlag@SynchedActorDataEntityWrapper@@QEBA_NW4ActorFlags@@@Z
	/** getString(ushort): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64 */
	getString(_1: number): unknown; /// ?getString@SynchedActorDataEntityWrapper@@QEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@G@Z
	/** getVec3(ushort): class Vec3 */
	getVec3(_1: number): unknown; /// ?getVec3@SynchedActorDataEntityWrapper@@QEBA?AVVec3@@G@Z
	/** hasData(ushort): bool */
	hasData(_1: number): boolean; /// ?hasData@SynchedActorDataEntityWrapper@@QEBA_NG@Z
	/** isDirty(void): bool */
	isDirty(): boolean; /// ?isDirty@SynchedActorDataEntityWrapper@@QEBA_NXZ
	/** markDirty(ushort): void */
	markDirty(_1: number): void; /// ?markDirty@SynchedActorDataEntityWrapper@@QEAAXG@Z
	/** setStatusFlag(ActorFlags,bool): void */
	setStatusFlag(_1: unknown, _2: boolean): void; /// ?setStatusFlag@SynchedActorDataEntityWrapper@@QEAAXW4ActorFlags@@_N@Z
}
declare class Tag {
	// Attributes 
	// Methods 
	// Inherited from Tag
	/** Tag(void) */
	Tag(): Tag; /// ??0Tag@@IEAA@XZ
	/** equals(Tag const &): bool */
	equals(_1: object): boolean; /// ?equals@Tag@@UEBA_NAEBV1@@Z
	/** print(PrintStream &): void */
	print(_1: object): void; /// ?print@Tag@@UEBAXAEAVPrintStream@@@Z
}
declare class TexturePtr {
	// Attributes 
	clientTexture: object;
	resourceLocation: ResourceLocation;
	// Methods 
	// Inherited from TexturePtr
}
declare class VarIntDataOutput {
	// Attributes 
	binaryStream: BinaryStream;
	// Methods 
	// Inherited from VarIntDataOutput
	/** writeByte(char): void */
	writeByte(_1: number): void; /// ?writeByte@VarIntDataOutput@@UEAAXD@Z
	/** writeBytes(void const *,unsigned __int64): void */
	writeBytes(_1: object, _2: bigint): void; /// ?writeBytes@VarIntDataOutput@@UEAAXPEBX_K@Z
	/** writeDouble(double): void */
	writeDouble(_1: number): void; /// ?writeDouble@VarIntDataOutput@@UEAAXN@Z
	/** writeFloat(float): void */
	writeFloat(_1: number): void; /// ?writeFloat@VarIntDataOutput@@UEAAXM@Z
	/** writeInt(int): void */
	writeInt(_1: number): void; /// ?writeInt@VarIntDataOutput@@UEAAXH@Z
	/** writeLongLong(__int64): void */
	writeLongLong(_1: bigint): void; /// ?writeLongLong@VarIntDataOutput@@UEAAX_J@Z
	/** writeShort(short): void */
	writeShort(_1: number): void; /// ?writeShort@VarIntDataOutput@@UEAAXF@Z
}
declare class WorldTemplateData {
	// Attributes 
	gameVersion: BaseGameVersion;
	isFromWorldTemplate: number;
	// Methods 
	// Inherited from WorldTemplateData
}
/*
declare class mce::Blob { 
	// Attributes 
	destructor: object;
	data: object;
	size: bigint;
	// Methods 
	// Inherited from mce::Blob
	Blob(_1: bigint): bigint; /// ??0Blob@mce@@QEAA@_K@Z
	Blob(): bigint; /// ??0Blob@mce@@QEAA@XZ
	/** cend(void): unsigned char const * __ptr64 * /
	cend(): unknown; /// ?cend@Blob@mce@@QEBAPEBEXZ
	/** defaultDeleter(uchar *): void * /
	defaultDeleter(_1: object): void; /// ?defaultDeleter@Blob@mce@@CAXPEAE@Z
}
*/

declare class Mod {
	toString(): string;
	getName(): string;
	isEnabled(): boolean;
	setEnabled(enabled: boolean);

	getKeybind(): number;
	getBoolProperty(name: string): boolean;
	getIntProperty(name: string): number;
	getFloatProperty(name: string): number;
}
declare class CallbackInfo {
	toString(): string;
	setReturnValue(retVal: number | BigInt);
}
declare class JsMod {
	toString(): string;
	getName(): string;
	isEnabled(): boolean;
	setEnabled(enabled: boolean);

	getKeybind(): number;
	getBoolProperty(name: string): boolean;
	getIntProperty(name: string): number;
	getFloatProperty(name: string): number;

	on(event: string, callback: Function);
	hook(symbol: string, callback: (cb: CallbackInfo) => void);
	setName(name: string);

	registerBoolProperty(name: string, defaultValue: boolean);
	registerIntProperty(name: string, defaultValue: number, minValue: number, maxValue: number);
	registerFloatProperty(name: string, defaultValue: number, minValue: number, maxValue: number);
}
declare class ModManager_TYPE {
	toString(): string;
	registerMod(mod: any): any;
}
declare const ModManager: ModManager_TYPE;

declare class Game_TYPE {
	/** Returns "Elafalter" */
	getClient(): string;
	getClientInstance(): ClientInstance;
	getLocalPlayer(): LocalPlayer | undefined;
	toString(): string;
	getAllActors(): Actor[];
}
declare const Game: Game_TYPE;

declare class Vec2 {
	x: number;
	y: number;

	constructor(x: number, y: number);

	toString(): string;
}

declare class Vec3 {
	x: number;
	y: number;
	z: number;

	constructor(x: number, y: number, z: number);

	toString(): string;
}

declare function print(...args): void;
declare function log(...args): void;
/** Print information about a runtime object to console */
declare function dump(runtime: object): void;
/** Test if 'runtime' is an instance of 'base' */
declare function isInstanceOf(runtime: object, base: object | string): boolean;
/** Load internal classes */
declare function __elaDynLoad(obj: string): any;
/** Load Elafalter's internal c++ modules */
declare function __registerCppCore(): void;
