declare class ActorDefinitionIdentifier {
    // Attributes 
    actorType: SDKText;
    specialisedName: SDKText;
    canonicalName: SDKHashedString;
    // Methods 
    // Inherited from ActorDefinitionIdentifier
    ActorDefinitionIdentifier(_1: object): ActorDefinitionIdentifier;	// ActorDefinitionIdentifier(ActorDefinitionIdentifier &&)	 /// ??0ActorDefinitionIdentifier@@QEAA@$$QEAU0@@Z
    ActorDefinitionIdentifier(_1: object): ActorDefinitionIdentifier;	// ActorDefinitionIdentifier(ActorDefinitionIdentifier const &)	 /// ??0ActorDefinitionIdentifier@@QEAA@AEBU0@@Z
    ActorDefinitionIdentifier(_1: unknown): ActorDefinitionIdentifier;	// ActorDefinitionIdentifier(ActorType)	 /// ??0ActorDefinitionIdentifier@@QEAA@W4ActorType@@@Z
    ActorDefinitionIdentifier(_1: object): ActorDefinitionIdentifier;	// ActorDefinitionIdentifier(char const *)	 /// ??0ActorDefinitionIdentifier@@QEAA@PEBD@Z
    ActorDefinitionIdentifier(): ActorDefinitionIdentifier;	// ActorDefinitionIdentifier(void)	 /// ??0ActorDefinitionIdentifier@@QEAA@XZ
    _getLegacyActorType(): bigint;	// _getLegacyActorType(void): enum ActorType	 /// ?_getLegacyActorType@ActorDefinitionIdentifier@@QEBA?AW4ActorType@@XZ
    _initialize(): void;	// _initialize(void): void	 /// ?_initialize@ActorDefinitionIdentifier@@AEAAXXZ
    clear(): void;	// clear(void): void	 /// ?clear@ActorDefinitionIdentifier@@QEAAXXZ
    getCanonicalName(): unknown;	// getCanonicalName(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64	 /// ?getCanonicalName@ActorDefinitionIdentifier@@QEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
    // Inherited from SDKText
}
declare class Minecraft {
    // Attributes 
    levelOptional: Optional;
    // Methods 
    // Inherited from Minecraft
    configureGameTest(_1: object, _2: object): void;	// configureGameTest(Level &,Experiments const &): void	 /// ?configureGameTest@Minecraft@@QEAAXAEAVLevel@@AEBVExperiments@@@Z
    getEntityRegistry(): bigint;	// getEntityRegistry(void): class StackRefResultT<struct EntityRegistryRefTraits>	 /// ?getEntityRegistry@Minecraft@@UEAA?AV?$StackRefResultT@UEntityRegistryRefTraits@@@@XZ
    getGameTest(): bigint;	// getGameTest(void): class optional_ref<class MinecraftGameTest>	 /// ?getGameTest@Minecraft@@QEAA?AV?$optional_ref@VMinecraftGameTest@@@@XZ
    getLevel(): Level;	// getLevel(void): class Level * __ptr64	 /// ?getLevel@Minecraft@@QEBAPEAVLevel@@XZ
    getServerNetworkHandler(): bigint;	// getServerNetworkHandler(void): class Bedrock::NonOwnerPointer<class ServerNetworkHandler>	 /// ?getServerNetworkHandler@Minecraft@@QEAA?AV?$NonOwnerPointer@VServerNetworkHandler@@@Bedrock@@XZ
    getSimPaused(): boolean;	// getSimPaused(void): bool	 /// ?getSimPaused@Minecraft@@UEBA_NXZ
    init(): void;	// init(void): void	 /// ?init@Minecraft@@QEAAXXZ
    initAsDedicatedServer(): void;	// initAsDedicatedServer(void): void	 /// ?initAsDedicatedServer@Minecraft@@QEAAXXZ
    isOnlineClient(): boolean;	// isOnlineClient(void): bool	 /// ?isOnlineClient@Minecraft@@UEBA_NXZ
    setSimTimePause(_1: boolean): void;	// setSimTimePause(bool): void	 /// ?setSimTimePause@Minecraft@@UEAAX_N@Z
    setSimTimeScale(_1: number): void;	// setSimTimeScale(float): void	 /// ?setSimTimeScale@Minecraft@@UEAAXM@Z
}
declare class AABB {
    // Attributes 
    lower: Vec3;
    upper: Vec3;
    // Methods 
    // Inherited from AABB
    AABB(_1: object, _2: object): AABB;	// AABB(Vec3 const &,Vec3 const &)	 /// ??0AABB@@QEAA@AEBVVec3@@0@Z
    AABB(_1: object, _2: number): AABB;	// AABB(Vec3 const &,float)	 /// ??0AABB@@QEAA@AEBVVec3@@M@Z
    AABB(_1: number, _2: number, _3: number, _4: number, _5: number, _6: number): AABB;	// AABB(float,float,float,float,float,float)	 /// ??0AABB@@QEAA@MMMMMM@Z
    clipCollide(_1: object, _2: object, _3: boolean, _4: object): bigint;	// clipCollide(AABB const &,Vec3 const &,bool,float *): class Vec3	 /// ?clipCollide@AABB@@QEBA?AVVec3@@AEBV1@AEBV2@_NPEAM@Z
    cloneAndExpandAlongDirection(_1: object): bigint;	// cloneAndExpandAlongDirection(Vec3 const &): class AABB	 /// ?cloneAndExpandAlongDirection@AABB@@QEBA?AV1@AEBVVec3@@@Z
    cloneAndGrow(_1: object): bigint;	// cloneAndGrow(Vec3 const &): class AABB	 /// ?cloneAndGrow@AABB@@QEBA?AV1@AEBVVec3@@@Z
    cloneAndShrink(_1: object): bigint;	// cloneAndShrink(Vec3 const &): class AABB	 /// ?cloneAndShrink@AABB@@QEBA?AV1@AEBVVec3@@@Z
    cloneAndTransformByMatrix(_1: object): bigint;	// cloneAndTransformByMatrix(Matrix const &): class AABB	 /// ?cloneAndTransformByMatrix@AABB@@QEBA?AV1@AEBVMatrix@@@Z
    contains(_1: object): boolean;	// contains(Vec3 const &): bool	 /// ?contains@AABB@@QEBA_NAEBVVec3@@@Z
    distanceTo(_1: object): number;	// distanceTo(AABB const &): float	 /// ?distanceTo@AABB@@QEBAMAEBV1@@Z
    getBounds(): bigint;	// getBounds(void): class Vec3	 /// ?getBounds@AABB@@QEBA?AVVec3@@XZ
    getCenter(): bigint;	// getCenter(void): class Vec3	 /// ?getCenter@AABB@@QEBA?AVVec3@@XZ
    getSize(): number;	// getSize(void): float	 /// ?getSize@AABB@@QEBAMXZ
    getVolume(): number;	// getVolume(void): float	 /// ?getVolume@AABB@@QEBAMXZ
    hasZeroVolume(): boolean;	// hasZeroVolume(void): bool	 /// ?hasZeroVolume@AABB@@QEBA_NXZ
    intersectSegment(_1: object, _2: object, _3: object, _4: object): boolean;	// intersectSegment(Vec3 const &,Vec3 const &,Vec3 &,Vec3 &): bool	 /// ?intersectSegment@AABB@@QEBA_NAEBVVec3@@0AEAV2@1@Z
    intersects(_1: object): boolean;	// intersects(AABB const &): bool	 /// ?intersects@AABB@@QEBA_NAEBV1@@Z
    intersects(_1: object, _2: object): boolean;	// intersects(Vec3 const &,Vec3 const &): bool	 /// ?intersects@AABB@@QEBA_NAEBVVec3@@0@Z
    intersectsInner(_1: object): boolean;	// intersectsInner(AABB const &): bool	 /// ?intersectsInner@AABB@@QEBA_NAEBV1@@Z
    isValid(): boolean;	// isValid(void): bool	 /// ?isValid@AABB@@QEBA_NXZ
    set(_1: object): AABB;	// set(AABB const &): class AABB & __ptr64	 /// ?set@AABB@@QEAAAEAV1@AEBV1@@Z
    set(_1: object, _2: object): AABB;	// set(Vec3 const &,Vec3 const &): class AABB & __ptr64	 /// ?set@AABB@@QEAAAEAV1@AEBVVec3@@0@Z
}
declare class Abilities {
    // Attributes 
    buildAbility: BoolAbility;
    attackPlayersAbility: BoolAbility;
    mineAbility: BoolAbility;
    muteAbility: BoolAbility;
    doorsAndSwitchesAbility: BoolAbility;
    openContainersAbility: BoolAbility;
    attackMobsAbility: BoolAbility;
    opAbility: BoolAbility;
    teleportAbility: BoolAbility;
    invulnerableAbility: BoolAbility;
    flyingAbility: BoolAbility;
    worldbuilderAbility: BoolAbility;
    mayflyAbility: BoolAbility;
    instabuildAbility: BoolAbility;
    lightningAbility: BoolAbility;
    flySpeedAbility: FloatAbility;
    walkSpeedAbility: FloatAbility;
    noclipAbility: BoolAbility;
    // Methods 
    // Inherited from Abilities
    Abilities(_1: object): Abilities;	// Abilities(Abilities const &)	 /// ??0Abilities@@QEAA@AEBV0@@Z
    Abilities(): Abilities;	// Abilities(void)	 /// ??0Abilities@@QEAA@XZ
    _registerAbilities(): void;	// _registerAbilities(void): void	 /// ?_registerAbilities@Abilities@@AEAAXXZ
    getAbilityName(_1: unknown): bigint;	// getAbilityName(AbilitiesIndex): char const * __ptr64	 /// ?getAbilityName@Abilities@@SAPEBDW4AbilitiesIndex@@@Z
    getBool(_1: unknown): boolean;	// getBool(AbilitiesIndex): bool	 /// ?getBool@Abilities@@QEBA_NW4AbilitiesIndex@@@Z
    getPlayerPermissions(): bigint;	// getPlayerPermissions(void): enum PlayerPermissionLevel	 /// ?getPlayerPermissions@Abilities@@QEBA?AW4PlayerPermissionLevel@@XZ
    loadSaveData(_1: object): boolean;	// loadSaveData(CompoundTag const &): bool	 /// ?loadSaveData@Abilities@@QEAA_NAEBVCompoundTag@@@Z
    setPlayerPermissions(_1: unknown): void;	// setPlayerPermissions(PlayerPermissionLevel): void	 /// ?setPlayerPermissions@Abilities@@QEAAXW4PlayerPermissionLevel@@@Z
}
declare class BlockPos {
    // Attributes 
    x: number;
    y: number;
    z: number;
    // Methods 
    // Inherited from BlockPos
    BlockPos(_1: object, _2: object, _3: number): BlockPos;	// BlockPos(ChunkPos const &,ChunkBlockPos const &,short)	 /// ??0BlockPos@@QEAA@AEBVChunkPos@@AEBVChunkBlockPos@@F@Z
    BlockPos(_1: object, _2: number): BlockPos;	// BlockPos(ChunkPos const &,int)	 /// ??0BlockPos@@QEAA@AEBVChunkPos@@H@Z
    BlockPos(_1: object): BlockPos;	// BlockPos(Vec3 const &)	 /// ??0BlockPos@@QEAA@AEBVVec3@@@Z
    BlockPos(_1: number, _2: number, _3: number): BlockPos;	// BlockPos(float,float,float)	 /// ??0BlockPos@@QEAA@MMM@Z
    bindType(): void;	// bindType(void): void	 /// ?bindType@BlockPos@@SAXXZ
    bottomCenter(): bigint;	// bottomCenter(void): class Vec3	 /// ?bottomCenter@BlockPos@@QEBA?AVVec3@@XZ
    center(): bigint;	// center(void): class Vec3	 /// ?center@BlockPos@@QEBA?AVVec3@@XZ
    neighbor(_1: number): bigint;	// neighbor(uchar): class BlockPos	 /// ?neighbor@BlockPos@@QEBA?AV1@E@Z
    relative(_1: number, _2: number): bigint;	// relative(uchar,int): class BlockPos	 /// ?relative@BlockPos@@QEBA?AV1@EH@Z
    toString(): bigint;	// toString(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> >	 /// ?toString@BlockPos@@QEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
    transform(_1: unknown, _2: unknown, _3: object): bigint;	// transform(Rotation,Mirror,Vec3 const &): class BlockPos	 /// ?transform@BlockPos@@QEBA?AV1@W4Rotation@@W4Mirror@@AEBVVec3@@@Z
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
    synchedActorData: SynchedActorData;
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
    velocity: Vec3;
    actorIdentifier: ActorDefinitionIdentifier;
    baseAttributeMap: BaseAttributeMap;
    aabb: AABB;
    width: number;
    height: number;
    postTickPosDelta: Vec3;
    position: Vec3;
    allEffects: SDKVectorContainer;
    entityRuntimeId: bigint;
    isSafeToSleepNear: number;
    armorContainer: SimpleContainer;
    // Methods 
    // Inherited from Actor
    Actor(_1: object, _2: object, _3: object): Actor;	// Actor(ActorDefinitionGroup *,ActorDefinitionIdentifier const &,EntityContext &)	 /// ??0Actor@@QEAA@PEAVActorDefinitionGroup@@AEBUActorDefinitionIdentifier@@AEAVEntityContext@@@Z
    _containsSneakCollisionShapes(_1: object, _2: object): boolean;	// _containsSneakCollisionShapes(IActorMovementProxy &,AABB const &): bool	 /// ?_containsSneakCollisionShapes@Actor@@CA_NAEAUIActorMovementProxy@@AEBVAABB@@@Z
    _doInitialMove(): void;	// _doInitialMove(void): void	 /// ?_doInitialMove@Actor@@MEAAXXZ
    _drop(_1: object, _2: boolean): unknown;	// _drop(ItemStack const &,bool): class ItemActor const * __ptr64	 /// ?_drop@Actor@@IEAAPEBVItemActor@@AEBVItemStack@@_N@Z
    _hurt(_1: object, _2: number, _3: boolean, _4: boolean): boolean;	// _hurt(ActorDamageSource const &,float,bool,bool): bool	 /// ?_hurt@Actor@@MEAA_NAEBVActorDamageSource@@M_N1@Z
    _initAliasProperties(): void;	// _initAliasProperties(void): void	 /// ?_initAliasProperties@Actor@@AEAAXXZ
    _isHeadInWater(): boolean;	// _isHeadInWater(void): bool	 /// ?_isHeadInWater@Actor@@IEBA_NXZ
    _isItemStackNetManagerEnabled(): boolean;	// _isItemStackNetManagerEnabled(void): bool	 /// ?_isItemStackNetManagerEnabled@Actor@@AEBA_NXZ
    _move(_1: object, _2: object): void;	// _move(IActorMovementProxy &,Vec3 const &): void	 /// ?_move@Actor@@SAXAEAUIActorMovementProxy@@AEBVVec3@@@Z
    _moveHitboxTo(_1: object): void;	// _moveHitboxTo(Vec3 const &): void	 /// ?_moveHitboxTo@Actor@@AEAAXAEBVVec3@@@Z
    _playFlySound(_1: object, _2: object): void;	// _playFlySound(BlockPos const &,Block const &): void	 /// ?_playFlySound@Actor@@MEAAXAEBVBlockPos@@AEBVBlock@@@Z
    _playMovementSound(_1: boolean): void;	// _playMovementSound(bool): void	 /// ?_playMovementSound@Actor@@IEAAX_N@Z
    _playStepSound(_1: object, _2: object): void;	// _playStepSound(BlockPos const &,Block const &): void	 /// ?_playStepSound@Actor@@MEAAXAEBVBlockPos@@AEBVBlock@@@Z
    _randomHeartPos(): bigint;	// _randomHeartPos(void): class Vec3	 /// ?_randomHeartPos@Actor@@QEAA?AVVec3@@XZ
    _refreshAABB(): void;	// _refreshAABB(void): void	 /// ?_refreshAABB@Actor@@IEAAXXZ
    _removePassenger(_1: object, _2: boolean, _3: boolean, _4: boolean): void;	// _removePassenger(ActorUniqueID const &,bool,bool,bool): void	 /// ?_removePassenger@Actor@@MEAAXAEBUActorUniqueID@@_N11@Z
    _sendDirtyActorData(): void;	// _sendDirtyActorData(void): void	 /// ?_sendDirtyActorData@Actor@@QEAAXXZ
    _sendLinkPacket(_1: object): void;	// _sendLinkPacket(ActorLink const &): void	 /// ?_sendLinkPacket@Actor@@AEBAXAEBUActorLink@@@Z
    _serverInitItemStackIds(): void;	// _serverInitItemStackIds(void): void	 /// ?_serverInitItemStackIds@Actor@@MEAAXXZ
    _setHeightOffset(_1: number): void;	// _setHeightOffset(float): void	 /// ?_setHeightOffset@Actor@@IEAAXM@Z
    _setPos(_1: object): void;	// _setPos(Vec3 const &): void	 /// ?_setPos@Actor@@IEAAXAEBVVec3@@@Z
    _setupServerAnimationComponent(): void;	// _setupServerAnimationComponent(void): void	 /// ?_setupServerAnimationComponent@Actor@@AEAAXXZ
    _spawnPukeParticles(): void;	// _spawnPukeParticles(void): void	 /// ?_spawnPukeParticles@Actor@@AEAAXXZ
    _updateComposition(_1: boolean): void;	// _updateComposition(bool): void	 /// ?_updateComposition@Actor@@AEAAX_N@Z
    add(_1: object): boolean;	// add(ItemStack &): bool	 /// ?add@Actor@@UEAA_NAEAVItemStack@@@Z
    addAdditionalSaveData(_1: object): void;	// addAdditionalSaveData(CompoundTag &): void	 /// ?addAdditionalSaveData@Actor@@MEAAXAEAVCompoundTag@@@Z
    addEffect(_1: object): void;	// addEffect(MobEffectInstance const &): void	 /// ?addEffect@Actor@@QEAAXAEBVMobEffectInstance@@@Z
    addPassenger(_1: object): void;	// addPassenger(Actor &): void	 /// ?addPassenger@Actor@@UEAAXAEAV1@@Z
    applySnapshot(_1: object, _2: object): void;	// applySnapshot(PlayerSnapshotComponent const &,PlayerSnapshotComponent const &): void	 /// ?applySnapshot@Actor@@UEAAXAEBUPlayerSnapshotComponent@@0@Z
    attack(_1: object, _2: object): boolean;	// attack(Actor &,ActorDamageCause const &): bool	 /// ?attack@Actor@@UEAA_NAEAV1@AEBW4ActorDamageCause@@@Z
    baseTick(): void;	// baseTick(void): void	 /// ?baseTick@Actor@@UEAAXXZ
    blockedByShield(_1: object, _2: object): void;	// blockedByShield(ActorDamageSource const &,Actor &): void	 /// ?blockedByShield@Actor@@UEAAXAEBVActorDamageSource@@AEAV1@@Z
    buildForward(): bigint;	// buildForward(void): class Vec3	 /// ?buildForward@Actor@@QEBA?AVVec3@@XZ
    burn(_1: number, _2: boolean): void;	// burn(int,bool): void	 /// ?burn@Actor@@QEAAXH_N@Z
    calcCenterPos(): bigint;	// calcCenterPos(void): class Vec3	 /// ?calcCenterPos@Actor@@QEBA?AVVec3@@XZ
    canAddPassenger(_1: object): boolean;	// canAddPassenger(Actor &): bool	 /// ?canAddPassenger@Actor@@UEBA_NAEAV1@@Z
    canAttack(_1: object, _2: boolean): boolean;	// canAttack(Actor *,bool): bool	 /// ?canAttack@Actor@@UEBA_NPEAV1@_N@Z
    canBeAffected(_1: object): boolean;	// canBeAffected(MobEffectInstance const &): bool	 /// ?canBeAffected@Actor@@UEBA_NAEBVMobEffectInstance@@@Z
    canBeAffected(_1: number): boolean;	// canBeAffected(int): bool	 /// ?canBeAffected@Actor@@UEBA_NH@Z
    canBeAffectedByArrow(_1: object): boolean;	// canBeAffectedByArrow(MobEffectInstance const &): bool	 /// ?canBeAffectedByArrow@Actor@@UEBA_NAEBVMobEffectInstance@@@Z
    canBeginOrContinueClimbingLadder(): boolean;	// canBeginOrContinueClimbingLadder(void): bool	 /// ?canBeginOrContinueClimbingLadder@Actor@@QEBA_NXZ
    canCurrentlySwim(): boolean;	// canCurrentlySwim(void): bool	 /// ?canCurrentlySwim@Actor@@QEBA_NXZ
    canDisableShield(): boolean;	// canDisableShield(void): bool	 /// ?canDisableShield@Actor@@UEAA_NXZ
    canFly(): boolean;	// canFly(void): bool	 /// ?canFly@Actor@@QEBA_NXZ
    canPowerJump(): boolean;	// canPowerJump(void): bool	 /// ?canPowerJump@Actor@@UEBA_NXZ
    canSee(_1: object): boolean;	// canSee(Actor const &): bool	 /// ?canSee@Actor@@UEBA_NAEBV1@@Z
    canSee(_1: object): boolean;	// canSee(Vec3 const &): bool	 /// ?canSee@Actor@@UEBA_NAEBVVec3@@@Z
    canShowNameTag(): boolean;	// canShowNameTag(void): bool	 /// ?canShowNameTag@Actor@@UEBA_NXZ
    causeFallDamage(_1: number, _2: number, _3: unknown): void;	// causeFallDamage(float,float,ActorDamageSource): void	 /// ?causeFallDamage@Actor@@UEAAXMMVActorDamageSource@@@Z
    celebrateHunt(_1: number, _2: boolean): void;	// celebrateHunt(int,bool): void	 /// ?celebrateHunt@Actor@@QEAAXH_N@Z
    checkEntityOnewayCollision(_1: object, _2: object): void;	// checkEntityOnewayCollision(BlockSource &,BlockPos const &): void	 /// ?checkEntityOnewayCollision@Actor@@SAXAEAVBlockSource@@AEBVBlockPos@@@Z
    checkFallDamage(_1: number, _2: boolean): void;	// checkFallDamage(float,bool): void	 /// ?checkFallDamage@Actor@@UEAAXM_N@Z
    checkInsideBlocks(_1: number): void;	// checkInsideBlocks(float): void	 /// ?checkInsideBlocks@Actor@@MEAAXM@Z
    chorusFruitTeleport(_1: object): void;	// chorusFruitTeleport(Vec3 const &): void	 /// ?chorusFruitTeleport@Actor@@UEAAXAEBVVec3@@@Z
    closerThan(_1: object, _2: number): boolean;	// closerThan(Actor const &,float): bool	 /// ?closerThan@Actor@@QEBA_NAEBV1@M@Z
    consumeItem(_1: object, _2: number): void;	// consumeItem(ItemActor &,int): void	 /// ?consumeItem@Actor@@QEAAXAEAVItemActor@@H@Z
    consumeTotem(): boolean;	// consumeTotem(void): bool	 /// ?consumeTotem@Actor@@UEAA_NXZ
    damageSensorComponentHurt(_1: object, _2: object, _3: boolean): boolean;	// damageSensorComponentHurt(float &,ActorDamageSource const &,bool): bool	 /// ?damageSensorComponentHurt@Actor@@QEAA_NAEAMAEBVActorDamageSource@@_N@Z
    despawn(): void;	// despawn(void): void	 /// ?despawn@Actor@@UEAAXXZ
    die(_1: object): void;	// die(ActorDamageSource const &): void	 /// ?die@Actor@@UEAAXAEBVActorDamageSource@@@Z
    distanceSqrToBlockPosCenter(_1: object): number;	// distanceSqrToBlockPosCenter(BlockPos const &): float	 /// ?distanceSqrToBlockPosCenter@Actor@@QEBAMAEBVBlockPos@@@Z
    distanceTo(_1: object): number;	// distanceTo(Actor const &): float	 /// ?distanceTo@Actor@@QEBAMAEBV1@@Z
    distanceTo(_1: object): number;	// distanceTo(Vec3 const &): float	 /// ?distanceTo@Actor@@QEBAMAEBVVec3@@@Z
    distanceToSqr(_1: object): number;	// distanceToSqr(Actor const &): float	 /// ?distanceToSqr@Actor@@QEBAMAEBV1@@Z
    distanceToSqr(_1: object): number;	// distanceToSqr(Vec3 const &): float	 /// ?distanceToSqr@Actor@@QEBAMAEBVVec3@@@Z
    doFireHurt(_1: number): boolean;	// doFireHurt(int): bool	 /// ?doFireHurt@Actor@@UEAA_NH@Z
    doWaterSplashEffect(): void;	// doWaterSplashEffect(void): void	 /// ?doWaterSplashEffect@Actor@@MEAAXXZ
    drop(_1: object, _2: boolean): boolean;	// drop(ItemStack const &,bool): bool	 /// ?drop@Actor@@UEAA_NAEBVItemStack@@_N@Z
    dropLeash(_1: boolean, _2: boolean): void;	// dropLeash(bool,bool): void	 /// ?dropLeash@Actor@@QEAAX_N0@Z
    dropTowards(_1: object, _2: unknown): void;	// dropTowards(ItemStack const &,Vec3): void	 /// ?dropTowards@Actor@@QEAAXAEBVItemStack@@VVec3@@@Z
    extractSnapshot(_1: object): void;	// extractSnapshot(PlayerSnapshotComponent &): void	 /// ?extractSnapshot@Actor@@UEBAXAEAUPlayerSnapshotComponent@@@Z
    feed(_1: number): void;	// feed(int): void	 /// ?feed@Actor@@UEAAXH@Z
    fetchFishingHook(): unknown;	// fetchFishingHook(void): class FishingHook * __ptr64	 /// ?fetchFishingHook@Actor@@QEAAPEAVFishingHook@@XZ
    fetchNearbyActorsSorted(_1: object, _2: unknown): bigint;	// fetchNearbyActorsSorted(Vec3 const &,ActorType): class std::vector<struct DistanceSortedActor,class std::allocator<struct DistanceSortedActor> >	 /// ?fetchNearbyActorsSorted@Actor@@QEAA?AV?$vector@UDistanceSortedActor@@V?$allocator@UDistanceSortedActor@@@std@@@std@@AEBVVec3@@W4ActorType@@@Z
    fetchNearbyAttackableActorsSorted(_1: object, _2: unknown): bigint;	// fetchNearbyAttackableActorsSorted(Vec3 const &,ActorType): class std::vector<struct DistanceSortedActor,class std::allocator<struct DistanceSortedActor> >	 /// ?fetchNearbyAttackableActorsSorted@Actor@@QEAA?AV?$vector@UDistanceSortedActor@@V?$allocator@UDistanceSortedActor@@@std@@@std@@AEBVVec3@@W4ActorType@@@Z
    filterFormattedNameTag(_1: object): void;	// filterFormattedNameTag(UIProfanityContext const &): void	 /// ?filterFormattedNameTag@Actor@@UEAAXAEBVUIProfanityContext@@@Z
    flagPassengerToRemove(_1: object): void;	// flagPassengerToRemove(Actor &): void	 /// ?flagPassengerToRemove@Actor@@UEAAXAEAV1@@Z
    getAABBDim(): unknown;	// getAABBDim(void): class Vec2 const & __ptr64	 /// ?getAABBDim@Actor@@QEBAAEBVVec2@@XZ
    getActiveEffectCount(): number;	// getActiveEffectCount(void): int	 /// ?getActiveEffectCount@Actor@@QEBAHXZ
    getActorIdentifier(): bigint;	// getActorIdentifier(void): struct ActorDefinitionIdentifier const & __ptr64	 /// ?getActorIdentifier@Actor@@QEBAAEBUActorDefinitionIdentifier@@XZ
    getActorRendererId(): unknown;	// getActorRendererId(void): class HashedString const & __ptr64	 /// ?getActorRendererId@Actor@@UEBAAEBVHashedString@@XZ
    getAllArmor(): bigint;	// getAllArmor(void): class std::vector<class ItemStack const * __ptr64,class std::allocator<class ItemStack const * __ptr64> >	 /// ?getAllArmor@Actor@@UEBA?AV?$vector@PEBVItemStack@@V?$allocator@PEBVItemStack@@@std@@@std@@XZ
    getAmbientSound(): bigint;	// getAmbientSound(void): enum LevelSoundEvent	 /// ?getAmbientSound@Actor@@UEBA?AW4LevelSoundEvent@@XZ
    getAnimationComponent(): unknown;	// getAnimationComponent(void): class AnimationComponent & __ptr64	 /// ?getAnimationComponent@Actor@@UEAAAEAVAnimationComponent@@XZ
    getArmor(_1: unknown): ItemStack;	// getArmor(ArmorSlot): class ItemStack const & __ptr64	 /// ?getArmor@Actor@@UEBAAEBVItemStack@@W4ArmorSlot@@@Z
    getArmorContainer(): SimpleContainer;	// getArmorContainer(void): class SimpleContainer const & __ptr64	 /// ?getArmorContainer@Actor@@QEBAAEBVSimpleContainer@@XZ
    getAttachPos(_1: unknown, _2: number): bigint;	// getAttachPos(ActorLocation,float): class Vec3	 /// ?getAttachPos@Actor@@UEBA?AVVec3@@W4ActorLocation@@M@Z
    getAttribute(_1: object): unknown;	// getAttribute(Attribute const &): class AttributeInstance const & __ptr64	 /// ?getAttribute@Actor@@UEBAAEBVAttributeInstance@@AEBVAttribute@@@Z
    getBlockDamageCause(_1: object): bigint;	// getBlockDamageCause(Block const &): enum ActorDamageCause	 /// ?getBlockDamageCause@Actor@@UEBA?AW4ActorDamageCause@@AEBVBlock@@@Z
    getBlockPosCurrentlyStandingOn(_1: object): bigint;	// getBlockPosCurrentlyStandingOn(Actor *): class BlockPos	 /// ?getBlockPosCurrentlyStandingOn@Actor@@QEBA?AVBlockPos@@PEAV1@@Z
    getBlockPosCurrentlyStandingOn(_1: object, _2: object): bigint;	// getBlockPosCurrentlyStandingOn(IActorMovementProxy const &,IActorMovementProxy *): class BlockPos	 /// ?getBlockPosCurrentlyStandingOn@Actor@@SA?AVBlockPos@@AEBUIActorMovementProxy@@PEAU3@@Z
    getBlockWhenClimbing(_1: object): unknown;	// getBlockWhenClimbing(IActorMovementProxy const &): class Block const & __ptr64	 /// ?getBlockWhenClimbing@Actor@@KAAEBVBlock@@AEBUIActorMovementProxy@@@Z
    getBrightness(_1: number): number;	// getBrightness(float): float	 /// ?getBrightness@Actor@@UEBAMM@Z
    getCarriedItem(): ItemStack;	// getCarriedItem(void): class ItemStack const & __ptr64	 /// ?getCarriedItem@Actor@@UEBAAEBVItemStack@@XZ
    getChestSlots(): number;	// getChestSlots(void): int	 /// ?getChestSlots@Actor@@UEBAHXZ
    getColor(): bigint;	// getColor(void): enum PaletteColor	 /// ?getColor@Actor@@QEBA?AW4PaletteColor@@XZ
    getCommandPermissionLevel(): bigint;	// getCommandPermissionLevel(void): enum CommandPermissionLevel	 /// ?getCommandPermissionLevel@Actor@@UEBA?AW4CommandPermissionLevel@@XZ
    getDamageNearbyMobs(): boolean;	// getDamageNearbyMobs(void): bool	 /// ?getDamageNearbyMobs@Actor@@QEBA_NXZ
    getDimensionConst(): Dimension;	// getDimensionConst(void): class Dimension const & __ptr64	 /// ?getDimensionConst@Actor@@QEBAAEBVDimension@@XZ
    getDimensionId(): bigint;	// getDimensionId(void): class AutomaticID<class Dimension,int>	 /// ?getDimensionId@Actor@@UEBA?AV?$AutomaticID@VDimension@@H@@XZ
    getEconomyTradeableComponent(): unknown;	// getEconomyTradeableComponent(void): class EconomyTradeableComponent * __ptr64	 /// ?getEconomyTradeableComponent@Actor@@QEBAPEAVEconomyTradeableComponent@@XZ
    getEffect(_1: object): unknown;	// getEffect(MobEffect const &): class MobEffectInstance const * __ptr64	 /// ?getEffect@Actor@@QEBAPEBVMobEffectInstance@@AEBVMobEffect@@@Z
    getEntityData(): SynchedActorData;	// getEntityData(void): class SynchedActorData const & __ptr64	 /// ?getEntityData@Actor@@QEBAAEBVSynchedActorData@@XZ
    getEntityTypeId(): bigint;	// getEntityTypeId(void): enum ActorType	 /// ?getEntityTypeId@Actor@@UEBA?AW4ActorType@@XZ
    getEquipSlots(): number;	// getEquipSlots(void): int	 /// ?getEquipSlots@Actor@@UEBAHXZ
    getEquipmentCount(): number;	// getEquipmentCount(void): int	 /// ?getEquipmentCount@Actor@@UEBAHXZ
    getEquippedSlot(_1: unknown): ItemStack;	// getEquippedSlot(EquipmentSlot): class ItemStack const & __ptr64	 /// ?getEquippedSlot@Actor@@UEBAAEBVItemStack@@W4EquipmentSlot@@@Z
    getEquippedTotem(): ItemStack;	// getEquippedTotem(void): class ItemStack const & __ptr64	 /// ?getEquippedTotem@Actor@@UEBAAEBVItemStack@@XZ
    getFiringPos(): bigint;	// getFiringPos(void): class Vec3	 /// ?getFiringPos@Actor@@UEBA?AVVec3@@XZ
    getFirstAvailableSeatPos(_1: object, _2: object): boolean;	// getFirstAvailableSeatPos(Actor &,Vec3 &): bool	 /// ?getFirstAvailableSeatPos@Actor@@QEBA_NAEAV1@AEAVVec3@@@Z
    getFirstPassenger(): Actor;	// getFirstPassenger(void): class Actor * __ptr64	 /// ?getFirstPassenger@Actor@@QEBAPEAV1@XZ
    getFormattedNameTag(): bigint;	// getFormattedNameTag(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> >	 /// ?getFormattedNameTag@Actor@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
    getHeadLookVector(_1: number): bigint;	// getHeadLookVector(float): class Vec3	 /// ?getHeadLookVector@Actor@@UEBA?AVVec3@@M@Z
    getHealth(): number;	// getHealth(void): int	 /// ?getHealth@Actor@@QEBAHXZ
    getInteraction(_1: object, _2: object, _3: object): boolean;	// getInteraction(Player &,ActorInteraction &,Vec3 const &): bool	 /// ?getInteraction@Actor@@UEAA_NAEAVPlayer@@AEAVActorInteraction@@AEBVVec3@@@Z
    getInterpolatedBodyRot(_1: number): number;	// getInterpolatedBodyRot(float): float	 /// ?getInterpolatedBodyRot@Actor@@UEBAMM@Z
    getInterpolatedPosition(_1: number): bigint;	// getInterpolatedPosition(float): class Vec3	 /// ?getInterpolatedPosition@Actor@@QEBA?AVVec3@@M@Z
    getInterpolatedRidingPosition(_1: number): bigint;	// getInterpolatedRidingPosition(float): class Vec3	 /// ?getInterpolatedRidingPosition@Actor@@UEBA?AVVec3@@M@Z
    getInterpolatedRotation(_1: number): bigint;	// getInterpolatedRotation(float): class Vec2	 /// ?getInterpolatedRotation@Actor@@QEBA?AVVec2@@M@Z
    getInterpolatedWalkAnimSpeed(_1: number): number;	// getInterpolatedWalkAnimSpeed(float): float	 /// ?getInterpolatedWalkAnimSpeed@Actor@@UEBAMM@Z
    getInventorySize(): number;	// getInventorySize(void): int	 /// ?getInventorySize@Actor@@UEBAHXZ
    getLastHurtByMob(): Mob;	// getLastHurtByMob(void): class Mob * __ptr64	 /// ?getLastHurtByMob@Actor@@UEAAPEAVMob@@XZ
    getLastHurtByPlayer(): Player;	// getLastHurtByPlayer(void): class Player * __ptr64	 /// ?getLastHurtByPlayer@Actor@@UEAAPEAVPlayer@@XZ
    getLastHurtMob(): Mob;	// getLastHurtMob(void): class Mob * __ptr64	 /// ?getLastHurtMob@Actor@@UEAAPEAVMob@@XZ
    getLastHurtMobTimestamp(): number;	// getLastHurtMobTimestamp(void): int	 /// ?getLastHurtMobTimestamp@Actor@@QEAAHXZ
    getLastHurtTimestamp(): bigint;	// getLastHurtTimestamp(void): unsigned __int64	 /// ?getLastHurtTimestamp@Actor@@QEBA_KXZ
    getLevel(): Level;	// getLevel(void): class Level const & __ptr64	 /// ?getLevel@Actor@@QEBAAEBVLevel@@XZ
    getLinks(): bigint;	// getLinks(void): class std::vector<struct ActorLink,class std::allocator<struct ActorLink> >	 /// ?getLinks@Actor@@QEBA?AV?$vector@UActorLink@@V?$allocator@UActorLink@@@std@@@std@@XZ
    getLiquidAABB(_1: unknown): bigint;	// getLiquidAABB(MaterialType): class AABB	 /// ?getLiquidAABB@Actor@@UEBA?AVAABB@@W4MaterialType@@@Z
    getLiquidFlowStrength(_1: unknown): number;	// getLiquidFlowStrength(MaterialType): float	 /// ?getLiquidFlowStrength@Actor@@SAMW4MaterialType@@@Z
    getLootTable(): unknown;	// getLootTable(void): class LootTable * __ptr64	 /// ?getLootTable@Actor@@UEAAPEAVLootTable@@XZ
    getMapDecorationRotation(): number;	// getMapDecorationRotation(void): float	 /// ?getMapDecorationRotation@Actor@@UEBAMXZ
    getMaxHealth(): number;	// getMaxHealth(void): int	 /// ?getMaxHealth@Actor@@QEBAHXZ
    getMovementProxy(): bigint;	// getMovementProxy(void): class gsl::not_null<class std::shared_ptr<struct IActorMovementProxy const> >	 /// ?getMovementProxy@Actor@@QEBA?AV?$not_null@V?$shared_ptr@$$CBUIActorMovementProxy@@@std@@@gsl@@XZ
    getMutableAttribute(_1: object): unknown;	// getMutableAttribute(Attribute const &): class AttributeInstance * __ptr64	 /// ?getMutableAttribute@Actor@@UEAAPEAVAttributeInstance@@AEBVAttribute@@@Z
    getNameTag(): unknown;	// getNameTag(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64	 /// ?getNameTag@Actor@@UEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
    getNameTagAsHash(): bigint;	// getNameTagAsHash(void): unsigned __int64	 /// ?getNameTagAsHash@Actor@@UEBA_KXZ
    getNextStep(_1: number): number;	// getNextStep(float): float	 /// ?getNextStep@Actor@@UEAAMM@Z
    getOffhandSlot(): ItemStack;	// getOffhandSlot(void): class ItemStack const & __ptr64	 /// ?getOffhandSlot@Actor@@QEBAAEBVItemStack@@XZ
    getOnDeathExperience(): number;	// getOnDeathExperience(void): int	 /// ?getOnDeathExperience@Actor@@QEAAHXZ
    getOwner(): Mob;	// getOwner(void): class Mob * __ptr64	 /// ?getOwner@Actor@@QEBAPEAVMob@@XZ
    getOwnerEntityType(): bigint;	// getOwnerEntityType(void): enum ActorType	 /// ?getOwnerEntityType@Actor@@UEAA?AW4ActorType@@XZ
    getOwnerId(): bigint;	// getOwnerId(void): struct ActorUniqueID const	 /// ?getOwnerId@Actor@@QEBA?BUActorUniqueID@@XZ
    getPassengerIndex(_1: object): number;	// getPassengerIndex(Actor const &): int	 /// ?getPassengerIndex@Actor@@QEBAHAEBV1@@Z
    getPassengerYRotation(_1: object): number;	// getPassengerYRotation(Actor const &): float	 /// ?getPassengerYRotation@Actor@@UEBAMAEBV1@@Z
    getPersistingTradeOffers(): bigint;	// getPersistingTradeOffers(void): class std::unique_ptr<class CompoundTag,struct std::default_delete<class CompoundTag> >	 /// ?getPersistingTradeOffers@Actor@@QEAA?AV?$unique_ptr@VCompoundTag@@U?$default_delete@VCompoundTag@@@std@@@std@@XZ
    getPickRadius(): number;	// getPickRadius(void): float	 /// ?getPickRadius@Actor@@UEAAMXZ
    getPlayerOwner(): Player;	// getPlayerOwner(void): class Player * __ptr64	 /// ?getPlayerOwner@Actor@@QEBAPEAVPlayer@@XZ
    getPortalCooldown(): number;	// getPortalCooldown(void): int	 /// ?getPortalCooldown@Actor@@UEBAHXZ
    getPosDelta(): unknown;	// getPosDelta(void): class Vec3 const & __ptr64	 /// ?getPosDelta@Actor@@QEBAAEBVVec3@@XZ
    getPosExtrapolated(_1: number): unknown;	// getPosExtrapolated(float): class Vec3 const	 /// ?getPosExtrapolated@Actor@@UEBA?BVVec3@@M@Z
    getPosPrev(): unknown;	// getPosPrev(void): class Vec3 const & __ptr64	 /// ?getPosPrev@Actor@@UEBAAEBVVec3@@XZ
    getPosition(): unknown;	// getPosition(void): class Vec3 const & __ptr64	 /// ?getPosition@Actor@@UEBAAEBVVec3@@XZ
    getPredictedMovementValues(): bigint;	// getPredictedMovementValues(void): struct PredictedMovementValues const & __ptr64	 /// ?getPredictedMovementValues@Actor@@UEBAAEBUPredictedMovementValues@@XZ
    getRandom(): Random;	// getRandom(void): class Random & __ptr64	 /// ?getRandom@Actor@@QEBAAEAVRandom@@XZ
    getRegionConst(): BlockSource;	// getRegionConst(void): class BlockSource const & __ptr64	 /// ?getRegionConst@Actor@@QEBAAEBVBlockSource@@XZ
    getRotation(): bigint;	// getRotation(void): class Vec2	 /// ?getRotation@Actor@@QEBA?AVVec2@@XZ
    getRuntimeID(): bigint;	// getRuntimeID(void): class ActorRuntimeID	 /// ?getRuntimeID@Actor@@QEBA?AVActorRuntimeID@@XZ
    getScoreTag(): unknown;	// getScoreTag(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64	 /// ?getScoreTag@Actor@@UEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
    getShadowHeightOffs(): number;	// getShadowHeightOffs(void): float	 /// ?getShadowHeightOffs@Actor@@UEAAMXZ
    getShadowRadius(): number;	// getShadowRadius(void): float	 /// ?getShadowRadius@Actor@@UEBAMXZ
    getSourceUniqueID(): bigint;	// getSourceUniqueID(void): struct ActorUniqueID	 /// ?getSourceUniqueID@Actor@@UEBA?AUActorUniqueID@@XZ
    getSpeedInMetersPerSecond(): number;	// getSpeedInMetersPerSecond(void): float	 /// ?getSpeedInMetersPerSecond@Actor@@QEBAMXZ
    getStatusFlag(_1: unknown): boolean;	// getStatusFlag(ActorFlags): bool	 /// ?getStatusFlag@Actor@@QEBA_NW4ActorFlags@@@Z
    getStructuralIntegrity(): number;	// getStructuralIntegrity(void): int	 /// ?getStructuralIntegrity@Actor@@QEBAHXZ
    getTags(): unknown;	// getTags(void): class gsl::span<class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> >,-1> const	 /// ?getTags@Actor@@QEBA?BV?$span@V?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@$0?0@gsl@@XZ
    getTarget(): Actor;	// getTarget(void): class Actor * __ptr64	 /// ?getTarget@Actor@@QEBAPEAV1@XZ
    getTradeOffers(): unknown;	// getTradeOffers(void): class MerchantRecipeList * __ptr64	 /// ?getTradeOffers@Actor@@QEAAPEAVMerchantRecipeList@@XZ
    getTradingPlayer(): Player;	// getTradingPlayer(void): class Player * __ptr64	 /// ?getTradingPlayer@Actor@@QEBAPEAVPlayer@@XZ
    getUniqueID(): bigint;	// getUniqueID(void): struct ActorUniqueID const & __ptr64	 /// ?getUniqueID@Actor@@QEBAAEBUActorUniqueID@@XZ
    getVariant(): number;	// getVariant(void): int	 /// ?getVariant@Actor@@QEBAHXZ
    getVehicle(): Actor;	// getVehicle(void): class Actor * __ptr64	 /// ?getVehicle@Actor@@QEBAPEAV1@XZ
    getVehicleRoot(): Actor;	// getVehicleRoot(void): class Actor * __ptr64	 /// ?getVehicleRoot@Actor@@QEBAPEAV1@XZ
    getVehicleRuntimeID(): bigint;	// getVehicleRuntimeID(void): class ActorRuntimeID	 /// ?getVehicleRuntimeID@Actor@@QEBA?AVActorRuntimeID@@XZ
    getVerticalSpeedInMetersPerSecond(): number;	// getVerticalSpeedInMetersPerSecond(void): float	 /// ?getVerticalSpeedInMetersPerSecond@Actor@@QEBAMXZ
    getViewVector(_1: object, _2: number): bigint;	// getViewVector(IActorMovementProxy const &,float): class Vec3	 /// ?getViewVector@Actor@@SA?AVVec3@@AEBUIActorMovementProxy@@M@Z
    getViewVector(_1: number): bigint;	// getViewVector(float): class Vec3	 /// ?getViewVector@Actor@@QEBA?AVVec3@@M@Z
    getYawSpeedInDegreesPerSecond(): number;	// getYawSpeedInDegreesPerSecond(void): float	 /// ?getYawSpeedInDegreesPerSecond@Actor@@UEBAMXZ
    handleEntityEvent(_1: unknown, _2: number): void;	// handleEntityEvent(ActorEvent,int): void	 /// ?handleEntityEvent@Actor@@UEAAXW4ActorEvent@@H@Z
    handleFallDistanceOnServer(_1: number, _2: number, _3: boolean): void;	// handleFallDistanceOnServer(float,float,bool): void	 /// ?handleFallDistanceOnServer@Actor@@UEAAXMM_N@Z
    handleInsidePortal(_1: object): void;	// handleInsidePortal(BlockPos const &): void	 /// ?handleInsidePortal@Actor@@UEAAXAEBVBlockPos@@@Z
    hasCategory(_1: unknown): boolean;	// hasCategory(ActorCategory): bool	 /// ?hasCategory@Actor@@QEBA_NW4ActorCategory@@@Z
    hasComponent(_1: object): boolean;	// hasComponent(HashedString const &): bool	 /// ?hasComponent@Actor@@UEBA_NAEBVHashedString@@@Z
    hasEffect(_1: object): boolean;	// hasEffect(MobEffect const &): bool	 /// ?hasEffect@Actor@@QEBA_NAEBVMobEffect@@@Z
    hasEnteredWater(): boolean;	// hasEnteredWater(void): bool	 /// ?hasEnteredWater@Actor@@UEBA_NXZ
    hasFamily(_1: object): boolean;	// hasFamily(HashedString const &): bool	 /// ?hasFamily@Actor@@QEBA_NAEBVHashedString@@@Z
    hasPassenger(): boolean;	// hasPassenger(void): bool	 /// ?hasPassenger@Actor@@QEBA_NXZ
    hasPlayerPassenger(): boolean;	// hasPlayerPassenger(void): bool	 /// ?hasPlayerPassenger@Actor@@QEBA_NXZ
    hasSaddle(): boolean;	// hasSaddle(void): bool	 /// ?hasSaddle@Actor@@QEBA_NXZ
    hasSubBBIn(_1: object, _2: unknown): boolean;	// hasSubBBIn(IActorMovementProxy const &,MaterialType): bool	 /// ?hasSubBBIn@Actor@@SA_NAEBUIActorMovementProxy@@W4MaterialType@@@Z
    hasTickingArea(): boolean;	// hasTickingArea(void): bool	 /// ?hasTickingArea@Actor@@QEBA_NXZ
    hasType(_1: unknown): boolean;	// hasType(ActorType): bool	 /// ?hasType@Actor@@QEBA_NW4ActorType@@@Z
    heal(_1: number): void;	// heal(int): void	 /// ?heal@Actor@@UEAAXH@Z
    hurt(_1: object, _2: number, _3: boolean, _4: boolean): boolean;	// hurt(ActorDamageSource const &,float,bool,bool): bool	 /// ?hurt@Actor@@QEAA_NAEBVActorDamageSource@@M_N1@Z
    initActorProperties(): void;	// initActorProperties(void): void	 /// ?initActorProperties@Actor@@QEAAXXZ
    initParams(_1: object): void;	// initParams(VariantParameterList &): void	 /// ?initParams@Actor@@QEAAXAEAVVariantParameterList@@@Z
    initializeComponents(_1: unknown, _2: object): void;	// initializeComponents(Actor::InitializationMethod,VariantParameterList const &): void	 /// ?initializeComponents@Actor@@MEAAXW4InitializationMethod@1@AEBVVariantParameterList@@@Z
    interpolatorTick(): void;	// interpolatorTick(void): void	 /// ?interpolatorTick@Actor@@UEAAXXZ
    intersects(_1: object, _2: object): boolean;	// intersects(Vec3 const &,Vec3 const &): bool	 /// ?intersects@Actor@@UEBA_NAEBVVec3@@0@Z
    isActorLocationInMaterial(_1: unknown, _2: unknown): boolean;	// isActorLocationInMaterial(ActorLocation,MaterialType): bool	 /// ?isActorLocationInMaterial@Actor@@QEBA_NW4ActorLocation@@W4MaterialType@@@Z
    isAffectedByWaterBottle(): boolean;	// isAffectedByWaterBottle(void): bool	 /// ?isAffectedByWaterBottle@Actor@@UEBA_NXZ
    isAlive(): boolean;	// isAlive(void): bool	 /// ?isAlive@Actor@@UEBA_NXZ
    isAttackableGamemode(): boolean;	// isAttackableGamemode(void): bool	 /// ?isAttackableGamemode@Actor@@UEBA_NXZ
    isBaby(): boolean;	// isBaby(void): bool	 /// ?isBaby@Actor@@QEBA_NXZ
    isChested(): boolean;	// isChested(void): bool	 /// ?isChested@Actor@@QEBA_NXZ
    isClientSide(): boolean;	// isClientSide(void): bool	 /// ?isClientSide@Actor@@UEBA_NXZ
    isControlledByLocalInstance(): boolean;	// isControlledByLocalInstance(void): bool	 /// ?isControlledByLocalInstance@Actor@@QEBA_NXZ
    isEnchanted(): boolean;	// isEnchanted(void): bool	 /// ?isEnchanted@Actor@@UEBA_NXZ
    isFireImmune(): boolean;	// isFireImmune(void): bool	 /// ?isFireImmune@Actor@@UEBA_NXZ
    isFree(_1: object, _2: object, _3: number): boolean;	// isFree(IActorMovementProxy &,Vec3 const &,float): bool	 /// ?isFree@Actor@@SA_NAEAUIActorMovementProxy@@AEBVVec3@@M@Z
    isImmobile(_1: object): boolean;	// isImmobile(IActorMovementProxy const &): bool	 /// ?isImmobile@Actor@@SA_NAEBUIActorMovementProxy@@@Z
    isImmobile(): boolean;	// isImmobile(void): bool	 /// ?isImmobile@Actor@@UEBA_NXZ
    isInClouds(): boolean;	// isInClouds(void): bool	 /// ?isInClouds@Actor@@QEBA_NXZ
    isInLava(): boolean;	// isInLava(void): bool	 /// ?isInLava@Actor@@UEBA_NXZ
    isInPrecipitation(): boolean;	// isInPrecipitation(void): bool	 /// ?isInPrecipitation@Actor@@QEBA_NXZ
    isInRain(): boolean;	// isInRain(void): bool	 /// ?isInRain@Actor@@QEBA_NXZ
    isInSnow(): boolean;	// isInSnow(void): bool	 /// ?isInSnow@Actor@@QEBA_NXZ
    isInThunderstorm(): boolean;	// isInThunderstorm(void): bool	 /// ?isInThunderstorm@Actor@@QEBA_NXZ
    isInWall(): boolean;	// isInWall(void): bool	 /// ?isInWall@Actor@@UEBA_NXZ
    isInWater(): boolean;	// isInWater(void): bool	 /// ?isInWater@Actor@@UEBA_NXZ
    isInWaterOrRain(): boolean;	// isInWaterOrRain(void): bool	 /// ?isInWaterOrRain@Actor@@QEBA_NXZ
    isInsideBorderBlock(_1: number): boolean;	// isInsideBorderBlock(float): bool	 /// ?isInsideBorderBlock@Actor@@QEBA_NM@Z
    isInvertedHealAndHarm(): boolean;	// isInvertedHealAndHarm(void): bool	 /// ?isInvertedHealAndHarm@Actor@@UEBA_NXZ
    isInvisible(): boolean;	// isInvisible(void): bool	 /// ?isInvisible@Actor@@UEBA_NXZ
    isInvulnerableTo(_1: object): boolean;	// isInvulnerableTo(ActorDamageSource const &): bool	 /// ?isInvulnerableTo@Actor@@UEBA_NAEBVActorDamageSource@@@Z
    isLeashed(): boolean;	// isLeashed(void): bool	 /// ?isLeashed@Actor@@QEBA_NXZ
    isMoving(): boolean;	// isMoving(void): bool	 /// ?isMoving@Actor@@QEBA_NXZ
    isOnFire(): boolean;	// isOnFire(void): bool	 /// ?isOnFire@Actor@@UEBA_NXZ
    isOnHotBlock(): boolean;	// isOnHotBlock(void): bool	 /// ?isOnHotBlock@Actor@@UEBA_NXZ
    isOverWater(): boolean;	// isOverWater(void): bool	 /// ?isOverWater@Actor@@UEBA_NXZ
    isPacified(): boolean;	// isPacified(void): bool	 /// ?isPacified@Actor@@QEBA_NXZ
    isPassenger(_1: object): boolean;	// isPassenger(Actor const &): bool	 /// ?isPassenger@Actor@@QEBA_NAEBV1@@Z
    isPersistent(): boolean;	// isPersistent(void): bool	 /// ?isPersistent@Actor@@QEBA_NXZ
    isPowered(): boolean;	// isPowered(void): bool	 /// ?isPowered@Actor@@QEBA_NXZ
    isRegionValid(): boolean;	// isRegionValid(void): bool	 /// ?isRegionValid@Actor@@QEBA_NXZ
    isRemoved(): boolean;	// isRemoved(void): bool	 /// ?isRemoved@Actor@@QEBA_NXZ
    isRiding(_1: object): boolean;	// isRiding(Actor *): bool	 /// ?isRiding@Actor@@QEBA_NPEAV1@@Z
    isRiding(): boolean;	// isRiding(void): bool	 /// ?isRiding@Actor@@QEBA_NXZ
    isSilent(): boolean;	// isSilent(void): bool	 /// ?isSilent@Actor@@UEAA_NXZ
    isSitting(_1: object): boolean;	// isSitting(IActorMovementProxy const &): bool	 /// ?isSitting@Actor@@SA_NAEBUIActorMovementProxy@@@Z
    isSitting(): boolean;	// isSitting(void): bool	 /// ?isSitting@Actor@@QEBA_NXZ
    isSkyLit(_1: number): boolean;	// isSkyLit(float): bool	 /// ?isSkyLit@Actor@@UEAA_NM@Z
    isSneaking(): boolean;	// isSneaking(void): bool	 /// ?isSneaking@Actor@@QEBA_NXZ
    isStanding(): boolean;	// isStanding(void): bool	 /// ?isStanding@Actor@@QEBA_NXZ
    isSwimming(): boolean;	// isSwimming(void): bool	 /// ?isSwimming@Actor@@QEBA_NXZ
    isTame(): boolean;	// isTame(void): bool	 /// ?isTame@Actor@@QEBA_NXZ
    isTouchingDamageBlock(): boolean;	// isTouchingDamageBlock(void): bool	 /// ?isTouchingDamageBlock@Actor@@QEBA_NXZ
    isType(_1: unknown): boolean;	// isType(ActorType): bool	 /// ?isType@Actor@@QEBA_NW4ActorType@@@Z
    isUnderLiquid(_1: unknown): boolean;	// isUnderLiquid(MaterialType): bool	 /// ?isUnderLiquid@Actor@@UEBA_NW4MaterialType@@@Z
    isWearingLeatherArmor(): bigint;	// isWearingLeatherArmor(void): bool const	 /// ?isWearingLeatherArmor@Actor@@UEBA?B_NXZ
    kill(): void;	// kill(void): void	 /// ?kill@Actor@@UEAAXXZ
    killed(_1: object): void;	// killed(Actor &): void	 /// ?killed@Actor@@UEAAXAEAV1@@Z
    lerpMotion(_1: object): void;	// lerpMotion(Vec3 const &): void	 /// ?lerpMotion@Actor@@UEAAXAEBVVec3@@@Z
    lerpTo(_1: object, _2: object, _3: number): void;	// lerpTo(Vec3 const &,Vec2 const &,int): void	 /// ?lerpTo@Actor@@QEAAXAEBVVec3@@AEBVVec2@@H@Z
    lerpToRotation(_1: object, _2: number): void;	// lerpToRotation(Vec2 const &,int): void	 /// ?lerpToRotation@Actor@@QEAAXAEBVVec2@@H@Z
    load(_1: object, _2: object): boolean;	// load(CompoundTag const &,DataLoadHelper &): bool	 /// ?load@Actor@@UEAA_NAEBVCompoundTag@@AEAVDataLoadHelper@@@Z
    loadEntityFlags(_1: object, _2: object): void;	// loadEntityFlags(CompoundTag const &,DataLoadHelper &): void	 /// ?loadEntityFlags@Actor@@QEAAXAEBVCompoundTag@@AEAVDataLoadHelper@@@Z
    lovePartnerId(): bigint;	// lovePartnerId(void): struct ActorUniqueID const & __ptr64	 /// ?lovePartnerId@Actor@@QEBAAEBUActorUniqueID@@XZ
    markHurt(): void;	// markHurt(void): void	 /// ?markHurt@Actor@@MEAAXXZ
    move(_1: object, _2: object): void;	// move(IActorMovementProxy &,Vec3 const &): void	 /// ?move@Actor@@UEBAXAEAUIActorMovementProxy@@AEBVVec3@@@Z
    move(_1: object): void;	// move(Vec3 const &): void	 /// ?move@Actor@@UEAAXAEBVVec3@@@Z
    moveBBs(_1: object): void;	// moveBBs(Vec3 const &): void	 /// ?moveBBs@Actor@@QEAAXAEBVVec3@@@Z
    moveTo(_1: object, _2: object): void;	// moveTo(Vec3 const &,Vec2 const &): void	 /// ?moveTo@Actor@@QEAAXAEBVVec3@@AEBVVec2@@@Z
    normalTick(): void;	// normalTick(void): void	 /// ?normalTick@Actor@@UEAAXXZ
    onAboveBubbleColumn(_1: boolean): void;	// onAboveBubbleColumn(bool): void	 /// ?onAboveBubbleColumn@Actor@@UEAAX_N@Z
    onAffectedByWaterBottle(): void;	// onAffectedByWaterBottle(void): void	 /// ?onAffectedByWaterBottle@Actor@@QEAAXXZ
    onClimbableBlock(_1: object): boolean;	// onClimbableBlock(IActorMovementProxy const &): bool	 /// ?onClimbableBlock@Actor@@SA_NAEBUIActorMovementProxy@@@Z
    onEffectAdded(_1: object): void;	// onEffectAdded(MobEffectInstance &): void	 /// ?onEffectAdded@Actor@@UEAAXAEAVMobEffectInstance@@@Z
    onEffectRemoved(_1: object): void;	// onEffectRemoved(MobEffectInstance &): void	 /// ?onEffectRemoved@Actor@@UEAAXAEAVMobEffectInstance@@@Z
    onEffectUpdated(_1: object): void;	// onEffectUpdated(MobEffectInstance &): void	 /// ?onEffectUpdated@Actor@@UEAAXAEAVMobEffectInstance@@@Z
    onInsideBubbleColumn(_1: boolean): void;	// onInsideBubbleColumn(bool): void	 /// ?onInsideBubbleColumn@Actor@@UEAAX_N@Z
    onLightningHit(): void;	// onLightningHit(void): void	 /// ?onLightningHit@Actor@@UEAAXXZ
    onOrphan(): void;	// onOrphan(void): void	 /// ?onOrphan@Actor@@UEAAXXZ
    onSynchedDataUpdate(_1: number): void;	// onSynchedDataUpdate(int): void	 /// ?onSynchedDataUpdate@Actor@@UEAAXH@Z
    onSynchedFlagUpdate(_1: number, _2: bigint, _3: bigint): void;	// onSynchedFlagUpdate(int,__int64,__int64): void	 /// ?onSynchedFlagUpdate@Actor@@UEAAXH_J0@Z
    openContainerComponent(_1: object): void;	// openContainerComponent(Player &): void	 /// ?openContainerComponent@Actor@@UEAAXAEAVPlayer@@@Z
    outOfWorld(): void;	// outOfWorld(void): void	 /// ?outOfWorld@Actor@@UEAAXXZ
    performRangedAttack(_1: object, _2: number): void;	// performRangedAttack(Actor &,float): void	 /// ?performRangedAttack@Actor@@UEAAXAEAV1@M@Z
    pickUpItem(_1: object, _2: number): void;	// pickUpItem(ItemActor &,int): void	 /// ?pickUpItem@Actor@@QEAAXAEAVItemActor@@H@Z
    playAmbientSound(): void;	// playAmbientSound(void): void	 /// ?playAmbientSound@Actor@@UEAAXXZ
    playSound(_1: unknown, _2: object, _3: object): void;	// playSound(LevelSoundEvent,Vec3 const &,Block const &): void	 /// ?playSound@Actor@@QEAAXW4LevelSoundEvent@@AEBVVec3@@AEBVBlock@@@Z
    playSound(_1: unknown, _2: object, _3: number): void;	// playSound(LevelSoundEvent,Vec3 const &,int): void	 /// ?playSound@Actor@@QEAAXW4LevelSoundEvent@@AEBVVec3@@H@Z
    playSynchronizedSound(_1: unknown, _2: object, _3: object, _4: boolean): void;	// playSynchronizedSound(LevelSoundEvent,Vec3 const &,Block const &,bool): void	 /// ?playSynchronizedSound@Actor@@UEAAXW4LevelSoundEvent@@AEBVVec3@@AEBVBlock@@_N@Z
    playSynchronizedSound(_1: unknown, _2: object, _3: number, _4: boolean): void;	// playSynchronizedSound(LevelSoundEvent,Vec3 const &,int,bool): void	 /// ?playSynchronizedSound@Actor@@UEAAXW4LevelSoundEvent@@AEBVVec3@@H_N@Z
    positionAllPassengers(): void;	// positionAllPassengers(void): void	 /// ?positionAllPassengers@Actor@@QEAAXXZ
    positionPassenger(_1: object, _2: number): void;	// positionPassenger(Actor &,float): void	 /// ?positionPassenger@Actor@@UEAAXAEAV1@M@Z
    pushBackActionEventToActionQueue(_1: unknown): void;	// pushBackActionEventToActionQueue(ActionEvent): void	 /// ?pushBackActionEventToActionQueue@Actor@@QEAAXVActionEvent@@@Z
    pushOutOfBlocks(_1: object): void;	// pushOutOfBlocks(Vec3 const &): void	 /// ?pushOutOfBlocks@Actor@@MEAAXAEBVVec3@@@Z
    readAdditionalSaveData(_1: object, _2: object): void;	// readAdditionalSaveData(CompoundTag const &,DataLoadHelper &): void	 /// ?readAdditionalSaveData@Actor@@MEAAXAEBVCompoundTag@@AEAVDataLoadHelper@@@Z
    reload(): void;	// reload(void): void	 /// ?reload@Actor@@QEAAXXZ
    reloadComponents(_1: unknown, _2: object): void;	// reloadComponents(Actor::InitializationMethod,VariantParameterList const &): void	 /// ?reloadComponents@Actor@@MEAAXW4InitializationMethod@1@AEBVVariantParameterList@@@Z
    reloadHardcodedClient(_1: unknown, _2: object): void;	// reloadHardcodedClient(Actor::InitializationMethod,VariantParameterList const &): void	 /// ?reloadHardcodedClient@Actor@@MEAAXW4InitializationMethod@1@AEBVVariantParameterList@@@Z
    reloadLootTable(_1: object): void;	// reloadLootTable(EquipmentTableDefinition const &): void	 /// ?reloadLootTable@Actor@@UEAAXAEBUEquipmentTableDefinition@@@Z
    reloadLootTable(): void;	// reloadLootTable(void): void	 /// ?reloadLootTable@Actor@@UEAAXXZ
    remove(): void;	// remove(void): void	 /// ?remove@Actor@@UEAAXXZ
    removeAllPassengers(_1: boolean, _2: boolean): void;	// removeAllPassengers(bool,bool): void	 /// ?removeAllPassengers@Actor@@QEAAX_N0@Z
    removeEffect(_1: number): void;	// removeEffect(int): void	 /// ?removeEffect@Actor@@QEAAXH@Z
    reset(): void;	// reset(void): void	 /// ?reset@Actor@@UEAAXXZ
    resetBlockMovementSlowdownMultiplier(): void;	// resetBlockMovementSlowdownMultiplier(void): void	 /// ?resetBlockMovementSlowdownMultiplier@Actor@@UEAAXXZ
    resetClientAnimations(): void;	// resetClientAnimations(void): void	 /// ?resetClientAnimations@Actor@@QEAAXXZ
    resetRegion(): void;	// resetRegion(void): void	 /// ?resetRegion@Actor@@QEAAXXZ
    save(_1: object): boolean;	// save(CompoundTag &): bool	 /// ?save@Actor@@UEAA_NAEAVCompoundTag@@@Z
    saveWithoutId(_1: object): void;	// saveWithoutId(CompoundTag &): void	 /// ?saveWithoutId@Actor@@UEAAXAEAVCompoundTag@@@Z
    sendMotionPacketIfNeeded(): void;	// sendMotionPacketIfNeeded(void): void	 /// ?sendMotionPacketIfNeeded@Actor@@UEAAXXZ
    sendMotionToServer(): void;	// sendMotionToServer(void): void	 /// ?sendMotionToServer@Actor@@QEAAXXZ
    serializationSetHealth(_1: number): void;	// serializationSetHealth(int): void	 /// ?serializationSetHealth@Actor@@QEAAXH@Z
    setAABB(_1: object): void;	// setAABB(AABB const &): void	 /// ?setAABB@Actor@@QEAAXAEBVAABB@@@Z
    setAABBDim(_1: object): void;	// setAABBDim(Vec2 const &): void	 /// ?setAABBDim@Actor@@QEAAXAEBVVec2@@@Z
    setActorRendererId(_1: unknown): void;	// setActorRendererId(HashedString): void	 /// ?setActorRendererId@Actor@@QEAAXVHashedString@@@Z
    setArmor(_1: unknown, _2: object): void;	// setArmor(ArmorSlot,ItemStack const &): void	 /// ?setArmor@Actor@@UEAAXW4ArmorSlot@@AEBVItemStack@@@Z
    setBlockMovementSlowdownMultiplier(_1: object, _2: object): void;	// setBlockMovementSlowdownMultiplier(BlockLegacy const &,Vec3 const &): void	 /// ?setBlockMovementSlowdownMultiplier@Actor@@UEAAXAEBVBlockLegacy@@AEBVVec3@@@Z
    setCanPowerJump(_1: boolean): void;	// setCanPowerJump(bool): void	 /// ?setCanPowerJump@Actor@@UEAAX_N@Z
    setCarriedItem(_1: object): void;	// setCarriedItem(ItemStack const &): void	 /// ?setCarriedItem@Actor@@UEAAXAEBVItemStack@@@Z
    setChainedDamageEffects(_1: boolean): void;	// setChainedDamageEffects(bool): void	 /// ?setChainedDamageEffects@Actor@@QEAAX_N@Z
    setCharged(_1: boolean): void;	// setCharged(bool): void	 /// ?setCharged@Actor@@QEAAX_N@Z
    setColor(_1: unknown): void;	// setColor(PaletteColor): void	 /// ?setColor@Actor@@QEAAXW4PaletteColor@@@Z
    setControllingSeat(_1: number): void;	// setControllingSeat(int): void	 /// ?setControllingSeat@Actor@@QEAAXH@Z
    setDamageNearbyMobs(_1: boolean): void;	// setDamageNearbyMobs(bool): void	 /// ?setDamageNearbyMobs@Actor@@UEAAX_N@Z
    setGlobal(_1: boolean): void;	// setGlobal(bool): void	 /// ?setGlobal@Actor@@QEAAX_N@Z
    setInLove(_1: object): void;	// setInLove(Actor *): void	 /// ?setInLove@Actor@@QEAAXPEAV1@@Z
    setInvisible(_1: boolean): void;	// setInvisible(bool): void	 /// ?setInvisible@Actor@@QEAAX_N@Z
    setLastHitBB(_1: object, _2: object): void;	// setLastHitBB(Vec3 const &,Vec3 const &): void	 /// ?setLastHitBB@Actor@@QEAAXAEBVVec3@@0@Z
    setLastHurtByMob(_1: object): void;	// setLastHurtByMob(Mob *): void	 /// ?setLastHurtByMob@Actor@@UEAAXPEAVMob@@@Z
    setLastHurtByPlayer(_1: object): void;	// setLastHurtByPlayer(Player *): void	 /// ?setLastHurtByPlayer@Actor@@UEAAXPEAVPlayer@@@Z
    setLastHurtMob(_1: object): void;	// setLastHurtMob(Actor *): void	 /// ?setLastHurtMob@Actor@@UEAAXPEAV1@@Z
    setLeashHolder(_1: unknown): void;	// setLeashHolder(ActorUniqueID): void	 /// ?setLeashHolder@Actor@@QEAAXUActorUniqueID@@@Z
    setMoving(_1: boolean): void;	// setMoving(bool): void	 /// ?setMoving@Actor@@QEAAX_N@Z
    setNameTagVisible(_1: boolean): void;	// setNameTagVisible(bool): void	 /// ?setNameTagVisible@Actor@@UEAAX_N@Z
    setOffhandSlot(_1: object): void;	// setOffhandSlot(ItemStack const &): void	 /// ?setOffhandSlot@Actor@@UEAAXAEBVItemStack@@@Z
    setOwner(_1: unknown): void;	// setOwner(ActorUniqueID): void	 /// ?setOwner@Actor@@UEAAXUActorUniqueID@@@Z
    setPersistent(): void;	// setPersistent(void): void	 /// ?setPersistent@Actor@@QEAAXXZ
    setPos(_1: object): void;	// setPos(Vec3 const &): void	 /// ?setPos@Actor@@UEAAXAEBVVec3@@@Z
    setPreviousPosRot(_1: object, _2: object): void;	// setPreviousPosRot(Vec3 const &,Vec2 const &): void	 /// ?setPreviousPosRot@Actor@@QEAAXAEBVVec3@@AEBVVec2@@@Z
    setRegion(_1: object): void;	// setRegion(BlockSource &): void	 /// ?setRegion@Actor@@QEAAXAEAVBlockSource@@@Z
    setResting(_1: boolean): void;	// setResting(bool): void	 /// ?setResting@Actor@@QEAAX_N@Z
    setRot(_1: object): void;	// setRot(Vec2 const &): void	 /// ?setRot@Actor@@UEAAXAEBVVec2@@@Z
    setSitting(_1: boolean): void;	// setSitting(bool): void	 /// ?setSitting@Actor@@UEAAX_N@Z
    setSize(_1: number, _2: number): void;	// setSize(float,float): void	 /// ?setSize@Actor@@UEAAXMM@Z
    setSneaking(_1: boolean): void;	// setSneaking(bool): void	 /// ?setSneaking@Actor@@UEAAX_N@Z
    setStanding(_1: boolean): void;	// setStanding(bool): void	 /// ?setStanding@Actor@@UEAAX_N@Z
    setStatusFlag(_1: unknown, _2: boolean): void;	// setStatusFlag(ActorFlags,bool): void	 /// ?setStatusFlag@Actor@@QEAAXW4ActorFlags@@_N@Z
    setStrength(_1: number): void;	// setStrength(int): void	 /// ?setStrength@Actor@@QEAAXH@Z
    setTarget(_1: object): void;	// setTarget(Actor *): void	 /// ?setTarget@Actor@@UEAAXPEAV1@@Z
    setVariant(_1: number): void;	// setVariant(int): void	 /// ?setVariant@Actor@@QEAAXH@Z
    shouldDropDeathLoot(): boolean;	// shouldDropDeathLoot(void): bool	 /// ?shouldDropDeathLoot@Actor@@UEBA_NXZ
    shouldRender(): boolean;	// shouldRender(void): bool	 /// ?shouldRender@Actor@@UEBA_NXZ
    shouldTick(): boolean;	// shouldTick(void): bool	 /// ?shouldTick@Actor@@UEBA_NXZ
    shouldTryMakeStepSound(): boolean;	// shouldTryMakeStepSound(void): bool	 /// ?shouldTryMakeStepSound@Actor@@MEAA_NXZ
    spawnAtLocation(_1: object, _2: number): unknown;	// spawnAtLocation(Block const &,int): class ItemActor * __ptr64	 /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@AEBVBlock@@H@Z
    spawnAtLocation(_1: object, _2: number, _3: number): unknown;	// spawnAtLocation(Block const &,int,float): class ItemActor * __ptr64	 /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@AEBVBlock@@HM@Z
    spawnAtLocation(_1: object, _2: number): unknown;	// spawnAtLocation(ItemStack const &,float): class ItemActor * __ptr64	 /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@AEBVItemStack@@M@Z
    spawnAtLocation(_1: number, _2: number): unknown;	// spawnAtLocation(int,int): class ItemActor * __ptr64	 /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@HH@Z
    spawnAtLocation(_1: number, _2: number, _3: number): unknown;	// spawnAtLocation(int,int,float): class ItemActor * __ptr64	 /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@HHM@Z
    spawnBalloonPopParticles(): void;	// spawnBalloonPopParticles(void): void	 /// ?spawnBalloonPopParticles@Actor@@QEAAXXZ
    spawnDustParticles(_1: number): void;	// spawnDustParticles(int): void	 /// ?spawnDustParticles@Actor@@QEAAXH@Z
    spawnTamingParticles(_1: boolean): void;	// spawnTamingParticles(bool): void	 /// ?spawnTamingParticles@Actor@@QEAAX_N@Z
    spawnTrailBubbles(): void;	// spawnTrailBubbles(void): void	 /// ?spawnTrailBubbles@Actor@@MEAAXXZ
    startRiding(_1: object): boolean;	// startRiding(Actor &): bool	 /// ?startRiding@Actor@@UEAA_NAEAV1@@Z
    startSpinAttack(): void;	// startSpinAttack(void): void	 /// ?startSpinAttack@Actor@@UEAAXXZ
    startSwimming(): void;	// startSwimming(void): void	 /// ?startSwimming@Actor@@UEAAXXZ
    stopRiding(_1: boolean, _2: boolean, _3: boolean): void;	// stopRiding(bool,bool,bool): void	 /// ?stopRiding@Actor@@UEAAX_N00@Z
    stopSwimming(): void;	// stopSwimming(void): void	 /// ?stopSwimming@Actor@@UEAAXXZ
    teleportPassengersTo(_1: object, _2: number, _3: number): void;	// teleportPassengersTo(Vec3 const &,int,int): void	 /// ?teleportPassengersTo@Actor@@QEAAXAEBVVec3@@HH@Z
    teleportTo(_1: object, _2: boolean, _3: number, _4: number): void;	// teleportTo(Vec3 const &,bool,int,int): void	 /// ?teleportTo@Actor@@UEAAXAEBVVec3@@_NHH@Z
    thawFreezeEffect(): void;	// thawFreezeEffect(void): void	 /// ?thawFreezeEffect@Actor@@UEAAXXZ
    tick(_1: object): boolean;	// tick(BlockSource &): bool	 /// ?tick@Actor@@QEAA_NAEAVBlockSource@@@Z
    tickLeash(): void;	// tickLeash(void): void	 /// ?tickLeash@Actor@@UEAAXXZ
    transferTickingArea(_1: object): void;	// transferTickingArea(Dimension &): void	 /// ?transferTickingArea@Actor@@QEAAXAEAVDimension@@@Z
    tryCreateAddActorPacket(): bigint;	// tryCreateAddActorPacket(void): class std::unique_ptr<class AddActorBasePacket,struct std::default_delete<class AddActorBasePacket> >	 /// ?tryCreateAddActorPacket@Actor@@UEAA?AV?$unique_ptr@VAddActorBasePacket@@U?$default_delete@VAddActorBasePacket@@@std@@@std@@XZ
    tryGetFromEntity(): bigint;	 /// Actor::tryGetFromEntity
    tryGetFromEntity(_1: object, _2: boolean): Actor;	// tryGetFromEntity(EntityContext &,bool): class Actor * __ptr64	 /// ?tryGetFromEntity@Actor@@SAPEAV1@AEAVEntityContext@@_N@Z
    tryMoveChunks(): boolean;	// tryMoveChunks(void): bool	 /// ?tryMoveChunks@Actor@@QEAA_NXZ
    tryTeleportTo(_1: object, _2: boolean, _3: boolean, _4: number, _5: number): boolean;	// tryTeleportTo(Vec3 const &,bool,bool,int,int): bool	 /// ?tryTeleportTo@Actor@@UEAA_NAEBVVec3@@_N1HH@Z
    updateDescription(): void;	// updateDescription(void): void	 /// ?updateDescription@Actor@@QEAAXXZ
    updateEntityInside(_1: object): void;	// updateEntityInside(AABB const &): void	 /// ?updateEntityInside@Actor@@UEAAXAEBVAABB@@@Z
    updateEntityInside(): void;	// updateEntityInside(void): void	 /// ?updateEntityInside@Actor@@UEAAXXZ
    updateInsideBlock(): void;	// updateInsideBlock(void): void	 /// ?updateInsideBlock@Actor@@MEAAXXZ
    updateWaterState(): boolean;	// updateWaterState(void): bool	 /// ?updateWaterState@Actor@@MEAA_NXZ
    useItem(_1: object, _2: unknown, _3: boolean): void;	// useItem(ItemStackBase &,ItemUseMethod,bool): void	 /// ?useItem@Actor@@UEAAXAEAVItemStackBase@@W4ItemUseMethod@@_N@Z
    useSaddle(_1: object, _2: object): boolean;	// useSaddle(ItemStackBase &,Player *): bool	 /// ?useSaddle@Actor@@QEAA_NAEAVItemStackBase@@PEAVPlayer@@@Z
    vehicleTick(): void;	// vehicleTick(void): void	 /// ?vehicleTick@Actor@@UEAAXXZ
    wasHurt(): boolean;	// wasHurt(void): bool	 /// ?wasHurt@Actor@@UEAA_NXZ
    wasLastHitByPlayer(): boolean;	// wasLastHitByPlayer(void): bool	 /// ?wasLastHitByPlayer@Actor@@QEAA_NXZ
    wobble(): void;	// wobble(void): void	 /// ?wobble@Actor@@UEAAXXZ
}
declare class BlockSource {
    // Attributes 
    // Methods 
    // Inherited from BlockSource
    BlockSource(_1: object, _2: object, _3: object, _4: boolean, _5: boolean): BlockSource;	// BlockSource(Level &,Dimension &,ChunkSource &,bool,bool)	 /// ??0BlockSource@@QEAA@AEAVLevel@@AEAVDimension@@AEAVChunkSource@@_N3@Z
    _blockChanged(_1: object, _2: bigint, _3: object, _4: object, _5: number, _6: object, _7: object): void;	// _blockChanged(BlockPos const &,uint,Block const &,Block const &,int,ActorBlockSyncMessage const *,Actor *): void	 /// ?_blockChanged@BlockSource@@IEAAXAEBVBlockPos@@IAEBVBlock@@1HPEBUActorBlockSyncMessage@@PEAVActor@@@Z
    _getBlockPermissions(_1: object, _2: boolean): boolean;	// _getBlockPermissions(BlockPos const &,bool): bool	 /// ?_getBlockPermissions@BlockSource@@AEAA_NAEBVBlockPos@@_N@Z
    _getLiquidHeight(_1: object, _2: unknown, _3: boolean): number;	// _getLiquidHeight(BlockPos const &,MaterialType,bool): float	 /// ?_getLiquidHeight@BlockSource@@AEAAMAEBVBlockPos@@W4MaterialType@@_N@Z
    _getRawBrightness(_1: object, _2: unknown, _3: boolean, _4: boolean): bigint;	// _getRawBrightness(BlockPos const &,Brightness,bool,bool): struct Brightness	 /// ?_getRawBrightness@BlockSource@@AEBA?AUBrightness@@AEBVBlockPos@@U2@_N2@Z
    _hasChunksAt(_1: object): boolean;	// _hasChunksAt(Bounds const &): bool	 /// ?_hasChunksAt@BlockSource@@IEBA_NAEBUBounds@@@Z
    addListener(_1: object): void;	// addListener(BlockSourceListener &): void	 /// ?addListener@BlockSource@@UEAAXAEAVBlockSourceListener@@@Z
    addToRandomTickingQueue(_1: object, _2: object, _3: number, _4: number, _5: boolean): void;	// addToRandomTickingQueue(BlockPos const &,Block const &,int,int,bool): void	 /// ?addToRandomTickingQueue@BlockSource@@QEAAXAEBVBlockPos@@AEBVBlock@@HH_N@Z
    addToTickingQueue(_1: object, _2: object, _3: number, _4: number, _5: boolean): void;	// addToTickingQueue(BlockPos const &,Block const &,int,int,bool): void	 /// ?addToTickingQueue@BlockSource@@QEAAXAEBVBlockPos@@AEBVBlock@@HH_N@Z
    addVoidFloor(_1: object): void;	// addVoidFloor(AABB const &): void	 /// ?addVoidFloor@BlockSource@@IEAAXAEBVAABB@@@Z
    areAllChunksLoaded(_1: object, _2: object): boolean;	// areAllChunksLoaded(BlockPos const &,BlockVolume &): bool	 /// ?areAllChunksLoaded@BlockSource@@QEBA_NAEBVBlockPos@@AEAVBlockVolume@@@Z
    areChunksFullyLoaded(_1: object, _2: object): boolean;	// areChunksFullyLoaded(BlockPos const &,BlockPos const &): bool	 /// ?areChunksFullyLoaded@BlockSource@@QEBA_NAEBVBlockPos@@0@Z
    areChunksFullyLoaded(_1: object, _2: number): boolean;	// areChunksFullyLoaded(BlockPos const &,int): bool	 /// ?areChunksFullyLoaded@BlockSource@@QEBA_NAEBVBlockPos@@H@Z
    blockEvent(_1: object, _2: number, _3: number): void;	// blockEvent(BlockPos const &,int,int): void	 /// ?blockEvent@BlockSource@@QEAAXAEBVBlockPos@@HH@Z
    canProvideSupport(_1: object, _2: number, _3: unknown): boolean;	// canProvideSupport(BlockPos const &,uchar,BlockSupportType): bool	 /// ?canProvideSupport@BlockSource@@QEBA_NAEBVBlockPos@@EW4BlockSupportType@@@Z
    canSeeSky(_1: object): boolean;	// canSeeSky(BlockPos const &): bool	 /// ?canSeeSky@BlockSource@@QEBA_NAEBVBlockPos@@@Z
    checkBlockPermissions(_1: object, _2: object, _3: number, _4: object, _5: boolean): boolean;	// checkBlockPermissions(Actor &,BlockPos const &,uchar,ItemStackBase const &,bool): bool	 /// ?checkBlockPermissions@BlockSource@@QEAA_NAEAVActor@@AEBVBlockPos@@EAEBVItemStackBase@@_N@Z
    containsAnyBlockOfType(_1: object, _2: object, _3: object): boolean;	// containsAnyBlockOfType(BlockPos const &,BlockPos const &,Block const &): bool	 /// ?containsAnyBlockOfType@BlockSource@@QEBA_NAEBVBlockPos@@0AEBVBlock@@@Z
    containsAnyLiquid(_1: object): boolean;	// containsAnyLiquid(AABB const &): bool	 /// ?containsAnyLiquid@BlockSource@@UEAA_NAEBVAABB@@@Z
    containsAnySolidBlocking(_1: object): boolean;	// containsAnySolidBlocking(AABB const &): bool	 /// ?containsAnySolidBlocking@BlockSource@@QEBA_NAEBVAABB@@@Z
    containsMaterial(_1: object, _2: unknown): boolean;	// containsMaterial(AABB const &,MaterialType): bool	 /// ?containsMaterial@BlockSource@@UEBA_NAEBVAABB@@W4MaterialType@@@Z
    fetchAABBs(_1: object, _2: boolean): unknown;	// fetchAABBs(AABB const &,bool): class std::vector<class AABB,class std::allocator<class AABB> > & __ptr64	 /// ?fetchAABBs@BlockSource@@UEAAAEAV?$vector@VAABB@@V?$allocator@VAABB@@@std@@@std@@AEBVAABB@@_N@Z
    fetchActors(_1: object, _2: object): bigint;	// fetchActors(ActorDefinitionIdentifier const &,AABB const &): class gsl::span<class gsl::not_null<class Actor * __ptr64>,-1>	 /// ?fetchActors@BlockSource@@QEAA?AV?$span@V?$not_null@PEAVActor@@@gsl@@$0?0@gsl@@AEBUActorDefinitionIdentifier@@AEBVAABB@@@Z
    fetchCollisionShapes(_1: object, _2: object, _3: boolean, _4: object): unknown;	// fetchCollisionShapes(AABB const &,float *,bool,IActorMovementProxy *): class std::vector<class AABB,class std::allocator<class AABB> > & __ptr64	 /// ?fetchCollisionShapes@BlockSource@@UEAAAEAV?$vector@VAABB@@V?$allocator@VAABB@@@std@@@std@@AEBVAABB@@PEAM_NPEAUIActorMovementProxy@@@Z
    fetchEntities(_1: object, _2: object, _3: boolean): bigint;	// fetchEntities(Actor const *,AABB const &,bool): class gsl::span<class gsl::not_null<class Actor * __ptr64>,-1>	 /// ?fetchEntities@BlockSource@@UEAA?AV?$span@V?$not_null@PEAVActor@@@gsl@@$0?0@gsl@@PEBVActor@@AEBVAABB@@_N@Z
    fetchEntities(_1: unknown, _2: object, _3: object): bigint;	// fetchEntities(ActorType,AABB const &,Actor const *): class gsl::span<class gsl::not_null<class Actor * __ptr64>,-1>	 /// ?fetchEntities@BlockSource@@UEAA?AV?$span@V?$not_null@PEAVActor@@@gsl@@$0?0@gsl@@W4ActorType@@AEBVAABB@@PEBVActor@@@Z
    fetchEntities2(_1: unknown, _2: object, _3: boolean): unknown;	// fetchEntities2(ActorType,AABB const &,bool): class std::vector<class Actor * __ptr64,class std::allocator<class Actor * __ptr64> > const & __ptr64	 /// ?fetchEntities2@BlockSource@@QEAAAEBV?$vector@PEAVActor@@V?$allocator@PEAVActor@@@std@@@std@@W4ActorType@@AEBVAABB@@_N@Z
    findNextTopSolidBlockUnder(_1: object): boolean;	// findNextTopSolidBlockUnder(BlockPos &): bool	 /// ?findNextTopSolidBlockUnder@BlockSource@@QEAA_NAEAVBlockPos@@@Z
    fireAreaChanged(_1: object, _2: object): void;	// fireAreaChanged(BlockPos const &,BlockPos const &): void	 /// ?fireAreaChanged@BlockSource@@QEAAXAEBVBlockPos@@0@Z
    fireBlockChanged(_1: object, _2: bigint, _3: object, _4: object, _5: number, _6: unknown, _7: object, _8: object): void;	// fireBlockChanged(BlockPos const &,uint,Block const &,Block const &,int,BlockChangedEventTarget,ActorBlockSyncMessage const *,Actor *): void	 /// ?fireBlockChanged@BlockSource@@QEAAXAEBVBlockPos@@IAEBVBlock@@1HW4BlockChangedEventTarget@@PEBUActorBlockSyncMessage@@PEAVActor@@@Z
    fireBlockEntityChanged(_1: object): void;	// fireBlockEntityChanged(BlockActor &): void	 /// ?fireBlockEntityChanged@BlockSource@@QEAAXAEAVBlockActor@@@Z
    fireBrightnessChanged(_1: object): void;	// fireBrightnessChanged(BlockPos const &): void	 /// ?fireBrightnessChanged@BlockSource@@QEAAXAEBVBlockPos@@@Z
    fireEntityChanged(_1: object): void;	// fireEntityChanged(Actor &): void	 /// ?fireEntityChanged@BlockSource@@QEAAXAEAVActor@@@Z
    getAboveTopSolidBlock(_1: object, _2: boolean, _3: boolean): number;	// getAboveTopSolidBlock(BlockPos const &,bool,bool): short	 /// ?getAboveTopSolidBlock@BlockSource@@QEAAFAEBVBlockPos@@_N1@Z
    getAboveTopSolidBlock(_1: number, _2: number, _3: boolean, _4: boolean): number;	// getAboveTopSolidBlock(int,int,bool,bool): short	 /// ?getAboveTopSolidBlock@BlockSource@@QEAAFHH_N0@Z
    getBiome(_1: object): unknown;	// getBiome(BlockPos const &): class Biome & __ptr64	 /// ?getBiome@BlockSource@@QEAAAEAVBiome@@AEBVBlockPos@@@Z
    getBlock(_1: object): unknown;	// getBlock(BlockPos const &): class Block const & __ptr64	 /// ?getBlock@BlockSource@@UEBAAEBVBlock@@AEBVBlockPos@@@Z
    getBlock(_1: object, _2: bigint): unknown;	// getBlock(BlockPos const &,uint): class Block const & __ptr64	 /// ?getBlock@BlockSource@@UEBAAEBVBlock@@AEBVBlockPos@@I@Z
    getBlock(_1: number, _2: number, _3: number): unknown;	// getBlock(int,int,int): class Block const & __ptr64	 /// ?getBlock@BlockSource@@UEBAAEBVBlock@@HHH@Z
    getBlockEntity(_1: object): unknown;	// getBlockEntity(BlockPos const &): class BlockActor * __ptr64	 /// ?getBlockEntity@BlockSource@@QEAAPEAVBlockActor@@AEBVBlockPos@@@Z
    getBlockEntity(_1: number, _2: number, _3: number): unknown;	// getBlockEntity(int,int,int): class BlockActor * __ptr64	 /// ?getBlockEntity@BlockSource@@QEAAPEAVBlockActor@@HHH@Z
    getBrightness(_1: object): number;	// getBrightness(BlockPos const &): float	 /// ?getBrightness@BlockSource@@QEBAMAEBVBlockPos@@@Z
    getBrightnessPair(_1: object): bigint;	// getBrightnessPair(BlockPos const &): struct BrightnessPair	 /// ?getBrightnessPair@BlockSource@@QEBA?AUBrightnessPair@@AEBVBlockPos@@@Z
    getChunk(_1: object): unknown;	// getChunk(ChunkPos const &): class LevelChunk * __ptr64	 /// ?getChunk@BlockSource@@QEBAPEAVLevelChunk@@AEBVChunkPos@@@Z
    getChunkAt(_1: object): unknown;	// getChunkAt(BlockPos const &): class LevelChunk * __ptr64	 /// ?getChunkAt@BlockSource@@QEBAPEAVLevelChunk@@AEBVBlockPos@@@Z
    getDimensionId(): bigint;	// getDimensionId(void): class AutomaticID<class Dimension,int>	 /// ?getDimensionId@BlockSource@@UEBA?AV?$AutomaticID@VDimension@@H@@XZ
    getExtraBlock(_1: object): unknown;	// getExtraBlock(BlockPos const &): class Block const & __ptr64	 /// ?getExtraBlock@BlockSource@@UEBAAEBVBlock@@AEBVBlockPos@@@Z
    getHeightmap(_1: object): number;	// getHeightmap(BlockPos const &): short	 /// ?getHeightmap@BlockSource@@QEBAFAEBVBlockPos@@@Z
    getHeightmap(_1: number, _2: number): number;	// getHeightmap(int,int): short	 /// ?getHeightmap@BlockSource@@QEAAFHH@Z
    getLiquidBlock(_1: object): unknown;	// getLiquidBlock(BlockPos const &): class Block const & __ptr64	 /// ?getLiquidBlock@BlockSource@@UEBAAEBVBlock@@AEBVBlockPos@@@Z
    getMaterial(_1: object): unknown;	// getMaterial(BlockPos const &): class Material const & __ptr64	 /// ?getMaterial@BlockSource@@UEBAAEBVMaterial@@AEBVBlockPos@@@Z
    getMaterial(_1: number, _2: number, _3: number): unknown;	// getMaterial(int,int,int): class Material const & __ptr64	 /// ?getMaterial@BlockSource@@UEBAAEBVMaterial@@HHH@Z
    getMinHeight(): number;	// getMinHeight(void): short	 /// ?getMinHeight@BlockSource@@UEBAFXZ
    getRawBrightness(_1: object, _2: boolean, _3: boolean): bigint;	// getRawBrightness(BlockPos const &,bool,bool): struct Brightness	 /// ?getRawBrightness@BlockSource@@QEBA?AUBrightness@@AEBVBlockPos@@_N1@Z
    getSeenPercent(_1: object, _2: object): number;	// getSeenPercent(Vec3 const &,AABB const &): float	 /// ?getSeenPercent@BlockSource@@QEAAMAEBVVec3@@AEBVAABB@@@Z
    getTallestCollisionShape(_1: object, _2: object, _3: boolean, _4: object): bigint;	// getTallestCollisionShape(AABB const &,float *,bool,IActorMovementProxy *): class AABB	 /// ?getTallestCollisionShape@BlockSource@@UEAA?AVAABB@@AEBV2@PEAM_NPEAUIActorMovementProxy@@@Z
    getTickingQueue(_1: object, _2: unknown, _3: boolean): unknown;	// getTickingQueue(BlockPos const &,TickingQueueType,bool): class BlockTickingQueue * __ptr64	 /// ?getTickingQueue@BlockSource@@QEBAPEAVBlockTickingQueue@@AEBVBlockPos@@W4TickingQueueType@@_N@Z
    getVisualLiquidHeight(_1: object): number;	// getVisualLiquidHeight(Vec3 const &): float	 /// ?getVisualLiquidHeight@BlockSource@@QEAAMAEBVVec3@@@Z
    getWeakRef(): bigint;	// getWeakRef(void): class WeakRefT<struct SharePtrRefTraits<class BlockSource> >	 /// ?getWeakRef@BlockSource@@UEAA?AV?$WeakRefT@U?$SharePtrRefTraits@VBlockSource@@@@@@XZ
    hasBlock(_1: object): boolean;	// hasBlock(BlockPos const &): bool	 /// ?hasBlock@BlockSource@@UEBA_NAEBVBlockPos@@@Z
    hasChunksAt(_1: object): boolean;	// hasChunksAt(AABB const &): bool	 /// ?hasChunksAt@BlockSource@@UEBA_NAEBVAABB@@@Z
    hasChunksAt(_1: object, _2: object): boolean;	// hasChunksAt(BlockPos const &,BlockPos const &): bool	 /// ?hasChunksAt@BlockSource@@QEBA_NAEBVBlockPos@@0@Z
    hasChunksAt(_1: object, _2: number): boolean;	// hasChunksAt(BlockPos const &,int): bool	 /// ?hasChunksAt@BlockSource@@UEBA_NAEBVBlockPos@@H@Z
    hasChunksAt(_1: object): boolean;	// hasChunksAt(Bounds const &): bool	 /// ?hasChunksAt@BlockSource@@UEBA_NAEBUBounds@@@Z
    hasTickInPendingTicks(_1: object, _2: object): boolean;	// hasTickInPendingTicks(BlockPos const &,BlockLegacy const &): bool	 /// ?hasTickInPendingTicks@BlockSource@@QEBA_NAEBVBlockPos@@AEBVBlockLegacy@@@Z
    isEmptyBlock(_1: object): boolean;	// isEmptyBlock(BlockPos const &): bool	 /// ?isEmptyBlock@BlockSource@@QEBA_NAEBVBlockPos@@@Z
    isEmptyBlock(_1: number, _2: number, _3: number): boolean;	// isEmptyBlock(int,int,int): bool	 /// ?isEmptyBlock@BlockSource@@QEAA_NHHH@Z
    isEmptyWaterBlock(_1: object): boolean;	// isEmptyWaterBlock(BlockPos const &): bool	 /// ?isEmptyWaterBlock@BlockSource@@QEBA_NAEBVBlockPos@@@Z
    isInWall(_1: object): boolean;	// isInWall(Vec3 const &): bool	 /// ?isInWall@BlockSource@@QEAA_NAEBVVec3@@@Z
    isInstaticking(_1: object): boolean;	// isInstaticking(BlockPos const &): bool	 /// ?isInstaticking@BlockSource@@QEBA_NAEBVBlockPos@@@Z
    isNearUnloadedChunks(_1: object): boolean;	// isNearUnloadedChunks(ChunkPos const &): bool	 /// ?isNearUnloadedChunks@BlockSource@@QEAA_NAEBVChunkPos@@@Z
    isPositionUnderLiquid(_1: object, _2: unknown): boolean;	// isPositionUnderLiquid(Vec3 const &,MaterialType): bool	 /// ?isPositionUnderLiquid@BlockSource@@QEAA_NAEBVVec3@@W4MaterialType@@@Z
    isSolidBlockingBlock(_1: object): boolean;	// isSolidBlockingBlock(BlockPos const &): bool	 /// ?isSolidBlockingBlock@BlockSource@@UEBA_NAEBVBlockPos@@@Z
    isUnderWater(_1: object, _2: object): boolean;	// isUnderWater(Vec3 const &,Block const &): bool	 /// ?isUnderWater@BlockSource@@QEBA_NAEBVVec3@@AEBVBlock@@@Z
    mayPlace(_1: object, _2: object, _3: number, _4: object, _5: boolean): boolean;	// mayPlace(Block const &,BlockPos const &,uchar,Actor *,bool): bool	 /// ?mayPlace@BlockSource@@QEAA_NAEBVBlock@@AEBVBlockPos@@EPEAVActor@@_N@Z
    neighborChanged(_1: object, _2: object): void;	// neighborChanged(BlockPos const &,BlockPos const &): void	 /// ?neighborChanged@BlockSource@@QEAAXAEBVBlockPos@@0@Z
    postGameEvent(_1: object, _2: object, _3: object, _4: object): void;	// postGameEvent(Actor *,GameEvent const &,Vec3 const &,BlockSource &): void	 /// ?postGameEvent@BlockSource@@QEBAXPEAVActor@@AEBVGameEvent@@AEBVVec3@@AEAV1@@Z
    removeBlock(_1: object): boolean;	// removeBlock(BlockPos const &): bool	 /// ?removeBlock@BlockSource@@QEAA_NAEBVBlockPos@@@Z
    removeBlockEntity(_1: object): bigint;	// removeBlockEntity(BlockPos const &): class std::shared_ptr<class BlockActor>	 /// ?removeBlockEntity@BlockSource@@QEAA?AV?$shared_ptr@VBlockActor@@@std@@AEBVBlockPos@@@Z
    removeFromTickingQueue(_1: object, _2: object): void;	// removeFromTickingQueue(BlockPos const &,Block const &): void	 /// ?removeFromTickingQueue@BlockSource@@QEAAXAEBVBlockPos@@AEBVBlock@@@Z
    removeListener(_1: object): void;	// removeListener(BlockSourceListener &): void	 /// ?removeListener@BlockSource@@UEAAXAEAVBlockSourceListener@@@Z
    setBlock(_1: object, _2: object, _3: number, _4: object, _5: object): boolean;	// setBlock(BlockPos const &,Block const &,int,ActorBlockSyncMessage const *,Actor *): bool	 /// ?setBlock@BlockSource@@UEAA_NAEBVBlockPos@@AEBVBlock@@HPEBUActorBlockSyncMessage@@PEAVActor@@@Z
    setBlock(_1: number, _2: number, _3: number, _4: object, _5: number, _6: object): boolean;	// setBlock(int,int,int,Block const &,int,Actor *): bool	 /// ?setBlock@BlockSource@@QEAA_NHHHAEBVBlock@@HPEAVActor@@@Z
    setBorderBlock(_1: object, _2: boolean): void;	// setBorderBlock(BlockPos const &,bool): void	 /// ?setBorderBlock@BlockSource@@QEAAXAEBVBlockPos@@_N@Z
    setExtraBlock(_1: object, _2: object, _3: number): boolean;	// setExtraBlock(BlockPos const &,Block const &,int): bool	 /// ?setExtraBlock@BlockSource@@QEAA_NAEBVBlockPos@@AEBVBlock@@H@Z
    tryGetBiome(_1: object): unknown;	// tryGetBiome(BlockPos const &): class Biome * __ptr64	 /// ?tryGetBiome@BlockSource@@QEBAPEAVBiome@@AEBVBlockPos@@@Z
    updateNeighborsAt(_1: object): void;	// updateNeighborsAt(BlockPos const &): void	 /// ?updateNeighborsAt@BlockSource@@QEAAXAEBVBlockPos@@@Z
}
declare class BaseAttributeMap {
    // Attributes 
    // Methods 
    // Inherited from BaseAttributeMap
    begin(): bigint;	// begin(void): class std::_List_iterator<class std::_List_val<struct std::_List_simple_types<struct std::pair<unsigned int const,class AttributeInstance> > > >	 /// ?begin@BaseAttributeMap@@QEAA?AV?$_List_iterator@V?$_List_val@U?$_List_simple_types@U?$pair@$$CBIVAttributeInstance@@@std@@@std@@@std@@@std@@XZ
    clearDirtyAttributes(): void;	// clearDirtyAttributes(void): void	 /// ?clearDirtyAttributes@BaseAttributeMap@@QEAAXXZ
    end(): bigint;	// end(void): class std::_List_iterator<class std::_List_val<struct std::_List_simple_types<struct std::pair<unsigned int const,class AttributeInstance> > > >	 /// ?end@BaseAttributeMap@@QEAA?AV?$_List_iterator@V?$_List_val@U?$_List_simple_types@U?$pair@$$CBIVAttributeInstance@@@std@@@std@@@std@@@std@@XZ
    getInstance(_1: bigint): unknown;	// getInstance(uint): class AttributeInstance const & __ptr64	 /// ?getInstance@BaseAttributeMap@@QEBAAEBVAttributeInstance@@I@Z
    updateAttribute(_1: object, _2: number, _3: number, _4: number, _5: number): void;	// updateAttribute(HashedString const &,float,float,float,float): void	 /// ?updateAttribute@BaseAttributeMap@@QEAAXAEBVHashedString@@MMMM@Z
}
declare class BoolAbility {
    // Attributes 
    state: number;
    data: number;
    permissions: number;
    // Methods 
    // Inherited from BoolAbility
}
declare class ChatScreenController {
    // Attributes 
    message: SDKText;
    intellisenseIndex: number;
    isDevConsole: number;
    // Methods 
    // Inherited from ChatScreenController
    ChatScreenController(): ChatScreenController;	// ChatScreenController	 /// ChatScreenController::ChatScreenController
    sendChatMessage(): bigint;	 /// ChatScreenController::sendChatMessage
    // Inherited from ClientInstanceScreenController
    // Inherited from MinecraftScreenController
    // Inherited from ScreenController
}
declare class ClientInstance {
    // Attributes 
    minecraftGame: MinecraftGame;
    vtable: object;
    mousePos: Vec2;
    minecraft: Minecraft;
    levelRenderer: LevelRenderer;
    loopbackPacketSender: object;
    viewProjectionMatrix: Mat4x4;
    itemInHandRenderer: object;
    fovY: number;
    fovX: number;
    // Methods 
    // Inherited from ClientInstance
    getClientSubId(): bigint;	 /// ClientInstance::getClientSubId
    getDevConsoleMessageHistory(): bigint;	 /// ClientInstance::getDevConsoleMessageHistory
    getLevel(): bigint;	 /// ClientInstance::getLevel
    getLocalPlayer(): bigint;	 /// ClientInstance::getLocalPlayer
    getMouseGrabbed(): bigint;	 /// ClientInstance::getMouseGrabbed
    getSentMessageHistory(): bigint;	 /// ClientInstance::getSentMessageHistory
    grabMouse(): bigint;	 /// ClientInstance::grabMouse
    isDestroyingGame(): bigint;	 /// ClientInstance::isDestroyingGame
    isInBedScreen(): bigint;	 /// ClientInstance::isInBedScreen
    isInMultiplayerGame(): bigint;	 /// ClientInstance::isInMultiplayerGame
    isLeavingGame(): bigint;	 /// ClientInstance::isLeavingGame
    isShowingDeathScreen(): bigint;	 /// ClientInstance::isShowingDeathScreen
    isShowingProgressScreen(): bigint;	 /// ClientInstance::isShowingProgressScreen
    isShowingWorldProgressScreen(): bigint;	 /// ClientInstance::isShowingWorldProgressScreen
    isShuttingDown(): bigint;	 /// ClientInstance::isShuttingDown
    isVRTransitioning(): bigint;	 /// ClientInstance::isVRTransitioning
    navigateToServersScreen(): bigint;	 /// ClientInstance::navigateToServersScreen
    navigateToStoreHomeScreen(): bigint;	 /// ClientInstance::navigateToStoreHomeScreen
    releaseMouse(): bigint;	 /// ClientInstance::releaseMouse
    setDisableInput(): bigint;	 /// ClientInstance::setDisableInput
    setRealityModeFrameFactor(): bigint;	 /// ClientInstance::setRealityModeFrameFactor
    setSuspendInput(): bigint;	 /// ClientInstance::setSuspendInput
    tryPushLeaveGameScreen(): bigint;	 /// ClientInstance::tryPushLeaveGameScreen
}
declare class ClientInstanceScreenController {
    // Attributes 
    // Methods 
    // Inherited from ClientInstanceScreenController
    ClientInstanceScreenController(): ClientInstanceScreenController;	// ClientInstanceScreenController	 /// ClientInstanceScreenController::ClientInstanceScreenController
    // Inherited from MinecraftScreenController
    // Inherited from ScreenController
}
declare class ItemPtr {
    // Attributes 
    item: Item;
    // Methods 
    // Inherited from ItemPtr
}
declare class MinecraftGame {
    // Attributes 
    fontRepository: FontRepository;
    // Methods 
    // Inherited from MinecraftGame
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
    clearInputState(): void;	// clearInputState(void): void	 /// ?clearInputState@MoveInputHandler@@UEAAXXZ
    extractInputComponent(): bigint;	// extractInputComponent(void): struct MoveInputComponent	 /// ?extractInputComponent@MoveInputHandler@@UEBA?AUMoveInputComponent@@XZ
    fillInputPacket(_1: object): void;	// fillInputPacket(PlayerAuthInputPacket &): void	 /// ?fillInputPacket@MoveInputHandler@@UEAAXAEAVPlayerAuthInputPacket@@@Z
    getGazeDirection(): unknown;	// getGazeDirection(void): class Vec3 const & __ptr64	 /// ?getGazeDirection@MoveInputHandler@@UEBAAEBVVec3@@XZ
    isPlayerMoving(): boolean;	// isPlayerMoving(void): bool	 /// ?isPlayerMoving@MoveInputHandler@@UEBA_NXZ
    tick(_1: object): void;	// tick(IPlayerMovementProxy &): void	 /// ?tick@MoveInputHandler@@UEAAXAEAUIPlayerMovementProxy@@@Z
}
declare class SpinLock {
    // Attributes 
    // Methods 
    // Inherited from SpinLock
    SpinLock(): SpinLock;	// SpinLock(void)	 /// ??0SpinLock@@QEAA@XZ
    lock(): void;	// lock(void): void	 /// ?lock@SpinLock@@QEAAXXZ
    unlock(): void;	// unlock(void): void	 /// ?unlock@SpinLock@@QEAAXXZ
}
declare class CompoundTag {
    // Attributes 
    // Methods 
    // Inherited from CompoundTag
    CompoundTag(_1: object): CompoundTag;	// CompoundTag(CompoundTag &&)	 /// ??0CompoundTag@@QEAA@$$QEAV0@@Z
    CompoundTag(): CompoundTag;	// CompoundTag(void)	 /// ??0CompoundTag@@QEAA@XZ
    append(_1: object): void;	// append(CompoundTag const &): void	 /// ?append@CompoundTag@@QEAAXAEBV1@@Z
    clear(): void;	// clear(void): void	 /// ?clear@CompoundTag@@QEAAXXZ
    clone(): bigint;	// clone(void): class std::unique_ptr<class CompoundTag,struct std::default_delete<class CompoundTag> >	 /// ?clone@CompoundTag@@QEBA?AV?$unique_ptr@VCompoundTag@@U?$default_delete@VCompoundTag@@@std@@@std@@XZ
    copy(): bigint;	// copy(void): class std::unique_ptr<class Tag,struct std::default_delete<class Tag> >	 /// ?copy@CompoundTag@@UEBA?AV?$unique_ptr@VTag@@U?$default_delete@VTag@@@std@@@std@@XZ
    deepCopy(_1: object): void;	// deepCopy(CompoundTag const &): void	 /// ?deepCopy@CompoundTag@@QEAAXAEBV1@@Z
    equals(_1: object): boolean;	// equals(Tag const &): bool	 /// ?equals@CompoundTag@@UEBA_NAEBVTag@@@Z
    getId(): bigint;	// getId(void): enum Tag::Type	 /// ?getId@CompoundTag@@UEBA?AW4Type@Tag@@XZ
    hash(): bigint;	// hash(void): unsigned __int64	 /// ?hash@CompoundTag@@UEBA_KXZ
    load(_1: object): void;	// load(IDataInput &): void	 /// ?load@CompoundTag@@UEAAXAEAVIDataInput@@@Z
    toString(): bigint;	// toString(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> >	 /// ?toString@CompoundTag@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
    write(_1: object): void;	// write(IDataOutput &): void	 /// ?write@CompoundTag@@UEBAXAEAVIDataOutput@@@Z
}
declare class Container {
    // Attributes 
    vtable: object;
    // Methods 
    // Inherited from Container
    Container(_1: unknown): Container;	// Container(ContainerType)	 /// ??0Container@@QEAA@W4ContainerType@@@Z
    addAdditionalSaveData(_1: object): void;	// addAdditionalSaveData(CompoundTag &): void	 /// ?addAdditionalSaveData@Container@@UEAAXAEAVCompoundTag@@@Z
    addContentChangeListener(_1: object): void;	// addContentChangeListener(ContainerContentChangeListener *): void	 /// ?addContentChangeListener@Container@@UEAAXPEAVContainerContentChangeListener@@@Z
    addItem(_1: object): boolean;	// addItem(ItemStack &): bool	 /// ?addItem@Container@@UEAA_NAEAVItemStack@@@Z
    addItemToFirstEmptySlot(_1: object): boolean;	// addItemToFirstEmptySlot(ItemStack const &): bool	 /// ?addItemToFirstEmptySlot@Container@@UEAA_NAEBVItemStack@@@Z
    dropContents(_1: object, _2: object, _3: boolean): void;	// dropContents(BlockSource &,Vec3 const &,bool): void	 /// ?dropContents@Container@@UEAAXAEAVBlockSource@@AEBVVec3@@_N@Z
    findFirstSlotForItem(_1: object): number;	// findFirstSlotForItem(ItemStack const &): int	 /// ?findFirstSlotForItem@Container@@UEBAHAEBVItemStack@@@Z
    getItemCount(_1: object): number;	// getItemCount(ItemStack const &): int	 /// ?getItemCount@Container@@UEBAHAEBVItemStack@@@Z
    getRuntimeId(): unknown;	// getRuntimeId(void): class TypedRuntimeId<struct ContainerRuntimeIdTag,unsigned int,0> const & __ptr64	 /// ?getRuntimeId@Container@@QEBAAEBV?$TypedRuntimeId@UContainerRuntimeIdTag@@I$0A@@@XZ
    getSlotCopies(): bigint;	// getSlotCopies(void): class std::vector<class ItemStack,class std::allocator<class ItemStack> >	 /// ?getSlotCopies@Container@@UEBA?AV?$vector@VItemStack@@V?$allocator@VItemStack@@@std@@@std@@XZ
    getSlots(): unknown;	// getSlots(void): class std::vector<class ItemStack const * __ptr64,class std::allocator<class ItemStack const * __ptr64> > const	 /// ?getSlots@Container@@UEBA?BV?$vector@PEBVItemStack@@V?$allocator@PEBVItemStack@@@std@@@std@@XZ
    hasCustomName(): boolean;	// hasCustomName(void): bool	 /// ?hasCustomName@Container@@UEBA_NXZ
    hasRoomForItem(_1: object): boolean;	// hasRoomForItem(ItemStack const &): bool	 /// ?hasRoomForItem@Container@@UEAA_NAEBVItemStack@@@Z
    initRuntimeId(): void;	// initRuntimeId(void): void	 /// ?initRuntimeId@Container@@QEAAXXZ
    isEmpty(): boolean;	// isEmpty(void): bool	 /// ?isEmpty@Container@@UEBA_NXZ
    readAdditionalSaveData(_1: object): void;	// readAdditionalSaveData(CompoundTag const &): void	 /// ?readAdditionalSaveData@Container@@UEAAXAEBVCompoundTag@@@Z
    removeAllItems(): void;	// removeAllItems(void): void	 /// ?removeAllItems@Container@@UEAAXXZ
    removeContentChangeListener(_1: object): void;	// removeContentChangeListener(ContainerContentChangeListener *): void	 /// ?removeContentChangeListener@Container@@UEAAXPEAVContainerContentChangeListener@@@Z
    removeItem(_1: number, _2: number): void;	// removeItem(int,int): void	 /// ?removeItem@Container@@UEAAXHH@Z
    setContainerChanged(_1: number): void;	// setContainerChanged(int): void	 /// ?setContainerChanged@Container@@UEAAXH@Z
    setContainerMoved(): void;	// setContainerMoved(void): void	 /// ?setContainerMoved@Container@@UEAAXXZ
    triggerTransactionChange(_1: number, _2: object, _3: object): void;	// triggerTransactionChange(int,ItemStack const &,ItemStack const &): void	 /// ?triggerTransactionChange@Container@@QEAAXHAEBVItemStack@@0@Z
}
declare class FontRepository_FontList {
    // Attributes 
    list: object;
    // Methods 
    // Inherited from FontRepository_FontList
}
declare class Item {
    // Attributes 
    itemId: number;
    vtable: object;
    maxStackSize: number;
    tileName: SDKText;
    // Methods 
    // Inherited from Item
    _checkUseOnPermissions(_1: object, _2: object, _3: object, _4: object): boolean;	// _checkUseOnPermissions(Actor &,ItemStackBase &,uchar const &,BlockPos const &): bool	 /// ?_checkUseOnPermissions@Item@@EEBA_NAEAVActor@@AEAVItemStackBase@@AEBEAEBVBlockPos@@@Z
    _helpChangeInventoryItemInPlace(_1: object, _2: object, _3: object, _4: unknown): void;	// _helpChangeInventoryItemInPlace(Actor &,ItemStack &,ItemStack &,ItemAcquisitionMethod): void	 /// ?_helpChangeInventoryItemInPlace@Item@@IEBAXAEAVActor@@AEAVItemStack@@1W4ItemAcquisitionMethod@@@Z
    _useOn(_1: object, _2: object, _3: BlockPos, _4: number, _5: object): boolean;	// _useOn(ItemStack &,Actor &,BlockPos,uchar,Vec3 const &): bool	 /// ?_useOn@Item@@EEBA_NAEAVItemStack@@AEAVActor@@VBlockPos@@EAEBVVec3@@@Z
    addCreativeItem(_1: object): void;	// addCreativeItem(Block const &): void	 /// ?addCreativeItem@Item@@SAXAEBVBlock@@@Z
    addCreativeItem(_1: object): void;	// addCreativeItem(ItemInstance const &): void	 /// ?addCreativeItem@Item@@SAXAEBVItemInstance@@@Z
    addCreativeItem(_1: object): void;	// addCreativeItem(ItemStack const &): void	 /// ?addCreativeItem@Item@@SAXAEBVItemStack@@@Z
    addTag(_1: object): Item;	// addTag(HashedString const &): class Item & __ptr64	 /// ?addTag@Item@@QEAAAEAV1@AEBVHashedString@@@Z
    buildCategoryDescriptionName(): bigint;	// buildCategoryDescriptionName(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> >	 /// ?buildCategoryDescriptionName@Item@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
    buildDescriptionId(_1: object, _2: object): bigint;	// buildDescriptionId(ItemDescriptor const &,CompoundTag const *): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> >	 /// ?buildDescriptionId@Item@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@AEBVItemDescriptor@@PEBVCompoundTag@@@Z
    buildDescriptionName(_1: object): bigint;	// buildDescriptionName(ItemStackBase const &): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> >	 /// ?buildDescriptionName@Item@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@AEBVItemStackBase@@@Z
    buildEffectDescriptionName(_1: object): bigint;	// buildEffectDescriptionName(ItemStackBase const &): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> >	 /// ?buildEffectDescriptionName@Item@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@AEBVItemStackBase@@@Z
    buildIdAux(_1: number, _2: object): number;	// buildIdAux(short,CompoundTag const *): int	 /// ?buildIdAux@Item@@UEBAHFPEBVCompoundTag@@@Z
    buildNetworkTag(): bigint;	// buildNetworkTag(void): class std::unique_ptr<class CompoundTag,struct std::default_delete<class CompoundTag> >	 /// ?buildNetworkTag@Item@@UEBA?AV?$unique_ptr@VCompoundTag@@U?$default_delete@VCompoundTag@@@std@@@std@@XZ
    canBeDepleted(): boolean;	// canBeDepleted(void): bool	 /// ?canBeDepleted@Item@@UEBA_NXZ
    destroySpeedBonus(_1: object): number;	// destroySpeedBonus(ItemStackBase const &): float	 /// ?destroySpeedBonus@Item@@QEBAMAEBVItemStackBase@@@Z
    dispense(_1: object, _2: object, _3: number, _4: object, _5: number): boolean;	// dispense(BlockSource &,Container &,int,Vec3 const &,uchar): bool	 /// ?dispense@Item@@UEBA_NAEAVBlockSource@@AEAVContainer@@HAEBVVec3@@E@Z
    endCreativeGroup(): void;	// endCreativeGroup(void): void	 /// ?endCreativeGroup@Item@@SAXXZ
    endCreativeItemDefinitions(_1: boolean): void;	// endCreativeItemDefinitions(bool): void	 /// ?endCreativeItemDefinitions@Item@@SAX_N@Z
    fixupCommon(_1: object): void;	// fixupCommon(ItemStackBase &): void	 /// ?fixupCommon@Item@@UEBAXAEAVItemStackBase@@@Z
    fixupCommon(_1: object, _2: object): void;	// fixupCommon(ItemStackBase &,Level &): void	 /// ?fixupCommon@Item@@UEBAXAEAVItemStackBase@@AEAVLevel@@@Z
    getActorIdentifier(_1: object): bigint;	// getActorIdentifier(ItemStack const &): struct ActorDefinitionIdentifier	 /// ?getActorIdentifier@Item@@UEBA?AUActorDefinitionIdentifier@@AEBVItemStack@@@Z
    getCamera(): unknown;	// getCamera(void): class ICameraItemComponent * __ptr64	 /// ?getCamera@Item@@UEBAPEAVICameraItemComponent@@XZ
    getCooldownTime(): number;	// getCooldownTime(void): int	 /// ?getCooldownTime@Item@@UEBAHXZ
    getCooldownType(): unknown;	// getCooldownType(void): class HashedString const & __ptr64	 /// ?getCooldownType@Item@@UEBAAEBVHashedString@@XZ
    getDamageChance(_1: number): number;	// getDamageChance(int): int	 /// ?getDamageChance@Item@@UEBAHH@Z
    getDamageValue(_1: object): number;	// getDamageValue(CompoundTag const *): short	 /// ?getDamageValue@Item@@UEBAFPEBVCompoundTag@@@Z
    getFood(): unknown;	// getFood(void): class IFoodItemComponent * __ptr64	 /// ?getFood@Item@@UEBAPEAVIFoodItemComponent@@XZ
    getFullItemName(): unknown;	// getFullItemName(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64	 /// ?getFullItemName@Item@@QEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
    getFurnaceBurnIntervalMultipler(_1: object): number;	// getFurnaceBurnIntervalMultipler(ItemStackBase const &): float	 /// ?getFurnaceBurnIntervalMultipler@Item@@UEBAMAEBVItemStackBase@@@Z
    getFurnaceXPmultiplier(_1: object): number;	// getFurnaceXPmultiplier(ItemStackBase const &): float	 /// ?getFurnaceXPmultiplier@Item@@UEBAMAEBVItemStackBase@@@Z
    getIcon(_1: object, _2: number, _3: boolean): bigint;	// getIcon(ItemStackBase const &,int,bool): struct TextureUVCoordinateSet const & __ptr64	 /// ?getIcon@Item@@UEBAAEBUTextureUVCoordinateSet@@AEBVItemStackBase@@H_N@Z
    getInHandUpdateType(_1: object, _2: object, _3: object, _4: boolean, _5: boolean): bigint;	// getInHandUpdateType(Player const &,ItemStack const &,ItemStack const &,bool,bool): enum InHandUpdateType	 /// ?getInHandUpdateType@Item@@UEBA?AW4InHandUpdateType@@AEBVPlayer@@AEBVItemStack@@1_N2@Z
    getInteractText(_1: object): bigint;	// getInteractText(Player const &): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> >	 /// ?getInteractText@Item@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@AEBVPlayer@@@Z
    getLegacyBlock(): unknown;	// getLegacyBlock(void): class WeakPtr<class BlockLegacy> const & __ptr64	 /// ?getLegacyBlock@Item@@QEBAAEBV?$WeakPtr@VBlockLegacy@@@@XZ
    getLightEmission(_1: number): bigint;	// getLightEmission(int): struct Brightness	 /// ?getLightEmission@Item@@UEBA?AUBrightness@@H@Z
    getMaxDamage(): number;	// getMaxDamage(void): short	 /// ?getMaxDamage@Item@@UEBAFXZ
    getMaxUseDuration(_1: object): number;	// getMaxUseDuration(ItemInstance const *): int	 /// ?getMaxUseDuration@Item@@UEBAHPEBVItemInstance@@@Z
    getNamespace(): unknown;	// getNamespace(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64	 /// ?getNamespace@Item@@QEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
    getSerializedName(): bigint;	// getSerializedName(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> >	 /// ?getSerializedName@Item@@QEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
    hurtActor(_1: object, _2: object, _3: object): void;	// hurtActor(ItemStack &,Actor &,Mob &): void	 /// ?hurtActor@Item@@UEBAXAEAVItemStack@@AEAVActor@@AEAVMob@@@Z
    initClient(_1: object, _2: object): void;	// initClient(Json::Value &,SemVersion const &): void	 /// ?initClient@Item@@UEAAXAEAVValue@Json@@AEBVSemVersion@@@Z
    initServer(_1: object, _2: object): boolean;	// initServer(Json::Value &,SemVersion const &): bool	 /// ?initServer@Item@@UEAA_NAEAVValue@Json@@AEBVSemVersion@@@Z
    initializeFromNetwork(_1: object): void;	// initializeFromNetwork(CompoundTag const &): void	 /// ?initializeFromNetwork@Item@@UEAAXAEBVCompoundTag@@@Z
    isCamera(): boolean;	// isCamera(void): bool	 /// ?isCamera@Item@@UEBA_NXZ
    isDamageable(): boolean;	// isDamageable(void): bool	 /// ?isDamageable@Item@@UEBA_NXZ
    isElytra(): boolean;	// isElytra(void): bool	 /// ?isElytra@Item@@QEBA_NXZ
    isElytraBroken(_1: number): boolean;	// isElytraBroken(int): bool	 /// ?isElytraBroken@Item@@SA_NH@Z
    isEmissive(_1: number): boolean;	// isEmissive(int): bool	 /// ?isEmissive@Item@@UEBA_NH@Z
    isFireResistant(): boolean;	// isFireResistant(void): bool	 /// ?isFireResistant@Item@@QEBA_NXZ
    isGlint(_1: object): boolean;	// isGlint(ItemStackBase const &): bool	 /// ?isGlint@Item@@UEBA_NAEBVItemStackBase@@@Z
    isHandEquipped(): boolean;	// isHandEquipped(void): bool	 /// ?isHandEquipped@Item@@UEBA_NXZ
    isSameItem(_1: object, _2: object): boolean;	// isSameItem(ItemStackBase const &,ItemStackBase const &): bool	 /// ?isSameItem@Item@@UEBA_NAEBVItemStackBase@@0@Z
    isSameTypeAndItem(_1: object, _2: object): boolean;	// isSameTypeAndItem(ItemStackBase const &,ItemStackBase const &): bool	 /// ?isSameTypeAndItem@Item@@SA_NAEBVItemStackBase@@0@Z
    isStackedByData(): boolean;	// isStackedByData(void): bool	 /// ?isStackedByData@Item@@UEBA_NXZ
    mineBlock(_1: object, _2: object, _3: number, _4: number, _5: number, _6: object): boolean;	// mineBlock(ItemInstance &,Block const &,int,int,int,Actor *): bool	 /// ?mineBlock@Item@@UEBA_NAEAVItemInstance@@AEBVBlock@@HHHPEAVActor@@@Z
    readUserData(_1: object, _2: object, _3: object): void;	// readUserData(ItemStackBase &,IDataInput &,ReadOnlyBinaryStream &): void	 /// ?readUserData@Item@@UEBAXAEAVItemStackBase@@AEAVIDataInput@@AEAVReadOnlyBinaryStream@@@Z
    releaseUsing(_1: object, _2: object, _3: number): void;	// releaseUsing(ItemStack &,Player *,int): void	 /// ?releaseUsing@Item@@UEBAXAEAVItemStack@@PEAVPlayer@@H@Z
    setAllowOffhand(_1: boolean): Item;	// setAllowOffhand(bool): class Item & __ptr64	 /// ?setAllowOffhand@Item@@QEAAAEAV1@_N@Z
    setCategory(_1: unknown): Item;	// setCategory(CreativeItemCategory): class Item & __ptr64	 /// ?setCategory@Item@@QEAAAEAV1@W4CreativeItemCategory@@@Z
    setDamageValue(_1: object, _2: number): void;	// setDamageValue(ItemStackBase &,short): void	 /// ?setDamageValue@Item@@UEBAXAEAVItemStackBase@@F@Z
    setExplodable(_1: boolean): Item;	// setExplodable(bool): class Item & __ptr64	 /// ?setExplodable@Item@@UEAAAEAV1@_N@Z
    setFireResistant(_1: boolean): Item;	// setFireResistant(bool): class Item & __ptr64	 /// ?setFireResistant@Item@@UEAAAEAV1@_N@Z
    setFurnaceBurnIntervalMultiplier(_1: number): Item;	// setFurnaceBurnIntervalMultiplier(float): class Item & __ptr64	 /// ?setFurnaceBurnIntervalMultiplier@Item@@QEAAAEAV1@M@Z
    setFurnaceXPmultiplier(_1: number): Item;	// setFurnaceXPmultiplier(float): class Item & __ptr64	 /// ?setFurnaceXPmultiplier@Item@@QEAAAEAV1@M@Z
    setHandEquipped(): Item;	// setHandEquipped(void): class Item & __ptr64	 /// ?setHandEquipped@Item@@UEAAAEAV1@XZ
    setIcon(_1: object): Item;	// setIcon(TextureUVCoordinateSet const &): class Item & __ptr64	 /// ?setIcon@Item@@UEAAAEAV1@AEBUTextureUVCoordinateSet@@@Z
    setIsGlint(_1: boolean): Item;	// setIsGlint(bool): class Item & __ptr64	 /// ?setIsGlint@Item@@UEAAAEAV1@_N@Z
    setMaxDamage(_1: number): Item;	// setMaxDamage(int): class Item & __ptr64	 /// ?setMaxDamage@Item@@UEAAAEAV1@H@Z
    setMaxStackSize(_1: number): Item;	// setMaxStackSize(uchar): class Item & __ptr64	 /// ?setMaxStackSize@Item@@UEAAAEAV1@E@Z
    setMaxUseDuration(_1: number): Item;	// setMaxUseDuration(int): class Item & __ptr64	 /// ?setMaxUseDuration@Item@@UEAAAEAV1@H@Z
    setMinRequiredBaseGameVersion(_1: object): Item;	// setMinRequiredBaseGameVersion(BaseGameVersion const &): class Item & __ptr64	 /// ?setMinRequiredBaseGameVersion@Item@@QEAAAEAV1@AEBVBaseGameVersion@@@Z
    setRequiresWorldBuilder(_1: boolean): Item;	// setRequiresWorldBuilder(bool): class Item & __ptr64	 /// ?setRequiresWorldBuilder@Item@@UEAAAEAV1@_N@Z
    setShouldDespawn(_1: boolean): Item;	// setShouldDespawn(bool): class Item & __ptr64	 /// ?setShouldDespawn@Item@@UEAAAEAV1@_N@Z
    setStackedByData(_1: boolean): Item;	// setStackedByData(bool): class Item & __ptr64	 /// ?setStackedByData@Item@@UEAAAEAV1@_N@Z
    setUseAnimation(_1: unknown): Item;	// setUseAnimation(UseAnimation): class Item & __ptr64	 /// ?setUseAnimation@Item@@UEAAAEAV1@W4UseAnimation@@@Z
    shouldDespawn(): boolean;	// shouldDespawn(void): bool	 /// ?shouldDespawn@Item@@QEBA_NXZ
    startCreativeItemDefinitions(_1: boolean, _2: object): void;	// startCreativeItemDefinitions(bool,CreativeItemRegistry *): void	 /// ?startCreativeItemDefinitions@Item@@SAX_NPEAVCreativeItemRegistry@@@Z
    updateCustomBlockEntityTag(_1: object, _2: object, _3: object): boolean;	// updateCustomBlockEntityTag(BlockSource &,ItemStackBase &,BlockPos const &): bool	 /// ?updateCustomBlockEntityTag@Item@@QEBA_NAEAVBlockSource@@AEAVItemStackBase@@AEBVBlockPos@@@Z
    use(_1: object, _2: object): ItemStack;	// use(ItemStack &,Player &): class ItemStack & __ptr64	 /// ?use@Item@@UEBAAEAVItemStack@@AEAV2@AEAVPlayer@@@Z
    useOn(_1: object, _2: object, _3: number, _4: number, _5: number, _6: number, _7: object): boolean;	// useOn(ItemStack &,Actor &,int,int,int,uchar,Vec3 const &): bool	 /// ?useOn@Item@@QEBA_NAEAVItemStack@@AEAVActor@@HHHEAEBVVec3@@@Z
    useTimeDepleted(_1: object, _2: object, _3: object): bigint;	// useTimeDepleted(ItemStack &,Level *,Player *): enum ItemUseMethod	 /// ?useTimeDepleted@Item@@UEBA?AW4ItemUseMethod@@AEAVItemStack@@PEAVLevel@@PEAVPlayer@@@Z
    writeUserData(_1: object, _2: object): void;	// writeUserData(ItemStackBase const &,IDataOutput &): void	 /// ?writeUserData@Item@@UEBAXAEBVItemStackBase@@AEAVIDataOutput@@@Z
}
declare class DimMapIterator {
    // Attributes 
    next: object;
    dimensionId: number;
    dimensionPtr: Dimension;
    // Methods 
    // Inherited from DimMapIterator
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
    name2: SDKText;
    dimensionId: number;
    isUltraWarm: number;
    seasons: object;
    hasSkylight: number;
    skyDarken: number;
    chunkSource: object;
    entityMap: SDKUnorderedMap;
    tickingAreas: object;
    chunkBuildOrderPolicy: object;
    // Methods 
    // Inherited from Dimension
    _createChunkBuildOrderPolicy(): bigint;	// _createChunkBuildOrderPolicy(void): class std::unique_ptr<class ChunkBuildOrderPolicyBase,struct std::default_delete<class ChunkBuildOrderPolicyBase> >	 /// ?_createChunkBuildOrderPolicy@Dimension@@EEAA?AV?$unique_ptr@VChunkBuildOrderPolicyBase@@U?$default_delete@VChunkBuildOrderPolicyBase@@@std@@@std@@XZ
    _processEntityChunkTransfers(): void;	// _processEntityChunkTransfers(void): void	 /// ?_processEntityChunkTransfers@Dimension@@AEAAXXZ
    _sendBlockEntityUpdatePacket(_1: object): void;	// _sendBlockEntityUpdatePacket(NetworkBlockPosition const &): void	 /// ?_sendBlockEntityUpdatePacket@Dimension@@AEAAXAEBVNetworkBlockPosition@@@Z
    _sendBlocksChangedPackets(): void;	// _sendBlocksChangedPackets(void): void	 /// ?_sendBlocksChangedPackets@Dimension@@AEAAXXZ
    _tickEntityChunkMoves(): void;	// _tickEntityChunkMoves(void): void	 /// ?_tickEntityChunkMoves@Dimension@@AEAAXXZ
    addActorChunkTransferToQueue(_1: object, _2: object): void;	// addActorChunkTransferToQueue(ChunkPos &,ChunkPos &): void	 /// ?addActorChunkTransferToQueue@Dimension@@QEAAXAEAVChunkPos@@0@Z
    addWither(_1: object): void;	// addWither(ActorUniqueID const &): void	 /// ?addWither@Dimension@@QEAAXAEBUActorUniqueID@@@Z
    deserialize(_1: object): void;	// deserialize(CompoundTag const &): void	 /// ?deserialize@Dimension@@UEAAXAEBVCompoundTag@@@Z
    distanceToNearestPlayerSqr2D(_1: unknown): number;	// distanceToNearestPlayerSqr2D(Vec3): float	 /// ?distanceToNearestPlayerSqr2D@Dimension@@QEAAMVVec3@@@Z
    fetchEntity(_1: unknown, _2: boolean): Actor;	// fetchEntity(ActorUniqueID,bool): class Actor * __ptr64	 /// ?fetchEntity@Dimension@@QEAAPEAVActor@@UActorUniqueID@@_N@Z
    fetchNearestAttackablePlayer(_1: object, _2: number): Player;	// fetchNearestAttackablePlayer(Actor &,float): class Player * __ptr64	 /// ?fetchNearestAttackablePlayer@Dimension@@QEAAPEAVPlayer@@AEAVActor@@M@Z
    fetchNearestAttackablePlayer(_1: BlockPos, _2: number, _3: object): Player;	// fetchNearestAttackablePlayer(BlockPos,float,Actor *): class Player * __ptr64	 /// ?fetchNearestAttackablePlayer@Dimension@@QEAAPEAVPlayer@@VBlockPos@@MPEAVActor@@@Z
    fetchNearestPlayer(_1: object, _2: number): Player;	// fetchNearestPlayer(Actor &,float): class Player * __ptr64	 /// ?fetchNearestPlayer@Dimension@@QEAAPEAVPlayer@@AEAVActor@@M@Z
    fetchNearestPlayer(_1: number, _2: number, _3: number, _4: number, _5: boolean): Player;	// fetchNearestPlayer(float,float,float,float,bool): class Player * __ptr64	 /// ?fetchNearestPlayer@Dimension@@QEAAPEAVPlayer@@MMMM_N@Z
    getBlockEventDispatcher(): unknown;	// getBlockEventDispatcher(void): class BlockEventDispatcher & __ptr64	 /// ?getBlockEventDispatcher@Dimension@@QEAAAEAVBlockEventDispatcher@@XZ
    getBlockSourceFromMainChunkSource(): BlockSource;	// getBlockSourceFromMainChunkSource(void): class BlockSource & __ptr64	 /// ?getBlockSourceFromMainChunkSource@Dimension@@QEBAAEAVBlockSource@@XZ
    getBrightnessDependentFogColor(_1: object, _2: number): bigint;	// getBrightnessDependentFogColor(mce::Color const &,float): class mce::Color	 /// ?getBrightnessDependentFogColor@Dimension@@UEBA?AVColor@mce@@AEBV23@M@Z
    getBrightnessRamp(): unknown;	// getBrightnessRamp(void): class DimensionBrightnessRamp const & __ptr64	 /// ?getBrightnessRamp@Dimension@@UEBAAEBVDimensionBrightnessRamp@@XZ
    getChunkBuildOrderPolicy(): unknown;	// getChunkBuildOrderPolicy(void): class ChunkBuildOrderPolicyBase & __ptr64	 /// ?getChunkBuildOrderPolicy@Dimension@@QEAAAEAVChunkBuildOrderPolicyBase@@XZ
    getChunkSource(): unknown;	// getChunkSource(void): class ChunkSource & __ptr64	 /// ?getChunkSource@Dimension@@QEBAAEAVChunkSource@@XZ
    getCircuitSystem(): unknown;	// getCircuitSystem(void): class CircuitSystem & __ptr64	 /// ?getCircuitSystem@Dimension@@QEAAAEAVCircuitSystem@@XZ
    getClearColorScale(): number;	// getClearColorScale(void): float	 /// ?getClearColorScale@Dimension@@UEAAMXZ
    getCloudHeight(): number;	// getCloudHeight(void): short	 /// ?getCloudHeight@Dimension@@UEBAFXZ
    getDimensionId(): bigint;	// getDimensionId(void): class AutomaticID<class Dimension,int>	 /// ?getDimensionId@Dimension@@QEBA?AV?$AutomaticID@VDimension@@H@@XZ
    getEntityIdMap(): bigint;	 /// ?getEntityIdMap@Dimension@@QEAAAEAV?$unordered_map@UActorUniqueID@@VWeakEntityRef@@U?$hash@UActorUniqueID@@@std@@U?$equal_to@UActorUniqueID@@@4@V?$allocator@U?$pair@$$CBUActorUniqueID@@VWeakEntityRef@@@std@@@4@@std@@XZ
    getFeatureTerrainAdjustments(): unknown;	// getFeatureTerrainAdjustments(void): class FeatureTerrainAdjustments & __ptr64	 /// ?getFeatureTerrainAdjustments@Dimension@@QEAAAEAVFeatureTerrainAdjustments@@XZ
    getLevel(): Level;	// getLevel(void): class Level & __ptr64	 /// ?getLevel@Dimension@@QEBAAEAVLevel@@XZ
    getMinHeight(): number;	// getMinHeight(void): short	 /// ?getMinHeight@Dimension@@QEBAFXZ
    getMoonBrightness(): number;	// getMoonBrightness(void): float	 /// ?getMoonBrightness@Dimension@@QEBAMXZ
    getMoonPhase(): number;	// getMoonPhase(void): int	 /// ?getMoonPhase@Dimension@@QEBAHXZ
    getSunIntensity(_1: number, _2: object, _3: number): number;	// getSunIntensity(float,Vec3 const &,float): float	 /// ?getSunIntensity@Dimension@@UEBAMMAEBVVec3@@M@Z
    getTickingAreas(): unknown;	// getTickingAreas(void): class TickingAreaList & __ptr64	 /// ?getTickingAreas@Dimension@@QEAAAEAVTickingAreaList@@XZ
    getTimeOfDay(_1: number): number;	// getTimeOfDay(float): float	 /// ?getTimeOfDay@Dimension@@QEBAMM@Z
    getTimeOfDay(_1: number, _2: number): number;	// getTimeOfDay(int,float): float	 /// ?getTimeOfDay@Dimension@@MEBAMHM@Z
    getWeather(): unknown;	// getWeather(void): class Weather & __ptr64	 /// ?getWeather@Dimension@@QEBAAEAVWeather@@XZ
    getWorldGenerator(): unknown;	// getWorldGenerator(void): class WorldGenerator * __ptr64	 /// ?getWorldGenerator@Dimension@@QEBAPEAVWorldGenerator@@XZ
    hasSkylight(): boolean;	// hasSkylight(void): bool	 /// ?hasSkylight@Dimension@@QEBA_NXZ
    init(): void;	// init(void): void	 /// ?init@Dimension@@UEAAXXZ
    is2DPositionRelevantForPlayer(_1: object, _2: object): boolean;	// is2DPositionRelevantForPlayer(BlockPos const &,Player &): bool	 /// ?is2DPositionRelevantForPlayer@Dimension@@UEBA_NAEBVBlockPos@@AEAVPlayer@@@Z
    isActorRelevantForPlayer(_1: object, _2: object): boolean;	// isActorRelevantForPlayer(Player &,Actor const &): bool	 /// ?isActorRelevantForPlayer@Dimension@@UEBA_NAEAVPlayer@@AEBVActor@@@Z
    isDay(): boolean;	// isDay(void): bool	 /// ?isDay@Dimension@@UEBA_NXZ
    isRedstoneTick(): boolean;	// isRedstoneTick(void): bool	 /// ?isRedstoneTick@Dimension@@QEAA_NXZ
    onBlockChanged(_1: object, _2: object, _3: bigint, _4: object, _5: object, _6: number, _7: object, _8: unknown, _9: object): void;	// onBlockChanged(BlockSource &,BlockPos const &,uint,Block const &,Block const &,int,ActorBlockSyncMessage const *,BlockChangedEventTarget,Actor *): void	 /// ?onBlockChanged@Dimension@@UEAAXAEAVBlockSource@@AEBVBlockPos@@IAEBVBlock@@2HPEBUActorBlockSyncMessage@@W4BlockChangedEventTarget@@PEAVActor@@@Z
    onBlockEvent(_1: object, _2: number, _3: number, _4: number, _5: number, _6: number): void;	// onBlockEvent(BlockSource &,int,int,int,int,int): void	 /// ?onBlockEvent@Dimension@@UEAAXAEAVBlockSource@@HHHHH@Z
    onChunkLoaded(_1: object, _2: object): void;	// onChunkLoaded(ChunkSource &,LevelChunk &): void	 /// ?onChunkLoaded@Dimension@@UEAAXAEAVChunkSource@@AEAVLevelChunk@@@Z
    removeActorByID(_1: object): void;	// removeActorByID(ActorUniqueID const &): void	 /// ?removeActorByID@Dimension@@QEAAXAEBUActorUniqueID@@@Z
    sendBroadcast(_1: object, _2: object): void;	// sendBroadcast(Packet const &,Player *): void	 /// ?sendBroadcast@Dimension@@UEAAXAEBVPacket@@PEAVPlayer@@@Z
    sendPacketForEntity(_1: object, _2: object, _3: object): void;	// sendPacketForEntity(Actor const &,Packet const &,Player const *): void	 /// ?sendPacketForEntity@Dimension@@QEAAXAEBVActor@@AEBVPacket@@PEBVPlayer@@@Z
    sendPacketForPosition(_1: object, _2: object, _3: object): void;	// sendPacketForPosition(BlockPos const &,Packet const &,Player const *): void	 /// ?sendPacketForPosition@Dimension@@QEAAXAEBVBlockPos@@AEBVPacket@@PEBVPlayer@@@Z
    serialize(_1: object): void;	// serialize(CompoundTag &): void	 /// ?serialize@Dimension@@UEBAXAEAVCompoundTag@@@Z
    startLeaveGame(): void;	// startLeaveGame(void): void	 /// ?startLeaveGame@Dimension@@UEAAXXZ
    tick(): void;	// tick(void): void	 /// ?tick@Dimension@@UEAAXXZ
    tickRedstone(): void;	// tickRedstone(void): void	 /// ?tickRedstone@Dimension@@UEAAXXZ
    transferEntityToUnloadedChunk(_1: object): void;	// transferEntityToUnloadedChunk(Actor &): void	 /// ?transferEntityToUnloadedChunk@Dimension@@QEAAXAEAVActor@@@Z
    tryAssignNewRegionAt(_1: object, _2: object): boolean;	// tryAssignNewRegionAt(ChunkPos const &,Actor &): bool	 /// ?tryAssignNewRegionAt@Dimension@@QEAA_NAEBVChunkPos@@AEAVActor@@@Z
    tryGarbageCollectStructures(): void;	// tryGarbageCollectStructures(void): void	 /// ?tryGarbageCollectStructures@Dimension@@QEAAXXZ
    tryGetClosestPublicRegion(_1: object): BlockSource;	// tryGetClosestPublicRegion(ChunkPos const &): class BlockSource * __ptr64	 /// ?tryGetClosestPublicRegion@Dimension@@QEBAPEAVBlockSource@@AEBVChunkPos@@@Z
    tryLoadLimboEntities(_1: object): void;	// tryLoadLimboEntities(ChunkPos const &): void	 /// ?tryLoadLimboEntities@Dimension@@QEAAXAEBVChunkPos@@@Z
    unregisterEntity(_1: object): void;	// unregisterEntity(ActorUniqueID const &): void	 /// ?unregisterEntity@Dimension@@QEAAXAEBUActorUniqueID@@@Z
}
declare class Inventory {
    // Attributes 
    owner: Actor;
    vtable: object;
    // Methods 
    // Inherited from Inventory
    add(_1: object): boolean;	// add(ItemStack &): bool	 /// ?add@Inventory@@UEAA_NAEAVItemStack@@@Z
    canAdd(_1: object): boolean;	// canAdd(ItemStack const &): bool	 /// ?canAdd@Inventory@@UEBA_NAEBVItemStack@@@Z
    dropSlot(_1: number, _2: boolean, _3: boolean, _4: boolean): void;	// dropSlot(int,bool,bool,bool): void	 /// ?dropSlot@Inventory@@QEAAXH_N00@Z
    getEmptySlotsCount(): number;	// getEmptySlotsCount(void): int	 /// ?getEmptySlotsCount@Inventory@@UEBAHXZ
    getFirstEmptySlot(): number;	// getFirstEmptySlot(void): int	 /// ?getFirstEmptySlot@Inventory@@UEBAHXZ
    init(): void;	// init(void): void	 /// ?init@Inventory@@UEAAXXZ
    setContainerSize(_1: number): void;	// setContainerSize(int): void	 /// ?setContainerSize@Inventory@@UEAAXH@Z
    setItem(_1: number, _2: object): void;	// setItem(int,ItemStack const &): void	 /// ?setItem@Inventory@@UEAAXHAEBVItemStack@@@Z
    setItemWithForceBalance(_1: number, _2: object, _3: boolean): void;	// setItemWithForceBalance(int,ItemStack const &,bool): void	 /// ?setItemWithForceBalance@Inventory@@UEAAXHAEBVItemStack@@_N@Z
    // Inherited from FillingContainer
    _addResource(_1: object): number;	// _addResource(ItemStack const &): int	 /// ?_addResource@FillingContainer@@IEAAHAEBVItemStack@@@Z
    _fixBackwardCompabilityItem(_1: object): void;	// _fixBackwardCompabilityItem(ItemStack &): void	 /// ?_fixBackwardCompabilityItem@FillingContainer@@IEAAXAEAVItemStack@@@Z
    _getFreeSlot(): number;	// _getFreeSlot(void): int	 /// ?_getFreeSlot@FillingContainer@@IEBAHXZ
    _getSlotWithRemainingSpace(_1: object): number;	// _getSlotWithRemainingSpace(ItemStack const &): int	 /// ?_getSlotWithRemainingSpace@FillingContainer@@IEBAHAEBVItemStack@@@Z
    _isCreative(): boolean;	// _isCreative(void): bool	 /// ?_isCreative@FillingContainer@@IEBA_NXZ
    _release(_1: number): void;	// _release(int): void	 /// ?_release@FillingContainer@@IEAAXH@Z
    clearInventory(_1: number): number;	// clearInventory(int): int	 /// ?clearInventory@FillingContainer@@UEAAHH@Z
    clearSlot(_1: number): void;	// clearSlot(int): void	 /// ?clearSlot@FillingContainer@@UEAAXH@Z
    getContainerSize(): number;	// getContainerSize(void): int	 /// ?getContainerSize@FillingContainer@@UEBAHXZ
    getItem(_1: number): ItemStack;	// getItem(int): class ItemStack const & __ptr64	 /// ?getItem@FillingContainer@@UEBAAEBVItemStack@@H@Z
    getMaxStackSize(): number;	// getMaxStackSize(void): int	 /// ?getMaxStackSize@FillingContainer@@UEBAHXZ
    load(_1: object, _2: object, _3: object): void;	// load(ListTag const &,SemVersion const &,Level &): void	 /// ?load@FillingContainer@@UEAAXAEBVListTag@@AEBVSemVersion@@AEAVLevel@@@Z
    removeItem(_1: number, _2: number): void;	// removeItem(int,int): void	 /// ?removeItem@FillingContainer@@UEAAXHH@Z
    removeResource(_1: object, _2: boolean, _3: boolean, _4: number): number;	// removeResource(ItemStack const &,bool,bool,int): int	 /// ?removeResource@FillingContainer@@QEAAHAEBVItemStack@@_N1H@Z
    save(): bigint;	// save(void): class std::unique_ptr<class ListTag,struct std::default_delete<class ListTag> >	 /// ?save@FillingContainer@@QEAA?AV?$unique_ptr@VListTag@@U?$default_delete@VListTag@@@std@@@std@@XZ
    swapSlots(_1: number, _2: number): void;	// swapSlots(int,int): void	 /// ?swapSlots@FillingContainer@@QEAAXHH@Z
    // Inherited from Container
    addAdditionalSaveData(_1: object): void;	// addAdditionalSaveData(CompoundTag &): void	 /// ?addAdditionalSaveData@Container@@UEAAXAEAVCompoundTag@@@Z
    addContentChangeListener(_1: object): void;	// addContentChangeListener(ContainerContentChangeListener *): void	 /// ?addContentChangeListener@Container@@UEAAXPEAVContainerContentChangeListener@@@Z
    addItem(_1: object): boolean;	// addItem(ItemStack &): bool	 /// ?addItem@Container@@UEAA_NAEAVItemStack@@@Z
    addItemToFirstEmptySlot(_1: object): boolean;	// addItemToFirstEmptySlot(ItemStack const &): bool	 /// ?addItemToFirstEmptySlot@Container@@UEAA_NAEBVItemStack@@@Z
    dropContents(_1: object, _2: object, _3: boolean): void;	// dropContents(BlockSource &,Vec3 const &,bool): void	 /// ?dropContents@Container@@UEAAXAEAVBlockSource@@AEBVVec3@@_N@Z
    findFirstSlotForItem(_1: object): number;	// findFirstSlotForItem(ItemStack const &): int	 /// ?findFirstSlotForItem@Container@@UEBAHAEBVItemStack@@@Z
    getItemCount(_1: object): number;	// getItemCount(ItemStack const &): int	 /// ?getItemCount@Container@@UEBAHAEBVItemStack@@@Z
    getRuntimeId(): unknown;	// getRuntimeId(void): class TypedRuntimeId<struct ContainerRuntimeIdTag,unsigned int,0> const & __ptr64	 /// ?getRuntimeId@Container@@QEBAAEBV?$TypedRuntimeId@UContainerRuntimeIdTag@@I$0A@@@XZ
    getSlotCopies(): bigint;	// getSlotCopies(void): class std::vector<class ItemStack,class std::allocator<class ItemStack> >	 /// ?getSlotCopies@Container@@UEBA?AV?$vector@VItemStack@@V?$allocator@VItemStack@@@std@@@std@@XZ
    getSlots(): unknown;	// getSlots(void): class std::vector<class ItemStack const * __ptr64,class std::allocator<class ItemStack const * __ptr64> > const	 /// ?getSlots@Container@@UEBA?BV?$vector@PEBVItemStack@@V?$allocator@PEBVItemStack@@@std@@@std@@XZ
    hasCustomName(): boolean;	// hasCustomName(void): bool	 /// ?hasCustomName@Container@@UEBA_NXZ
    hasRoomForItem(_1: object): boolean;	// hasRoomForItem(ItemStack const &): bool	 /// ?hasRoomForItem@Container@@UEAA_NAEBVItemStack@@@Z
    initRuntimeId(): void;	// initRuntimeId(void): void	 /// ?initRuntimeId@Container@@QEAAXXZ
    isEmpty(): boolean;	// isEmpty(void): bool	 /// ?isEmpty@Container@@UEBA_NXZ
    readAdditionalSaveData(_1: object): void;	// readAdditionalSaveData(CompoundTag const &): void	 /// ?readAdditionalSaveData@Container@@UEAAXAEBVCompoundTag@@@Z
    removeAllItems(): void;	// removeAllItems(void): void	 /// ?removeAllItems@Container@@UEAAXXZ
    removeContentChangeListener(_1: object): void;	// removeContentChangeListener(ContainerContentChangeListener *): void	 /// ?removeContentChangeListener@Container@@UEAAXPEAVContainerContentChangeListener@@@Z
    setContainerChanged(_1: number): void;	// setContainerChanged(int): void	 /// ?setContainerChanged@Container@@UEAAXH@Z
    setContainerMoved(): void;	// setContainerMoved(void): void	 /// ?setContainerMoved@Container@@UEAAXXZ
    triggerTransactionChange(_1: number, _2: object, _3: object): void;	// triggerTransactionChange(int,ItemStack const &,ItemStack const &): void	 /// ?triggerTransactionChange@Container@@QEAAXHAEBVItemStack@@0@Z
}
declare class FillingContainer {
    // Attributes 
    owner: Actor;
    vtable: object;
    // Methods 
    // Inherited from FillingContainer
    FillingContainer(_1: object, _2: number, _3: unknown): FillingContainer;	// FillingContainer(Player *,int,ContainerType)	 /// ??0FillingContainer@@QEAA@PEAVPlayer@@HW4ContainerType@@@Z
    _addResource(_1: object): number;	// _addResource(ItemStack const &): int	 /// ?_addResource@FillingContainer@@IEAAHAEBVItemStack@@@Z
    _fixBackwardCompabilityItem(_1: object): void;	// _fixBackwardCompabilityItem(ItemStack &): void	 /// ?_fixBackwardCompabilityItem@FillingContainer@@IEAAXAEAVItemStack@@@Z
    _getFreeSlot(): number;	// _getFreeSlot(void): int	 /// ?_getFreeSlot@FillingContainer@@IEBAHXZ
    _getSlotWithRemainingSpace(_1: object): number;	// _getSlotWithRemainingSpace(ItemStack const &): int	 /// ?_getSlotWithRemainingSpace@FillingContainer@@IEBAHAEBVItemStack@@@Z
    _isCreative(): boolean;	// _isCreative(void): bool	 /// ?_isCreative@FillingContainer@@IEBA_NXZ
    _release(_1: number): void;	// _release(int): void	 /// ?_release@FillingContainer@@IEAAXH@Z
    add(_1: object): boolean;	// add(ItemStack &): bool	 /// ?add@FillingContainer@@UEAA_NAEAVItemStack@@@Z
    canAdd(_1: object): boolean;	// canAdd(ItemStack const &): bool	 /// ?canAdd@FillingContainer@@UEBA_NAEBVItemStack@@@Z
    clearInventory(_1: number): number;	// clearInventory(int): int	 /// ?clearInventory@FillingContainer@@UEAAHH@Z
    clearSlot(_1: number): void;	// clearSlot(int): void	 /// ?clearSlot@FillingContainer@@UEAAXH@Z
    getContainerSize(): number;	// getContainerSize(void): int	 /// ?getContainerSize@FillingContainer@@UEBAHXZ
    getEmptySlotsCount(): number;	// getEmptySlotsCount(void): int	 /// ?getEmptySlotsCount@FillingContainer@@UEBAHXZ
    getItem(_1: number): ItemStack;	// getItem(int): class ItemStack const & __ptr64	 /// ?getItem@FillingContainer@@UEBAAEBVItemStack@@H@Z
    getMaxStackSize(): number;	// getMaxStackSize(void): int	 /// ?getMaxStackSize@FillingContainer@@UEBAHXZ
    load(_1: object, _2: object, _3: object): void;	// load(ListTag const &,SemVersion const &,Level &): void	 /// ?load@FillingContainer@@UEAAXAEBVListTag@@AEBVSemVersion@@AEAVLevel@@@Z
    removeItem(_1: number, _2: number): void;	// removeItem(int,int): void	 /// ?removeItem@FillingContainer@@UEAAXHH@Z
    removeResource(_1: object, _2: boolean, _3: boolean, _4: number): number;	// removeResource(ItemStack const &,bool,bool,int): int	 /// ?removeResource@FillingContainer@@QEAAHAEBVItemStack@@_N1H@Z
    save(): bigint;	// save(void): class std::unique_ptr<class ListTag,struct std::default_delete<class ListTag> >	 /// ?save@FillingContainer@@QEAA?AV?$unique_ptr@VListTag@@U?$default_delete@VListTag@@@std@@@std@@XZ
    setItemWithForceBalance(_1: number, _2: object, _3: boolean): void;	// setItemWithForceBalance(int,ItemStack const &,bool): void	 /// ?setItemWithForceBalance@FillingContainer@@UEAAXHAEBVItemStack@@_N@Z
    swapSlots(_1: number, _2: number): void;	// swapSlots(int,int): void	 /// ?swapSlots@FillingContainer@@QEAAXHH@Z
    // Inherited from Container
    addAdditionalSaveData(_1: object): void;	// addAdditionalSaveData(CompoundTag &): void	 /// ?addAdditionalSaveData@Container@@UEAAXAEAVCompoundTag@@@Z
    addContentChangeListener(_1: object): void;	// addContentChangeListener(ContainerContentChangeListener *): void	 /// ?addContentChangeListener@Container@@UEAAXPEAVContainerContentChangeListener@@@Z
    addItem(_1: object): boolean;	// addItem(ItemStack &): bool	 /// ?addItem@Container@@UEAA_NAEAVItemStack@@@Z
    addItemToFirstEmptySlot(_1: object): boolean;	// addItemToFirstEmptySlot(ItemStack const &): bool	 /// ?addItemToFirstEmptySlot@Container@@UEAA_NAEBVItemStack@@@Z
    dropContents(_1: object, _2: object, _3: boolean): void;	// dropContents(BlockSource &,Vec3 const &,bool): void	 /// ?dropContents@Container@@UEAAXAEAVBlockSource@@AEBVVec3@@_N@Z
    findFirstSlotForItem(_1: object): number;	// findFirstSlotForItem(ItemStack const &): int	 /// ?findFirstSlotForItem@Container@@UEBAHAEBVItemStack@@@Z
    getItemCount(_1: object): number;	// getItemCount(ItemStack const &): int	 /// ?getItemCount@Container@@UEBAHAEBVItemStack@@@Z
    getRuntimeId(): unknown;	// getRuntimeId(void): class TypedRuntimeId<struct ContainerRuntimeIdTag,unsigned int,0> const & __ptr64	 /// ?getRuntimeId@Container@@QEBAAEBV?$TypedRuntimeId@UContainerRuntimeIdTag@@I$0A@@@XZ
    getSlotCopies(): bigint;	// getSlotCopies(void): class std::vector<class ItemStack,class std::allocator<class ItemStack> >	 /// ?getSlotCopies@Container@@UEBA?AV?$vector@VItemStack@@V?$allocator@VItemStack@@@std@@@std@@XZ
    getSlots(): unknown;	// getSlots(void): class std::vector<class ItemStack const * __ptr64,class std::allocator<class ItemStack const * __ptr64> > const	 /// ?getSlots@Container@@UEBA?BV?$vector@PEBVItemStack@@V?$allocator@PEBVItemStack@@@std@@@std@@XZ
    hasCustomName(): boolean;	// hasCustomName(void): bool	 /// ?hasCustomName@Container@@UEBA_NXZ
    hasRoomForItem(_1: object): boolean;	// hasRoomForItem(ItemStack const &): bool	 /// ?hasRoomForItem@Container@@UEAA_NAEBVItemStack@@@Z
    initRuntimeId(): void;	// initRuntimeId(void): void	 /// ?initRuntimeId@Container@@QEAAXXZ
    isEmpty(): boolean;	// isEmpty(void): bool	 /// ?isEmpty@Container@@UEBA_NXZ
    readAdditionalSaveData(_1: object): void;	// readAdditionalSaveData(CompoundTag const &): void	 /// ?readAdditionalSaveData@Container@@UEAAXAEBVCompoundTag@@@Z
    removeAllItems(): void;	// removeAllItems(void): void	 /// ?removeAllItems@Container@@UEAAXXZ
    removeContentChangeListener(_1: object): void;	// removeContentChangeListener(ContainerContentChangeListener *): void	 /// ?removeContentChangeListener@Container@@UEAAXPEAVContainerContentChangeListener@@@Z
    setContainerChanged(_1: number): void;	// setContainerChanged(int): void	 /// ?setContainerChanged@Container@@UEAAXH@Z
    setContainerMoved(): void;	// setContainerMoved(void): void	 /// ?setContainerMoved@Container@@UEAAXXZ
    triggerTransactionChange(_1: number, _2: object, _3: object): void;	// triggerTransactionChange(int,ItemStack const &,ItemStack const &): void	 /// ?triggerTransactionChange@Container@@QEAAXHAEBVItemStack@@0@Z
}
declare class FloatAbility {
    // Attributes 
    state: number;
    data: number;
    permissions: number;
    // Methods 
    // Inherited from FloatAbility
}
declare class LevelData {
    // Attributes 
    useMsaGamertagsOnly: number;
    isPremiumWorldTemplate: number;
    lockedBehaviorPack: number;
    isFromWorldTemplate: number;
    abilities: Abilities;
    worldName: SDKText;
    storageVersion: number;
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
    isMultiplayerGame: number;
    lanBroadcastIntent: number;
    lanBroadcast: number;
    xblBroadcastMode: number;
    mapsCenteredToOrigin: number;
    isFromLockedTemplate: number;
    platformBroadcastIntent: number;
    texturepacksRequired: number;
    lockedResourcePack: number;
    netherType: number;
    startWithMapEnabled: number;
    onlySpawnV1Villagers: number;
    spawnDimension: number;
    // Methods 
    // Inherited from LevelData
    LevelData(_1: boolean): LevelData;	// LevelData(bool)	 /// ??0LevelData@@QEAA@_N@Z
    _determineMaxBaseGameVersion(): void;	// _determineMaxBaseGameVersion(void): void	 /// ?_determineMaxBaseGameVersion@LevelData@@AEAAXXZ
    _setGameRulesBasedOnPremiumContentIdentity(): void;	// _setGameRulesBasedOnPremiumContentIdentity(void): void	 /// ?_setGameRulesBasedOnPremiumContentIdentity@LevelData@@AEAAXXZ
    _setValue(_1: object, _2: object): void;	// _setValue(HashedString const &,LevelDataValue &&): void	 /// ?_setValue@LevelData@@AEAAXAEBVHashedString@@$$QEAULevelDataValue@@@Z
    disableAchievements(): void;	// disableAchievements(void): void	 /// ?disableAchievements@LevelData@@QEAAXXZ
    getBaseGameVersion(): unknown;	// getBaseGameVersion(void): class BaseGameVersion const & __ptr64	 /// ?getBaseGameVersion@LevelData@@QEBAAEBVBaseGameVersion@@XZ
    getBiomeOverride(): unknown;	// getBiomeOverride(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const	 /// ?getBiomeOverride@LevelData@@QEBA?BV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
    getCurrentTick(): bigint;	// getCurrentTick(void): struct Tick const & __ptr64	 /// ?getCurrentTick@LevelData@@QEBAAEBUTick@@XZ
    getExperiments(): unknown;	// getExperiments(void): class Experiments const & __ptr64	 /// ?getExperiments@LevelData@@QEBAAEBVExperiments@@XZ
    getFlatWorldGeneratorOptions(): unknown;	// getFlatWorldGeneratorOptions(void): class Json::Value const & __ptr64	 /// ?getFlatWorldGeneratorOptions@LevelData@@QEBAAEBVValue@Json@@XZ
    getGameType(): bigint;	// getGameType(void): enum GameType	 /// ?getGameType@LevelData@@QEBA?AW4GameType@@XZ
    getGenerator(): bigint;	// getGenerator(void): enum GeneratorType	 /// ?getGenerator@LevelData@@QEBA?AW4GeneratorType@@XZ
    getNetherType(): bigint;	// getNetherType(void): enum NetherWorldType	 /// ?getNetherType@LevelData@@QEBA?AW4NetherWorldType@@XZ
    getSpawnPos(): BlockPos;	// getSpawnPos(void): class BlockPos const & __ptr64	 /// ?getSpawnPos@LevelData@@QEBAAEBVBlockPos@@XZ
    getStorageVersion(): bigint;	// getStorageVersion(void): enum StorageVersion	 /// ?getStorageVersion@LevelData@@QEBA?AW4StorageVersion@@XZ
    getStoredGenerator(): bigint;	// getStoredGenerator(void): enum GeneratorType	 /// ?getStoredGenerator@LevelData@@QEBA?AW4GeneratorType@@XZ
    getTagData(_1: object): void;	// getTagData(CompoundTag const &): void	 /// ?getTagData@LevelData@@QEAAXAEBVCompoundTag@@@Z
    getWorldVersion(): bigint;	// getWorldVersion(void): enum WorldVersion	 /// ?getWorldVersion@LevelData@@QEBA?AW4WorldVersion@@XZ
    hasCommandsEnabled(): boolean;	// hasCommandsEnabled(void): bool	 /// ?hasCommandsEnabled@LevelData@@QEBA_NXZ
    isLegacyLevel(): boolean;	// isLegacyLevel(void): bool	 /// ?isLegacyLevel@LevelData@@QEBA_NXZ
    isMultiplayerGame(): boolean;	// isMultiplayerGame(void): bool	 /// ?isMultiplayerGame@LevelData@@QEBA_NXZ
    isTexturepacksRequired(): boolean;	// isTexturepacksRequired(void): bool	 /// ?isTexturepacksRequired@LevelData@@QEBA_NXZ
    setDataDrivenGenerator(_1: unknown): void;	// setDataDrivenGenerator(GeneratorType): void	 /// ?setDataDrivenGenerator@LevelData@@QEAAXW4GeneratorType@@@Z
    setEduSharedUriResource(_1: object): void;	// setEduSharedUriResource(EduSharedUriResource const &): void	 /// ?setEduSharedUriResource@LevelData@@QEAAXAEBUEduSharedUriResource@@@Z
    setEducationEditionOffer(_1: unknown): void;	// setEducationEditionOffer(EducationEditionOffer): void	 /// ?setEducationEditionOffer@LevelData@@QEAAXW4EducationEditionOffer@@@Z
    setGameDifficulty(_1: unknown): void;	// setGameDifficulty(Difficulty): void	 /// ?setGameDifficulty@LevelData@@QEAAXW4Difficulty@@@Z
    setGameType(_1: unknown): void;	// setGameType(GameType): void	 /// ?setGameType@LevelData@@QEAAXW4GameType@@@Z
    setSeed(_1: unknown): void;	// setSeed(LevelSeed64): void	 /// ?setSeed@LevelData@@QEAAXVLevelSeed64@@@Z
    setSpawnPos(_1: object): void;	// setSpawnPos(BlockPos const &): void	 /// ?setSpawnPos@LevelData@@QEAAXAEBVBlockPos@@@Z
    setWorldTemplateIdentity(_1: object): void;	// setWorldTemplateIdentity(PackIdVersion const &): void	 /// ?setWorldTemplateIdentity@LevelData@@QEAAXAEBUPackIdVersion@@@Z
    setWorldVersion(_1: unknown): void;	// setWorldVersion(WorldVersion): void	 /// ?setWorldVersion@LevelData@@QEAAXW4WorldVersion@@@Z
    touchLastLoadedWithVersion(): void;	// touchLastLoadedWithVersion(void): void	 /// ?touchLastLoadedWithVersion@LevelData@@QEAAXXZ
    v1_read(_1: object, _2: unknown): void;	// v1_read(RakNet::BitStream &,StorageVersion): void	 /// ?v1_read@LevelData@@QEAAXAEAVBitStream@RakNet@@W4StorageVersion@@@Z
}
declare class LevelRenderer {
    // Attributes 
    viewProj: Mat4x4;
    textureGroup: object;
    atlasTexture: TexturePtr;
    viewProj3d: Mat3x4;
    blockTessellator: object;
    // Methods 
    // Inherited from LevelRenderer
}
declare class Font {
    // Attributes 
    // Methods 
    // Inherited from Font
}
declare class FontRepository_FontList_FontEntry {
    // Attributes 
    font: Font;
    // Methods 
    // Inherited from FontRepository_FontList_FontEntry
}
declare class FontRepository {
    // Attributes 
    vtable: object;
    fontList: FontRepository_FontList;
    // Methods 
    // Inherited from FontRepository
}
declare class GameMode {
    // Attributes 
    // Methods 
    // Inherited from GameMode
    _canDestroy(_1: object, _2: number): boolean;	// _canDestroy(BlockPos const &,uchar): bool	 /// ?_canDestroy@GameMode@@AEAA_NAEBVBlockPos@@E@Z
    _canUseBlock(_1: object): boolean;	// _canUseBlock(Block const &): bool	 /// ?_canUseBlock@GameMode@@AEAA_NAEBVBlock@@@Z
    attack(_1: object): boolean;	// attack(Actor &): bool	 /// ?attack@GameMode@@UEAA_NAEAVActor@@@Z
    buildBlock(_1: object, _2: number, _3: boolean): boolean;	// buildBlock(BlockPos const &,uchar,bool): bool	 /// ?buildBlock@GameMode@@UEAA_NAEBVBlockPos@@E_N@Z
    continueBuildBlock(_1: object, _2: number): void;	// continueBuildBlock(BlockPos const &,uchar): void	 /// ?continueBuildBlock@GameMode@@UEAAXAEBVBlockPos@@E@Z
    continueDestroyBlock(_1: object, _2: number, _3: object, _4: object): boolean;	// continueDestroyBlock(BlockPos const &,uchar,Vec3 const &,bool &): bool	 /// ?continueDestroyBlock@GameMode@@UEAA_NAEBVBlockPos@@EAEBVVec3@@AEA_N@Z
    destroyBlock(_1: object, _2: number): boolean;	// destroyBlock(BlockPos const &,uchar): bool	 /// ?destroyBlock@GameMode@@UEAA_NAEBVBlockPos@@E@Z
    getMaxPickRange(): number;	// getMaxPickRange(void): float	 /// ?getMaxPickRange@GameMode@@QEAAMXZ
    getPickRange(_1: object, _2: boolean): number;	// getPickRange(InputMode const &,bool): float	 /// ?getPickRange@GameMode@@UEAAMAEBW4InputMode@@_N@Z
    interact(_1: object, _2: object): boolean;	// interact(Actor &,Vec3 const &): bool	 /// ?interact@GameMode@@UEAA_NAEAVActor@@AEBVVec3@@@Z
    releaseUsingItem(): void;	// releaseUsingItem(void): void	 /// ?releaseUsingItem@GameMode@@UEAAXXZ
    startBuildBlock(_1: object, _2: number): void;	// startBuildBlock(BlockPos const &,uchar): void	 /// ?startBuildBlock@GameMode@@UEAAXAEBVBlockPos@@E@Z
    startDestroyBlock(_1: object, _2: number, _3: object): boolean;	// startDestroyBlock(BlockPos const &,uchar,bool &): bool	 /// ?startDestroyBlock@GameMode@@UEAA_NAEBVBlockPos@@EAEA_N@Z
    stopBuildBlock(): void;	// stopBuildBlock(void): void	 /// ?stopBuildBlock@GameMode@@UEAAXXZ
    stopDestroyBlock(_1: object): void;	// stopDestroyBlock(BlockPos const &): void	 /// ?stopDestroyBlock@GameMode@@UEAAXAEBVBlockPos@@@Z
    tick(): void;	// tick(void): void	 /// ?tick@GameMode@@UEAAXXZ
    useItem(_1: object): boolean;	// useItem(ItemStack &): bool	 /// ?useItem@GameMode@@UEAA_NAEAVItemStack@@@Z
    useItemOn(_1: object, _2: object, _3: number, _4: object, _5: object): boolean;	// useItemOn(ItemStack &,BlockPos const &,uchar,Vec3 const &,Block const *): bool	 /// ?useItemOn@GameMode@@UEAA_NAEAVItemStack@@AEBVBlockPos@@EAEBVVec3@@PEBVBlock@@@Z
}
declare class LevelDataWrapper {
    // Attributes 
    levelData: LevelData;
    // Methods 
    // Inherited from LevelDataWrapper
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
    HitResult(_1: object): HitResult;	// HitResult(HitResult &&)	 /// ??0HitResult@@QEAA@$$QEAV0@@Z
    HitResult(_1: object): HitResult;	// HitResult(HitResult const &)	 /// ??0HitResult@@QEAA@AEBV0@@Z
    HitResult(_1: object, _2: object, _3: object, _4: object): HitResult;	// HitResult(Vec3 const &,Vec3 const &,Actor &,Vec3 const &)	 /// ??0HitResult@@QEAA@AEBVVec3@@0AEAVActor@@0@Z
    HitResult(_1: object, _2: object, _3: object): HitResult;	// HitResult(Vec3 const &,Vec3 const &,Vec3 const &)	 /// ??0HitResult@@QEAA@AEBVVec3@@00@Z
    HitResult(): HitResult;	// HitResult(void)	 /// ??0HitResult@@QEAA@XZ
    getEntity(): Actor;	// getEntity(void): class Actor * __ptr64	 /// ?getEntity@HitResult@@QEBAPEAVActor@@XZ
    isHit(): boolean;	// isHit(void): bool	 /// ?isHit@HitResult@@QEBA_NXZ
}
declare class InventoryAction {
    // Attributes 
    type: number;
    sourceType: number;
    slot: number;
    sourceItemDescriptor: ItemDescriptor;
    s_count: number;
    targetItemDescriptor: ItemDescriptor;
    t_count: number;
    sourceItem: ItemStack;
    targetItem: ItemStack;
    // Methods 
    // Inherited from InventoryAction
    InventoryAction(_1: object): InventoryAction;	// InventoryAction(InventoryAction const &)	 /// ??0InventoryAction@@QEAA@AEBV0@@Z
    postLoadItems(_1: object, _2: boolean): void;	// postLoadItems(BlockPalette &,bool): void	 /// ?postLoadItems@InventoryAction@@QEAAXAEAVBlockPalette@@_N@Z
}
declare class InventoryTransactionManager {
    // Attributes 
    owner: Player;
    // Methods 
    // Inherited from InventoryTransactionManager
    forceBalanceTransaction(): void;	// forceBalanceTransaction(void): void	 /// ?forceBalanceTransaction@InventoryTransactionManager@@QEAAXXZ
}
declare class InventoryTransaction {
    // Attributes 
    ptr: object;
    // Methods 
    // Inherited from InventoryTransaction
    InventoryTransaction(_1: object): InventoryTransaction;	// InventoryTransaction(InventoryTransaction const &)	 /// ??0InventoryTransaction@@QEAA@AEBV0@@Z
    addItemToContent(_1: object, _2: number): void;	// addItemToContent(ItemStack const &,int): void	 /// ?addItemToContent@InventoryTransaction@@AEAAXAEBVItemStack@@H@Z
    deserialize(_1: object): bigint;	// deserialize(ReadOnlyBinaryStream &): class InventoryTransaction	 /// ?deserialize@InventoryTransaction@@SA?AV1@AEAVReadOnlyBinaryStream@@@Z
    executeFull(_1: object, _2: boolean): bigint;	// executeFull(Player &,bool): enum InventoryTransactionError	 /// ?executeFull@InventoryTransaction@@QEBA?AW4InventoryTransactionError@@AEAVPlayer@@_N@Z
    forceBalanceTransaction(): void;	// forceBalanceTransaction(void): void	 /// ?forceBalanceTransaction@InventoryTransaction@@QEAAXXZ
    getInventoryTransactionErrorName(_1: unknown): unknown;	// getInventoryTransactionErrorName(InventoryTransactionError): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const	 /// ?getInventoryTransactionErrorName@InventoryTransaction@@SA?BV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@W4InventoryTransactionError@@@Z
    postLoadItems(_1: object, _2: boolean): void;	// postLoadItems(BlockPalette &,bool): void	 /// ?postLoadItems@InventoryTransaction@@QEAAXAEAVBlockPalette@@_N@Z
    serialize(_1: object, _2: boolean): void;	// serialize(BinaryStream &,bool): void	 /// ?serialize@InventoryTransaction@@QEBAXAEAVBinaryStream@@_N@Z
}
declare class ItemDescriptor {
    // Attributes 
    // Methods 
    // Inherited from ItemDescriptor
    ItemDescriptor(_1: object): ItemDescriptor;	// ItemDescriptor(BlockLegacy const &)	 /// ??0ItemDescriptor@@QEAA@AEBVBlockLegacy@@@Z
    ItemDescriptor(_1: object): ItemDescriptor;	// ItemDescriptor(ItemDescriptor &&)	 /// ??0ItemDescriptor@@QEAA@$$QEAV0@@Z
    ItemDescriptor(_1: object): ItemDescriptor;	// ItemDescriptor(ItemDescriptor const &)	 /// ??0ItemDescriptor@@QEAA@AEBV0@@Z
    ItemDescriptor(_1: number, _2: number): ItemDescriptor;	// ItemDescriptor(int,int)	 /// ??0ItemDescriptor@@AEAA@HH@Z
    ItemDescriptor(): ItemDescriptor;	// ItemDescriptor(void)	 /// ??0ItemDescriptor@@QEAA@XZ
    _hasTagOfItem(_1: object): boolean;	// _hasTagOfItem(Item const *): bool	 /// ?_hasTagOfItem@ItemDescriptor@@AEBA_NPEBVItem@@@Z
    _resolveImpl(): void;	// _resolveImpl(void): void	 /// ?_resolveImpl@ItemDescriptor@@AEBAXXZ
    bindType(): void;	// bindType(void): void	 /// ?bindType@ItemDescriptor@@SAXXZ
    fromTag(_1: object): bigint;	// fromTag(CompoundTag const *): class std::optional<class ItemDescriptor>	 /// ?fromTag@ItemDescriptor@@SA?AV?$optional@VItemDescriptor@@@std@@PEBVCompoundTag@@@Z
    getAuxValue(): number;	// getAuxValue(void): short	 /// ?getAuxValue@ItemDescriptor@@QEBAFXZ
    getId(): number;	// getId(void): short	 /// ?getId@ItemDescriptor@@QEBAFXZ
    getItem(): Item;	// getItem(void): class Item const * __ptr64	 /// ?getItem@ItemDescriptor@@QEBAPEBVItem@@XZ
    getLegacyBlock(): unknown;	// getLegacyBlock(void): class WeakPtr<class BlockLegacy> const & __ptr64	 /// ?getLegacyBlock@ItemDescriptor@@QEBAAEBV?$WeakPtr@VBlockLegacy@@@@XZ
    getRawNameId(): bigint;	// getRawNameId(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> >	 /// ?getRawNameId@ItemDescriptor@@QEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
    isDefinedAsItemName(): boolean;	// isDefinedAsItemName(void): bool	 /// ?isDefinedAsItemName@ItemDescriptor@@QEBA_NXZ
    isNull(): boolean;	// isNull(void): bool	 /// ?isNull@ItemDescriptor@@QEBA_NXZ
    isValid(): boolean;	// isValid(void): bool	 /// ?isValid@ItemDescriptor@@QEBA_NXZ
    sameItemAndAux(_1: object): boolean;	// sameItemAndAux(ItemStack const &): bool	 /// ?sameItemAndAux@ItemDescriptor@@QEBA_NAEBVItemStack@@@Z
    save(): bigint;	// save(void): class std::optional<class CompoundTag>	 /// ?save@ItemDescriptor@@QEBA?AV?$optional@VCompoundTag@@@std@@XZ
}
declare class LevelWeakPtr {
    // Attributes 
    ptr: Level;
    // Methods 
    // Inherited from LevelWeakPtr
}
declare class Mat3x4 {
    // Attributes 
    // Methods 
    // Inherited from Mat3x4
}
declare class ItemStack {
    // Attributes 
    itemPtr: ItemPtr;
    vtable: object;
    tag: CompoundTag;
    count: number;
    // Methods 
    // Inherited from ItemStack
    ItemStack(_1: object, _2: number, _3: number): ItemStack;	// ItemStack(Item const &,int,int)	 /// ??0ItemStack@@QEAA@AEBVItem@@HH@Z
    ItemStack(_1: object): ItemStack;	// ItemStack(ItemInstance const &)	 /// ??0ItemStack@@QEAA@AEBVItemInstance@@@Z
    ItemStack(_1: object): ItemStack;	// ItemStack(ItemStack const &)	 /// ??0ItemStack@@QEAA@AEBV0@@Z
    ItemStack(): ItemStack;	// ItemStack(void)	 /// ??0ItemStack@@QEAA@XZ
    _assignNetIdVariant(_1: object): void;	// _assignNetIdVariant(ItemStack const &): void	 /// ?_assignNetIdVariant@ItemStack@@QEBAXAEBV1@@Z
    clone(): bigint;	// clone(void): class ItemStack	 /// ?clone@ItemStack@@QEBA?AV1@XZ
    fromTag(_1: object): bigint;	// fromTag(CompoundTag const &): class ItemStack	 /// ?fromTag@ItemStack@@SA?AV1@AEBVCompoundTag@@@Z
    fromTag(_1: object, _2: object): bigint;	// fromTag(CompoundTag const &,Level &): class ItemStack	 /// ?fromTag@ItemStack@@SA?AV1@AEBVCompoundTag@@AEAVLevel@@@Z
    getDestroySpeed(_1: object): number;	// getDestroySpeed(Block const &): float	 /// ?getDestroySpeed@ItemStack@@QEBAMAEBVBlock@@@Z
    getMaxUseDuration(): number;	// getMaxUseDuration(void): int	 /// ?getMaxUseDuration@ItemStack@@QEBAHXZ
    matchesAndNetIdVariantMatches(_1: object): boolean;	// matchesAndNetIdVariantMatches(ItemStack const &): bool	 /// ?matchesAndNetIdVariantMatches@ItemStack@@QEBA_NAEBV1@@Z
    reinit(_1: object, _2: number): void;	// reinit(BlockLegacy const &,int): void	 /// ?reinit@ItemStack@@UEAAXAEBVBlockLegacy@@H@Z
    reinit(_1: object, _2: number, _3: number): void;	// reinit(Item const &,int,int): void	 /// ?reinit@ItemStack@@UEAAXAEBVItem@@HH@Z
    sameItemAndAuxAndBlockData(_1: object): boolean;	// sameItemAndAuxAndBlockData(ItemStack const &): bool	 /// ?sameItemAndAuxAndBlockData@ItemStack@@QEBA_NAEBV1@@Z
    serverInitNetId(): void;	// serverInitNetId(void): void	 /// ?serverInitNetId@ItemStack@@QEAAXXZ
    setNull(): void;	// setNull(void): void	 /// ?setNull@ItemStack@@UEAAXXZ
    toDebugString(): bigint;	// toDebugString(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> >	 /// ?toDebugString@ItemStack@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
    toString(): bigint;	// toString(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> >	 /// ?toString@ItemStack@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
    tryGetItemStackNetId(): unknown;	// tryGetItemStackNetId(void): class TypedServerNetId<struct ItemStackNetIdTag,int,0> const * __ptr64	 /// ?tryGetItemStackNetId@ItemStack@@QEBAPEBV?$TypedServerNetId@UItemStackNetIdTag@@H$0A@@@XZ
    use(_1: object): ItemStack;	// use(Player &): class ItemStack & __ptr64	 /// ?use@ItemStack@@QEAAAEAV1@AEAVPlayer@@@Z
    useOn(_1: object, _2: number, _3: number, _4: number, _5: number, _6: object): boolean;	// useOn(Actor &,int,int,int,uchar,Vec3 const &): bool	 /// ?useOn@ItemStack@@QEAA_NAEAVActor@@HHHEAEBVVec3@@@Z
}
declare class Level {
    // Attributes 
    portalForcer: object;
    blockDefinitionGroup: AnyPtr;
    photoStorage: object;
    vtable: object;
    hitResult: HitResult;
    projectileFactory: object;
    userList: SDKVectorContainer;
    packetSender: object;
    dimensionMap: SDKUnorderedMap;
    playerList: SDKVectorContainer;
    actorInfoRegistry: AnyPtr;
    random: Random;
    runtimeEntityMap: SDKUnorderedMap;
    recipes: object;
    savedDataStorage: object;
    levelDataWrapper: LevelDataWrapper;
    random2: Random;
    blockComponentFactory: AnyPtr;
    spawner: object;
    immersiveReaderString: SDKText;
    mobList: SDKVectorContainer;
    actorPropertyGroup: AnyPtr;
    npcDialogueStorage: object;
    behaviorFactory: AnyPtr;
    behaviorTreeGroup: AnyPtr;
    playerListUUID: SDKUnorderedMap;
    blockPalette: AnyPtr;
    blockReducer: AnyPtr;
    globalActors: SDKVectorContainer;
    spinLock: SpinLock;
    liquidHitResult: HitResult;
    isSimPaused: number;
    // Methods 
    // Inherited from Level
    _checkUserStorage(): void;	// _checkUserStorage(void): void	 /// ?_checkUserStorage@Level@@UEAAXXZ
    _clientHandleAddOwnedEntity(_1: unknown): bigint;	// _clientHandleAddOwnedEntity(EntityNetId): class StackRefResultT<struct EntityRefTraits>	 /// ?_clientHandleAddOwnedEntity@Level@@UEAA?AV?$StackRefResultT@UEntityRefTraits@@@@VEntityNetId@@@Z
    _clientHandleRemoveOwnedEntity(_1: unknown): void;	// _clientHandleRemoveOwnedEntity(EntityNetId): void	 /// ?_clientHandleRemoveOwnedEntity@Level@@UEAAXVEntityNetId@@@Z
    _createMapSavedData(_1: object): unknown;	// _createMapSavedData(ActorUniqueID const &): class MapItemSavedData & __ptr64	 /// ?_createMapSavedData@Level@@AEAAAEAVMapItemSavedData@@AEBUActorUniqueID@@@Z
    _destroyEffect(_1: object, _2: object, _3: number): void;	// _destroyEffect(BlockPos const &,Block const &,int): void	 /// ?_destroyEffect@Level@@UEAAXAEBVBlockPos@@AEBVBlock@@H@Z
    _handleChangeDimensionRequests(): void;	// _handleChangeDimensionRequests(void): void	 /// ?_handleChangeDimensionRequests@Level@@AEAAXXZ
    _handlePlayerSuspension(): void;	// _handlePlayerSuspension(void): void	 /// ?_handlePlayerSuspension@Level@@AEAAXXZ
    _playerChangeDimension(_1: object, _2: object): boolean;	// _playerChangeDimension(Player *,ChangeDimensionRequest &): bool	 /// ?_playerChangeDimension@Level@@AEAA_NPEAVPlayer@@AEAVChangeDimensionRequest@@@Z
    _syncTime(_1: number): void;	// _syncTime(int): void	 /// ?_syncTime@Level@@AEAAXH@Z
    addBossEventListener(_1: object): void;	// addBossEventListener(BossEventListener *): void	 /// ?addBossEventListener@Level@@UEAAXPEAVBossEventListener@@@Z
    addBreakingItemParticleEffect(_1: object, _2: unknown, _3: object, _4: boolean): void;	// addBreakingItemParticleEffect(Vec3 const &,ParticleType,TextureUVCoordinateSet const &,bool): void	 /// ?addBreakingItemParticleEffect@Level@@UEAAXAEBVVec3@@W4ParticleType@@AEBUTextureUVCoordinateSet@@_N@Z
    addListener(_1: object): void;	// addListener(LevelListener &): void	 /// ?addListener@Level@@UEAAXAEAVLevelListener@@@Z
    addParticle(_1: unknown, _2: object, _3: object, _4: number, _5: object, _6: boolean): unknown;	// addParticle(ParticleType,Vec3 const &,Vec3 const &,int,CompoundTag const *,bool): class Particle * __ptr64	 /// ?addParticle@Level@@UEAAPEAVParticle@@W4ParticleType@@AEBVVec3@@1HPEBVCompoundTag@@_N@Z
    addParticleEffect(_1: object, _2: object, _3: object): void;	// addParticleEffect(HashedString const &,Vec3 const &,MolangVariableMap const &): void	 /// ?addParticleEffect@Level@@UEAAXAEBVHashedString@@AEBVVec3@@AEBVMolangVariableMap@@@Z
    addSideBySideLevelComponents(_1: object, _2: boolean): void;	// addSideBySideLevelComponents(EntityContext &,bool): void	 /// ?addSideBySideLevelComponents@Level@@SAXAEAVEntityContext@@_N@Z
    addTerrainParticleEffect(_1: object, _2: object, _3: object, _4: number, _5: number, _6: number): void;	// addTerrainParticleEffect(BlockPos const &,Block const &,Vec3 const &,float,float,float): void	 /// ?addTerrainParticleEffect@Level@@UEAAXAEBVBlockPos@@AEBVBlock@@AEBVVec3@@MMM@Z
    addTerrainSlideEffect(_1: object, _2: object, _3: object, _4: number, _5: number, _6: number): void;	// addTerrainSlideEffect(BlockPos const &,Block const &,Vec3 const &,float,float,float): void	 /// ?addTerrainSlideEffect@Level@@UEAAXAEBVBlockPos@@AEBVBlock@@AEBVVec3@@MMM@Z
    animateTick(_1: object): void;	// animateTick(Actor &): void	 /// ?animateTick@Level@@UEAAXAEAVActor@@@Z
    applyLiquidPhysicsToActor(_1: object, _2: unknown): void;	// applyLiquidPhysicsToActor(Actor *,MaterialType): void	 /// ?applyLiquidPhysicsToActor@Level@@UEAAXPEAVActor@@W4MaterialType@@@Z
    areBossEventListenersReady(): boolean;	// areBossEventListenersReady(void): bool	 /// ?areBossEventListenersReady@Level@@UEAA_NXZ
    broadcastActorEvent(_1: object, _2: unknown, _3: number): void;	// broadcastActorEvent(Actor &,ActorEvent,int): void	 /// ?broadcastActorEvent@Level@@UEAAXAEAVActor@@W4ActorEvent@@H@Z
    broadcastBossEvent(_1: unknown): void;	// broadcastBossEvent(BossEventUpdateType): void	 /// ?broadcastBossEvent@Level@@UEAAXW4BossEventUpdateType@@@Z
    broadcastBossEvent(_1: unknown, _2: object, _3: object): void;	// broadcastBossEvent(BossEventUpdateType,ActorUniqueID const &,BossEventPacket const &): void	 /// ?broadcastBossEvent@Level@@UEAAXW4BossEventUpdateType@@AEBUActorUniqueID@@AEBVBossEventPacket@@@Z
    broadcastLevelEvent(_1: unknown, _2: object, _3: object): void;	// broadcastLevelEvent(LevelEvent,CompoundTag const &,UserEntityIdentifierComponent const *): void	 /// ?broadcastLevelEvent@Level@@UEAAXW4LevelEvent@@AEBVCompoundTag@@PEBVUserEntityIdentifierComponent@@@Z
    broadcastLevelEvent(_1: unknown, _2: object, _3: number, _4: object): void;	// broadcastLevelEvent(LevelEvent,Vec3 const &,int,UserEntityIdentifierComponent const *): void	 /// ?broadcastLevelEvent@Level@@UEAAXW4LevelEvent@@AEBVVec3@@HPEBVUserEntityIdentifierComponent@@@Z
    broadcastLocalEvent(_1: object, _2: unknown, _3: object, _4: object): void;	// broadcastLocalEvent(BlockSource &,LevelEvent,Vec3 const &,Block const &): void	 /// ?broadcastLocalEvent@Level@@UEAAXAEAVBlockSource@@W4LevelEvent@@AEBVVec3@@AEBVBlock@@@Z
    broadcastLocalEvent(_1: object, _2: unknown, _3: object, _4: number): void;	// broadcastLocalEvent(BlockSource &,LevelEvent,Vec3 const &,int): void	 /// ?broadcastLocalEvent@Level@@UEAAXAEAVBlockSource@@W4LevelEvent@@AEBVVec3@@H@Z
    broadcastSoundEvent(_1: object, _2: unknown, _3: object, _4: object, _5: object, _6: boolean, _7: boolean): void;	// broadcastSoundEvent(BlockSource &,LevelSoundEvent,Vec3 const &,Block const &,ActorDefinitionIdentifier const &,bool,bool): void	 /// ?broadcastSoundEvent@Level@@UEAAXAEAVBlockSource@@W4LevelSoundEvent@@AEBVVec3@@AEBVBlock@@AEBUActorDefinitionIdentifier@@_N5@Z
    broadcastSoundEvent(_1: object, _2: unknown, _3: object, _4: number, _5: object, _6: boolean, _7: boolean): void;	// broadcastSoundEvent(BlockSource &,LevelSoundEvent,Vec3 const &,int,ActorDefinitionIdentifier const &,bool,bool): void	 /// ?broadcastSoundEvent@Level@@UEAAXAEAVBlockSource@@W4LevelSoundEvent@@AEBVVec3@@HAEBUActorDefinitionIdentifier@@_N4@Z
    broadcastSoundEvent(_1: object, _2: unknown, _3: object, _4: number, _5: object, _6: boolean, _7: boolean): void;	// broadcastSoundEvent(Dimension &,LevelSoundEvent,Vec3 const &,int,ActorDefinitionIdentifier const &,bool,bool): void	 /// ?broadcastSoundEvent@Level@@UEAAXAEAVDimension@@W4LevelSoundEvent@@AEBVVec3@@HAEBUActorDefinitionIdentifier@@_N4@Z
    copyAndLockMap(_1: unknown, _2: unknown): boolean;	// copyAndLockMap(ActorUniqueID,ActorUniqueID): bool	 /// ?copyAndLockMap@Level@@UEAA_NUActorUniqueID@@0@Z
    countUsersWithMatchingNetworkId(_1: object): number;	// countUsersWithMatchingNetworkId(NetworkIdentifier const &): int	 /// ?countUsersWithMatchingNetworkId@Level@@UEBAHAEBVNetworkIdentifier@@@Z
    createPhotoStorage(): void;	// createPhotoStorage(void): void	 /// ?createPhotoStorage@Level@@UEAAXXZ
    denyEffect(_1: object, _2: object): void;	// denyEffect(BlockSource &,Vec3 const &): void	 /// ?denyEffect@Level@@UEAAXAEAVBlockSource@@AEBVVec3@@@Z
    destroyBlock(_1: object, _2: object, _3: boolean): boolean;	// destroyBlock(BlockSource &,BlockPos const &,bool): bool	 /// ?destroyBlock@Level@@UEAA_NAEAVBlockSource@@AEBVBlockPos@@_N@Z
    digestServerBlockProperties(_1: object, _2: bigint): void;	// digestServerBlockProperties(StartGamePacket const &,uint): void	 /// ?digestServerBlockProperties@Level@@UEAAXAEBVStartGamePacket@@I@Z
    digestServerItemComponents(_1: object): void;	// digestServerItemComponents(ItemComponentPacket const &): void	 /// ?digestServerItemComponents@Level@@UEAAXAEBVItemComponentPacket@@@Z
    expandMapByID(_1: unknown, _2: boolean): bigint;	// expandMapByID(ActorUniqueID,bool): struct ActorUniqueID	 /// ?expandMapByID@Level@@UEAA?AUActorUniqueID@@U2@_N@Z
    explode(_1: object, _2: object, _3: object, _4: number, _5: boolean, _6: boolean, _7: number, _8: boolean): void;	// explode(BlockSource &,Actor *,Vec3 const &,float,bool,bool,float,bool): void	 /// ?explode@Level@@UEAAXAEAVBlockSource@@PEAVActor@@AEBVVec3@@M_N3M3@Z
    explode(_1: object): void;	// explode(Explosion &): void	 /// ?explode@Level@@UEAAXAEAVExplosion@@@Z
    extinguishFire(_1: object, _2: object, _3: number): boolean;	// extinguishFire(BlockSource &,BlockPos const &,uchar): bool	 /// ?extinguishFire@Level@@UEAA_NAEAVBlockSource@@AEBVBlockPos@@E@Z
    fetchEntity(_1: unknown, _2: boolean): Actor;	// fetchEntity(ActorUniqueID,bool): class Actor * __ptr64	 /// ?fetchEntity@Level@@UEBAPEAVActor@@UActorUniqueID@@_N@Z
    findPath(_1: object, _2: object, _3: object): bigint;	// findPath(Actor &,Actor &,NavigationComponent &): class std::unique_ptr<class Path,struct std::default_delete<class Path> >	 /// ?findPath@Level@@UEAA?AV?$unique_ptr@VPath@@U?$default_delete@VPath@@@std@@@std@@AEAVActor@@0AEAVNavigationComponent@@@Z
    findPath(_1: object, _2: number, _3: number, _4: number, _5: object): bigint;	// findPath(Actor &,int,int,int,NavigationComponent &): class std::unique_ptr<class Path,struct std::default_delete<class Path> >	 /// ?findPath@Level@@UEAA?AV?$unique_ptr@VPath@@U?$default_delete@VPath@@@std@@@std@@AEAVActor@@HHHAEAVNavigationComponent@@@Z
    flushRunTimeLighting(): void;	// flushRunTimeLighting(void): void	 /// ?flushRunTimeLighting@Level@@UEAAXXZ
    forceRemoveEntity(_1: object, _2: boolean): void;	// forceRemoveEntity(Actor &,bool): void	 /// ?forceRemoveEntity@Level@@UEAAXAEAVActor@@_N@Z
    getActiveAutonomousActors(): unknown;	// getActiveAutonomousActors(void): class std::vector<class WeakEntityRef,class std::allocator<class WeakEntityRef> > & __ptr64	 /// ?getActiveAutonomousActors@Level@@UEAAAEAV?$vector@VWeakEntityRef@@V?$allocator@VWeakEntityRef@@@std@@@std@@XZ
    getActivePlayerCount(): number;	// getActivePlayerCount(void): int	 /// ?getActivePlayerCount@Level@@UEBAHXZ
    getActiveUsersCount(): number;	// getActiveUsersCount(void): int	 /// ?getActiveUsersCount@Level@@UEBAHXZ
    getActorAnimationControllerGroup(): unknown;	// getActorAnimationControllerGroup(void): class ActorAnimationControllerGroup * __ptr64	 /// ?getActorAnimationControllerGroup@Level@@UEBAPEAVActorAnimationControllerGroup@@XZ
    getActorAnimationGroup(): bigint;	// getActorAnimationGroup(void): class gsl::not_null<class Bedrock::NonOwnerPointer<class ActorAnimationGroup> >	 /// ?getActorAnimationGroup@Level@@UEBA?AV?$not_null@V?$NonOwnerPointer@VActorAnimationGroup@@@Bedrock@@@gsl@@XZ
    getActorEventCoordinator(): unknown;	// getActorEventCoordinator(void): class ActorEventCoordinator & __ptr64	 /// ?getActorEventCoordinator@Level@@UEAAAEAVActorEventCoordinator@@XZ
    getActorFactory(): unknown;	// getActorFactory(void): class ActorFactory const & __ptr64	 /// ?getActorFactory@Level@@UEBAAEBVActorFactory@@XZ
    getActorInfoRegistry(): unknown;	// getActorInfoRegistry(void): class ActorInfoRegistry * __ptr64	 /// ?getActorInfoRegistry@Level@@UEAAPEAVActorInfoRegistry@@XZ
    getActorPropertyGroup(): unknown;	// getActorPropertyGroup(void): class PropertyGroupManager & __ptr64	 /// ?getActorPropertyGroup@Level@@UEBAAEAVPropertyGroupManager@@XZ
    getAdventureSettings(): bigint;	// getAdventureSettings(void): struct AdventureSettings const & __ptr64	 /// ?getAdventureSettings@Level@@QEBAAEBUAdventureSettings@@XZ
    getBehaviorFactory(): unknown;	// getBehaviorFactory(void): class BehaviorFactory & __ptr64	 /// ?getBehaviorFactory@Level@@UEBAAEAVBehaviorFactory@@XZ
    getBehaviorTreeGroup(): unknown;	// getBehaviorTreeGroup(void): class BehaviorTreeGroup & __ptr64	 /// ?getBehaviorTreeGroup@Level@@UEBAAEAVBehaviorTreeGroup@@XZ
    getBiomeComponentFactory(): unknown;	// getBiomeComponentFactory(void): class BiomeComponentFactory const & __ptr64	 /// ?getBiomeComponentFactory@Level@@UEBAAEBVBiomeComponentFactory@@XZ
    getBiomeRegistry(): unknown;	// getBiomeRegistry(void): class BiomeRegistry const & __ptr64	 /// ?getBiomeRegistry@Level@@UEBAAEBVBiomeRegistry@@XZ
    getBlockComponentFactory(): unknown;	// getBlockComponentFactory(void): class BlockComponentFactory const & __ptr64	 /// ?getBlockComponentFactory@Level@@UEBAAEBVBlockComponentFactory@@XZ
    getBlockDefinitions(): unknown;	// getBlockDefinitions(void): class BlockDefinitionGroup * __ptr64	 /// ?getBlockDefinitions@Level@@UEBAPEAVBlockDefinitionGroup@@XZ
    getBlockEventCoordinator(): unknown;	// getBlockEventCoordinator(void): class BlockEventCoordinator & __ptr64	 /// ?getBlockEventCoordinator@Level@@UEAAAEAVBlockEventCoordinator@@XZ
    getBlockPalette(): unknown;	// getBlockPalette(void): class BlockPalette const & __ptr64	 /// ?getBlockPalette@Level@@UEBAAEBVBlockPalette@@XZ
    getBlockReducer(): unknown;	// getBlockReducer(void): class BlockReducer * __ptr64	 /// ?getBlockReducer@Level@@UEBAPEAVBlockReducer@@XZ
    getBlockRegistry(): bigint;	// getBlockRegistry(void): class std::weak_ptr<class BlockTypeRegistry>	 /// ?getBlockRegistry@Level@@UEBA?AV?$weak_ptr@VBlockTypeRegistry@@@std@@XZ
    getChunkTickRange(): bigint;	// getChunkTickRange(void): unsigned int	 /// ?getChunkTickRange@Level@@UEBAIXZ
    getClientPlayerEventCoordinator(): unknown;	// getClientPlayerEventCoordinator(void): class ClientPlayerEventCoordinator & __ptr64	 /// ?getClientPlayerEventCoordinator@Level@@UEAAAEAVClientPlayerEventCoordinator@@XZ
    getCurrentServerTick(): bigint;	// getCurrentServerTick(void): struct Tick const	 /// ?getCurrentServerTick@Level@@UEBA?BUTick@@XZ
    getCurrentTick(): bigint;	// getCurrentTick(void): struct Tick const & __ptr64	 /// ?getCurrentTick@Level@@UEBAAEBUTick@@XZ
    getDefaultAbilities(): Abilities;	// getDefaultAbilities(void): class Abilities & __ptr64	 /// ?getDefaultAbilities@Level@@UEAAAEAVAbilities@@XZ
    getDefaultGameType(): bigint;	// getDefaultGameType(void): enum GameType	 /// ?getDefaultGameType@Level@@UEBA?AW4GameType@@XZ
    getDefaultSpawn(): BlockPos;	// getDefaultSpawn(void): class BlockPos const & __ptr64	 /// ?getDefaultSpawn@Level@@UEBAAEBVBlockPos@@XZ
    getDifficulty(): bigint;	// getDifficulty(void): enum Difficulty	 /// ?getDifficulty@Level@@UEBA?AW4Difficulty@@XZ
    getDimensionConversionData(): bigint;	// getDimensionConversionData(void): class DimensionConversionData	 /// ?getDimensionConversionData@Level@@UEBA?AVDimensionConversionData@@XZ
    getDimensionDefinitionGroup(): unknown;	// getDimensionDefinitionGroup(void): class std::optional<class DimensionDefinitionGroup> const	 /// ?getDimensionDefinitionGroup@Level@@UEBA?BV?$optional@VDimensionDefinitionGroup@@@std@@XZ
    getDimensionFactory(): unknown;	// getDimensionFactory(void): class Factory<class Dimension,class Level & __ptr64,class Scheduler & __ptr64> const & __ptr64	 /// ?getDimensionFactory@Level@@UEBAAEBV?$Factory@VDimension@@AEAVLevel@@AEAVScheduler@@@@XZ
    getEducationLevelSettings(): unknown;	// getEducationLevelSettings(void): class std::optional<struct EducationLevelSettings> const & __ptr64	 /// ?getEducationLevelSettings@Level@@UEBAAEBV?$optional@UEducationLevelSettings@@@std@@XZ
    getEntities(): unknown;	// getEntities(void): class std::vector<class OwnerPtrT<struct EntityRefTraits>,class std::allocator<class OwnerPtrT<struct EntityRefTraits> > > const & __ptr64	 /// ?getEntities@Level@@UEBAAEBV?$vector@V?$OwnerPtrT@UEntityRefTraits@@@@V?$allocator@V?$OwnerPtrT@UEntityRefTraits@@@@@std@@@std@@XZ
    getEntityDefinitions(): unknown;	// getEntityDefinitions(void): class ActorDefinitionGroup * __ptr64	 /// ?getEntityDefinitions@Level@@UEBAPEAVActorDefinitionGroup@@XZ
    getEntityRegistry(): bigint;	// getEntityRegistry(void): class StackRefResultT<struct EntityRegistryConstRefTraits>	 /// ?getEntityRegistry@Level@@UEBA?AV?$StackRefResultT@UEntityRegistryConstRefTraits@@@@XZ
    getEntitySystems(): unknown;	// getEntitySystems(void): class EntitySystems & __ptr64	 /// ?getEntitySystems@Level@@UEAAAEAVEntitySystems@@XZ
    getEventing(): unknown;	// getEventing(void): class IMinecraftEventing & __ptr64	 /// ?getEventing@Level@@UEAAAEAVIMinecraftEventing@@XZ
    getFeatureRegistry(): unknown;	// getFeatureRegistry(void): class FeatureRegistry const & __ptr64	 /// ?getFeatureRegistry@Level@@UEBAAEBVFeatureRegistry@@XZ
    getFeatureTypeFactory(): unknown;	// getFeatureTypeFactory(void): class FeatureTypeFactory const & __ptr64	 /// ?getFeatureTypeFactory@Level@@UEBAAEBVFeatureTypeFactory@@XZ
    getGameRules(): unknown;	// getGameRules(void): class GameRules const & __ptr64	 /// ?getGameRules@Level@@UEBAAEBVGameRules@@XZ
    getHitResult(): HitResult;	// getHitResult(void): class HitResult & __ptr64	 /// ?getHitResult@Level@@UEAAAEAVHitResult@@XZ
    getIOTasksGroup(): unknown;	// getIOTasksGroup(void): class TaskGroup & __ptr64	 /// ?getIOTasksGroup@Level@@UEAAAEAVTaskGroup@@XZ
    getImmersiveReaderString(): unknown;	// getImmersiveReaderString(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64	 /// ?getImmersiveReaderString@Level@@UEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
    getInternalComponentRegistry(): unknown;	// getInternalComponentRegistry(void): class InternalComponentRegistry & __ptr64	 /// ?getInternalComponentRegistry@Level@@UEBAAEAVInternalComponentRegistry@@XZ
    getItemEventCoordinator(): unknown;	// getItemEventCoordinator(void): class ItemEventCoordinator & __ptr64	 /// ?getItemEventCoordinator@Level@@UEAAAEAVItemEventCoordinator@@XZ
    getItemRegistry(): bigint;	// getItemRegistry(void): class std::weak_ptr<class ItemRegistry>	 /// ?getItemRegistry@Level@@UEBA?AV?$weak_ptr@VItemRegistry@@@std@@XZ
    getJigsawStructureRegistry(): unknown;	// getJigsawStructureRegistry(void): class JigsawStructureRegistry const & __ptr64	 /// ?getJigsawStructureRegistry@Level@@UEBAAEBVJigsawStructureRegistry@@XZ
    getLANBroadcast(): boolean;	// getLANBroadcast(void): bool	 /// ?getLANBroadcast@Level@@UEBA_NXZ
    getLANBroadcastIntent(): boolean;	// getLANBroadcastIntent(void): bool	 /// ?getLANBroadcastIntent@Level@@UEBA_NXZ
    getLevelData(): LevelData;	// getLevelData(void): class LevelData const & __ptr64	 /// ?getLevelData@Level@@UEBAAEBVLevelData@@XZ
    getLevelEntity(): bigint;	// getLevelEntity(void): class WeakRefT<struct EntityRefTraits>	 /// ?getLevelEntity@Level@@UEAA?AV?$WeakRefT@UEntityRefTraits@@@@XZ
    getLevelEventCoordinator(): unknown;	// getLevelEventCoordinator(void): class LevelEventCoordinator & __ptr64	 /// ?getLevelEventCoordinator@Level@@UEAAAEAVLevelEventCoordinator@@XZ
    getLevelId(): bigint;	// getLevelId(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> >	 /// ?getLevelId@Level@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
    getLevelStorage(): unknown;	// getLevelStorage(void): class LevelStorage const & __ptr64	 /// ?getLevelStorage@Level@@UEBAAEBVLevelStorage@@XZ
    getLightTextureImageBuilderFactory(): unknown;	// getLightTextureImageBuilderFactory(void): class Factory<class BaseLightTextureImageBuilder,class Level & __ptr64,class Scheduler & __ptr64> const & __ptr64	 /// ?getLightTextureImageBuilderFactory@Level@@UEBAAEBV?$Factory@VBaseLightTextureImageBuilder@@AEAVLevel@@AEAVScheduler@@@@XZ
    getLiquidHitResult(): HitResult;	// getLiquidHitResult(void): class HitResult & __ptr64	 /// ?getLiquidHitResult@Level@@UEAAAEAVHitResult@@XZ
    getLootTables(): unknown;	// getLootTables(void): class LootTables & __ptr64	 /// ?getLootTables@Level@@UEAAAEAVLootTables@@XZ
    getMapSavedData(_1: unknown): unknown;	// getMapSavedData(ActorUniqueID): class MapItemSavedData * __ptr64	 /// ?getMapSavedData@Level@@UEAAPEAVMapItemSavedData@@UActorUniqueID@@@Z
    getMapSavedData(_1: object): unknown;	// getMapSavedData(CompoundTag const *): class MapItemSavedData * __ptr64	 /// ?getMapSavedData@Level@@UEAAPEAVMapItemSavedData@@PEBVCompoundTag@@@Z
    getMob(_1: unknown): Mob;	// getMob(ActorUniqueID): class Mob * __ptr64	 /// ?getMob@Level@@UEBAPEAVMob@@UActorUniqueID@@@Z
    getMultiplayerGameIntent(): boolean;	// getMultiplayerGameIntent(void): bool	 /// ?getMultiplayerGameIntent@Level@@UEBA_NXZ
    getNetEventCallback(): bigint;	// getNetEventCallback(void): class Bedrock::NonOwnerPointer<class NetEventCallback>	 /// ?getNetEventCallback@Level@@UEBA?AV?$NonOwnerPointer@VNetEventCallback@@@Bedrock@@XZ
    getNetherScale(): number;	// getNetherScale(void): int	 /// ?getNetherScale@Level@@UEBAHXZ
    getNewPlayerId(): number;	// getNewPlayerId(void): int	 /// ?getNewPlayerId@Level@@UEBAHXZ
    getNewUniqueID(): bigint;	// getNewUniqueID(void): struct ActorUniqueID	 /// ?getNewUniqueID@Level@@UEAA?AUActorUniqueID@@XZ
    getNextRuntimeID(): bigint;	// getNextRuntimeID(void): class ActorRuntimeID	 /// ?getNextRuntimeID@Level@@UEAA?AVActorRuntimeID@@XZ
    getNpcDialogueStorage(): unknown;	// getNpcDialogueStorage(void): class NpcDialogueStorage * __ptr64	 /// ?getNpcDialogueStorage@Level@@QEAAPEAVNpcDialogueStorage@@XZ
    getNumRemotePlayers(): number;	// getNumRemotePlayers(void): int	 /// ?getNumRemotePlayers@Level@@UEAAHXZ
    getOwnedInactiveAutonomousActors(): unknown;	// getOwnedInactiveAutonomousActors(void): class std::vector<class OwnerPtrT<struct EntityRefTraits>,class std::allocator<class OwnerPtrT<struct EntityRefTraits> > > & __ptr64	 /// ?getOwnedInactiveAutonomousActors@Level@@UEAAAEAV?$vector@V?$OwnerPtrT@UEntityRefTraits@@@@V?$allocator@V?$OwnerPtrT@UEntityRefTraits@@@@@std@@@std@@XZ
    getPacketSender(): unknown;	// getPacketSender(void): class PacketSender * __ptr64	 /// ?getPacketSender@Level@@UEBAPEAVPacketSender@@XZ
    getPauseManager(): bigint;	// getPauseManager(void): class StackRefResultT<struct SharePtrRefTraits<class PauseManager const> >	 /// ?getPauseManager@Level@@UEBA?AV?$StackRefResultT@U?$SharePtrRefTraits@$$CBVPauseManager@@@@@@XZ
    getPhotoStorage(): unknown;	// getPhotoStorage(void): class PhotoStorage & __ptr64	 /// ?getPhotoStorage@Level@@UEAAAEAVPhotoStorage@@XZ
    getPlatformBroadcastIntent(): bigint;	// getPlatformBroadcastIntent(void): enum Social::GamePublishSetting	 /// ?getPlatformBroadcastIntent@Level@@UEBA?AW4GamePublishSetting@Social@@XZ
    getPlatformBroadcastMode(): bigint;	// getPlatformBroadcastMode(void): enum Social::GamePublishSetting	 /// ?getPlatformBroadcastMode@Level@@UEBA?AW4GamePublishSetting@Social@@XZ
    getPlayer(_1: unknown): Player;	// getPlayer(ActorUniqueID): class Player * __ptr64	 /// ?getPlayer@Level@@UEBAPEAVPlayer@@UActorUniqueID@@@Z
    getPlayer(_1: object): Player;	// getPlayer(mce::UUID const &): class Player * __ptr64	 /// ?getPlayer@Level@@UEBAPEAVPlayer@@AEBVUUID@mce@@@Z
    getPlayerAbilities(_1: object): Abilities;	// getPlayerAbilities(ActorUniqueID const &): class Abilities * __ptr64	 /// ?getPlayerAbilities@Level@@UEAAPEAVAbilities@@AEBUActorUniqueID@@@Z
    getPlayerColor(_1: object): bigint;	// getPlayerColor(Player const &): class mce::Color	 /// ?getPlayerColor@Level@@UEBA?AVColor@mce@@AEBVPlayer@@@Z
    getPlayerList(): bigint;	 /// ?getPlayerList@Level@@UEBAAEBV?$unordered_map@VUUID@mce@@VPlayerListEntry@@U?$hash@VUUID@mce@@@std@@U?$equal_to@VUUID@mce@@@5@V?$allocator@U?$pair@$$CBVUUID@mce@@VPlayerListEntry@@@std@@@5@@std@@XZ
    getPlayerMovementSettings(): bigint;	// getPlayerMovementSettings(void): struct PlayerMovementSettings const & __ptr64	 /// ?getPlayerMovementSettings@Level@@UEBAAEBUPlayerMovementSettings@@XZ
    getPlayerNames(): bigint;	// getPlayerNames(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> >	 /// ?getPlayerNames@Level@@UEAA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
    getPlayerPlatformOnlineId(_1: object): unknown;	// getPlayerPlatformOnlineId(mce::UUID const &): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64	 /// ?getPlayerPlatformOnlineId@Level@@UEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@AEBVUUID@mce@@@Z
    getPlayerXUID(_1: object): unknown;	// getPlayerXUID(mce::UUID const &): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64	 /// ?getPlayerXUID@Level@@UEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@AEBVUUID@mce@@@Z
    getPortalForcer(): unknown;	// getPortalForcer(void): class PortalForcer & __ptr64	 /// ?getPortalForcer@Level@@UEAAAEAVPortalForcer@@XZ
    getPositionTrackerDBClient(): unknown;	// getPositionTrackerDBClient(void): class PositionTrackingDB::PositionTrackingDBClient * __ptr64	 /// ?getPositionTrackerDBClient@Level@@UEBAPEAVPositionTrackingDBClient@PositionTrackingDB@@XZ
    getPrimaryLocalPlayer(): Player;	// getPrimaryLocalPlayer(void): class Player * __ptr64	 /// ?getPrimaryLocalPlayer@Level@@UEBAPEAVPlayer@@XZ
    getProjectileFactory(): unknown;	// getProjectileFactory(void): class ProjectileFactory & __ptr64	 /// ?getProjectileFactory@Level@@UEBAAEAVProjectileFactory@@XZ
    getRandom(): Random;	// getRandom(void): class Random & __ptr64	 /// ?getRandom@Level@@UEBAAEAVRandom@@XZ
    getRandomPlayer(): Player;	// getRandomPlayer(void): class Player * __ptr64	 /// ?getRandomPlayer@Level@@UEAAPEAVPlayer@@XZ
    getRecipes(): unknown;	// getRecipes(void): class Recipes & __ptr64	 /// ?getRecipes@Level@@UEBAAEAVRecipes@@XZ
    getRegisteredBorderBlock(): unknown;	// getRegisteredBorderBlock(void): class BlockLegacy const & __ptr64	 /// ?getRegisteredBorderBlock@Level@@UEBAAEBVBlockLegacy@@XZ
    getRemotePlayerEventCoordinator(): unknown;	// getRemotePlayerEventCoordinator(void): class PlayerEventCoordinator & __ptr64	 /// ?getRemotePlayerEventCoordinator@Level@@UEAAAEAVPlayerEventCoordinator@@XZ
    getRuntimeActorList(): bigint;	// getRuntimeActorList(void): class std::vector<class Actor * __ptr64,class std::allocator<class Actor * __ptr64> >	 /// ?getRuntimeActorList@Level@@UEBA?AV?$vector@PEAVActor@@V?$allocator@PEAVActor@@@std@@@std@@XZ
    getRuntimeEntity(_1: unknown, _2: boolean): Actor;	// getRuntimeEntity(ActorRuntimeID,bool): class Actor * __ptr64	 /// ?getRuntimeEntity@Level@@UEBAPEAVActor@@VActorRuntimeID@@_N@Z
    getRuntimePlayer(_1: unknown): Player;	// getRuntimePlayer(ActorRuntimeID): class Player * __ptr64	 /// ?getRuntimePlayer@Level@@UEBAPEAVPlayer@@VActorRuntimeID@@@Z
    getSavedData(): unknown;	// getSavedData(void): class SavedDataStorage & __ptr64	 /// ?getSavedData@Level@@UEBAAEAVSavedDataStorage@@XZ
    getScoreboard(): unknown;	// getScoreboard(void): class Scoreboard & __ptr64	 /// ?getScoreboard@Level@@UEAAAEAVScoreboard@@XZ
    getScreenshotsFolder(): bigint;	// getScreenshotsFolder(void): class Core::PathBuffer<class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > >	 /// ?getScreenshotsFolder@Level@@UEBA?AV?$PathBuffer@V?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@@Core@@XZ
    getSeed(): bigint;	// getSeed(void): unsigned int	 /// ?getSeed@Level@@UEAAIXZ
    getServerNetworkEventCoordinator(): unknown;	// getServerNetworkEventCoordinator(void): class ServerNetworkEventCoordinator & __ptr64	 /// ?getServerNetworkEventCoordinator@Level@@UEAAAEAVServerNetworkEventCoordinator@@XZ
    getServerPlayerEventCoordinator(): unknown;	// getServerPlayerEventCoordinator(void): class ServerPlayerEventCoordinator & __ptr64	 /// ?getServerPlayerEventCoordinator@Level@@UEAAAEAVServerPlayerEventCoordinator@@XZ
    getSimPaused(): boolean;	// getSimPaused(void): bool	 /// ?getSimPaused@Level@@UEAA_NXZ
    getSoundPlayer(): bigint;	// getSoundPlayer(void): class gsl::not_null<class Bedrock::NonOwnerPointer<class SoundPlayerInterface> >	 /// ?getSoundPlayer@Level@@UEBA?AV?$not_null@V?$NonOwnerPointer@VSoundPlayerInterface@@@Bedrock@@@gsl@@XZ
    getSpawnGroupRegistry(): unknown;	// getSpawnGroupRegistry(void): class SpawnGroupRegistry const * __ptr64	 /// ?getSpawnGroupRegistry@Level@@UEBAPEBVSpawnGroupRegistry@@XZ
    getSpawnRules(): unknown;	// getSpawnRules(void): class ActorSpawnRuleGroup const * __ptr64	 /// ?getSpawnRules@Level@@UEBAPEBVActorSpawnRuleGroup@@XZ
    getSpawnSettings(): bigint;	// getSpawnSettings(void): struct SpawnSettings const & __ptr64	 /// ?getSpawnSettings@Level@@UEBAAEBUSpawnSettings@@XZ
    getSpawnableTickedMobCountPrevious(): bigint;	// getSpawnableTickedMobCountPrevious(void): unsigned int	 /// ?getSpawnableTickedMobCountPrevious@Level@@UEBAIXZ
    getSpawner(): unknown;	// getSpawner(void): class Spawner & __ptr64	 /// ?getSpawner@Level@@UEBAAEAVSpawner@@XZ
    getStructureManager(): unknown;	// getStructureManager(void): class gsl::not_null<class Bedrock::NonOwnerPointer<class StructureManager> > const	 /// ?getStructureManager@Level@@UEBA?BV?$not_null@V?$NonOwnerPointer@VStructureManager@@@Bedrock@@@gsl@@XZ
    getSurfaceBuilderRegistry(): unknown;	// getSurfaceBuilderRegistry(void): class SurfaceBuilderRegistry const & __ptr64	 /// ?getSurfaceBuilderRegistry@Level@@UEBAAEBVSurfaceBuilderRegistry@@XZ
    getSyncTasksGroup(): unknown;	// getSyncTasksGroup(void): class TaskGroup & __ptr64	 /// ?getSyncTasksGroup@Level@@UEAAAEAVTaskGroup@@XZ
    getTagRegistry(): unknown;	// getTagRegistry(void): class TagRegistry<struct IDType<struct LevelTagIDType>,struct IDType<struct LevelTagSetIDType> > & __ptr64	 /// ?getTagRegistry@Level@@UEAAAEAV?$TagRegistry@U?$IDType@ULevelTagIDType@@@@U?$IDType@ULevelTagSetIDType@@@@@@XZ
    getTearingDown(): boolean;	// getTearingDown(void): bool	 /// ?getTearingDown@Level@@UEBA_NXZ
    getTickingArea(_1: object): unknown;	// getTickingArea(mce::UUID const &): class ITickingArea * __ptr64	 /// ?getTickingArea@Level@@UEBAPEAVITickingArea@@AEBVUUID@mce@@@Z
    getTickingAreasMgr(): unknown;	// getTickingAreasMgr(void): class TickingAreasManager & __ptr64	 /// ?getTickingAreasMgr@Level@@UEAAAEAVTickingAreasManager@@XZ
    getTime(): number;	// getTime(void): int	 /// ?getTime@Level@@UEBAHXZ
    getUnknownBlockTypeRegistry(): unknown;	// getUnknownBlockTypeRegistry(void): class IUnknownBlockTypeRegistry & __ptr64	 /// ?getUnknownBlockTypeRegistry@Level@@UEAAAEAVIUnknownBlockTypeRegistry@@XZ
    getUserCount(): number;	// getUserCount(void): int	 /// ?getUserCount@Level@@UEBAHXZ
    getXBLBroadcastIntent(): bigint;	// getXBLBroadcastIntent(void): enum Social::GamePublishSetting	 /// ?getXBLBroadcastIntent@Level@@UEBA?AW4GamePublishSetting@Social@@XZ
    getXBLBroadcastMode(): bigint;	// getXBLBroadcastMode(void): enum Social::GamePublishSetting	 /// ?getXBLBroadcastMode@Level@@UEBA?AW4GamePublishSetting@Social@@XZ
    handleLevelEvent(_1: unknown, _2: object): void;	// handleLevelEvent(LevelEvent,CompoundTag const &): void	 /// ?handleLevelEvent@Level@@UEAAXW4LevelEvent@@AEBVCompoundTag@@@Z
    handleLevelEvent(_1: unknown, _2: object, _3: number): void;	// handleLevelEvent(LevelEvent,Vec3 const &,int): void	 /// ?handleLevelEvent@Level@@UEAAXW4LevelEvent@@AEBVVec3@@H@Z
    handleSoundEvent(_1: unknown, _2: object, _3: number, _4: object, _5: boolean, _6: boolean): void;	// handleSoundEvent(LevelSoundEvent,Vec3 const &,int,ActorDefinitionIdentifier const &,bool,bool): void	 /// ?handleSoundEvent@Level@@UEAAXW4LevelSoundEvent@@AEBVVec3@@HAEBUActorDefinitionIdentifier@@_N3@Z
    handleStopAllSounds(): void;	// handleStopAllSounds(void): void	 /// ?handleStopAllSounds@Level@@UEAAXXZ
    hasCommandsEnabled(): boolean;	// hasCommandsEnabled(void): bool	 /// ?hasCommandsEnabled@Level@@UEBA_NXZ
    hasLevelStorage(): boolean;	// hasLevelStorage(void): bool	 /// ?hasLevelStorage@Level@@UEBA_NXZ
    hasPlatformBroadcast(): boolean;	// hasPlatformBroadcast(void): bool	 /// ?hasPlatformBroadcast@Level@@UEBA_NXZ
    hasPlatformBroadcastIntent(): boolean;	// hasPlatformBroadcastIntent(void): bool	 /// ?hasPlatformBroadcastIntent@Level@@UEBA_NXZ
    hasStartWithMapEnabled(): boolean;	// hasStartWithMapEnabled(void): bool	 /// ?hasStartWithMapEnabled@Level@@UEBA_NXZ
    hasXBLBroadcast(): boolean;	// hasXBLBroadcast(void): bool	 /// ?hasXBLBroadcast@Level@@UEBA_NXZ
    hasXBLBroadcastIntent(): boolean;	// hasXBLBroadcastIntent(void): bool	 /// ?hasXBLBroadcastIntent@Level@@UEBA_NXZ
    incrementSpawnableTickedMob(): void;	// incrementSpawnableTickedMob(void): void	 /// ?incrementSpawnableTickedMob@Level@@UEAAXXZ
    initializeBlockDefinitionGroup(): void;	// initializeBlockDefinitionGroup(void): void	 /// ?initializeBlockDefinitionGroup@Level@@UEAAXXZ
    isClientSide(): boolean;	// isClientSide(void): bool	 /// ?isClientSide@Level@@UEBA_NXZ
    isEdu(): boolean;	// isEdu(void): bool	 /// ?isEdu@Level@@UEBA_NXZ
    isExporting(): boolean;	// isExporting(void): bool	 /// ?isExporting@Level@@UEBA_NXZ
    isLeaveGameDone(): boolean;	// isLeaveGameDone(void): bool	 /// ?isLeaveGameDone@Level@@UEAA_NXZ
    isMultiplayerGame(): boolean;	// isMultiplayerGame(void): bool	 /// ?isMultiplayerGame@Level@@UEBA_NXZ
    isPlayerSuspended(_1: object): boolean;	// isPlayerSuspended(Player &): bool	 /// ?isPlayerSuspended@Level@@UEBA_NAEAVPlayer@@@Z
    loadBlockDefinitionGroup(_1: object): void;	// loadBlockDefinitionGroup(Experiments const &): void	 /// ?loadBlockDefinitionGroup@Level@@UEAAXAEBVExperiments@@@Z
    moveActiveAutonomousActorToInactive(_1: object, _2: object): void;	// moveActiveAutonomousActorToInactive(Actor &,LevelChunk *): void	 /// ?moveActiveAutonomousActorToInactive@Level@@UEAAXAEAVActor@@PEAVLevelChunk@@@Z
    onChunkDiscarded(_1: object): void;	// onChunkDiscarded(LevelChunk &): void	 /// ?onChunkDiscarded@Level@@UEAAXAEAVLevelChunk@@@Z
    onChunkLoaded(_1: object, _2: object): void;	// onChunkLoaded(ChunkSource &,LevelChunk &): void	 /// ?onChunkLoaded@Level@@UEAAXAEAVChunkSource@@AEAVLevelChunk@@@Z
    onChunkReload(_1: object): void;	// onChunkReload(Bounds const &): void	 /// ?onChunkReload@Level@@UEAAXAEBUBounds@@@Z
    onChunkReloaded(_1: object, _2: object): void;	// onChunkReloaded(ChunkSource &,LevelChunk &): void	 /// ?onChunkReloaded@Level@@UEAAXAEAVChunkSource@@AEAVLevelChunk@@@Z
    onPlayerDeath(_1: object, _2: object): void;	// onPlayerDeath(Player &,ActorDamageSource const &): void	 /// ?onPlayerDeath@Level@@UEAAXAEAVPlayer@@AEBVActorDamageSource@@@Z
    onSourceCreated(_1: object): void;	// onSourceCreated(BlockSource &): void	 /// ?onSourceCreated@Level@@UEAAXAEAVBlockSource@@@Z
    onSourceDestroyed(_1: object): void;	// onSourceDestroyed(BlockSource &): void	 /// ?onSourceDestroyed@Level@@UEAAXAEAVBlockSource@@@Z
    playSound(_1: object, _2: unknown, _3: object, _4: number, _5: object, _6: boolean, _7: boolean): void;	// playSound(BlockSource &,LevelSoundEvent,Vec3 const &,int,ActorDefinitionIdentifier const &,bool,bool): void	 /// ?playSound@Level@@UEAAXAEAVBlockSource@@W4LevelSoundEvent@@AEBVVec3@@HAEBUActorDefinitionIdentifier@@_N4@Z
    playSound(_1: unknown, _2: object, _3: number, _4: number): void;	// playSound(LevelSoundEvent,Vec3 const &,float,float): void	 /// ?playSound@Level@@UEAAXW4LevelSoundEvent@@AEBVVec3@@MM@Z
    playSynchronizedSound(_1: object, _2: unknown, _3: object, _4: object, _5: object, _6: boolean, _7: boolean): void;	// playSynchronizedSound(BlockSource &,LevelSoundEvent,Vec3 const &,Block const &,ActorDefinitionIdentifier const &,bool,bool): void	 /// ?playSynchronizedSound@Level@@UEAAXAEAVBlockSource@@W4LevelSoundEvent@@AEBVVec3@@AEBVBlock@@AEBUActorDefinitionIdentifier@@_N5@Z
    playSynchronizedSound(_1: object, _2: unknown, _3: object, _4: number, _5: object, _6: boolean, _7: boolean): void;	// playSynchronizedSound(BlockSource &,LevelSoundEvent,Vec3 const &,int,ActorDefinitionIdentifier const &,bool,bool): void	 /// ?playSynchronizedSound@Level@@UEAAXAEAVBlockSource@@W4LevelSoundEvent@@AEBVVec3@@HAEBUActorDefinitionIdentifier@@_N4@Z
    playSynchronizedSound(_1: object, _2: unknown, _3: object, _4: number, _5: object, _6: boolean, _7: boolean): void;	// playSynchronizedSound(Dimension &,LevelSoundEvent,Vec3 const &,int,ActorDefinitionIdentifier const &,bool,bool): void	 /// ?playSynchronizedSound@Level@@UEAAXAEAVDimension@@W4LevelSoundEvent@@AEBVVec3@@HAEBUActorDefinitionIdentifier@@_N4@Z
    potionSplash(_1: object, _2: object, _3: boolean): void;	// potionSplash(Vec3 const &,mce::Color const &,bool): void	 /// ?potionSplash@Level@@UEAAXAEBVVec3@@AEBVColor@mce@@_N@Z
    pruneChunkViewTrackers(): void;	// pruneChunkViewTrackers(void): void	 /// ?pruneChunkViewTrackers@Level@@UEAAXXZ
    removeActorAndTakeEntity(_1: unknown, _2: boolean): bigint;	// removeActorAndTakeEntity(WeakEntityRef,bool): class OwnerPtrT<struct EntityRefTraits>	 /// ?removeActorAndTakeEntity@Level@@UEAA?AV?$OwnerPtrT@UEntityRefTraits@@@@VWeakEntityRef@@_N@Z
    removeAllNonPlayerEntities(_1: unknown): void;	// removeAllNonPlayerEntities(ActorUniqueID): void	 /// ?removeAllNonPlayerEntities@Level@@UEAAXUActorUniqueID@@@Z
    removeBossEventListener(_1: object): void;	// removeBossEventListener(BossEventListener *): void	 /// ?removeBossEventListener@Level@@UEAAXPEAVBossEventListener@@@Z
    removeDisplayEntity(_1: unknown): void;	// removeDisplayEntity(WeakEntityRef): void	 /// ?removeDisplayEntity@Level@@UEAAXVWeakEntityRef@@@Z
    removeEntity(_1: object): bigint;	// removeEntity(Actor &): class OwnerPtrT<struct EntityRefTraits>	 /// ?removeEntity@Level@@UEAA?AV?$OwnerPtrT@UEntityRefTraits@@@@AEAVActor@@@Z
    removeEntity(_1: unknown): bigint;	// removeEntity(WeakEntityRef): class OwnerPtrT<struct EntityRefTraits>	 /// ?removeEntity@Level@@UEAA?AV?$OwnerPtrT@UEntityRefTraits@@@@VWeakEntityRef@@@Z
    removeEntityIfExists(_1: object): boolean;	// removeEntityIfExists(Actor *): bool	 /// ?removeEntityIfExists@Level@@UEAA_NPEAVActor@@@Z
    removeEntityReferences(_1: object, _2: boolean): void;	// removeEntityReferences(Actor &,bool): void	 /// ?removeEntityReferences@Level@@UEAAXAEAVActor@@_N@Z
    removeListener(_1: object): void;	// removeListener(LevelListener &): void	 /// ?removeListener@Level@@UEAAXAEAVLevelListener@@@Z
    requestMapInfo(_1: unknown, _2: boolean): void;	// requestMapInfo(ActorUniqueID,bool): void	 /// ?requestMapInfo@Level@@UEAAXUActorUniqueID@@_N@Z
    requestTimedStorageDeferment(): bigint;	// requestTimedStorageDeferment(void): class std::shared_ptr<void * __ptr64>	 /// ?requestTimedStorageDeferment@Level@@UEAA?AV?$shared_ptr@PEAX@std@@XZ
    resumePlayer(_1: object): void;	// resumePlayer(Player &): void	 /// ?resumePlayer@Level@@UEAAXAEAVPlayer@@@Z
    save(): void;	// save(void): void	 /// ?save@Level@@UEAAXXZ
    saveBiomeData(): void;	// saveBiomeData(void): void	 /// ?saveBiomeData@Level@@UEAAXXZ
    saveDirtyChunks(): void;	// saveDirtyChunks(void): void	 /// ?saveDirtyChunks@Level@@UEAAXXZ
    saveEducationLevelSettings(): void;	// saveEducationLevelSettings(void): void	 /// ?saveEducationLevelSettings@Level@@UEAAXXZ
    saveGameData(): void;	// saveGameData(void): void	 /// ?saveGameData@Level@@UEAAXXZ
    saveLevelData(): void;	// saveLevelData(void): void	 /// ?saveLevelData@Level@@UEAAXXZ
    savePlayer(_1: object): void;	// savePlayer(Player &): void	 /// ?savePlayer@Level@@UEAAXAEAVPlayer@@@Z
    savePlayers(): void;	// savePlayers(void): void	 /// ?savePlayers@Level@@UEAAXXZ
    saveVillages(): void;	// saveVillages(void): void	 /// ?saveVillages@Level@@UEAAXXZ
    sendAllPlayerAbilities(_1: object): void;	// sendAllPlayerAbilities(Player const &): void	 /// ?sendAllPlayerAbilities@Level@@UEAAXAEBVPlayer@@@Z
    sendServerLegacyParticle(_1: unknown, _2: object, _3: object, _4: number): void;	// sendServerLegacyParticle(ParticleType,Vec3 const &,Vec3 const &,int): void	 /// ?sendServerLegacyParticle@Level@@UEAAXW4ParticleType@@AEBVVec3@@1H@Z
    setCommandsEnabled(_1: boolean): void;	// setCommandsEnabled(bool): void	 /// ?setCommandsEnabled@Level@@UEAAX_N@Z
    setDefaultGameType(_1: unknown): void;	// setDefaultGameType(GameType): void	 /// ?setDefaultGameType@Level@@UEAAXW4GameType@@@Z
    setDefaultSpawn(_1: object): void;	// setDefaultSpawn(BlockPos const &): void	 /// ?setDefaultSpawn@Level@@UEAAXAEBVBlockPos@@@Z
    setDifficulty(_1: unknown): void;	// setDifficulty(Difficulty): void	 /// ?setDifficulty@Level@@UEAAXW4Difficulty@@@Z
    setEducationLevelSettings(_1: unknown): void;	// setEducationLevelSettings(EducationLevelSettings): void	 /// ?setEducationLevelSettings@Level@@UEAAXUEducationLevelSettings@@@Z
    setFinishedInitializing(): void;	// setFinishedInitializing(void): void	 /// ?setFinishedInitializing@Level@@UEAAXXZ
    setHasLockedBehaviorPack(_1: boolean): void;	// setHasLockedBehaviorPack(bool): void	 /// ?setHasLockedBehaviorPack@Level@@UEAAX_N@Z
    setHasLockedResourcePack(_1: boolean): void;	// setHasLockedResourcePack(bool): void	 /// ?setHasLockedResourcePack@Level@@UEAAX_N@Z
    setIsExporting(_1: boolean): void;	// setIsExporting(bool): void	 /// ?setIsExporting@Level@@UEAAX_N@Z
    setLANBroadcast(_1: boolean): void;	// setLANBroadcast(bool): void	 /// ?setLANBroadcast@Level@@UEAAX_N@Z
    setLANBroadcastIntent(_1: boolean): void;	// setLANBroadcastIntent(bool): void	 /// ?setLANBroadcastIntent@Level@@UEAAX_N@Z
    setMsaGamertagsOnly(_1: boolean): void;	// setMsaGamertagsOnly(bool): void	 /// ?setMsaGamertagsOnly@Level@@UEAAX_N@Z
    setMultiplayerGame(_1: boolean): void;	// setMultiplayerGame(bool): void	 /// ?setMultiplayerGame@Level@@UEAAX_N@Z
    setMultiplayerGameIntent(_1: boolean): void;	// setMultiplayerGameIntent(bool): void	 /// ?setMultiplayerGameIntent@Level@@UEAAX_N@Z
    setPacketSender(_1: object): void;	// setPacketSender(PacketSender *): void	 /// ?setPacketSender@Level@@UEAAXPEAVPacketSender@@@Z
    setPlatformBroadcastIntent(_1: unknown): void;	// setPlatformBroadcastIntent(Social::GamePublishSetting): void	 /// ?setPlatformBroadcastIntent@Level@@UEAAXW4GamePublishSetting@Social@@@Z
    setPlatformBroadcastMode(_1: unknown): void;	// setPlatformBroadcastMode(Social::GamePublishSetting): void	 /// ?setPlatformBroadcastMode@Level@@UEAAXW4GamePublishSetting@Social@@@Z
    setPlayerAbilities(_1: object, _2: Abilities): void;	// setPlayerAbilities(ActorUniqueID const &,Abilities): void	 /// ?setPlayerAbilities@Level@@UEAAXAEBUActorUniqueID@@VAbilities@@@Z
    setPlayerMovementSettings(_1: object): void;	// setPlayerMovementSettings(PlayerMovementSettings const &): void	 /// ?setPlayerMovementSettings@Level@@UEAAXAEBUPlayerMovementSettings@@@Z
    setSimPaused(_1: boolean): void;	// setSimPaused(bool): void	 /// ?setSimPaused@Level@@UEAAX_N@Z
    setSpawnSettings(_1: object): void;	// setSpawnSettings(SpawnSettings const &): void	 /// ?setSpawnSettings@Level@@UEAAXAEBUSpawnSettings@@@Z
    setTime(_1: number): void;	// setTime(int): void	 /// ?setTime@Level@@UEAAXH@Z
    setWorldTemplateOptionsUnlocked(): void;	// setWorldTemplateOptionsUnlocked(void): void	 /// ?setWorldTemplateOptionsUnlocked@Level@@UEAAXXZ
    setXBLBroadcastIntent(_1: unknown): void;	// setXBLBroadcastIntent(Social::GamePublishSetting): void	 /// ?setXBLBroadcastIntent@Level@@UEAAXW4GamePublishSetting@Social@@@Z
    setXBLBroadcastMode(_1: unknown): void;	// setXBLBroadcastMode(Social::GamePublishSetting): void	 /// ?setXBLBroadcastMode@Level@@UEAAXW4GamePublishSetting@Social@@@Z
    startLeaveGame(): void;	// startLeaveGame(void): void	 /// ?startLeaveGame@Level@@UEAAXXZ
    suspendAndSave(): void;	// suspendAndSave(void): void	 /// ?suspendAndSave@Level@@UEAAXXZ
    suspendPlayer(_1: object): void;	// suspendPlayer(Player &): void	 /// ?suspendPlayer@Level@@UEAAXAEAVPlayer@@@Z
    takeEntity(_1: unknown, _2: object): bigint;	// takeEntity(WeakEntityRef,LevelChunk *): class OwnerPtrT<struct EntityRefTraits>	 /// ?takeEntity@Level@@UEAA?AV?$OwnerPtrT@UEntityRefTraits@@@@VWeakEntityRef@@PEAVLevelChunk@@@Z
    takePicture(_1: object, _2: object, _3: object, _4: object): void;	// takePicture(cg::ImageBuffer &,Actor *,Actor *,ScreenshotOptions &): void	 /// ?takePicture@Level@@UEAAXAEAVImageBuffer@cg@@PEAVActor@@1AEAUScreenshotOptions@@@Z
    tick(): void;	// tick(void): void	 /// ?tick@Level@@UEAAXXZ
    tickEntities(): void;	// tickEntities(void): void	 /// ?tickEntities@Level@@UEAAXXZ
    tickEntitySystems(): void;	// tickEntitySystems(void): void	 /// ?tickEntitySystems@Level@@UEAAXXZ
    unregisterTemporaryPointer(_1: object): void;	// unregisterTemporaryPointer(_TickPtr &): void	 /// ?unregisterTemporaryPointer@Level@@UEAAXAEAV_TickPtr@@@Z
    updateWeather(_1: number, _2: number, _3: number, _4: number): void;	// updateWeather(float,int,float,int): void	 /// ?updateWeather@Level@@UEAAXMHMH@Z
    upgradeStorageVersion(_1: unknown): void;	// upgradeStorageVersion(StorageVersion): void	 /// ?upgradeStorageVersion@Level@@UEAAXW4StorageVersion@@@Z
    useMsaGamertagsOnly(): boolean;	// useMsaGamertagsOnly(void): bool	 /// ?useMsaGamertagsOnly@Level@@UEBA_NXZ
    waitAsyncSuspendWork(): void;	// waitAsyncSuspendWork(void): void	 /// ?waitAsyncSuspendWork@Level@@UEAAXXZ
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
    synchedActorData: SynchedActorData;
    supplies: PlayerInventoryProxy;
    _isSleeping: number;
    geometryData: SDKText;
    skinUUID: SDKText;
    geometryName: SDKText;
    stepHeight: number;
    transactionManager: InventoryTransactionManager;
    handContainer: SimpleContainer;
    skinType: SDKText;
    random: Random;
    oldPosition: Vec3;
    isMovedToLimbo: number;
    bodyYaw: number;
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
    actorIdentifier: ActorDefinitionIdentifier;
    velocity: Vec3;
    baseAttributeMap: BaseAttributeMap;
    aabb: AABB;
    width: number;
    postTickPosDelta: Vec3;
    position: Vec3;
    allEffects: SDKVectorContainer;
    entityRuntimeId: bigint;
    isSafeToSleepNear: number;
    armorContainer: SimpleContainer;
    // Methods 
    // Inherited from LocalPlayer
    // Inherited from Player
    _chooseSpawnArea(): void;	// _chooseSpawnArea(void): void	 /// ?_chooseSpawnArea@Player@@IEAAXXZ
    _chooseSpawnPositionWithinArea(): boolean;	// _chooseSpawnPositionWithinArea(void): bool	 /// ?_chooseSpawnPositionWithinArea@Player@@IEAA_NXZ
    _createChunkSource(_1: object): bigint;	// _createChunkSource(ChunkSource &): class std::shared_ptr<class ChunkViewSource>	 /// ?_createChunkSource@Player@@MEAA?AV?$shared_ptr@VChunkViewSource@@@std@@AEAVChunkSource@@@Z
    _crit(_1: object): void;	// _crit(Actor &): void	 /// ?_crit@Player@@UEAAXAEAVActor@@@Z
    _ensureSafeSpawnPosition(_1: object): void;	// _ensureSafeSpawnPosition(Vec3 &): void	 /// ?_ensureSafeSpawnPosition@Player@@AEAAXAEAVVec3@@@Z
    _fireDimensionChanged(): void;	// _fireDimensionChanged(void): void	 /// ?_fireDimensionChanged@Player@@UEAAXXZ
    _fireWillChangeDimension(): void;	// _fireWillChangeDimension(void): void	 /// ?_fireWillChangeDimension@Player@@UEAAXXZ
    _hurt(_1: object, _2: number, _3: boolean, _4: boolean): boolean;	// _hurt(ActorDamageSource const &,float,bool,bool): bool	 /// ?_hurt@Player@@MEAA_NAEBVActorDamageSource@@M_N1@Z
    _isChunkSourceLoaded(_1: object, _2: object): boolean;	// _isChunkSourceLoaded(Vec3 const &,BlockSource const &): bool	 /// ?_isChunkSourceLoaded@Player@@AEBA_NAEBVVec3@@AEBVBlockSource@@@Z
    _onSizeUpdated(): void;	// _onSizeUpdated(void): void	 /// ?_onSizeUpdated@Player@@EEAAXXZ
    _registerElytraLoopSound(): void;	// _registerElytraLoopSound(void): void	 /// ?_registerElytraLoopSound@Player@@AEAAXXZ
    _registerPlayerAttributes(): void;	// _registerPlayerAttributes(void): void	 /// ?_registerPlayerAttributes@Player@@IEAAXXZ
    _validateSpawnPositionAvailability(_1: object, _2: object, _3: object): boolean;	// _validateSpawnPositionAvailability(Vec3 const &,BlockSource *,Vec3 const * const): bool	 /// ?_validateSpawnPositionAvailability@Player@@IEBA_NAEBVVec3@@PEAVBlockSource@@QEBV2@@Z
    add(_1: object): boolean;	// add(ItemStack &): bool	 /// ?add@Player@@UEAA_NAEAVItemStack@@@Z
    addAdditionalSaveData(_1: object): void;	// addAdditionalSaveData(CompoundTag &): void	 /// ?addAdditionalSaveData@Player@@MEAAXAEAVCompoundTag@@@Z
    addExperience(_1: number): void;	// addExperience(int): void	 /// ?addExperience@Player@@UEAAXH@Z
    addLevels(_1: number): void;	// addLevels(int): void	 /// ?addLevels@Player@@UEAAXH@Z
    aiStep(_1: object): void;	// aiStep(IMobMovementProxy &): void	 /// ?aiStep@Player@@UEBAXAEAUIMobMovementProxy@@@Z
    aiStep(): void;	// aiStep(void): void	 /// ?aiStep@Player@@UEAAXXZ
    attack(_1: object, _2: object): boolean;	// attack(Actor &,ActorDamageCause const &): bool	 /// ?attack@Player@@UEAA_NAEAVActor@@AEBW4ActorDamageCause@@@Z
    awardKillScore(_1: object, _2: number): void;	// awardKillScore(Actor &,int): void	 /// ?awardKillScore@Player@@UEAAXAEAVActor@@H@Z
    canAddPassenger(_1: object): boolean;	// canAddPassenger(Actor &): bool	 /// ?canAddPassenger@Player@@UEBA_NAEAVActor@@@Z
    canFreeze(): boolean;	// canFreeze(void): bool	 /// ?canFreeze@Player@@UEBA_NXZ
    canInteractWithOtherEntitiesInGame(): boolean;	// canInteractWithOtherEntitiesInGame(void): bool	 /// ?canInteractWithOtherEntitiesInGame@Player@@UEBA_NXZ
    canJump(_1: object): boolean;	// canJump(IPlayerMovementProxy &): bool	 /// ?canJump@Player@@SA_NAEAUIPlayerMovementProxy@@@Z
    canOpenContainerScreen(): boolean;	// canOpenContainerScreen(void): bool	 /// ?canOpenContainerScreen@Player@@UEAA_NXZ
    canStartSleepInBed(): boolean;	// canStartSleepInBed(void): bool	 /// ?canStartSleepInBed@Player@@UEAA_NXZ
    canUseAbility(_1: unknown): boolean;	// canUseAbility(AbilitiesIndex): bool	 /// ?canUseAbility@Player@@QEBA_NW4AbilitiesIndex@@@Z
    canUseOperatorBlocks(): boolean;	// canUseOperatorBlocks(void): bool	 /// ?canUseOperatorBlocks@Player@@QEBA_NXZ
    causeFoodExhaustion(_1: number): void;	// causeFoodExhaustion(float): void	 /// ?causeFoodExhaustion@Player@@QEAAXM@Z
    checkSpawnBlock(_1: object): boolean;	// checkSpawnBlock(BlockSource const &): bool	 /// ?checkSpawnBlock@Player@@IEBA_NAEBVBlockSource@@@Z
    clearRespawnPosition(): void;	// clearRespawnPosition(void): void	 /// ?clearRespawnPosition@Player@@QEAAXXZ
    completeUsingItem(): void;	// completeUsingItem(void): void	 /// ?completeUsingItem@Player@@UEAAXXZ
    consumeTotem(): boolean;	// consumeTotem(void): bool	 /// ?consumeTotem@Player@@UEAA_NXZ
    deleteContainerManager(): void;	// deleteContainerManager(void): void	 /// ?deleteContainerManager@Player@@UEAAXXZ
    destroyRegion(): void;	// destroyRegion(void): void	 /// ?destroyRegion@Player@@UEAAXXZ
    die(_1: object): void;	// die(ActorDamageSource const &): void	 /// ?die@Player@@UEAAXAEBVActorDamageSource@@@Z
    drop(_1: object, _2: boolean): boolean;	// drop(ItemStack const &,bool): bool	 /// ?drop@Player@@UEAA_NAEBVItemStack@@_N@Z
    dropEquipmentOnDeath(_1: object, _2: number): void;	// dropEquipmentOnDeath(ActorDamageSource const &,int): void	 /// ?dropEquipmentOnDeath@Player@@UEAAXAEBVActorDamageSource@@H@Z
    dropEquipmentOnDeath(): void;	// dropEquipmentOnDeath(void): void	 /// ?dropEquipmentOnDeath@Player@@UEAAXXZ
    eat(_1: number, _2: number): void;	// eat(int,float): void	 /// ?eat@Player@@QEAAXHM@Z
    feed(_1: number): void;	// feed(int): void	 /// ?feed@Player@@UEAAXH@Z
    forceAllowEating(): boolean;	// forceAllowEating(void): bool	 /// ?forceAllowEating@Player@@QEBA_NXZ
    getActorRendererId(): unknown;	// getActorRendererId(void): class HashedString const & __ptr64	 /// ?getActorRendererId@Player@@UEBAAEBVHashedString@@XZ
    getAgent(): unknown;	// getAgent(void): class Agent * __ptr64	 /// ?getAgent@Player@@QEBAPEAVAgent@@XZ
    getAgentIfAllowed(_1: boolean, _2: unknown): unknown;	// getAgentIfAllowed(bool,ActorUniqueID): class Agent * __ptr64	 /// ?getAgentIfAllowed@Player@@QEBAPEAVAgent@@_NUActorUniqueID@@@Z
    getAllEquipment(): bigint;	// getAllEquipment(void): class std::vector<class ItemStack const * __ptr64,class std::allocator<class ItemStack const * __ptr64> >	 /// ?getAllEquipment@Player@@UEBA?AV?$vector@PEBVItemStack@@V?$allocator@PEBVItemStack@@@std@@@std@@XZ
    getAllHand(): bigint;	// getAllHand(void): class std::vector<class ItemStack const * __ptr64,class std::allocator<class ItemStack const * __ptr64> >	 /// ?getAllHand@Player@@UEBA?AV?$vector@PEBVItemStack@@V?$allocator@PEBVItemStack@@@std@@@std@@XZ
    getAnimationComponent(): unknown;	// getAnimationComponent(void): class AnimationComponent & __ptr64	 /// ?getAnimationComponent@Player@@UEAAAEAVAnimationComponent@@XZ
    getAttachPos(_1: unknown, _2: number): bigint;	// getAttachPos(ActorLocation,float): class Vec3	 /// ?getAttachPos@Player@@UEBA?AVVec3@@W4ActorLocation@@M@Z
    getCameraOffset(): number;	// getCameraOffset(void): float	 /// ?getCameraOffset@Player@@UEBAMXZ
    getCapePos(_1: number): bigint;	// getCapePos(float): class Vec3	 /// ?getCapePos@Player@@QEAA?AVVec3@@M@Z
    getCommandPermissionLevel(): bigint;	// getCommandPermissionLevel(void): enum CommandPermissionLevel	 /// ?getCommandPermissionLevel@Player@@UEBA?AW4CommandPermissionLevel@@XZ
    getDirection(): number;	// getDirection(void): int	 /// ?getDirection@Player@@QEBAHXZ
    getEntityTypeId(): bigint;	// getEntityTypeId(void): enum ActorType	 /// ?getEntityTypeId@Player@@UEBA?AW4ActorType@@XZ
    getEquippedTotem(): ItemStack;	// getEquippedTotem(void): class ItemStack const & __ptr64	 /// ?getEquippedTotem@Player@@UEBAAEBVItemStack@@XZ
    getEventing(): unknown;	// getEventing(void): class IMinecraftEventing * __ptr64	 /// ?getEventing@Player@@UEBAPEAVIMinecraftEventing@@XZ
    getExpectedSpawnDimensionId(): bigint;	// getExpectedSpawnDimensionId(void): class AutomaticID<class Dimension,int>	 /// ?getExpectedSpawnDimensionId@Player@@QEBA?AV?$AutomaticID@VDimension@@H@@XZ
    getExpectedSpawnPosition(): BlockPos;	// getExpectedSpawnPosition(void): class BlockPos const & __ptr64	 /// ?getExpectedSpawnPosition@Player@@QEBAAEBVBlockPos@@XZ
    getFormattedNameTag(): bigint;	// getFormattedNameTag(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> >	 /// ?getFormattedNameTag@Player@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
    getItemCooldownLeft(_1: object): number;	// getItemCooldownLeft(HashedString const &): int	 /// ?getItemCooldownLeft@Player@@UEBAHAEBVHashedString@@@Z
    getItemCooldownLeft(_1: bigint): number;	// getItemCooldownLeft(unsigned __int64): int	 /// ?getItemCooldownLeft@Player@@UEBAH_K@Z
    getItemUseDuration(): number;	// getItemUseDuration(void): int	 /// ?getItemUseDuration@Player@@UEBAHXZ
    getItemUseIntervalProgress(): number;	// getItemUseIntervalProgress(void): float	 /// ?getItemUseIntervalProgress@Player@@UEBAMXZ
    getItemUseStartupProgress(): number;	// getItemUseStartupProgress(void): float	 /// ?getItemUseStartupProgress@Player@@UEBAMXZ
    getLuck(): number;	// getLuck(void): float	 /// ?getLuck@Player@@QEAAMXZ
    getMaxItemCooldownLeft(): number;	// getMaxItemCooldownLeft(void): int	 /// ?getMaxItemCooldownLeft@Player@@UEBAHXZ
    getMovementSettings(): bigint;	// getMovementSettings(void): struct PlayerMovementSettings const & __ptr64	 /// ?getMovementSettings@Player@@UEBAAEBUPlayerMovementSettings@@XZ
    getPlayerPermissionLevel(): bigint;	// getPlayerPermissionLevel(void): enum PlayerPermissionLevel	 /// ?getPlayerPermissionLevel@Player@@QEBA?AW4PlayerPermissionLevel@@XZ
    getPlayerSessionId(): unknown;	// getPlayerSessionId(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64	 /// ?getPlayerSessionId@Player@@QEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
    getPortalWaitTime(): number;	// getPortalWaitTime(void): int	 /// ?getPortalWaitTime@Player@@UEBAHXZ
    getPreviousTickSleepTimer(): number;	// getPreviousTickSleepTimer(void): int	 /// ?getPreviousTickSleepTimer@Player@@UEBAHXZ
    getRidingHeight(): number;	// getRidingHeight(void): float	 /// ?getRidingHeight@Player@@UEAAMXZ
    getSelectedItem(): ItemStack;	// getSelectedItem(void): class ItemStack const & __ptr64	 /// ?getSelectedItem@Player@@QEBAAEBVItemStack@@XZ
    getSelectedItemSlot(): number;	// getSelectedItemSlot(void): int	 /// ?getSelectedItemSlot@Player@@QEBAHXZ
    getSleepTimer(): number;	// getSleepTimer(void): int	 /// ?getSleepTimer@Player@@UEBAHXZ
    getSpeed(): number;	// getSpeed(void): float	 /// ?getSpeed@Player@@UEBAMXZ
    getSupplies(): unknown;	// getSupplies(void): class PlayerInventory const & __ptr64	 /// ?getSupplies@Player@@QEBAAEBVPlayerInventory@@XZ
    getTickingOffsets(): unknown;	// getTickingOffsets(void): class std::vector<class ChunkPos,class std::allocator<class ChunkPos> > const & __ptr64	 /// ?getTickingOffsets@Player@@UEBAAEBV?$vector@VChunkPos@@V?$allocator@VChunkPos@@@std@@@std@@XZ
    getTrackedBosses(): unknown;	// getTrackedBosses(void): class std::vector<struct ActorUniqueID,class std::allocator<struct ActorUniqueID> > const & __ptr64	 /// ?getTrackedBosses@Player@@QEAAAEBV?$vector@UActorUniqueID@@V?$allocator@UActorUniqueID@@@std@@@std@@XZ
    getXpNeededForNextLevel(): number;	// getXpNeededForNextLevel(void): int	 /// ?getXpNeededForNextLevel@Player@@QEBAHXZ
    getXuid(): bigint;	// getXuid(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> >	 /// ?getXuid@Player@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
    handleEntityEvent(_1: unknown, _2: number): void;	// handleEntityEvent(ActorEvent,int): void	 /// ?handleEntityEvent@Player@@UEAAXW4ActorEvent@@H@Z
    hasResource(_1: number): boolean;	// hasResource(int): bool	 /// ?hasResource@Player@@UEAA_NH@Z
    hasRespawnPosition(): boolean;	// hasRespawnPosition(void): bool	 /// ?hasRespawnPosition@Player@@QEBA_NXZ
    initBodyControl(): bigint;	// initBodyControl(void): class std::unique_ptr<class BodyControl,struct std::default_delete<class BodyControl> >	 /// ?initBodyControl@Player@@EEAA?AV?$unique_ptr@VBodyControl@@U?$default_delete@VBodyControl@@@std@@@std@@XZ
    initHUDContainerManager(): void;	// initHUDContainerManager(void): void	 /// ?initHUDContainerManager@Player@@UEAAXXZ
    initializeComponents(_1: unknown, _2: object): void;	// initializeComponents(Actor::InitializationMethod,VariantParameterList const &): void	 /// ?initializeComponents@Player@@UEAAXW4InitializationMethod@Actor@@AEBVVariantParameterList@@@Z
    interact(_1: object, _2: object): boolean;	// interact(Actor &,Vec3 const &): bool	 /// ?interact@Player@@QEAA_NAEAVActor@@AEBVVec3@@@Z
    inventoryChanged(_1: object, _2: number, _3: object, _4: object, _5: boolean): void;	// inventoryChanged(Container &,int,ItemStack const &,ItemStack const &,bool): void	 /// ?inventoryChanged@Player@@UEAAXAEAVContainer@@HAEBVItemStack@@1_N@Z
    isAdventure(): boolean;	// isAdventure(void): bool	 /// ?isAdventure@Player@@UEBA_NXZ
    isBlocking(): boolean;	// isBlocking(void): bool	 /// ?isBlocking@Player@@UEBA_NXZ
    isDamageBlocked(_1: object): boolean;	// isDamageBlocked(ActorDamageSource const &): bool	 /// ?isDamageBlocked@Player@@UEBA_NAEBVActorDamageSource@@@Z
    isForcedRespawn(): boolean;	// isForcedRespawn(void): bool	 /// ?isForcedRespawn@Player@@QEBA_NXZ
    isHiddenFrom(_1: object): boolean;	// isHiddenFrom(Mob &): bool	 /// ?isHiddenFrom@Player@@QEBA_NAEAVMob@@@Z
    isHurt(): boolean;	// isHurt(void): bool	 /// ?isHurt@Player@@QEAA_NXZ
    isImmobile(): boolean;	// isImmobile(void): bool	 /// ?isImmobile@Player@@UEBA_NXZ
    isInCreativeMode(): boolean;	// isInCreativeMode(void): bool	 /// ?isInCreativeMode@Player@@QEBA_NXZ
    isInvulnerableTo(_1: object): boolean;	// isInvulnerableTo(ActorDamageSource const &): bool	 /// ?isInvulnerableTo@Player@@UEBA_NAEBVActorDamageSource@@@Z
    isItemOnCooldown(_1: object): boolean;	// isItemOnCooldown(HashedString const &): bool	 /// ?isItemOnCooldown@Player@@UEBA_NAEBVHashedString@@@Z
    isJumping(): boolean;	// isJumping(void): bool	 /// ?isJumping@Player@@UEBA_NXZ
    isSleeping(): boolean;	// isSleeping(void): bool	 /// ?isSleeping@Player@@UEBA_NXZ
    isSpectator(): boolean;	// isSpectator(void): bool	 /// ?isSpectator@Player@@UEBA_NXZ
    isSurvival(): boolean;	// isSurvival(void): bool	 /// ?isSurvival@Player@@UEBA_NXZ
    isUsingItem(): boolean;	// isUsingItem(void): bool	 /// ?isUsingItem@Player@@QEBA_NXZ
    isWorldBuilder(): boolean;	// isWorldBuilder(void): bool	 /// ?isWorldBuilder@Player@@UEBA_NXZ
    jumpFromGround(_1: object): void;	// jumpFromGround(IMobMovementProxy &): void	 /// ?jumpFromGround@Player@@UEBAXAEAUIMobMovementProxy@@@Z
    jumpFromGround(): void;	// jumpFromGround(void): void	 /// ?jumpFromGround@Player@@UEAAXXZ
    move(_1: object, _2: object): void;	// move(IActorMovementProxy &,Vec3 const &): void	 /// ?move@Player@@UEBAXAEAUIActorMovementProxy@@AEBVVec3@@@Z
    move(_1: object): void;	// move(Vec3 const &): void	 /// ?move@Player@@UEAAXAEBVVec3@@@Z
    moveView(): void;	// moveView(void): void	 /// ?moveView@Player@@UEAAXXZ
    normalTick(): void;	// normalTick(void): void	 /// ?normalTick@Player@@UEAAXXZ
    onBounceStarted(_1: object, _2: object): void;	// onBounceStarted(BlockPos const &,Block const &): void	 /// ?onBounceStarted@Player@@MEAAXAEBVBlockPos@@AEBVBlock@@@Z
    onMovePlayerPacketNormal(_1: object, _2: object, _3: number): void;	// onMovePlayerPacketNormal(Vec3 const &,Vec2 const &,float): void	 /// ?onMovePlayerPacketNormal@Player@@MEAAXAEBVVec3@@AEBVVec2@@M@Z
    prepareRegion(_1: object): void;	// prepareRegion(ChunkSource &): void	 /// ?prepareRegion@Player@@UEAAXAEAVChunkSource@@@Z
    readAdditionalSaveData(_1: object, _2: object): void;	// readAdditionalSaveData(CompoundTag const &,DataLoadHelper &): void	 /// ?readAdditionalSaveData@Player@@MEAAXAEBVCompoundTag@@AEAVDataLoadHelper@@@Z
    recheckSpawnPosition(): void;	// recheckSpawnPosition(void): void	 /// ?recheckSpawnPosition@Player@@QEAAXXZ
    reloadHardcoded(_1: unknown, _2: object): void;	// reloadHardcoded(Actor::InitializationMethod,VariantParameterList const &): void	 /// ?reloadHardcoded@Player@@UEAAXW4InitializationMethod@Actor@@AEBVVariantParameterList@@@Z
    remove(): void;	// remove(void): void	 /// ?remove@Player@@UEAAXXZ
    resetPlayerLevel(): void;	// resetPlayerLevel(void): void	 /// ?resetPlayerLevel@Player@@QEAAXXZ
    resetUserPos(_1: boolean): void;	// resetUserPos(bool): void	 /// ?resetUserPos@Player@@UEAAX_N@Z
    respawn(): void;	// respawn(void): void	 /// ?respawn@Player@@UEAAXXZ
    sendEventPacket(_1: object): void;	// sendEventPacket(EventPacket &): void	 /// ?sendEventPacket@Player@@UEBAXAEAVEventPacket@@@Z
    setAgent(_1: object): void;	// setAgent(Agent *): void	 /// ?setAgent@Player@@QEAAXPEAVAgent@@@Z
    setArmor(_1: unknown, _2: object): void;	// setArmor(ArmorSlot,ItemStack const &): void	 /// ?setArmor@Player@@UEAAXW4ArmorSlot@@AEBVItemStack@@@Z
    setBedRespawnPosition(_1: object): void;	// setBedRespawnPosition(BlockPos const &): void	 /// ?setBedRespawnPosition@Player@@QEAAXAEBVBlockPos@@@Z
    setBlockMovementSlowdownMultiplier(_1: object, _2: object): void;	// setBlockMovementSlowdownMultiplier(BlockLegacy const &,Vec3 const &): void	 /// ?setBlockMovementSlowdownMultiplier@Player@@UEAAXAEBVBlockLegacy@@AEBVVec3@@@Z
    setCarriedItem(_1: object): void;	// setCarriedItem(ItemStack const &): void	 /// ?setCarriedItem@Player@@UEAAXAEBVItemStack@@@Z
    setCursorSelectedItemGroup(_1: object): void;	// setCursorSelectedItemGroup(ItemGroup const &): void	 /// ?setCursorSelectedItemGroup@Player@@QEAAXAEBVItemGroup@@@Z
    setFieldOfViewModifier(_1: number): void;	// setFieldOfViewModifier(float): void	 /// ?setFieldOfViewModifier@Player@@UEAAXM@Z
    setOffhandSlot(_1: object): void;	// setOffhandSlot(ItemStack const &): void	 /// ?setOffhandSlot@Player@@UEAAXAEBVItemStack@@@Z
    setPermissions(_1: unknown): void;	// setPermissions(CommandPermissionLevel): void	 /// ?setPermissions@Player@@UEAAXW4CommandPermissionLevel@@@Z
    setPlayerGameType(_1: unknown): void;	// setPlayerGameType(GameType): void	 /// ?setPlayerGameType@Player@@UEAAXW4GameType@@@Z
    setRespawnPositionCandidate(): void;	// setRespawnPositionCandidate(void): void	 /// ?setRespawnPositionCandidate@Player@@QEAAXXZ
    setSize(_1: number, _2: number): void;	// setSize(float,float): void	 /// ?setSize@Player@@UEAAXMM@Z
    setSleeping(_1: boolean): void;	// setSleeping(bool): void	 /// ?setSleeping@Player@@UEAAX_N@Z
    setSpeed(_1: number): void;	// setSpeed(float): void	 /// ?setSpeed@Player@@UEAAXM@Z
    setUsedPotion(_1: boolean): void;	// setUsedPotion(bool): void	 /// ?setUsedPotion@Player@@QEAAX_N@Z
    shouldDropDeathLoot(): boolean;	// shouldDropDeathLoot(void): bool	 /// ?shouldDropDeathLoot@Player@@UEBA_NXZ
    spawnExperienceOrb(_1: object, _2: number): void;	// spawnExperienceOrb(Vec3 const &,int): void	 /// ?spawnExperienceOrb@Player@@QEAAXAEBVVec3@@H@Z
    startCooldown(_1: object, _2: boolean): void;	// startCooldown(Item const *,bool): void	 /// ?startCooldown@Player@@UEAAXPEBVItem@@_N@Z
    startDestroying(): void;	// startDestroying(void): void	 /// ?startDestroying@Player@@UEAAXXZ
    startSleepInBed(_1: object): bigint;	// startSleepInBed(BlockPos const &): enum BedSleepingResult	 /// ?startSleepInBed@Player@@UEAA?AW4BedSleepingResult@@AEBVBlockPos@@@Z
    startSpinAttack(): void;	// startSpinAttack(void): void	 /// ?startSpinAttack@Player@@UEAAXXZ
    startSwimming(): void;	// startSwimming(void): void	 /// ?startSwimming@Player@@UEAAXXZ
    startUsingItem(_1: object, _2: number): void;	// startUsingItem(ItemStack const &,int): void	 /// ?startUsingItem@Player@@QEAAXAEBVItemStack@@H@Z
    stopDestroying(): void;	// stopDestroying(void): void	 /// ?stopDestroying@Player@@UEAAXXZ
    stopSleepInBed(_1: boolean, _2: boolean): void;	// stopSleepInBed(bool,bool): void	 /// ?stopSleepInBed@Player@@UEAAX_N0@Z
    stopSpinAttack(): void;	// stopSpinAttack(void): void	 /// ?stopSpinAttack@Player@@UEAAXXZ
    stopSwimming(): void;	// stopSwimming(void): void	 /// ?stopSwimming@Player@@UEAAXXZ
    suspendRegion(): void;	// suspendRegion(void): void	 /// ?suspendRegion@Player@@UEAAXXZ
    take(_1: object, _2: number, _3: number): boolean;	// take(Actor &,int,int): bool	 /// ?take@Player@@QEAA_NAEAVActor@@HH@Z
    teleportTo(_1: object, _2: boolean, _3: number, _4: number): void;	// teleportTo(Vec3 const &,bool,int,int): void	 /// ?teleportTo@Player@@UEAAXAEBVVec3@@_NHH@Z
    tickWorld(_1: object): void;	// tickWorld(Tick const &): void	 /// ?tickWorld@Player@@UEAAXAEBUTick@@@Z
    travel(_1: object, _2: number, _3: number, _4: number): void;	// travel(IMobMovementProxy &,float,float,float): void	 /// ?travel@Player@@UEBAXAEAUIMobMovementProxy@@MMM@Z
    travel(_1: number, _2: number, _3: number): void;	// travel(float,float,float): void	 /// ?travel@Player@@UEAAXMMM@Z
    tryCreateAddActorPacket(): bigint;	// tryCreateAddActorPacket(void): class std::unique_ptr<class AddActorBasePacket,struct std::default_delete<class AddActorBasePacket> >	 /// ?tryCreateAddActorPacket@Player@@UEAA?AV?$unique_ptr@VAddActorBasePacket@@U?$default_delete@VAddActorBasePacket@@@std@@@std@@XZ
    tryGetFromEntity(_1: object, _2: boolean): Player;	// tryGetFromEntity(EntityContext &,bool): class Player * __ptr64	 /// ?tryGetFromEntity@Player@@SAPEAV1@AEAVEntityContext@@_N@Z
    unRegisterTrackedBoss(_1: unknown): void;	// unRegisterTrackedBoss(ActorUniqueID): void	 /// ?unRegisterTrackedBoss@Player@@UEAAXUActorUniqueID@@@Z
    updateGliding(): void;	// updateGliding(void): void	 /// ?updateGliding@Player@@MEAAXXZ
    updateSpawnChunkView(): void;	// updateSpawnChunkView(void): void	 /// ?updateSpawnChunkView@Player@@QEAAXXZ
    useItem(_1: object, _2: unknown, _3: boolean): void;	// useItem(ItemStackBase &,ItemUseMethod,bool): void	 /// ?useItem@Player@@UEAAXAEAVItemStackBase@@W4ItemUseMethod@@_N@Z
    useSelectedItem(_1: unknown, _2: boolean): void;	// useSelectedItem(ItemUseMethod,bool): void	 /// ?useSelectedItem@Player@@QEAAXW4ItemUseMethod@@_N@Z
    vehicleTick(): void;	// vehicleTick(void): void	 /// ?vehicleTick@Player@@UEAAXXZ
    // Inherited from Mob
    _aiStep(_1: object): void;	// _aiStep(IMobMovementProxy &): void	 /// ?_aiStep@Mob@@SAXAEAUIMobMovementProxy@@@Z
    _doInitialMove(): void;	// _doInitialMove(void): void	 /// ?_doInitialMove@Mob@@MEAAXXZ
    _doSprintParticleEffect(): void;	// _doSprintParticleEffect(void): void	 /// ?_doSprintParticleEffect@Mob@@IEAAXXZ
    _getAdjustedAABBForSpawnCheck(_1: object, _2: object): bigint;	// _getAdjustedAABBForSpawnCheck(AABB const &,Vec3 const &): class AABB	 /// ?_getAdjustedAABBForSpawnCheck@Mob@@MEBA?AVAABB@@AEBV2@AEBVVec3@@@Z
    _initHardCodedComponents(): boolean;	// _initHardCodedComponents(void): bool	 /// ?_initHardCodedComponents@Mob@@AEAA_NXZ
    _initialize(_1: object): void;	// _initialize(EntityContext &): void	 /// ?_initialize@Mob@@AEAAXAEAVEntityContext@@@Z
    _jumpFromGround(_1: object): void;	// _jumpFromGround(IMobMovementProxy &): void	 /// ?_jumpFromGround@Mob@@KAXAEAUIMobMovementProxy@@@Z
    _playStepSound(_1: object, _2: object): void;	// _playStepSound(BlockPos const &,Block const &): void	 /// ?_playStepSound@Mob@@MEAAXAEBVBlockPos@@AEBVBlock@@@Z
    _removePassenger(_1: object, _2: boolean, _3: boolean, _4: boolean): void;	// _removePassenger(ActorUniqueID const &,bool,bool,bool): void	 /// ?_removePassenger@Mob@@MEAAXAEBUActorUniqueID@@_N11@Z
    _tryApplyingLevitation(_1: object, _2: object): boolean;	// _tryApplyingLevitation(IMobMovementProxy const &,Vec3 &): bool	 /// ?_tryApplyingLevitation@Mob@@CA_NAEBUIMobMovementProxy@@AEAVVec3@@@Z
    _updateMobTravel(_1: object): void;	// _updateMobTravel(IMobMovementProxy &): void	 /// ?_updateMobTravel@Mob@@SAXAEAUIMobMovementProxy@@@Z
    _updateSprintingState(): void;	// _updateSprintingState(void): void	 /// ?_updateSprintingState@Mob@@AEAAXXZ
    addPassenger(_1: object): void;	// addPassenger(Actor &): void	 /// ?addPassenger@Mob@@UEAAXAEAVActor@@@Z
    animateHurt(): void;	// animateHurt(void): void	 /// ?animateHurt@Mob@@UEAAXXZ
    applyFinalFriction(_1: number, _2: boolean): void;	// applyFinalFriction(float,bool): void	 /// ?applyFinalFriction@Mob@@UEAAXM_N@Z
    ascendBlockByJumping(): void;	// ascendBlockByJumping(void): void	 /// ?ascendBlockByJumping@Mob@@UEAAXXZ
    ascendLadder(): void;	// ascendLadder(void): void	 /// ?ascendLadder@Mob@@UEAAXXZ
    attackAnimation(_1: object, _2: number): void;	// attackAnimation(Actor *,float): void	 /// ?attackAnimation@Mob@@UEAAXPEAVActor@@M@Z
    baseTick(): void;	// baseTick(void): void	 /// ?baseTick@Mob@@UEAAXXZ
    blockedByShield(_1: object, _2: object): void;	// blockedByShield(ActorDamageSource const &,Actor &): void	 /// ?blockedByShield@Mob@@UEAAXAEBVActorDamageSource@@AEAVActor@@@Z
    calcMoveRelativeSpeed(_1: unknown): number;	// calcMoveRelativeSpeed(TravelType): float	 /// ?calcMoveRelativeSpeed@Mob@@QEAAMW4TravelType@@@Z
    calculateJumpImpulse(_1: object): number;	// calculateJumpImpulse(IMobMovementProxy const &): float	 /// ?calculateJumpImpulse@Mob@@SAMAEBUIMobMovementProxy@@@Z
    canExistWhenDisallowMob(): boolean;	// canExistWhenDisallowMob(void): bool	 /// ?canExistWhenDisallowMob@Mob@@UEBA_NXZ
    canPowerJump(): boolean;	// canPowerJump(void): bool	 /// ?canPowerJump@Mob@@UEBA_NXZ
    causeFallDamage(_1: number, _2: number, _3: unknown): void;	// causeFallDamage(float,float,ActorDamageSource): void	 /// ?causeFallDamage@Mob@@MEAAXMMVActorDamageSource@@@Z
    checkSpawnObstruction(): boolean;	// checkSpawnObstruction(void): bool	 /// ?checkSpawnObstruction@Mob@@UEBA_NXZ
    checkSpawnRules(_1: boolean): boolean;	// checkSpawnRules(bool): bool	 /// ?checkSpawnRules@Mob@@UEAA_N_N@Z
    checkTotemDeathProtection(_1: object): boolean;	// checkTotemDeathProtection(ActorDamageSource const &): bool	 /// ?checkTotemDeathProtection@Mob@@QEAA_NAEBVActorDamageSource@@@Z
    clearEquipment(): number;	// clearEquipment(void): int	 /// ?clearEquipment@Mob@@UEAAHXZ
    clearVanishEnchantedItemsOnDeath(): void;	// clearVanishEnchantedItemsOnDeath(void): void	 /// ?clearVanishEnchantedItemsOnDeath@Mob@@UEAAXXZ
    containerChanged(_1: number): void;	// containerChanged(int): void	 /// ?containerChanged@Mob@@UEAAXH@Z
    createAIGoals(): boolean;	// createAIGoals(void): bool	 /// ?createAIGoals@Mob@@UEAA_NXZ
    descendBlockByCrouching(): void;	// descendBlockByCrouching(void): void	 /// ?descendBlockByCrouching@Mob@@UEAAXXZ
    doFireHurt(_1: number): boolean;	// doFireHurt(int): bool	 /// ?doFireHurt@Mob@@UEAA_NH@Z
    doHurtTarget(_1: object, _2: object): boolean;	// doHurtTarget(Actor *,ActorDamageCause const &): bool	 /// ?doHurtTarget@Mob@@UEAA_NPEAVActor@@AEBW4ActorDamageCause@@@Z
    dropBags(): void;	// dropBags(void): void	 /// ?dropBags@Mob@@MEAAXXZ
    dropContainer(): void;	// dropContainer(void): void	 /// ?dropContainer@Mob@@UEAAXXZ
    frostWalk(): void;	// frostWalk(void): void	 /// ?frostWalk@Mob@@QEAAXXZ
    getAllArmorID(): bigint;	// getAllArmorID(void): class std::vector<int,class std::allocator<int> >	 /// ?getAllArmorID@Mob@@UEBA?AV?$vector@HV?$allocator@H@std@@@std@@XZ
    getArmorColorInSlot(_1: unknown, _2: number): number;	// getArmorColorInSlot(ArmorSlot,int): float	 /// ?getArmorColorInSlot@Mob@@UEBAMW4ArmorSlot@@H@Z
    getArmorCoverPercentage(): number;	// getArmorCoverPercentage(void): float	 /// ?getArmorCoverPercentage@Mob@@UEBAMXZ
    getArmorMaterialTextureTypeInSlot(_1: unknown): bigint;	// getArmorMaterialTextureTypeInSlot(ArmorSlot): enum ArmorTextureType	 /// ?getArmorMaterialTextureTypeInSlot@Mob@@UEBA?AW4ArmorTextureType@@W4ArmorSlot@@@Z
    getArmorMaterialTypeInSlot(_1: unknown): bigint;	// getArmorMaterialTypeInSlot(ArmorSlot): enum ArmorMaterialType	 /// ?getArmorMaterialTypeInSlot@Mob@@UEBA?AW4ArmorMaterialType@@W4ArmorSlot@@@Z
    getArmorTypeHash(): number;	// getArmorTypeHash(void): int	 /// ?getArmorTypeHash@Mob@@UEAAHXZ
    getArmorValue(): number;	// getArmorValue(void): int	 /// ?getArmorValue@Mob@@UEBAHXZ
    getAttackAnim(_1: number): number;	// getAttackAnim(float): float	 /// ?getAttackAnim@Mob@@UEAAMM@Z
    getBlockDamageCause(_1: object): bigint;	// getBlockDamageCause(Block const &): enum ActorDamageCause	 /// ?getBlockDamageCause@Mob@@UEBA?AW4ActorDamageCause@@AEBVBlock@@@Z
    getCaravanHead(): bigint;	// getCaravanHead(void): struct ActorUniqueID	 /// ?getCaravanHead@Mob@@UEBA?AUActorUniqueID@@XZ
    getCaravanSize(): number;	// getCaravanSize(void): int	 /// ?getCaravanSize@Mob@@QEBAHXZ
    getCurrentSwingDuration(): number;	// getCurrentSwingDuration(void): int	 /// ?getCurrentSwingDuration@Mob@@IEAAHXZ
    getDamageAfterArmorReduction(_1: object, _2: number): number;	// getDamageAfterArmorReduction(ActorDamageSource const &,float): float	 /// ?getDamageAfterArmorReduction@Mob@@UEBAMAEBVActorDamageSource@@M@Z
    getDamageAfterEnchantReduction(_1: object, _2: number): number;	// getDamageAfterEnchantReduction(ActorDamageSource const &,float): float	 /// ?getDamageAfterEnchantReduction@Mob@@UEBAMAEBVActorDamageSource@@M@Z
    getDamageAfterResistanceEffect(_1: object, _2: number): number;	// getDamageAfterResistanceEffect(ActorDamageSource const &,float): float	 /// ?getDamageAfterResistanceEffect@Mob@@UEBAMAEBVActorDamageSource@@M@Z
    getDeathSound(): bigint;	// getDeathSound(void): enum LevelSoundEvent	 /// ?getDeathSound@Mob@@UEAA?AW4LevelSoundEvent@@XZ
    getDeathTime(): number;	// getDeathTime(void): int	 /// ?getDeathTime@Mob@@UEBAHXZ
    getHurtSound(): bigint;	// getHurtSound(void): enum LevelSoundEvent	 /// ?getHurtSound@Mob@@UEAA?AW4LevelSoundEvent@@XZ
    getInterpolatedBodyRot(_1: number): number;	// getInterpolatedBodyRot(float): float	 /// ?getInterpolatedBodyRot@Mob@@UEBAMM@Z
    getInterpolatedBodyYaw(_1: number): number;	// getInterpolatedBodyYaw(float): float	 /// ?getInterpolatedBodyYaw@Mob@@UEBAMM@Z
    getInterpolatedHeadRot(_1: number): number;	// getInterpolatedHeadRot(float): float	 /// ?getInterpolatedHeadRot@Mob@@UEBAMM@Z
    getItemInHandIcon(_1: object, _2: number): bigint;	// getItemInHandIcon(ItemStack const &,int): struct TextureUVCoordinateSet const * __ptr64	 /// ?getItemInHandIcon@Mob@@UEAAPEBUTextureUVCoordinateSet@@AEBVItemStack@@H@Z
    getItemUseIntervalAxis(): number;	// getItemUseIntervalAxis(void): int	 /// ?getItemUseIntervalAxis@Mob@@UEBAHXZ
    getJumpEffectAmplifierValue(_1: object): number;	// getJumpEffectAmplifierValue(IMobMovementProxy const &): float	 /// ?getJumpEffectAmplifierValue@Mob@@SAMAEBUIMobMovementProxy@@@Z
    getJumpEffectAmplifierValue(): number;	// getJumpEffectAmplifierValue(void): float	 /// ?getJumpEffectAmplifierValue@Mob@@QEAAMXZ
    getJumpPower(): number;	// getJumpPower(void): float	 /// ?getJumpPower@Mob@@UEBAMXZ
    getJumpPrevention(_1: object): bigint;	// getJumpPrevention(IMobMovementProxy const &): struct JumpPreventionResult	 /// ?getJumpPrevention@Mob@@SA?AUJumpPreventionResult@@AEBUIMobMovementProxy@@@Z
    getJumpPrevention(): bigint;	// getJumpPrevention(void): struct JumpPreventionResult	 /// ?getJumpPrevention@Mob@@QEAA?AUJumpPreventionResult@@XZ
    getMaxHeadXRot(): number;	// getMaxHeadXRot(void): float	 /// ?getMaxHeadXRot@Mob@@UEAAMXZ
    getMeleeKnockbackBonus(): number;	// getMeleeKnockbackBonus(void): int	 /// ?getMeleeKnockbackBonus@Mob@@UEAAHXZ
    getMeleeWeaponDamageBonus(_1: object): number;	// getMeleeWeaponDamageBonus(Mob *): float	 /// ?getMeleeWeaponDamageBonus@Mob@@UEAAMPEAV1@@Z
    getTimeAlongSwing(): number;	// getTimeAlongSwing(void): int	 /// ?getTimeAlongSwing@Mob@@UEBAHXZ
    getToughnessValue(): number;	// getToughnessValue(void): int	 /// ?getToughnessValue@Mob@@UEBAHXZ
    getTravelType(_1: object): bigint;	// getTravelType(IMobMovementProxy &): enum TravelType	 /// ?getTravelType@Mob@@SA?AW4TravelType@@AEAUIMobMovementProxy@@@Z
    getTravelType(): bigint;	// getTravelType(void): enum TravelType	 /// ?getTravelType@Mob@@QEAA?AW4TravelType@@XZ
    getYHeadRot(): number;	// getYHeadRot(void): float	 /// ?getYHeadRot@Mob@@UEBAMXZ
    getYawSpeedInDegreesPerSecond(): number;	// getYawSpeedInDegreesPerSecond(void): float	 /// ?getYawSpeedInDegreesPerSecond@Mob@@UEBAMXZ
    hasBoundOrigin(): boolean;	// hasBoundOrigin(void): bool	 /// ?hasBoundOrigin@Mob@@QEBA_NXZ
    hasCaravanTail(): boolean;	// hasCaravanTail(void): bool	 /// ?hasCaravanTail@Mob@@UEBA_NXZ
    hasComponent(_1: object): boolean;	// hasComponent(HashedString const &): bool	 /// ?hasComponent@Mob@@UEBA_NAEBVHashedString@@@Z
    hurtArmor(_1: object, _2: number): void;	// hurtArmor(ActorDamageSource const &,int): void	 /// ?hurtArmor@Mob@@QEAAXAEBVActorDamageSource@@H@Z
    hurtEffects(_1: object, _2: number, _3: boolean, _4: boolean): void;	// hurtEffects(ActorDamageSource const &,float,bool,bool): void	 /// ?hurtEffects@Mob@@UEAAXAEBVActorDamageSource@@M_N1@Z
    inCaravan(): boolean;	// inCaravan(void): bool	 /// ?inCaravan@Mob@@UEBA_NXZ
    isAbleToMove(): boolean;	// isAbleToMove(void): bool	 /// ?isAbleToMove@Mob@@QEBA_NXZ
    isAlive(): boolean;	// isAlive(void): bool	 /// ?isAlive@Mob@@UEBA_NXZ
    isFrostWalking(): boolean;	// isFrostWalking(void): bool	 /// ?isFrostWalking@Mob@@QEBA_NXZ
    isImmobile(_1: object): boolean;	// isImmobile(IActorMovementProxy const &): bool	 /// ?isImmobile@Mob@@SA_NAEBUIActorMovementProxy@@@Z
    isLookingAtAnEntity(): boolean;	// isLookingAtAnEntity(void): bool	 /// ?isLookingAtAnEntity@Mob@@UEAA_NXZ
    isPickable(): boolean;	// isPickable(void): bool	 /// ?isPickable@Mob@@UEAA_NXZ
    isRolling(): boolean;	// isRolling(void): bool	 /// ?isRolling@Mob@@QEBA_NXZ
    isSprinting(): boolean;	// isSprinting(void): bool	 /// ?isSprinting@Mob@@QEBA_NXZ
    isSurfaceMob(): boolean;	// isSurfaceMob(void): bool	 /// ?isSurfaceMob@Mob@@UEBA_NXZ
    joinCaravan(_1: object): void;	// joinCaravan(Mob *): void	 /// ?joinCaravan@Mob@@UEAAXPEAV1@@Z
    kill(): void;	// kill(void): void	 /// ?kill@Mob@@UEAAXXZ
    knockback(_1: object, _2: number, _3: number, _4: number, _5: number, _6: number, _7: number): void;	// knockback(Actor *,int,float,float,float,float,float): void	 /// ?knockback@Mob@@UEAAXPEAVActor@@HMMMMM@Z
    leaveCaravan(): void;	// leaveCaravan(void): void	 /// ?leaveCaravan@Mob@@UEAAXXZ
    lookAt(_1: object, _2: number, _3: number): void;	// lookAt(Actor *,float,float): void	 /// ?lookAt@Mob@@UEAAXPEAVActor@@MM@Z
    newServerAiStep(): void;	// newServerAiStep(void): void	 /// ?newServerAiStep@Mob@@MEAAXXZ
    onPlayerJump(_1: number): void;	// onPlayerJump(int): void	 /// ?onPlayerJump@Mob@@QEAAXH@Z
    outOfWorld(): void;	// outOfWorld(void): void	 /// ?outOfWorld@Mob@@MEAAXXZ
    processSoulSpeed(): void;	// processSoulSpeed(void): void	 /// ?processSoulSpeed@Mob@@IEAAXXZ
    pushActors(): void;	// pushActors(void): void	 /// ?pushActors@Mob@@UEAAXXZ
    reloadHardcodedClient(_1: unknown, _2: object): void;	// reloadHardcodedClient(Actor::InitializationMethod,VariantParameterList const &): void	 /// ?reloadHardcodedClient@Mob@@UEAAXW4InitializationMethod@Actor@@AEBVVariantParameterList@@@Z
    resetAttributes(): void;	// resetAttributes(void): void	 /// ?resetAttributes@Mob@@QEAAXXZ
    resetNoActionTime(): void;	// resetNoActionTime(void): void	 /// ?resetNoActionTime@Mob@@QEAAXXZ
    sendInventory(_1: boolean): void;	// sendInventory(bool): void	 /// ?sendInventory@Mob@@UEAAX_N@Z
    setDamagedArmor(_1: unknown, _2: object): void;	// setDamagedArmor(ArmorSlot,ItemStack const &): void	 /// ?setDamagedArmor@Mob@@UEAAXW4ArmorSlot@@AEBVItemStack@@@Z
    setEquippedSlot(_1: unknown, _2: object): void;	// setEquippedSlot(EquipmentSlot,ItemStack const &): void	 /// ?setEquippedSlot@Mob@@UEAAXW4EquipmentSlot@@AEBVItemStack@@@Z
    setItemSlot(_1: unknown, _2: object): boolean;	// setItemSlot(EquipmentSlot,ItemStack const &): bool	 /// ?setItemSlot@Mob@@UEAA_NW4EquipmentSlot@@AEBVItemStack@@@Z
    setSprinting(_1: boolean): void;	// setSprinting(bool): void	 /// ?setSprinting@Mob@@UEAAX_N@Z
    setTarget(_1: object): void;	// setTarget(Actor *): void	 /// ?setTarget@Mob@@UEAAXPEAVActor@@@Z
    setTransitioningSitting(_1: boolean): void;	// setTransitioningSitting(bool): void	 /// ?setTransitioningSitting@Mob@@UEAAX_N@Z
    setYHeadRot(_1: number): void;	// setYHeadRot(float): void	 /// ?setYHeadRot@Mob@@UEAAXM@Z
    startRiding(_1: object): boolean;	// startRiding(Actor &): bool	 /// ?startRiding@Mob@@UEAA_NAEAVActor@@@Z
    stopRiding(_1: boolean, _2: boolean, _3: boolean): void;	// stopRiding(bool,bool,bool): void	 /// ?stopRiding@Mob@@UEAAX_N00@Z
    swing(): void;	// swing(void): void	 /// ?swing@Mob@@UEAAXXZ
    tickDeath(): void;	// tickDeath(void): void	 /// ?tickDeath@Mob@@MEAAXXZ
    updateAi(): void;	// updateAi(void): void	 /// ?updateAi@Mob@@MEAAXXZ
    updateAttackAnim(): void;	// updateAttackAnim(void): void	 /// ?updateAttackAnim@Mob@@IEAAXXZ
    updateEntitySpecificMolangVariables(_1: object): void;	// updateEntitySpecificMolangVariables(RenderParams &): void	 /// ?updateEntitySpecificMolangVariables@Mob@@MEAAXAEAVRenderParams@@@Z
    updateEquipment(): void;	// updateEquipment(void): void	 /// ?updateEquipment@Mob@@UEAAXXZ
    // Inherited from Actor
    _containsSneakCollisionShapes(_1: object, _2: object): boolean;	// _containsSneakCollisionShapes(IActorMovementProxy &,AABB const &): bool	 /// ?_containsSneakCollisionShapes@Actor@@CA_NAEAUIActorMovementProxy@@AEBVAABB@@@Z
    _drop(_1: object, _2: boolean): unknown;	// _drop(ItemStack const &,bool): class ItemActor const * __ptr64	 /// ?_drop@Actor@@IEAAPEBVItemActor@@AEBVItemStack@@_N@Z
    _initAliasProperties(): void;	// _initAliasProperties(void): void	 /// ?_initAliasProperties@Actor@@AEAAXXZ
    _isHeadInWater(): boolean;	// _isHeadInWater(void): bool	 /// ?_isHeadInWater@Actor@@IEBA_NXZ
    _isItemStackNetManagerEnabled(): boolean;	// _isItemStackNetManagerEnabled(void): bool	 /// ?_isItemStackNetManagerEnabled@Actor@@AEBA_NXZ
    _move(_1: object, _2: object): void;	// _move(IActorMovementProxy &,Vec3 const &): void	 /// ?_move@Actor@@SAXAEAUIActorMovementProxy@@AEBVVec3@@@Z
    _moveHitboxTo(_1: object): void;	// _moveHitboxTo(Vec3 const &): void	 /// ?_moveHitboxTo@Actor@@AEAAXAEBVVec3@@@Z
    _playFlySound(_1: object, _2: object): void;	// _playFlySound(BlockPos const &,Block const &): void	 /// ?_playFlySound@Actor@@MEAAXAEBVBlockPos@@AEBVBlock@@@Z
    _playMovementSound(_1: boolean): void;	// _playMovementSound(bool): void	 /// ?_playMovementSound@Actor@@IEAAX_N@Z
    _randomHeartPos(): bigint;	// _randomHeartPos(void): class Vec3	 /// ?_randomHeartPos@Actor@@QEAA?AVVec3@@XZ
    _refreshAABB(): void;	// _refreshAABB(void): void	 /// ?_refreshAABB@Actor@@IEAAXXZ
    _sendDirtyActorData(): void;	// _sendDirtyActorData(void): void	 /// ?_sendDirtyActorData@Actor@@QEAAXXZ
    _sendLinkPacket(_1: object): void;	// _sendLinkPacket(ActorLink const &): void	 /// ?_sendLinkPacket@Actor@@AEBAXAEBUActorLink@@@Z
    _serverInitItemStackIds(): void;	// _serverInitItemStackIds(void): void	 /// ?_serverInitItemStackIds@Actor@@MEAAXXZ
    _setHeightOffset(_1: number): void;	// _setHeightOffset(float): void	 /// ?_setHeightOffset@Actor@@IEAAXM@Z
    _setPos(_1: object): void;	// _setPos(Vec3 const &): void	 /// ?_setPos@Actor@@IEAAXAEBVVec3@@@Z
    _setupServerAnimationComponent(): void;	// _setupServerAnimationComponent(void): void	 /// ?_setupServerAnimationComponent@Actor@@AEAAXXZ
    _spawnPukeParticles(): void;	// _spawnPukeParticles(void): void	 /// ?_spawnPukeParticles@Actor@@AEAAXXZ
    _updateComposition(_1: boolean): void;	// _updateComposition(bool): void	 /// ?_updateComposition@Actor@@AEAAX_N@Z
    addEffect(_1: object): void;	// addEffect(MobEffectInstance const &): void	 /// ?addEffect@Actor@@QEAAXAEBVMobEffectInstance@@@Z
    applySnapshot(_1: object, _2: object): void;	// applySnapshot(PlayerSnapshotComponent const &,PlayerSnapshotComponent const &): void	 /// ?applySnapshot@Actor@@UEAAXAEBUPlayerSnapshotComponent@@0@Z
    buildForward(): bigint;	// buildForward(void): class Vec3	 /// ?buildForward@Actor@@QEBA?AVVec3@@XZ
    burn(_1: number, _2: boolean): void;	// burn(int,bool): void	 /// ?burn@Actor@@QEAAXH_N@Z
    calcCenterPos(): bigint;	// calcCenterPos(void): class Vec3	 /// ?calcCenterPos@Actor@@QEBA?AVVec3@@XZ
    canAttack(_1: object, _2: boolean): boolean;	// canAttack(Actor *,bool): bool	 /// ?canAttack@Actor@@UEBA_NPEAV1@_N@Z
    canBeAffected(_1: object): boolean;	// canBeAffected(MobEffectInstance const &): bool	 /// ?canBeAffected@Actor@@UEBA_NAEBVMobEffectInstance@@@Z
    canBeAffected(_1: number): boolean;	// canBeAffected(int): bool	 /// ?canBeAffected@Actor@@UEBA_NH@Z
    canBeAffectedByArrow(_1: object): boolean;	// canBeAffectedByArrow(MobEffectInstance const &): bool	 /// ?canBeAffectedByArrow@Actor@@UEBA_NAEBVMobEffectInstance@@@Z
    canBeginOrContinueClimbingLadder(): boolean;	// canBeginOrContinueClimbingLadder(void): bool	 /// ?canBeginOrContinueClimbingLadder@Actor@@QEBA_NXZ
    canCurrentlySwim(): boolean;	// canCurrentlySwim(void): bool	 /// ?canCurrentlySwim@Actor@@QEBA_NXZ
    canDisableShield(): boolean;	// canDisableShield(void): bool	 /// ?canDisableShield@Actor@@UEAA_NXZ
    canFly(): boolean;	// canFly(void): bool	 /// ?canFly@Actor@@QEBA_NXZ
    canSee(_1: object): boolean;	// canSee(Actor const &): bool	 /// ?canSee@Actor@@UEBA_NAEBV1@@Z
    canSee(_1: object): boolean;	// canSee(Vec3 const &): bool	 /// ?canSee@Actor@@UEBA_NAEBVVec3@@@Z
    canShowNameTag(): boolean;	// canShowNameTag(void): bool	 /// ?canShowNameTag@Actor@@UEBA_NXZ
    celebrateHunt(_1: number, _2: boolean): void;	// celebrateHunt(int,bool): void	 /// ?celebrateHunt@Actor@@QEAAXH_N@Z
    checkEntityOnewayCollision(_1: object, _2: object): void;	// checkEntityOnewayCollision(BlockSource &,BlockPos const &): void	 /// ?checkEntityOnewayCollision@Actor@@SAXAEAVBlockSource@@AEBVBlockPos@@@Z
    checkFallDamage(_1: number, _2: boolean): void;	// checkFallDamage(float,bool): void	 /// ?checkFallDamage@Actor@@UEAAXM_N@Z
    checkInsideBlocks(_1: number): void;	// checkInsideBlocks(float): void	 /// ?checkInsideBlocks@Actor@@MEAAXM@Z
    chorusFruitTeleport(_1: object): void;	// chorusFruitTeleport(Vec3 const &): void	 /// ?chorusFruitTeleport@Actor@@UEAAXAEBVVec3@@@Z
    closerThan(_1: object, _2: number): boolean;	// closerThan(Actor const &,float): bool	 /// ?closerThan@Actor@@QEBA_NAEBV1@M@Z
    consumeItem(_1: object, _2: number): void;	// consumeItem(ItemActor &,int): void	 /// ?consumeItem@Actor@@QEAAXAEAVItemActor@@H@Z
    damageSensorComponentHurt(_1: object, _2: object, _3: boolean): boolean;	// damageSensorComponentHurt(float &,ActorDamageSource const &,bool): bool	 /// ?damageSensorComponentHurt@Actor@@QEAA_NAEAMAEBVActorDamageSource@@_N@Z
    despawn(): void;	// despawn(void): void	 /// ?despawn@Actor@@UEAAXXZ
    distanceSqrToBlockPosCenter(_1: object): number;	// distanceSqrToBlockPosCenter(BlockPos const &): float	 /// ?distanceSqrToBlockPosCenter@Actor@@QEBAMAEBVBlockPos@@@Z
    distanceTo(_1: object): number;	// distanceTo(Actor const &): float	 /// ?distanceTo@Actor@@QEBAMAEBV1@@Z
    distanceTo(_1: object): number;	// distanceTo(Vec3 const &): float	 /// ?distanceTo@Actor@@QEBAMAEBVVec3@@@Z
    distanceToSqr(_1: object): number;	// distanceToSqr(Actor const &): float	 /// ?distanceToSqr@Actor@@QEBAMAEBV1@@Z
    distanceToSqr(_1: object): number;	// distanceToSqr(Vec3 const &): float	 /// ?distanceToSqr@Actor@@QEBAMAEBVVec3@@@Z
    doWaterSplashEffect(): void;	// doWaterSplashEffect(void): void	 /// ?doWaterSplashEffect@Actor@@MEAAXXZ
    dropLeash(_1: boolean, _2: boolean): void;	// dropLeash(bool,bool): void	 /// ?dropLeash@Actor@@QEAAX_N0@Z
    dropTowards(_1: object, _2: unknown): void;	// dropTowards(ItemStack const &,Vec3): void	 /// ?dropTowards@Actor@@QEAAXAEBVItemStack@@VVec3@@@Z
    extractSnapshot(_1: object): void;	// extractSnapshot(PlayerSnapshotComponent &): void	 /// ?extractSnapshot@Actor@@UEBAXAEAUPlayerSnapshotComponent@@@Z
    fetchFishingHook(): unknown;	// fetchFishingHook(void): class FishingHook * __ptr64	 /// ?fetchFishingHook@Actor@@QEAAPEAVFishingHook@@XZ
    fetchNearbyActorsSorted(_1: object, _2: unknown): bigint;	// fetchNearbyActorsSorted(Vec3 const &,ActorType): class std::vector<struct DistanceSortedActor,class std::allocator<struct DistanceSortedActor> >	 /// ?fetchNearbyActorsSorted@Actor@@QEAA?AV?$vector@UDistanceSortedActor@@V?$allocator@UDistanceSortedActor@@@std@@@std@@AEBVVec3@@W4ActorType@@@Z
    fetchNearbyAttackableActorsSorted(_1: object, _2: unknown): bigint;	// fetchNearbyAttackableActorsSorted(Vec3 const &,ActorType): class std::vector<struct DistanceSortedActor,class std::allocator<struct DistanceSortedActor> >	 /// ?fetchNearbyAttackableActorsSorted@Actor@@QEAA?AV?$vector@UDistanceSortedActor@@V?$allocator@UDistanceSortedActor@@@std@@@std@@AEBVVec3@@W4ActorType@@@Z
    filterFormattedNameTag(_1: object): void;	// filterFormattedNameTag(UIProfanityContext const &): void	 /// ?filterFormattedNameTag@Actor@@UEAAXAEBVUIProfanityContext@@@Z
    flagPassengerToRemove(_1: object): void;	// flagPassengerToRemove(Actor &): void	 /// ?flagPassengerToRemove@Actor@@UEAAXAEAV1@@Z
    getAABBDim(): unknown;	// getAABBDim(void): class Vec2 const & __ptr64	 /// ?getAABBDim@Actor@@QEBAAEBVVec2@@XZ
    getActiveEffectCount(): number;	// getActiveEffectCount(void): int	 /// ?getActiveEffectCount@Actor@@QEBAHXZ
    getActorIdentifier(): bigint;	// getActorIdentifier(void): struct ActorDefinitionIdentifier const & __ptr64	 /// ?getActorIdentifier@Actor@@QEBAAEBUActorDefinitionIdentifier@@XZ
    getAllArmor(): bigint;	// getAllArmor(void): class std::vector<class ItemStack const * __ptr64,class std::allocator<class ItemStack const * __ptr64> >	 /// ?getAllArmor@Actor@@UEBA?AV?$vector@PEBVItemStack@@V?$allocator@PEBVItemStack@@@std@@@std@@XZ
    getAmbientSound(): bigint;	// getAmbientSound(void): enum LevelSoundEvent	 /// ?getAmbientSound@Actor@@UEBA?AW4LevelSoundEvent@@XZ
    getArmor(_1: unknown): ItemStack;	// getArmor(ArmorSlot): class ItemStack const & __ptr64	 /// ?getArmor@Actor@@UEBAAEBVItemStack@@W4ArmorSlot@@@Z
    getArmorContainer(): SimpleContainer;	// getArmorContainer(void): class SimpleContainer const & __ptr64	 /// ?getArmorContainer@Actor@@QEBAAEBVSimpleContainer@@XZ
    getAttribute(_1: object): unknown;	// getAttribute(Attribute const &): class AttributeInstance const & __ptr64	 /// ?getAttribute@Actor@@UEBAAEBVAttributeInstance@@AEBVAttribute@@@Z
    getBlockPosCurrentlyStandingOn(_1: object): bigint;	// getBlockPosCurrentlyStandingOn(Actor *): class BlockPos	 /// ?getBlockPosCurrentlyStandingOn@Actor@@QEBA?AVBlockPos@@PEAV1@@Z
    getBlockPosCurrentlyStandingOn(_1: object, _2: object): bigint;	// getBlockPosCurrentlyStandingOn(IActorMovementProxy const &,IActorMovementProxy *): class BlockPos	 /// ?getBlockPosCurrentlyStandingOn@Actor@@SA?AVBlockPos@@AEBUIActorMovementProxy@@PEAU3@@Z
    getBlockWhenClimbing(_1: object): unknown;	// getBlockWhenClimbing(IActorMovementProxy const &): class Block const & __ptr64	 /// ?getBlockWhenClimbing@Actor@@KAAEBVBlock@@AEBUIActorMovementProxy@@@Z
    getBrightness(_1: number): number;	// getBrightness(float): float	 /// ?getBrightness@Actor@@UEBAMM@Z
    getCarriedItem(): ItemStack;	// getCarriedItem(void): class ItemStack const & __ptr64	 /// ?getCarriedItem@Actor@@UEBAAEBVItemStack@@XZ
    getChestSlots(): number;	// getChestSlots(void): int	 /// ?getChestSlots@Actor@@UEBAHXZ
    getColor(): bigint;	// getColor(void): enum PaletteColor	 /// ?getColor@Actor@@QEBA?AW4PaletteColor@@XZ
    getDamageNearbyMobs(): boolean;	// getDamageNearbyMobs(void): bool	 /// ?getDamageNearbyMobs@Actor@@QEBA_NXZ
    getDimensionConst(): Dimension;	// getDimensionConst(void): class Dimension const & __ptr64	 /// ?getDimensionConst@Actor@@QEBAAEBVDimension@@XZ
    getDimensionId(): bigint;	// getDimensionId(void): class AutomaticID<class Dimension,int>	 /// ?getDimensionId@Actor@@UEBA?AV?$AutomaticID@VDimension@@H@@XZ
    getEconomyTradeableComponent(): unknown;	// getEconomyTradeableComponent(void): class EconomyTradeableComponent * __ptr64	 /// ?getEconomyTradeableComponent@Actor@@QEBAPEAVEconomyTradeableComponent@@XZ
    getEffect(_1: object): unknown;	// getEffect(MobEffect const &): class MobEffectInstance const * __ptr64	 /// ?getEffect@Actor@@QEBAPEBVMobEffectInstance@@AEBVMobEffect@@@Z
    getEntityData(): SynchedActorData;	// getEntityData(void): class SynchedActorData const & __ptr64	 /// ?getEntityData@Actor@@QEBAAEBVSynchedActorData@@XZ
    getEquipSlots(): number;	// getEquipSlots(void): int	 /// ?getEquipSlots@Actor@@UEBAHXZ
    getEquipmentCount(): number;	// getEquipmentCount(void): int	 /// ?getEquipmentCount@Actor@@UEBAHXZ
    getEquippedSlot(_1: unknown): ItemStack;	// getEquippedSlot(EquipmentSlot): class ItemStack const & __ptr64	 /// ?getEquippedSlot@Actor@@UEBAAEBVItemStack@@W4EquipmentSlot@@@Z
    getFiringPos(): bigint;	// getFiringPos(void): class Vec3	 /// ?getFiringPos@Actor@@UEBA?AVVec3@@XZ
    getFirstAvailableSeatPos(_1: object, _2: object): boolean;	// getFirstAvailableSeatPos(Actor &,Vec3 &): bool	 /// ?getFirstAvailableSeatPos@Actor@@QEBA_NAEAV1@AEAVVec3@@@Z
    getFirstPassenger(): Actor;	// getFirstPassenger(void): class Actor * __ptr64	 /// ?getFirstPassenger@Actor@@QEBAPEAV1@XZ
    getHeadLookVector(_1: number): bigint;	// getHeadLookVector(float): class Vec3	 /// ?getHeadLookVector@Actor@@UEBA?AVVec3@@M@Z
    getHealth(): number;	// getHealth(void): int	 /// ?getHealth@Actor@@QEBAHXZ
    getInteraction(_1: object, _2: object, _3: object): boolean;	// getInteraction(Player &,ActorInteraction &,Vec3 const &): bool	 /// ?getInteraction@Actor@@UEAA_NAEAVPlayer@@AEAVActorInteraction@@AEBVVec3@@@Z
    getInterpolatedPosition(_1: number): bigint;	// getInterpolatedPosition(float): class Vec3	 /// ?getInterpolatedPosition@Actor@@QEBA?AVVec3@@M@Z
    getInterpolatedRidingPosition(_1: number): bigint;	// getInterpolatedRidingPosition(float): class Vec3	 /// ?getInterpolatedRidingPosition@Actor@@UEBA?AVVec3@@M@Z
    getInterpolatedRotation(_1: number): bigint;	// getInterpolatedRotation(float): class Vec2	 /// ?getInterpolatedRotation@Actor@@QEBA?AVVec2@@M@Z
    getInterpolatedWalkAnimSpeed(_1: number): number;	// getInterpolatedWalkAnimSpeed(float): float	 /// ?getInterpolatedWalkAnimSpeed@Actor@@UEBAMM@Z
    getInventorySize(): number;	// getInventorySize(void): int	 /// ?getInventorySize@Actor@@UEBAHXZ
    getLastHurtByMob(): Mob;	// getLastHurtByMob(void): class Mob * __ptr64	 /// ?getLastHurtByMob@Actor@@UEAAPEAVMob@@XZ
    getLastHurtByPlayer(): Player;	// getLastHurtByPlayer(void): class Player * __ptr64	 /// ?getLastHurtByPlayer@Actor@@UEAAPEAVPlayer@@XZ
    getLastHurtMob(): Mob;	// getLastHurtMob(void): class Mob * __ptr64	 /// ?getLastHurtMob@Actor@@UEAAPEAVMob@@XZ
    getLastHurtMobTimestamp(): number;	// getLastHurtMobTimestamp(void): int	 /// ?getLastHurtMobTimestamp@Actor@@QEAAHXZ
    getLastHurtTimestamp(): bigint;	// getLastHurtTimestamp(void): unsigned __int64	 /// ?getLastHurtTimestamp@Actor@@QEBA_KXZ
    getLevel(): Level;	// getLevel(void): class Level const & __ptr64	 /// ?getLevel@Actor@@QEBAAEBVLevel@@XZ
    getLinks(): bigint;	// getLinks(void): class std::vector<struct ActorLink,class std::allocator<struct ActorLink> >	 /// ?getLinks@Actor@@QEBA?AV?$vector@UActorLink@@V?$allocator@UActorLink@@@std@@@std@@XZ
    getLiquidAABB(_1: unknown): bigint;	// getLiquidAABB(MaterialType): class AABB	 /// ?getLiquidAABB@Actor@@UEBA?AVAABB@@W4MaterialType@@@Z
    getLiquidFlowStrength(_1: unknown): number;	// getLiquidFlowStrength(MaterialType): float	 /// ?getLiquidFlowStrength@Actor@@SAMW4MaterialType@@@Z
    getLootTable(): unknown;	// getLootTable(void): class LootTable * __ptr64	 /// ?getLootTable@Actor@@UEAAPEAVLootTable@@XZ
    getMapDecorationRotation(): number;	// getMapDecorationRotation(void): float	 /// ?getMapDecorationRotation@Actor@@UEBAMXZ
    getMaxHealth(): number;	// getMaxHealth(void): int	 /// ?getMaxHealth@Actor@@QEBAHXZ
    getMovementProxy(): bigint;	// getMovementProxy(void): class gsl::not_null<class std::shared_ptr<struct IActorMovementProxy const> >	 /// ?getMovementProxy@Actor@@QEBA?AV?$not_null@V?$shared_ptr@$$CBUIActorMovementProxy@@@std@@@gsl@@XZ
    getMutableAttribute(_1: object): unknown;	// getMutableAttribute(Attribute const &): class AttributeInstance * __ptr64	 /// ?getMutableAttribute@Actor@@UEAAPEAVAttributeInstance@@AEBVAttribute@@@Z
    getNameTag(): unknown;	// getNameTag(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64	 /// ?getNameTag@Actor@@UEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
    getNameTagAsHash(): bigint;	// getNameTagAsHash(void): unsigned __int64	 /// ?getNameTagAsHash@Actor@@UEBA_KXZ
    getNextStep(_1: number): number;	// getNextStep(float): float	 /// ?getNextStep@Actor@@UEAAMM@Z
    getOffhandSlot(): ItemStack;	// getOffhandSlot(void): class ItemStack const & __ptr64	 /// ?getOffhandSlot@Actor@@QEBAAEBVItemStack@@XZ
    getOnDeathExperience(): number;	// getOnDeathExperience(void): int	 /// ?getOnDeathExperience@Actor@@QEAAHXZ
    getOwner(): Mob;	// getOwner(void): class Mob * __ptr64	 /// ?getOwner@Actor@@QEBAPEAVMob@@XZ
    getOwnerEntityType(): bigint;	// getOwnerEntityType(void): enum ActorType	 /// ?getOwnerEntityType@Actor@@UEAA?AW4ActorType@@XZ
    getOwnerId(): bigint;	// getOwnerId(void): struct ActorUniqueID const	 /// ?getOwnerId@Actor@@QEBA?BUActorUniqueID@@XZ
    getPassengerIndex(_1: object): number;	// getPassengerIndex(Actor const &): int	 /// ?getPassengerIndex@Actor@@QEBAHAEBV1@@Z
    getPassengerYRotation(_1: object): number;	// getPassengerYRotation(Actor const &): float	 /// ?getPassengerYRotation@Actor@@UEBAMAEBV1@@Z
    getPersistingTradeOffers(): bigint;	// getPersistingTradeOffers(void): class std::unique_ptr<class CompoundTag,struct std::default_delete<class CompoundTag> >	 /// ?getPersistingTradeOffers@Actor@@QEAA?AV?$unique_ptr@VCompoundTag@@U?$default_delete@VCompoundTag@@@std@@@std@@XZ
    getPickRadius(): number;	// getPickRadius(void): float	 /// ?getPickRadius@Actor@@UEAAMXZ
    getPlayerOwner(): Player;	// getPlayerOwner(void): class Player * __ptr64	 /// ?getPlayerOwner@Actor@@QEBAPEAVPlayer@@XZ
    getPortalCooldown(): number;	// getPortalCooldown(void): int	 /// ?getPortalCooldown@Actor@@UEBAHXZ
    getPosDelta(): unknown;	// getPosDelta(void): class Vec3 const & __ptr64	 /// ?getPosDelta@Actor@@QEBAAEBVVec3@@XZ
    getPosExtrapolated(_1: number): unknown;	// getPosExtrapolated(float): class Vec3 const	 /// ?getPosExtrapolated@Actor@@UEBA?BVVec3@@M@Z
    getPosPrev(): unknown;	// getPosPrev(void): class Vec3 const & __ptr64	 /// ?getPosPrev@Actor@@UEBAAEBVVec3@@XZ
    getPosition(): unknown;	// getPosition(void): class Vec3 const & __ptr64	 /// ?getPosition@Actor@@UEBAAEBVVec3@@XZ
    getPredictedMovementValues(): bigint;	// getPredictedMovementValues(void): struct PredictedMovementValues const & __ptr64	 /// ?getPredictedMovementValues@Actor@@UEBAAEBUPredictedMovementValues@@XZ
    getRandom(): Random;	// getRandom(void): class Random & __ptr64	 /// ?getRandom@Actor@@QEBAAEAVRandom@@XZ
    getRegionConst(): BlockSource;	// getRegionConst(void): class BlockSource const & __ptr64	 /// ?getRegionConst@Actor@@QEBAAEBVBlockSource@@XZ
    getRotation(): bigint;	// getRotation(void): class Vec2	 /// ?getRotation@Actor@@QEBA?AVVec2@@XZ
    getRuntimeID(): bigint;	// getRuntimeID(void): class ActorRuntimeID	 /// ?getRuntimeID@Actor@@QEBA?AVActorRuntimeID@@XZ
    getScoreTag(): unknown;	// getScoreTag(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64	 /// ?getScoreTag@Actor@@UEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
    getShadowHeightOffs(): number;	// getShadowHeightOffs(void): float	 /// ?getShadowHeightOffs@Actor@@UEAAMXZ
    getShadowRadius(): number;	// getShadowRadius(void): float	 /// ?getShadowRadius@Actor@@UEBAMXZ
    getSourceUniqueID(): bigint;	// getSourceUniqueID(void): struct ActorUniqueID	 /// ?getSourceUniqueID@Actor@@UEBA?AUActorUniqueID@@XZ
    getSpeedInMetersPerSecond(): number;	// getSpeedInMetersPerSecond(void): float	 /// ?getSpeedInMetersPerSecond@Actor@@QEBAMXZ
    getStatusFlag(_1: unknown): boolean;	// getStatusFlag(ActorFlags): bool	 /// ?getStatusFlag@Actor@@QEBA_NW4ActorFlags@@@Z
    getStructuralIntegrity(): number;	// getStructuralIntegrity(void): int	 /// ?getStructuralIntegrity@Actor@@QEBAHXZ
    getTags(): unknown;	// getTags(void): class gsl::span<class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> >,-1> const	 /// ?getTags@Actor@@QEBA?BV?$span@V?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@$0?0@gsl@@XZ
    getTarget(): Actor;	// getTarget(void): class Actor * __ptr64	 /// ?getTarget@Actor@@QEBAPEAV1@XZ
    getTradeOffers(): unknown;	// getTradeOffers(void): class MerchantRecipeList * __ptr64	 /// ?getTradeOffers@Actor@@QEAAPEAVMerchantRecipeList@@XZ
    getTradingPlayer(): Player;	// getTradingPlayer(void): class Player * __ptr64	 /// ?getTradingPlayer@Actor@@QEBAPEAVPlayer@@XZ
    getUniqueID(): bigint;	// getUniqueID(void): struct ActorUniqueID const & __ptr64	 /// ?getUniqueID@Actor@@QEBAAEBUActorUniqueID@@XZ
    getVariant(): number;	// getVariant(void): int	 /// ?getVariant@Actor@@QEBAHXZ
    getVehicle(): Actor;	// getVehicle(void): class Actor * __ptr64	 /// ?getVehicle@Actor@@QEBAPEAV1@XZ
    getVehicleRoot(): Actor;	// getVehicleRoot(void): class Actor * __ptr64	 /// ?getVehicleRoot@Actor@@QEBAPEAV1@XZ
    getVehicleRuntimeID(): bigint;	// getVehicleRuntimeID(void): class ActorRuntimeID	 /// ?getVehicleRuntimeID@Actor@@QEBA?AVActorRuntimeID@@XZ
    getVerticalSpeedInMetersPerSecond(): number;	// getVerticalSpeedInMetersPerSecond(void): float	 /// ?getVerticalSpeedInMetersPerSecond@Actor@@QEBAMXZ
    getViewVector(_1: object, _2: number): bigint;	// getViewVector(IActorMovementProxy const &,float): class Vec3	 /// ?getViewVector@Actor@@SA?AVVec3@@AEBUIActorMovementProxy@@M@Z
    getViewVector(_1: number): bigint;	// getViewVector(float): class Vec3	 /// ?getViewVector@Actor@@QEBA?AVVec3@@M@Z
    handleFallDistanceOnServer(_1: number, _2: number, _3: boolean): void;	// handleFallDistanceOnServer(float,float,bool): void	 /// ?handleFallDistanceOnServer@Actor@@UEAAXMM_N@Z
    handleInsidePortal(_1: object): void;	// handleInsidePortal(BlockPos const &): void	 /// ?handleInsidePortal@Actor@@UEAAXAEBVBlockPos@@@Z
    hasCategory(_1: unknown): boolean;	// hasCategory(ActorCategory): bool	 /// ?hasCategory@Actor@@QEBA_NW4ActorCategory@@@Z
    hasEffect(_1: object): boolean;	// hasEffect(MobEffect const &): bool	 /// ?hasEffect@Actor@@QEBA_NAEBVMobEffect@@@Z
    hasEnteredWater(): boolean;	// hasEnteredWater(void): bool	 /// ?hasEnteredWater@Actor@@UEBA_NXZ
    hasFamily(_1: object): boolean;	// hasFamily(HashedString const &): bool	 /// ?hasFamily@Actor@@QEBA_NAEBVHashedString@@@Z
    hasPassenger(): boolean;	// hasPassenger(void): bool	 /// ?hasPassenger@Actor@@QEBA_NXZ
    hasPlayerPassenger(): boolean;	// hasPlayerPassenger(void): bool	 /// ?hasPlayerPassenger@Actor@@QEBA_NXZ
    hasSaddle(): boolean;	// hasSaddle(void): bool	 /// ?hasSaddle@Actor@@QEBA_NXZ
    hasSubBBIn(_1: object, _2: unknown): boolean;	// hasSubBBIn(IActorMovementProxy const &,MaterialType): bool	 /// ?hasSubBBIn@Actor@@SA_NAEBUIActorMovementProxy@@W4MaterialType@@@Z
    hasTickingArea(): boolean;	// hasTickingArea(void): bool	 /// ?hasTickingArea@Actor@@QEBA_NXZ
    hasType(_1: unknown): boolean;	// hasType(ActorType): bool	 /// ?hasType@Actor@@QEBA_NW4ActorType@@@Z
    heal(_1: number): void;	// heal(int): void	 /// ?heal@Actor@@UEAAXH@Z
    hurt(_1: object, _2: number, _3: boolean, _4: boolean): boolean;	// hurt(ActorDamageSource const &,float,bool,bool): bool	 /// ?hurt@Actor@@QEAA_NAEBVActorDamageSource@@M_N1@Z
    initActorProperties(): void;	// initActorProperties(void): void	 /// ?initActorProperties@Actor@@QEAAXXZ
    initParams(_1: object): void;	// initParams(VariantParameterList &): void	 /// ?initParams@Actor@@QEAAXAEAVVariantParameterList@@@Z
    interpolatorTick(): void;	// interpolatorTick(void): void	 /// ?interpolatorTick@Actor@@UEAAXXZ
    intersects(_1: object, _2: object): boolean;	// intersects(Vec3 const &,Vec3 const &): bool	 /// ?intersects@Actor@@UEBA_NAEBVVec3@@0@Z
    isActorLocationInMaterial(_1: unknown, _2: unknown): boolean;	// isActorLocationInMaterial(ActorLocation,MaterialType): bool	 /// ?isActorLocationInMaterial@Actor@@QEBA_NW4ActorLocation@@W4MaterialType@@@Z
    isAffectedByWaterBottle(): boolean;	// isAffectedByWaterBottle(void): bool	 /// ?isAffectedByWaterBottle@Actor@@UEBA_NXZ
    isAttackableGamemode(): boolean;	// isAttackableGamemode(void): bool	 /// ?isAttackableGamemode@Actor@@UEBA_NXZ
    isBaby(): boolean;	// isBaby(void): bool	 /// ?isBaby@Actor@@QEBA_NXZ
    isChested(): boolean;	// isChested(void): bool	 /// ?isChested@Actor@@QEBA_NXZ
    isClientSide(): boolean;	// isClientSide(void): bool	 /// ?isClientSide@Actor@@UEBA_NXZ
    isControlledByLocalInstance(): boolean;	// isControlledByLocalInstance(void): bool	 /// ?isControlledByLocalInstance@Actor@@QEBA_NXZ
    isEnchanted(): boolean;	// isEnchanted(void): bool	 /// ?isEnchanted@Actor@@UEBA_NXZ
    isFireImmune(): boolean;	// isFireImmune(void): bool	 /// ?isFireImmune@Actor@@UEBA_NXZ
    isFree(_1: object, _2: object, _3: number): boolean;	// isFree(IActorMovementProxy &,Vec3 const &,float): bool	 /// ?isFree@Actor@@SA_NAEAUIActorMovementProxy@@AEBVVec3@@M@Z
    isInClouds(): boolean;	// isInClouds(void): bool	 /// ?isInClouds@Actor@@QEBA_NXZ
    isInLava(): boolean;	// isInLava(void): bool	 /// ?isInLava@Actor@@UEBA_NXZ
    isInPrecipitation(): boolean;	// isInPrecipitation(void): bool	 /// ?isInPrecipitation@Actor@@QEBA_NXZ
    isInRain(): boolean;	// isInRain(void): bool	 /// ?isInRain@Actor@@QEBA_NXZ
    isInSnow(): boolean;	// isInSnow(void): bool	 /// ?isInSnow@Actor@@QEBA_NXZ
    isInThunderstorm(): boolean;	// isInThunderstorm(void): bool	 /// ?isInThunderstorm@Actor@@QEBA_NXZ
    isInWall(): boolean;	// isInWall(void): bool	 /// ?isInWall@Actor@@UEBA_NXZ
    isInWater(): boolean;	// isInWater(void): bool	 /// ?isInWater@Actor@@UEBA_NXZ
    isInWaterOrRain(): boolean;	// isInWaterOrRain(void): bool	 /// ?isInWaterOrRain@Actor@@QEBA_NXZ
    isInsideBorderBlock(_1: number): boolean;	// isInsideBorderBlock(float): bool	 /// ?isInsideBorderBlock@Actor@@QEBA_NM@Z
    isInvertedHealAndHarm(): boolean;	// isInvertedHealAndHarm(void): bool	 /// ?isInvertedHealAndHarm@Actor@@UEBA_NXZ
    isInvisible(): boolean;	// isInvisible(void): bool	 /// ?isInvisible@Actor@@UEBA_NXZ
    isLeashed(): boolean;	// isLeashed(void): bool	 /// ?isLeashed@Actor@@QEBA_NXZ
    isMoving(): boolean;	// isMoving(void): bool	 /// ?isMoving@Actor@@QEBA_NXZ
    isOnFire(): boolean;	// isOnFire(void): bool	 /// ?isOnFire@Actor@@UEBA_NXZ
    isOnHotBlock(): boolean;	// isOnHotBlock(void): bool	 /// ?isOnHotBlock@Actor@@UEBA_NXZ
    isOverWater(): boolean;	// isOverWater(void): bool	 /// ?isOverWater@Actor@@UEBA_NXZ
    isPacified(): boolean;	// isPacified(void): bool	 /// ?isPacified@Actor@@QEBA_NXZ
    isPassenger(_1: object): boolean;	// isPassenger(Actor const &): bool	 /// ?isPassenger@Actor@@QEBA_NAEBV1@@Z
    isPersistent(): boolean;	// isPersistent(void): bool	 /// ?isPersistent@Actor@@QEBA_NXZ
    isPowered(): boolean;	// isPowered(void): bool	 /// ?isPowered@Actor@@QEBA_NXZ
    isRegionValid(): boolean;	// isRegionValid(void): bool	 /// ?isRegionValid@Actor@@QEBA_NXZ
    isRemoved(): boolean;	// isRemoved(void): bool	 /// ?isRemoved@Actor@@QEBA_NXZ
    isRiding(_1: object): boolean;	// isRiding(Actor *): bool	 /// ?isRiding@Actor@@QEBA_NPEAV1@@Z
    isRiding(): boolean;	// isRiding(void): bool	 /// ?isRiding@Actor@@QEBA_NXZ
    isSilent(): boolean;	// isSilent(void): bool	 /// ?isSilent@Actor@@UEAA_NXZ
    isSitting(_1: object): boolean;	// isSitting(IActorMovementProxy const &): bool	 /// ?isSitting@Actor@@SA_NAEBUIActorMovementProxy@@@Z
    isSitting(): boolean;	// isSitting(void): bool	 /// ?isSitting@Actor@@QEBA_NXZ
    isSkyLit(_1: number): boolean;	// isSkyLit(float): bool	 /// ?isSkyLit@Actor@@UEAA_NM@Z
    isSneaking(): boolean;	// isSneaking(void): bool	 /// ?isSneaking@Actor@@QEBA_NXZ
    isStanding(): boolean;	// isStanding(void): bool	 /// ?isStanding@Actor@@QEBA_NXZ
    isSwimming(): boolean;	// isSwimming(void): bool	 /// ?isSwimming@Actor@@QEBA_NXZ
    isTame(): boolean;	// isTame(void): bool	 /// ?isTame@Actor@@QEBA_NXZ
    isTouchingDamageBlock(): boolean;	// isTouchingDamageBlock(void): bool	 /// ?isTouchingDamageBlock@Actor@@QEBA_NXZ
    isType(_1: unknown): boolean;	// isType(ActorType): bool	 /// ?isType@Actor@@QEBA_NW4ActorType@@@Z
    isUnderLiquid(_1: unknown): boolean;	// isUnderLiquid(MaterialType): bool	 /// ?isUnderLiquid@Actor@@UEBA_NW4MaterialType@@@Z
    isWearingLeatherArmor(): bigint;	// isWearingLeatherArmor(void): bool const	 /// ?isWearingLeatherArmor@Actor@@UEBA?B_NXZ
    killed(_1: object): void;	// killed(Actor &): void	 /// ?killed@Actor@@UEAAXAEAV1@@Z
    lerpMotion(_1: object): void;	// lerpMotion(Vec3 const &): void	 /// ?lerpMotion@Actor@@UEAAXAEBVVec3@@@Z
    lerpTo(_1: object, _2: object, _3: number): void;	// lerpTo(Vec3 const &,Vec2 const &,int): void	 /// ?lerpTo@Actor@@QEAAXAEBVVec3@@AEBVVec2@@H@Z
    lerpToRotation(_1: object, _2: number): void;	// lerpToRotation(Vec2 const &,int): void	 /// ?lerpToRotation@Actor@@QEAAXAEBVVec2@@H@Z
    load(_1: object, _2: object): boolean;	// load(CompoundTag const &,DataLoadHelper &): bool	 /// ?load@Actor@@UEAA_NAEBVCompoundTag@@AEAVDataLoadHelper@@@Z
    loadEntityFlags(_1: object, _2: object): void;	// loadEntityFlags(CompoundTag const &,DataLoadHelper &): void	 /// ?loadEntityFlags@Actor@@QEAAXAEBVCompoundTag@@AEAVDataLoadHelper@@@Z
    lovePartnerId(): bigint;	// lovePartnerId(void): struct ActorUniqueID const & __ptr64	 /// ?lovePartnerId@Actor@@QEBAAEBUActorUniqueID@@XZ
    markHurt(): void;	// markHurt(void): void	 /// ?markHurt@Actor@@MEAAXXZ
    moveBBs(_1: object): void;	// moveBBs(Vec3 const &): void	 /// ?moveBBs@Actor@@QEAAXAEBVVec3@@@Z
    moveTo(_1: object, _2: object): void;	// moveTo(Vec3 const &,Vec2 const &): void	 /// ?moveTo@Actor@@QEAAXAEBVVec3@@AEBVVec2@@@Z
    onAboveBubbleColumn(_1: boolean): void;	// onAboveBubbleColumn(bool): void	 /// ?onAboveBubbleColumn@Actor@@UEAAX_N@Z
    onAffectedByWaterBottle(): void;	// onAffectedByWaterBottle(void): void	 /// ?onAffectedByWaterBottle@Actor@@QEAAXXZ
    onClimbableBlock(_1: object): boolean;	// onClimbableBlock(IActorMovementProxy const &): bool	 /// ?onClimbableBlock@Actor@@SA_NAEBUIActorMovementProxy@@@Z
    onEffectAdded(_1: object): void;	// onEffectAdded(MobEffectInstance &): void	 /// ?onEffectAdded@Actor@@UEAAXAEAVMobEffectInstance@@@Z
    onEffectRemoved(_1: object): void;	// onEffectRemoved(MobEffectInstance &): void	 /// ?onEffectRemoved@Actor@@UEAAXAEAVMobEffectInstance@@@Z
    onEffectUpdated(_1: object): void;	// onEffectUpdated(MobEffectInstance &): void	 /// ?onEffectUpdated@Actor@@UEAAXAEAVMobEffectInstance@@@Z
    onInsideBubbleColumn(_1: boolean): void;	// onInsideBubbleColumn(bool): void	 /// ?onInsideBubbleColumn@Actor@@UEAAX_N@Z
    onLightningHit(): void;	// onLightningHit(void): void	 /// ?onLightningHit@Actor@@UEAAXXZ
    onOrphan(): void;	// onOrphan(void): void	 /// ?onOrphan@Actor@@UEAAXXZ
    onSynchedDataUpdate(_1: number): void;	// onSynchedDataUpdate(int): void	 /// ?onSynchedDataUpdate@Actor@@UEAAXH@Z
    onSynchedFlagUpdate(_1: number, _2: bigint, _3: bigint): void;	// onSynchedFlagUpdate(int,__int64,__int64): void	 /// ?onSynchedFlagUpdate@Actor@@UEAAXH_J0@Z
    openContainerComponent(_1: object): void;	// openContainerComponent(Player &): void	 /// ?openContainerComponent@Actor@@UEAAXAEAVPlayer@@@Z
    performRangedAttack(_1: object, _2: number): void;	// performRangedAttack(Actor &,float): void	 /// ?performRangedAttack@Actor@@UEAAXAEAV1@M@Z
    pickUpItem(_1: object, _2: number): void;	// pickUpItem(ItemActor &,int): void	 /// ?pickUpItem@Actor@@QEAAXAEAVItemActor@@H@Z
    playAmbientSound(): void;	// playAmbientSound(void): void	 /// ?playAmbientSound@Actor@@UEAAXXZ
    playSound(_1: unknown, _2: object, _3: object): void;	// playSound(LevelSoundEvent,Vec3 const &,Block const &): void	 /// ?playSound@Actor@@QEAAXW4LevelSoundEvent@@AEBVVec3@@AEBVBlock@@@Z
    playSound(_1: unknown, _2: object, _3: number): void;	// playSound(LevelSoundEvent,Vec3 const &,int): void	 /// ?playSound@Actor@@QEAAXW4LevelSoundEvent@@AEBVVec3@@H@Z
    playSynchronizedSound(_1: unknown, _2: object, _3: object, _4: boolean): void;	// playSynchronizedSound(LevelSoundEvent,Vec3 const &,Block const &,bool): void	 /// ?playSynchronizedSound@Actor@@UEAAXW4LevelSoundEvent@@AEBVVec3@@AEBVBlock@@_N@Z
    playSynchronizedSound(_1: unknown, _2: object, _3: number, _4: boolean): void;	// playSynchronizedSound(LevelSoundEvent,Vec3 const &,int,bool): void	 /// ?playSynchronizedSound@Actor@@UEAAXW4LevelSoundEvent@@AEBVVec3@@H_N@Z
    positionAllPassengers(): void;	// positionAllPassengers(void): void	 /// ?positionAllPassengers@Actor@@QEAAXXZ
    positionPassenger(_1: object, _2: number): void;	// positionPassenger(Actor &,float): void	 /// ?positionPassenger@Actor@@UEAAXAEAV1@M@Z
    pushBackActionEventToActionQueue(_1: unknown): void;	// pushBackActionEventToActionQueue(ActionEvent): void	 /// ?pushBackActionEventToActionQueue@Actor@@QEAAXVActionEvent@@@Z
    pushOutOfBlocks(_1: object): void;	// pushOutOfBlocks(Vec3 const &): void	 /// ?pushOutOfBlocks@Actor@@MEAAXAEBVVec3@@@Z
    reload(): void;	// reload(void): void	 /// ?reload@Actor@@QEAAXXZ
    reloadComponents(_1: unknown, _2: object): void;	// reloadComponents(Actor::InitializationMethod,VariantParameterList const &): void	 /// ?reloadComponents@Actor@@MEAAXW4InitializationMethod@1@AEBVVariantParameterList@@@Z
    reloadLootTable(_1: object): void;	// reloadLootTable(EquipmentTableDefinition const &): void	 /// ?reloadLootTable@Actor@@UEAAXAEBUEquipmentTableDefinition@@@Z
    reloadLootTable(): void;	// reloadLootTable(void): void	 /// ?reloadLootTable@Actor@@UEAAXXZ
    removeAllPassengers(_1: boolean, _2: boolean): void;	// removeAllPassengers(bool,bool): void	 /// ?removeAllPassengers@Actor@@QEAAX_N0@Z
    removeEffect(_1: number): void;	// removeEffect(int): void	 /// ?removeEffect@Actor@@QEAAXH@Z
    reset(): void;	// reset(void): void	 /// ?reset@Actor@@UEAAXXZ
    resetBlockMovementSlowdownMultiplier(): void;	// resetBlockMovementSlowdownMultiplier(void): void	 /// ?resetBlockMovementSlowdownMultiplier@Actor@@UEAAXXZ
    resetClientAnimations(): void;	// resetClientAnimations(void): void	 /// ?resetClientAnimations@Actor@@QEAAXXZ
    resetRegion(): void;	// resetRegion(void): void	 /// ?resetRegion@Actor@@QEAAXXZ
    save(_1: object): boolean;	// save(CompoundTag &): bool	 /// ?save@Actor@@UEAA_NAEAVCompoundTag@@@Z
    saveWithoutId(_1: object): void;	// saveWithoutId(CompoundTag &): void	 /// ?saveWithoutId@Actor@@UEAAXAEAVCompoundTag@@@Z
    sendMotionPacketIfNeeded(): void;	// sendMotionPacketIfNeeded(void): void	 /// ?sendMotionPacketIfNeeded@Actor@@UEAAXXZ
    sendMotionToServer(): void;	// sendMotionToServer(void): void	 /// ?sendMotionToServer@Actor@@QEAAXXZ
    serializationSetHealth(_1: number): void;	// serializationSetHealth(int): void	 /// ?serializationSetHealth@Actor@@QEAAXH@Z
    setAABB(_1: object): void;	// setAABB(AABB const &): void	 /// ?setAABB@Actor@@QEAAXAEBVAABB@@@Z
    setAABBDim(_1: object): void;	// setAABBDim(Vec2 const &): void	 /// ?setAABBDim@Actor@@QEAAXAEBVVec2@@@Z
    setActorRendererId(_1: unknown): void;	// setActorRendererId(HashedString): void	 /// ?setActorRendererId@Actor@@QEAAXVHashedString@@@Z
    setCanPowerJump(_1: boolean): void;	// setCanPowerJump(bool): void	 /// ?setCanPowerJump@Actor@@UEAAX_N@Z
    setChainedDamageEffects(_1: boolean): void;	// setChainedDamageEffects(bool): void	 /// ?setChainedDamageEffects@Actor@@QEAAX_N@Z
    setCharged(_1: boolean): void;	// setCharged(bool): void	 /// ?setCharged@Actor@@QEAAX_N@Z
    setColor(_1: unknown): void;	// setColor(PaletteColor): void	 /// ?setColor@Actor@@QEAAXW4PaletteColor@@@Z
    setControllingSeat(_1: number): void;	// setControllingSeat(int): void	 /// ?setControllingSeat@Actor@@QEAAXH@Z
    setDamageNearbyMobs(_1: boolean): void;	// setDamageNearbyMobs(bool): void	 /// ?setDamageNearbyMobs@Actor@@UEAAX_N@Z
    setGlobal(_1: boolean): void;	// setGlobal(bool): void	 /// ?setGlobal@Actor@@QEAAX_N@Z
    setInLove(_1: object): void;	// setInLove(Actor *): void	 /// ?setInLove@Actor@@QEAAXPEAV1@@Z
    setInvisible(_1: boolean): void;	// setInvisible(bool): void	 /// ?setInvisible@Actor@@QEAAX_N@Z
    setLastHitBB(_1: object, _2: object): void;	// setLastHitBB(Vec3 const &,Vec3 const &): void	 /// ?setLastHitBB@Actor@@QEAAXAEBVVec3@@0@Z
    setLastHurtByMob(_1: object): void;	// setLastHurtByMob(Mob *): void	 /// ?setLastHurtByMob@Actor@@UEAAXPEAVMob@@@Z
    setLastHurtByPlayer(_1: object): void;	// setLastHurtByPlayer(Player *): void	 /// ?setLastHurtByPlayer@Actor@@UEAAXPEAVPlayer@@@Z
    setLastHurtMob(_1: object): void;	// setLastHurtMob(Actor *): void	 /// ?setLastHurtMob@Actor@@UEAAXPEAV1@@Z
    setLeashHolder(_1: unknown): void;	// setLeashHolder(ActorUniqueID): void	 /// ?setLeashHolder@Actor@@QEAAXUActorUniqueID@@@Z
    setMoving(_1: boolean): void;	// setMoving(bool): void	 /// ?setMoving@Actor@@QEAAX_N@Z
    setNameTagVisible(_1: boolean): void;	// setNameTagVisible(bool): void	 /// ?setNameTagVisible@Actor@@UEAAX_N@Z
    setOwner(_1: unknown): void;	// setOwner(ActorUniqueID): void	 /// ?setOwner@Actor@@UEAAXUActorUniqueID@@@Z
    setPersistent(): void;	// setPersistent(void): void	 /// ?setPersistent@Actor@@QEAAXXZ
    setPos(_1: object): void;	// setPos(Vec3 const &): void	 /// ?setPos@Actor@@UEAAXAEBVVec3@@@Z
    setPreviousPosRot(_1: object, _2: object): void;	// setPreviousPosRot(Vec3 const &,Vec2 const &): void	 /// ?setPreviousPosRot@Actor@@QEAAXAEBVVec3@@AEBVVec2@@@Z
    setRegion(_1: object): void;	// setRegion(BlockSource &): void	 /// ?setRegion@Actor@@QEAAXAEAVBlockSource@@@Z
    setResting(_1: boolean): void;	// setResting(bool): void	 /// ?setResting@Actor@@QEAAX_N@Z
    setRot(_1: object): void;	// setRot(Vec2 const &): void	 /// ?setRot@Actor@@UEAAXAEBVVec2@@@Z
    setSitting(_1: boolean): void;	// setSitting(bool): void	 /// ?setSitting@Actor@@UEAAX_N@Z
    setSneaking(_1: boolean): void;	// setSneaking(bool): void	 /// ?setSneaking@Actor@@UEAAX_N@Z
    setStanding(_1: boolean): void;	// setStanding(bool): void	 /// ?setStanding@Actor@@UEAAX_N@Z
    setStatusFlag(_1: unknown, _2: boolean): void;	// setStatusFlag(ActorFlags,bool): void	 /// ?setStatusFlag@Actor@@QEAAXW4ActorFlags@@_N@Z
    setStrength(_1: number): void;	// setStrength(int): void	 /// ?setStrength@Actor@@QEAAXH@Z
    setVariant(_1: number): void;	// setVariant(int): void	 /// ?setVariant@Actor@@QEAAXH@Z
    shouldRender(): boolean;	// shouldRender(void): bool	 /// ?shouldRender@Actor@@UEBA_NXZ
    shouldTick(): boolean;	// shouldTick(void): bool	 /// ?shouldTick@Actor@@UEBA_NXZ
    shouldTryMakeStepSound(): boolean;	// shouldTryMakeStepSound(void): bool	 /// ?shouldTryMakeStepSound@Actor@@MEAA_NXZ
    spawnAtLocation(_1: object, _2: number): unknown;	// spawnAtLocation(Block const &,int): class ItemActor * __ptr64	 /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@AEBVBlock@@H@Z
    spawnAtLocation(_1: object, _2: number, _3: number): unknown;	// spawnAtLocation(Block const &,int,float): class ItemActor * __ptr64	 /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@AEBVBlock@@HM@Z
    spawnAtLocation(_1: object, _2: number): unknown;	// spawnAtLocation(ItemStack const &,float): class ItemActor * __ptr64	 /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@AEBVItemStack@@M@Z
    spawnAtLocation(_1: number, _2: number): unknown;	// spawnAtLocation(int,int): class ItemActor * __ptr64	 /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@HH@Z
    spawnAtLocation(_1: number, _2: number, _3: number): unknown;	// spawnAtLocation(int,int,float): class ItemActor * __ptr64	 /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@HHM@Z
    spawnBalloonPopParticles(): void;	// spawnBalloonPopParticles(void): void	 /// ?spawnBalloonPopParticles@Actor@@QEAAXXZ
    spawnDustParticles(_1: number): void;	// spawnDustParticles(int): void	 /// ?spawnDustParticles@Actor@@QEAAXH@Z
    spawnTamingParticles(_1: boolean): void;	// spawnTamingParticles(bool): void	 /// ?spawnTamingParticles@Actor@@QEAAX_N@Z
    spawnTrailBubbles(): void;	// spawnTrailBubbles(void): void	 /// ?spawnTrailBubbles@Actor@@MEAAXXZ
    teleportPassengersTo(_1: object, _2: number, _3: number): void;	// teleportPassengersTo(Vec3 const &,int,int): void	 /// ?teleportPassengersTo@Actor@@QEAAXAEBVVec3@@HH@Z
    thawFreezeEffect(): void;	// thawFreezeEffect(void): void	 /// ?thawFreezeEffect@Actor@@UEAAXXZ
    tick(_1: object): boolean;	// tick(BlockSource &): bool	 /// ?tick@Actor@@QEAA_NAEAVBlockSource@@@Z
    tickLeash(): void;	// tickLeash(void): void	 /// ?tickLeash@Actor@@UEAAXXZ
    transferTickingArea(_1: object): void;	// transferTickingArea(Dimension &): void	 /// ?transferTickingArea@Actor@@QEAAXAEAVDimension@@@Z
    tryGetFromEntity(): bigint;	 /// Actor::tryGetFromEntity
    tryMoveChunks(): boolean;	// tryMoveChunks(void): bool	 /// ?tryMoveChunks@Actor@@QEAA_NXZ
    tryTeleportTo(_1: object, _2: boolean, _3: boolean, _4: number, _5: number): boolean;	// tryTeleportTo(Vec3 const &,bool,bool,int,int): bool	 /// ?tryTeleportTo@Actor@@UEAA_NAEBVVec3@@_N1HH@Z
    updateDescription(): void;	// updateDescription(void): void	 /// ?updateDescription@Actor@@QEAAXXZ
    updateEntityInside(_1: object): void;	// updateEntityInside(AABB const &): void	 /// ?updateEntityInside@Actor@@UEAAXAEBVAABB@@@Z
    updateEntityInside(): void;	// updateEntityInside(void): void	 /// ?updateEntityInside@Actor@@UEAAXXZ
    updateInsideBlock(): void;	// updateInsideBlock(void): void	 /// ?updateInsideBlock@Actor@@MEAAXXZ
    updateWaterState(): boolean;	// updateWaterState(void): bool	 /// ?updateWaterState@Actor@@MEAA_NXZ
    useSaddle(_1: object, _2: object): boolean;	// useSaddle(ItemStackBase &,Player *): bool	 /// ?useSaddle@Actor@@QEAA_NAEAVItemStackBase@@PEAVPlayer@@@Z
    wasHurt(): boolean;	// wasHurt(void): bool	 /// ?wasHurt@Actor@@UEAA_NXZ
    wasLastHitByPlayer(): boolean;	// wasLastHitByPlayer(void): bool	 /// ?wasLastHitByPlayer@Actor@@QEAA_NXZ
    wobble(): void;	// wobble(void): void	 /// ?wobble@Actor@@UEAAXXZ
}
declare class ResourceLocation {
    // Attributes 
    hashCode: bigint;
    // Methods 
    // Inherited from ResourceLocation
    ResourceLocation(_1: object): ResourceLocation;	// ResourceLocation(Core::Path const &)	 /// ??0ResourceLocation@@QEAA@AEBVPath@Core@@@Z
    ResourceLocation(): ResourceLocation;	// ResourceLocation(void)	 /// ??0ResourceLocation@@QEAA@XZ
    getFullPath(): bigint;	// getFullPath(void): class Core::PathBuffer<class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > >	 /// ?getFullPath@ResourceLocation@@QEBA?AV?$PathBuffer@V?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@@Core@@XZ
}
declare class ScreenController {
    // Attributes 
    // Methods 
    // Inherited from ScreenController
}
declare class Mat4x4 {
    // Attributes 
    data: object;
    // Methods 
    // Inherited from Mat4x4
}
declare class SynchedActorData {
    // Attributes 
    numData: number;
    begin: AnyPtr;
    endOfAllocated: AnyPtr;
    end: AnyPtr;
    // Methods 
    // Inherited from SynchedActorData
    _clone(): bigint;	// _clone(void): class SynchedActorData	 /// ?_clone@SynchedActorData@@QEBA?AV1@XZ
    _get(_1: number): unknown;	// _get(ushort): class DataItem & __ptr64	 /// ?_get@SynchedActorData@@AEAAAEAVDataItem@@G@Z
    _resizeToContain(_1: number): void;	// _resizeToContain(ushort): void	 /// ?_resizeToContain@SynchedActorData@@AEAAXG@Z
    getCompoundTag(_1: number): CompoundTag;	// getCompoundTag(ushort): class CompoundTag const & __ptr64	 /// ?getCompoundTag@SynchedActorData@@QEBAAEBVCompoundTag@@G@Z
    getFloat(_1: number): number;	// getFloat(ushort): float	 /// ?getFloat@SynchedActorData@@QEBAMG@Z
    getInt(_1: number): number;	// getInt(ushort): int	 /// ?getInt@SynchedActorData@@QEBAHG@Z
    getInt64(_1: number): bigint;	// getInt64(ushort): __int64	 /// ?getInt64@SynchedActorData@@QEBA_JG@Z
    getInt8(_1: number): bigint;	// getInt8(ushort): signed char	 /// ?getInt8@SynchedActorData@@QEBACG@Z
    getStatusFlag(_1: unknown): boolean;	// getStatusFlag(ActorFlags): bool	 /// ?getStatusFlag@SynchedActorData@@QEBA_NW4ActorFlags@@@Z
    getVec3(_1: number): bigint;	// getVec3(ushort): class Vec3	 /// ?getVec3@SynchedActorData@@QEBA?AVVec3@@G@Z
    hasData(_1: number): boolean;	// hasData(ushort): bool	 /// ?hasData@SynchedActorData@@QEBA_NG@Z
    packAll(): bigint;	// packAll(void): class std::vector<class std::unique_ptr<class DataItem,struct std::default_delete<class DataItem> >,class std::allocator<class std::unique_ptr<class DataItem,struct std::default_delete<class DataItem> > > >	 /// ?packAll@SynchedActorData@@QEBA?AV?$vector@V?$unique_ptr@VDataItem@@U?$default_delete@VDataItem@@@std@@@std@@V?$allocator@V?$unique_ptr@VDataItem@@U?$default_delete@VDataItem@@@std@@@std@@@2@@std@@XZ
    packDirty(): bigint;	// packDirty(void): class std::vector<class std::unique_ptr<class DataItem,struct std::default_delete<class DataItem> >,class std::allocator<class std::unique_ptr<class DataItem,struct std::default_delete<class DataItem> > > >	 /// ?packDirty@SynchedActorData@@QEAA?AV?$vector@V?$unique_ptr@VDataItem@@U?$default_delete@VDataItem@@@std@@@std@@V?$allocator@V?$unique_ptr@VDataItem@@U?$default_delete@VDataItem@@@std@@@std@@@2@@std@@XZ
    setStatusFlag(_1: unknown, _2: boolean): void;	// setStatusFlag(ActorFlags,bool): void	 /// ?setStatusFlag@SynchedActorData@@QEAAXW4ActorFlags@@_N@Z
    // Inherited from SDKVectorContainer
}
declare class MinecraftScreenController {
    // Attributes 
    // Methods 
    // Inherited from MinecraftScreenController
    MinecraftScreenController(): MinecraftScreenController;	// MinecraftScreenController	 /// MinecraftScreenController::MinecraftScreenController
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
    synchedActorData: SynchedActorData;
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
    actorIdentifier: ActorDefinitionIdentifier;
    velocity: Vec3;
    baseAttributeMap: BaseAttributeMap;
    aabb: AABB;
    width: number;
    position: Vec3;
    postTickPosDelta: Vec3;
    allEffects: SDKVectorContainer;
    entityRuntimeId: bigint;
    isSafeToSleepNear: number;
    armorContainer: SimpleContainer;
    // Methods 
    // Inherited from Mob
    Mob(_1: object, _2: object, _3: object): Mob;	// Mob(ActorDefinitionGroup *,ActorDefinitionIdentifier const &,EntityContext &)	 /// ??0Mob@@QEAA@PEAVActorDefinitionGroup@@AEBUActorDefinitionIdentifier@@AEAVEntityContext@@@Z
    Mob(_1: object, _2: object): Mob;	// Mob(Level &,EntityContext &)	 /// ??0Mob@@QEAA@AEAVLevel@@AEAVEntityContext@@@Z
    _aiStep(_1: object): void;	// _aiStep(IMobMovementProxy &): void	 /// ?_aiStep@Mob@@SAXAEAUIMobMovementProxy@@@Z
    _doInitialMove(): void;	// _doInitialMove(void): void	 /// ?_doInitialMove@Mob@@MEAAXXZ
    _doSprintParticleEffect(): void;	// _doSprintParticleEffect(void): void	 /// ?_doSprintParticleEffect@Mob@@IEAAXXZ
    _getAdjustedAABBForSpawnCheck(_1: object, _2: object): bigint;	// _getAdjustedAABBForSpawnCheck(AABB const &,Vec3 const &): class AABB	 /// ?_getAdjustedAABBForSpawnCheck@Mob@@MEBA?AVAABB@@AEBV2@AEBVVec3@@@Z
    _hurt(_1: object, _2: number, _3: boolean, _4: boolean): boolean;	// _hurt(ActorDamageSource const &,float,bool,bool): bool	 /// ?_hurt@Mob@@MEAA_NAEBVActorDamageSource@@M_N1@Z
    _initHardCodedComponents(): boolean;	// _initHardCodedComponents(void): bool	 /// ?_initHardCodedComponents@Mob@@AEAA_NXZ
    _initialize(_1: object): void;	// _initialize(EntityContext &): void	 /// ?_initialize@Mob@@AEAAXAEAVEntityContext@@@Z
    _jumpFromGround(_1: object): void;	// _jumpFromGround(IMobMovementProxy &): void	 /// ?_jumpFromGround@Mob@@KAXAEAUIMobMovementProxy@@@Z
    _onSizeUpdated(): void;	// _onSizeUpdated(void): void	 /// ?_onSizeUpdated@Mob@@MEAAXXZ
    _playStepSound(_1: object, _2: object): void;	// _playStepSound(BlockPos const &,Block const &): void	 /// ?_playStepSound@Mob@@MEAAXAEBVBlockPos@@AEBVBlock@@@Z
    _removePassenger(_1: object, _2: boolean, _3: boolean, _4: boolean): void;	// _removePassenger(ActorUniqueID const &,bool,bool,bool): void	 /// ?_removePassenger@Mob@@MEAAXAEBUActorUniqueID@@_N11@Z
    _tryApplyingLevitation(_1: object, _2: object): boolean;	// _tryApplyingLevitation(IMobMovementProxy const &,Vec3 &): bool	 /// ?_tryApplyingLevitation@Mob@@CA_NAEBUIMobMovementProxy@@AEAVVec3@@@Z
    _updateMobTravel(_1: object): void;	// _updateMobTravel(IMobMovementProxy &): void	 /// ?_updateMobTravel@Mob@@SAXAEAUIMobMovementProxy@@@Z
    _updateSprintingState(): void;	// _updateSprintingState(void): void	 /// ?_updateSprintingState@Mob@@AEAAXXZ
    addAdditionalSaveData(_1: object): void;	// addAdditionalSaveData(CompoundTag &): void	 /// ?addAdditionalSaveData@Mob@@MEAAXAEAVCompoundTag@@@Z
    addPassenger(_1: object): void;	// addPassenger(Actor &): void	 /// ?addPassenger@Mob@@UEAAXAEAVActor@@@Z
    aiStep(_1: object): void;	// aiStep(IMobMovementProxy &): void	 /// ?aiStep@Mob@@UEBAXAEAUIMobMovementProxy@@@Z
    aiStep(): void;	// aiStep(void): void	 /// ?aiStep@Mob@@UEAAXXZ
    animateHurt(): void;	// animateHurt(void): void	 /// ?animateHurt@Mob@@UEAAXXZ
    applyFinalFriction(_1: number, _2: boolean): void;	// applyFinalFriction(float,bool): void	 /// ?applyFinalFriction@Mob@@UEAAXM_N@Z
    ascendBlockByJumping(): void;	// ascendBlockByJumping(void): void	 /// ?ascendBlockByJumping@Mob@@UEAAXXZ
    ascendLadder(): void;	// ascendLadder(void): void	 /// ?ascendLadder@Mob@@UEAAXXZ
    attack(_1: object, _2: object): boolean;	// attack(Actor &,ActorDamageCause const &): bool	 /// ?attack@Mob@@UEAA_NAEAVActor@@AEBW4ActorDamageCause@@@Z
    attackAnimation(_1: object, _2: number): void;	// attackAnimation(Actor *,float): void	 /// ?attackAnimation@Mob@@UEAAXPEAVActor@@M@Z
    baseTick(): void;	// baseTick(void): void	 /// ?baseTick@Mob@@UEAAXXZ
    blockedByShield(_1: object, _2: object): void;	// blockedByShield(ActorDamageSource const &,Actor &): void	 /// ?blockedByShield@Mob@@UEAAXAEBVActorDamageSource@@AEAVActor@@@Z
    calcMoveRelativeSpeed(_1: unknown): number;	// calcMoveRelativeSpeed(TravelType): float	 /// ?calcMoveRelativeSpeed@Mob@@QEAAMW4TravelType@@@Z
    calculateJumpImpulse(_1: object): number;	// calculateJumpImpulse(IMobMovementProxy const &): float	 /// ?calculateJumpImpulse@Mob@@SAMAEBUIMobMovementProxy@@@Z
    canExistWhenDisallowMob(): boolean;	// canExistWhenDisallowMob(void): bool	 /// ?canExistWhenDisallowMob@Mob@@UEBA_NXZ
    canFreeze(): boolean;	// canFreeze(void): bool	 /// ?canFreeze@Mob@@UEBA_NXZ
    canPowerJump(): boolean;	// canPowerJump(void): bool	 /// ?canPowerJump@Mob@@UEBA_NXZ
    causeFallDamage(_1: number, _2: number, _3: unknown): void;	// causeFallDamage(float,float,ActorDamageSource): void	 /// ?causeFallDamage@Mob@@MEAAXMMVActorDamageSource@@@Z
    checkSpawnObstruction(): boolean;	// checkSpawnObstruction(void): bool	 /// ?checkSpawnObstruction@Mob@@UEBA_NXZ
    checkSpawnRules(_1: boolean): boolean;	// checkSpawnRules(bool): bool	 /// ?checkSpawnRules@Mob@@UEAA_N_N@Z
    checkTotemDeathProtection(_1: object): boolean;	// checkTotemDeathProtection(ActorDamageSource const &): bool	 /// ?checkTotemDeathProtection@Mob@@QEAA_NAEBVActorDamageSource@@@Z
    clearEquipment(): number;	// clearEquipment(void): int	 /// ?clearEquipment@Mob@@UEAAHXZ
    clearVanishEnchantedItemsOnDeath(): void;	// clearVanishEnchantedItemsOnDeath(void): void	 /// ?clearVanishEnchantedItemsOnDeath@Mob@@UEAAXXZ
    containerChanged(_1: number): void;	// containerChanged(int): void	 /// ?containerChanged@Mob@@UEAAXH@Z
    createAIGoals(): boolean;	// createAIGoals(void): bool	 /// ?createAIGoals@Mob@@UEAA_NXZ
    descendBlockByCrouching(): void;	// descendBlockByCrouching(void): void	 /// ?descendBlockByCrouching@Mob@@UEAAXXZ
    die(_1: object): void;	// die(ActorDamageSource const &): void	 /// ?die@Mob@@UEAAXAEBVActorDamageSource@@@Z
    doFireHurt(_1: number): boolean;	// doFireHurt(int): bool	 /// ?doFireHurt@Mob@@UEAA_NH@Z
    doHurtTarget(_1: object, _2: object): boolean;	// doHurtTarget(Actor *,ActorDamageCause const &): bool	 /// ?doHurtTarget@Mob@@UEAA_NPEAVActor@@AEBW4ActorDamageCause@@@Z
    dropBags(): void;	// dropBags(void): void	 /// ?dropBags@Mob@@MEAAXXZ
    dropContainer(): void;	// dropContainer(void): void	 /// ?dropContainer@Mob@@UEAAXXZ
    dropEquipmentOnDeath(_1: object, _2: number): void;	// dropEquipmentOnDeath(ActorDamageSource const &,int): void	 /// ?dropEquipmentOnDeath@Mob@@UEAAXAEBVActorDamageSource@@H@Z
    dropEquipmentOnDeath(): void;	// dropEquipmentOnDeath(void): void	 /// ?dropEquipmentOnDeath@Mob@@UEAAXXZ
    frostWalk(): void;	// frostWalk(void): void	 /// ?frostWalk@Mob@@QEAAXXZ
    getAllArmorID(): bigint;	// getAllArmorID(void): class std::vector<int,class std::allocator<int> >	 /// ?getAllArmorID@Mob@@UEBA?AV?$vector@HV?$allocator@H@std@@@std@@XZ
    getAllEquipment(): bigint;	// getAllEquipment(void): class std::vector<class ItemStack const * __ptr64,class std::allocator<class ItemStack const * __ptr64> >	 /// ?getAllEquipment@Mob@@UEBA?AV?$vector@PEBVItemStack@@V?$allocator@PEBVItemStack@@@std@@@std@@XZ
    getAllHand(): bigint;	// getAllHand(void): class std::vector<class ItemStack const * __ptr64,class std::allocator<class ItemStack const * __ptr64> >	 /// ?getAllHand@Mob@@UEBA?AV?$vector@PEBVItemStack@@V?$allocator@PEBVItemStack@@@std@@@std@@XZ
    getArmorColorInSlot(_1: unknown, _2: number): number;	// getArmorColorInSlot(ArmorSlot,int): float	 /// ?getArmorColorInSlot@Mob@@UEBAMW4ArmorSlot@@H@Z
    getArmorCoverPercentage(): number;	// getArmorCoverPercentage(void): float	 /// ?getArmorCoverPercentage@Mob@@UEBAMXZ
    getArmorMaterialTextureTypeInSlot(_1: unknown): bigint;	// getArmorMaterialTextureTypeInSlot(ArmorSlot): enum ArmorTextureType	 /// ?getArmorMaterialTextureTypeInSlot@Mob@@UEBA?AW4ArmorTextureType@@W4ArmorSlot@@@Z
    getArmorMaterialTypeInSlot(_1: unknown): bigint;	// getArmorMaterialTypeInSlot(ArmorSlot): enum ArmorMaterialType	 /// ?getArmorMaterialTypeInSlot@Mob@@UEBA?AW4ArmorMaterialType@@W4ArmorSlot@@@Z
    getArmorTypeHash(): number;	// getArmorTypeHash(void): int	 /// ?getArmorTypeHash@Mob@@UEAAHXZ
    getArmorValue(): number;	// getArmorValue(void): int	 /// ?getArmorValue@Mob@@UEBAHXZ
    getAttackAnim(_1: number): number;	// getAttackAnim(float): float	 /// ?getAttackAnim@Mob@@UEAAMM@Z
    getBlockDamageCause(_1: object): bigint;	// getBlockDamageCause(Block const &): enum ActorDamageCause	 /// ?getBlockDamageCause@Mob@@UEBA?AW4ActorDamageCause@@AEBVBlock@@@Z
    getCaravanHead(): bigint;	// getCaravanHead(void): struct ActorUniqueID	 /// ?getCaravanHead@Mob@@UEBA?AUActorUniqueID@@XZ
    getCaravanSize(): number;	// getCaravanSize(void): int	 /// ?getCaravanSize@Mob@@QEBAHXZ
    getCurrentSwingDuration(): number;	// getCurrentSwingDuration(void): int	 /// ?getCurrentSwingDuration@Mob@@IEAAHXZ
    getDamageAfterArmorReduction(_1: object, _2: number): number;	// getDamageAfterArmorReduction(ActorDamageSource const &,float): float	 /// ?getDamageAfterArmorReduction@Mob@@UEBAMAEBVActorDamageSource@@M@Z
    getDamageAfterEnchantReduction(_1: object, _2: number): number;	// getDamageAfterEnchantReduction(ActorDamageSource const &,float): float	 /// ?getDamageAfterEnchantReduction@Mob@@UEBAMAEBVActorDamageSource@@M@Z
    getDamageAfterResistanceEffect(_1: object, _2: number): number;	// getDamageAfterResistanceEffect(ActorDamageSource const &,float): float	 /// ?getDamageAfterResistanceEffect@Mob@@UEBAMAEBVActorDamageSource@@M@Z
    getDeathSound(): bigint;	// getDeathSound(void): enum LevelSoundEvent	 /// ?getDeathSound@Mob@@UEAA?AW4LevelSoundEvent@@XZ
    getDeathTime(): number;	// getDeathTime(void): int	 /// ?getDeathTime@Mob@@UEBAHXZ
    getHurtSound(): bigint;	// getHurtSound(void): enum LevelSoundEvent	 /// ?getHurtSound@Mob@@UEAA?AW4LevelSoundEvent@@XZ
    getInterpolatedBodyRot(_1: number): number;	// getInterpolatedBodyRot(float): float	 /// ?getInterpolatedBodyRot@Mob@@UEBAMM@Z
    getInterpolatedBodyYaw(_1: number): number;	// getInterpolatedBodyYaw(float): float	 /// ?getInterpolatedBodyYaw@Mob@@UEBAMM@Z
    getInterpolatedHeadRot(_1: number): number;	// getInterpolatedHeadRot(float): float	 /// ?getInterpolatedHeadRot@Mob@@UEBAMM@Z
    getItemInHandIcon(_1: object, _2: number): bigint;	// getItemInHandIcon(ItemStack const &,int): struct TextureUVCoordinateSet const * __ptr64	 /// ?getItemInHandIcon@Mob@@UEAAPEBUTextureUVCoordinateSet@@AEBVItemStack@@H@Z
    getItemUseIntervalAxis(): number;	// getItemUseIntervalAxis(void): int	 /// ?getItemUseIntervalAxis@Mob@@UEBAHXZ
    getJumpEffectAmplifierValue(_1: object): number;	// getJumpEffectAmplifierValue(IMobMovementProxy const &): float	 /// ?getJumpEffectAmplifierValue@Mob@@SAMAEBUIMobMovementProxy@@@Z
    getJumpEffectAmplifierValue(): number;	// getJumpEffectAmplifierValue(void): float	 /// ?getJumpEffectAmplifierValue@Mob@@QEAAMXZ
    getJumpPower(): number;	// getJumpPower(void): float	 /// ?getJumpPower@Mob@@UEBAMXZ
    getJumpPrevention(_1: object): bigint;	// getJumpPrevention(IMobMovementProxy const &): struct JumpPreventionResult	 /// ?getJumpPrevention@Mob@@SA?AUJumpPreventionResult@@AEBUIMobMovementProxy@@@Z
    getJumpPrevention(): bigint;	// getJumpPrevention(void): struct JumpPreventionResult	 /// ?getJumpPrevention@Mob@@QEAA?AUJumpPreventionResult@@XZ
    getMaxHeadXRot(): number;	// getMaxHeadXRot(void): float	 /// ?getMaxHeadXRot@Mob@@UEAAMXZ
    getMeleeKnockbackBonus(): number;	// getMeleeKnockbackBonus(void): int	 /// ?getMeleeKnockbackBonus@Mob@@UEAAHXZ
    getMeleeWeaponDamageBonus(_1: object): number;	// getMeleeWeaponDamageBonus(Mob *): float	 /// ?getMeleeWeaponDamageBonus@Mob@@UEAAMPEAV1@@Z
    getSpeed(): number;	// getSpeed(void): float	 /// ?getSpeed@Mob@@UEBAMXZ
    getTimeAlongSwing(): number;	// getTimeAlongSwing(void): int	 /// ?getTimeAlongSwing@Mob@@UEBAHXZ
    getToughnessValue(): number;	// getToughnessValue(void): int	 /// ?getToughnessValue@Mob@@UEBAHXZ
    getTravelType(_1: object): bigint;	// getTravelType(IMobMovementProxy &): enum TravelType	 /// ?getTravelType@Mob@@SA?AW4TravelType@@AEAUIMobMovementProxy@@@Z
    getTravelType(): bigint;	// getTravelType(void): enum TravelType	 /// ?getTravelType@Mob@@QEAA?AW4TravelType@@XZ
    getYHeadRot(): number;	// getYHeadRot(void): float	 /// ?getYHeadRot@Mob@@UEBAMXZ
    getYawSpeedInDegreesPerSecond(): number;	// getYawSpeedInDegreesPerSecond(void): float	 /// ?getYawSpeedInDegreesPerSecond@Mob@@UEBAMXZ
    handleEntityEvent(_1: unknown, _2: number): void;	// handleEntityEvent(ActorEvent,int): void	 /// ?handleEntityEvent@Mob@@UEAAXW4ActorEvent@@H@Z
    hasBoundOrigin(): boolean;	// hasBoundOrigin(void): bool	 /// ?hasBoundOrigin@Mob@@QEBA_NXZ
    hasCaravanTail(): boolean;	// hasCaravanTail(void): bool	 /// ?hasCaravanTail@Mob@@UEBA_NXZ
    hasComponent(_1: object): boolean;	// hasComponent(HashedString const &): bool	 /// ?hasComponent@Mob@@UEBA_NAEBVHashedString@@@Z
    hurtArmor(_1: object, _2: number): void;	// hurtArmor(ActorDamageSource const &,int): void	 /// ?hurtArmor@Mob@@QEAAXAEBVActorDamageSource@@H@Z
    hurtEffects(_1: object, _2: number, _3: boolean, _4: boolean): void;	// hurtEffects(ActorDamageSource const &,float,bool,bool): void	 /// ?hurtEffects@Mob@@UEAAXAEBVActorDamageSource@@M_N1@Z
    inCaravan(): boolean;	// inCaravan(void): bool	 /// ?inCaravan@Mob@@UEBA_NXZ
    initBodyControl(): bigint;	// initBodyControl(void): class std::unique_ptr<class BodyControl,struct std::default_delete<class BodyControl> >	 /// ?initBodyControl@Mob@@MEAA?AV?$unique_ptr@VBodyControl@@U?$default_delete@VBodyControl@@@std@@@std@@XZ
    initializeComponents(_1: unknown, _2: object): void;	// initializeComponents(Actor::InitializationMethod,VariantParameterList const &): void	 /// ?initializeComponents@Mob@@UEAAXW4InitializationMethod@Actor@@AEBVVariantParameterList@@@Z
    isAbleToMove(): boolean;	// isAbleToMove(void): bool	 /// ?isAbleToMove@Mob@@QEBA_NXZ
    isAlive(): boolean;	// isAlive(void): bool	 /// ?isAlive@Mob@@UEBA_NXZ
    isBlocking(): boolean;	// isBlocking(void): bool	 /// ?isBlocking@Mob@@UEBA_NXZ
    isFrostWalking(): boolean;	// isFrostWalking(void): bool	 /// ?isFrostWalking@Mob@@QEBA_NXZ
    isImmobile(_1: object): boolean;	// isImmobile(IActorMovementProxy const &): bool	 /// ?isImmobile@Mob@@SA_NAEBUIActorMovementProxy@@@Z
    isImmobile(): boolean;	// isImmobile(void): bool	 /// ?isImmobile@Mob@@UEBA_NXZ
    isJumping(): boolean;	// isJumping(void): bool	 /// ?isJumping@Mob@@UEBA_NXZ
    isLookingAtAnEntity(): boolean;	// isLookingAtAnEntity(void): bool	 /// ?isLookingAtAnEntity@Mob@@UEAA_NXZ
    isPickable(): boolean;	// isPickable(void): bool	 /// ?isPickable@Mob@@UEAA_NXZ
    isRolling(): boolean;	// isRolling(void): bool	 /// ?isRolling@Mob@@QEBA_NXZ
    isSleeping(): boolean;	// isSleeping(void): bool	 /// ?isSleeping@Mob@@UEBA_NXZ
    isSprinting(): boolean;	// isSprinting(void): bool	 /// ?isSprinting@Mob@@QEBA_NXZ
    isSurfaceMob(): boolean;	// isSurfaceMob(void): bool	 /// ?isSurfaceMob@Mob@@UEBA_NXZ
    joinCaravan(_1: object): void;	// joinCaravan(Mob *): void	 /// ?joinCaravan@Mob@@UEAAXPEAV1@@Z
    jumpFromGround(_1: object): void;	// jumpFromGround(IMobMovementProxy &): void	 /// ?jumpFromGround@Mob@@MEBAXAEAUIMobMovementProxy@@@Z
    jumpFromGround(): void;	// jumpFromGround(void): void	 /// ?jumpFromGround@Mob@@MEAAXXZ
    kill(): void;	// kill(void): void	 /// ?kill@Mob@@UEAAXXZ
    knockback(_1: object, _2: number, _3: number, _4: number, _5: number, _6: number, _7: number): void;	// knockback(Actor *,int,float,float,float,float,float): void	 /// ?knockback@Mob@@UEAAXPEAVActor@@HMMMMM@Z
    leaveCaravan(): void;	// leaveCaravan(void): void	 /// ?leaveCaravan@Mob@@UEAAXXZ
    lookAt(_1: object, _2: number, _3: number): void;	// lookAt(Actor *,float,float): void	 /// ?lookAt@Mob@@UEAAXPEAVActor@@MM@Z
    newServerAiStep(): void;	// newServerAiStep(void): void	 /// ?newServerAiStep@Mob@@MEAAXXZ
    normalTick(): void;	// normalTick(void): void	 /// ?normalTick@Mob@@UEAAXXZ
    onPlayerJump(_1: number): void;	// onPlayerJump(int): void	 /// ?onPlayerJump@Mob@@QEAAXH@Z
    outOfWorld(): void;	// outOfWorld(void): void	 /// ?outOfWorld@Mob@@MEAAXXZ
    processSoulSpeed(): void;	// processSoulSpeed(void): void	 /// ?processSoulSpeed@Mob@@IEAAXXZ
    pushActors(): void;	// pushActors(void): void	 /// ?pushActors@Mob@@UEAAXXZ
    readAdditionalSaveData(_1: object, _2: object): void;	// readAdditionalSaveData(CompoundTag const &,DataLoadHelper &): void	 /// ?readAdditionalSaveData@Mob@@MEAAXAEBVCompoundTag@@AEAVDataLoadHelper@@@Z
    reloadHardcoded(_1: unknown, _2: object): void;	// reloadHardcoded(Actor::InitializationMethod,VariantParameterList const &): void	 /// ?reloadHardcoded@Mob@@UEAAXW4InitializationMethod@Actor@@AEBVVariantParameterList@@@Z
    reloadHardcodedClient(_1: unknown, _2: object): void;	// reloadHardcodedClient(Actor::InitializationMethod,VariantParameterList const &): void	 /// ?reloadHardcodedClient@Mob@@UEAAXW4InitializationMethod@Actor@@AEBVVariantParameterList@@@Z
    resetAttributes(): void;	// resetAttributes(void): void	 /// ?resetAttributes@Mob@@QEAAXXZ
    resetNoActionTime(): void;	// resetNoActionTime(void): void	 /// ?resetNoActionTime@Mob@@QEAAXXZ
    sendInventory(_1: boolean): void;	// sendInventory(bool): void	 /// ?sendInventory@Mob@@UEAAX_N@Z
    setDamagedArmor(_1: unknown, _2: object): void;	// setDamagedArmor(ArmorSlot,ItemStack const &): void	 /// ?setDamagedArmor@Mob@@UEAAXW4ArmorSlot@@AEBVItemStack@@@Z
    setEquippedSlot(_1: unknown, _2: object): void;	// setEquippedSlot(EquipmentSlot,ItemStack const &): void	 /// ?setEquippedSlot@Mob@@UEAAXW4EquipmentSlot@@AEBVItemStack@@@Z
    setItemSlot(_1: unknown, _2: object): boolean;	// setItemSlot(EquipmentSlot,ItemStack const &): bool	 /// ?setItemSlot@Mob@@UEAA_NW4EquipmentSlot@@AEBVItemStack@@@Z
    setSleeping(_1: boolean): void;	// setSleeping(bool): void	 /// ?setSleeping@Mob@@UEAAX_N@Z
    setSpeed(_1: number): void;	// setSpeed(float): void	 /// ?setSpeed@Mob@@UEAAXM@Z
    setSprinting(_1: boolean): void;	// setSprinting(bool): void	 /// ?setSprinting@Mob@@UEAAX_N@Z
    setTarget(_1: object): void;	// setTarget(Actor *): void	 /// ?setTarget@Mob@@UEAAXPEAVActor@@@Z
    setTransitioningSitting(_1: boolean): void;	// setTransitioningSitting(bool): void	 /// ?setTransitioningSitting@Mob@@UEAAX_N@Z
    setYHeadRot(_1: number): void;	// setYHeadRot(float): void	 /// ?setYHeadRot@Mob@@UEAAXM@Z
    shouldDropDeathLoot(): boolean;	// shouldDropDeathLoot(void): bool	 /// ?shouldDropDeathLoot@Mob@@UEBA_NXZ
    startRiding(_1: object): boolean;	// startRiding(Actor &): bool	 /// ?startRiding@Mob@@UEAA_NAEAVActor@@@Z
    stopRiding(_1: boolean, _2: boolean, _3: boolean): void;	// stopRiding(bool,bool,bool): void	 /// ?stopRiding@Mob@@UEAAX_N00@Z
    swing(): void;	// swing(void): void	 /// ?swing@Mob@@UEAAXXZ
    teleportTo(_1: object, _2: boolean, _3: number, _4: number): void;	// teleportTo(Vec3 const &,bool,int,int): void	 /// ?teleportTo@Mob@@UEAAXAEBVVec3@@_NHH@Z
    tickDeath(): void;	// tickDeath(void): void	 /// ?tickDeath@Mob@@MEAAXXZ
    travel(_1: object, _2: number, _3: number, _4: number): void;	// travel(IMobMovementProxy &,float,float,float): void	 /// ?travel@Mob@@UEBAXAEAUIMobMovementProxy@@MMM@Z
    travel(_1: number, _2: number, _3: number): void;	// travel(float,float,float): void	 /// ?travel@Mob@@UEAAXMMM@Z
    tryGetFromEntity(_1: object, _2: boolean): Mob;	// tryGetFromEntity(EntityContext &,bool): class Mob * __ptr64	 /// ?tryGetFromEntity@Mob@@SAPEAV1@AEAVEntityContext@@_N@Z
    updateAi(): void;	// updateAi(void): void	 /// ?updateAi@Mob@@MEAAXXZ
    updateAttackAnim(): void;	// updateAttackAnim(void): void	 /// ?updateAttackAnim@Mob@@IEAAXXZ
    updateEntitySpecificMolangVariables(_1: object): void;	// updateEntitySpecificMolangVariables(RenderParams &): void	 /// ?updateEntitySpecificMolangVariables@Mob@@MEAAXAEAVRenderParams@@@Z
    updateEquipment(): void;	// updateEquipment(void): void	 /// ?updateEquipment@Mob@@UEAAXXZ
    updateGliding(): void;	// updateGliding(void): void	 /// ?updateGliding@Mob@@MEAAXXZ
    vehicleTick(): void;	// vehicleTick(void): void	 /// ?vehicleTick@Mob@@MEAAXXZ
    // Inherited from Actor
    _containsSneakCollisionShapes(_1: object, _2: object): boolean;	// _containsSneakCollisionShapes(IActorMovementProxy &,AABB const &): bool	 /// ?_containsSneakCollisionShapes@Actor@@CA_NAEAUIActorMovementProxy@@AEBVAABB@@@Z
    _drop(_1: object, _2: boolean): unknown;	// _drop(ItemStack const &,bool): class ItemActor const * __ptr64	 /// ?_drop@Actor@@IEAAPEBVItemActor@@AEBVItemStack@@_N@Z
    _initAliasProperties(): void;	// _initAliasProperties(void): void	 /// ?_initAliasProperties@Actor@@AEAAXXZ
    _isHeadInWater(): boolean;	// _isHeadInWater(void): bool	 /// ?_isHeadInWater@Actor@@IEBA_NXZ
    _isItemStackNetManagerEnabled(): boolean;	// _isItemStackNetManagerEnabled(void): bool	 /// ?_isItemStackNetManagerEnabled@Actor@@AEBA_NXZ
    _move(_1: object, _2: object): void;	// _move(IActorMovementProxy &,Vec3 const &): void	 /// ?_move@Actor@@SAXAEAUIActorMovementProxy@@AEBVVec3@@@Z
    _moveHitboxTo(_1: object): void;	// _moveHitboxTo(Vec3 const &): void	 /// ?_moveHitboxTo@Actor@@AEAAXAEBVVec3@@@Z
    _playFlySound(_1: object, _2: object): void;	// _playFlySound(BlockPos const &,Block const &): void	 /// ?_playFlySound@Actor@@MEAAXAEBVBlockPos@@AEBVBlock@@@Z
    _playMovementSound(_1: boolean): void;	// _playMovementSound(bool): void	 /// ?_playMovementSound@Actor@@IEAAX_N@Z
    _randomHeartPos(): bigint;	// _randomHeartPos(void): class Vec3	 /// ?_randomHeartPos@Actor@@QEAA?AVVec3@@XZ
    _refreshAABB(): void;	// _refreshAABB(void): void	 /// ?_refreshAABB@Actor@@IEAAXXZ
    _sendDirtyActorData(): void;	// _sendDirtyActorData(void): void	 /// ?_sendDirtyActorData@Actor@@QEAAXXZ
    _sendLinkPacket(_1: object): void;	// _sendLinkPacket(ActorLink const &): void	 /// ?_sendLinkPacket@Actor@@AEBAXAEBUActorLink@@@Z
    _serverInitItemStackIds(): void;	// _serverInitItemStackIds(void): void	 /// ?_serverInitItemStackIds@Actor@@MEAAXXZ
    _setHeightOffset(_1: number): void;	// _setHeightOffset(float): void	 /// ?_setHeightOffset@Actor@@IEAAXM@Z
    _setPos(_1: object): void;	// _setPos(Vec3 const &): void	 /// ?_setPos@Actor@@IEAAXAEBVVec3@@@Z
    _setupServerAnimationComponent(): void;	// _setupServerAnimationComponent(void): void	 /// ?_setupServerAnimationComponent@Actor@@AEAAXXZ
    _spawnPukeParticles(): void;	// _spawnPukeParticles(void): void	 /// ?_spawnPukeParticles@Actor@@AEAAXXZ
    _updateComposition(_1: boolean): void;	// _updateComposition(bool): void	 /// ?_updateComposition@Actor@@AEAAX_N@Z
    add(_1: object): boolean;	// add(ItemStack &): bool	 /// ?add@Actor@@UEAA_NAEAVItemStack@@@Z
    addEffect(_1: object): void;	// addEffect(MobEffectInstance const &): void	 /// ?addEffect@Actor@@QEAAXAEBVMobEffectInstance@@@Z
    applySnapshot(_1: object, _2: object): void;	// applySnapshot(PlayerSnapshotComponent const &,PlayerSnapshotComponent const &): void	 /// ?applySnapshot@Actor@@UEAAXAEBUPlayerSnapshotComponent@@0@Z
    buildForward(): bigint;	// buildForward(void): class Vec3	 /// ?buildForward@Actor@@QEBA?AVVec3@@XZ
    burn(_1: number, _2: boolean): void;	// burn(int,bool): void	 /// ?burn@Actor@@QEAAXH_N@Z
    calcCenterPos(): bigint;	// calcCenterPos(void): class Vec3	 /// ?calcCenterPos@Actor@@QEBA?AVVec3@@XZ
    canAddPassenger(_1: object): boolean;	// canAddPassenger(Actor &): bool	 /// ?canAddPassenger@Actor@@UEBA_NAEAV1@@Z
    canAttack(_1: object, _2: boolean): boolean;	// canAttack(Actor *,bool): bool	 /// ?canAttack@Actor@@UEBA_NPEAV1@_N@Z
    canBeAffected(_1: object): boolean;	// canBeAffected(MobEffectInstance const &): bool	 /// ?canBeAffected@Actor@@UEBA_NAEBVMobEffectInstance@@@Z
    canBeAffected(_1: number): boolean;	// canBeAffected(int): bool	 /// ?canBeAffected@Actor@@UEBA_NH@Z
    canBeAffectedByArrow(_1: object): boolean;	// canBeAffectedByArrow(MobEffectInstance const &): bool	 /// ?canBeAffectedByArrow@Actor@@UEBA_NAEBVMobEffectInstance@@@Z
    canBeginOrContinueClimbingLadder(): boolean;	// canBeginOrContinueClimbingLadder(void): bool	 /// ?canBeginOrContinueClimbingLadder@Actor@@QEBA_NXZ
    canCurrentlySwim(): boolean;	// canCurrentlySwim(void): bool	 /// ?canCurrentlySwim@Actor@@QEBA_NXZ
    canDisableShield(): boolean;	// canDisableShield(void): bool	 /// ?canDisableShield@Actor@@UEAA_NXZ
    canFly(): boolean;	// canFly(void): bool	 /// ?canFly@Actor@@QEBA_NXZ
    canSee(_1: object): boolean;	// canSee(Actor const &): bool	 /// ?canSee@Actor@@UEBA_NAEBV1@@Z
    canSee(_1: object): boolean;	// canSee(Vec3 const &): bool	 /// ?canSee@Actor@@UEBA_NAEBVVec3@@@Z
    canShowNameTag(): boolean;	// canShowNameTag(void): bool	 /// ?canShowNameTag@Actor@@UEBA_NXZ
    celebrateHunt(_1: number, _2: boolean): void;	// celebrateHunt(int,bool): void	 /// ?celebrateHunt@Actor@@QEAAXH_N@Z
    checkEntityOnewayCollision(_1: object, _2: object): void;	// checkEntityOnewayCollision(BlockSource &,BlockPos const &): void	 /// ?checkEntityOnewayCollision@Actor@@SAXAEAVBlockSource@@AEBVBlockPos@@@Z
    checkFallDamage(_1: number, _2: boolean): void;	// checkFallDamage(float,bool): void	 /// ?checkFallDamage@Actor@@UEAAXM_N@Z
    checkInsideBlocks(_1: number): void;	// checkInsideBlocks(float): void	 /// ?checkInsideBlocks@Actor@@MEAAXM@Z
    chorusFruitTeleport(_1: object): void;	// chorusFruitTeleport(Vec3 const &): void	 /// ?chorusFruitTeleport@Actor@@UEAAXAEBVVec3@@@Z
    closerThan(_1: object, _2: number): boolean;	// closerThan(Actor const &,float): bool	 /// ?closerThan@Actor@@QEBA_NAEBV1@M@Z
    consumeItem(_1: object, _2: number): void;	// consumeItem(ItemActor &,int): void	 /// ?consumeItem@Actor@@QEAAXAEAVItemActor@@H@Z
    consumeTotem(): boolean;	// consumeTotem(void): bool	 /// ?consumeTotem@Actor@@UEAA_NXZ
    damageSensorComponentHurt(_1: object, _2: object, _3: boolean): boolean;	// damageSensorComponentHurt(float &,ActorDamageSource const &,bool): bool	 /// ?damageSensorComponentHurt@Actor@@QEAA_NAEAMAEBVActorDamageSource@@_N@Z
    despawn(): void;	// despawn(void): void	 /// ?despawn@Actor@@UEAAXXZ
    distanceSqrToBlockPosCenter(_1: object): number;	// distanceSqrToBlockPosCenter(BlockPos const &): float	 /// ?distanceSqrToBlockPosCenter@Actor@@QEBAMAEBVBlockPos@@@Z
    distanceTo(_1: object): number;	// distanceTo(Actor const &): float	 /// ?distanceTo@Actor@@QEBAMAEBV1@@Z
    distanceTo(_1: object): number;	// distanceTo(Vec3 const &): float	 /// ?distanceTo@Actor@@QEBAMAEBVVec3@@@Z
    distanceToSqr(_1: object): number;	// distanceToSqr(Actor const &): float	 /// ?distanceToSqr@Actor@@QEBAMAEBV1@@Z
    distanceToSqr(_1: object): number;	// distanceToSqr(Vec3 const &): float	 /// ?distanceToSqr@Actor@@QEBAMAEBVVec3@@@Z
    doWaterSplashEffect(): void;	// doWaterSplashEffect(void): void	 /// ?doWaterSplashEffect@Actor@@MEAAXXZ
    drop(_1: object, _2: boolean): boolean;	// drop(ItemStack const &,bool): bool	 /// ?drop@Actor@@UEAA_NAEBVItemStack@@_N@Z
    dropLeash(_1: boolean, _2: boolean): void;	// dropLeash(bool,bool): void	 /// ?dropLeash@Actor@@QEAAX_N0@Z
    dropTowards(_1: object, _2: unknown): void;	// dropTowards(ItemStack const &,Vec3): void	 /// ?dropTowards@Actor@@QEAAXAEBVItemStack@@VVec3@@@Z
    extractSnapshot(_1: object): void;	// extractSnapshot(PlayerSnapshotComponent &): void	 /// ?extractSnapshot@Actor@@UEBAXAEAUPlayerSnapshotComponent@@@Z
    feed(_1: number): void;	// feed(int): void	 /// ?feed@Actor@@UEAAXH@Z
    fetchFishingHook(): unknown;	// fetchFishingHook(void): class FishingHook * __ptr64	 /// ?fetchFishingHook@Actor@@QEAAPEAVFishingHook@@XZ
    fetchNearbyActorsSorted(_1: object, _2: unknown): bigint;	// fetchNearbyActorsSorted(Vec3 const &,ActorType): class std::vector<struct DistanceSortedActor,class std::allocator<struct DistanceSortedActor> >	 /// ?fetchNearbyActorsSorted@Actor@@QEAA?AV?$vector@UDistanceSortedActor@@V?$allocator@UDistanceSortedActor@@@std@@@std@@AEBVVec3@@W4ActorType@@@Z
    fetchNearbyAttackableActorsSorted(_1: object, _2: unknown): bigint;	// fetchNearbyAttackableActorsSorted(Vec3 const &,ActorType): class std::vector<struct DistanceSortedActor,class std::allocator<struct DistanceSortedActor> >	 /// ?fetchNearbyAttackableActorsSorted@Actor@@QEAA?AV?$vector@UDistanceSortedActor@@V?$allocator@UDistanceSortedActor@@@std@@@std@@AEBVVec3@@W4ActorType@@@Z
    filterFormattedNameTag(_1: object): void;	// filterFormattedNameTag(UIProfanityContext const &): void	 /// ?filterFormattedNameTag@Actor@@UEAAXAEBVUIProfanityContext@@@Z
    flagPassengerToRemove(_1: object): void;	// flagPassengerToRemove(Actor &): void	 /// ?flagPassengerToRemove@Actor@@UEAAXAEAV1@@Z
    getAABBDim(): unknown;	// getAABBDim(void): class Vec2 const & __ptr64	 /// ?getAABBDim@Actor@@QEBAAEBVVec2@@XZ
    getActiveEffectCount(): number;	// getActiveEffectCount(void): int	 /// ?getActiveEffectCount@Actor@@QEBAHXZ
    getActorIdentifier(): bigint;	// getActorIdentifier(void): struct ActorDefinitionIdentifier const & __ptr64	 /// ?getActorIdentifier@Actor@@QEBAAEBUActorDefinitionIdentifier@@XZ
    getActorRendererId(): unknown;	// getActorRendererId(void): class HashedString const & __ptr64	 /// ?getActorRendererId@Actor@@UEBAAEBVHashedString@@XZ
    getAllArmor(): bigint;	// getAllArmor(void): class std::vector<class ItemStack const * __ptr64,class std::allocator<class ItemStack const * __ptr64> >	 /// ?getAllArmor@Actor@@UEBA?AV?$vector@PEBVItemStack@@V?$allocator@PEBVItemStack@@@std@@@std@@XZ
    getAmbientSound(): bigint;	// getAmbientSound(void): enum LevelSoundEvent	 /// ?getAmbientSound@Actor@@UEBA?AW4LevelSoundEvent@@XZ
    getAnimationComponent(): unknown;	// getAnimationComponent(void): class AnimationComponent & __ptr64	 /// ?getAnimationComponent@Actor@@UEAAAEAVAnimationComponent@@XZ
    getArmor(_1: unknown): ItemStack;	// getArmor(ArmorSlot): class ItemStack const & __ptr64	 /// ?getArmor@Actor@@UEBAAEBVItemStack@@W4ArmorSlot@@@Z
    getArmorContainer(): SimpleContainer;	// getArmorContainer(void): class SimpleContainer const & __ptr64	 /// ?getArmorContainer@Actor@@QEBAAEBVSimpleContainer@@XZ
    getAttachPos(_1: unknown, _2: number): bigint;	// getAttachPos(ActorLocation,float): class Vec3	 /// ?getAttachPos@Actor@@UEBA?AVVec3@@W4ActorLocation@@M@Z
    getAttribute(_1: object): unknown;	// getAttribute(Attribute const &): class AttributeInstance const & __ptr64	 /// ?getAttribute@Actor@@UEBAAEBVAttributeInstance@@AEBVAttribute@@@Z
    getBlockPosCurrentlyStandingOn(_1: object): bigint;	// getBlockPosCurrentlyStandingOn(Actor *): class BlockPos	 /// ?getBlockPosCurrentlyStandingOn@Actor@@QEBA?AVBlockPos@@PEAV1@@Z
    getBlockPosCurrentlyStandingOn(_1: object, _2: object): bigint;	// getBlockPosCurrentlyStandingOn(IActorMovementProxy const &,IActorMovementProxy *): class BlockPos	 /// ?getBlockPosCurrentlyStandingOn@Actor@@SA?AVBlockPos@@AEBUIActorMovementProxy@@PEAU3@@Z
    getBlockWhenClimbing(_1: object): unknown;	// getBlockWhenClimbing(IActorMovementProxy const &): class Block const & __ptr64	 /// ?getBlockWhenClimbing@Actor@@KAAEBVBlock@@AEBUIActorMovementProxy@@@Z
    getBrightness(_1: number): number;	// getBrightness(float): float	 /// ?getBrightness@Actor@@UEBAMM@Z
    getCarriedItem(): ItemStack;	// getCarriedItem(void): class ItemStack const & __ptr64	 /// ?getCarriedItem@Actor@@UEBAAEBVItemStack@@XZ
    getChestSlots(): number;	// getChestSlots(void): int	 /// ?getChestSlots@Actor@@UEBAHXZ
    getColor(): bigint;	// getColor(void): enum PaletteColor	 /// ?getColor@Actor@@QEBA?AW4PaletteColor@@XZ
    getCommandPermissionLevel(): bigint;	// getCommandPermissionLevel(void): enum CommandPermissionLevel	 /// ?getCommandPermissionLevel@Actor@@UEBA?AW4CommandPermissionLevel@@XZ
    getDamageNearbyMobs(): boolean;	// getDamageNearbyMobs(void): bool	 /// ?getDamageNearbyMobs@Actor@@QEBA_NXZ
    getDimensionConst(): Dimension;	// getDimensionConst(void): class Dimension const & __ptr64	 /// ?getDimensionConst@Actor@@QEBAAEBVDimension@@XZ
    getDimensionId(): bigint;	// getDimensionId(void): class AutomaticID<class Dimension,int>	 /// ?getDimensionId@Actor@@UEBA?AV?$AutomaticID@VDimension@@H@@XZ
    getEconomyTradeableComponent(): unknown;	// getEconomyTradeableComponent(void): class EconomyTradeableComponent * __ptr64	 /// ?getEconomyTradeableComponent@Actor@@QEBAPEAVEconomyTradeableComponent@@XZ
    getEffect(_1: object): unknown;	// getEffect(MobEffect const &): class MobEffectInstance const * __ptr64	 /// ?getEffect@Actor@@QEBAPEBVMobEffectInstance@@AEBVMobEffect@@@Z
    getEntityData(): SynchedActorData;	// getEntityData(void): class SynchedActorData const & __ptr64	 /// ?getEntityData@Actor@@QEBAAEBVSynchedActorData@@XZ
    getEntityTypeId(): bigint;	// getEntityTypeId(void): enum ActorType	 /// ?getEntityTypeId@Actor@@UEBA?AW4ActorType@@XZ
    getEquipSlots(): number;	// getEquipSlots(void): int	 /// ?getEquipSlots@Actor@@UEBAHXZ
    getEquipmentCount(): number;	// getEquipmentCount(void): int	 /// ?getEquipmentCount@Actor@@UEBAHXZ
    getEquippedSlot(_1: unknown): ItemStack;	// getEquippedSlot(EquipmentSlot): class ItemStack const & __ptr64	 /// ?getEquippedSlot@Actor@@UEBAAEBVItemStack@@W4EquipmentSlot@@@Z
    getEquippedTotem(): ItemStack;	// getEquippedTotem(void): class ItemStack const & __ptr64	 /// ?getEquippedTotem@Actor@@UEBAAEBVItemStack@@XZ
    getFiringPos(): bigint;	// getFiringPos(void): class Vec3	 /// ?getFiringPos@Actor@@UEBA?AVVec3@@XZ
    getFirstAvailableSeatPos(_1: object, _2: object): boolean;	// getFirstAvailableSeatPos(Actor &,Vec3 &): bool	 /// ?getFirstAvailableSeatPos@Actor@@QEBA_NAEAV1@AEAVVec3@@@Z
    getFirstPassenger(): Actor;	// getFirstPassenger(void): class Actor * __ptr64	 /// ?getFirstPassenger@Actor@@QEBAPEAV1@XZ
    getFormattedNameTag(): bigint;	// getFormattedNameTag(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> >	 /// ?getFormattedNameTag@Actor@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
    getHeadLookVector(_1: number): bigint;	// getHeadLookVector(float): class Vec3	 /// ?getHeadLookVector@Actor@@UEBA?AVVec3@@M@Z
    getHealth(): number;	// getHealth(void): int	 /// ?getHealth@Actor@@QEBAHXZ
    getInteraction(_1: object, _2: object, _3: object): boolean;	// getInteraction(Player &,ActorInteraction &,Vec3 const &): bool	 /// ?getInteraction@Actor@@UEAA_NAEAVPlayer@@AEAVActorInteraction@@AEBVVec3@@@Z
    getInterpolatedPosition(_1: number): bigint;	// getInterpolatedPosition(float): class Vec3	 /// ?getInterpolatedPosition@Actor@@QEBA?AVVec3@@M@Z
    getInterpolatedRidingPosition(_1: number): bigint;	// getInterpolatedRidingPosition(float): class Vec3	 /// ?getInterpolatedRidingPosition@Actor@@UEBA?AVVec3@@M@Z
    getInterpolatedRotation(_1: number): bigint;	// getInterpolatedRotation(float): class Vec2	 /// ?getInterpolatedRotation@Actor@@QEBA?AVVec2@@M@Z
    getInterpolatedWalkAnimSpeed(_1: number): number;	// getInterpolatedWalkAnimSpeed(float): float	 /// ?getInterpolatedWalkAnimSpeed@Actor@@UEBAMM@Z
    getInventorySize(): number;	// getInventorySize(void): int	 /// ?getInventorySize@Actor@@UEBAHXZ
    getLastHurtByMob(): Mob;	// getLastHurtByMob(void): class Mob * __ptr64	 /// ?getLastHurtByMob@Actor@@UEAAPEAVMob@@XZ
    getLastHurtByPlayer(): Player;	// getLastHurtByPlayer(void): class Player * __ptr64	 /// ?getLastHurtByPlayer@Actor@@UEAAPEAVPlayer@@XZ
    getLastHurtMob(): Mob;	// getLastHurtMob(void): class Mob * __ptr64	 /// ?getLastHurtMob@Actor@@UEAAPEAVMob@@XZ
    getLastHurtMobTimestamp(): number;	// getLastHurtMobTimestamp(void): int	 /// ?getLastHurtMobTimestamp@Actor@@QEAAHXZ
    getLastHurtTimestamp(): bigint;	// getLastHurtTimestamp(void): unsigned __int64	 /// ?getLastHurtTimestamp@Actor@@QEBA_KXZ
    getLevel(): Level;	// getLevel(void): class Level const & __ptr64	 /// ?getLevel@Actor@@QEBAAEBVLevel@@XZ
    getLinks(): bigint;	// getLinks(void): class std::vector<struct ActorLink,class std::allocator<struct ActorLink> >	 /// ?getLinks@Actor@@QEBA?AV?$vector@UActorLink@@V?$allocator@UActorLink@@@std@@@std@@XZ
    getLiquidAABB(_1: unknown): bigint;	// getLiquidAABB(MaterialType): class AABB	 /// ?getLiquidAABB@Actor@@UEBA?AVAABB@@W4MaterialType@@@Z
    getLiquidFlowStrength(_1: unknown): number;	// getLiquidFlowStrength(MaterialType): float	 /// ?getLiquidFlowStrength@Actor@@SAMW4MaterialType@@@Z
    getLootTable(): unknown;	// getLootTable(void): class LootTable * __ptr64	 /// ?getLootTable@Actor@@UEAAPEAVLootTable@@XZ
    getMapDecorationRotation(): number;	// getMapDecorationRotation(void): float	 /// ?getMapDecorationRotation@Actor@@UEBAMXZ
    getMaxHealth(): number;	// getMaxHealth(void): int	 /// ?getMaxHealth@Actor@@QEBAHXZ
    getMovementProxy(): bigint;	// getMovementProxy(void): class gsl::not_null<class std::shared_ptr<struct IActorMovementProxy const> >	 /// ?getMovementProxy@Actor@@QEBA?AV?$not_null@V?$shared_ptr@$$CBUIActorMovementProxy@@@std@@@gsl@@XZ
    getMutableAttribute(_1: object): unknown;	// getMutableAttribute(Attribute const &): class AttributeInstance * __ptr64	 /// ?getMutableAttribute@Actor@@UEAAPEAVAttributeInstance@@AEBVAttribute@@@Z
    getNameTag(): unknown;	// getNameTag(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64	 /// ?getNameTag@Actor@@UEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
    getNameTagAsHash(): bigint;	// getNameTagAsHash(void): unsigned __int64	 /// ?getNameTagAsHash@Actor@@UEBA_KXZ
    getNextStep(_1: number): number;	// getNextStep(float): float	 /// ?getNextStep@Actor@@UEAAMM@Z
    getOffhandSlot(): ItemStack;	// getOffhandSlot(void): class ItemStack const & __ptr64	 /// ?getOffhandSlot@Actor@@QEBAAEBVItemStack@@XZ
    getOnDeathExperience(): number;	// getOnDeathExperience(void): int	 /// ?getOnDeathExperience@Actor@@QEAAHXZ
    getOwner(): Mob;	// getOwner(void): class Mob * __ptr64	 /// ?getOwner@Actor@@QEBAPEAVMob@@XZ
    getOwnerEntityType(): bigint;	// getOwnerEntityType(void): enum ActorType	 /// ?getOwnerEntityType@Actor@@UEAA?AW4ActorType@@XZ
    getOwnerId(): bigint;	// getOwnerId(void): struct ActorUniqueID const	 /// ?getOwnerId@Actor@@QEBA?BUActorUniqueID@@XZ
    getPassengerIndex(_1: object): number;	// getPassengerIndex(Actor const &): int	 /// ?getPassengerIndex@Actor@@QEBAHAEBV1@@Z
    getPassengerYRotation(_1: object): number;	// getPassengerYRotation(Actor const &): float	 /// ?getPassengerYRotation@Actor@@UEBAMAEBV1@@Z
    getPersistingTradeOffers(): bigint;	// getPersistingTradeOffers(void): class std::unique_ptr<class CompoundTag,struct std::default_delete<class CompoundTag> >	 /// ?getPersistingTradeOffers@Actor@@QEAA?AV?$unique_ptr@VCompoundTag@@U?$default_delete@VCompoundTag@@@std@@@std@@XZ
    getPickRadius(): number;	// getPickRadius(void): float	 /// ?getPickRadius@Actor@@UEAAMXZ
    getPlayerOwner(): Player;	// getPlayerOwner(void): class Player * __ptr64	 /// ?getPlayerOwner@Actor@@QEBAPEAVPlayer@@XZ
    getPortalCooldown(): number;	// getPortalCooldown(void): int	 /// ?getPortalCooldown@Actor@@UEBAHXZ
    getPosDelta(): unknown;	// getPosDelta(void): class Vec3 const & __ptr64	 /// ?getPosDelta@Actor@@QEBAAEBVVec3@@XZ
    getPosExtrapolated(_1: number): unknown;	// getPosExtrapolated(float): class Vec3 const	 /// ?getPosExtrapolated@Actor@@UEBA?BVVec3@@M@Z
    getPosPrev(): unknown;	// getPosPrev(void): class Vec3 const & __ptr64	 /// ?getPosPrev@Actor@@UEBAAEBVVec3@@XZ
    getPosition(): unknown;	// getPosition(void): class Vec3 const & __ptr64	 /// ?getPosition@Actor@@UEBAAEBVVec3@@XZ
    getPredictedMovementValues(): bigint;	// getPredictedMovementValues(void): struct PredictedMovementValues const & __ptr64	 /// ?getPredictedMovementValues@Actor@@UEBAAEBUPredictedMovementValues@@XZ
    getRandom(): Random;	// getRandom(void): class Random & __ptr64	 /// ?getRandom@Actor@@QEBAAEAVRandom@@XZ
    getRegionConst(): BlockSource;	// getRegionConst(void): class BlockSource const & __ptr64	 /// ?getRegionConst@Actor@@QEBAAEBVBlockSource@@XZ
    getRotation(): bigint;	// getRotation(void): class Vec2	 /// ?getRotation@Actor@@QEBA?AVVec2@@XZ
    getRuntimeID(): bigint;	// getRuntimeID(void): class ActorRuntimeID	 /// ?getRuntimeID@Actor@@QEBA?AVActorRuntimeID@@XZ
    getScoreTag(): unknown;	// getScoreTag(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64	 /// ?getScoreTag@Actor@@UEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
    getShadowHeightOffs(): number;	// getShadowHeightOffs(void): float	 /// ?getShadowHeightOffs@Actor@@UEAAMXZ
    getShadowRadius(): number;	// getShadowRadius(void): float	 /// ?getShadowRadius@Actor@@UEBAMXZ
    getSourceUniqueID(): bigint;	// getSourceUniqueID(void): struct ActorUniqueID	 /// ?getSourceUniqueID@Actor@@UEBA?AUActorUniqueID@@XZ
    getSpeedInMetersPerSecond(): number;	// getSpeedInMetersPerSecond(void): float	 /// ?getSpeedInMetersPerSecond@Actor@@QEBAMXZ
    getStatusFlag(_1: unknown): boolean;	// getStatusFlag(ActorFlags): bool	 /// ?getStatusFlag@Actor@@QEBA_NW4ActorFlags@@@Z
    getStructuralIntegrity(): number;	// getStructuralIntegrity(void): int	 /// ?getStructuralIntegrity@Actor@@QEBAHXZ
    getTags(): unknown;	// getTags(void): class gsl::span<class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> >,-1> const	 /// ?getTags@Actor@@QEBA?BV?$span@V?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@$0?0@gsl@@XZ
    getTarget(): Actor;	// getTarget(void): class Actor * __ptr64	 /// ?getTarget@Actor@@QEBAPEAV1@XZ
    getTradeOffers(): unknown;	// getTradeOffers(void): class MerchantRecipeList * __ptr64	 /// ?getTradeOffers@Actor@@QEAAPEAVMerchantRecipeList@@XZ
    getTradingPlayer(): Player;	// getTradingPlayer(void): class Player * __ptr64	 /// ?getTradingPlayer@Actor@@QEBAPEAVPlayer@@XZ
    getUniqueID(): bigint;	// getUniqueID(void): struct ActorUniqueID const & __ptr64	 /// ?getUniqueID@Actor@@QEBAAEBUActorUniqueID@@XZ
    getVariant(): number;	// getVariant(void): int	 /// ?getVariant@Actor@@QEBAHXZ
    getVehicle(): Actor;	// getVehicle(void): class Actor * __ptr64	 /// ?getVehicle@Actor@@QEBAPEAV1@XZ
    getVehicleRoot(): Actor;	// getVehicleRoot(void): class Actor * __ptr64	 /// ?getVehicleRoot@Actor@@QEBAPEAV1@XZ
    getVehicleRuntimeID(): bigint;	// getVehicleRuntimeID(void): class ActorRuntimeID	 /// ?getVehicleRuntimeID@Actor@@QEBA?AVActorRuntimeID@@XZ
    getVerticalSpeedInMetersPerSecond(): number;	// getVerticalSpeedInMetersPerSecond(void): float	 /// ?getVerticalSpeedInMetersPerSecond@Actor@@QEBAMXZ
    getViewVector(_1: object, _2: number): bigint;	// getViewVector(IActorMovementProxy const &,float): class Vec3	 /// ?getViewVector@Actor@@SA?AVVec3@@AEBUIActorMovementProxy@@M@Z
    getViewVector(_1: number): bigint;	// getViewVector(float): class Vec3	 /// ?getViewVector@Actor@@QEBA?AVVec3@@M@Z
    handleFallDistanceOnServer(_1: number, _2: number, _3: boolean): void;	// handleFallDistanceOnServer(float,float,bool): void	 /// ?handleFallDistanceOnServer@Actor@@UEAAXMM_N@Z
    handleInsidePortal(_1: object): void;	// handleInsidePortal(BlockPos const &): void	 /// ?handleInsidePortal@Actor@@UEAAXAEBVBlockPos@@@Z
    hasCategory(_1: unknown): boolean;	// hasCategory(ActorCategory): bool	 /// ?hasCategory@Actor@@QEBA_NW4ActorCategory@@@Z
    hasEffect(_1: object): boolean;	// hasEffect(MobEffect const &): bool	 /// ?hasEffect@Actor@@QEBA_NAEBVMobEffect@@@Z
    hasEnteredWater(): boolean;	// hasEnteredWater(void): bool	 /// ?hasEnteredWater@Actor@@UEBA_NXZ
    hasFamily(_1: object): boolean;	// hasFamily(HashedString const &): bool	 /// ?hasFamily@Actor@@QEBA_NAEBVHashedString@@@Z
    hasPassenger(): boolean;	// hasPassenger(void): bool	 /// ?hasPassenger@Actor@@QEBA_NXZ
    hasPlayerPassenger(): boolean;	// hasPlayerPassenger(void): bool	 /// ?hasPlayerPassenger@Actor@@QEBA_NXZ
    hasSaddle(): boolean;	// hasSaddle(void): bool	 /// ?hasSaddle@Actor@@QEBA_NXZ
    hasSubBBIn(_1: object, _2: unknown): boolean;	// hasSubBBIn(IActorMovementProxy const &,MaterialType): bool	 /// ?hasSubBBIn@Actor@@SA_NAEBUIActorMovementProxy@@W4MaterialType@@@Z
    hasTickingArea(): boolean;	// hasTickingArea(void): bool	 /// ?hasTickingArea@Actor@@QEBA_NXZ
    hasType(_1: unknown): boolean;	// hasType(ActorType): bool	 /// ?hasType@Actor@@QEBA_NW4ActorType@@@Z
    heal(_1: number): void;	// heal(int): void	 /// ?heal@Actor@@UEAAXH@Z
    hurt(_1: object, _2: number, _3: boolean, _4: boolean): boolean;	// hurt(ActorDamageSource const &,float,bool,bool): bool	 /// ?hurt@Actor@@QEAA_NAEBVActorDamageSource@@M_N1@Z
    initActorProperties(): void;	// initActorProperties(void): void	 /// ?initActorProperties@Actor@@QEAAXXZ
    initParams(_1: object): void;	// initParams(VariantParameterList &): void	 /// ?initParams@Actor@@QEAAXAEAVVariantParameterList@@@Z
    interpolatorTick(): void;	// interpolatorTick(void): void	 /// ?interpolatorTick@Actor@@UEAAXXZ
    intersects(_1: object, _2: object): boolean;	// intersects(Vec3 const &,Vec3 const &): bool	 /// ?intersects@Actor@@UEBA_NAEBVVec3@@0@Z
    isActorLocationInMaterial(_1: unknown, _2: unknown): boolean;	// isActorLocationInMaterial(ActorLocation,MaterialType): bool	 /// ?isActorLocationInMaterial@Actor@@QEBA_NW4ActorLocation@@W4MaterialType@@@Z
    isAffectedByWaterBottle(): boolean;	// isAffectedByWaterBottle(void): bool	 /// ?isAffectedByWaterBottle@Actor@@UEBA_NXZ
    isAttackableGamemode(): boolean;	// isAttackableGamemode(void): bool	 /// ?isAttackableGamemode@Actor@@UEBA_NXZ
    isBaby(): boolean;	// isBaby(void): bool	 /// ?isBaby@Actor@@QEBA_NXZ
    isChested(): boolean;	// isChested(void): bool	 /// ?isChested@Actor@@QEBA_NXZ
    isClientSide(): boolean;	// isClientSide(void): bool	 /// ?isClientSide@Actor@@UEBA_NXZ
    isControlledByLocalInstance(): boolean;	// isControlledByLocalInstance(void): bool	 /// ?isControlledByLocalInstance@Actor@@QEBA_NXZ
    isEnchanted(): boolean;	// isEnchanted(void): bool	 /// ?isEnchanted@Actor@@UEBA_NXZ
    isFireImmune(): boolean;	// isFireImmune(void): bool	 /// ?isFireImmune@Actor@@UEBA_NXZ
    isFree(_1: object, _2: object, _3: number): boolean;	// isFree(IActorMovementProxy &,Vec3 const &,float): bool	 /// ?isFree@Actor@@SA_NAEAUIActorMovementProxy@@AEBVVec3@@M@Z
    isInClouds(): boolean;	// isInClouds(void): bool	 /// ?isInClouds@Actor@@QEBA_NXZ
    isInLava(): boolean;	// isInLava(void): bool	 /// ?isInLava@Actor@@UEBA_NXZ
    isInPrecipitation(): boolean;	// isInPrecipitation(void): bool	 /// ?isInPrecipitation@Actor@@QEBA_NXZ
    isInRain(): boolean;	// isInRain(void): bool	 /// ?isInRain@Actor@@QEBA_NXZ
    isInSnow(): boolean;	// isInSnow(void): bool	 /// ?isInSnow@Actor@@QEBA_NXZ
    isInThunderstorm(): boolean;	// isInThunderstorm(void): bool	 /// ?isInThunderstorm@Actor@@QEBA_NXZ
    isInWall(): boolean;	// isInWall(void): bool	 /// ?isInWall@Actor@@UEBA_NXZ
    isInWater(): boolean;	// isInWater(void): bool	 /// ?isInWater@Actor@@UEBA_NXZ
    isInWaterOrRain(): boolean;	// isInWaterOrRain(void): bool	 /// ?isInWaterOrRain@Actor@@QEBA_NXZ
    isInsideBorderBlock(_1: number): boolean;	// isInsideBorderBlock(float): bool	 /// ?isInsideBorderBlock@Actor@@QEBA_NM@Z
    isInvertedHealAndHarm(): boolean;	// isInvertedHealAndHarm(void): bool	 /// ?isInvertedHealAndHarm@Actor@@UEBA_NXZ
    isInvisible(): boolean;	// isInvisible(void): bool	 /// ?isInvisible@Actor@@UEBA_NXZ
    isInvulnerableTo(_1: object): boolean;	// isInvulnerableTo(ActorDamageSource const &): bool	 /// ?isInvulnerableTo@Actor@@UEBA_NAEBVActorDamageSource@@@Z
    isLeashed(): boolean;	// isLeashed(void): bool	 /// ?isLeashed@Actor@@QEBA_NXZ
    isMoving(): boolean;	// isMoving(void): bool	 /// ?isMoving@Actor@@QEBA_NXZ
    isOnFire(): boolean;	// isOnFire(void): bool	 /// ?isOnFire@Actor@@UEBA_NXZ
    isOnHotBlock(): boolean;	// isOnHotBlock(void): bool	 /// ?isOnHotBlock@Actor@@UEBA_NXZ
    isOverWater(): boolean;	// isOverWater(void): bool	 /// ?isOverWater@Actor@@UEBA_NXZ
    isPacified(): boolean;	// isPacified(void): bool	 /// ?isPacified@Actor@@QEBA_NXZ
    isPassenger(_1: object): boolean;	// isPassenger(Actor const &): bool	 /// ?isPassenger@Actor@@QEBA_NAEBV1@@Z
    isPersistent(): boolean;	// isPersistent(void): bool	 /// ?isPersistent@Actor@@QEBA_NXZ
    isPowered(): boolean;	// isPowered(void): bool	 /// ?isPowered@Actor@@QEBA_NXZ
    isRegionValid(): boolean;	// isRegionValid(void): bool	 /// ?isRegionValid@Actor@@QEBA_NXZ
    isRemoved(): boolean;	// isRemoved(void): bool	 /// ?isRemoved@Actor@@QEBA_NXZ
    isRiding(_1: object): boolean;	// isRiding(Actor *): bool	 /// ?isRiding@Actor@@QEBA_NPEAV1@@Z
    isRiding(): boolean;	// isRiding(void): bool	 /// ?isRiding@Actor@@QEBA_NXZ
    isSilent(): boolean;	// isSilent(void): bool	 /// ?isSilent@Actor@@UEAA_NXZ
    isSitting(_1: object): boolean;	// isSitting(IActorMovementProxy const &): bool	 /// ?isSitting@Actor@@SA_NAEBUIActorMovementProxy@@@Z
    isSitting(): boolean;	// isSitting(void): bool	 /// ?isSitting@Actor@@QEBA_NXZ
    isSkyLit(_1: number): boolean;	// isSkyLit(float): bool	 /// ?isSkyLit@Actor@@UEAA_NM@Z
    isSneaking(): boolean;	// isSneaking(void): bool	 /// ?isSneaking@Actor@@QEBA_NXZ
    isStanding(): boolean;	// isStanding(void): bool	 /// ?isStanding@Actor@@QEBA_NXZ
    isSwimming(): boolean;	// isSwimming(void): bool	 /// ?isSwimming@Actor@@QEBA_NXZ
    isTame(): boolean;	// isTame(void): bool	 /// ?isTame@Actor@@QEBA_NXZ
    isTouchingDamageBlock(): boolean;	// isTouchingDamageBlock(void): bool	 /// ?isTouchingDamageBlock@Actor@@QEBA_NXZ
    isType(_1: unknown): boolean;	// isType(ActorType): bool	 /// ?isType@Actor@@QEBA_NW4ActorType@@@Z
    isUnderLiquid(_1: unknown): boolean;	// isUnderLiquid(MaterialType): bool	 /// ?isUnderLiquid@Actor@@UEBA_NW4MaterialType@@@Z
    isWearingLeatherArmor(): bigint;	// isWearingLeatherArmor(void): bool const	 /// ?isWearingLeatherArmor@Actor@@UEBA?B_NXZ
    killed(_1: object): void;	// killed(Actor &): void	 /// ?killed@Actor@@UEAAXAEAV1@@Z
    lerpMotion(_1: object): void;	// lerpMotion(Vec3 const &): void	 /// ?lerpMotion@Actor@@UEAAXAEBVVec3@@@Z
    lerpTo(_1: object, _2: object, _3: number): void;	// lerpTo(Vec3 const &,Vec2 const &,int): void	 /// ?lerpTo@Actor@@QEAAXAEBVVec3@@AEBVVec2@@H@Z
    lerpToRotation(_1: object, _2: number): void;	// lerpToRotation(Vec2 const &,int): void	 /// ?lerpToRotation@Actor@@QEAAXAEBVVec2@@H@Z
    load(_1: object, _2: object): boolean;	// load(CompoundTag const &,DataLoadHelper &): bool	 /// ?load@Actor@@UEAA_NAEBVCompoundTag@@AEAVDataLoadHelper@@@Z
    loadEntityFlags(_1: object, _2: object): void;	// loadEntityFlags(CompoundTag const &,DataLoadHelper &): void	 /// ?loadEntityFlags@Actor@@QEAAXAEBVCompoundTag@@AEAVDataLoadHelper@@@Z
    lovePartnerId(): bigint;	// lovePartnerId(void): struct ActorUniqueID const & __ptr64	 /// ?lovePartnerId@Actor@@QEBAAEBUActorUniqueID@@XZ
    markHurt(): void;	// markHurt(void): void	 /// ?markHurt@Actor@@MEAAXXZ
    move(_1: object, _2: object): void;	// move(IActorMovementProxy &,Vec3 const &): void	 /// ?move@Actor@@UEBAXAEAUIActorMovementProxy@@AEBVVec3@@@Z
    move(_1: object): void;	// move(Vec3 const &): void	 /// ?move@Actor@@UEAAXAEBVVec3@@@Z
    moveBBs(_1: object): void;	// moveBBs(Vec3 const &): void	 /// ?moveBBs@Actor@@QEAAXAEBVVec3@@@Z
    moveTo(_1: object, _2: object): void;	// moveTo(Vec3 const &,Vec2 const &): void	 /// ?moveTo@Actor@@QEAAXAEBVVec3@@AEBVVec2@@@Z
    onAboveBubbleColumn(_1: boolean): void;	// onAboveBubbleColumn(bool): void	 /// ?onAboveBubbleColumn@Actor@@UEAAX_N@Z
    onAffectedByWaterBottle(): void;	// onAffectedByWaterBottle(void): void	 /// ?onAffectedByWaterBottle@Actor@@QEAAXXZ
    onClimbableBlock(_1: object): boolean;	// onClimbableBlock(IActorMovementProxy const &): bool	 /// ?onClimbableBlock@Actor@@SA_NAEBUIActorMovementProxy@@@Z
    onEffectAdded(_1: object): void;	// onEffectAdded(MobEffectInstance &): void	 /// ?onEffectAdded@Actor@@UEAAXAEAVMobEffectInstance@@@Z
    onEffectRemoved(_1: object): void;	// onEffectRemoved(MobEffectInstance &): void	 /// ?onEffectRemoved@Actor@@UEAAXAEAVMobEffectInstance@@@Z
    onEffectUpdated(_1: object): void;	// onEffectUpdated(MobEffectInstance &): void	 /// ?onEffectUpdated@Actor@@UEAAXAEAVMobEffectInstance@@@Z
    onInsideBubbleColumn(_1: boolean): void;	// onInsideBubbleColumn(bool): void	 /// ?onInsideBubbleColumn@Actor@@UEAAX_N@Z
    onLightningHit(): void;	// onLightningHit(void): void	 /// ?onLightningHit@Actor@@UEAAXXZ
    onOrphan(): void;	// onOrphan(void): void	 /// ?onOrphan@Actor@@UEAAXXZ
    onSynchedDataUpdate(_1: number): void;	// onSynchedDataUpdate(int): void	 /// ?onSynchedDataUpdate@Actor@@UEAAXH@Z
    onSynchedFlagUpdate(_1: number, _2: bigint, _3: bigint): void;	// onSynchedFlagUpdate(int,__int64,__int64): void	 /// ?onSynchedFlagUpdate@Actor@@UEAAXH_J0@Z
    openContainerComponent(_1: object): void;	// openContainerComponent(Player &): void	 /// ?openContainerComponent@Actor@@UEAAXAEAVPlayer@@@Z
    performRangedAttack(_1: object, _2: number): void;	// performRangedAttack(Actor &,float): void	 /// ?performRangedAttack@Actor@@UEAAXAEAV1@M@Z
    pickUpItem(_1: object, _2: number): void;	// pickUpItem(ItemActor &,int): void	 /// ?pickUpItem@Actor@@QEAAXAEAVItemActor@@H@Z
    playAmbientSound(): void;	// playAmbientSound(void): void	 /// ?playAmbientSound@Actor@@UEAAXXZ
    playSound(_1: unknown, _2: object, _3: object): void;	// playSound(LevelSoundEvent,Vec3 const &,Block const &): void	 /// ?playSound@Actor@@QEAAXW4LevelSoundEvent@@AEBVVec3@@AEBVBlock@@@Z
    playSound(_1: unknown, _2: object, _3: number): void;	// playSound(LevelSoundEvent,Vec3 const &,int): void	 /// ?playSound@Actor@@QEAAXW4LevelSoundEvent@@AEBVVec3@@H@Z
    playSynchronizedSound(_1: unknown, _2: object, _3: object, _4: boolean): void;	// playSynchronizedSound(LevelSoundEvent,Vec3 const &,Block const &,bool): void	 /// ?playSynchronizedSound@Actor@@UEAAXW4LevelSoundEvent@@AEBVVec3@@AEBVBlock@@_N@Z
    playSynchronizedSound(_1: unknown, _2: object, _3: number, _4: boolean): void;	// playSynchronizedSound(LevelSoundEvent,Vec3 const &,int,bool): void	 /// ?playSynchronizedSound@Actor@@UEAAXW4LevelSoundEvent@@AEBVVec3@@H_N@Z
    positionAllPassengers(): void;	// positionAllPassengers(void): void	 /// ?positionAllPassengers@Actor@@QEAAXXZ
    positionPassenger(_1: object, _2: number): void;	// positionPassenger(Actor &,float): void	 /// ?positionPassenger@Actor@@UEAAXAEAV1@M@Z
    pushBackActionEventToActionQueue(_1: unknown): void;	// pushBackActionEventToActionQueue(ActionEvent): void	 /// ?pushBackActionEventToActionQueue@Actor@@QEAAXVActionEvent@@@Z
    pushOutOfBlocks(_1: object): void;	// pushOutOfBlocks(Vec3 const &): void	 /// ?pushOutOfBlocks@Actor@@MEAAXAEBVVec3@@@Z
    reload(): void;	// reload(void): void	 /// ?reload@Actor@@QEAAXXZ
    reloadComponents(_1: unknown, _2: object): void;	// reloadComponents(Actor::InitializationMethod,VariantParameterList const &): void	 /// ?reloadComponents@Actor@@MEAAXW4InitializationMethod@1@AEBVVariantParameterList@@@Z
    reloadLootTable(_1: object): void;	// reloadLootTable(EquipmentTableDefinition const &): void	 /// ?reloadLootTable@Actor@@UEAAXAEBUEquipmentTableDefinition@@@Z
    reloadLootTable(): void;	// reloadLootTable(void): void	 /// ?reloadLootTable@Actor@@UEAAXXZ
    remove(): void;	// remove(void): void	 /// ?remove@Actor@@UEAAXXZ
    removeAllPassengers(_1: boolean, _2: boolean): void;	// removeAllPassengers(bool,bool): void	 /// ?removeAllPassengers@Actor@@QEAAX_N0@Z
    removeEffect(_1: number): void;	// removeEffect(int): void	 /// ?removeEffect@Actor@@QEAAXH@Z
    reset(): void;	// reset(void): void	 /// ?reset@Actor@@UEAAXXZ
    resetBlockMovementSlowdownMultiplier(): void;	// resetBlockMovementSlowdownMultiplier(void): void	 /// ?resetBlockMovementSlowdownMultiplier@Actor@@UEAAXXZ
    resetClientAnimations(): void;	// resetClientAnimations(void): void	 /// ?resetClientAnimations@Actor@@QEAAXXZ
    resetRegion(): void;	// resetRegion(void): void	 /// ?resetRegion@Actor@@QEAAXXZ
    save(_1: object): boolean;	// save(CompoundTag &): bool	 /// ?save@Actor@@UEAA_NAEAVCompoundTag@@@Z
    saveWithoutId(_1: object): void;	// saveWithoutId(CompoundTag &): void	 /// ?saveWithoutId@Actor@@UEAAXAEAVCompoundTag@@@Z
    sendMotionPacketIfNeeded(): void;	// sendMotionPacketIfNeeded(void): void	 /// ?sendMotionPacketIfNeeded@Actor@@UEAAXXZ
    sendMotionToServer(): void;	// sendMotionToServer(void): void	 /// ?sendMotionToServer@Actor@@QEAAXXZ
    serializationSetHealth(_1: number): void;	// serializationSetHealth(int): void	 /// ?serializationSetHealth@Actor@@QEAAXH@Z
    setAABB(_1: object): void;	// setAABB(AABB const &): void	 /// ?setAABB@Actor@@QEAAXAEBVAABB@@@Z
    setAABBDim(_1: object): void;	// setAABBDim(Vec2 const &): void	 /// ?setAABBDim@Actor@@QEAAXAEBVVec2@@@Z
    setActorRendererId(_1: unknown): void;	// setActorRendererId(HashedString): void	 /// ?setActorRendererId@Actor@@QEAAXVHashedString@@@Z
    setArmor(_1: unknown, _2: object): void;	// setArmor(ArmorSlot,ItemStack const &): void	 /// ?setArmor@Actor@@UEAAXW4ArmorSlot@@AEBVItemStack@@@Z
    setBlockMovementSlowdownMultiplier(_1: object, _2: object): void;	// setBlockMovementSlowdownMultiplier(BlockLegacy const &,Vec3 const &): void	 /// ?setBlockMovementSlowdownMultiplier@Actor@@UEAAXAEBVBlockLegacy@@AEBVVec3@@@Z
    setCanPowerJump(_1: boolean): void;	// setCanPowerJump(bool): void	 /// ?setCanPowerJump@Actor@@UEAAX_N@Z
    setCarriedItem(_1: object): void;	// setCarriedItem(ItemStack const &): void	 /// ?setCarriedItem@Actor@@UEAAXAEBVItemStack@@@Z
    setChainedDamageEffects(_1: boolean): void;	// setChainedDamageEffects(bool): void	 /// ?setChainedDamageEffects@Actor@@QEAAX_N@Z
    setCharged(_1: boolean): void;	// setCharged(bool): void	 /// ?setCharged@Actor@@QEAAX_N@Z
    setColor(_1: unknown): void;	// setColor(PaletteColor): void	 /// ?setColor@Actor@@QEAAXW4PaletteColor@@@Z
    setControllingSeat(_1: number): void;	// setControllingSeat(int): void	 /// ?setControllingSeat@Actor@@QEAAXH@Z
    setDamageNearbyMobs(_1: boolean): void;	// setDamageNearbyMobs(bool): void	 /// ?setDamageNearbyMobs@Actor@@UEAAX_N@Z
    setGlobal(_1: boolean): void;	// setGlobal(bool): void	 /// ?setGlobal@Actor@@QEAAX_N@Z
    setInLove(_1: object): void;	// setInLove(Actor *): void	 /// ?setInLove@Actor@@QEAAXPEAV1@@Z
    setInvisible(_1: boolean): void;	// setInvisible(bool): void	 /// ?setInvisible@Actor@@QEAAX_N@Z
    setLastHitBB(_1: object, _2: object): void;	// setLastHitBB(Vec3 const &,Vec3 const &): void	 /// ?setLastHitBB@Actor@@QEAAXAEBVVec3@@0@Z
    setLastHurtByMob(_1: object): void;	// setLastHurtByMob(Mob *): void	 /// ?setLastHurtByMob@Actor@@UEAAXPEAVMob@@@Z
    setLastHurtByPlayer(_1: object): void;	// setLastHurtByPlayer(Player *): void	 /// ?setLastHurtByPlayer@Actor@@UEAAXPEAVPlayer@@@Z
    setLastHurtMob(_1: object): void;	// setLastHurtMob(Actor *): void	 /// ?setLastHurtMob@Actor@@UEAAXPEAV1@@Z
    setLeashHolder(_1: unknown): void;	// setLeashHolder(ActorUniqueID): void	 /// ?setLeashHolder@Actor@@QEAAXUActorUniqueID@@@Z
    setMoving(_1: boolean): void;	// setMoving(bool): void	 /// ?setMoving@Actor@@QEAAX_N@Z
    setNameTagVisible(_1: boolean): void;	// setNameTagVisible(bool): void	 /// ?setNameTagVisible@Actor@@UEAAX_N@Z
    setOffhandSlot(_1: object): void;	// setOffhandSlot(ItemStack const &): void	 /// ?setOffhandSlot@Actor@@UEAAXAEBVItemStack@@@Z
    setOwner(_1: unknown): void;	// setOwner(ActorUniqueID): void	 /// ?setOwner@Actor@@UEAAXUActorUniqueID@@@Z
    setPersistent(): void;	// setPersistent(void): void	 /// ?setPersistent@Actor@@QEAAXXZ
    setPos(_1: object): void;	// setPos(Vec3 const &): void	 /// ?setPos@Actor@@UEAAXAEBVVec3@@@Z
    setPreviousPosRot(_1: object, _2: object): void;	// setPreviousPosRot(Vec3 const &,Vec2 const &): void	 /// ?setPreviousPosRot@Actor@@QEAAXAEBVVec3@@AEBVVec2@@@Z
    setRegion(_1: object): void;	// setRegion(BlockSource &): void	 /// ?setRegion@Actor@@QEAAXAEAVBlockSource@@@Z
    setResting(_1: boolean): void;	// setResting(bool): void	 /// ?setResting@Actor@@QEAAX_N@Z
    setRot(_1: object): void;	// setRot(Vec2 const &): void	 /// ?setRot@Actor@@UEAAXAEBVVec2@@@Z
    setSitting(_1: boolean): void;	// setSitting(bool): void	 /// ?setSitting@Actor@@UEAAX_N@Z
    setSize(_1: number, _2: number): void;	// setSize(float,float): void	 /// ?setSize@Actor@@UEAAXMM@Z
    setSneaking(_1: boolean): void;	// setSneaking(bool): void	 /// ?setSneaking@Actor@@UEAAX_N@Z
    setStanding(_1: boolean): void;	// setStanding(bool): void	 /// ?setStanding@Actor@@UEAAX_N@Z
    setStatusFlag(_1: unknown, _2: boolean): void;	// setStatusFlag(ActorFlags,bool): void	 /// ?setStatusFlag@Actor@@QEAAXW4ActorFlags@@_N@Z
    setStrength(_1: number): void;	// setStrength(int): void	 /// ?setStrength@Actor@@QEAAXH@Z
    setVariant(_1: number): void;	// setVariant(int): void	 /// ?setVariant@Actor@@QEAAXH@Z
    shouldRender(): boolean;	// shouldRender(void): bool	 /// ?shouldRender@Actor@@UEBA_NXZ
    shouldTick(): boolean;	// shouldTick(void): bool	 /// ?shouldTick@Actor@@UEBA_NXZ
    shouldTryMakeStepSound(): boolean;	// shouldTryMakeStepSound(void): bool	 /// ?shouldTryMakeStepSound@Actor@@MEAA_NXZ
    spawnAtLocation(_1: object, _2: number): unknown;	// spawnAtLocation(Block const &,int): class ItemActor * __ptr64	 /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@AEBVBlock@@H@Z
    spawnAtLocation(_1: object, _2: number, _3: number): unknown;	// spawnAtLocation(Block const &,int,float): class ItemActor * __ptr64	 /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@AEBVBlock@@HM@Z
    spawnAtLocation(_1: object, _2: number): unknown;	// spawnAtLocation(ItemStack const &,float): class ItemActor * __ptr64	 /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@AEBVItemStack@@M@Z
    spawnAtLocation(_1: number, _2: number): unknown;	// spawnAtLocation(int,int): class ItemActor * __ptr64	 /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@HH@Z
    spawnAtLocation(_1: number, _2: number, _3: number): unknown;	// spawnAtLocation(int,int,float): class ItemActor * __ptr64	 /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@HHM@Z
    spawnBalloonPopParticles(): void;	// spawnBalloonPopParticles(void): void	 /// ?spawnBalloonPopParticles@Actor@@QEAAXXZ
    spawnDustParticles(_1: number): void;	// spawnDustParticles(int): void	 /// ?spawnDustParticles@Actor@@QEAAXH@Z
    spawnTamingParticles(_1: boolean): void;	// spawnTamingParticles(bool): void	 /// ?spawnTamingParticles@Actor@@QEAAX_N@Z
    spawnTrailBubbles(): void;	// spawnTrailBubbles(void): void	 /// ?spawnTrailBubbles@Actor@@MEAAXXZ
    startSpinAttack(): void;	// startSpinAttack(void): void	 /// ?startSpinAttack@Actor@@UEAAXXZ
    startSwimming(): void;	// startSwimming(void): void	 /// ?startSwimming@Actor@@UEAAXXZ
    stopSwimming(): void;	// stopSwimming(void): void	 /// ?stopSwimming@Actor@@UEAAXXZ
    teleportPassengersTo(_1: object, _2: number, _3: number): void;	// teleportPassengersTo(Vec3 const &,int,int): void	 /// ?teleportPassengersTo@Actor@@QEAAXAEBVVec3@@HH@Z
    thawFreezeEffect(): void;	// thawFreezeEffect(void): void	 /// ?thawFreezeEffect@Actor@@UEAAXXZ
    tick(_1: object): boolean;	// tick(BlockSource &): bool	 /// ?tick@Actor@@QEAA_NAEAVBlockSource@@@Z
    tickLeash(): void;	// tickLeash(void): void	 /// ?tickLeash@Actor@@UEAAXXZ
    transferTickingArea(_1: object): void;	// transferTickingArea(Dimension &): void	 /// ?transferTickingArea@Actor@@QEAAXAEAVDimension@@@Z
    tryCreateAddActorPacket(): bigint;	// tryCreateAddActorPacket(void): class std::unique_ptr<class AddActorBasePacket,struct std::default_delete<class AddActorBasePacket> >	 /// ?tryCreateAddActorPacket@Actor@@UEAA?AV?$unique_ptr@VAddActorBasePacket@@U?$default_delete@VAddActorBasePacket@@@std@@@std@@XZ
    tryGetFromEntity(): bigint;	 /// Actor::tryGetFromEntity
    tryMoveChunks(): boolean;	// tryMoveChunks(void): bool	 /// ?tryMoveChunks@Actor@@QEAA_NXZ
    tryTeleportTo(_1: object, _2: boolean, _3: boolean, _4: number, _5: number): boolean;	// tryTeleportTo(Vec3 const &,bool,bool,int,int): bool	 /// ?tryTeleportTo@Actor@@UEAA_NAEBVVec3@@_N1HH@Z
    updateDescription(): void;	// updateDescription(void): void	 /// ?updateDescription@Actor@@QEAAXXZ
    updateEntityInside(_1: object): void;	// updateEntityInside(AABB const &): void	 /// ?updateEntityInside@Actor@@UEAAXAEBVAABB@@@Z
    updateEntityInside(): void;	// updateEntityInside(void): void	 /// ?updateEntityInside@Actor@@UEAAXXZ
    updateInsideBlock(): void;	// updateInsideBlock(void): void	 /// ?updateInsideBlock@Actor@@MEAAXXZ
    updateWaterState(): boolean;	// updateWaterState(void): bool	 /// ?updateWaterState@Actor@@MEAA_NXZ
    useItem(_1: object, _2: unknown, _3: boolean): void;	// useItem(ItemStackBase &,ItemUseMethod,bool): void	 /// ?useItem@Actor@@UEAAXAEAVItemStackBase@@W4ItemUseMethod@@_N@Z
    useSaddle(_1: object, _2: object): boolean;	// useSaddle(ItemStackBase &,Player *): bool	 /// ?useSaddle@Actor@@QEAA_NAEAVItemStackBase@@PEAVPlayer@@@Z
    wasHurt(): boolean;	// wasHurt(void): bool	 /// ?wasHurt@Actor@@UEAA_NXZ
    wasLastHitByPlayer(): boolean;	// wasLastHitByPlayer(void): bool	 /// ?wasLastHitByPlayer@Actor@@QEAA_NXZ
    wobble(): void;	// wobble(void): void	 /// ?wobble@Actor@@UEAAXXZ
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
declare class Optional {
    // Attributes 
    isPresent: number;
    ptr: LevelWeakPtr;
    // Methods 
    // Inherited from Optional
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
    synchedActorData: SynchedActorData;
    isSpawned: number;
    geometryData: SDKText;
    supplies: PlayerInventoryProxy;
    skinUUID: SDKText;
    geometryName: SDKText;
    handContainer: SimpleContainer;
    transactionManager: InventoryTransactionManager;
    skinType: SDKText;
    random: Random;
    bodyYaw: number;
    isMovedToLimbo: number;
    vtable: object;
    oldPosition: Vec3;
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
    velocity: Vec3;
    actorIdentifier: ActorDefinitionIdentifier;
    baseAttributeMap: BaseAttributeMap;
    aabb: AABB;
    width: number;
    position: Vec3;
    postTickPosDelta: Vec3;
    allEffects: SDKVectorContainer;
    entityRuntimeId: bigint;
    isSafeToSleepNear: number;
    armorContainer: SimpleContainer;
    // Methods 
    // Inherited from Player
    _chooseSpawnArea(): void;	// _chooseSpawnArea(void): void	 /// ?_chooseSpawnArea@Player@@IEAAXXZ
    _chooseSpawnPositionWithinArea(): boolean;	// _chooseSpawnPositionWithinArea(void): bool	 /// ?_chooseSpawnPositionWithinArea@Player@@IEAA_NXZ
    _createChunkSource(_1: object): bigint;	// _createChunkSource(ChunkSource &): class std::shared_ptr<class ChunkViewSource>	 /// ?_createChunkSource@Player@@MEAA?AV?$shared_ptr@VChunkViewSource@@@std@@AEAVChunkSource@@@Z
    _crit(_1: object): void;	// _crit(Actor &): void	 /// ?_crit@Player@@UEAAXAEAVActor@@@Z
    _ensureSafeSpawnPosition(_1: object): void;	// _ensureSafeSpawnPosition(Vec3 &): void	 /// ?_ensureSafeSpawnPosition@Player@@AEAAXAEAVVec3@@@Z
    _fireDimensionChanged(): void;	// _fireDimensionChanged(void): void	 /// ?_fireDimensionChanged@Player@@UEAAXXZ
    _fireWillChangeDimension(): void;	// _fireWillChangeDimension(void): void	 /// ?_fireWillChangeDimension@Player@@UEAAXXZ
    _hurt(_1: object, _2: number, _3: boolean, _4: boolean): boolean;	// _hurt(ActorDamageSource const &,float,bool,bool): bool	 /// ?_hurt@Player@@MEAA_NAEBVActorDamageSource@@M_N1@Z
    _isChunkSourceLoaded(_1: object, _2: object): boolean;	// _isChunkSourceLoaded(Vec3 const &,BlockSource const &): bool	 /// ?_isChunkSourceLoaded@Player@@AEBA_NAEBVVec3@@AEBVBlockSource@@@Z
    _onSizeUpdated(): void;	// _onSizeUpdated(void): void	 /// ?_onSizeUpdated@Player@@EEAAXXZ
    _registerElytraLoopSound(): void;	// _registerElytraLoopSound(void): void	 /// ?_registerElytraLoopSound@Player@@AEAAXXZ
    _registerPlayerAttributes(): void;	// _registerPlayerAttributes(void): void	 /// ?_registerPlayerAttributes@Player@@IEAAXXZ
    _validateSpawnPositionAvailability(_1: object, _2: object, _3: object): boolean;	// _validateSpawnPositionAvailability(Vec3 const &,BlockSource *,Vec3 const * const): bool	 /// ?_validateSpawnPositionAvailability@Player@@IEBA_NAEBVVec3@@PEAVBlockSource@@QEBV2@@Z
    add(_1: object): boolean;	// add(ItemStack &): bool	 /// ?add@Player@@UEAA_NAEAVItemStack@@@Z
    addAdditionalSaveData(_1: object): void;	// addAdditionalSaveData(CompoundTag &): void	 /// ?addAdditionalSaveData@Player@@MEAAXAEAVCompoundTag@@@Z
    addExperience(_1: number): void;	// addExperience(int): void	 /// ?addExperience@Player@@UEAAXH@Z
    addLevels(_1: number): void;	// addLevels(int): void	 /// ?addLevels@Player@@UEAAXH@Z
    aiStep(_1: object): void;	// aiStep(IMobMovementProxy &): void	 /// ?aiStep@Player@@UEBAXAEAUIMobMovementProxy@@@Z
    aiStep(): void;	// aiStep(void): void	 /// ?aiStep@Player@@UEAAXXZ
    attack(_1: object, _2: object): boolean;	// attack(Actor &,ActorDamageCause const &): bool	 /// ?attack@Player@@UEAA_NAEAVActor@@AEBW4ActorDamageCause@@@Z
    awardKillScore(_1: object, _2: number): void;	// awardKillScore(Actor &,int): void	 /// ?awardKillScore@Player@@UEAAXAEAVActor@@H@Z
    canAddPassenger(_1: object): boolean;	// canAddPassenger(Actor &): bool	 /// ?canAddPassenger@Player@@UEBA_NAEAVActor@@@Z
    canFreeze(): boolean;	// canFreeze(void): bool	 /// ?canFreeze@Player@@UEBA_NXZ
    canInteractWithOtherEntitiesInGame(): boolean;	// canInteractWithOtherEntitiesInGame(void): bool	 /// ?canInteractWithOtherEntitiesInGame@Player@@UEBA_NXZ
    canJump(_1: object): boolean;	// canJump(IPlayerMovementProxy &): bool	 /// ?canJump@Player@@SA_NAEAUIPlayerMovementProxy@@@Z
    canOpenContainerScreen(): boolean;	// canOpenContainerScreen(void): bool	 /// ?canOpenContainerScreen@Player@@UEAA_NXZ
    canStartSleepInBed(): boolean;	// canStartSleepInBed(void): bool	 /// ?canStartSleepInBed@Player@@UEAA_NXZ
    canUseAbility(_1: unknown): boolean;	// canUseAbility(AbilitiesIndex): bool	 /// ?canUseAbility@Player@@QEBA_NW4AbilitiesIndex@@@Z
    canUseOperatorBlocks(): boolean;	// canUseOperatorBlocks(void): bool	 /// ?canUseOperatorBlocks@Player@@QEBA_NXZ
    causeFoodExhaustion(_1: number): void;	// causeFoodExhaustion(float): void	 /// ?causeFoodExhaustion@Player@@QEAAXM@Z
    checkSpawnBlock(_1: object): boolean;	// checkSpawnBlock(BlockSource const &): bool	 /// ?checkSpawnBlock@Player@@IEBA_NAEBVBlockSource@@@Z
    clearRespawnPosition(): void;	// clearRespawnPosition(void): void	 /// ?clearRespawnPosition@Player@@QEAAXXZ
    completeUsingItem(): void;	// completeUsingItem(void): void	 /// ?completeUsingItem@Player@@UEAAXXZ
    consumeTotem(): boolean;	// consumeTotem(void): bool	 /// ?consumeTotem@Player@@UEAA_NXZ
    deleteContainerManager(): void;	// deleteContainerManager(void): void	 /// ?deleteContainerManager@Player@@UEAAXXZ
    destroyRegion(): void;	// destroyRegion(void): void	 /// ?destroyRegion@Player@@UEAAXXZ
    die(_1: object): void;	// die(ActorDamageSource const &): void	 /// ?die@Player@@UEAAXAEBVActorDamageSource@@@Z
    drop(_1: object, _2: boolean): boolean;	// drop(ItemStack const &,bool): bool	 /// ?drop@Player@@UEAA_NAEBVItemStack@@_N@Z
    dropEquipmentOnDeath(_1: object, _2: number): void;	// dropEquipmentOnDeath(ActorDamageSource const &,int): void	 /// ?dropEquipmentOnDeath@Player@@UEAAXAEBVActorDamageSource@@H@Z
    dropEquipmentOnDeath(): void;	// dropEquipmentOnDeath(void): void	 /// ?dropEquipmentOnDeath@Player@@UEAAXXZ
    eat(_1: number, _2: number): void;	// eat(int,float): void	 /// ?eat@Player@@QEAAXHM@Z
    feed(_1: number): void;	// feed(int): void	 /// ?feed@Player@@UEAAXH@Z
    forceAllowEating(): boolean;	// forceAllowEating(void): bool	 /// ?forceAllowEating@Player@@QEBA_NXZ
    getActorRendererId(): unknown;	// getActorRendererId(void): class HashedString const & __ptr64	 /// ?getActorRendererId@Player@@UEBAAEBVHashedString@@XZ
    getAgent(): unknown;	// getAgent(void): class Agent * __ptr64	 /// ?getAgent@Player@@QEBAPEAVAgent@@XZ
    getAgentIfAllowed(_1: boolean, _2: unknown): unknown;	// getAgentIfAllowed(bool,ActorUniqueID): class Agent * __ptr64	 /// ?getAgentIfAllowed@Player@@QEBAPEAVAgent@@_NUActorUniqueID@@@Z
    getAllEquipment(): bigint;	// getAllEquipment(void): class std::vector<class ItemStack const * __ptr64,class std::allocator<class ItemStack const * __ptr64> >	 /// ?getAllEquipment@Player@@UEBA?AV?$vector@PEBVItemStack@@V?$allocator@PEBVItemStack@@@std@@@std@@XZ
    getAllHand(): bigint;	// getAllHand(void): class std::vector<class ItemStack const * __ptr64,class std::allocator<class ItemStack const * __ptr64> >	 /// ?getAllHand@Player@@UEBA?AV?$vector@PEBVItemStack@@V?$allocator@PEBVItemStack@@@std@@@std@@XZ
    getAnimationComponent(): unknown;	// getAnimationComponent(void): class AnimationComponent & __ptr64	 /// ?getAnimationComponent@Player@@UEAAAEAVAnimationComponent@@XZ
    getAttachPos(_1: unknown, _2: number): bigint;	// getAttachPos(ActorLocation,float): class Vec3	 /// ?getAttachPos@Player@@UEBA?AVVec3@@W4ActorLocation@@M@Z
    getCameraOffset(): number;	// getCameraOffset(void): float	 /// ?getCameraOffset@Player@@UEBAMXZ
    getCapePos(_1: number): bigint;	// getCapePos(float): class Vec3	 /// ?getCapePos@Player@@QEAA?AVVec3@@M@Z
    getCommandPermissionLevel(): bigint;	// getCommandPermissionLevel(void): enum CommandPermissionLevel	 /// ?getCommandPermissionLevel@Player@@UEBA?AW4CommandPermissionLevel@@XZ
    getDirection(): number;	// getDirection(void): int	 /// ?getDirection@Player@@QEBAHXZ
    getEntityTypeId(): bigint;	// getEntityTypeId(void): enum ActorType	 /// ?getEntityTypeId@Player@@UEBA?AW4ActorType@@XZ
    getEquippedTotem(): ItemStack;	// getEquippedTotem(void): class ItemStack const & __ptr64	 /// ?getEquippedTotem@Player@@UEBAAEBVItemStack@@XZ
    getEventing(): unknown;	// getEventing(void): class IMinecraftEventing * __ptr64	 /// ?getEventing@Player@@UEBAPEAVIMinecraftEventing@@XZ
    getExpectedSpawnDimensionId(): bigint;	// getExpectedSpawnDimensionId(void): class AutomaticID<class Dimension,int>	 /// ?getExpectedSpawnDimensionId@Player@@QEBA?AV?$AutomaticID@VDimension@@H@@XZ
    getExpectedSpawnPosition(): BlockPos;	// getExpectedSpawnPosition(void): class BlockPos const & __ptr64	 /// ?getExpectedSpawnPosition@Player@@QEBAAEBVBlockPos@@XZ
    getFormattedNameTag(): bigint;	// getFormattedNameTag(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> >	 /// ?getFormattedNameTag@Player@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
    getItemCooldownLeft(_1: object): number;	// getItemCooldownLeft(HashedString const &): int	 /// ?getItemCooldownLeft@Player@@UEBAHAEBVHashedString@@@Z
    getItemCooldownLeft(_1: bigint): number;	// getItemCooldownLeft(unsigned __int64): int	 /// ?getItemCooldownLeft@Player@@UEBAH_K@Z
    getItemUseDuration(): number;	// getItemUseDuration(void): int	 /// ?getItemUseDuration@Player@@UEBAHXZ
    getItemUseIntervalProgress(): number;	// getItemUseIntervalProgress(void): float	 /// ?getItemUseIntervalProgress@Player@@UEBAMXZ
    getItemUseStartupProgress(): number;	// getItemUseStartupProgress(void): float	 /// ?getItemUseStartupProgress@Player@@UEBAMXZ
    getLuck(): number;	// getLuck(void): float	 /// ?getLuck@Player@@QEAAMXZ
    getMaxItemCooldownLeft(): number;	// getMaxItemCooldownLeft(void): int	 /// ?getMaxItemCooldownLeft@Player@@UEBAHXZ
    getMovementSettings(): bigint;	// getMovementSettings(void): struct PlayerMovementSettings const & __ptr64	 /// ?getMovementSettings@Player@@UEBAAEBUPlayerMovementSettings@@XZ
    getPlayerPermissionLevel(): bigint;	// getPlayerPermissionLevel(void): enum PlayerPermissionLevel	 /// ?getPlayerPermissionLevel@Player@@QEBA?AW4PlayerPermissionLevel@@XZ
    getPlayerSessionId(): unknown;	// getPlayerSessionId(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64	 /// ?getPlayerSessionId@Player@@QEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
    getPortalWaitTime(): number;	// getPortalWaitTime(void): int	 /// ?getPortalWaitTime@Player@@UEBAHXZ
    getPreviousTickSleepTimer(): number;	// getPreviousTickSleepTimer(void): int	 /// ?getPreviousTickSleepTimer@Player@@UEBAHXZ
    getRidingHeight(): number;	// getRidingHeight(void): float	 /// ?getRidingHeight@Player@@UEAAMXZ
    getSelectedItem(): ItemStack;	// getSelectedItem(void): class ItemStack const & __ptr64	 /// ?getSelectedItem@Player@@QEBAAEBVItemStack@@XZ
    getSelectedItemSlot(): number;	// getSelectedItemSlot(void): int	 /// ?getSelectedItemSlot@Player@@QEBAHXZ
    getSleepTimer(): number;	// getSleepTimer(void): int	 /// ?getSleepTimer@Player@@UEBAHXZ
    getSpeed(): number;	// getSpeed(void): float	 /// ?getSpeed@Player@@UEBAMXZ
    getSupplies(): unknown;	// getSupplies(void): class PlayerInventory const & __ptr64	 /// ?getSupplies@Player@@QEBAAEBVPlayerInventory@@XZ
    getTickingOffsets(): unknown;	// getTickingOffsets(void): class std::vector<class ChunkPos,class std::allocator<class ChunkPos> > const & __ptr64	 /// ?getTickingOffsets@Player@@UEBAAEBV?$vector@VChunkPos@@V?$allocator@VChunkPos@@@std@@@std@@XZ
    getTrackedBosses(): unknown;	// getTrackedBosses(void): class std::vector<struct ActorUniqueID,class std::allocator<struct ActorUniqueID> > const & __ptr64	 /// ?getTrackedBosses@Player@@QEAAAEBV?$vector@UActorUniqueID@@V?$allocator@UActorUniqueID@@@std@@@std@@XZ
    getXpNeededForNextLevel(): number;	// getXpNeededForNextLevel(void): int	 /// ?getXpNeededForNextLevel@Player@@QEBAHXZ
    getXuid(): bigint;	// getXuid(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> >	 /// ?getXuid@Player@@UEBA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
    handleEntityEvent(_1: unknown, _2: number): void;	// handleEntityEvent(ActorEvent,int): void	 /// ?handleEntityEvent@Player@@UEAAXW4ActorEvent@@H@Z
    hasResource(_1: number): boolean;	// hasResource(int): bool	 /// ?hasResource@Player@@UEAA_NH@Z
    hasRespawnPosition(): boolean;	// hasRespawnPosition(void): bool	 /// ?hasRespawnPosition@Player@@QEBA_NXZ
    initBodyControl(): bigint;	// initBodyControl(void): class std::unique_ptr<class BodyControl,struct std::default_delete<class BodyControl> >	 /// ?initBodyControl@Player@@EEAA?AV?$unique_ptr@VBodyControl@@U?$default_delete@VBodyControl@@@std@@@std@@XZ
    initHUDContainerManager(): void;	// initHUDContainerManager(void): void	 /// ?initHUDContainerManager@Player@@UEAAXXZ
    initializeComponents(_1: unknown, _2: object): void;	// initializeComponents(Actor::InitializationMethod,VariantParameterList const &): void	 /// ?initializeComponents@Player@@UEAAXW4InitializationMethod@Actor@@AEBVVariantParameterList@@@Z
    interact(_1: object, _2: object): boolean;	// interact(Actor &,Vec3 const &): bool	 /// ?interact@Player@@QEAA_NAEAVActor@@AEBVVec3@@@Z
    inventoryChanged(_1: object, _2: number, _3: object, _4: object, _5: boolean): void;	// inventoryChanged(Container &,int,ItemStack const &,ItemStack const &,bool): void	 /// ?inventoryChanged@Player@@UEAAXAEAVContainer@@HAEBVItemStack@@1_N@Z
    isAdventure(): boolean;	// isAdventure(void): bool	 /// ?isAdventure@Player@@UEBA_NXZ
    isBlocking(): boolean;	// isBlocking(void): bool	 /// ?isBlocking@Player@@UEBA_NXZ
    isDamageBlocked(_1: object): boolean;	// isDamageBlocked(ActorDamageSource const &): bool	 /// ?isDamageBlocked@Player@@UEBA_NAEBVActorDamageSource@@@Z
    isForcedRespawn(): boolean;	// isForcedRespawn(void): bool	 /// ?isForcedRespawn@Player@@QEBA_NXZ
    isHiddenFrom(_1: object): boolean;	// isHiddenFrom(Mob &): bool	 /// ?isHiddenFrom@Player@@QEBA_NAEAVMob@@@Z
    isHurt(): boolean;	// isHurt(void): bool	 /// ?isHurt@Player@@QEAA_NXZ
    isImmobile(): boolean;	// isImmobile(void): bool	 /// ?isImmobile@Player@@UEBA_NXZ
    isInCreativeMode(): boolean;	// isInCreativeMode(void): bool	 /// ?isInCreativeMode@Player@@QEBA_NXZ
    isInvulnerableTo(_1: object): boolean;	// isInvulnerableTo(ActorDamageSource const &): bool	 /// ?isInvulnerableTo@Player@@UEBA_NAEBVActorDamageSource@@@Z
    isItemOnCooldown(_1: object): boolean;	// isItemOnCooldown(HashedString const &): bool	 /// ?isItemOnCooldown@Player@@UEBA_NAEBVHashedString@@@Z
    isJumping(): boolean;	// isJumping(void): bool	 /// ?isJumping@Player@@UEBA_NXZ
    isSleeping(): boolean;	// isSleeping(void): bool	 /// ?isSleeping@Player@@UEBA_NXZ
    isSpectator(): boolean;	// isSpectator(void): bool	 /// ?isSpectator@Player@@UEBA_NXZ
    isSurvival(): boolean;	// isSurvival(void): bool	 /// ?isSurvival@Player@@UEBA_NXZ
    isUsingItem(): boolean;	// isUsingItem(void): bool	 /// ?isUsingItem@Player@@QEBA_NXZ
    isWorldBuilder(): boolean;	// isWorldBuilder(void): bool	 /// ?isWorldBuilder@Player@@UEBA_NXZ
    jumpFromGround(_1: object): void;	// jumpFromGround(IMobMovementProxy &): void	 /// ?jumpFromGround@Player@@UEBAXAEAUIMobMovementProxy@@@Z
    jumpFromGround(): void;	// jumpFromGround(void): void	 /// ?jumpFromGround@Player@@UEAAXXZ
    move(_1: object, _2: object): void;	// move(IActorMovementProxy &,Vec3 const &): void	 /// ?move@Player@@UEBAXAEAUIActorMovementProxy@@AEBVVec3@@@Z
    move(_1: object): void;	// move(Vec3 const &): void	 /// ?move@Player@@UEAAXAEBVVec3@@@Z
    moveView(): void;	// moveView(void): void	 /// ?moveView@Player@@UEAAXXZ
    normalTick(): void;	// normalTick(void): void	 /// ?normalTick@Player@@UEAAXXZ
    onBounceStarted(_1: object, _2: object): void;	// onBounceStarted(BlockPos const &,Block const &): void	 /// ?onBounceStarted@Player@@MEAAXAEBVBlockPos@@AEBVBlock@@@Z
    onMovePlayerPacketNormal(_1: object, _2: object, _3: number): void;	// onMovePlayerPacketNormal(Vec3 const &,Vec2 const &,float): void	 /// ?onMovePlayerPacketNormal@Player@@MEAAXAEBVVec3@@AEBVVec2@@M@Z
    prepareRegion(_1: object): void;	// prepareRegion(ChunkSource &): void	 /// ?prepareRegion@Player@@UEAAXAEAVChunkSource@@@Z
    readAdditionalSaveData(_1: object, _2: object): void;	// readAdditionalSaveData(CompoundTag const &,DataLoadHelper &): void	 /// ?readAdditionalSaveData@Player@@MEAAXAEBVCompoundTag@@AEAVDataLoadHelper@@@Z
    recheckSpawnPosition(): void;	// recheckSpawnPosition(void): void	 /// ?recheckSpawnPosition@Player@@QEAAXXZ
    reloadHardcoded(_1: unknown, _2: object): void;	// reloadHardcoded(Actor::InitializationMethod,VariantParameterList const &): void	 /// ?reloadHardcoded@Player@@UEAAXW4InitializationMethod@Actor@@AEBVVariantParameterList@@@Z
    remove(): void;	// remove(void): void	 /// ?remove@Player@@UEAAXXZ
    resetPlayerLevel(): void;	// resetPlayerLevel(void): void	 /// ?resetPlayerLevel@Player@@QEAAXXZ
    resetUserPos(_1: boolean): void;	// resetUserPos(bool): void	 /// ?resetUserPos@Player@@UEAAX_N@Z
    respawn(): void;	// respawn(void): void	 /// ?respawn@Player@@UEAAXXZ
    sendEventPacket(_1: object): void;	// sendEventPacket(EventPacket &): void	 /// ?sendEventPacket@Player@@UEBAXAEAVEventPacket@@@Z
    setAgent(_1: object): void;	// setAgent(Agent *): void	 /// ?setAgent@Player@@QEAAXPEAVAgent@@@Z
    setArmor(_1: unknown, _2: object): void;	// setArmor(ArmorSlot,ItemStack const &): void	 /// ?setArmor@Player@@UEAAXW4ArmorSlot@@AEBVItemStack@@@Z
    setBedRespawnPosition(_1: object): void;	// setBedRespawnPosition(BlockPos const &): void	 /// ?setBedRespawnPosition@Player@@QEAAXAEBVBlockPos@@@Z
    setBlockMovementSlowdownMultiplier(_1: object, _2: object): void;	// setBlockMovementSlowdownMultiplier(BlockLegacy const &,Vec3 const &): void	 /// ?setBlockMovementSlowdownMultiplier@Player@@UEAAXAEBVBlockLegacy@@AEBVVec3@@@Z
    setCarriedItem(_1: object): void;	// setCarriedItem(ItemStack const &): void	 /// ?setCarriedItem@Player@@UEAAXAEBVItemStack@@@Z
    setCursorSelectedItemGroup(_1: object): void;	// setCursorSelectedItemGroup(ItemGroup const &): void	 /// ?setCursorSelectedItemGroup@Player@@QEAAXAEBVItemGroup@@@Z
    setFieldOfViewModifier(_1: number): void;	// setFieldOfViewModifier(float): void	 /// ?setFieldOfViewModifier@Player@@UEAAXM@Z
    setOffhandSlot(_1: object): void;	// setOffhandSlot(ItemStack const &): void	 /// ?setOffhandSlot@Player@@UEAAXAEBVItemStack@@@Z
    setPermissions(_1: unknown): void;	// setPermissions(CommandPermissionLevel): void	 /// ?setPermissions@Player@@UEAAXW4CommandPermissionLevel@@@Z
    setPlayerGameType(_1: unknown): void;	// setPlayerGameType(GameType): void	 /// ?setPlayerGameType@Player@@UEAAXW4GameType@@@Z
    setRespawnPositionCandidate(): void;	// setRespawnPositionCandidate(void): void	 /// ?setRespawnPositionCandidate@Player@@QEAAXXZ
    setSize(_1: number, _2: number): void;	// setSize(float,float): void	 /// ?setSize@Player@@UEAAXMM@Z
    setSleeping(_1: boolean): void;	// setSleeping(bool): void	 /// ?setSleeping@Player@@UEAAX_N@Z
    setSpeed(_1: number): void;	// setSpeed(float): void	 /// ?setSpeed@Player@@UEAAXM@Z
    setUsedPotion(_1: boolean): void;	// setUsedPotion(bool): void	 /// ?setUsedPotion@Player@@QEAAX_N@Z
    shouldDropDeathLoot(): boolean;	// shouldDropDeathLoot(void): bool	 /// ?shouldDropDeathLoot@Player@@UEBA_NXZ
    spawnExperienceOrb(_1: object, _2: number): void;	// spawnExperienceOrb(Vec3 const &,int): void	 /// ?spawnExperienceOrb@Player@@QEAAXAEBVVec3@@H@Z
    startCooldown(_1: object, _2: boolean): void;	// startCooldown(Item const *,bool): void	 /// ?startCooldown@Player@@UEAAXPEBVItem@@_N@Z
    startDestroying(): void;	// startDestroying(void): void	 /// ?startDestroying@Player@@UEAAXXZ
    startSleepInBed(_1: object): bigint;	// startSleepInBed(BlockPos const &): enum BedSleepingResult	 /// ?startSleepInBed@Player@@UEAA?AW4BedSleepingResult@@AEBVBlockPos@@@Z
    startSpinAttack(): void;	// startSpinAttack(void): void	 /// ?startSpinAttack@Player@@UEAAXXZ
    startSwimming(): void;	// startSwimming(void): void	 /// ?startSwimming@Player@@UEAAXXZ
    startUsingItem(_1: object, _2: number): void;	// startUsingItem(ItemStack const &,int): void	 /// ?startUsingItem@Player@@QEAAXAEBVItemStack@@H@Z
    stopDestroying(): void;	// stopDestroying(void): void	 /// ?stopDestroying@Player@@UEAAXXZ
    stopSleepInBed(_1: boolean, _2: boolean): void;	// stopSleepInBed(bool,bool): void	 /// ?stopSleepInBed@Player@@UEAAX_N0@Z
    stopSpinAttack(): void;	// stopSpinAttack(void): void	 /// ?stopSpinAttack@Player@@UEAAXXZ
    stopSwimming(): void;	// stopSwimming(void): void	 /// ?stopSwimming@Player@@UEAAXXZ
    suspendRegion(): void;	// suspendRegion(void): void	 /// ?suspendRegion@Player@@UEAAXXZ
    take(_1: object, _2: number, _3: number): boolean;	// take(Actor &,int,int): bool	 /// ?take@Player@@QEAA_NAEAVActor@@HH@Z
    teleportTo(_1: object, _2: boolean, _3: number, _4: number): void;	// teleportTo(Vec3 const &,bool,int,int): void	 /// ?teleportTo@Player@@UEAAXAEBVVec3@@_NHH@Z
    tickWorld(_1: object): void;	// tickWorld(Tick const &): void	 /// ?tickWorld@Player@@UEAAXAEBUTick@@@Z
    travel(_1: object, _2: number, _3: number, _4: number): void;	// travel(IMobMovementProxy &,float,float,float): void	 /// ?travel@Player@@UEBAXAEAUIMobMovementProxy@@MMM@Z
    travel(_1: number, _2: number, _3: number): void;	// travel(float,float,float): void	 /// ?travel@Player@@UEAAXMMM@Z
    tryCreateAddActorPacket(): bigint;	// tryCreateAddActorPacket(void): class std::unique_ptr<class AddActorBasePacket,struct std::default_delete<class AddActorBasePacket> >	 /// ?tryCreateAddActorPacket@Player@@UEAA?AV?$unique_ptr@VAddActorBasePacket@@U?$default_delete@VAddActorBasePacket@@@std@@@std@@XZ
    tryGetFromEntity(_1: object, _2: boolean): Player;	// tryGetFromEntity(EntityContext &,bool): class Player * __ptr64	 /// ?tryGetFromEntity@Player@@SAPEAV1@AEAVEntityContext@@_N@Z
    unRegisterTrackedBoss(_1: unknown): void;	// unRegisterTrackedBoss(ActorUniqueID): void	 /// ?unRegisterTrackedBoss@Player@@UEAAXUActorUniqueID@@@Z
    updateGliding(): void;	// updateGliding(void): void	 /// ?updateGliding@Player@@MEAAXXZ
    updateSpawnChunkView(): void;	// updateSpawnChunkView(void): void	 /// ?updateSpawnChunkView@Player@@QEAAXXZ
    useItem(_1: object, _2: unknown, _3: boolean): void;	// useItem(ItemStackBase &,ItemUseMethod,bool): void	 /// ?useItem@Player@@UEAAXAEAVItemStackBase@@W4ItemUseMethod@@_N@Z
    useSelectedItem(_1: unknown, _2: boolean): void;	// useSelectedItem(ItemUseMethod,bool): void	 /// ?useSelectedItem@Player@@QEAAXW4ItemUseMethod@@_N@Z
    vehicleTick(): void;	// vehicleTick(void): void	 /// ?vehicleTick@Player@@UEAAXXZ
    // Inherited from Mob
    _aiStep(_1: object): void;	// _aiStep(IMobMovementProxy &): void	 /// ?_aiStep@Mob@@SAXAEAUIMobMovementProxy@@@Z
    _doInitialMove(): void;	// _doInitialMove(void): void	 /// ?_doInitialMove@Mob@@MEAAXXZ
    _doSprintParticleEffect(): void;	// _doSprintParticleEffect(void): void	 /// ?_doSprintParticleEffect@Mob@@IEAAXXZ
    _getAdjustedAABBForSpawnCheck(_1: object, _2: object): bigint;	// _getAdjustedAABBForSpawnCheck(AABB const &,Vec3 const &): class AABB	 /// ?_getAdjustedAABBForSpawnCheck@Mob@@MEBA?AVAABB@@AEBV2@AEBVVec3@@@Z
    _initHardCodedComponents(): boolean;	// _initHardCodedComponents(void): bool	 /// ?_initHardCodedComponents@Mob@@AEAA_NXZ
    _initialize(_1: object): void;	// _initialize(EntityContext &): void	 /// ?_initialize@Mob@@AEAAXAEAVEntityContext@@@Z
    _jumpFromGround(_1: object): void;	// _jumpFromGround(IMobMovementProxy &): void	 /// ?_jumpFromGround@Mob@@KAXAEAUIMobMovementProxy@@@Z
    _playStepSound(_1: object, _2: object): void;	// _playStepSound(BlockPos const &,Block const &): void	 /// ?_playStepSound@Mob@@MEAAXAEBVBlockPos@@AEBVBlock@@@Z
    _removePassenger(_1: object, _2: boolean, _3: boolean, _4: boolean): void;	// _removePassenger(ActorUniqueID const &,bool,bool,bool): void	 /// ?_removePassenger@Mob@@MEAAXAEBUActorUniqueID@@_N11@Z
    _tryApplyingLevitation(_1: object, _2: object): boolean;	// _tryApplyingLevitation(IMobMovementProxy const &,Vec3 &): bool	 /// ?_tryApplyingLevitation@Mob@@CA_NAEBUIMobMovementProxy@@AEAVVec3@@@Z
    _updateMobTravel(_1: object): void;	// _updateMobTravel(IMobMovementProxy &): void	 /// ?_updateMobTravel@Mob@@SAXAEAUIMobMovementProxy@@@Z
    _updateSprintingState(): void;	// _updateSprintingState(void): void	 /// ?_updateSprintingState@Mob@@AEAAXXZ
    addPassenger(_1: object): void;	// addPassenger(Actor &): void	 /// ?addPassenger@Mob@@UEAAXAEAVActor@@@Z
    animateHurt(): void;	// animateHurt(void): void	 /// ?animateHurt@Mob@@UEAAXXZ
    applyFinalFriction(_1: number, _2: boolean): void;	// applyFinalFriction(float,bool): void	 /// ?applyFinalFriction@Mob@@UEAAXM_N@Z
    ascendBlockByJumping(): void;	// ascendBlockByJumping(void): void	 /// ?ascendBlockByJumping@Mob@@UEAAXXZ
    ascendLadder(): void;	// ascendLadder(void): void	 /// ?ascendLadder@Mob@@UEAAXXZ
    attackAnimation(_1: object, _2: number): void;	// attackAnimation(Actor *,float): void	 /// ?attackAnimation@Mob@@UEAAXPEAVActor@@M@Z
    baseTick(): void;	// baseTick(void): void	 /// ?baseTick@Mob@@UEAAXXZ
    blockedByShield(_1: object, _2: object): void;	// blockedByShield(ActorDamageSource const &,Actor &): void	 /// ?blockedByShield@Mob@@UEAAXAEBVActorDamageSource@@AEAVActor@@@Z
    calcMoveRelativeSpeed(_1: unknown): number;	// calcMoveRelativeSpeed(TravelType): float	 /// ?calcMoveRelativeSpeed@Mob@@QEAAMW4TravelType@@@Z
    calculateJumpImpulse(_1: object): number;	// calculateJumpImpulse(IMobMovementProxy const &): float	 /// ?calculateJumpImpulse@Mob@@SAMAEBUIMobMovementProxy@@@Z
    canExistWhenDisallowMob(): boolean;	// canExistWhenDisallowMob(void): bool	 /// ?canExistWhenDisallowMob@Mob@@UEBA_NXZ
    canPowerJump(): boolean;	// canPowerJump(void): bool	 /// ?canPowerJump@Mob@@UEBA_NXZ
    causeFallDamage(_1: number, _2: number, _3: unknown): void;	// causeFallDamage(float,float,ActorDamageSource): void	 /// ?causeFallDamage@Mob@@MEAAXMMVActorDamageSource@@@Z
    checkSpawnObstruction(): boolean;	// checkSpawnObstruction(void): bool	 /// ?checkSpawnObstruction@Mob@@UEBA_NXZ
    checkSpawnRules(_1: boolean): boolean;	// checkSpawnRules(bool): bool	 /// ?checkSpawnRules@Mob@@UEAA_N_N@Z
    checkTotemDeathProtection(_1: object): boolean;	// checkTotemDeathProtection(ActorDamageSource const &): bool	 /// ?checkTotemDeathProtection@Mob@@QEAA_NAEBVActorDamageSource@@@Z
    clearEquipment(): number;	// clearEquipment(void): int	 /// ?clearEquipment@Mob@@UEAAHXZ
    clearVanishEnchantedItemsOnDeath(): void;	// clearVanishEnchantedItemsOnDeath(void): void	 /// ?clearVanishEnchantedItemsOnDeath@Mob@@UEAAXXZ
    containerChanged(_1: number): void;	// containerChanged(int): void	 /// ?containerChanged@Mob@@UEAAXH@Z
    createAIGoals(): boolean;	// createAIGoals(void): bool	 /// ?createAIGoals@Mob@@UEAA_NXZ
    descendBlockByCrouching(): void;	// descendBlockByCrouching(void): void	 /// ?descendBlockByCrouching@Mob@@UEAAXXZ
    doFireHurt(_1: number): boolean;	// doFireHurt(int): bool	 /// ?doFireHurt@Mob@@UEAA_NH@Z
    doHurtTarget(_1: object, _2: object): boolean;	// doHurtTarget(Actor *,ActorDamageCause const &): bool	 /// ?doHurtTarget@Mob@@UEAA_NPEAVActor@@AEBW4ActorDamageCause@@@Z
    dropBags(): void;	// dropBags(void): void	 /// ?dropBags@Mob@@MEAAXXZ
    dropContainer(): void;	// dropContainer(void): void	 /// ?dropContainer@Mob@@UEAAXXZ
    frostWalk(): void;	// frostWalk(void): void	 /// ?frostWalk@Mob@@QEAAXXZ
    getAllArmorID(): bigint;	// getAllArmorID(void): class std::vector<int,class std::allocator<int> >	 /// ?getAllArmorID@Mob@@UEBA?AV?$vector@HV?$allocator@H@std@@@std@@XZ
    getArmorColorInSlot(_1: unknown, _2: number): number;	// getArmorColorInSlot(ArmorSlot,int): float	 /// ?getArmorColorInSlot@Mob@@UEBAMW4ArmorSlot@@H@Z
    getArmorCoverPercentage(): number;	// getArmorCoverPercentage(void): float	 /// ?getArmorCoverPercentage@Mob@@UEBAMXZ
    getArmorMaterialTextureTypeInSlot(_1: unknown): bigint;	// getArmorMaterialTextureTypeInSlot(ArmorSlot): enum ArmorTextureType	 /// ?getArmorMaterialTextureTypeInSlot@Mob@@UEBA?AW4ArmorTextureType@@W4ArmorSlot@@@Z
    getArmorMaterialTypeInSlot(_1: unknown): bigint;	// getArmorMaterialTypeInSlot(ArmorSlot): enum ArmorMaterialType	 /// ?getArmorMaterialTypeInSlot@Mob@@UEBA?AW4ArmorMaterialType@@W4ArmorSlot@@@Z
    getArmorTypeHash(): number;	// getArmorTypeHash(void): int	 /// ?getArmorTypeHash@Mob@@UEAAHXZ
    getArmorValue(): number;	// getArmorValue(void): int	 /// ?getArmorValue@Mob@@UEBAHXZ
    getAttackAnim(_1: number): number;	// getAttackAnim(float): float	 /// ?getAttackAnim@Mob@@UEAAMM@Z
    getBlockDamageCause(_1: object): bigint;	// getBlockDamageCause(Block const &): enum ActorDamageCause	 /// ?getBlockDamageCause@Mob@@UEBA?AW4ActorDamageCause@@AEBVBlock@@@Z
    getCaravanHead(): bigint;	// getCaravanHead(void): struct ActorUniqueID	 /// ?getCaravanHead@Mob@@UEBA?AUActorUniqueID@@XZ
    getCaravanSize(): number;	// getCaravanSize(void): int	 /// ?getCaravanSize@Mob@@QEBAHXZ
    getCurrentSwingDuration(): number;	// getCurrentSwingDuration(void): int	 /// ?getCurrentSwingDuration@Mob@@IEAAHXZ
    getDamageAfterArmorReduction(_1: object, _2: number): number;	// getDamageAfterArmorReduction(ActorDamageSource const &,float): float	 /// ?getDamageAfterArmorReduction@Mob@@UEBAMAEBVActorDamageSource@@M@Z
    getDamageAfterEnchantReduction(_1: object, _2: number): number;	// getDamageAfterEnchantReduction(ActorDamageSource const &,float): float	 /// ?getDamageAfterEnchantReduction@Mob@@UEBAMAEBVActorDamageSource@@M@Z
    getDamageAfterResistanceEffect(_1: object, _2: number): number;	// getDamageAfterResistanceEffect(ActorDamageSource const &,float): float	 /// ?getDamageAfterResistanceEffect@Mob@@UEBAMAEBVActorDamageSource@@M@Z
    getDeathSound(): bigint;	// getDeathSound(void): enum LevelSoundEvent	 /// ?getDeathSound@Mob@@UEAA?AW4LevelSoundEvent@@XZ
    getDeathTime(): number;	// getDeathTime(void): int	 /// ?getDeathTime@Mob@@UEBAHXZ
    getHurtSound(): bigint;	// getHurtSound(void): enum LevelSoundEvent	 /// ?getHurtSound@Mob@@UEAA?AW4LevelSoundEvent@@XZ
    getInterpolatedBodyRot(_1: number): number;	// getInterpolatedBodyRot(float): float	 /// ?getInterpolatedBodyRot@Mob@@UEBAMM@Z
    getInterpolatedBodyYaw(_1: number): number;	// getInterpolatedBodyYaw(float): float	 /// ?getInterpolatedBodyYaw@Mob@@UEBAMM@Z
    getInterpolatedHeadRot(_1: number): number;	// getInterpolatedHeadRot(float): float	 /// ?getInterpolatedHeadRot@Mob@@UEBAMM@Z
    getItemInHandIcon(_1: object, _2: number): bigint;	// getItemInHandIcon(ItemStack const &,int): struct TextureUVCoordinateSet const * __ptr64	 /// ?getItemInHandIcon@Mob@@UEAAPEBUTextureUVCoordinateSet@@AEBVItemStack@@H@Z
    getItemUseIntervalAxis(): number;	// getItemUseIntervalAxis(void): int	 /// ?getItemUseIntervalAxis@Mob@@UEBAHXZ
    getJumpEffectAmplifierValue(_1: object): number;	// getJumpEffectAmplifierValue(IMobMovementProxy const &): float	 /// ?getJumpEffectAmplifierValue@Mob@@SAMAEBUIMobMovementProxy@@@Z
    getJumpEffectAmplifierValue(): number;	// getJumpEffectAmplifierValue(void): float	 /// ?getJumpEffectAmplifierValue@Mob@@QEAAMXZ
    getJumpPower(): number;	// getJumpPower(void): float	 /// ?getJumpPower@Mob@@UEBAMXZ
    getJumpPrevention(_1: object): bigint;	// getJumpPrevention(IMobMovementProxy const &): struct JumpPreventionResult	 /// ?getJumpPrevention@Mob@@SA?AUJumpPreventionResult@@AEBUIMobMovementProxy@@@Z
    getJumpPrevention(): bigint;	// getJumpPrevention(void): struct JumpPreventionResult	 /// ?getJumpPrevention@Mob@@QEAA?AUJumpPreventionResult@@XZ
    getMaxHeadXRot(): number;	// getMaxHeadXRot(void): float	 /// ?getMaxHeadXRot@Mob@@UEAAMXZ
    getMeleeKnockbackBonus(): number;	// getMeleeKnockbackBonus(void): int	 /// ?getMeleeKnockbackBonus@Mob@@UEAAHXZ
    getMeleeWeaponDamageBonus(_1: object): number;	// getMeleeWeaponDamageBonus(Mob *): float	 /// ?getMeleeWeaponDamageBonus@Mob@@UEAAMPEAV1@@Z
    getTimeAlongSwing(): number;	// getTimeAlongSwing(void): int	 /// ?getTimeAlongSwing@Mob@@UEBAHXZ
    getToughnessValue(): number;	// getToughnessValue(void): int	 /// ?getToughnessValue@Mob@@UEBAHXZ
    getTravelType(_1: object): bigint;	// getTravelType(IMobMovementProxy &): enum TravelType	 /// ?getTravelType@Mob@@SA?AW4TravelType@@AEAUIMobMovementProxy@@@Z
    getTravelType(): bigint;	// getTravelType(void): enum TravelType	 /// ?getTravelType@Mob@@QEAA?AW4TravelType@@XZ
    getYHeadRot(): number;	// getYHeadRot(void): float	 /// ?getYHeadRot@Mob@@UEBAMXZ
    getYawSpeedInDegreesPerSecond(): number;	// getYawSpeedInDegreesPerSecond(void): float	 /// ?getYawSpeedInDegreesPerSecond@Mob@@UEBAMXZ
    hasBoundOrigin(): boolean;	// hasBoundOrigin(void): bool	 /// ?hasBoundOrigin@Mob@@QEBA_NXZ
    hasCaravanTail(): boolean;	// hasCaravanTail(void): bool	 /// ?hasCaravanTail@Mob@@UEBA_NXZ
    hasComponent(_1: object): boolean;	// hasComponent(HashedString const &): bool	 /// ?hasComponent@Mob@@UEBA_NAEBVHashedString@@@Z
    hurtArmor(_1: object, _2: number): void;	// hurtArmor(ActorDamageSource const &,int): void	 /// ?hurtArmor@Mob@@QEAAXAEBVActorDamageSource@@H@Z
    hurtEffects(_1: object, _2: number, _3: boolean, _4: boolean): void;	// hurtEffects(ActorDamageSource const &,float,bool,bool): void	 /// ?hurtEffects@Mob@@UEAAXAEBVActorDamageSource@@M_N1@Z
    inCaravan(): boolean;	// inCaravan(void): bool	 /// ?inCaravan@Mob@@UEBA_NXZ
    isAbleToMove(): boolean;	// isAbleToMove(void): bool	 /// ?isAbleToMove@Mob@@QEBA_NXZ
    isAlive(): boolean;	// isAlive(void): bool	 /// ?isAlive@Mob@@UEBA_NXZ
    isFrostWalking(): boolean;	// isFrostWalking(void): bool	 /// ?isFrostWalking@Mob@@QEBA_NXZ
    isImmobile(_1: object): boolean;	// isImmobile(IActorMovementProxy const &): bool	 /// ?isImmobile@Mob@@SA_NAEBUIActorMovementProxy@@@Z
    isLookingAtAnEntity(): boolean;	// isLookingAtAnEntity(void): bool	 /// ?isLookingAtAnEntity@Mob@@UEAA_NXZ
    isPickable(): boolean;	// isPickable(void): bool	 /// ?isPickable@Mob@@UEAA_NXZ
    isRolling(): boolean;	// isRolling(void): bool	 /// ?isRolling@Mob@@QEBA_NXZ
    isSprinting(): boolean;	// isSprinting(void): bool	 /// ?isSprinting@Mob@@QEBA_NXZ
    isSurfaceMob(): boolean;	// isSurfaceMob(void): bool	 /// ?isSurfaceMob@Mob@@UEBA_NXZ
    joinCaravan(_1: object): void;	// joinCaravan(Mob *): void	 /// ?joinCaravan@Mob@@UEAAXPEAV1@@Z
    kill(): void;	// kill(void): void	 /// ?kill@Mob@@UEAAXXZ
    knockback(_1: object, _2: number, _3: number, _4: number, _5: number, _6: number, _7: number): void;	// knockback(Actor *,int,float,float,float,float,float): void	 /// ?knockback@Mob@@UEAAXPEAVActor@@HMMMMM@Z
    leaveCaravan(): void;	// leaveCaravan(void): void	 /// ?leaveCaravan@Mob@@UEAAXXZ
    lookAt(_1: object, _2: number, _3: number): void;	// lookAt(Actor *,float,float): void	 /// ?lookAt@Mob@@UEAAXPEAVActor@@MM@Z
    newServerAiStep(): void;	// newServerAiStep(void): void	 /// ?newServerAiStep@Mob@@MEAAXXZ
    onPlayerJump(_1: number): void;	// onPlayerJump(int): void	 /// ?onPlayerJump@Mob@@QEAAXH@Z
    outOfWorld(): void;	// outOfWorld(void): void	 /// ?outOfWorld@Mob@@MEAAXXZ
    processSoulSpeed(): void;	// processSoulSpeed(void): void	 /// ?processSoulSpeed@Mob@@IEAAXXZ
    pushActors(): void;	// pushActors(void): void	 /// ?pushActors@Mob@@UEAAXXZ
    reloadHardcodedClient(_1: unknown, _2: object): void;	// reloadHardcodedClient(Actor::InitializationMethod,VariantParameterList const &): void	 /// ?reloadHardcodedClient@Mob@@UEAAXW4InitializationMethod@Actor@@AEBVVariantParameterList@@@Z
    resetAttributes(): void;	// resetAttributes(void): void	 /// ?resetAttributes@Mob@@QEAAXXZ
    resetNoActionTime(): void;	// resetNoActionTime(void): void	 /// ?resetNoActionTime@Mob@@QEAAXXZ
    sendInventory(_1: boolean): void;	// sendInventory(bool): void	 /// ?sendInventory@Mob@@UEAAX_N@Z
    setDamagedArmor(_1: unknown, _2: object): void;	// setDamagedArmor(ArmorSlot,ItemStack const &): void	 /// ?setDamagedArmor@Mob@@UEAAXW4ArmorSlot@@AEBVItemStack@@@Z
    setEquippedSlot(_1: unknown, _2: object): void;	// setEquippedSlot(EquipmentSlot,ItemStack const &): void	 /// ?setEquippedSlot@Mob@@UEAAXW4EquipmentSlot@@AEBVItemStack@@@Z
    setItemSlot(_1: unknown, _2: object): boolean;	// setItemSlot(EquipmentSlot,ItemStack const &): bool	 /// ?setItemSlot@Mob@@UEAA_NW4EquipmentSlot@@AEBVItemStack@@@Z
    setSprinting(_1: boolean): void;	// setSprinting(bool): void	 /// ?setSprinting@Mob@@UEAAX_N@Z
    setTarget(_1: object): void;	// setTarget(Actor *): void	 /// ?setTarget@Mob@@UEAAXPEAVActor@@@Z
    setTransitioningSitting(_1: boolean): void;	// setTransitioningSitting(bool): void	 /// ?setTransitioningSitting@Mob@@UEAAX_N@Z
    setYHeadRot(_1: number): void;	// setYHeadRot(float): void	 /// ?setYHeadRot@Mob@@UEAAXM@Z
    startRiding(_1: object): boolean;	// startRiding(Actor &): bool	 /// ?startRiding@Mob@@UEAA_NAEAVActor@@@Z
    stopRiding(_1: boolean, _2: boolean, _3: boolean): void;	// stopRiding(bool,bool,bool): void	 /// ?stopRiding@Mob@@UEAAX_N00@Z
    swing(): void;	// swing(void): void	 /// ?swing@Mob@@UEAAXXZ
    tickDeath(): void;	// tickDeath(void): void	 /// ?tickDeath@Mob@@MEAAXXZ
    updateAi(): void;	// updateAi(void): void	 /// ?updateAi@Mob@@MEAAXXZ
    updateAttackAnim(): void;	// updateAttackAnim(void): void	 /// ?updateAttackAnim@Mob@@IEAAXXZ
    updateEntitySpecificMolangVariables(_1: object): void;	// updateEntitySpecificMolangVariables(RenderParams &): void	 /// ?updateEntitySpecificMolangVariables@Mob@@MEAAXAEAVRenderParams@@@Z
    updateEquipment(): void;	// updateEquipment(void): void	 /// ?updateEquipment@Mob@@UEAAXXZ
    // Inherited from Actor
    _containsSneakCollisionShapes(_1: object, _2: object): boolean;	// _containsSneakCollisionShapes(IActorMovementProxy &,AABB const &): bool	 /// ?_containsSneakCollisionShapes@Actor@@CA_NAEAUIActorMovementProxy@@AEBVAABB@@@Z
    _drop(_1: object, _2: boolean): unknown;	// _drop(ItemStack const &,bool): class ItemActor const * __ptr64	 /// ?_drop@Actor@@IEAAPEBVItemActor@@AEBVItemStack@@_N@Z
    _initAliasProperties(): void;	// _initAliasProperties(void): void	 /// ?_initAliasProperties@Actor@@AEAAXXZ
    _isHeadInWater(): boolean;	// _isHeadInWater(void): bool	 /// ?_isHeadInWater@Actor@@IEBA_NXZ
    _isItemStackNetManagerEnabled(): boolean;	// _isItemStackNetManagerEnabled(void): bool	 /// ?_isItemStackNetManagerEnabled@Actor@@AEBA_NXZ
    _move(_1: object, _2: object): void;	// _move(IActorMovementProxy &,Vec3 const &): void	 /// ?_move@Actor@@SAXAEAUIActorMovementProxy@@AEBVVec3@@@Z
    _moveHitboxTo(_1: object): void;	// _moveHitboxTo(Vec3 const &): void	 /// ?_moveHitboxTo@Actor@@AEAAXAEBVVec3@@@Z
    _playFlySound(_1: object, _2: object): void;	// _playFlySound(BlockPos const &,Block const &): void	 /// ?_playFlySound@Actor@@MEAAXAEBVBlockPos@@AEBVBlock@@@Z
    _playMovementSound(_1: boolean): void;	// _playMovementSound(bool): void	 /// ?_playMovementSound@Actor@@IEAAX_N@Z
    _randomHeartPos(): bigint;	// _randomHeartPos(void): class Vec3	 /// ?_randomHeartPos@Actor@@QEAA?AVVec3@@XZ
    _refreshAABB(): void;	// _refreshAABB(void): void	 /// ?_refreshAABB@Actor@@IEAAXXZ
    _sendDirtyActorData(): void;	// _sendDirtyActorData(void): void	 /// ?_sendDirtyActorData@Actor@@QEAAXXZ
    _sendLinkPacket(_1: object): void;	// _sendLinkPacket(ActorLink const &): void	 /// ?_sendLinkPacket@Actor@@AEBAXAEBUActorLink@@@Z
    _serverInitItemStackIds(): void;	// _serverInitItemStackIds(void): void	 /// ?_serverInitItemStackIds@Actor@@MEAAXXZ
    _setHeightOffset(_1: number): void;	// _setHeightOffset(float): void	 /// ?_setHeightOffset@Actor@@IEAAXM@Z
    _setPos(_1: object): void;	// _setPos(Vec3 const &): void	 /// ?_setPos@Actor@@IEAAXAEBVVec3@@@Z
    _setupServerAnimationComponent(): void;	// _setupServerAnimationComponent(void): void	 /// ?_setupServerAnimationComponent@Actor@@AEAAXXZ
    _spawnPukeParticles(): void;	// _spawnPukeParticles(void): void	 /// ?_spawnPukeParticles@Actor@@AEAAXXZ
    _updateComposition(_1: boolean): void;	// _updateComposition(bool): void	 /// ?_updateComposition@Actor@@AEAAX_N@Z
    addEffect(_1: object): void;	// addEffect(MobEffectInstance const &): void	 /// ?addEffect@Actor@@QEAAXAEBVMobEffectInstance@@@Z
    applySnapshot(_1: object, _2: object): void;	// applySnapshot(PlayerSnapshotComponent const &,PlayerSnapshotComponent const &): void	 /// ?applySnapshot@Actor@@UEAAXAEBUPlayerSnapshotComponent@@0@Z
    buildForward(): bigint;	// buildForward(void): class Vec3	 /// ?buildForward@Actor@@QEBA?AVVec3@@XZ
    burn(_1: number, _2: boolean): void;	// burn(int,bool): void	 /// ?burn@Actor@@QEAAXH_N@Z
    calcCenterPos(): bigint;	// calcCenterPos(void): class Vec3	 /// ?calcCenterPos@Actor@@QEBA?AVVec3@@XZ
    canAttack(_1: object, _2: boolean): boolean;	// canAttack(Actor *,bool): bool	 /// ?canAttack@Actor@@UEBA_NPEAV1@_N@Z
    canBeAffected(_1: object): boolean;	// canBeAffected(MobEffectInstance const &): bool	 /// ?canBeAffected@Actor@@UEBA_NAEBVMobEffectInstance@@@Z
    canBeAffected(_1: number): boolean;	// canBeAffected(int): bool	 /// ?canBeAffected@Actor@@UEBA_NH@Z
    canBeAffectedByArrow(_1: object): boolean;	// canBeAffectedByArrow(MobEffectInstance const &): bool	 /// ?canBeAffectedByArrow@Actor@@UEBA_NAEBVMobEffectInstance@@@Z
    canBeginOrContinueClimbingLadder(): boolean;	// canBeginOrContinueClimbingLadder(void): bool	 /// ?canBeginOrContinueClimbingLadder@Actor@@QEBA_NXZ
    canCurrentlySwim(): boolean;	// canCurrentlySwim(void): bool	 /// ?canCurrentlySwim@Actor@@QEBA_NXZ
    canDisableShield(): boolean;	// canDisableShield(void): bool	 /// ?canDisableShield@Actor@@UEAA_NXZ
    canFly(): boolean;	// canFly(void): bool	 /// ?canFly@Actor@@QEBA_NXZ
    canSee(_1: object): boolean;	// canSee(Actor const &): bool	 /// ?canSee@Actor@@UEBA_NAEBV1@@Z
    canSee(_1: object): boolean;	// canSee(Vec3 const &): bool	 /// ?canSee@Actor@@UEBA_NAEBVVec3@@@Z
    canShowNameTag(): boolean;	// canShowNameTag(void): bool	 /// ?canShowNameTag@Actor@@UEBA_NXZ
    celebrateHunt(_1: number, _2: boolean): void;	// celebrateHunt(int,bool): void	 /// ?celebrateHunt@Actor@@QEAAXH_N@Z
    checkEntityOnewayCollision(_1: object, _2: object): void;	// checkEntityOnewayCollision(BlockSource &,BlockPos const &): void	 /// ?checkEntityOnewayCollision@Actor@@SAXAEAVBlockSource@@AEBVBlockPos@@@Z
    checkFallDamage(_1: number, _2: boolean): void;	// checkFallDamage(float,bool): void	 /// ?checkFallDamage@Actor@@UEAAXM_N@Z
    checkInsideBlocks(_1: number): void;	// checkInsideBlocks(float): void	 /// ?checkInsideBlocks@Actor@@MEAAXM@Z
    chorusFruitTeleport(_1: object): void;	// chorusFruitTeleport(Vec3 const &): void	 /// ?chorusFruitTeleport@Actor@@UEAAXAEBVVec3@@@Z
    closerThan(_1: object, _2: number): boolean;	// closerThan(Actor const &,float): bool	 /// ?closerThan@Actor@@QEBA_NAEBV1@M@Z
    consumeItem(_1: object, _2: number): void;	// consumeItem(ItemActor &,int): void	 /// ?consumeItem@Actor@@QEAAXAEAVItemActor@@H@Z
    damageSensorComponentHurt(_1: object, _2: object, _3: boolean): boolean;	// damageSensorComponentHurt(float &,ActorDamageSource const &,bool): bool	 /// ?damageSensorComponentHurt@Actor@@QEAA_NAEAMAEBVActorDamageSource@@_N@Z
    despawn(): void;	// despawn(void): void	 /// ?despawn@Actor@@UEAAXXZ
    distanceSqrToBlockPosCenter(_1: object): number;	// distanceSqrToBlockPosCenter(BlockPos const &): float	 /// ?distanceSqrToBlockPosCenter@Actor@@QEBAMAEBVBlockPos@@@Z
    distanceTo(_1: object): number;	// distanceTo(Actor const &): float	 /// ?distanceTo@Actor@@QEBAMAEBV1@@Z
    distanceTo(_1: object): number;	// distanceTo(Vec3 const &): float	 /// ?distanceTo@Actor@@QEBAMAEBVVec3@@@Z
    distanceToSqr(_1: object): number;	// distanceToSqr(Actor const &): float	 /// ?distanceToSqr@Actor@@QEBAMAEBV1@@Z
    distanceToSqr(_1: object): number;	// distanceToSqr(Vec3 const &): float	 /// ?distanceToSqr@Actor@@QEBAMAEBVVec3@@@Z
    doWaterSplashEffect(): void;	// doWaterSplashEffect(void): void	 /// ?doWaterSplashEffect@Actor@@MEAAXXZ
    dropLeash(_1: boolean, _2: boolean): void;	// dropLeash(bool,bool): void	 /// ?dropLeash@Actor@@QEAAX_N0@Z
    dropTowards(_1: object, _2: unknown): void;	// dropTowards(ItemStack const &,Vec3): void	 /// ?dropTowards@Actor@@QEAAXAEBVItemStack@@VVec3@@@Z
    extractSnapshot(_1: object): void;	// extractSnapshot(PlayerSnapshotComponent &): void	 /// ?extractSnapshot@Actor@@UEBAXAEAUPlayerSnapshotComponent@@@Z
    fetchFishingHook(): unknown;	// fetchFishingHook(void): class FishingHook * __ptr64	 /// ?fetchFishingHook@Actor@@QEAAPEAVFishingHook@@XZ
    fetchNearbyActorsSorted(_1: object, _2: unknown): bigint;	// fetchNearbyActorsSorted(Vec3 const &,ActorType): class std::vector<struct DistanceSortedActor,class std::allocator<struct DistanceSortedActor> >	 /// ?fetchNearbyActorsSorted@Actor@@QEAA?AV?$vector@UDistanceSortedActor@@V?$allocator@UDistanceSortedActor@@@std@@@std@@AEBVVec3@@W4ActorType@@@Z
    fetchNearbyAttackableActorsSorted(_1: object, _2: unknown): bigint;	// fetchNearbyAttackableActorsSorted(Vec3 const &,ActorType): class std::vector<struct DistanceSortedActor,class std::allocator<struct DistanceSortedActor> >	 /// ?fetchNearbyAttackableActorsSorted@Actor@@QEAA?AV?$vector@UDistanceSortedActor@@V?$allocator@UDistanceSortedActor@@@std@@@std@@AEBVVec3@@W4ActorType@@@Z
    filterFormattedNameTag(_1: object): void;	// filterFormattedNameTag(UIProfanityContext const &): void	 /// ?filterFormattedNameTag@Actor@@UEAAXAEBVUIProfanityContext@@@Z
    flagPassengerToRemove(_1: object): void;	// flagPassengerToRemove(Actor &): void	 /// ?flagPassengerToRemove@Actor@@UEAAXAEAV1@@Z
    getAABBDim(): unknown;	// getAABBDim(void): class Vec2 const & __ptr64	 /// ?getAABBDim@Actor@@QEBAAEBVVec2@@XZ
    getActiveEffectCount(): number;	// getActiveEffectCount(void): int	 /// ?getActiveEffectCount@Actor@@QEBAHXZ
    getActorIdentifier(): bigint;	// getActorIdentifier(void): struct ActorDefinitionIdentifier const & __ptr64	 /// ?getActorIdentifier@Actor@@QEBAAEBUActorDefinitionIdentifier@@XZ
    getAllArmor(): bigint;	// getAllArmor(void): class std::vector<class ItemStack const * __ptr64,class std::allocator<class ItemStack const * __ptr64> >	 /// ?getAllArmor@Actor@@UEBA?AV?$vector@PEBVItemStack@@V?$allocator@PEBVItemStack@@@std@@@std@@XZ
    getAmbientSound(): bigint;	// getAmbientSound(void): enum LevelSoundEvent	 /// ?getAmbientSound@Actor@@UEBA?AW4LevelSoundEvent@@XZ
    getArmor(_1: unknown): ItemStack;	// getArmor(ArmorSlot): class ItemStack const & __ptr64	 /// ?getArmor@Actor@@UEBAAEBVItemStack@@W4ArmorSlot@@@Z
    getArmorContainer(): SimpleContainer;	// getArmorContainer(void): class SimpleContainer const & __ptr64	 /// ?getArmorContainer@Actor@@QEBAAEBVSimpleContainer@@XZ
    getAttribute(_1: object): unknown;	// getAttribute(Attribute const &): class AttributeInstance const & __ptr64	 /// ?getAttribute@Actor@@UEBAAEBVAttributeInstance@@AEBVAttribute@@@Z
    getBlockPosCurrentlyStandingOn(_1: object): bigint;	// getBlockPosCurrentlyStandingOn(Actor *): class BlockPos	 /// ?getBlockPosCurrentlyStandingOn@Actor@@QEBA?AVBlockPos@@PEAV1@@Z
    getBlockPosCurrentlyStandingOn(_1: object, _2: object): bigint;	// getBlockPosCurrentlyStandingOn(IActorMovementProxy const &,IActorMovementProxy *): class BlockPos	 /// ?getBlockPosCurrentlyStandingOn@Actor@@SA?AVBlockPos@@AEBUIActorMovementProxy@@PEAU3@@Z
    getBlockWhenClimbing(_1: object): unknown;	// getBlockWhenClimbing(IActorMovementProxy const &): class Block const & __ptr64	 /// ?getBlockWhenClimbing@Actor@@KAAEBVBlock@@AEBUIActorMovementProxy@@@Z
    getBrightness(_1: number): number;	// getBrightness(float): float	 /// ?getBrightness@Actor@@UEBAMM@Z
    getCarriedItem(): ItemStack;	// getCarriedItem(void): class ItemStack const & __ptr64	 /// ?getCarriedItem@Actor@@UEBAAEBVItemStack@@XZ
    getChestSlots(): number;	// getChestSlots(void): int	 /// ?getChestSlots@Actor@@UEBAHXZ
    getColor(): bigint;	// getColor(void): enum PaletteColor	 /// ?getColor@Actor@@QEBA?AW4PaletteColor@@XZ
    getDamageNearbyMobs(): boolean;	// getDamageNearbyMobs(void): bool	 /// ?getDamageNearbyMobs@Actor@@QEBA_NXZ
    getDimensionConst(): Dimension;	// getDimensionConst(void): class Dimension const & __ptr64	 /// ?getDimensionConst@Actor@@QEBAAEBVDimension@@XZ
    getDimensionId(): bigint;	// getDimensionId(void): class AutomaticID<class Dimension,int>	 /// ?getDimensionId@Actor@@UEBA?AV?$AutomaticID@VDimension@@H@@XZ
    getEconomyTradeableComponent(): unknown;	// getEconomyTradeableComponent(void): class EconomyTradeableComponent * __ptr64	 /// ?getEconomyTradeableComponent@Actor@@QEBAPEAVEconomyTradeableComponent@@XZ
    getEffect(_1: object): unknown;	// getEffect(MobEffect const &): class MobEffectInstance const * __ptr64	 /// ?getEffect@Actor@@QEBAPEBVMobEffectInstance@@AEBVMobEffect@@@Z
    getEntityData(): SynchedActorData;	// getEntityData(void): class SynchedActorData const & __ptr64	 /// ?getEntityData@Actor@@QEBAAEBVSynchedActorData@@XZ
    getEquipSlots(): number;	// getEquipSlots(void): int	 /// ?getEquipSlots@Actor@@UEBAHXZ
    getEquipmentCount(): number;	// getEquipmentCount(void): int	 /// ?getEquipmentCount@Actor@@UEBAHXZ
    getEquippedSlot(_1: unknown): ItemStack;	// getEquippedSlot(EquipmentSlot): class ItemStack const & __ptr64	 /// ?getEquippedSlot@Actor@@UEBAAEBVItemStack@@W4EquipmentSlot@@@Z
    getFiringPos(): bigint;	// getFiringPos(void): class Vec3	 /// ?getFiringPos@Actor@@UEBA?AVVec3@@XZ
    getFirstAvailableSeatPos(_1: object, _2: object): boolean;	// getFirstAvailableSeatPos(Actor &,Vec3 &): bool	 /// ?getFirstAvailableSeatPos@Actor@@QEBA_NAEAV1@AEAVVec3@@@Z
    getFirstPassenger(): Actor;	// getFirstPassenger(void): class Actor * __ptr64	 /// ?getFirstPassenger@Actor@@QEBAPEAV1@XZ
    getHeadLookVector(_1: number): bigint;	// getHeadLookVector(float): class Vec3	 /// ?getHeadLookVector@Actor@@UEBA?AVVec3@@M@Z
    getHealth(): number;	// getHealth(void): int	 /// ?getHealth@Actor@@QEBAHXZ
    getInteraction(_1: object, _2: object, _3: object): boolean;	// getInteraction(Player &,ActorInteraction &,Vec3 const &): bool	 /// ?getInteraction@Actor@@UEAA_NAEAVPlayer@@AEAVActorInteraction@@AEBVVec3@@@Z
    getInterpolatedPosition(_1: number): bigint;	// getInterpolatedPosition(float): class Vec3	 /// ?getInterpolatedPosition@Actor@@QEBA?AVVec3@@M@Z
    getInterpolatedRidingPosition(_1: number): bigint;	// getInterpolatedRidingPosition(float): class Vec3	 /// ?getInterpolatedRidingPosition@Actor@@UEBA?AVVec3@@M@Z
    getInterpolatedRotation(_1: number): bigint;	// getInterpolatedRotation(float): class Vec2	 /// ?getInterpolatedRotation@Actor@@QEBA?AVVec2@@M@Z
    getInterpolatedWalkAnimSpeed(_1: number): number;	// getInterpolatedWalkAnimSpeed(float): float	 /// ?getInterpolatedWalkAnimSpeed@Actor@@UEBAMM@Z
    getInventorySize(): number;	// getInventorySize(void): int	 /// ?getInventorySize@Actor@@UEBAHXZ
    getLastHurtByMob(): Mob;	// getLastHurtByMob(void): class Mob * __ptr64	 /// ?getLastHurtByMob@Actor@@UEAAPEAVMob@@XZ
    getLastHurtByPlayer(): Player;	// getLastHurtByPlayer(void): class Player * __ptr64	 /// ?getLastHurtByPlayer@Actor@@UEAAPEAVPlayer@@XZ
    getLastHurtMob(): Mob;	// getLastHurtMob(void): class Mob * __ptr64	 /// ?getLastHurtMob@Actor@@UEAAPEAVMob@@XZ
    getLastHurtMobTimestamp(): number;	// getLastHurtMobTimestamp(void): int	 /// ?getLastHurtMobTimestamp@Actor@@QEAAHXZ
    getLastHurtTimestamp(): bigint;	// getLastHurtTimestamp(void): unsigned __int64	 /// ?getLastHurtTimestamp@Actor@@QEBA_KXZ
    getLevel(): Level;	// getLevel(void): class Level const & __ptr64	 /// ?getLevel@Actor@@QEBAAEBVLevel@@XZ
    getLinks(): bigint;	// getLinks(void): class std::vector<struct ActorLink,class std::allocator<struct ActorLink> >	 /// ?getLinks@Actor@@QEBA?AV?$vector@UActorLink@@V?$allocator@UActorLink@@@std@@@std@@XZ
    getLiquidAABB(_1: unknown): bigint;	// getLiquidAABB(MaterialType): class AABB	 /// ?getLiquidAABB@Actor@@UEBA?AVAABB@@W4MaterialType@@@Z
    getLiquidFlowStrength(_1: unknown): number;	// getLiquidFlowStrength(MaterialType): float	 /// ?getLiquidFlowStrength@Actor@@SAMW4MaterialType@@@Z
    getLootTable(): unknown;	// getLootTable(void): class LootTable * __ptr64	 /// ?getLootTable@Actor@@UEAAPEAVLootTable@@XZ
    getMapDecorationRotation(): number;	// getMapDecorationRotation(void): float	 /// ?getMapDecorationRotation@Actor@@UEBAMXZ
    getMaxHealth(): number;	// getMaxHealth(void): int	 /// ?getMaxHealth@Actor@@QEBAHXZ
    getMovementProxy(): bigint;	// getMovementProxy(void): class gsl::not_null<class std::shared_ptr<struct IActorMovementProxy const> >	 /// ?getMovementProxy@Actor@@QEBA?AV?$not_null@V?$shared_ptr@$$CBUIActorMovementProxy@@@std@@@gsl@@XZ
    getMutableAttribute(_1: object): unknown;	// getMutableAttribute(Attribute const &): class AttributeInstance * __ptr64	 /// ?getMutableAttribute@Actor@@UEAAPEAVAttributeInstance@@AEBVAttribute@@@Z
    getNameTag(): unknown;	// getNameTag(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64	 /// ?getNameTag@Actor@@UEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
    getNameTagAsHash(): bigint;	// getNameTagAsHash(void): unsigned __int64	 /// ?getNameTagAsHash@Actor@@UEBA_KXZ
    getNextStep(_1: number): number;	// getNextStep(float): float	 /// ?getNextStep@Actor@@UEAAMM@Z
    getOffhandSlot(): ItemStack;	// getOffhandSlot(void): class ItemStack const & __ptr64	 /// ?getOffhandSlot@Actor@@QEBAAEBVItemStack@@XZ
    getOnDeathExperience(): number;	// getOnDeathExperience(void): int	 /// ?getOnDeathExperience@Actor@@QEAAHXZ
    getOwner(): Mob;	// getOwner(void): class Mob * __ptr64	 /// ?getOwner@Actor@@QEBAPEAVMob@@XZ
    getOwnerEntityType(): bigint;	// getOwnerEntityType(void): enum ActorType	 /// ?getOwnerEntityType@Actor@@UEAA?AW4ActorType@@XZ
    getOwnerId(): bigint;	// getOwnerId(void): struct ActorUniqueID const	 /// ?getOwnerId@Actor@@QEBA?BUActorUniqueID@@XZ
    getPassengerIndex(_1: object): number;	// getPassengerIndex(Actor const &): int	 /// ?getPassengerIndex@Actor@@QEBAHAEBV1@@Z
    getPassengerYRotation(_1: object): number;	// getPassengerYRotation(Actor const &): float	 /// ?getPassengerYRotation@Actor@@UEBAMAEBV1@@Z
    getPersistingTradeOffers(): bigint;	// getPersistingTradeOffers(void): class std::unique_ptr<class CompoundTag,struct std::default_delete<class CompoundTag> >	 /// ?getPersistingTradeOffers@Actor@@QEAA?AV?$unique_ptr@VCompoundTag@@U?$default_delete@VCompoundTag@@@std@@@std@@XZ
    getPickRadius(): number;	// getPickRadius(void): float	 /// ?getPickRadius@Actor@@UEAAMXZ
    getPlayerOwner(): Player;	// getPlayerOwner(void): class Player * __ptr64	 /// ?getPlayerOwner@Actor@@QEBAPEAVPlayer@@XZ
    getPortalCooldown(): number;	// getPortalCooldown(void): int	 /// ?getPortalCooldown@Actor@@UEBAHXZ
    getPosDelta(): unknown;	// getPosDelta(void): class Vec3 const & __ptr64	 /// ?getPosDelta@Actor@@QEBAAEBVVec3@@XZ
    getPosExtrapolated(_1: number): unknown;	// getPosExtrapolated(float): class Vec3 const	 /// ?getPosExtrapolated@Actor@@UEBA?BVVec3@@M@Z
    getPosPrev(): unknown;	// getPosPrev(void): class Vec3 const & __ptr64	 /// ?getPosPrev@Actor@@UEBAAEBVVec3@@XZ
    getPosition(): unknown;	// getPosition(void): class Vec3 const & __ptr64	 /// ?getPosition@Actor@@UEBAAEBVVec3@@XZ
    getPredictedMovementValues(): bigint;	// getPredictedMovementValues(void): struct PredictedMovementValues const & __ptr64	 /// ?getPredictedMovementValues@Actor@@UEBAAEBUPredictedMovementValues@@XZ
    getRandom(): Random;	// getRandom(void): class Random & __ptr64	 /// ?getRandom@Actor@@QEBAAEAVRandom@@XZ
    getRegionConst(): BlockSource;	// getRegionConst(void): class BlockSource const & __ptr64	 /// ?getRegionConst@Actor@@QEBAAEBVBlockSource@@XZ
    getRotation(): bigint;	// getRotation(void): class Vec2	 /// ?getRotation@Actor@@QEBA?AVVec2@@XZ
    getRuntimeID(): bigint;	// getRuntimeID(void): class ActorRuntimeID	 /// ?getRuntimeID@Actor@@QEBA?AVActorRuntimeID@@XZ
    getScoreTag(): unknown;	// getScoreTag(void): class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const & __ptr64	 /// ?getScoreTag@Actor@@UEBAAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
    getShadowHeightOffs(): number;	// getShadowHeightOffs(void): float	 /// ?getShadowHeightOffs@Actor@@UEAAMXZ
    getShadowRadius(): number;	// getShadowRadius(void): float	 /// ?getShadowRadius@Actor@@UEBAMXZ
    getSourceUniqueID(): bigint;	// getSourceUniqueID(void): struct ActorUniqueID	 /// ?getSourceUniqueID@Actor@@UEBA?AUActorUniqueID@@XZ
    getSpeedInMetersPerSecond(): number;	// getSpeedInMetersPerSecond(void): float	 /// ?getSpeedInMetersPerSecond@Actor@@QEBAMXZ
    getStatusFlag(_1: unknown): boolean;	// getStatusFlag(ActorFlags): bool	 /// ?getStatusFlag@Actor@@QEBA_NW4ActorFlags@@@Z
    getStructuralIntegrity(): number;	// getStructuralIntegrity(void): int	 /// ?getStructuralIntegrity@Actor@@QEBAHXZ
    getTags(): unknown;	// getTags(void): class gsl::span<class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> >,-1> const	 /// ?getTags@Actor@@QEBA?BV?$span@V?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@$0?0@gsl@@XZ
    getTarget(): Actor;	// getTarget(void): class Actor * __ptr64	 /// ?getTarget@Actor@@QEBAPEAV1@XZ
    getTradeOffers(): unknown;	// getTradeOffers(void): class MerchantRecipeList * __ptr64	 /// ?getTradeOffers@Actor@@QEAAPEAVMerchantRecipeList@@XZ
    getTradingPlayer(): Player;	// getTradingPlayer(void): class Player * __ptr64	 /// ?getTradingPlayer@Actor@@QEBAPEAVPlayer@@XZ
    getUniqueID(): bigint;	// getUniqueID(void): struct ActorUniqueID const & __ptr64	 /// ?getUniqueID@Actor@@QEBAAEBUActorUniqueID@@XZ
    getVariant(): number;	// getVariant(void): int	 /// ?getVariant@Actor@@QEBAHXZ
    getVehicle(): Actor;	// getVehicle(void): class Actor * __ptr64	 /// ?getVehicle@Actor@@QEBAPEAV1@XZ
    getVehicleRoot(): Actor;	// getVehicleRoot(void): class Actor * __ptr64	 /// ?getVehicleRoot@Actor@@QEBAPEAV1@XZ
    getVehicleRuntimeID(): bigint;	// getVehicleRuntimeID(void): class ActorRuntimeID	 /// ?getVehicleRuntimeID@Actor@@QEBA?AVActorRuntimeID@@XZ
    getVerticalSpeedInMetersPerSecond(): number;	// getVerticalSpeedInMetersPerSecond(void): float	 /// ?getVerticalSpeedInMetersPerSecond@Actor@@QEBAMXZ
    getViewVector(_1: object, _2: number): bigint;	// getViewVector(IActorMovementProxy const &,float): class Vec3	 /// ?getViewVector@Actor@@SA?AVVec3@@AEBUIActorMovementProxy@@M@Z
    getViewVector(_1: number): bigint;	// getViewVector(float): class Vec3	 /// ?getViewVector@Actor@@QEBA?AVVec3@@M@Z
    handleFallDistanceOnServer(_1: number, _2: number, _3: boolean): void;	// handleFallDistanceOnServer(float,float,bool): void	 /// ?handleFallDistanceOnServer@Actor@@UEAAXMM_N@Z
    handleInsidePortal(_1: object): void;	// handleInsidePortal(BlockPos const &): void	 /// ?handleInsidePortal@Actor@@UEAAXAEBVBlockPos@@@Z
    hasCategory(_1: unknown): boolean;	// hasCategory(ActorCategory): bool	 /// ?hasCategory@Actor@@QEBA_NW4ActorCategory@@@Z
    hasEffect(_1: object): boolean;	// hasEffect(MobEffect const &): bool	 /// ?hasEffect@Actor@@QEBA_NAEBVMobEffect@@@Z
    hasEnteredWater(): boolean;	// hasEnteredWater(void): bool	 /// ?hasEnteredWater@Actor@@UEBA_NXZ
    hasFamily(_1: object): boolean;	// hasFamily(HashedString const &): bool	 /// ?hasFamily@Actor@@QEBA_NAEBVHashedString@@@Z
    hasPassenger(): boolean;	// hasPassenger(void): bool	 /// ?hasPassenger@Actor@@QEBA_NXZ
    hasPlayerPassenger(): boolean;	// hasPlayerPassenger(void): bool	 /// ?hasPlayerPassenger@Actor@@QEBA_NXZ
    hasSaddle(): boolean;	// hasSaddle(void): bool	 /// ?hasSaddle@Actor@@QEBA_NXZ
    hasSubBBIn(_1: object, _2: unknown): boolean;	// hasSubBBIn(IActorMovementProxy const &,MaterialType): bool	 /// ?hasSubBBIn@Actor@@SA_NAEBUIActorMovementProxy@@W4MaterialType@@@Z
    hasTickingArea(): boolean;	// hasTickingArea(void): bool	 /// ?hasTickingArea@Actor@@QEBA_NXZ
    hasType(_1: unknown): boolean;	// hasType(ActorType): bool	 /// ?hasType@Actor@@QEBA_NW4ActorType@@@Z
    heal(_1: number): void;	// heal(int): void	 /// ?heal@Actor@@UEAAXH@Z
    hurt(_1: object, _2: number, _3: boolean, _4: boolean): boolean;	// hurt(ActorDamageSource const &,float,bool,bool): bool	 /// ?hurt@Actor@@QEAA_NAEBVActorDamageSource@@M_N1@Z
    initActorProperties(): void;	// initActorProperties(void): void	 /// ?initActorProperties@Actor@@QEAAXXZ
    initParams(_1: object): void;	// initParams(VariantParameterList &): void	 /// ?initParams@Actor@@QEAAXAEAVVariantParameterList@@@Z
    interpolatorTick(): void;	// interpolatorTick(void): void	 /// ?interpolatorTick@Actor@@UEAAXXZ
    intersects(_1: object, _2: object): boolean;	// intersects(Vec3 const &,Vec3 const &): bool	 /// ?intersects@Actor@@UEBA_NAEBVVec3@@0@Z
    isActorLocationInMaterial(_1: unknown, _2: unknown): boolean;	// isActorLocationInMaterial(ActorLocation,MaterialType): bool	 /// ?isActorLocationInMaterial@Actor@@QEBA_NW4ActorLocation@@W4MaterialType@@@Z
    isAffectedByWaterBottle(): boolean;	// isAffectedByWaterBottle(void): bool	 /// ?isAffectedByWaterBottle@Actor@@UEBA_NXZ
    isAttackableGamemode(): boolean;	// isAttackableGamemode(void): bool	 /// ?isAttackableGamemode@Actor@@UEBA_NXZ
    isBaby(): boolean;	// isBaby(void): bool	 /// ?isBaby@Actor@@QEBA_NXZ
    isChested(): boolean;	// isChested(void): bool	 /// ?isChested@Actor@@QEBA_NXZ
    isClientSide(): boolean;	// isClientSide(void): bool	 /// ?isClientSide@Actor@@UEBA_NXZ
    isControlledByLocalInstance(): boolean;	// isControlledByLocalInstance(void): bool	 /// ?isControlledByLocalInstance@Actor@@QEBA_NXZ
    isEnchanted(): boolean;	// isEnchanted(void): bool	 /// ?isEnchanted@Actor@@UEBA_NXZ
    isFireImmune(): boolean;	// isFireImmune(void): bool	 /// ?isFireImmune@Actor@@UEBA_NXZ
    isFree(_1: object, _2: object, _3: number): boolean;	// isFree(IActorMovementProxy &,Vec3 const &,float): bool	 /// ?isFree@Actor@@SA_NAEAUIActorMovementProxy@@AEBVVec3@@M@Z
    isInClouds(): boolean;	// isInClouds(void): bool	 /// ?isInClouds@Actor@@QEBA_NXZ
    isInLava(): boolean;	// isInLava(void): bool	 /// ?isInLava@Actor@@UEBA_NXZ
    isInPrecipitation(): boolean;	// isInPrecipitation(void): bool	 /// ?isInPrecipitation@Actor@@QEBA_NXZ
    isInRain(): boolean;	// isInRain(void): bool	 /// ?isInRain@Actor@@QEBA_NXZ
    isInSnow(): boolean;	// isInSnow(void): bool	 /// ?isInSnow@Actor@@QEBA_NXZ
    isInThunderstorm(): boolean;	// isInThunderstorm(void): bool	 /// ?isInThunderstorm@Actor@@QEBA_NXZ
    isInWall(): boolean;	// isInWall(void): bool	 /// ?isInWall@Actor@@UEBA_NXZ
    isInWater(): boolean;	// isInWater(void): bool	 /// ?isInWater@Actor@@UEBA_NXZ
    isInWaterOrRain(): boolean;	// isInWaterOrRain(void): bool	 /// ?isInWaterOrRain@Actor@@QEBA_NXZ
    isInsideBorderBlock(_1: number): boolean;	// isInsideBorderBlock(float): bool	 /// ?isInsideBorderBlock@Actor@@QEBA_NM@Z
    isInvertedHealAndHarm(): boolean;	// isInvertedHealAndHarm(void): bool	 /// ?isInvertedHealAndHarm@Actor@@UEBA_NXZ
    isInvisible(): boolean;	// isInvisible(void): bool	 /// ?isInvisible@Actor@@UEBA_NXZ
    isLeashed(): boolean;	// isLeashed(void): bool	 /// ?isLeashed@Actor@@QEBA_NXZ
    isMoving(): boolean;	// isMoving(void): bool	 /// ?isMoving@Actor@@QEBA_NXZ
    isOnFire(): boolean;	// isOnFire(void): bool	 /// ?isOnFire@Actor@@UEBA_NXZ
    isOnHotBlock(): boolean;	// isOnHotBlock(void): bool	 /// ?isOnHotBlock@Actor@@UEBA_NXZ
    isOverWater(): boolean;	// isOverWater(void): bool	 /// ?isOverWater@Actor@@UEBA_NXZ
    isPacified(): boolean;	// isPacified(void): bool	 /// ?isPacified@Actor@@QEBA_NXZ
    isPassenger(_1: object): boolean;	// isPassenger(Actor const &): bool	 /// ?isPassenger@Actor@@QEBA_NAEBV1@@Z
    isPersistent(): boolean;	// isPersistent(void): bool	 /// ?isPersistent@Actor@@QEBA_NXZ
    isPowered(): boolean;	// isPowered(void): bool	 /// ?isPowered@Actor@@QEBA_NXZ
    isRegionValid(): boolean;	// isRegionValid(void): bool	 /// ?isRegionValid@Actor@@QEBA_NXZ
    isRemoved(): boolean;	// isRemoved(void): bool	 /// ?isRemoved@Actor@@QEBA_NXZ
    isRiding(_1: object): boolean;	// isRiding(Actor *): bool	 /// ?isRiding@Actor@@QEBA_NPEAV1@@Z
    isRiding(): boolean;	// isRiding(void): bool	 /// ?isRiding@Actor@@QEBA_NXZ
    isSilent(): boolean;	// isSilent(void): bool	 /// ?isSilent@Actor@@UEAA_NXZ
    isSitting(_1: object): boolean;	// isSitting(IActorMovementProxy const &): bool	 /// ?isSitting@Actor@@SA_NAEBUIActorMovementProxy@@@Z
    isSitting(): boolean;	// isSitting(void): bool	 /// ?isSitting@Actor@@QEBA_NXZ
    isSkyLit(_1: number): boolean;	// isSkyLit(float): bool	 /// ?isSkyLit@Actor@@UEAA_NM@Z
    isSneaking(): boolean;	// isSneaking(void): bool	 /// ?isSneaking@Actor@@QEBA_NXZ
    isStanding(): boolean;	// isStanding(void): bool	 /// ?isStanding@Actor@@QEBA_NXZ
    isSwimming(): boolean;	// isSwimming(void): bool	 /// ?isSwimming@Actor@@QEBA_NXZ
    isTame(): boolean;	// isTame(void): bool	 /// ?isTame@Actor@@QEBA_NXZ
    isTouchingDamageBlock(): boolean;	// isTouchingDamageBlock(void): bool	 /// ?isTouchingDamageBlock@Actor@@QEBA_NXZ
    isType(_1: unknown): boolean;	// isType(ActorType): bool	 /// ?isType@Actor@@QEBA_NW4ActorType@@@Z
    isUnderLiquid(_1: unknown): boolean;	// isUnderLiquid(MaterialType): bool	 /// ?isUnderLiquid@Actor@@UEBA_NW4MaterialType@@@Z
    isWearingLeatherArmor(): bigint;	// isWearingLeatherArmor(void): bool const	 /// ?isWearingLeatherArmor@Actor@@UEBA?B_NXZ
    killed(_1: object): void;	// killed(Actor &): void	 /// ?killed@Actor@@UEAAXAEAV1@@Z
    lerpMotion(_1: object): void;	// lerpMotion(Vec3 const &): void	 /// ?lerpMotion@Actor@@UEAAXAEBVVec3@@@Z
    lerpTo(_1: object, _2: object, _3: number): void;	// lerpTo(Vec3 const &,Vec2 const &,int): void	 /// ?lerpTo@Actor@@QEAAXAEBVVec3@@AEBVVec2@@H@Z
    lerpToRotation(_1: object, _2: number): void;	// lerpToRotation(Vec2 const &,int): void	 /// ?lerpToRotation@Actor@@QEAAXAEBVVec2@@H@Z
    load(_1: object, _2: object): boolean;	// load(CompoundTag const &,DataLoadHelper &): bool	 /// ?load@Actor@@UEAA_NAEBVCompoundTag@@AEAVDataLoadHelper@@@Z
    loadEntityFlags(_1: object, _2: object): void;	// loadEntityFlags(CompoundTag const &,DataLoadHelper &): void	 /// ?loadEntityFlags@Actor@@QEAAXAEBVCompoundTag@@AEAVDataLoadHelper@@@Z
    lovePartnerId(): bigint;	// lovePartnerId(void): struct ActorUniqueID const & __ptr64	 /// ?lovePartnerId@Actor@@QEBAAEBUActorUniqueID@@XZ
    markHurt(): void;	// markHurt(void): void	 /// ?markHurt@Actor@@MEAAXXZ
    moveBBs(_1: object): void;	// moveBBs(Vec3 const &): void	 /// ?moveBBs@Actor@@QEAAXAEBVVec3@@@Z
    moveTo(_1: object, _2: object): void;	// moveTo(Vec3 const &,Vec2 const &): void	 /// ?moveTo@Actor@@QEAAXAEBVVec3@@AEBVVec2@@@Z
    onAboveBubbleColumn(_1: boolean): void;	// onAboveBubbleColumn(bool): void	 /// ?onAboveBubbleColumn@Actor@@UEAAX_N@Z
    onAffectedByWaterBottle(): void;	// onAffectedByWaterBottle(void): void	 /// ?onAffectedByWaterBottle@Actor@@QEAAXXZ
    onClimbableBlock(_1: object): boolean;	// onClimbableBlock(IActorMovementProxy const &): bool	 /// ?onClimbableBlock@Actor@@SA_NAEBUIActorMovementProxy@@@Z
    onEffectAdded(_1: object): void;	// onEffectAdded(MobEffectInstance &): void	 /// ?onEffectAdded@Actor@@UEAAXAEAVMobEffectInstance@@@Z
    onEffectRemoved(_1: object): void;	// onEffectRemoved(MobEffectInstance &): void	 /// ?onEffectRemoved@Actor@@UEAAXAEAVMobEffectInstance@@@Z
    onEffectUpdated(_1: object): void;	// onEffectUpdated(MobEffectInstance &): void	 /// ?onEffectUpdated@Actor@@UEAAXAEAVMobEffectInstance@@@Z
    onInsideBubbleColumn(_1: boolean): void;	// onInsideBubbleColumn(bool): void	 /// ?onInsideBubbleColumn@Actor@@UEAAX_N@Z
    onLightningHit(): void;	// onLightningHit(void): void	 /// ?onLightningHit@Actor@@UEAAXXZ
    onOrphan(): void;	// onOrphan(void): void	 /// ?onOrphan@Actor@@UEAAXXZ
    onSynchedDataUpdate(_1: number): void;	// onSynchedDataUpdate(int): void	 /// ?onSynchedDataUpdate@Actor@@UEAAXH@Z
    onSynchedFlagUpdate(_1: number, _2: bigint, _3: bigint): void;	// onSynchedFlagUpdate(int,__int64,__int64): void	 /// ?onSynchedFlagUpdate@Actor@@UEAAXH_J0@Z
    openContainerComponent(_1: object): void;	// openContainerComponent(Player &): void	 /// ?openContainerComponent@Actor@@UEAAXAEAVPlayer@@@Z
    performRangedAttack(_1: object, _2: number): void;	// performRangedAttack(Actor &,float): void	 /// ?performRangedAttack@Actor@@UEAAXAEAV1@M@Z
    pickUpItem(_1: object, _2: number): void;	// pickUpItem(ItemActor &,int): void	 /// ?pickUpItem@Actor@@QEAAXAEAVItemActor@@H@Z
    playAmbientSound(): void;	// playAmbientSound(void): void	 /// ?playAmbientSound@Actor@@UEAAXXZ
    playSound(_1: unknown, _2: object, _3: object): void;	// playSound(LevelSoundEvent,Vec3 const &,Block const &): void	 /// ?playSound@Actor@@QEAAXW4LevelSoundEvent@@AEBVVec3@@AEBVBlock@@@Z
    playSound(_1: unknown, _2: object, _3: number): void;	// playSound(LevelSoundEvent,Vec3 const &,int): void	 /// ?playSound@Actor@@QEAAXW4LevelSoundEvent@@AEBVVec3@@H@Z
    playSynchronizedSound(_1: unknown, _2: object, _3: object, _4: boolean): void;	// playSynchronizedSound(LevelSoundEvent,Vec3 const &,Block const &,bool): void	 /// ?playSynchronizedSound@Actor@@UEAAXW4LevelSoundEvent@@AEBVVec3@@AEBVBlock@@_N@Z
    playSynchronizedSound(_1: unknown, _2: object, _3: number, _4: boolean): void;	// playSynchronizedSound(LevelSoundEvent,Vec3 const &,int,bool): void	 /// ?playSynchronizedSound@Actor@@UEAAXW4LevelSoundEvent@@AEBVVec3@@H_N@Z
    positionAllPassengers(): void;	// positionAllPassengers(void): void	 /// ?positionAllPassengers@Actor@@QEAAXXZ
    positionPassenger(_1: object, _2: number): void;	// positionPassenger(Actor &,float): void	 /// ?positionPassenger@Actor@@UEAAXAEAV1@M@Z
    pushBackActionEventToActionQueue(_1: unknown): void;	// pushBackActionEventToActionQueue(ActionEvent): void	 /// ?pushBackActionEventToActionQueue@Actor@@QEAAXVActionEvent@@@Z
    pushOutOfBlocks(_1: object): void;	// pushOutOfBlocks(Vec3 const &): void	 /// ?pushOutOfBlocks@Actor@@MEAAXAEBVVec3@@@Z
    reload(): void;	// reload(void): void	 /// ?reload@Actor@@QEAAXXZ
    reloadComponents(_1: unknown, _2: object): void;	// reloadComponents(Actor::InitializationMethod,VariantParameterList const &): void	 /// ?reloadComponents@Actor@@MEAAXW4InitializationMethod@1@AEBVVariantParameterList@@@Z
    reloadLootTable(_1: object): void;	// reloadLootTable(EquipmentTableDefinition const &): void	 /// ?reloadLootTable@Actor@@UEAAXAEBUEquipmentTableDefinition@@@Z
    reloadLootTable(): void;	// reloadLootTable(void): void	 /// ?reloadLootTable@Actor@@UEAAXXZ
    removeAllPassengers(_1: boolean, _2: boolean): void;	// removeAllPassengers(bool,bool): void	 /// ?removeAllPassengers@Actor@@QEAAX_N0@Z
    removeEffect(_1: number): void;	// removeEffect(int): void	 /// ?removeEffect@Actor@@QEAAXH@Z
    reset(): void;	// reset(void): void	 /// ?reset@Actor@@UEAAXXZ
    resetBlockMovementSlowdownMultiplier(): void;	// resetBlockMovementSlowdownMultiplier(void): void	 /// ?resetBlockMovementSlowdownMultiplier@Actor@@UEAAXXZ
    resetClientAnimations(): void;	// resetClientAnimations(void): void	 /// ?resetClientAnimations@Actor@@QEAAXXZ
    resetRegion(): void;	// resetRegion(void): void	 /// ?resetRegion@Actor@@QEAAXXZ
    save(_1: object): boolean;	// save(CompoundTag &): bool	 /// ?save@Actor@@UEAA_NAEAVCompoundTag@@@Z
    saveWithoutId(_1: object): void;	// saveWithoutId(CompoundTag &): void	 /// ?saveWithoutId@Actor@@UEAAXAEAVCompoundTag@@@Z
    sendMotionPacketIfNeeded(): void;	// sendMotionPacketIfNeeded(void): void	 /// ?sendMotionPacketIfNeeded@Actor@@UEAAXXZ
    sendMotionToServer(): void;	// sendMotionToServer(void): void	 /// ?sendMotionToServer@Actor@@QEAAXXZ
    serializationSetHealth(_1: number): void;	// serializationSetHealth(int): void	 /// ?serializationSetHealth@Actor@@QEAAXH@Z
    setAABB(_1: object): void;	// setAABB(AABB const &): void	 /// ?setAABB@Actor@@QEAAXAEBVAABB@@@Z
    setAABBDim(_1: object): void;	// setAABBDim(Vec2 const &): void	 /// ?setAABBDim@Actor@@QEAAXAEBVVec2@@@Z
    setActorRendererId(_1: unknown): void;	// setActorRendererId(HashedString): void	 /// ?setActorRendererId@Actor@@QEAAXVHashedString@@@Z
    setCanPowerJump(_1: boolean): void;	// setCanPowerJump(bool): void	 /// ?setCanPowerJump@Actor@@UEAAX_N@Z
    setChainedDamageEffects(_1: boolean): void;	// setChainedDamageEffects(bool): void	 /// ?setChainedDamageEffects@Actor@@QEAAX_N@Z
    setCharged(_1: boolean): void;	// setCharged(bool): void	 /// ?setCharged@Actor@@QEAAX_N@Z
    setColor(_1: unknown): void;	// setColor(PaletteColor): void	 /// ?setColor@Actor@@QEAAXW4PaletteColor@@@Z
    setControllingSeat(_1: number): void;	// setControllingSeat(int): void	 /// ?setControllingSeat@Actor@@QEAAXH@Z
    setDamageNearbyMobs(_1: boolean): void;	// setDamageNearbyMobs(bool): void	 /// ?setDamageNearbyMobs@Actor@@UEAAX_N@Z
    setGlobal(_1: boolean): void;	// setGlobal(bool): void	 /// ?setGlobal@Actor@@QEAAX_N@Z
    setInLove(_1: object): void;	// setInLove(Actor *): void	 /// ?setInLove@Actor@@QEAAXPEAV1@@Z
    setInvisible(_1: boolean): void;	// setInvisible(bool): void	 /// ?setInvisible@Actor@@QEAAX_N@Z
    setLastHitBB(_1: object, _2: object): void;	// setLastHitBB(Vec3 const &,Vec3 const &): void	 /// ?setLastHitBB@Actor@@QEAAXAEBVVec3@@0@Z
    setLastHurtByMob(_1: object): void;	// setLastHurtByMob(Mob *): void	 /// ?setLastHurtByMob@Actor@@UEAAXPEAVMob@@@Z
    setLastHurtByPlayer(_1: object): void;	// setLastHurtByPlayer(Player *): void	 /// ?setLastHurtByPlayer@Actor@@UEAAXPEAVPlayer@@@Z
    setLastHurtMob(_1: object): void;	// setLastHurtMob(Actor *): void	 /// ?setLastHurtMob@Actor@@UEAAXPEAV1@@Z
    setLeashHolder(_1: unknown): void;	// setLeashHolder(ActorUniqueID): void	 /// ?setLeashHolder@Actor@@QEAAXUActorUniqueID@@@Z
    setMoving(_1: boolean): void;	// setMoving(bool): void	 /// ?setMoving@Actor@@QEAAX_N@Z
    setNameTagVisible(_1: boolean): void;	// setNameTagVisible(bool): void	 /// ?setNameTagVisible@Actor@@UEAAX_N@Z
    setOwner(_1: unknown): void;	// setOwner(ActorUniqueID): void	 /// ?setOwner@Actor@@UEAAXUActorUniqueID@@@Z
    setPersistent(): void;	// setPersistent(void): void	 /// ?setPersistent@Actor@@QEAAXXZ
    setPos(_1: object): void;	// setPos(Vec3 const &): void	 /// ?setPos@Actor@@UEAAXAEBVVec3@@@Z
    setPreviousPosRot(_1: object, _2: object): void;	// setPreviousPosRot(Vec3 const &,Vec2 const &): void	 /// ?setPreviousPosRot@Actor@@QEAAXAEBVVec3@@AEBVVec2@@@Z
    setRegion(_1: object): void;	// setRegion(BlockSource &): void	 /// ?setRegion@Actor@@QEAAXAEAVBlockSource@@@Z
    setResting(_1: boolean): void;	// setResting(bool): void	 /// ?setResting@Actor@@QEAAX_N@Z
    setRot(_1: object): void;	// setRot(Vec2 const &): void	 /// ?setRot@Actor@@UEAAXAEBVVec2@@@Z
    setSitting(_1: boolean): void;	// setSitting(bool): void	 /// ?setSitting@Actor@@UEAAX_N@Z
    setSneaking(_1: boolean): void;	// setSneaking(bool): void	 /// ?setSneaking@Actor@@UEAAX_N@Z
    setStanding(_1: boolean): void;	// setStanding(bool): void	 /// ?setStanding@Actor@@UEAAX_N@Z
    setStatusFlag(_1: unknown, _2: boolean): void;	// setStatusFlag(ActorFlags,bool): void	 /// ?setStatusFlag@Actor@@QEAAXW4ActorFlags@@_N@Z
    setStrength(_1: number): void;	// setStrength(int): void	 /// ?setStrength@Actor@@QEAAXH@Z
    setVariant(_1: number): void;	// setVariant(int): void	 /// ?setVariant@Actor@@QEAAXH@Z
    shouldRender(): boolean;	// shouldRender(void): bool	 /// ?shouldRender@Actor@@UEBA_NXZ
    shouldTick(): boolean;	// shouldTick(void): bool	 /// ?shouldTick@Actor@@UEBA_NXZ
    shouldTryMakeStepSound(): boolean;	// shouldTryMakeStepSound(void): bool	 /// ?shouldTryMakeStepSound@Actor@@MEAA_NXZ
    spawnAtLocation(_1: object, _2: number): unknown;	// spawnAtLocation(Block const &,int): class ItemActor * __ptr64	 /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@AEBVBlock@@H@Z
    spawnAtLocation(_1: object, _2: number, _3: number): unknown;	// spawnAtLocation(Block const &,int,float): class ItemActor * __ptr64	 /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@AEBVBlock@@HM@Z
    spawnAtLocation(_1: object, _2: number): unknown;	// spawnAtLocation(ItemStack const &,float): class ItemActor * __ptr64	 /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@AEBVItemStack@@M@Z
    spawnAtLocation(_1: number, _2: number): unknown;	// spawnAtLocation(int,int): class ItemActor * __ptr64	 /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@HH@Z
    spawnAtLocation(_1: number, _2: number, _3: number): unknown;	// spawnAtLocation(int,int,float): class ItemActor * __ptr64	 /// ?spawnAtLocation@Actor@@UEAAPEAVItemActor@@HHM@Z
    spawnBalloonPopParticles(): void;	// spawnBalloonPopParticles(void): void	 /// ?spawnBalloonPopParticles@Actor@@QEAAXXZ
    spawnDustParticles(_1: number): void;	// spawnDustParticles(int): void	 /// ?spawnDustParticles@Actor@@QEAAXH@Z
    spawnTamingParticles(_1: boolean): void;	// spawnTamingParticles(bool): void	 /// ?spawnTamingParticles@Actor@@QEAAX_N@Z
    spawnTrailBubbles(): void;	// spawnTrailBubbles(void): void	 /// ?spawnTrailBubbles@Actor@@MEAAXXZ
    teleportPassengersTo(_1: object, _2: number, _3: number): void;	// teleportPassengersTo(Vec3 const &,int,int): void	 /// ?teleportPassengersTo@Actor@@QEAAXAEBVVec3@@HH@Z
    thawFreezeEffect(): void;	// thawFreezeEffect(void): void	 /// ?thawFreezeEffect@Actor@@UEAAXXZ
    tick(_1: object): boolean;	// tick(BlockSource &): bool	 /// ?tick@Actor@@QEAA_NAEAVBlockSource@@@Z
    tickLeash(): void;	// tickLeash(void): void	 /// ?tickLeash@Actor@@UEAAXXZ
    transferTickingArea(_1: object): void;	// transferTickingArea(Dimension &): void	 /// ?transferTickingArea@Actor@@QEAAXAEAVDimension@@@Z
    tryGetFromEntity(): bigint;	 /// Actor::tryGetFromEntity
    tryMoveChunks(): boolean;	// tryMoveChunks(void): bool	 /// ?tryMoveChunks@Actor@@QEAA_NXZ
    tryTeleportTo(_1: object, _2: boolean, _3: boolean, _4: number, _5: number): boolean;	// tryTeleportTo(Vec3 const &,bool,bool,int,int): bool	 /// ?tryTeleportTo@Actor@@UEAA_NAEBVVec3@@_N1HH@Z
    updateDescription(): void;	// updateDescription(void): void	 /// ?updateDescription@Actor@@QEAAXXZ
    updateEntityInside(_1: object): void;	// updateEntityInside(AABB const &): void	 /// ?updateEntityInside@Actor@@UEAAXAEBVAABB@@@Z
    updateEntityInside(): void;	// updateEntityInside(void): void	 /// ?updateEntityInside@Actor@@UEAAXXZ
    updateInsideBlock(): void;	// updateInsideBlock(void): void	 /// ?updateInsideBlock@Actor@@MEAAXXZ
    updateWaterState(): boolean;	// updateWaterState(void): bool	 /// ?updateWaterState@Actor@@MEAA_NXZ
    useSaddle(_1: object, _2: object): boolean;	// useSaddle(ItemStackBase &,Player *): bool	 /// ?useSaddle@Actor@@QEAA_NAEAVItemStackBase@@PEAVPlayer@@@Z
    wasHurt(): boolean;	// wasHurt(void): bool	 /// ?wasHurt@Actor@@UEAA_NXZ
    wasLastHitByPlayer(): boolean;	// wasLastHitByPlayer(void): bool	 /// ?wasLastHitByPlayer@Actor@@QEAA_NXZ
    wobble(): void;	// wobble(void): void	 /// ?wobble@Actor@@UEAAXXZ
}
declare class PlayerInventoryProxy {
    // Attributes 
    inventory: Inventory;
    // Methods 
    // Inherited from PlayerInventoryProxy
}
declare class SDKText {
    // Attributes 
    // Methods 
    // Inherited from SDKText
}
declare class Random {
    // Attributes 
    // Methods 
    // Inherited from Random
    Random(): Random;	// Random(void)	 /// ??0Random@@QEAA@XZ
    consumeCount(_1: bigint): void;	// consumeCount(uint): void	 /// ?consumeCount@Random@@UEAAXI@Z
    fork(): bigint;	// fork(void): class std::unique_ptr<class IRandom,struct std::default_delete<class IRandom> >	 /// ?fork@Random@@UEAA?AV?$unique_ptr@VIRandom@@U?$default_delete@VIRandom@@@std@@@std@@XZ
    getThreadLocal(): Random;	// getThreadLocal(void): class Random & __ptr64	 /// ?getThreadLocal@Random@@SAAEAV1@XZ
    nextBoolean(): boolean;	// nextBoolean(void): bool	 /// ?nextBoolean@Random@@UEAA_NXZ
    nextDouble(): number;	// nextDouble(void): double	 /// ?nextDouble@Random@@UEAANXZ
    nextFloat(_1: number, _2: number): number;	// nextFloat(float,float): float	 /// ?nextFloat@Random@@QEAAMMM@Z
    nextFloat(): number;	// nextFloat(void): float	 /// ?nextFloat@Random@@UEAAMXZ
    nextGaussianDouble(): number;	// nextGaussianDouble(void): double	 /// ?nextGaussianDouble@Random@@UEAANXZ
    nextGaussianFloat(): number;	// nextGaussianFloat(void): float	 /// ?nextGaussianFloat@Random@@QEAAMXZ
    nextGaussianInt(_1: number): number;	// nextGaussianInt(int): int	 /// ?nextGaussianInt@Random@@QEAAHH@Z
    nextInt(_1: number): number;	// nextInt(int): int	 /// ?nextInt@Random@@UEAAHH@Z
    nextInt(_1: number, _2: number): number;	// nextInt(int,int): int	 /// ?nextInt@Random@@QEAAHHH@Z
    nextInt(): number;	// nextInt(void): int	 /// ?nextInt@Random@@UEAAHXZ
    nextIntInclusive(_1: number, _2: number): number;	// nextIntInclusive(int,int): int	 /// ?nextIntInclusive@Random@@QEAAHHH@Z
    nextLong(): bigint;	// nextLong(void): __int64	 /// ?nextLong@Random@@UEAA_JXZ
}
declare class SDKHashedString {
    // Attributes 
    hash: bigint;
    text: SDKText;
    // Methods 
    // Inherited from SDKHashedString
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
declare class SimpleContainer {
    // Attributes 
    // Methods 
    // Inherited from SimpleContainer
    getContainerSize(): number;	// getContainerSize(void): int	 /// ?getContainerSize@SimpleContainer@@UEBAHXZ
    getItem(_1: number): ItemStack;	// getItem(int): class ItemStack const & __ptr64	 /// ?getItem@SimpleContainer@@UEBAAEBVItemStack@@H@Z
    setItem(_1: number, _2: object): void;	// setItem(int,ItemStack const &): void	 /// ?setItem@SimpleContainer@@UEAAXHAEBVItemStack@@@Z
}
declare class SDKVectorContainer {
    // Attributes 
    endOfAllocated: AnyPtr;
    begin: AnyPtr;
    end: AnyPtr;
    // Methods 
    // Inherited from SDKVectorContainer
}
declare class TexturePtr {
    // Attributes 
    clientTexture: object;
    resourceLocation: ResourceLocation;
    // Methods 
    // Inherited from TexturePtr
}

declare class Mod {
    toString(): string;
    getName(): string;
    isEnabled(): boolean;
    setEnabled(enabled: boolean);
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

    on(event: string, callback: Function);
    hook(symbol: string, callback: (cb: CallbackInfo) => void);
    setName(name: string);
}
declare class ModManager_TYPE {
    toString(): string;
    registerMod(mod: any): any;
}
declare const ModManager: ModManager_TYPE;

declare class Game_TYPE {
    getClient(): string; // Elafalter
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
declare function dump(runtime: object): void;
declare function __elaDynLoad(obj: string): any;
