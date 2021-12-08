class Wallet {
    constructor(name, key, key_derivation_method, storage_type, storage_config, storage_credentials) {

    }
}


class Did {
    constructor(did, seed, method, metadata) {
        
    }
} 

class Pool {
    constructor(name, gen_txn_file) {
        
    }
}

/*
wallet
    add_main_param("name", "Identifier of the wallet")
    add_required_deferred_param("key", "Key or passphrase used for wallet key derivation.Look to key_derivation_method param for information about supported key derivation methods.")
    add_optional_param("key_derivation_method", "Algorithm to use for wallet key derivation. One of: argon2m - derive secured wallet key (used by default) argon2i - derive secured wallet key (less secured but faster) raw - raw wallet key provided (skip derivation)")
    add_optional_param("storage_type", "Type of the wallet storage.")
    add_optional_param("storage_config", "The list of key:value pairs defined by storage type.")
    add_optional_param("storage_credentials", "The list of key:value pairs defined by storage type.")
    add_example("wallet create wallet1 key")
    add_example("wallet create wallet1 key storage_type=default")
    add_example("wallet create wallet1 key storage_type=default storage_config={"key1":"value1","key2":"value2"}")
    );
    //ATRIBUTOS
    let id = get_str_param("name", params).map_err(error_err!());
    let key = get_str_param("key", params).map_err(error_err!());
    let key_derivation_method = get_opt_str_param("key_derivation_method", params).map_err(error_err!());
    let storage_type = get_opt_str_param("storage_type", params).map_err(error_err!())?.unwrap_or("default");
    let storage_config = get_opt_object_param("storage_config", params).map_err(error_err!());
    let storage_credentials = get_opt_object_param("storage_credentials", params).map_err(error_err!());


pool 
    add_main_param("name", "The name of new pool ledger config")
    add_required_param("gen_txn_file", "Path to file with genesis transactions")

did 
    add_optional_param("did", "Known DID for new wallet instance")
    add_optional_deferred_param("seed", "Seed for creating DID key-pair (UTF-8, base64 or hex)")
    add_optional_param("method", "Method name to create fully qualified DID")
    add_optional_param("metadata", "DID metadata")
    add_example("did new")
    add_example("did new did=VsKV7grR1BUE29mG2Fm2kX")
    add_example("did new did=VsKV7grR1BUE29mG2Fm2kX method=indy")
    add_example("did new did=VsKV7grR1BUE29mG2Fm2kX seed=00000000000000000000000000000My1")
    add_example("did new seed=00000000000000000000000000000My1 metadata=did_metadata")
);
*/
