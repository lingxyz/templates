package com.example.uniappandroid;

import android.os.Bundle;
import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.android.material.snackbar.Snackbar;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import android.view.View;
import android.view.Menu;
import android.view.MenuItem;
import android.util.Log;

public class MainActivity extends AppCompatActivity {

  @Override
  //应用入口。onCreate 初始化应用程序。
  //onCreate是生命周期。当活动第一次被创建时调用。其它还有onStart, onPause, onStop, onDestroy等。
  //https://www.runoob.com/android/android-acitivities.html
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    Log.d(msg, "The onCreate() event");

    //设置res.layout.activity_main.xml作为页面
    setContentView(R.layout.activity_main);
    //获取res.layout.activity_main.xml中id=toolBar的元素
    Toolbar toolbar = findViewById(R.id.toolbar);
    //重新定义tabbar
    setSupportActionBar(toolbar);
    //获取res.layout.activity_main.xml中id=fab的元素
    FloatingActionButton fab = findViewById(R.id.fab);
    //将fab绑定click事件、回调方法
    fab.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View view) {
        Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
          .setAction("Action", null).show();
      }
    });
  }

  @Override
  public boolean onCreateOptionsMenu(Menu menu) {
    // Inflate the menu; this adds items to the action bar if it is present.
    getMenuInflater().inflate(R.menu.menu_main, menu);
    return true;
  }

  @Override
  public boolean onOptionsItemSelected(MenuItem item) {
    // Handle action bar item clicks here. The action bar will
    // automatically handle clicks on the Home/Up button, so long
    // as you specify a parent activity in AndroidManifest.xml.
    int id = item.getItemId();

    //noinspection SimplifiableIfStatement
    if (id == R.id.action_settings) {
      return true;
    }

    return super.onOptionsItemSelected(item);
  }
}
