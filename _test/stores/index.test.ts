import { beforeAll, afterEach, it, expect } from "bun:test"
import {
  useTestStorageEngine,
  setTestStorageKey,
  cleanTestStorage,
  getTestStorage,
} from "@nanostores/persistent"

import $cart from "@/stores/cart"

beforeAll(() => {
  useTestStorageEngine()
})

afterEach(() => {
  cleanTestStorage()
})

it("listens for changes", () => {
  setTestStorageKey("cart", JSON.stringify({ id: "test-cart" }))
  console.log("cart", $cart.get())

  expect($cart.get()).toEqual({ id: "test-cart" })
})
