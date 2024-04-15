$(document).ready(function () {
  // $("#btn-signup").css("opacity", "0.5");

  //button disable and enable
  $("#cpassword").on("keyup", function () {
    if ($("#cpassword").val() == $("#ipassword").val()) {
      $("#btn-signup").prop("disabled", false);
    } else {
      $("#btn-signup").prop("disabled", true);
    }
  });

  $("#ipassword").on("keyup", function () {
    if ($("#ipassword").val() == $("#cpassword").val()) {
      $("#btn-signup").prop("disabled", false);
    } else {
      $("#btn-signup").prop("disabled", true);
    }
  });

  //button color
  $("#ipassword").on("keyup", function () {
    if ($("#ipassword").val() == $("#cpassword").val()) {
      $("#btn-signup").on("mouseover", function () {
        $("#btn-signup").css("background-color", "#05A3EA");
      });
    } else
      $("#btn-signup").on("mouseout", function () {
        $("#btn-signup").css("background-color", "#08689F");
      });
  });

  $("#cpassword").on("keyup", function () {
    if ($("#cpassword").val() == $("#ipassword").val()) {
      $("#btn-signup").on("mouseover", function () {
        $("#btn-signup").css("background-color", "#05A3EA");
      });
    } else
      $("#btn-signup").on("mouseout", function () {
        $("#btn-signup").css("background-color", "#08689F");
      });
  });

  //message
  $("#ipassword").on("keyup", function () {
    if ($("#ipassword").val() == $("#cpassword").val()) {
      $("#message").text("Passwords match").css("color", "green");
    } else $("#message").text("Passwords do not match").css("color", "red");
  });

  $("#cpassword").on("keyup", function () {
    if ($("#cpassword").val() == $("#ipassword").val()) {
      $("#message").text("Passwords match!").css("color", "green");
    } else $("#message").text("Passwords do not match").css("color", "red");
  });
});
