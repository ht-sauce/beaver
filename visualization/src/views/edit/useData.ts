import { computed, ref } from 'vue'

export type DeviceItem = {
  value: string
  label: string
  px: string
}

// 需要根据设计稿进行调整，暂定如此
export const deviceList = ref<DeviceItem[]>([
  { value: 'PC', label: '电脑', px: '1440px' },
  { value: 'H5', label: '手机', px: '750px' },
  { value: 'PAD', label: '平板', px: '1024px' },
])

export const CurrentDevice = ref<string>(deviceList.value[0].value)

export const CurrentDeviceItem = computed(
  () => deviceList.value.find((li) => li.value === CurrentDevice.value) as DeviceItem,
)
