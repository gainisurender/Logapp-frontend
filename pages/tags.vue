<template>
  <div>
    <!-- <UserHeader /> -->
    <div class="row">
      <div class="col-md-4"><h1></h1></div>
      <div class="col-md-5 mt-5 p-3">
        <table class="table table-hover table-responsive">
          <thead>
            <tr>
              <th>
                <b>LogDetails</b>
              </th>
            </tr>
            <tr>
              <th>
                <i
                  class="fa fa-envelope"
                  style="font-size: 24px; color: red"
                ></i>
                <b> Title</b>
                :
                {{ Title }}
              </th>
            </tr>
            <tr>
              <th scope="col" v-if="isVisible">
                <input type="text" class="form-control" v-model="Description" />
              </th>
              <th scope="col" v-else>
                <i class="fa fa-user" style="font-size: 24px"></i>
                <b> Description</b> : {{ Description }}
              </th>
              <!-- <div class="form-group">
                <label for="exampleFormControlTextarea1"
                  >Update Description here</label
                >
                <textarea
                  v-model="newName"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div> -->
              <th scope="col">
                <button v-if="!isVisible" @click="visible" class="bg-info">
                  <i class="fa fa-edit" style="font-size: 16px"></i>Update
                </button>

                <button
                  v-else
                  class="btn btn-success"
                  @click="UpdateDescription"
                >
                  Submit
                </button>
              </th>
            </tr>
            <tr>
              <th>
                <i
                  class="fa fa-envelope"
                  style="font-size: 24px; color: red"
                ></i>
                <b> Stacktrace </b>
                :
                {{ Stacktrace }}
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <div class="col-md-3">
        <tbody>
          <tr>
            <td>
              <b>Tags : </b>
            </td>
          </tr>
          <tr v-for="(tag, index) in $store.state.current_tags" :key="index">
            <td>
              <i class="fas fa-tag" style="font-size: 18px; color: black"></i>
              {{ tag.tagText }}
            </td>
            <td v-if="tag.logId == $store.state.log_id">
              <button
                class="btn btn-button bg-danger"
                @click="deleteTag(tag.id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </div>
      <div class="col-md-4"></div>
    </div>
    <div>
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <div class="form-group">
            <label for="title">Tag</label>
            <input type="text" class="form-control" v-model="tag" />
          </div>

          <div class="text-center mt-4">
            <button type="submit" @click="addTag" class="btn btn-success">
              Add Tag
            </button>
          </div>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      Description: this.$store.state.Description,
      isVisible: false,
      newName: '',
      LogId: this.$route.params.id,
      tag: '',
      deleteTag: '',
    }
  },
  computed: {
    ...mapState(['Description', 'Title', 'Stacktrace']),
  },
  methods: {
    visible() {
      this.isVisible = true
      this.Description = this.$store.state.Description
    },
    UpdateDescription() {
      this.isVisible = false
      console.log(this.Description)
      this.$store.dispatch('updateDescription', {
        description: this.Description,
      })
    },
    async addTag() {
      console.log(this.tag)
      this.$store.commit('setTags', this.tag)
      await this.$store.dispatch('addTag', {
        tag: this.tag,
        logId: this.LogId,
      })
      await this.$store.dispatch('getAllTags', this.LogId)
      this.tag = ''
    },
  },
  async deleteTag(tag_id) {
    await this.$store.dispatch('deleteTag', tag_id)
    await this.$store.dispatch('getAllTags', this.$route.params.id)
  },
  visible() {
    this.isVisible = true
    this.title = this.$store.state.Log
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: lightgreen;
}

.wrapper {
  width: 490px;
  background: #fff;
  border-radius: 10px;
  padding: 18px 25px 20px;
  margin-bottom: 250px;
  /* margin-top: 300px; */
}
.wrapper :where(.title, li, li i) {
  display: flex;
  align-items: center;
}

.wrapper .title h2 {
  font-size: 21px;
  font-weight: 600;
}

.wrapper .content {
  margin: 10px 0;
}

.content p {
  font-size: 15px;
}

.content ul {
  display: flex;
  padding: 7px;
  margin: 12px 0;
  border-radius: 5px;
  border: 1px solid #a6a6a6a6;
}

.content ul li {
  list-style: none;
  margin: 4px 3px;
  border-radius: 5px;
  background: #f2f2f2;
  padding: 5px 8px 5px 10px;
  border: 1px solid #e3d1e1;
}

.content ul li i {
  height: 20px;
  width: 20px;
  font-size: 12px;
  background: #dfdfdf;
  margin-left: 8px;
  border-radius: 50%;
  justify-content: center;
}

.wrapper .details {
  justify-content: space-between;
}

.wrapper .title button {
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  padding: 9px 15px;
  border-radius: 5px;
  background: #5372f0;
}

.form-group {
  margin-top: 150px;
}
</style>