import {
  isRouteErrorResponse
} from "/build/_shared/chunk-3ASZTCA3.js";
import {
  createHotContext
} from "/build/_shared/chunk-JL6WUFSE.js";

// app/lib/utility/errorResponse.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/lib/utility/errorResponse.ts"
  );
  import.meta.hot.lastModified = "1709487786663.544";
}
var isJsonErrorResponse = (value) => {
  return isRouteErrorResponse(value) && "message" in value.data && typeof value.data.message === "string";
};

export {
  isJsonErrorResponse
};
//# sourceMappingURL=/build/_shared/chunk-2PKLFTWB.js.map
