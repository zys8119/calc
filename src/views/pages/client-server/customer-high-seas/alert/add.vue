<template>
  <div class="add">
    <alert-content text-confirm="保存" @confirm="save">
      <div class="flex gap-30px justify-between">
        <n-form label-align="left" label-placement="left" label-width="120px">
          <n-form-item label="客户logo">
            <n-upload>
              <n-button>
                <template #icon>
                  <svg-icon name="upload"></svg-icon>
                </template>
                上传图片
              </n-button>
            </n-upload>
          </n-form-item>
          <n-form-item label="客户地址">
            <n-input
              v-model:value="formData.address"
              placeholder="请输入客户地址"
            />
          </n-form-item>
          <n-form-item label="跟进阶段">
            <n-select
              v-model:value="formData.address"
              placeholder="请选择跟进阶段"
            />
          </n-form-item>
        </n-form>
        <n-form label-align="left" label-placement="left" label-width="120px">
          <n-form-item label="客户名称" required>
            <n-input
              v-model:value="formData.name"
              placeholder="请输入客户名称"
            />
          </n-form-item>
          <n-form-item label="微信群号">
            <n-input placeholder="请输入微信群号" />
          </n-form-item>
          <n-form-item label="跟进人">
            <n-select placeholder="请选择跟进人" />
          </n-form-item>
        </n-form>
      </div>
      <div class="text-14px font-bold m-y-15px">联系人信息</div>
      <div
        v-for="(item, key) in contactInfoList"
        :key="key"
        :class="{ 'b b-t-solid b-#d8d8d8 b-1px p-t-15px': key > 0 }"
        class="flex gap-30px justify-between"
      >
        <n-form label-align="left" label-placement="left" label-width="120px">
          <n-form-item label="联系人">
            <n-input v-model:value="item.address" placeholder="请输入联系人" />
          </n-form-item>
          <n-form-item label="职务">
            <n-input v-model:value="item.address" placeholder="请输入职务" />
          </n-form-item>
          <n-form-item label="备注">
            <n-input
              v-model:value="item.address"
              :rows="3"
              autosize
              placeholder="请输入备注"
              type="textarea"
            />
          </n-form-item>
        </n-form>
        <n-form label-align="left" label-placement="left" label-width="120px">
          <n-form-item label="联系方式" required>
            <n-input v-model:value="item.name" placeholder="请输入联系人" />
          </n-form-item>
          <n-form-item label="邮箱">
            <n-input v-model:value="item.name" placeholder="请输入邮箱" />
          </n-form-item>
        </n-form>
      </div>
      <n-button text type="primary" @click="addContactUser">
        <template #icon>
          <svg-icon name="add"></svg-icon>
        </template>
        添加联系人信息
      </n-button>
    </alert-content>
  </div>
</template>

<script lang="ts" setup>
const formData = ref({});
const emit = defineEmits(["save"]);
const createContact = () => {
  return {
    name: "",
    phone: "",
    email: "",
    address: "",
  };
};
const contactInfoList = ref([createContact()]);
const addContactUser = () => {
  contactInfoList.value.push(createContact());
};
const save = async () => {
  await $utils.validate(formData.value, {
    name: "客户名称",
  });
  console.log("保存");
  emit("save");
  $alert.dialog.close();
};
</script>

<style lang="less" scoped></style>
