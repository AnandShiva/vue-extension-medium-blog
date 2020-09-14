<template>
    <div id="extension_content">
        Vue Content
    </div>
</template>

<script>
import EditorJS from '@editorjs/editorjs';
export default {
created(){
    window.EditorJSInit = EditorJS;
    const editorJS = new EditorJS({
        /**
         * Id of Element that should contain Editor instance
         */
        holder: 'extension_content'
    });
    }
}
</script>

<style>
.home{
    z-index: 10;
}
</style>