package main

import (
	"flag"
	"net/http"
)

var addr = flag.String("addr", ":3000", "Address to listen.")

func main() {
	flag.Parse()
	panic(http.ListenAndServe(*addr, http.FileServer(http.Dir("./public"))))
}
