# Harvest block queue

The harvest queue tracks named orchard blocks and acreage for the current picking plan.

Operators can reverse the order when access conditions change during the day. Each block keeps a crew note so dispatchers can record the meeting point or assignment without leaving the queue.

The reorder test covers the initial sequence and the reverse action. A stable block identity is available through each block's `id` field.
