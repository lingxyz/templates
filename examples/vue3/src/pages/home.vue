/**
 * home表单
 */
<template lang="pug">
el-row
  //- el-col(:span='4')
  //-   el-input(v-model='name' placeholder='请输入姓名')
  //- el-col(:span='4' :offset="1")
  //-   el-input(v-model='name' placeholder='请输入岗位')
  //- el-col(:span='4' :offset="1")
  //-   el-input(v-model='name' placeholder='请输入最后一轮')
  //- el-col(:span='2' :offset="2")
  //-   el-button(type='info' plain) 确认搜索
  el-button(size='mini' plain @click="state.dialogVisible=true") 新增 {{dialogVisible}}
//- 岗位需求列表
el-table(:data='state.tableData' height="800")
  el-table-column(prop='post' label='岗位类型' sortable)
  el-table-column(prop='level' label='职级' sortable)
  el-table-column(prop='project' label='项目' sortable)
  el-table-column(prop='reason' label='原因')
  el-table-column(prop='head' label='负责人' sortable)
  el-table-column(prop='priority' label='优先级')
  el-table-column(prop='status' label='状态' sortable)
  el-table-column(label='操作')
    template(#default='scope')
      el-button(size='mini' @click='handleEdit(scope.$index, scope.row)') 编辑
      el-button(size='mini' type='danger' @click='handleDelete(scope.$index, scope.row)') 删除
  //- el-table-column(prop='firstRound' label='一轮候选人')
  //- el-table-column(prop='secondRound' label='二轮候选人')
  //- el-table-column(prop='toBeEmployed' label='待入职候选人')
//- 新增/编辑岗位弹窗
el-dialog(
  title="新增/编辑岗位需求"
  v-model="state.dialogVisible"
  width="30%"
  :before-close="handleClose")
  el-form(ref="form" :model="state.form" label-width="80px")
    el-form-item(label="类型*")
      el-select(v-model='state.form.post' placeholder='请选择')
        el-option(v-for='item in state.posts' :key='item.value' :label='item.label' :value='item.value')
    el-form-item(label="职级*")
      el-select(v-model='state.form.level' placeholder='请选择')
        el-option(v-for='item in state.levels' :key='item.value' :label='item.label' :value='item.value')
    el-form-item(label="项目*")
      el-select(v-model='state.form.project' placeholder='请选择')
        el-option(v-for='item in state.projects' :key='item.value' :label='item.label' :value='item.value')
  span.dialog-footer(slot='footer')
    el-button(@click='handleClose()') 取 消
    el-button(type='primary' @click="onSubmit(state.form)") 确 定
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance, reactive, onMounted } from 'vue'
import statusVue from './process.vue';

export default defineComponent({
  name: 'Headcount',
  setup() {
    const state = reactive({
      tableData: [],
      name: '',
      dialogVisible: false,
      posts: [{
        value: 'FE',
        label: '前端'
      }, {
        value: 'BE',
        label: '后端'
      }, {
        value: 'QA',
        label: '测试'
      }, {
        value: 'DevOps',
        label: '运维'
      }, {
        value: 'SM',
        label: '敏捷'
      }],
      levels: [{
        value: 4,
        label: 'P4'
      }, {
        value: 3,
        label: 'P3'
      }, {
        value: 2,
        label: 'P2'
      }, {
        value: 1,
        label: 'P1'
      }],
      projects: [{
        value: 'C4I',
        label: 'C4I'
      }, {
        value: 'KA',
        label: 'KA'
      }, {
        value: 'SYJ',
        label: 'SYJ'
      }, {
        value: 'SFA',
        label: 'SFA'
      }],
      form: {
        post: '',
        level: '',
        project: ''
      }
    });
    // fetch headcount list
    const { proxy } = getCurrentInstance();
    (async () => {
      const res = await proxy.$axios.get('http://localhost:3001/headcount')
      state.tableData = res.data.data
    })();
    // submit edit message
    const onSubmit = async (data) => {
      const res = await proxy.$axios.post('http://localhost:3001/headcount/save', data)
      if (res.data.code === 200) {
        if (!data.id) state.tableData.push(data)
        state.dialogVisible = false
        alert(res.data.data)
      }
    }
    const handleClose = async () => {
      state.form = {};
      state.dialogVisible = false;
    }
    // form line action: edit、delete
    const handleEdit = async (index, row) => {
      state.dialogVisible = true
      state.form = row
    }
    const handleDelete = async (index, row) => {
      const res = await proxy.$axios.post('http://localhost:3001/headcount/delete', {id: row.id})
      if (res.data.code === 200) {
        state.tableData.splice(index, 1)
        alert(res.data.data)
      }
    }

    return {
      state,
      onSubmit,
      handleClose,
      handleEdit,
      handleDelete
    }
  }
})
</script>

<style>

</style>
