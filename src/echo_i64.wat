(module
  ;; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  ;; Echo i64 value back to caller
  ;; Input  : [i64]
  ;; Output : [i64]
  (func (export "echoI64")
        (param $i64_arg i64)
        (result i64)
    local.get $i64_arg
  )
)
