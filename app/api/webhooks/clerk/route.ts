import { verifyWebhook } from "@clerk/nextjs/webhooks"
import { fetchMutation } from "convex/nextjs"
import { makeFunctionReference, type FunctionReference } from "convex/server"
import { NextRequest } from "next/server"

type UpsertFromClerk = FunctionReference<
  "mutation",
  "public",
  {
    clerkUserId: string
    email?: string
    firstName?: string
    lastName?: string
    imageUrl?: string
    createdAt: number
    updatedAt: number
  },
  null
>

const upsertFromClerk = makeFunctionReference(
  "users:upsertFromClerk",
) as UpsertFromClerk

export async function POST(request: NextRequest) {
  let event

  try {
    event = await verifyWebhook(request)
  } catch {
    return new Response("Webhook verification failed", { status: 400 })
  }

  if (event.type !== "user.created" && event.type !== "user.updated") {
    return Response.json({ received: true })
  }

  const primaryEmail = event.data.email_addresses.find(
    (email) => email.id === event.data.primary_email_address_id,
  )

  await fetchMutation(upsertFromClerk, {
    clerkUserId: event.data.id,
    email: primaryEmail?.email_address,
    firstName: event.data.first_name ?? undefined,
    lastName: event.data.last_name ?? undefined,
    imageUrl: event.data.image_url,
    createdAt: event.data.created_at,
    updatedAt: event.data.updated_at,
  })

  return Response.json({ received: true })
}
