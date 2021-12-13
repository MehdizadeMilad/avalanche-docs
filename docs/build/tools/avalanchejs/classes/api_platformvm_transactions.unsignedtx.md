[avalanche](../README.md) › [API-PlatformVM-Transactions](../modules/api_platformvm_transactions.md) › [UnsignedTx](api_platformvm_transactions.unsignedtx.md)

# Class: UnsignedTx

## Hierarchy

  ↳ [StandardUnsignedTx](common_transactions.standardunsignedtx.md)‹[KeyPair](api_platformvm_keychain.keypair.md), [KeyChain](api_platformvm_keychain.keychain.md), [BaseTx](api_platformvm_basetx.basetx.md)›

  ↳ **UnsignedTx**

## Index

### Constructors

* [constructor](api_platformvm_transactions.unsignedtx.md#constructor)

### Properties

* [_codecID](api_platformvm_transactions.unsignedtx.md#protected-_codecid)
* [_typeID](api_platformvm_transactions.unsignedtx.md#protected-_typeid)
* [_typeName](api_platformvm_transactions.unsignedtx.md#protected-_typename)
* [codecID](api_platformvm_transactions.unsignedtx.md#protected-codecid)
* [transaction](api_platformvm_transactions.unsignedtx.md#protected-transaction)

### Methods

* [deserialize](api_platformvm_transactions.unsignedtx.md#deserialize)
* [fromBuffer](api_platformvm_transactions.unsignedtx.md#frombuffer)
* [getBurn](api_platformvm_transactions.unsignedtx.md#getburn)
* [getCodecID](api_platformvm_transactions.unsignedtx.md#getcodecid)
* [getCodecIDBuffer](api_platformvm_transactions.unsignedtx.md#getcodecidbuffer)
* [getInputTotal](api_platformvm_transactions.unsignedtx.md#getinputtotal)
* [getOutputTotal](api_platformvm_transactions.unsignedtx.md#getoutputtotal)
* [getTransaction](api_platformvm_transactions.unsignedtx.md#gettransaction)
* [getTypeID](api_platformvm_transactions.unsignedtx.md#gettypeid)
* [getTypeName](api_platformvm_transactions.unsignedtx.md#gettypename)
* [sanitizeObject](api_platformvm_transactions.unsignedtx.md#sanitizeobject)
* [serialize](api_platformvm_transactions.unsignedtx.md#serialize)
* [sign](api_platformvm_transactions.unsignedtx.md#sign)
* [toBuffer](api_platformvm_transactions.unsignedtx.md#tobuffer)

## Constructors

###  constructor

\+ **new UnsignedTx**(`transaction`: [BaseTx](api_platformvm_basetx.basetx.md), `codecID`: number): *[UnsignedTx](api_platformvm_transactions.unsignedtx.md)*

*Inherited from [StandardUnsignedTx](common_transactions.standardunsignedtx.md).[constructor](common_transactions.standardunsignedtx.md#constructor)*

*Defined in [src/common/tx.ts:347](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/common/tx.ts#L347)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`transaction` | [BaseTx](api_platformvm_basetx.basetx.md) | undefined |
`codecID` | number | 0 |

**Returns:** *[UnsignedTx](api_platformvm_transactions.unsignedtx.md)*

## Properties

### `Protected` _codecID

• **_codecID**: *number* = undefined

*Inherited from [SigIdx](common_signature.sigidx.md).[_codecID](common_signature.sigidx.md#protected-_codecid)*

*Defined in [src/utils/serialization.ts:51](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/utils/serialization.ts#L51)*

___

### `Protected` _typeID

• **_typeID**: *any* = undefined

*Overrides [StandardUnsignedTx](common_transactions.standardunsignedtx.md).[_typeID](common_transactions.standardunsignedtx.md#protected-_typeid)*

*Defined in [src/apis/platformvm/tx.ts:53](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/apis/platformvm/tx.ts#L53)*

___

### `Protected` _typeName

• **_typeName**: *string* = "UnsignedTx"

*Overrides [StandardUnsignedTx](common_transactions.standardunsignedtx.md).[_typeName](common_transactions.standardunsignedtx.md#protected-_typename)*

*Defined in [src/apis/platformvm/tx.ts:52](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/apis/platformvm/tx.ts#L52)*

___

### `Protected` codecID

• **codecID**: *number* = 0

*Inherited from [StandardUnsignedTx](common_transactions.standardunsignedtx.md).[codecID](common_transactions.standardunsignedtx.md#protected-codecid)*

*Defined in [src/common/tx.ts:248](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/common/tx.ts#L248)*

___

### `Protected` transaction

• **transaction**: *[BaseTx](api_platformvm_basetx.basetx.md)*

*Inherited from [StandardUnsignedTx](common_transactions.standardunsignedtx.md).[transaction](common_transactions.standardunsignedtx.md#protected-transaction)*

*Defined in [src/common/tx.ts:249](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/common/tx.ts#L249)*

## Methods

###  deserialize

▸ **deserialize**(`fields`: object, `encoding`: [SerializedEncoding](../modules/src_utils.md#serializedencoding)): *void*

*Overrides [StandardUnsignedTx](common_transactions.standardunsignedtx.md).[deserialize](common_transactions.standardunsignedtx.md#deserialize)*

*Defined in [src/apis/platformvm/tx.ts:57](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/apis/platformvm/tx.ts#L57)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`fields` | object | - |
`encoding` | [SerializedEncoding](../modules/src_utils.md#serializedencoding) | "hex" |

**Returns:** *void*

___

###  fromBuffer

▸ **fromBuffer**(`bytes`: Buffer, `offset`: number): *number*

*Overrides [StandardUnsignedTx](common_transactions.standardunsignedtx.md).[fromBuffer](common_transactions.standardunsignedtx.md#abstract-frombuffer)*

*Defined in [src/apis/platformvm/tx.ts:67](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/apis/platformvm/tx.ts#L67)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`bytes` | Buffer | - |
`offset` | number | 0 |

**Returns:** *number*

___

###  getBurn

▸ **getBurn**(`assetID`: Buffer): *BN*

*Inherited from [StandardUnsignedTx](common_transactions.standardunsignedtx.md).[getBurn](common_transactions.standardunsignedtx.md#getburn)*

*Defined in [src/common/tx.ts:315](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/common/tx.ts#L315)*

Returns the number of burned tokens as a BN

**Parameters:**

Name | Type |
------ | ------ |
`assetID` | Buffer |

**Returns:** *BN*

___

###  getCodecID

▸ **getCodecID**(): *number*

*Inherited from [StandardUnsignedTx](common_transactions.standardunsignedtx.md).[getCodecID](common_transactions.standardunsignedtx.md#getcodecid)*

*Overrides [SigIdx](common_signature.sigidx.md).[getCodecID](common_signature.sigidx.md#getcodecid)*

*Defined in [src/common/tx.ts:254](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/common/tx.ts#L254)*

Returns the CodecID as a number

**Returns:** *number*

___

###  getCodecIDBuffer

▸ **getCodecIDBuffer**(): *Buffer*

*Inherited from [StandardUnsignedTx](common_transactions.standardunsignedtx.md).[getCodecIDBuffer](common_transactions.standardunsignedtx.md#getcodecidbuffer)*

*Defined in [src/common/tx.ts:259](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/common/tx.ts#L259)*

Returns the [Buffer](https://github.com/feross/buffer) representation of the CodecID

**Returns:** *Buffer*

___

###  getInputTotal

▸ **getInputTotal**(`assetID`: Buffer): *BN*

*Inherited from [StandardUnsignedTx](common_transactions.standardunsignedtx.md).[getInputTotal](common_transactions.standardunsignedtx.md#getinputtotal)*

*Defined in [src/common/tx.ts:268](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/common/tx.ts#L268)*

Returns the inputTotal as a BN

**Parameters:**

Name | Type |
------ | ------ |
`assetID` | Buffer |

**Returns:** *BN*

___

###  getOutputTotal

▸ **getOutputTotal**(`assetID`: Buffer): *BN*

*Inherited from [StandardUnsignedTx](common_transactions.standardunsignedtx.md).[getOutputTotal](common_transactions.standardunsignedtx.md#getoutputtotal)*

*Defined in [src/common/tx.ts:291](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/common/tx.ts#L291)*

Returns the outputTotal as a BN

**Parameters:**

Name | Type |
------ | ------ |
`assetID` | Buffer |

**Returns:** *BN*

___

###  getTransaction

▸ **getTransaction**(): *[BaseTx](api_platformvm_basetx.basetx.md)*

*Overrides [StandardUnsignedTx](common_transactions.standardunsignedtx.md).[getTransaction](common_transactions.standardunsignedtx.md#abstract-gettransaction)*

*Defined in [src/apis/platformvm/tx.ts:63](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/apis/platformvm/tx.ts#L63)*

**Returns:** *[BaseTx](api_platformvm_basetx.basetx.md)*

___

###  getTypeID

▸ **getTypeID**(): *number*

*Inherited from [SigIdx](common_signature.sigidx.md).[getTypeID](common_signature.sigidx.md#gettypeid)*

*Defined in [src/utils/serialization.ts:63](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/utils/serialization.ts#L63)*

Used in serialization. Optional. TypeID is a number for the typeID of object being output.

**Returns:** *number*

___

###  getTypeName

▸ **getTypeName**(): *string*

*Inherited from [SigIdx](common_signature.sigidx.md).[getTypeName](common_signature.sigidx.md#gettypename)*

*Defined in [src/utils/serialization.ts:56](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/utils/serialization.ts#L56)*

Used in serialization. TypeName is a string name for the type of object being output.

**Returns:** *string*

___

###  sanitizeObject

▸ **sanitizeObject**(`obj`: object): *object*

*Inherited from [SigIdx](common_signature.sigidx.md).[sanitizeObject](common_signature.sigidx.md#sanitizeobject)*

*Defined in [src/utils/serialization.ts:77](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/utils/serialization.ts#L77)*

Sanitize to prevent cross scripting attacks.

**Parameters:**

Name | Type |
------ | ------ |
`obj` | object |

**Returns:** *object*

___

###  serialize

▸ **serialize**(`encoding`: [SerializedEncoding](../modules/src_utils.md#serializedencoding)): *object*

*Inherited from [StandardUnsignedTx](common_transactions.standardunsignedtx.md).[serialize](common_transactions.standardunsignedtx.md#serialize)*

*Overrides [Serializable](utils_serialization.serializable.md).[serialize](utils_serialization.serializable.md#serialize)*

*Defined in [src/common/tx.ts:223](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/common/tx.ts#L223)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`encoding` | [SerializedEncoding](../modules/src_utils.md#serializedencoding) | "hex" |

**Returns:** *object*

___

###  sign

▸ **sign**(`kc`: [KeyChain](api_platformvm_keychain.keychain.md)): *[Tx](api_platformvm_transactions.tx.md)*

*Overrides [StandardUnsignedTx](common_transactions.standardunsignedtx.md).[sign](common_transactions.standardunsignedtx.md#abstract-sign)*

*Defined in [src/apis/platformvm/tx.ts:85](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/apis/platformvm/tx.ts#L85)*

Signs this [UnsignedTx](api_platformvm_transactions.unsignedtx.md) and returns signed [StandardTx](common_transactions.standardtx.md)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`kc` | [KeyChain](api_platformvm_keychain.keychain.md) | An [KeyChain](api_evm_keychain.keychain.md) used in signing  |

**Returns:** *[Tx](api_platformvm_transactions.tx.md)*

A signed [StandardTx](common_transactions.standardtx.md)

___

###  toBuffer

▸ **toBuffer**(): *Buffer*

*Inherited from [StandardUnsignedTx](common_transactions.standardunsignedtx.md).[toBuffer](common_transactions.standardunsignedtx.md#tobuffer)*

*Defined in [src/common/tx.ts:326](https://github.com/ava-labs/avalanchejs/blob/8c220c6/src/common/tx.ts#L326)*

**Returns:** *Buffer*