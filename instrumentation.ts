import { registerOTel } from "@vercel/otel";
// import { SamplingDecision } from "@opentelemetry/sdk-trace-base";
// import { trace, Context } from "@opentelemetry/api";

export function register() {
 registerOTel({
  serviceName: "portfolio",
  // traceExporter: "auto",
  // spanProcessors: ["auto"],
 });
}
